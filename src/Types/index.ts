export * from './Auth'
export * from './GroupMetadata'
export * from './Chat'
export * from './Contact'
export * from './State'
export * from './Message'
export * from './Legacy'
export * from './Socket'
export * from './Events'

import type EventEmitter from "events"
import type NodeCache from 'node-cache'

import { AuthenticationState, AuthenticationCreds } from './Auth'
import { Chat, PresenceData } from './Chat'
import { Contact } from './Contact'
import { ConnectionState } from './State'

import { GroupMetadata, ParticipantAction } from './GroupMetadata'
import { MessageInfoUpdate, MessageUpdateType, WAMessage, WAMessageUpdate, WAMessageKey } from './Message'
import { proto } from '../../WAProto'
import { CommonSocketConfig } from './Socket'

export type SocketConfig = CommonSocketConfig<AuthenticationState> & {
    /** provide a cache to store a user's device list */
    userDevicesCache?: NodeCache
    /** map to store the retry counts for failed messages */
    msgRetryCounterMap?: { [msgId: string]: number }
    /** custom domains to push media via */
    customUploadHosts: string[]
    /** 
     * fetch a message from your store 
     * implement this so that messages failed to send (solves the "this message can take a while" issue) can be retried
     * */
    getMessage: (key: proto.IMessageKey) => Promise<proto.IMessage | undefined>
}

export enum DisconnectReason {
	connectionClosed = 428,
	connectionLost = 408,
    connectionReplaced = 440,
    timedOut = 408,
	loggedOut = 401,
    badSession = 500,
    restartRequired = 410,
    multideviceMismatch = 403
}

export type WAInitResponse = {
    ref: string
    ttl: number
    status: 200
}

type WABusinessHoursConfig = {
    day_of_week: string
    mode: string
    open_time?: number
    close_time?: number
}
export type WABusinessProfile = {
    description: string
    email: string
    business_hours:  {
        timezone: string
        config?:  WABusinessHoursConfig[]
        business_config?: WABusinessHoursConfig[]
    }
    website: string[]
    categories: {
        id: string
        localized_display_name:  string
    }[]
    wid?: string
}

export type CurveKeyPair = { private: Uint8Array; public: Uint8Array }

export type BaileysEventMap<T> = {
    /** connection state has been updated -- WS closed, opened, connecting etc. */
	'connection.update': Partial<ConnectionState>
    /** credentials updated -- some metadata, keys or something */
    'creds.update': Partial<T>
    /** set chats (history sync), messages are reverse chronologically sorted */
    'chats.set': { chats: Chat[], messages: WAMessage[] }
    /** upsert chats */
    'chats.upsert': Chat[]
    /** update the given chats */
    'chats.update': Partial<Chat>[]
    /** delete chats with given ID */
    'chats.delete': string[]
    /** presence of contact in a chat updated */
    'presence.update': { id: string, presences: { [participant: string]: PresenceData }  }

    'contacts.upsert': Contact[]
    'contacts.update': Partial<Contact>[] 
    
    'messages.delete': { keys: WAMessageKey[] } | { jid: string, all: true }
    'messages.update': WAMessageUpdate[]
    /** 
     * add/update the given messages. If they were received while the connection was online, 
     * the update will have type: "notify"
     *  */
    'messages.upsert': { messages: WAMessage[], type: MessageUpdateType }

    'message-info.update': MessageInfoUpdate[]

    'groups.upsert': GroupMetadata[]
    'groups.update': Partial<GroupMetadata>[]
    /** apply an action to participants in a group */
    'group-participants.update': { id: string, participants: string[], action: ParticipantAction }

    'blocklist.set': { blocklist: string[] }
    'blocklist.update': { blocklist: string[], type: 'add' | 'remove' }
}

export interface CommonBaileysEventEmitter<Creds> extends EventEmitter {
	on<T extends keyof BaileysEventMap<Creds>>(event: T, listener: (arg: BaileysEventMap<Creds>[T]) => void): this
    off<T extends keyof BaileysEventMap<Creds>>(event: T, listener: (arg: BaileysEventMap<Creds>[T]) => void): this
    removeAllListeners<T extends keyof BaileysEventMap<Creds>>(event: T): this
	emit<T extends keyof BaileysEventMap<Creds>>(event: T, arg: BaileysEventMap<Creds>[T]): boolean
}

export type BaileysEventEmitter = CommonBaileysEventEmitter<AuthenticationCreds>