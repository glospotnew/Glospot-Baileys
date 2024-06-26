import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace WAE2E. */
export namespace WAE2E {

    /** KeepType enum. */
    enum KeepType {
        UNKNOWN = 0,
        KEEP_FOR_ALL = 1,
        UNDO_KEEP_FOR_ALL = 2
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message conversation */
        conversation?: (string|null);

        /** Message senderKeyDistributionMessage */
        senderKeyDistributionMessage?: (WAE2E.Message.ISenderKeyDistributionMessage|null);

        /** Message imageMessage */
        imageMessage?: (WAE2E.Message.IImageMessage|null);

        /** Message contactMessage */
        contactMessage?: (WAE2E.Message.IContactMessage|null);

        /** Message locationMessage */
        locationMessage?: (WAE2E.Message.ILocationMessage|null);

        /** Message extendedTextMessage */
        extendedTextMessage?: (WAE2E.Message.IExtendedTextMessage|null);

        /** Message documentMessage */
        documentMessage?: (WAE2E.Message.IDocumentMessage|null);

        /** Message audioMessage */
        audioMessage?: (WAE2E.Message.IAudioMessage|null);

        /** Message videoMessage */
        videoMessage?: (WAE2E.Message.IVideoMessage|null);

        /** Message call */
        call?: (WAE2E.Message.ICall|null);

        /** Message chat */
        chat?: (WAE2E.Message.IChat|null);

        /** Message protocolMessage */
        protocolMessage?: (WAE2E.Message.IProtocolMessage|null);

        /** Message contactsArrayMessage */
        contactsArrayMessage?: (WAE2E.Message.IContactsArrayMessage|null);

        /** Message highlyStructuredMessage */
        highlyStructuredMessage?: (WAE2E.Message.IHighlyStructuredMessage|null);

        /** Message fastRatchetKeySenderKeyDistributionMessage */
        fastRatchetKeySenderKeyDistributionMessage?: (WAE2E.Message.ISenderKeyDistributionMessage|null);

        /** Message sendPaymentMessage */
        sendPaymentMessage?: (WAE2E.Message.ISendPaymentMessage|null);

        /** Message liveLocationMessage */
        liveLocationMessage?: (WAE2E.Message.ILiveLocationMessage|null);

        /** Message requestPaymentMessage */
        requestPaymentMessage?: (WAE2E.Message.IRequestPaymentMessage|null);

        /** Message declinePaymentRequestMessage */
        declinePaymentRequestMessage?: (WAE2E.Message.IDeclinePaymentRequestMessage|null);

        /** Message cancelPaymentRequestMessage */
        cancelPaymentRequestMessage?: (WAE2E.Message.ICancelPaymentRequestMessage|null);

        /** Message templateMessage */
        templateMessage?: (WAE2E.Message.ITemplateMessage|null);

        /** Message stickerMessage */
        stickerMessage?: (WAE2E.Message.IStickerMessage|null);

        /** Message groupInviteMessage */
        groupInviteMessage?: (WAE2E.Message.IGroupInviteMessage|null);

        /** Message templateButtonReplyMessage */
        templateButtonReplyMessage?: (WAE2E.Message.ITemplateButtonReplyMessage|null);

        /** Message productMessage */
        productMessage?: (WAE2E.Message.IProductMessage|null);

        /** Message deviceSentMessage */
        deviceSentMessage?: (WAE2E.Message.IDeviceSentMessage|null);

        /** Message messageContextInfo */
        messageContextInfo?: (WAE2E.IMessageContextInfo|null);

        /** Message listMessage */
        listMessage?: (WAE2E.Message.IListMessage|null);

        /** Message viewOnceMessage */
        viewOnceMessage?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message orderMessage */
        orderMessage?: (WAE2E.Message.IOrderMessage|null);

        /** Message listResponseMessage */
        listResponseMessage?: (WAE2E.Message.IListResponseMessage|null);

        /** Message ephemeralMessage */
        ephemeralMessage?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message invoiceMessage */
        invoiceMessage?: (WAE2E.Message.IInvoiceMessage|null);

        /** Message buttonsMessage */
        buttonsMessage?: (WAE2E.Message.IButtonsMessage|null);

        /** Message buttonsResponseMessage */
        buttonsResponseMessage?: (WAE2E.Message.IButtonsResponseMessage|null);

        /** Message paymentInviteMessage */
        paymentInviteMessage?: (WAE2E.Message.IPaymentInviteMessage|null);

        /** Message interactiveMessage */
        interactiveMessage?: (WAE2E.Message.IInteractiveMessage|null);

        /** Message reactionMessage */
        reactionMessage?: (WAE2E.Message.IReactionMessage|null);

        /** Message stickerSyncRmrMessage */
        stickerSyncRmrMessage?: (WAE2E.Message.IStickerSyncRMRMessage|null);

        /** Message interactiveResponseMessage */
        interactiveResponseMessage?: (WAE2E.Message.IInteractiveResponseMessage|null);

        /** Message pollCreationMessage */
        pollCreationMessage?: (WAE2E.Message.IPollCreationMessage|null);

        /** Message pollUpdateMessage */
        pollUpdateMessage?: (WAE2E.Message.IPollUpdateMessage|null);

        /** Message keepInChatMessage */
        keepInChatMessage?: (WAE2E.Message.IKeepInChatMessage|null);

        /** Message documentWithCaptionMessage */
        documentWithCaptionMessage?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message requestPhoneNumberMessage */
        requestPhoneNumberMessage?: (WAE2E.Message.IRequestPhoneNumberMessage|null);

        /** Message viewOnceMessageV2 */
        viewOnceMessageV2?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message encReactionMessage */
        encReactionMessage?: (WAE2E.Message.IEncReactionMessage|null);

        /** Message editedMessage */
        editedMessage?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message viewOnceMessageV2Extension */
        viewOnceMessageV2Extension?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message pollCreationMessageV2 */
        pollCreationMessageV2?: (WAE2E.Message.IPollCreationMessage|null);

        /** Message scheduledCallCreationMessage */
        scheduledCallCreationMessage?: (WAE2E.Message.IScheduledCallCreationMessage|null);

        /** Message groupMentionedMessage */
        groupMentionedMessage?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message pinInChatMessage */
        pinInChatMessage?: (WAE2E.Message.IPinInChatMessage|null);

        /** Message pollCreationMessageV3 */
        pollCreationMessageV3?: (WAE2E.Message.IPollCreationMessage|null);

        /** Message scheduledCallEditMessage */
        scheduledCallEditMessage?: (WAE2E.Message.IScheduledCallEditMessage|null);

        /** Message ptvMessage */
        ptvMessage?: (WAE2E.Message.IVideoMessage|null);

        /** Message botInvokeMessage */
        botInvokeMessage?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message callLogMesssage */
        callLogMesssage?: (WAE2E.Message.ICallLogMessage|null);

        /** Message messageHistoryBundle */
        messageHistoryBundle?: (WAE2E.Message.IMessageHistoryBundle|null);

        /** Message encCommentMessage */
        encCommentMessage?: (WAE2E.Message.IEncCommentMessage|null);

        /** Message bcallMessage */
        bcallMessage?: (WAE2E.Message.IBCallMessage|null);

        /** Message lottieStickerMessage */
        lottieStickerMessage?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message eventMessage */
        eventMessage?: (WAE2E.Message.IEventMessage|null);

        /** Message encEventResponseMessage */
        encEventResponseMessage?: (WAE2E.Message.IEncEventResponseMessage|null);

        /** Message commentMessage */
        commentMessage?: (WAE2E.Message.ICommentMessage|null);

        /** Message newsletterAdminInviteMessage */
        newsletterAdminInviteMessage?: (WAE2E.Message.INewsletterAdminInviteMessage|null);

        /** Message placeholderMessage */
        placeholderMessage?: (WAE2E.Message.IPlaceholderMessage|null);

        /** Message secretEncryptedMessage */
        secretEncryptedMessage?: (WAE2E.Message.ISecretEncryptedMessage|null);

        /** Message albumMessage */
        albumMessage?: (WAE2E.Message.IAlbumMessage|null);

        /** Message pollResultSnapshotMessage */
        pollResultSnapshotMessage?: (WAE2E.Message.IPollResultSnapshotMessage|null);

        /** Message eventCoverImage */
        eventCoverImage?: (WAE2E.Message.IFutureProofMessage|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IMessage);

        /** Message conversation. */
        public conversation: string;

        /** Message senderKeyDistributionMessage. */
        public senderKeyDistributionMessage?: (WAE2E.Message.ISenderKeyDistributionMessage|null);

        /** Message imageMessage. */
        public imageMessage?: (WAE2E.Message.IImageMessage|null);

        /** Message contactMessage. */
        public contactMessage?: (WAE2E.Message.IContactMessage|null);

        /** Message locationMessage. */
        public locationMessage?: (WAE2E.Message.ILocationMessage|null);

        /** Message extendedTextMessage. */
        public extendedTextMessage?: (WAE2E.Message.IExtendedTextMessage|null);

        /** Message documentMessage. */
        public documentMessage?: (WAE2E.Message.IDocumentMessage|null);

        /** Message audioMessage. */
        public audioMessage?: (WAE2E.Message.IAudioMessage|null);

        /** Message videoMessage. */
        public videoMessage?: (WAE2E.Message.IVideoMessage|null);

        /** Message call. */
        public call?: (WAE2E.Message.ICall|null);

        /** Message chat. */
        public chat?: (WAE2E.Message.IChat|null);

        /** Message protocolMessage. */
        public protocolMessage?: (WAE2E.Message.IProtocolMessage|null);

        /** Message contactsArrayMessage. */
        public contactsArrayMessage?: (WAE2E.Message.IContactsArrayMessage|null);

        /** Message highlyStructuredMessage. */
        public highlyStructuredMessage?: (WAE2E.Message.IHighlyStructuredMessage|null);

        /** Message fastRatchetKeySenderKeyDistributionMessage. */
        public fastRatchetKeySenderKeyDistributionMessage?: (WAE2E.Message.ISenderKeyDistributionMessage|null);

        /** Message sendPaymentMessage. */
        public sendPaymentMessage?: (WAE2E.Message.ISendPaymentMessage|null);

        /** Message liveLocationMessage. */
        public liveLocationMessage?: (WAE2E.Message.ILiveLocationMessage|null);

        /** Message requestPaymentMessage. */
        public requestPaymentMessage?: (WAE2E.Message.IRequestPaymentMessage|null);

        /** Message declinePaymentRequestMessage. */
        public declinePaymentRequestMessage?: (WAE2E.Message.IDeclinePaymentRequestMessage|null);

        /** Message cancelPaymentRequestMessage. */
        public cancelPaymentRequestMessage?: (WAE2E.Message.ICancelPaymentRequestMessage|null);

        /** Message templateMessage. */
        public templateMessage?: (WAE2E.Message.ITemplateMessage|null);

        /** Message stickerMessage. */
        public stickerMessage?: (WAE2E.Message.IStickerMessage|null);

        /** Message groupInviteMessage. */
        public groupInviteMessage?: (WAE2E.Message.IGroupInviteMessage|null);

        /** Message templateButtonReplyMessage. */
        public templateButtonReplyMessage?: (WAE2E.Message.ITemplateButtonReplyMessage|null);

        /** Message productMessage. */
        public productMessage?: (WAE2E.Message.IProductMessage|null);

        /** Message deviceSentMessage. */
        public deviceSentMessage?: (WAE2E.Message.IDeviceSentMessage|null);

        /** Message messageContextInfo. */
        public messageContextInfo?: (WAE2E.IMessageContextInfo|null);

        /** Message listMessage. */
        public listMessage?: (WAE2E.Message.IListMessage|null);

        /** Message viewOnceMessage. */
        public viewOnceMessage?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message orderMessage. */
        public orderMessage?: (WAE2E.Message.IOrderMessage|null);

        /** Message listResponseMessage. */
        public listResponseMessage?: (WAE2E.Message.IListResponseMessage|null);

        /** Message ephemeralMessage. */
        public ephemeralMessage?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message invoiceMessage. */
        public invoiceMessage?: (WAE2E.Message.IInvoiceMessage|null);

        /** Message buttonsMessage. */
        public buttonsMessage?: (WAE2E.Message.IButtonsMessage|null);

        /** Message buttonsResponseMessage. */
        public buttonsResponseMessage?: (WAE2E.Message.IButtonsResponseMessage|null);

        /** Message paymentInviteMessage. */
        public paymentInviteMessage?: (WAE2E.Message.IPaymentInviteMessage|null);

        /** Message interactiveMessage. */
        public interactiveMessage?: (WAE2E.Message.IInteractiveMessage|null);

        /** Message reactionMessage. */
        public reactionMessage?: (WAE2E.Message.IReactionMessage|null);

        /** Message stickerSyncRmrMessage. */
        public stickerSyncRmrMessage?: (WAE2E.Message.IStickerSyncRMRMessage|null);

        /** Message interactiveResponseMessage. */
        public interactiveResponseMessage?: (WAE2E.Message.IInteractiveResponseMessage|null);

        /** Message pollCreationMessage. */
        public pollCreationMessage?: (WAE2E.Message.IPollCreationMessage|null);

        /** Message pollUpdateMessage. */
        public pollUpdateMessage?: (WAE2E.Message.IPollUpdateMessage|null);

        /** Message keepInChatMessage. */
        public keepInChatMessage?: (WAE2E.Message.IKeepInChatMessage|null);

        /** Message documentWithCaptionMessage. */
        public documentWithCaptionMessage?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message requestPhoneNumberMessage. */
        public requestPhoneNumberMessage?: (WAE2E.Message.IRequestPhoneNumberMessage|null);

        /** Message viewOnceMessageV2. */
        public viewOnceMessageV2?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message encReactionMessage. */
        public encReactionMessage?: (WAE2E.Message.IEncReactionMessage|null);

        /** Message editedMessage. */
        public editedMessage?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message viewOnceMessageV2Extension. */
        public viewOnceMessageV2Extension?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message pollCreationMessageV2. */
        public pollCreationMessageV2?: (WAE2E.Message.IPollCreationMessage|null);

        /** Message scheduledCallCreationMessage. */
        public scheduledCallCreationMessage?: (WAE2E.Message.IScheduledCallCreationMessage|null);

        /** Message groupMentionedMessage. */
        public groupMentionedMessage?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message pinInChatMessage. */
        public pinInChatMessage?: (WAE2E.Message.IPinInChatMessage|null);

        /** Message pollCreationMessageV3. */
        public pollCreationMessageV3?: (WAE2E.Message.IPollCreationMessage|null);

        /** Message scheduledCallEditMessage. */
        public scheduledCallEditMessage?: (WAE2E.Message.IScheduledCallEditMessage|null);

        /** Message ptvMessage. */
        public ptvMessage?: (WAE2E.Message.IVideoMessage|null);

        /** Message botInvokeMessage. */
        public botInvokeMessage?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message callLogMesssage. */
        public callLogMesssage?: (WAE2E.Message.ICallLogMessage|null);

        /** Message messageHistoryBundle. */
        public messageHistoryBundle?: (WAE2E.Message.IMessageHistoryBundle|null);

        /** Message encCommentMessage. */
        public encCommentMessage?: (WAE2E.Message.IEncCommentMessage|null);

        /** Message bcallMessage. */
        public bcallMessage?: (WAE2E.Message.IBCallMessage|null);

        /** Message lottieStickerMessage. */
        public lottieStickerMessage?: (WAE2E.Message.IFutureProofMessage|null);

        /** Message eventMessage. */
        public eventMessage?: (WAE2E.Message.IEventMessage|null);

        /** Message encEventResponseMessage. */
        public encEventResponseMessage?: (WAE2E.Message.IEncEventResponseMessage|null);

        /** Message commentMessage. */
        public commentMessage?: (WAE2E.Message.ICommentMessage|null);

        /** Message newsletterAdminInviteMessage. */
        public newsletterAdminInviteMessage?: (WAE2E.Message.INewsletterAdminInviteMessage|null);

        /** Message placeholderMessage. */
        public placeholderMessage?: (WAE2E.Message.IPlaceholderMessage|null);

        /** Message secretEncryptedMessage. */
        public secretEncryptedMessage?: (WAE2E.Message.ISecretEncryptedMessage|null);

        /** Message albumMessage. */
        public albumMessage?: (WAE2E.Message.IAlbumMessage|null);

        /** Message pollResultSnapshotMessage. */
        public pollResultSnapshotMessage?: (WAE2E.Message.IPollResultSnapshotMessage|null);

        /** Message eventCoverImage. */
        public eventCoverImage?: (WAE2E.Message.IFutureProofMessage|null);

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: WAE2E.IMessage): WAE2E.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link WAE2E.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link WAE2E.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Message {

        /** PeerDataOperationRequestType enum. */
        enum PeerDataOperationRequestType {
            UPLOAD_STICKER = 0,
            SEND_RECENT_STICKER_BOOTSTRAP = 1,
            GENERATE_LINK_PREVIEW = 2,
            HISTORY_SYNC_ON_DEMAND = 3,
            PLACEHOLDER_MESSAGE_RESEND = 4,
            WAFFLE_LINKING_NONCE_FETCH = 5
        }

        /** Properties of a PlaceholderMessage. */
        interface IPlaceholderMessage {

            /** PlaceholderMessage type */
            type?: (WAE2E.Message.PlaceholderMessage.PlaceholderType|null);
        }

        /** Represents a PlaceholderMessage. */
        class PlaceholderMessage implements IPlaceholderMessage {

            /**
             * Constructs a new PlaceholderMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IPlaceholderMessage);

            /** PlaceholderMessage type. */
            public type: WAE2E.Message.PlaceholderMessage.PlaceholderType;

            /**
             * Creates a new PlaceholderMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlaceholderMessage instance
             */
            public static create(properties?: WAE2E.Message.IPlaceholderMessage): WAE2E.Message.PlaceholderMessage;

            /**
             * Encodes the specified PlaceholderMessage message. Does not implicitly {@link WAE2E.Message.PlaceholderMessage.verify|verify} messages.
             * @param message PlaceholderMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IPlaceholderMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlaceholderMessage message, length delimited. Does not implicitly {@link WAE2E.Message.PlaceholderMessage.verify|verify} messages.
             * @param message PlaceholderMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IPlaceholderMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlaceholderMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlaceholderMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PlaceholderMessage;

            /**
             * Decodes a PlaceholderMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlaceholderMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PlaceholderMessage;

            /**
             * Verifies a PlaceholderMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlaceholderMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlaceholderMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.PlaceholderMessage;

            /**
             * Creates a plain object from a PlaceholderMessage message. Also converts values to other types if specified.
             * @param message PlaceholderMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.PlaceholderMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlaceholderMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlaceholderMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PlaceholderMessage {

            /** PlaceholderType enum. */
            enum PlaceholderType {
                MASK_LINKED_DEVICES = 0
            }
        }

        /** Properties of a BCallMessage. */
        interface IBCallMessage {

            /** BCallMessage sessionID */
            sessionID?: (string|null);

            /** BCallMessage mediaType */
            mediaType?: (WAE2E.Message.BCallMessage.MediaType|null);

            /** BCallMessage masterKey */
            masterKey?: (Uint8Array|null);

            /** BCallMessage caption */
            caption?: (string|null);
        }

        /** Represents a BCallMessage. */
        class BCallMessage implements IBCallMessage {

            /**
             * Constructs a new BCallMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IBCallMessage);

            /** BCallMessage sessionID. */
            public sessionID: string;

            /** BCallMessage mediaType. */
            public mediaType: WAE2E.Message.BCallMessage.MediaType;

            /** BCallMessage masterKey. */
            public masterKey: Uint8Array;

            /** BCallMessage caption. */
            public caption: string;

            /**
             * Creates a new BCallMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BCallMessage instance
             */
            public static create(properties?: WAE2E.Message.IBCallMessage): WAE2E.Message.BCallMessage;

            /**
             * Encodes the specified BCallMessage message. Does not implicitly {@link WAE2E.Message.BCallMessage.verify|verify} messages.
             * @param message BCallMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IBCallMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BCallMessage message, length delimited. Does not implicitly {@link WAE2E.Message.BCallMessage.verify|verify} messages.
             * @param message BCallMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IBCallMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BCallMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BCallMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.BCallMessage;

            /**
             * Decodes a BCallMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BCallMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.BCallMessage;

            /**
             * Verifies a BCallMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BCallMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BCallMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.BCallMessage;

            /**
             * Creates a plain object from a BCallMessage message. Also converts values to other types if specified.
             * @param message BCallMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.BCallMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BCallMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BCallMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BCallMessage {

            /** MediaType enum. */
            enum MediaType {
                UNKNOWN = 0,
                AUDIO = 1,
                VIDEO = 2
            }
        }

        /** Properties of a CallLogMessage. */
        interface ICallLogMessage {

            /** CallLogMessage isVideo */
            isVideo?: (boolean|null);

            /** CallLogMessage callOutcome */
            callOutcome?: (WAE2E.Message.CallLogMessage.CallOutcome|null);

            /** CallLogMessage durationSecs */
            durationSecs?: (number|Long|null);

            /** CallLogMessage callType */
            callType?: (WAE2E.Message.CallLogMessage.CallType|null);

            /** CallLogMessage participants */
            participants?: (WAE2E.Message.CallLogMessage.ICallParticipant[]|null);
        }

        /** Represents a CallLogMessage. */
        class CallLogMessage implements ICallLogMessage {

            /**
             * Constructs a new CallLogMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.ICallLogMessage);

            /** CallLogMessage isVideo. */
            public isVideo: boolean;

            /** CallLogMessage callOutcome. */
            public callOutcome: WAE2E.Message.CallLogMessage.CallOutcome;

            /** CallLogMessage durationSecs. */
            public durationSecs: (number|Long);

            /** CallLogMessage callType. */
            public callType: WAE2E.Message.CallLogMessage.CallType;

            /** CallLogMessage participants. */
            public participants: WAE2E.Message.CallLogMessage.ICallParticipant[];

            /**
             * Creates a new CallLogMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CallLogMessage instance
             */
            public static create(properties?: WAE2E.Message.ICallLogMessage): WAE2E.Message.CallLogMessage;

            /**
             * Encodes the specified CallLogMessage message. Does not implicitly {@link WAE2E.Message.CallLogMessage.verify|verify} messages.
             * @param message CallLogMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.ICallLogMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CallLogMessage message, length delimited. Does not implicitly {@link WAE2E.Message.CallLogMessage.verify|verify} messages.
             * @param message CallLogMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.ICallLogMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CallLogMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CallLogMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.CallLogMessage;

            /**
             * Decodes a CallLogMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CallLogMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.CallLogMessage;

            /**
             * Verifies a CallLogMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CallLogMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CallLogMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.CallLogMessage;

            /**
             * Creates a plain object from a CallLogMessage message. Also converts values to other types if specified.
             * @param message CallLogMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.CallLogMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CallLogMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CallLogMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace CallLogMessage {

            /** CallOutcome enum. */
            enum CallOutcome {
                CONNECTED = 0,
                MISSED = 1,
                FAILED = 2,
                REJECTED = 3,
                ACCEPTED_ELSEWHERE = 4,
                ONGOING = 5,
                SILENCED_BY_DND = 6,
                SILENCED_UNKNOWN_CALLER = 7
            }

            /** CallType enum. */
            enum CallType {
                REGULAR = 0,
                SCHEDULED_CALL = 1,
                VOICE_CHAT = 2
            }

            /** Properties of a CallParticipant. */
            interface ICallParticipant {

                /** CallParticipant JID */
                JID?: (string|null);

                /** CallParticipant callOutcome */
                callOutcome?: (WAE2E.Message.CallLogMessage.CallOutcome|null);
            }

            /** Represents a CallParticipant. */
            class CallParticipant implements ICallParticipant {

                /**
                 * Constructs a new CallParticipant.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.CallLogMessage.ICallParticipant);

                /** CallParticipant JID. */
                public JID: string;

                /** CallParticipant callOutcome. */
                public callOutcome: WAE2E.Message.CallLogMessage.CallOutcome;

                /**
                 * Creates a new CallParticipant instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CallParticipant instance
                 */
                public static create(properties?: WAE2E.Message.CallLogMessage.ICallParticipant): WAE2E.Message.CallLogMessage.CallParticipant;

                /**
                 * Encodes the specified CallParticipant message. Does not implicitly {@link WAE2E.Message.CallLogMessage.CallParticipant.verify|verify} messages.
                 * @param message CallParticipant message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.CallLogMessage.ICallParticipant, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CallParticipant message, length delimited. Does not implicitly {@link WAE2E.Message.CallLogMessage.CallParticipant.verify|verify} messages.
                 * @param message CallParticipant message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.CallLogMessage.ICallParticipant, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CallParticipant message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CallParticipant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.CallLogMessage.CallParticipant;

                /**
                 * Decodes a CallParticipant message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CallParticipant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.CallLogMessage.CallParticipant;

                /**
                 * Verifies a CallParticipant message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CallParticipant message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CallParticipant
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.CallLogMessage.CallParticipant;

                /**
                 * Creates a plain object from a CallParticipant message. Also converts values to other types if specified.
                 * @param message CallParticipant
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.CallLogMessage.CallParticipant, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CallParticipant to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CallParticipant
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a ScheduledCallEditMessage. */
        interface IScheduledCallEditMessage {

            /** ScheduledCallEditMessage key */
            key?: (WAProtocol.IMessageKey|null);

            /** ScheduledCallEditMessage editType */
            editType?: (WAE2E.Message.ScheduledCallEditMessage.EditType|null);
        }

        /** Represents a ScheduledCallEditMessage. */
        class ScheduledCallEditMessage implements IScheduledCallEditMessage {

            /**
             * Constructs a new ScheduledCallEditMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IScheduledCallEditMessage);

            /** ScheduledCallEditMessage key. */
            public key?: (WAProtocol.IMessageKey|null);

            /** ScheduledCallEditMessage editType. */
            public editType: WAE2E.Message.ScheduledCallEditMessage.EditType;

            /**
             * Creates a new ScheduledCallEditMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScheduledCallEditMessage instance
             */
            public static create(properties?: WAE2E.Message.IScheduledCallEditMessage): WAE2E.Message.ScheduledCallEditMessage;

            /**
             * Encodes the specified ScheduledCallEditMessage message. Does not implicitly {@link WAE2E.Message.ScheduledCallEditMessage.verify|verify} messages.
             * @param message ScheduledCallEditMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IScheduledCallEditMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScheduledCallEditMessage message, length delimited. Does not implicitly {@link WAE2E.Message.ScheduledCallEditMessage.verify|verify} messages.
             * @param message ScheduledCallEditMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IScheduledCallEditMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScheduledCallEditMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScheduledCallEditMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ScheduledCallEditMessage;

            /**
             * Decodes a ScheduledCallEditMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScheduledCallEditMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ScheduledCallEditMessage;

            /**
             * Verifies a ScheduledCallEditMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScheduledCallEditMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScheduledCallEditMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.ScheduledCallEditMessage;

            /**
             * Creates a plain object from a ScheduledCallEditMessage message. Also converts values to other types if specified.
             * @param message ScheduledCallEditMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.ScheduledCallEditMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScheduledCallEditMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ScheduledCallEditMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ScheduledCallEditMessage {

            /** EditType enum. */
            enum EditType {
                UNKNOWN = 0,
                CANCEL = 1
            }
        }

        /** Properties of a ScheduledCallCreationMessage. */
        interface IScheduledCallCreationMessage {

            /** ScheduledCallCreationMessage scheduledTimestampMS */
            scheduledTimestampMS?: (number|Long|null);

            /** ScheduledCallCreationMessage callType */
            callType?: (WAE2E.Message.ScheduledCallCreationMessage.CallType|null);

            /** ScheduledCallCreationMessage title */
            title?: (string|null);
        }

        /** Represents a ScheduledCallCreationMessage. */
        class ScheduledCallCreationMessage implements IScheduledCallCreationMessage {

            /**
             * Constructs a new ScheduledCallCreationMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IScheduledCallCreationMessage);

            /** ScheduledCallCreationMessage scheduledTimestampMS. */
            public scheduledTimestampMS: (number|Long);

            /** ScheduledCallCreationMessage callType. */
            public callType: WAE2E.Message.ScheduledCallCreationMessage.CallType;

            /** ScheduledCallCreationMessage title. */
            public title: string;

            /**
             * Creates a new ScheduledCallCreationMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScheduledCallCreationMessage instance
             */
            public static create(properties?: WAE2E.Message.IScheduledCallCreationMessage): WAE2E.Message.ScheduledCallCreationMessage;

            /**
             * Encodes the specified ScheduledCallCreationMessage message. Does not implicitly {@link WAE2E.Message.ScheduledCallCreationMessage.verify|verify} messages.
             * @param message ScheduledCallCreationMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IScheduledCallCreationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScheduledCallCreationMessage message, length delimited. Does not implicitly {@link WAE2E.Message.ScheduledCallCreationMessage.verify|verify} messages.
             * @param message ScheduledCallCreationMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IScheduledCallCreationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScheduledCallCreationMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScheduledCallCreationMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ScheduledCallCreationMessage;

            /**
             * Decodes a ScheduledCallCreationMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScheduledCallCreationMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ScheduledCallCreationMessage;

            /**
             * Verifies a ScheduledCallCreationMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScheduledCallCreationMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScheduledCallCreationMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.ScheduledCallCreationMessage;

            /**
             * Creates a plain object from a ScheduledCallCreationMessage message. Also converts values to other types if specified.
             * @param message ScheduledCallCreationMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.ScheduledCallCreationMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScheduledCallCreationMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ScheduledCallCreationMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ScheduledCallCreationMessage {

            /** CallType enum. */
            enum CallType {
                UNKNOWN = 0,
                VOICE = 1,
                VIDEO = 2
            }
        }

        /** Properties of an EventResponseMessage. */
        interface IEventResponseMessage {

            /** EventResponseMessage response */
            response?: (WAE2E.Message.EventResponseMessage.EventResponseType|null);

            /** EventResponseMessage timestampMS */
            timestampMS?: (number|Long|null);

            /** EventResponseMessage extraGuestCount */
            extraGuestCount?: (number|null);
        }

        /** Represents an EventResponseMessage. */
        class EventResponseMessage implements IEventResponseMessage {

            /**
             * Constructs a new EventResponseMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IEventResponseMessage);

            /** EventResponseMessage response. */
            public response: WAE2E.Message.EventResponseMessage.EventResponseType;

            /** EventResponseMessage timestampMS. */
            public timestampMS: (number|Long);

            /** EventResponseMessage extraGuestCount. */
            public extraGuestCount: number;

            /**
             * Creates a new EventResponseMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EventResponseMessage instance
             */
            public static create(properties?: WAE2E.Message.IEventResponseMessage): WAE2E.Message.EventResponseMessage;

            /**
             * Encodes the specified EventResponseMessage message. Does not implicitly {@link WAE2E.Message.EventResponseMessage.verify|verify} messages.
             * @param message EventResponseMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IEventResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EventResponseMessage message, length delimited. Does not implicitly {@link WAE2E.Message.EventResponseMessage.verify|verify} messages.
             * @param message EventResponseMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IEventResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EventResponseMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EventResponseMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.EventResponseMessage;

            /**
             * Decodes an EventResponseMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EventResponseMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.EventResponseMessage;

            /**
             * Verifies an EventResponseMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EventResponseMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EventResponseMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.EventResponseMessage;

            /**
             * Creates a plain object from an EventResponseMessage message. Also converts values to other types if specified.
             * @param message EventResponseMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.EventResponseMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EventResponseMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EventResponseMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EventResponseMessage {

            /** EventResponseType enum. */
            enum EventResponseType {
                UNKNOWN = 0,
                GOING = 1,
                NOT_GOING = 2,
                MAYBE = 3
            }
        }

        /** Properties of a PinInChatMessage. */
        interface IPinInChatMessage {

            /** PinInChatMessage key */
            key?: (WAProtocol.IMessageKey|null);

            /** PinInChatMessage type */
            type?: (WAE2E.Message.PinInChatMessage.Type|null);

            /** PinInChatMessage senderTimestampMS */
            senderTimestampMS?: (number|Long|null);
        }

        /** Represents a PinInChatMessage. */
        class PinInChatMessage implements IPinInChatMessage {

            /**
             * Constructs a new PinInChatMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IPinInChatMessage);

            /** PinInChatMessage key. */
            public key?: (WAProtocol.IMessageKey|null);

            /** PinInChatMessage type. */
            public type: WAE2E.Message.PinInChatMessage.Type;

            /** PinInChatMessage senderTimestampMS. */
            public senderTimestampMS: (number|Long);

            /**
             * Creates a new PinInChatMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PinInChatMessage instance
             */
            public static create(properties?: WAE2E.Message.IPinInChatMessage): WAE2E.Message.PinInChatMessage;

            /**
             * Encodes the specified PinInChatMessage message. Does not implicitly {@link WAE2E.Message.PinInChatMessage.verify|verify} messages.
             * @param message PinInChatMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IPinInChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PinInChatMessage message, length delimited. Does not implicitly {@link WAE2E.Message.PinInChatMessage.verify|verify} messages.
             * @param message PinInChatMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IPinInChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PinInChatMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PinInChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PinInChatMessage;

            /**
             * Decodes a PinInChatMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PinInChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PinInChatMessage;

            /**
             * Verifies a PinInChatMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PinInChatMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PinInChatMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.PinInChatMessage;

            /**
             * Creates a plain object from a PinInChatMessage message. Also converts values to other types if specified.
             * @param message PinInChatMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.PinInChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PinInChatMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PinInChatMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PinInChatMessage {

            /** Type enum. */
            enum Type {
                UNKNOWN_TYPE = 0,
                PIN_FOR_ALL = 1,
                UNPIN_FOR_ALL = 2
            }
        }

        /** Properties of a ButtonsResponseMessage. */
        interface IButtonsResponseMessage {

            /** ButtonsResponseMessage selectedDisplayText */
            selectedDisplayText?: (string|null);

            /** ButtonsResponseMessage selectedButtonID */
            selectedButtonID?: (string|null);

            /** ButtonsResponseMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** ButtonsResponseMessage type */
            type?: (WAE2E.Message.ButtonsResponseMessage.Type|null);
        }

        /** Represents a ButtonsResponseMessage. */
        class ButtonsResponseMessage implements IButtonsResponseMessage {

            /**
             * Constructs a new ButtonsResponseMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IButtonsResponseMessage);

            /** ButtonsResponseMessage selectedDisplayText. */
            public selectedDisplayText?: (string|null);

            /** ButtonsResponseMessage selectedButtonID. */
            public selectedButtonID: string;

            /** ButtonsResponseMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** ButtonsResponseMessage type. */
            public type: WAE2E.Message.ButtonsResponseMessage.Type;

            /** ButtonsResponseMessage response. */
            public response?: "selectedDisplayText";

            /**
             * Creates a new ButtonsResponseMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ButtonsResponseMessage instance
             */
            public static create(properties?: WAE2E.Message.IButtonsResponseMessage): WAE2E.Message.ButtonsResponseMessage;

            /**
             * Encodes the specified ButtonsResponseMessage message. Does not implicitly {@link WAE2E.Message.ButtonsResponseMessage.verify|verify} messages.
             * @param message ButtonsResponseMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IButtonsResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ButtonsResponseMessage message, length delimited. Does not implicitly {@link WAE2E.Message.ButtonsResponseMessage.verify|verify} messages.
             * @param message ButtonsResponseMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IButtonsResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ButtonsResponseMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ButtonsResponseMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ButtonsResponseMessage;

            /**
             * Decodes a ButtonsResponseMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ButtonsResponseMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ButtonsResponseMessage;

            /**
             * Verifies a ButtonsResponseMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ButtonsResponseMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ButtonsResponseMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.ButtonsResponseMessage;

            /**
             * Creates a plain object from a ButtonsResponseMessage message. Also converts values to other types if specified.
             * @param message ButtonsResponseMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.ButtonsResponseMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ButtonsResponseMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ButtonsResponseMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ButtonsResponseMessage {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                DISPLAY_TEXT = 1
            }
        }

        /** Properties of a ButtonsMessage. */
        interface IButtonsMessage {

            /** ButtonsMessage text */
            text?: (string|null);

            /** ButtonsMessage documentMessage */
            documentMessage?: (WAE2E.Message.IDocumentMessage|null);

            /** ButtonsMessage imageMessage */
            imageMessage?: (WAE2E.Message.IImageMessage|null);

            /** ButtonsMessage videoMessage */
            videoMessage?: (WAE2E.Message.IVideoMessage|null);

            /** ButtonsMessage locationMessage */
            locationMessage?: (WAE2E.Message.ILocationMessage|null);

            /** ButtonsMessage contentText */
            contentText?: (string|null);

            /** ButtonsMessage footerText */
            footerText?: (string|null);

            /** ButtonsMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** ButtonsMessage buttons */
            buttons?: (WAE2E.Message.ButtonsMessage.IButton[]|null);

            /** ButtonsMessage headerType */
            headerType?: (WAE2E.Message.ButtonsMessage.HeaderType|null);
        }

        /** Represents a ButtonsMessage. */
        class ButtonsMessage implements IButtonsMessage {

            /**
             * Constructs a new ButtonsMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IButtonsMessage);

            /** ButtonsMessage text. */
            public text?: (string|null);

            /** ButtonsMessage documentMessage. */
            public documentMessage?: (WAE2E.Message.IDocumentMessage|null);

            /** ButtonsMessage imageMessage. */
            public imageMessage?: (WAE2E.Message.IImageMessage|null);

            /** ButtonsMessage videoMessage. */
            public videoMessage?: (WAE2E.Message.IVideoMessage|null);

            /** ButtonsMessage locationMessage. */
            public locationMessage?: (WAE2E.Message.ILocationMessage|null);

            /** ButtonsMessage contentText. */
            public contentText: string;

            /** ButtonsMessage footerText. */
            public footerText: string;

            /** ButtonsMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** ButtonsMessage buttons. */
            public buttons: WAE2E.Message.ButtonsMessage.IButton[];

            /** ButtonsMessage headerType. */
            public headerType: WAE2E.Message.ButtonsMessage.HeaderType;

            /** ButtonsMessage header. */
            public header?: ("text"|"documentMessage"|"imageMessage"|"videoMessage"|"locationMessage");

            /**
             * Creates a new ButtonsMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ButtonsMessage instance
             */
            public static create(properties?: WAE2E.Message.IButtonsMessage): WAE2E.Message.ButtonsMessage;

            /**
             * Encodes the specified ButtonsMessage message. Does not implicitly {@link WAE2E.Message.ButtonsMessage.verify|verify} messages.
             * @param message ButtonsMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IButtonsMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ButtonsMessage message, length delimited. Does not implicitly {@link WAE2E.Message.ButtonsMessage.verify|verify} messages.
             * @param message ButtonsMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IButtonsMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ButtonsMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ButtonsMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ButtonsMessage;

            /**
             * Decodes a ButtonsMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ButtonsMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ButtonsMessage;

            /**
             * Verifies a ButtonsMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ButtonsMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ButtonsMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.ButtonsMessage;

            /**
             * Creates a plain object from a ButtonsMessage message. Also converts values to other types if specified.
             * @param message ButtonsMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.ButtonsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ButtonsMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ButtonsMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ButtonsMessage {

            /** HeaderType enum. */
            enum HeaderType {
                UNKNOWN = 0,
                EMPTY = 1,
                TEXT = 2,
                DOCUMENT = 3,
                IMAGE = 4,
                VIDEO = 5,
                LOCATION = 6
            }

            /** Properties of a Button. */
            interface IButton {

                /** Button buttonID */
                buttonID?: (string|null);

                /** Button buttonText */
                buttonText?: (WAE2E.Message.ButtonsMessage.Button.IButtonText|null);

                /** Button type */
                type?: (WAE2E.Message.ButtonsMessage.Button.Type|null);

                /** Button nativeFlowInfo */
                nativeFlowInfo?: (WAE2E.Message.ButtonsMessage.Button.INativeFlowInfo|null);
            }

            /** Represents a Button. */
            class Button implements IButton {

                /**
                 * Constructs a new Button.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.ButtonsMessage.IButton);

                /** Button buttonID. */
                public buttonID: string;

                /** Button buttonText. */
                public buttonText?: (WAE2E.Message.ButtonsMessage.Button.IButtonText|null);

                /** Button type. */
                public type: WAE2E.Message.ButtonsMessage.Button.Type;

                /** Button nativeFlowInfo. */
                public nativeFlowInfo?: (WAE2E.Message.ButtonsMessage.Button.INativeFlowInfo|null);

                /**
                 * Creates a new Button instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Button instance
                 */
                public static create(properties?: WAE2E.Message.ButtonsMessage.IButton): WAE2E.Message.ButtonsMessage.Button;

                /**
                 * Encodes the specified Button message. Does not implicitly {@link WAE2E.Message.ButtonsMessage.Button.verify|verify} messages.
                 * @param message Button message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.ButtonsMessage.IButton, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Button message, length delimited. Does not implicitly {@link WAE2E.Message.ButtonsMessage.Button.verify|verify} messages.
                 * @param message Button message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.ButtonsMessage.IButton, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Button message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Button
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ButtonsMessage.Button;

                /**
                 * Decodes a Button message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Button
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ButtonsMessage.Button;

                /**
                 * Verifies a Button message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Button message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Button
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.ButtonsMessage.Button;

                /**
                 * Creates a plain object from a Button message. Also converts values to other types if specified.
                 * @param message Button
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.ButtonsMessage.Button, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Button to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Button
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Button {

                /** Type enum. */
                enum Type {
                    UNKNOWN = 0,
                    RESPONSE = 1,
                    NATIVE_FLOW = 2
                }

                /** Properties of a NativeFlowInfo. */
                interface INativeFlowInfo {

                    /** NativeFlowInfo name */
                    name?: (string|null);

                    /** NativeFlowInfo paramsJSON */
                    paramsJSON?: (string|null);
                }

                /** Represents a NativeFlowInfo. */
                class NativeFlowInfo implements INativeFlowInfo {

                    /**
                     * Constructs a new NativeFlowInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: WAE2E.Message.ButtonsMessage.Button.INativeFlowInfo);

                    /** NativeFlowInfo name. */
                    public name: string;

                    /** NativeFlowInfo paramsJSON. */
                    public paramsJSON: string;

                    /**
                     * Creates a new NativeFlowInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NativeFlowInfo instance
                     */
                    public static create(properties?: WAE2E.Message.ButtonsMessage.Button.INativeFlowInfo): WAE2E.Message.ButtonsMessage.Button.NativeFlowInfo;

                    /**
                     * Encodes the specified NativeFlowInfo message. Does not implicitly {@link WAE2E.Message.ButtonsMessage.Button.NativeFlowInfo.verify|verify} messages.
                     * @param message NativeFlowInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: WAE2E.Message.ButtonsMessage.Button.INativeFlowInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NativeFlowInfo message, length delimited. Does not implicitly {@link WAE2E.Message.ButtonsMessage.Button.NativeFlowInfo.verify|verify} messages.
                     * @param message NativeFlowInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: WAE2E.Message.ButtonsMessage.Button.INativeFlowInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NativeFlowInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NativeFlowInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ButtonsMessage.Button.NativeFlowInfo;

                    /**
                     * Decodes a NativeFlowInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NativeFlowInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ButtonsMessage.Button.NativeFlowInfo;

                    /**
                     * Verifies a NativeFlowInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NativeFlowInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NativeFlowInfo
                     */
                    public static fromObject(object: { [k: string]: any }): WAE2E.Message.ButtonsMessage.Button.NativeFlowInfo;

                    /**
                     * Creates a plain object from a NativeFlowInfo message. Also converts values to other types if specified.
                     * @param message NativeFlowInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: WAE2E.Message.ButtonsMessage.Button.NativeFlowInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NativeFlowInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NativeFlowInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ButtonText. */
                interface IButtonText {

                    /** ButtonText displayText */
                    displayText?: (string|null);
                }

                /** Represents a ButtonText. */
                class ButtonText implements IButtonText {

                    /**
                     * Constructs a new ButtonText.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: WAE2E.Message.ButtonsMessage.Button.IButtonText);

                    /** ButtonText displayText. */
                    public displayText: string;

                    /**
                     * Creates a new ButtonText instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ButtonText instance
                     */
                    public static create(properties?: WAE2E.Message.ButtonsMessage.Button.IButtonText): WAE2E.Message.ButtonsMessage.Button.ButtonText;

                    /**
                     * Encodes the specified ButtonText message. Does not implicitly {@link WAE2E.Message.ButtonsMessage.Button.ButtonText.verify|verify} messages.
                     * @param message ButtonText message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: WAE2E.Message.ButtonsMessage.Button.IButtonText, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ButtonText message, length delimited. Does not implicitly {@link WAE2E.Message.ButtonsMessage.Button.ButtonText.verify|verify} messages.
                     * @param message ButtonText message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: WAE2E.Message.ButtonsMessage.Button.IButtonText, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ButtonText message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ButtonText
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ButtonsMessage.Button.ButtonText;

                    /**
                     * Decodes a ButtonText message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ButtonText
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ButtonsMessage.Button.ButtonText;

                    /**
                     * Verifies a ButtonText message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ButtonText message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ButtonText
                     */
                    public static fromObject(object: { [k: string]: any }): WAE2E.Message.ButtonsMessage.Button.ButtonText;

                    /**
                     * Creates a plain object from a ButtonText message. Also converts values to other types if specified.
                     * @param message ButtonText
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: WAE2E.Message.ButtonsMessage.Button.ButtonText, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ButtonText to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ButtonText
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }

        /** Properties of a SecretEncryptedMessage. */
        interface ISecretEncryptedMessage {

            /** SecretEncryptedMessage targetMessageKey */
            targetMessageKey?: (WAProtocol.IMessageKey|null);

            /** SecretEncryptedMessage encPayload */
            encPayload?: (Uint8Array|null);

            /** SecretEncryptedMessage encIV */
            encIV?: (Uint8Array|null);

            /** SecretEncryptedMessage secretEncType */
            secretEncType?: (WAE2E.Message.SecretEncryptedMessage.SecretEncType|null);
        }

        /** Represents a SecretEncryptedMessage. */
        class SecretEncryptedMessage implements ISecretEncryptedMessage {

            /**
             * Constructs a new SecretEncryptedMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.ISecretEncryptedMessage);

            /** SecretEncryptedMessage targetMessageKey. */
            public targetMessageKey?: (WAProtocol.IMessageKey|null);

            /** SecretEncryptedMessage encPayload. */
            public encPayload: Uint8Array;

            /** SecretEncryptedMessage encIV. */
            public encIV: Uint8Array;

            /** SecretEncryptedMessage secretEncType. */
            public secretEncType: WAE2E.Message.SecretEncryptedMessage.SecretEncType;

            /**
             * Creates a new SecretEncryptedMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SecretEncryptedMessage instance
             */
            public static create(properties?: WAE2E.Message.ISecretEncryptedMessage): WAE2E.Message.SecretEncryptedMessage;

            /**
             * Encodes the specified SecretEncryptedMessage message. Does not implicitly {@link WAE2E.Message.SecretEncryptedMessage.verify|verify} messages.
             * @param message SecretEncryptedMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.ISecretEncryptedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SecretEncryptedMessage message, length delimited. Does not implicitly {@link WAE2E.Message.SecretEncryptedMessage.verify|verify} messages.
             * @param message SecretEncryptedMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.ISecretEncryptedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SecretEncryptedMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SecretEncryptedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.SecretEncryptedMessage;

            /**
             * Decodes a SecretEncryptedMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SecretEncryptedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.SecretEncryptedMessage;

            /**
             * Verifies a SecretEncryptedMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SecretEncryptedMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SecretEncryptedMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.SecretEncryptedMessage;

            /**
             * Creates a plain object from a SecretEncryptedMessage message. Also converts values to other types if specified.
             * @param message SecretEncryptedMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.SecretEncryptedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SecretEncryptedMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SecretEncryptedMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SecretEncryptedMessage {

            /** SecretEncType enum. */
            enum SecretEncType {
                UNKNOWN = 0,
                EVENT_EDIT = 1
            }
        }

        /** Properties of a GroupInviteMessage. */
        interface IGroupInviteMessage {

            /** GroupInviteMessage groupJID */
            groupJID?: (string|null);

            /** GroupInviteMessage inviteCode */
            inviteCode?: (string|null);

            /** GroupInviteMessage inviteExpiration */
            inviteExpiration?: (number|Long|null);

            /** GroupInviteMessage groupName */
            groupName?: (string|null);

            /** GroupInviteMessage JPEGThumbnail */
            JPEGThumbnail?: (Uint8Array|null);

            /** GroupInviteMessage caption */
            caption?: (string|null);

            /** GroupInviteMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** GroupInviteMessage groupType */
            groupType?: (WAE2E.Message.GroupInviteMessage.GroupType|null);
        }

        /** Represents a GroupInviteMessage. */
        class GroupInviteMessage implements IGroupInviteMessage {

            /**
             * Constructs a new GroupInviteMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IGroupInviteMessage);

            /** GroupInviteMessage groupJID. */
            public groupJID: string;

            /** GroupInviteMessage inviteCode. */
            public inviteCode: string;

            /** GroupInviteMessage inviteExpiration. */
            public inviteExpiration: (number|Long);

            /** GroupInviteMessage groupName. */
            public groupName: string;

            /** GroupInviteMessage JPEGThumbnail. */
            public JPEGThumbnail: Uint8Array;

            /** GroupInviteMessage caption. */
            public caption: string;

            /** GroupInviteMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** GroupInviteMessage groupType. */
            public groupType: WAE2E.Message.GroupInviteMessage.GroupType;

            /**
             * Creates a new GroupInviteMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GroupInviteMessage instance
             */
            public static create(properties?: WAE2E.Message.IGroupInviteMessage): WAE2E.Message.GroupInviteMessage;

            /**
             * Encodes the specified GroupInviteMessage message. Does not implicitly {@link WAE2E.Message.GroupInviteMessage.verify|verify} messages.
             * @param message GroupInviteMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IGroupInviteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GroupInviteMessage message, length delimited. Does not implicitly {@link WAE2E.Message.GroupInviteMessage.verify|verify} messages.
             * @param message GroupInviteMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IGroupInviteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GroupInviteMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GroupInviteMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.GroupInviteMessage;

            /**
             * Decodes a GroupInviteMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GroupInviteMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.GroupInviteMessage;

            /**
             * Verifies a GroupInviteMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GroupInviteMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GroupInviteMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.GroupInviteMessage;

            /**
             * Creates a plain object from a GroupInviteMessage message. Also converts values to other types if specified.
             * @param message GroupInviteMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.GroupInviteMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GroupInviteMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GroupInviteMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GroupInviteMessage {

            /** GroupType enum. */
            enum GroupType {
                DEFAULT = 0,
                PARENT = 1
            }
        }

        /** Properties of an InteractiveResponseMessage. */
        interface IInteractiveResponseMessage {

            /** InteractiveResponseMessage nativeFlowResponseMessage */
            nativeFlowResponseMessage?: (WAE2E.Message.InteractiveResponseMessage.INativeFlowResponseMessage|null);

            /** InteractiveResponseMessage body */
            body?: (WAE2E.Message.InteractiveResponseMessage.IBody|null);

            /** InteractiveResponseMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);
        }

        /** Represents an InteractiveResponseMessage. */
        class InteractiveResponseMessage implements IInteractiveResponseMessage {

            /**
             * Constructs a new InteractiveResponseMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IInteractiveResponseMessage);

            /** InteractiveResponseMessage nativeFlowResponseMessage. */
            public nativeFlowResponseMessage?: (WAE2E.Message.InteractiveResponseMessage.INativeFlowResponseMessage|null);

            /** InteractiveResponseMessage body. */
            public body?: (WAE2E.Message.InteractiveResponseMessage.IBody|null);

            /** InteractiveResponseMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** InteractiveResponseMessage interactiveResponseMessage. */
            public interactiveResponseMessage?: "nativeFlowResponseMessage";

            /**
             * Creates a new InteractiveResponseMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InteractiveResponseMessage instance
             */
            public static create(properties?: WAE2E.Message.IInteractiveResponseMessage): WAE2E.Message.InteractiveResponseMessage;

            /**
             * Encodes the specified InteractiveResponseMessage message. Does not implicitly {@link WAE2E.Message.InteractiveResponseMessage.verify|verify} messages.
             * @param message InteractiveResponseMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IInteractiveResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InteractiveResponseMessage message, length delimited. Does not implicitly {@link WAE2E.Message.InteractiveResponseMessage.verify|verify} messages.
             * @param message InteractiveResponseMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IInteractiveResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InteractiveResponseMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InteractiveResponseMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.InteractiveResponseMessage;

            /**
             * Decodes an InteractiveResponseMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InteractiveResponseMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.InteractiveResponseMessage;

            /**
             * Verifies an InteractiveResponseMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InteractiveResponseMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InteractiveResponseMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.InteractiveResponseMessage;

            /**
             * Creates a plain object from an InteractiveResponseMessage message. Also converts values to other types if specified.
             * @param message InteractiveResponseMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.InteractiveResponseMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InteractiveResponseMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InteractiveResponseMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace InteractiveResponseMessage {

            /** Properties of a Body. */
            interface IBody {

                /** Body text */
                text?: (string|null);

                /** Body format */
                format?: (WAE2E.Message.InteractiveResponseMessage.Body.Format|null);
            }

            /** Represents a Body. */
            class Body implements IBody {

                /**
                 * Constructs a new Body.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.InteractiveResponseMessage.IBody);

                /** Body text. */
                public text: string;

                /** Body format. */
                public format: WAE2E.Message.InteractiveResponseMessage.Body.Format;

                /**
                 * Creates a new Body instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Body instance
                 */
                public static create(properties?: WAE2E.Message.InteractiveResponseMessage.IBody): WAE2E.Message.InteractiveResponseMessage.Body;

                /**
                 * Encodes the specified Body message. Does not implicitly {@link WAE2E.Message.InteractiveResponseMessage.Body.verify|verify} messages.
                 * @param message Body message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.InteractiveResponseMessage.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Body message, length delimited. Does not implicitly {@link WAE2E.Message.InteractiveResponseMessage.Body.verify|verify} messages.
                 * @param message Body message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.InteractiveResponseMessage.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Body message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Body
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.InteractiveResponseMessage.Body;

                /**
                 * Decodes a Body message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Body
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.InteractiveResponseMessage.Body;

                /**
                 * Verifies a Body message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Body message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Body
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.InteractiveResponseMessage.Body;

                /**
                 * Creates a plain object from a Body message. Also converts values to other types if specified.
                 * @param message Body
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.InteractiveResponseMessage.Body, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Body to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Body
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Body {

                /** Format enum. */
                enum Format {
                    DEFAULT = 0,
                    EXTENSIONS_1 = 1
                }
            }

            /** Properties of a NativeFlowResponseMessage. */
            interface INativeFlowResponseMessage {

                /** NativeFlowResponseMessage name */
                name?: (string|null);

                /** NativeFlowResponseMessage paramsJSON */
                paramsJSON?: (string|null);

                /** NativeFlowResponseMessage version */
                version?: (number|null);
            }

            /** Represents a NativeFlowResponseMessage. */
            class NativeFlowResponseMessage implements INativeFlowResponseMessage {

                /**
                 * Constructs a new NativeFlowResponseMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.InteractiveResponseMessage.INativeFlowResponseMessage);

                /** NativeFlowResponseMessage name. */
                public name: string;

                /** NativeFlowResponseMessage paramsJSON. */
                public paramsJSON: string;

                /** NativeFlowResponseMessage version. */
                public version: number;

                /**
                 * Creates a new NativeFlowResponseMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NativeFlowResponseMessage instance
                 */
                public static create(properties?: WAE2E.Message.InteractiveResponseMessage.INativeFlowResponseMessage): WAE2E.Message.InteractiveResponseMessage.NativeFlowResponseMessage;

                /**
                 * Encodes the specified NativeFlowResponseMessage message. Does not implicitly {@link WAE2E.Message.InteractiveResponseMessage.NativeFlowResponseMessage.verify|verify} messages.
                 * @param message NativeFlowResponseMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.InteractiveResponseMessage.INativeFlowResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NativeFlowResponseMessage message, length delimited. Does not implicitly {@link WAE2E.Message.InteractiveResponseMessage.NativeFlowResponseMessage.verify|verify} messages.
                 * @param message NativeFlowResponseMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.InteractiveResponseMessage.INativeFlowResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NativeFlowResponseMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NativeFlowResponseMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.InteractiveResponseMessage.NativeFlowResponseMessage;

                /**
                 * Decodes a NativeFlowResponseMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NativeFlowResponseMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.InteractiveResponseMessage.NativeFlowResponseMessage;

                /**
                 * Verifies a NativeFlowResponseMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NativeFlowResponseMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NativeFlowResponseMessage
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.InteractiveResponseMessage.NativeFlowResponseMessage;

                /**
                 * Creates a plain object from a NativeFlowResponseMessage message. Also converts values to other types if specified.
                 * @param message NativeFlowResponseMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.InteractiveResponseMessage.NativeFlowResponseMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NativeFlowResponseMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NativeFlowResponseMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an InteractiveMessage. */
        interface IInteractiveMessage {

            /** InteractiveMessage shopStorefrontMessage */
            shopStorefrontMessage?: (WAE2E.Message.InteractiveMessage.IShopMessage|null);

            /** InteractiveMessage collectionMessage */
            collectionMessage?: (WAE2E.Message.InteractiveMessage.ICollectionMessage|null);

            /** InteractiveMessage nativeFlowMessage */
            nativeFlowMessage?: (WAE2E.Message.InteractiveMessage.INativeFlowMessage|null);

            /** InteractiveMessage carouselMessage */
            carouselMessage?: (WAE2E.Message.InteractiveMessage.ICarouselMessage|null);

            /** InteractiveMessage header */
            header?: (WAE2E.Message.InteractiveMessage.IHeader|null);

            /** InteractiveMessage body */
            body?: (WAE2E.Message.InteractiveMessage.IBody|null);

            /** InteractiveMessage footer */
            footer?: (WAE2E.Message.InteractiveMessage.IFooter|null);

            /** InteractiveMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);
        }

        /** Represents an InteractiveMessage. */
        class InteractiveMessage implements IInteractiveMessage {

            /**
             * Constructs a new InteractiveMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IInteractiveMessage);

            /** InteractiveMessage shopStorefrontMessage. */
            public shopStorefrontMessage?: (WAE2E.Message.InteractiveMessage.IShopMessage|null);

            /** InteractiveMessage collectionMessage. */
            public collectionMessage?: (WAE2E.Message.InteractiveMessage.ICollectionMessage|null);

            /** InteractiveMessage nativeFlowMessage. */
            public nativeFlowMessage?: (WAE2E.Message.InteractiveMessage.INativeFlowMessage|null);

            /** InteractiveMessage carouselMessage. */
            public carouselMessage?: (WAE2E.Message.InteractiveMessage.ICarouselMessage|null);

            /** InteractiveMessage header. */
            public header?: (WAE2E.Message.InteractiveMessage.IHeader|null);

            /** InteractiveMessage body. */
            public body?: (WAE2E.Message.InteractiveMessage.IBody|null);

            /** InteractiveMessage footer. */
            public footer?: (WAE2E.Message.InteractiveMessage.IFooter|null);

            /** InteractiveMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** InteractiveMessage interactiveMessage. */
            public interactiveMessage?: ("shopStorefrontMessage"|"collectionMessage"|"nativeFlowMessage"|"carouselMessage");

            /**
             * Creates a new InteractiveMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InteractiveMessage instance
             */
            public static create(properties?: WAE2E.Message.IInteractiveMessage): WAE2E.Message.InteractiveMessage;

            /**
             * Encodes the specified InteractiveMessage message. Does not implicitly {@link WAE2E.Message.InteractiveMessage.verify|verify} messages.
             * @param message InteractiveMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IInteractiveMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InteractiveMessage message, length delimited. Does not implicitly {@link WAE2E.Message.InteractiveMessage.verify|verify} messages.
             * @param message InteractiveMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IInteractiveMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InteractiveMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InteractiveMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.InteractiveMessage;

            /**
             * Decodes an InteractiveMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InteractiveMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.InteractiveMessage;

            /**
             * Verifies an InteractiveMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InteractiveMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InteractiveMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.InteractiveMessage;

            /**
             * Creates a plain object from an InteractiveMessage message. Also converts values to other types if specified.
             * @param message InteractiveMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.InteractiveMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InteractiveMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InteractiveMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace InteractiveMessage {

            /** Properties of a ShopMessage. */
            interface IShopMessage {

                /** ShopMessage ID */
                ID?: (string|null);

                /** ShopMessage surface */
                surface?: (WAE2E.Message.InteractiveMessage.ShopMessage.Surface|null);

                /** ShopMessage messageVersion */
                messageVersion?: (number|null);
            }

            /** Represents a ShopMessage. */
            class ShopMessage implements IShopMessage {

                /**
                 * Constructs a new ShopMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.InteractiveMessage.IShopMessage);

                /** ShopMessage ID. */
                public ID: string;

                /** ShopMessage surface. */
                public surface: WAE2E.Message.InteractiveMessage.ShopMessage.Surface;

                /** ShopMessage messageVersion. */
                public messageVersion: number;

                /**
                 * Creates a new ShopMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ShopMessage instance
                 */
                public static create(properties?: WAE2E.Message.InteractiveMessage.IShopMessage): WAE2E.Message.InteractiveMessage.ShopMessage;

                /**
                 * Encodes the specified ShopMessage message. Does not implicitly {@link WAE2E.Message.InteractiveMessage.ShopMessage.verify|verify} messages.
                 * @param message ShopMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.InteractiveMessage.IShopMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ShopMessage message, length delimited. Does not implicitly {@link WAE2E.Message.InteractiveMessage.ShopMessage.verify|verify} messages.
                 * @param message ShopMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.InteractiveMessage.IShopMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ShopMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ShopMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.InteractiveMessage.ShopMessage;

                /**
                 * Decodes a ShopMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ShopMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.InteractiveMessage.ShopMessage;

                /**
                 * Verifies a ShopMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ShopMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ShopMessage
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.InteractiveMessage.ShopMessage;

                /**
                 * Creates a plain object from a ShopMessage message. Also converts values to other types if specified.
                 * @param message ShopMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.InteractiveMessage.ShopMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ShopMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ShopMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ShopMessage {

                /** Surface enum. */
                enum Surface {
                    UNKNOWN_SURFACE = 0,
                    FB = 1,
                    IG = 2,
                    WA = 3
                }
            }

            /** Properties of a CarouselMessage. */
            interface ICarouselMessage {

                /** CarouselMessage cards */
                cards?: (WAE2E.Message.IInteractiveMessage[]|null);

                /** CarouselMessage messageVersion */
                messageVersion?: (number|null);
            }

            /** Represents a CarouselMessage. */
            class CarouselMessage implements ICarouselMessage {

                /**
                 * Constructs a new CarouselMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.InteractiveMessage.ICarouselMessage);

                /** CarouselMessage cards. */
                public cards: WAE2E.Message.IInteractiveMessage[];

                /** CarouselMessage messageVersion. */
                public messageVersion: number;

                /**
                 * Creates a new CarouselMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CarouselMessage instance
                 */
                public static create(properties?: WAE2E.Message.InteractiveMessage.ICarouselMessage): WAE2E.Message.InteractiveMessage.CarouselMessage;

                /**
                 * Encodes the specified CarouselMessage message. Does not implicitly {@link WAE2E.Message.InteractiveMessage.CarouselMessage.verify|verify} messages.
                 * @param message CarouselMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.InteractiveMessage.ICarouselMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CarouselMessage message, length delimited. Does not implicitly {@link WAE2E.Message.InteractiveMessage.CarouselMessage.verify|verify} messages.
                 * @param message CarouselMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.InteractiveMessage.ICarouselMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CarouselMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CarouselMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.InteractiveMessage.CarouselMessage;

                /**
                 * Decodes a CarouselMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CarouselMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.InteractiveMessage.CarouselMessage;

                /**
                 * Verifies a CarouselMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CarouselMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CarouselMessage
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.InteractiveMessage.CarouselMessage;

                /**
                 * Creates a plain object from a CarouselMessage message. Also converts values to other types if specified.
                 * @param message CarouselMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.InteractiveMessage.CarouselMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CarouselMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CarouselMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a NativeFlowMessage. */
            interface INativeFlowMessage {

                /** NativeFlowMessage buttons */
                buttons?: (WAE2E.Message.InteractiveMessage.NativeFlowMessage.INativeFlowButton[]|null);

                /** NativeFlowMessage messageParamsJSON */
                messageParamsJSON?: (string|null);

                /** NativeFlowMessage messageVersion */
                messageVersion?: (number|null);
            }

            /** Represents a NativeFlowMessage. */
            class NativeFlowMessage implements INativeFlowMessage {

                /**
                 * Constructs a new NativeFlowMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.InteractiveMessage.INativeFlowMessage);

                /** NativeFlowMessage buttons. */
                public buttons: WAE2E.Message.InteractiveMessage.NativeFlowMessage.INativeFlowButton[];

                /** NativeFlowMessage messageParamsJSON. */
                public messageParamsJSON: string;

                /** NativeFlowMessage messageVersion. */
                public messageVersion: number;

                /**
                 * Creates a new NativeFlowMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NativeFlowMessage instance
                 */
                public static create(properties?: WAE2E.Message.InteractiveMessage.INativeFlowMessage): WAE2E.Message.InteractiveMessage.NativeFlowMessage;

                /**
                 * Encodes the specified NativeFlowMessage message. Does not implicitly {@link WAE2E.Message.InteractiveMessage.NativeFlowMessage.verify|verify} messages.
                 * @param message NativeFlowMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.InteractiveMessage.INativeFlowMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NativeFlowMessage message, length delimited. Does not implicitly {@link WAE2E.Message.InteractiveMessage.NativeFlowMessage.verify|verify} messages.
                 * @param message NativeFlowMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.InteractiveMessage.INativeFlowMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NativeFlowMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NativeFlowMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.InteractiveMessage.NativeFlowMessage;

                /**
                 * Decodes a NativeFlowMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NativeFlowMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.InteractiveMessage.NativeFlowMessage;

                /**
                 * Verifies a NativeFlowMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NativeFlowMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NativeFlowMessage
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.InteractiveMessage.NativeFlowMessage;

                /**
                 * Creates a plain object from a NativeFlowMessage message. Also converts values to other types if specified.
                 * @param message NativeFlowMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.InteractiveMessage.NativeFlowMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NativeFlowMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NativeFlowMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace NativeFlowMessage {

                /** Properties of a NativeFlowButton. */
                interface INativeFlowButton {

                    /** NativeFlowButton name */
                    name?: (string|null);

                    /** NativeFlowButton buttonParamsJSON */
                    buttonParamsJSON?: (string|null);
                }

                /** Represents a NativeFlowButton. */
                class NativeFlowButton implements INativeFlowButton {

                    /**
                     * Constructs a new NativeFlowButton.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: WAE2E.Message.InteractiveMessage.NativeFlowMessage.INativeFlowButton);

                    /** NativeFlowButton name. */
                    public name: string;

                    /** NativeFlowButton buttonParamsJSON. */
                    public buttonParamsJSON: string;

                    /**
                     * Creates a new NativeFlowButton instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NativeFlowButton instance
                     */
                    public static create(properties?: WAE2E.Message.InteractiveMessage.NativeFlowMessage.INativeFlowButton): WAE2E.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton;

                    /**
                     * Encodes the specified NativeFlowButton message. Does not implicitly {@link WAE2E.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton.verify|verify} messages.
                     * @param message NativeFlowButton message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: WAE2E.Message.InteractiveMessage.NativeFlowMessage.INativeFlowButton, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NativeFlowButton message, length delimited. Does not implicitly {@link WAE2E.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton.verify|verify} messages.
                     * @param message NativeFlowButton message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: WAE2E.Message.InteractiveMessage.NativeFlowMessage.INativeFlowButton, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NativeFlowButton message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NativeFlowButton
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton;

                    /**
                     * Decodes a NativeFlowButton message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NativeFlowButton
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton;

                    /**
                     * Verifies a NativeFlowButton message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NativeFlowButton message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NativeFlowButton
                     */
                    public static fromObject(object: { [k: string]: any }): WAE2E.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton;

                    /**
                     * Creates a plain object from a NativeFlowButton message. Also converts values to other types if specified.
                     * @param message NativeFlowButton
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: WAE2E.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NativeFlowButton to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NativeFlowButton
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a CollectionMessage. */
            interface ICollectionMessage {

                /** CollectionMessage bizJID */
                bizJID?: (string|null);

                /** CollectionMessage ID */
                ID?: (string|null);

                /** CollectionMessage messageVersion */
                messageVersion?: (number|null);
            }

            /** Represents a CollectionMessage. */
            class CollectionMessage implements ICollectionMessage {

                /**
                 * Constructs a new CollectionMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.InteractiveMessage.ICollectionMessage);

                /** CollectionMessage bizJID. */
                public bizJID: string;

                /** CollectionMessage ID. */
                public ID: string;

                /** CollectionMessage messageVersion. */
                public messageVersion: number;

                /**
                 * Creates a new CollectionMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CollectionMessage instance
                 */
                public static create(properties?: WAE2E.Message.InteractiveMessage.ICollectionMessage): WAE2E.Message.InteractiveMessage.CollectionMessage;

                /**
                 * Encodes the specified CollectionMessage message. Does not implicitly {@link WAE2E.Message.InteractiveMessage.CollectionMessage.verify|verify} messages.
                 * @param message CollectionMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.InteractiveMessage.ICollectionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CollectionMessage message, length delimited. Does not implicitly {@link WAE2E.Message.InteractiveMessage.CollectionMessage.verify|verify} messages.
                 * @param message CollectionMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.InteractiveMessage.ICollectionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CollectionMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CollectionMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.InteractiveMessage.CollectionMessage;

                /**
                 * Decodes a CollectionMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CollectionMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.InteractiveMessage.CollectionMessage;

                /**
                 * Verifies a CollectionMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CollectionMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CollectionMessage
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.InteractiveMessage.CollectionMessage;

                /**
                 * Creates a plain object from a CollectionMessage message. Also converts values to other types if specified.
                 * @param message CollectionMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.InteractiveMessage.CollectionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CollectionMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CollectionMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Footer. */
            interface IFooter {

                /** Footer text */
                text?: (string|null);
            }

            /** Represents a Footer. */
            class Footer implements IFooter {

                /**
                 * Constructs a new Footer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.InteractiveMessage.IFooter);

                /** Footer text. */
                public text: string;

                /**
                 * Creates a new Footer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Footer instance
                 */
                public static create(properties?: WAE2E.Message.InteractiveMessage.IFooter): WAE2E.Message.InteractiveMessage.Footer;

                /**
                 * Encodes the specified Footer message. Does not implicitly {@link WAE2E.Message.InteractiveMessage.Footer.verify|verify} messages.
                 * @param message Footer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.InteractiveMessage.IFooter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Footer message, length delimited. Does not implicitly {@link WAE2E.Message.InteractiveMessage.Footer.verify|verify} messages.
                 * @param message Footer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.InteractiveMessage.IFooter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Footer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Footer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.InteractiveMessage.Footer;

                /**
                 * Decodes a Footer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Footer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.InteractiveMessage.Footer;

                /**
                 * Verifies a Footer message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Footer message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Footer
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.InteractiveMessage.Footer;

                /**
                 * Creates a plain object from a Footer message. Also converts values to other types if specified.
                 * @param message Footer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.InteractiveMessage.Footer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Footer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Footer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Body. */
            interface IBody {

                /** Body text */
                text?: (string|null);
            }

            /** Represents a Body. */
            class Body implements IBody {

                /**
                 * Constructs a new Body.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.InteractiveMessage.IBody);

                /** Body text. */
                public text: string;

                /**
                 * Creates a new Body instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Body instance
                 */
                public static create(properties?: WAE2E.Message.InteractiveMessage.IBody): WAE2E.Message.InteractiveMessage.Body;

                /**
                 * Encodes the specified Body message. Does not implicitly {@link WAE2E.Message.InteractiveMessage.Body.verify|verify} messages.
                 * @param message Body message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.InteractiveMessage.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Body message, length delimited. Does not implicitly {@link WAE2E.Message.InteractiveMessage.Body.verify|verify} messages.
                 * @param message Body message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.InteractiveMessage.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Body message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Body
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.InteractiveMessage.Body;

                /**
                 * Decodes a Body message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Body
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.InteractiveMessage.Body;

                /**
                 * Verifies a Body message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Body message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Body
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.InteractiveMessage.Body;

                /**
                 * Creates a plain object from a Body message. Also converts values to other types if specified.
                 * @param message Body
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.InteractiveMessage.Body, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Body to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Body
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Header. */
            interface IHeader {

                /** Header documentMessage */
                documentMessage?: (WAE2E.Message.IDocumentMessage|null);

                /** Header imageMessage */
                imageMessage?: (WAE2E.Message.IImageMessage|null);

                /** Header JPEGThumbnail */
                JPEGThumbnail?: (Uint8Array|null);

                /** Header videoMessage */
                videoMessage?: (WAE2E.Message.IVideoMessage|null);

                /** Header locationMessage */
                locationMessage?: (WAE2E.Message.ILocationMessage|null);

                /** Header productMessage */
                productMessage?: (WAE2E.Message.IProductMessage|null);

                /** Header title */
                title?: (string|null);

                /** Header subtitle */
                subtitle?: (string|null);

                /** Header hasMediaAttachment */
                hasMediaAttachment?: (boolean|null);
            }

            /** Represents a Header. */
            class Header implements IHeader {

                /**
                 * Constructs a new Header.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.InteractiveMessage.IHeader);

                /** Header documentMessage. */
                public documentMessage?: (WAE2E.Message.IDocumentMessage|null);

                /** Header imageMessage. */
                public imageMessage?: (WAE2E.Message.IImageMessage|null);

                /** Header JPEGThumbnail. */
                public JPEGThumbnail?: (Uint8Array|null);

                /** Header videoMessage. */
                public videoMessage?: (WAE2E.Message.IVideoMessage|null);

                /** Header locationMessage. */
                public locationMessage?: (WAE2E.Message.ILocationMessage|null);

                /** Header productMessage. */
                public productMessage?: (WAE2E.Message.IProductMessage|null);

                /** Header title. */
                public title: string;

                /** Header subtitle. */
                public subtitle: string;

                /** Header hasMediaAttachment. */
                public hasMediaAttachment: boolean;

                /** Header media. */
                public media?: ("documentMessage"|"imageMessage"|"JPEGThumbnail"|"videoMessage"|"locationMessage"|"productMessage");

                /**
                 * Creates a new Header instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Header instance
                 */
                public static create(properties?: WAE2E.Message.InteractiveMessage.IHeader): WAE2E.Message.InteractiveMessage.Header;

                /**
                 * Encodes the specified Header message. Does not implicitly {@link WAE2E.Message.InteractiveMessage.Header.verify|verify} messages.
                 * @param message Header message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.InteractiveMessage.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Header message, length delimited. Does not implicitly {@link WAE2E.Message.InteractiveMessage.Header.verify|verify} messages.
                 * @param message Header message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.InteractiveMessage.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Header message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Header
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.InteractiveMessage.Header;

                /**
                 * Decodes a Header message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Header
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.InteractiveMessage.Header;

                /**
                 * Verifies a Header message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Header message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Header
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.InteractiveMessage.Header;

                /**
                 * Creates a plain object from a Header message. Also converts values to other types if specified.
                 * @param message Header
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.InteractiveMessage.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Header to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Header
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a ListResponseMessage. */
        interface IListResponseMessage {

            /** ListResponseMessage title */
            title?: (string|null);

            /** ListResponseMessage listType */
            listType?: (WAE2E.Message.ListResponseMessage.ListType|null);

            /** ListResponseMessage singleSelectReply */
            singleSelectReply?: (WAE2E.Message.ListResponseMessage.ISingleSelectReply|null);

            /** ListResponseMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** ListResponseMessage description */
            description?: (string|null);
        }

        /** Represents a ListResponseMessage. */
        class ListResponseMessage implements IListResponseMessage {

            /**
             * Constructs a new ListResponseMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IListResponseMessage);

            /** ListResponseMessage title. */
            public title: string;

            /** ListResponseMessage listType. */
            public listType: WAE2E.Message.ListResponseMessage.ListType;

            /** ListResponseMessage singleSelectReply. */
            public singleSelectReply?: (WAE2E.Message.ListResponseMessage.ISingleSelectReply|null);

            /** ListResponseMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** ListResponseMessage description. */
            public description: string;

            /**
             * Creates a new ListResponseMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListResponseMessage instance
             */
            public static create(properties?: WAE2E.Message.IListResponseMessage): WAE2E.Message.ListResponseMessage;

            /**
             * Encodes the specified ListResponseMessage message. Does not implicitly {@link WAE2E.Message.ListResponseMessage.verify|verify} messages.
             * @param message ListResponseMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IListResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListResponseMessage message, length delimited. Does not implicitly {@link WAE2E.Message.ListResponseMessage.verify|verify} messages.
             * @param message ListResponseMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IListResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListResponseMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListResponseMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ListResponseMessage;

            /**
             * Decodes a ListResponseMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListResponseMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ListResponseMessage;

            /**
             * Verifies a ListResponseMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListResponseMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListResponseMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.ListResponseMessage;

            /**
             * Creates a plain object from a ListResponseMessage message. Also converts values to other types if specified.
             * @param message ListResponseMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.ListResponseMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListResponseMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListResponseMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ListResponseMessage {

            /** ListType enum. */
            enum ListType {
                UNKNOWN = 0,
                SINGLE_SELECT = 1
            }

            /** Properties of a SingleSelectReply. */
            interface ISingleSelectReply {

                /** SingleSelectReply selectedRowID */
                selectedRowID?: (string|null);
            }

            /** Represents a SingleSelectReply. */
            class SingleSelectReply implements ISingleSelectReply {

                /**
                 * Constructs a new SingleSelectReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.ListResponseMessage.ISingleSelectReply);

                /** SingleSelectReply selectedRowID. */
                public selectedRowID: string;

                /**
                 * Creates a new SingleSelectReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SingleSelectReply instance
                 */
                public static create(properties?: WAE2E.Message.ListResponseMessage.ISingleSelectReply): WAE2E.Message.ListResponseMessage.SingleSelectReply;

                /**
                 * Encodes the specified SingleSelectReply message. Does not implicitly {@link WAE2E.Message.ListResponseMessage.SingleSelectReply.verify|verify} messages.
                 * @param message SingleSelectReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.ListResponseMessage.ISingleSelectReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SingleSelectReply message, length delimited. Does not implicitly {@link WAE2E.Message.ListResponseMessage.SingleSelectReply.verify|verify} messages.
                 * @param message SingleSelectReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.ListResponseMessage.ISingleSelectReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SingleSelectReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SingleSelectReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ListResponseMessage.SingleSelectReply;

                /**
                 * Decodes a SingleSelectReply message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SingleSelectReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ListResponseMessage.SingleSelectReply;

                /**
                 * Verifies a SingleSelectReply message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SingleSelectReply message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SingleSelectReply
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.ListResponseMessage.SingleSelectReply;

                /**
                 * Creates a plain object from a SingleSelectReply message. Also converts values to other types if specified.
                 * @param message SingleSelectReply
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.ListResponseMessage.SingleSelectReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SingleSelectReply to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SingleSelectReply
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a ListMessage. */
        interface IListMessage {

            /** ListMessage title */
            title?: (string|null);

            /** ListMessage description */
            description?: (string|null);

            /** ListMessage buttonText */
            buttonText?: (string|null);

            /** ListMessage listType */
            listType?: (WAE2E.Message.ListMessage.ListType|null);

            /** ListMessage sections */
            sections?: (WAE2E.Message.ListMessage.ISection[]|null);

            /** ListMessage productListInfo */
            productListInfo?: (WAE2E.Message.ListMessage.IProductListInfo|null);

            /** ListMessage footerText */
            footerText?: (string|null);

            /** ListMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);
        }

        /** Represents a ListMessage. */
        class ListMessage implements IListMessage {

            /**
             * Constructs a new ListMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IListMessage);

            /** ListMessage title. */
            public title: string;

            /** ListMessage description. */
            public description: string;

            /** ListMessage buttonText. */
            public buttonText: string;

            /** ListMessage listType. */
            public listType: WAE2E.Message.ListMessage.ListType;

            /** ListMessage sections. */
            public sections: WAE2E.Message.ListMessage.ISection[];

            /** ListMessage productListInfo. */
            public productListInfo?: (WAE2E.Message.ListMessage.IProductListInfo|null);

            /** ListMessage footerText. */
            public footerText: string;

            /** ListMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /**
             * Creates a new ListMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListMessage instance
             */
            public static create(properties?: WAE2E.Message.IListMessage): WAE2E.Message.ListMessage;

            /**
             * Encodes the specified ListMessage message. Does not implicitly {@link WAE2E.Message.ListMessage.verify|verify} messages.
             * @param message ListMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IListMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListMessage message, length delimited. Does not implicitly {@link WAE2E.Message.ListMessage.verify|verify} messages.
             * @param message ListMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IListMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ListMessage;

            /**
             * Decodes a ListMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ListMessage;

            /**
             * Verifies a ListMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.ListMessage;

            /**
             * Creates a plain object from a ListMessage message. Also converts values to other types if specified.
             * @param message ListMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.ListMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ListMessage {

            /** ListType enum. */
            enum ListType {
                UNKNOWN = 0,
                SINGLE_SELECT = 1,
                PRODUCT_LIST = 2
            }

            /** Properties of a ProductListInfo. */
            interface IProductListInfo {

                /** ProductListInfo productSections */
                productSections?: (WAE2E.Message.ListMessage.IProductSection[]|null);

                /** ProductListInfo headerImage */
                headerImage?: (WAE2E.Message.ListMessage.IProductListHeaderImage|null);

                /** ProductListInfo businessOwnerJID */
                businessOwnerJID?: (string|null);
            }

            /** Represents a ProductListInfo. */
            class ProductListInfo implements IProductListInfo {

                /**
                 * Constructs a new ProductListInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.ListMessage.IProductListInfo);

                /** ProductListInfo productSections. */
                public productSections: WAE2E.Message.ListMessage.IProductSection[];

                /** ProductListInfo headerImage. */
                public headerImage?: (WAE2E.Message.ListMessage.IProductListHeaderImage|null);

                /** ProductListInfo businessOwnerJID. */
                public businessOwnerJID: string;

                /**
                 * Creates a new ProductListInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProductListInfo instance
                 */
                public static create(properties?: WAE2E.Message.ListMessage.IProductListInfo): WAE2E.Message.ListMessage.ProductListInfo;

                /**
                 * Encodes the specified ProductListInfo message. Does not implicitly {@link WAE2E.Message.ListMessage.ProductListInfo.verify|verify} messages.
                 * @param message ProductListInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.ListMessage.IProductListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProductListInfo message, length delimited. Does not implicitly {@link WAE2E.Message.ListMessage.ProductListInfo.verify|verify} messages.
                 * @param message ProductListInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.ListMessage.IProductListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProductListInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProductListInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ListMessage.ProductListInfo;

                /**
                 * Decodes a ProductListInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProductListInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ListMessage.ProductListInfo;

                /**
                 * Verifies a ProductListInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProductListInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProductListInfo
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.ListMessage.ProductListInfo;

                /**
                 * Creates a plain object from a ProductListInfo message. Also converts values to other types if specified.
                 * @param message ProductListInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.ListMessage.ProductListInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProductListInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ProductListInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ProductListHeaderImage. */
            interface IProductListHeaderImage {

                /** ProductListHeaderImage productID */
                productID?: (string|null);

                /** ProductListHeaderImage JPEGThumbnail */
                JPEGThumbnail?: (Uint8Array|null);
            }

            /** Represents a ProductListHeaderImage. */
            class ProductListHeaderImage implements IProductListHeaderImage {

                /**
                 * Constructs a new ProductListHeaderImage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.ListMessage.IProductListHeaderImage);

                /** ProductListHeaderImage productID. */
                public productID: string;

                /** ProductListHeaderImage JPEGThumbnail. */
                public JPEGThumbnail: Uint8Array;

                /**
                 * Creates a new ProductListHeaderImage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProductListHeaderImage instance
                 */
                public static create(properties?: WAE2E.Message.ListMessage.IProductListHeaderImage): WAE2E.Message.ListMessage.ProductListHeaderImage;

                /**
                 * Encodes the specified ProductListHeaderImage message. Does not implicitly {@link WAE2E.Message.ListMessage.ProductListHeaderImage.verify|verify} messages.
                 * @param message ProductListHeaderImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.ListMessage.IProductListHeaderImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProductListHeaderImage message, length delimited. Does not implicitly {@link WAE2E.Message.ListMessage.ProductListHeaderImage.verify|verify} messages.
                 * @param message ProductListHeaderImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.ListMessage.IProductListHeaderImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProductListHeaderImage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProductListHeaderImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ListMessage.ProductListHeaderImage;

                /**
                 * Decodes a ProductListHeaderImage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProductListHeaderImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ListMessage.ProductListHeaderImage;

                /**
                 * Verifies a ProductListHeaderImage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProductListHeaderImage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProductListHeaderImage
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.ListMessage.ProductListHeaderImage;

                /**
                 * Creates a plain object from a ProductListHeaderImage message. Also converts values to other types if specified.
                 * @param message ProductListHeaderImage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.ListMessage.ProductListHeaderImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProductListHeaderImage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ProductListHeaderImage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ProductSection. */
            interface IProductSection {

                /** ProductSection title */
                title?: (string|null);

                /** ProductSection products */
                products?: (WAE2E.Message.ListMessage.IProduct[]|null);
            }

            /** Represents a ProductSection. */
            class ProductSection implements IProductSection {

                /**
                 * Constructs a new ProductSection.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.ListMessage.IProductSection);

                /** ProductSection title. */
                public title: string;

                /** ProductSection products. */
                public products: WAE2E.Message.ListMessage.IProduct[];

                /**
                 * Creates a new ProductSection instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProductSection instance
                 */
                public static create(properties?: WAE2E.Message.ListMessage.IProductSection): WAE2E.Message.ListMessage.ProductSection;

                /**
                 * Encodes the specified ProductSection message. Does not implicitly {@link WAE2E.Message.ListMessage.ProductSection.verify|verify} messages.
                 * @param message ProductSection message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.ListMessage.IProductSection, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProductSection message, length delimited. Does not implicitly {@link WAE2E.Message.ListMessage.ProductSection.verify|verify} messages.
                 * @param message ProductSection message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.ListMessage.IProductSection, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProductSection message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProductSection
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ListMessage.ProductSection;

                /**
                 * Decodes a ProductSection message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProductSection
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ListMessage.ProductSection;

                /**
                 * Verifies a ProductSection message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProductSection message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProductSection
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.ListMessage.ProductSection;

                /**
                 * Creates a plain object from a ProductSection message. Also converts values to other types if specified.
                 * @param message ProductSection
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.ListMessage.ProductSection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProductSection to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ProductSection
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Product. */
            interface IProduct {

                /** Product productID */
                productID?: (string|null);
            }

            /** Represents a Product. */
            class Product implements IProduct {

                /**
                 * Constructs a new Product.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.ListMessage.IProduct);

                /** Product productID. */
                public productID: string;

                /**
                 * Creates a new Product instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Product instance
                 */
                public static create(properties?: WAE2E.Message.ListMessage.IProduct): WAE2E.Message.ListMessage.Product;

                /**
                 * Encodes the specified Product message. Does not implicitly {@link WAE2E.Message.ListMessage.Product.verify|verify} messages.
                 * @param message Product message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.ListMessage.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Product message, length delimited. Does not implicitly {@link WAE2E.Message.ListMessage.Product.verify|verify} messages.
                 * @param message Product message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.ListMessage.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Product message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Product
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ListMessage.Product;

                /**
                 * Decodes a Product message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Product
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ListMessage.Product;

                /**
                 * Verifies a Product message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Product message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Product
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.ListMessage.Product;

                /**
                 * Creates a plain object from a Product message. Also converts values to other types if specified.
                 * @param message Product
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.ListMessage.Product, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Product to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Product
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Section. */
            interface ISection {

                /** Section title */
                title?: (string|null);

                /** Section rows */
                rows?: (WAE2E.Message.ListMessage.IRow[]|null);
            }

            /** Represents a Section. */
            class Section implements ISection {

                /**
                 * Constructs a new Section.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.ListMessage.ISection);

                /** Section title. */
                public title: string;

                /** Section rows. */
                public rows: WAE2E.Message.ListMessage.IRow[];

                /**
                 * Creates a new Section instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Section instance
                 */
                public static create(properties?: WAE2E.Message.ListMessage.ISection): WAE2E.Message.ListMessage.Section;

                /**
                 * Encodes the specified Section message. Does not implicitly {@link WAE2E.Message.ListMessage.Section.verify|verify} messages.
                 * @param message Section message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.ListMessage.ISection, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Section message, length delimited. Does not implicitly {@link WAE2E.Message.ListMessage.Section.verify|verify} messages.
                 * @param message Section message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.ListMessage.ISection, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Section message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Section
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ListMessage.Section;

                /**
                 * Decodes a Section message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Section
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ListMessage.Section;

                /**
                 * Verifies a Section message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Section message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Section
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.ListMessage.Section;

                /**
                 * Creates a plain object from a Section message. Also converts values to other types if specified.
                 * @param message Section
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.ListMessage.Section, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Section to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Section
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Row. */
            interface IRow {

                /** Row title */
                title?: (string|null);

                /** Row description */
                description?: (string|null);

                /** Row rowID */
                rowID?: (string|null);
            }

            /** Represents a Row. */
            class Row implements IRow {

                /**
                 * Constructs a new Row.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.ListMessage.IRow);

                /** Row title. */
                public title: string;

                /** Row description. */
                public description: string;

                /** Row rowID. */
                public rowID: string;

                /**
                 * Creates a new Row instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Row instance
                 */
                public static create(properties?: WAE2E.Message.ListMessage.IRow): WAE2E.Message.ListMessage.Row;

                /**
                 * Encodes the specified Row message. Does not implicitly {@link WAE2E.Message.ListMessage.Row.verify|verify} messages.
                 * @param message Row message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.ListMessage.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Row message, length delimited. Does not implicitly {@link WAE2E.Message.ListMessage.Row.verify|verify} messages.
                 * @param message Row message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.ListMessage.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Row message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Row
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ListMessage.Row;

                /**
                 * Decodes a Row message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Row
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ListMessage.Row;

                /**
                 * Verifies a Row message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Row message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Row
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.ListMessage.Row;

                /**
                 * Creates a plain object from a Row message. Also converts values to other types if specified.
                 * @param message Row
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.ListMessage.Row, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Row to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Row
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OrderMessage. */
        interface IOrderMessage {

            /** OrderMessage orderID */
            orderID?: (string|null);

            /** OrderMessage thumbnail */
            thumbnail?: (Uint8Array|null);

            /** OrderMessage itemCount */
            itemCount?: (number|null);

            /** OrderMessage status */
            status?: (WAE2E.Message.OrderMessage.OrderStatus|null);

            /** OrderMessage surface */
            surface?: (WAE2E.Message.OrderMessage.OrderSurface|null);

            /** OrderMessage message */
            message?: (string|null);

            /** OrderMessage orderTitle */
            orderTitle?: (string|null);

            /** OrderMessage sellerJID */
            sellerJID?: (string|null);

            /** OrderMessage token */
            token?: (string|null);

            /** OrderMessage totalAmount1000 */
            totalAmount1000?: (number|Long|null);

            /** OrderMessage totalCurrencyCode */
            totalCurrencyCode?: (string|null);

            /** OrderMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** OrderMessage messageVersion */
            messageVersion?: (number|null);

            /** OrderMessage orderRequestMessageID */
            orderRequestMessageID?: (WAProtocol.IMessageKey|null);
        }

        /** Represents an OrderMessage. */
        class OrderMessage implements IOrderMessage {

            /**
             * Constructs a new OrderMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IOrderMessage);

            /** OrderMessage orderID. */
            public orderID: string;

            /** OrderMessage thumbnail. */
            public thumbnail: Uint8Array;

            /** OrderMessage itemCount. */
            public itemCount: number;

            /** OrderMessage status. */
            public status: WAE2E.Message.OrderMessage.OrderStatus;

            /** OrderMessage surface. */
            public surface: WAE2E.Message.OrderMessage.OrderSurface;

            /** OrderMessage message. */
            public message: string;

            /** OrderMessage orderTitle. */
            public orderTitle: string;

            /** OrderMessage sellerJID. */
            public sellerJID: string;

            /** OrderMessage token. */
            public token: string;

            /** OrderMessage totalAmount1000. */
            public totalAmount1000: (number|Long);

            /** OrderMessage totalCurrencyCode. */
            public totalCurrencyCode: string;

            /** OrderMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** OrderMessage messageVersion. */
            public messageVersion: number;

            /** OrderMessage orderRequestMessageID. */
            public orderRequestMessageID?: (WAProtocol.IMessageKey|null);

            /**
             * Creates a new OrderMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OrderMessage instance
             */
            public static create(properties?: WAE2E.Message.IOrderMessage): WAE2E.Message.OrderMessage;

            /**
             * Encodes the specified OrderMessage message. Does not implicitly {@link WAE2E.Message.OrderMessage.verify|verify} messages.
             * @param message OrderMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IOrderMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OrderMessage message, length delimited. Does not implicitly {@link WAE2E.Message.OrderMessage.verify|verify} messages.
             * @param message OrderMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IOrderMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OrderMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OrderMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.OrderMessage;

            /**
             * Decodes an OrderMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OrderMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.OrderMessage;

            /**
             * Verifies an OrderMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OrderMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OrderMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.OrderMessage;

            /**
             * Creates a plain object from an OrderMessage message. Also converts values to other types if specified.
             * @param message OrderMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.OrderMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OrderMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OrderMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace OrderMessage {

            /** OrderSurface enum. */
            enum OrderSurface {
                CATALOG = 1
            }

            /** OrderStatus enum. */
            enum OrderStatus {
                INQUIRY = 1,
                ACCEPTED = 2,
                DECLINED = 3
            }
        }

        /** Properties of a PaymentInviteMessage. */
        interface IPaymentInviteMessage {

            /** PaymentInviteMessage serviceType */
            serviceType?: (WAE2E.Message.PaymentInviteMessage.ServiceType|null);

            /** PaymentInviteMessage expiryTimestamp */
            expiryTimestamp?: (number|Long|null);
        }

        /** Represents a PaymentInviteMessage. */
        class PaymentInviteMessage implements IPaymentInviteMessage {

            /**
             * Constructs a new PaymentInviteMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IPaymentInviteMessage);

            /** PaymentInviteMessage serviceType. */
            public serviceType: WAE2E.Message.PaymentInviteMessage.ServiceType;

            /** PaymentInviteMessage expiryTimestamp. */
            public expiryTimestamp: (number|Long);

            /**
             * Creates a new PaymentInviteMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PaymentInviteMessage instance
             */
            public static create(properties?: WAE2E.Message.IPaymentInviteMessage): WAE2E.Message.PaymentInviteMessage;

            /**
             * Encodes the specified PaymentInviteMessage message. Does not implicitly {@link WAE2E.Message.PaymentInviteMessage.verify|verify} messages.
             * @param message PaymentInviteMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IPaymentInviteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PaymentInviteMessage message, length delimited. Does not implicitly {@link WAE2E.Message.PaymentInviteMessage.verify|verify} messages.
             * @param message PaymentInviteMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IPaymentInviteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PaymentInviteMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PaymentInviteMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PaymentInviteMessage;

            /**
             * Decodes a PaymentInviteMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PaymentInviteMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PaymentInviteMessage;

            /**
             * Verifies a PaymentInviteMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PaymentInviteMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PaymentInviteMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.PaymentInviteMessage;

            /**
             * Creates a plain object from a PaymentInviteMessage message. Also converts values to other types if specified.
             * @param message PaymentInviteMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.PaymentInviteMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PaymentInviteMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PaymentInviteMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PaymentInviteMessage {

            /** ServiceType enum. */
            enum ServiceType {
                UNKNOWN = 0,
                FBPAY = 1,
                NOVI = 2,
                UPI = 3
            }
        }

        /** Properties of a HighlyStructuredMessage. */
        interface IHighlyStructuredMessage {

            /** HighlyStructuredMessage namespace */
            namespace?: (string|null);

            /** HighlyStructuredMessage elementName */
            elementName?: (string|null);

            /** HighlyStructuredMessage params */
            params?: (string[]|null);

            /** HighlyStructuredMessage fallbackLg */
            fallbackLg?: (string|null);

            /** HighlyStructuredMessage fallbackLc */
            fallbackLc?: (string|null);

            /** HighlyStructuredMessage localizableParams */
            localizableParams?: (WAE2E.Message.HighlyStructuredMessage.IHSMLocalizableParameter[]|null);

            /** HighlyStructuredMessage deterministicLg */
            deterministicLg?: (string|null);

            /** HighlyStructuredMessage deterministicLc */
            deterministicLc?: (string|null);

            /** HighlyStructuredMessage hydratedHsm */
            hydratedHsm?: (WAE2E.Message.ITemplateMessage|null);
        }

        /** Represents a HighlyStructuredMessage. */
        class HighlyStructuredMessage implements IHighlyStructuredMessage {

            /**
             * Constructs a new HighlyStructuredMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IHighlyStructuredMessage);

            /** HighlyStructuredMessage namespace. */
            public namespace: string;

            /** HighlyStructuredMessage elementName. */
            public elementName: string;

            /** HighlyStructuredMessage params. */
            public params: string[];

            /** HighlyStructuredMessage fallbackLg. */
            public fallbackLg: string;

            /** HighlyStructuredMessage fallbackLc. */
            public fallbackLc: string;

            /** HighlyStructuredMessage localizableParams. */
            public localizableParams: WAE2E.Message.HighlyStructuredMessage.IHSMLocalizableParameter[];

            /** HighlyStructuredMessage deterministicLg. */
            public deterministicLg: string;

            /** HighlyStructuredMessage deterministicLc. */
            public deterministicLc: string;

            /** HighlyStructuredMessage hydratedHsm. */
            public hydratedHsm?: (WAE2E.Message.ITemplateMessage|null);

            /**
             * Creates a new HighlyStructuredMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HighlyStructuredMessage instance
             */
            public static create(properties?: WAE2E.Message.IHighlyStructuredMessage): WAE2E.Message.HighlyStructuredMessage;

            /**
             * Encodes the specified HighlyStructuredMessage message. Does not implicitly {@link WAE2E.Message.HighlyStructuredMessage.verify|verify} messages.
             * @param message HighlyStructuredMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IHighlyStructuredMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HighlyStructuredMessage message, length delimited. Does not implicitly {@link WAE2E.Message.HighlyStructuredMessage.verify|verify} messages.
             * @param message HighlyStructuredMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IHighlyStructuredMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HighlyStructuredMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HighlyStructuredMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.HighlyStructuredMessage;

            /**
             * Decodes a HighlyStructuredMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HighlyStructuredMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.HighlyStructuredMessage;

            /**
             * Verifies a HighlyStructuredMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HighlyStructuredMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HighlyStructuredMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.HighlyStructuredMessage;

            /**
             * Creates a plain object from a HighlyStructuredMessage message. Also converts values to other types if specified.
             * @param message HighlyStructuredMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.HighlyStructuredMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HighlyStructuredMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HighlyStructuredMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace HighlyStructuredMessage {

            /** Properties of a HSMLocalizableParameter. */
            interface IHSMLocalizableParameter {

                /** HSMLocalizableParameter currency */
                currency?: (WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency|null);

                /** HSMLocalizableParameter dateTime */
                dateTime?: (WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime|null);

                /** HSMLocalizableParameter default */
                "default"?: (string|null);
            }

            /** Represents a HSMLocalizableParameter. */
            class HSMLocalizableParameter implements IHSMLocalizableParameter {

                /**
                 * Constructs a new HSMLocalizableParameter.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.HighlyStructuredMessage.IHSMLocalizableParameter);

                /** HSMLocalizableParameter currency. */
                public currency?: (WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency|null);

                /** HSMLocalizableParameter dateTime. */
                public dateTime?: (WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime|null);

                /** HSMLocalizableParameter default. */
                public default: string;

                /** HSMLocalizableParameter paramOneof. */
                public paramOneof?: ("currency"|"dateTime");

                /**
                 * Creates a new HSMLocalizableParameter instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HSMLocalizableParameter instance
                 */
                public static create(properties?: WAE2E.Message.HighlyStructuredMessage.IHSMLocalizableParameter): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter;

                /**
                 * Encodes the specified HSMLocalizableParameter message. Does not implicitly {@link WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.verify|verify} messages.
                 * @param message HSMLocalizableParameter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.HighlyStructuredMessage.IHSMLocalizableParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HSMLocalizableParameter message, length delimited. Does not implicitly {@link WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.verify|verify} messages.
                 * @param message HSMLocalizableParameter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.HighlyStructuredMessage.IHSMLocalizableParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HSMLocalizableParameter message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HSMLocalizableParameter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter;

                /**
                 * Decodes a HSMLocalizableParameter message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HSMLocalizableParameter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter;

                /**
                 * Verifies a HSMLocalizableParameter message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HSMLocalizableParameter message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HSMLocalizableParameter
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter;

                /**
                 * Creates a plain object from a HSMLocalizableParameter message. Also converts values to other types if specified.
                 * @param message HSMLocalizableParameter
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HSMLocalizableParameter to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for HSMLocalizableParameter
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace HSMLocalizableParameter {

                /** Properties of a HSMDateTime. */
                interface IHSMDateTime {

                    /** HSMDateTime component */
                    component?: (WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent|null);

                    /** HSMDateTime unixEpoch */
                    unixEpoch?: (WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch|null);
                }

                /** Represents a HSMDateTime. */
                class HSMDateTime implements IHSMDateTime {

                    /**
                     * Constructs a new HSMDateTime.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime);

                    /** HSMDateTime component. */
                    public component?: (WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent|null);

                    /** HSMDateTime unixEpoch. */
                    public unixEpoch?: (WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch|null);

                    /** HSMDateTime datetimeOneof. */
                    public datetimeOneof?: ("component"|"unixEpoch");

                    /**
                     * Creates a new HSMDateTime instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HSMDateTime instance
                     */
                    public static create(properties?: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime;

                    /**
                     * Encodes the specified HSMDateTime message. Does not implicitly {@link WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.verify|verify} messages.
                     * @param message HSMDateTime message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HSMDateTime message, length delimited. Does not implicitly {@link WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.verify|verify} messages.
                     * @param message HSMDateTime message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HSMDateTime message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HSMDateTime
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime;

                    /**
                     * Decodes a HSMDateTime message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HSMDateTime
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime;

                    /**
                     * Verifies a HSMDateTime message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HSMDateTime message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HSMDateTime
                     */
                    public static fromObject(object: { [k: string]: any }): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime;

                    /**
                     * Creates a plain object from a HSMDateTime message. Also converts values to other types if specified.
                     * @param message HSMDateTime
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HSMDateTime to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HSMDateTime
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace HSMDateTime {

                    /** Properties of a HSMDateTimeComponent. */
                    interface IHSMDateTimeComponent {

                        /** HSMDateTimeComponent dayOfWeek */
                        dayOfWeek?: (WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.DayOfWeekType|null);

                        /** HSMDateTimeComponent year */
                        year?: (number|null);

                        /** HSMDateTimeComponent month */
                        month?: (number|null);

                        /** HSMDateTimeComponent dayOfMonth */
                        dayOfMonth?: (number|null);

                        /** HSMDateTimeComponent hour */
                        hour?: (number|null);

                        /** HSMDateTimeComponent minute */
                        minute?: (number|null);

                        /** HSMDateTimeComponent calendar */
                        calendar?: (WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.CalendarType|null);
                    }

                    /** Represents a HSMDateTimeComponent. */
                    class HSMDateTimeComponent implements IHSMDateTimeComponent {

                        /**
                         * Constructs a new HSMDateTimeComponent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent);

                        /** HSMDateTimeComponent dayOfWeek. */
                        public dayOfWeek: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.DayOfWeekType;

                        /** HSMDateTimeComponent year. */
                        public year: number;

                        /** HSMDateTimeComponent month. */
                        public month: number;

                        /** HSMDateTimeComponent dayOfMonth. */
                        public dayOfMonth: number;

                        /** HSMDateTimeComponent hour. */
                        public hour: number;

                        /** HSMDateTimeComponent minute. */
                        public minute: number;

                        /** HSMDateTimeComponent calendar. */
                        public calendar: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.CalendarType;

                        /**
                         * Creates a new HSMDateTimeComponent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HSMDateTimeComponent instance
                         */
                        public static create(properties?: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent;

                        /**
                         * Encodes the specified HSMDateTimeComponent message. Does not implicitly {@link WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.verify|verify} messages.
                         * @param message HSMDateTimeComponent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HSMDateTimeComponent message, length delimited. Does not implicitly {@link WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.verify|verify} messages.
                         * @param message HSMDateTimeComponent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HSMDateTimeComponent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HSMDateTimeComponent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent;

                        /**
                         * Decodes a HSMDateTimeComponent message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HSMDateTimeComponent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent;

                        /**
                         * Verifies a HSMDateTimeComponent message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HSMDateTimeComponent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HSMDateTimeComponent
                         */
                        public static fromObject(object: { [k: string]: any }): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent;

                        /**
                         * Creates a plain object from a HSMDateTimeComponent message. Also converts values to other types if specified.
                         * @param message HSMDateTimeComponent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HSMDateTimeComponent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for HSMDateTimeComponent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace HSMDateTimeComponent {

                        /** CalendarType enum. */
                        enum CalendarType {
                            GREGORIAN = 1,
                            SOLAR_HIJRI = 2
                        }

                        /** DayOfWeekType enum. */
                        enum DayOfWeekType {
                            MONDAY = 1,
                            TUESDAY = 2,
                            WEDNESDAY = 3,
                            THURSDAY = 4,
                            FRIDAY = 5,
                            SATURDAY = 6,
                            SUNDAY = 7
                        }
                    }

                    /** Properties of a HSMDateTimeUnixEpoch. */
                    interface IHSMDateTimeUnixEpoch {

                        /** HSMDateTimeUnixEpoch timestamp */
                        timestamp?: (number|Long|null);
                    }

                    /** Represents a HSMDateTimeUnixEpoch. */
                    class HSMDateTimeUnixEpoch implements IHSMDateTimeUnixEpoch {

                        /**
                         * Constructs a new HSMDateTimeUnixEpoch.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch);

                        /** HSMDateTimeUnixEpoch timestamp. */
                        public timestamp: (number|Long);

                        /**
                         * Creates a new HSMDateTimeUnixEpoch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HSMDateTimeUnixEpoch instance
                         */
                        public static create(properties?: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch;

                        /**
                         * Encodes the specified HSMDateTimeUnixEpoch message. Does not implicitly {@link WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch.verify|verify} messages.
                         * @param message HSMDateTimeUnixEpoch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HSMDateTimeUnixEpoch message, length delimited. Does not implicitly {@link WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch.verify|verify} messages.
                         * @param message HSMDateTimeUnixEpoch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HSMDateTimeUnixEpoch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HSMDateTimeUnixEpoch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch;

                        /**
                         * Decodes a HSMDateTimeUnixEpoch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HSMDateTimeUnixEpoch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch;

                        /**
                         * Verifies a HSMDateTimeUnixEpoch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HSMDateTimeUnixEpoch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HSMDateTimeUnixEpoch
                         */
                        public static fromObject(object: { [k: string]: any }): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch;

                        /**
                         * Creates a plain object from a HSMDateTimeUnixEpoch message. Also converts values to other types if specified.
                         * @param message HSMDateTimeUnixEpoch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HSMDateTimeUnixEpoch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for HSMDateTimeUnixEpoch
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a HSMCurrency. */
                interface IHSMCurrency {

                    /** HSMCurrency currencyCode */
                    currencyCode?: (string|null);

                    /** HSMCurrency amount1000 */
                    amount1000?: (number|Long|null);
                }

                /** Represents a HSMCurrency. */
                class HSMCurrency implements IHSMCurrency {

                    /**
                     * Constructs a new HSMCurrency.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency);

                    /** HSMCurrency currencyCode. */
                    public currencyCode: string;

                    /** HSMCurrency amount1000. */
                    public amount1000: (number|Long);

                    /**
                     * Creates a new HSMCurrency instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HSMCurrency instance
                     */
                    public static create(properties?: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency;

                    /**
                     * Encodes the specified HSMCurrency message. Does not implicitly {@link WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency.verify|verify} messages.
                     * @param message HSMCurrency message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HSMCurrency message, length delimited. Does not implicitly {@link WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency.verify|verify} messages.
                     * @param message HSMCurrency message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HSMCurrency message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HSMCurrency
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency;

                    /**
                     * Decodes a HSMCurrency message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HSMCurrency
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency;

                    /**
                     * Verifies a HSMCurrency message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HSMCurrency message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HSMCurrency
                     */
                    public static fromObject(object: { [k: string]: any }): WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency;

                    /**
                     * Creates a plain object from a HSMCurrency message. Also converts values to other types if specified.
                     * @param message HSMCurrency
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: WAE2E.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HSMCurrency to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HSMCurrency
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }

        /** Properties of a HistorySyncNotification. */
        interface IHistorySyncNotification {

            /** HistorySyncNotification fileSHA256 */
            fileSHA256?: (Uint8Array|null);

            /** HistorySyncNotification fileLength */
            fileLength?: (number|Long|null);

            /** HistorySyncNotification mediaKey */
            mediaKey?: (Uint8Array|null);

            /** HistorySyncNotification fileEncSHA256 */
            fileEncSHA256?: (Uint8Array|null);

            /** HistorySyncNotification directPath */
            directPath?: (string|null);

            /** HistorySyncNotification syncType */
            syncType?: (WAE2E.Message.HistorySyncNotification.HistorySyncType|null);

            /** HistorySyncNotification chunkOrder */
            chunkOrder?: (number|null);

            /** HistorySyncNotification originalMessageID */
            originalMessageID?: (string|null);

            /** HistorySyncNotification progress */
            progress?: (number|null);

            /** HistorySyncNotification oldestMsgInChunkTimestampSec */
            oldestMsgInChunkTimestampSec?: (number|Long|null);

            /** HistorySyncNotification initialHistBootstrapInlinePayload */
            initialHistBootstrapInlinePayload?: (Uint8Array|null);

            /** HistorySyncNotification peerDataRequestSessionID */
            peerDataRequestSessionID?: (string|null);
        }

        /** Represents a HistorySyncNotification. */
        class HistorySyncNotification implements IHistorySyncNotification {

            /**
             * Constructs a new HistorySyncNotification.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IHistorySyncNotification);

            /** HistorySyncNotification fileSHA256. */
            public fileSHA256: Uint8Array;

            /** HistorySyncNotification fileLength. */
            public fileLength: (number|Long);

            /** HistorySyncNotification mediaKey. */
            public mediaKey: Uint8Array;

            /** HistorySyncNotification fileEncSHA256. */
            public fileEncSHA256: Uint8Array;

            /** HistorySyncNotification directPath. */
            public directPath: string;

            /** HistorySyncNotification syncType. */
            public syncType: WAE2E.Message.HistorySyncNotification.HistorySyncType;

            /** HistorySyncNotification chunkOrder. */
            public chunkOrder: number;

            /** HistorySyncNotification originalMessageID. */
            public originalMessageID: string;

            /** HistorySyncNotification progress. */
            public progress: number;

            /** HistorySyncNotification oldestMsgInChunkTimestampSec. */
            public oldestMsgInChunkTimestampSec: (number|Long);

            /** HistorySyncNotification initialHistBootstrapInlinePayload. */
            public initialHistBootstrapInlinePayload: Uint8Array;

            /** HistorySyncNotification peerDataRequestSessionID. */
            public peerDataRequestSessionID: string;

            /**
             * Creates a new HistorySyncNotification instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HistorySyncNotification instance
             */
            public static create(properties?: WAE2E.Message.IHistorySyncNotification): WAE2E.Message.HistorySyncNotification;

            /**
             * Encodes the specified HistorySyncNotification message. Does not implicitly {@link WAE2E.Message.HistorySyncNotification.verify|verify} messages.
             * @param message HistorySyncNotification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IHistorySyncNotification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HistorySyncNotification message, length delimited. Does not implicitly {@link WAE2E.Message.HistorySyncNotification.verify|verify} messages.
             * @param message HistorySyncNotification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IHistorySyncNotification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HistorySyncNotification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HistorySyncNotification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.HistorySyncNotification;

            /**
             * Decodes a HistorySyncNotification message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HistorySyncNotification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.HistorySyncNotification;

            /**
             * Verifies a HistorySyncNotification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HistorySyncNotification message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HistorySyncNotification
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.HistorySyncNotification;

            /**
             * Creates a plain object from a HistorySyncNotification message. Also converts values to other types if specified.
             * @param message HistorySyncNotification
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.HistorySyncNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HistorySyncNotification to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HistorySyncNotification
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace HistorySyncNotification {

            /** HistorySyncType enum. */
            enum HistorySyncType {
                INITIAL_BOOTSTRAP = 0,
                INITIAL_STATUS_V3 = 1,
                FULL = 2,
                RECENT = 3,
                PUSH_NAME = 4,
                NON_BLOCKING_DATA = 5,
                ON_DEMAND = 6,
                NO_HISTORY = 7
            }
        }

        /** Properties of a RequestWelcomeMessageMetadata. */
        interface IRequestWelcomeMessageMetadata {

            /** RequestWelcomeMessageMetadata localChatState */
            localChatState?: (WAE2E.Message.RequestWelcomeMessageMetadata.LocalChatState|null);
        }

        /** Represents a RequestWelcomeMessageMetadata. */
        class RequestWelcomeMessageMetadata implements IRequestWelcomeMessageMetadata {

            /**
             * Constructs a new RequestWelcomeMessageMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IRequestWelcomeMessageMetadata);

            /** RequestWelcomeMessageMetadata localChatState. */
            public localChatState: WAE2E.Message.RequestWelcomeMessageMetadata.LocalChatState;

            /**
             * Creates a new RequestWelcomeMessageMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestWelcomeMessageMetadata instance
             */
            public static create(properties?: WAE2E.Message.IRequestWelcomeMessageMetadata): WAE2E.Message.RequestWelcomeMessageMetadata;

            /**
             * Encodes the specified RequestWelcomeMessageMetadata message. Does not implicitly {@link WAE2E.Message.RequestWelcomeMessageMetadata.verify|verify} messages.
             * @param message RequestWelcomeMessageMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IRequestWelcomeMessageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestWelcomeMessageMetadata message, length delimited. Does not implicitly {@link WAE2E.Message.RequestWelcomeMessageMetadata.verify|verify} messages.
             * @param message RequestWelcomeMessageMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IRequestWelcomeMessageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestWelcomeMessageMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestWelcomeMessageMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.RequestWelcomeMessageMetadata;

            /**
             * Decodes a RequestWelcomeMessageMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestWelcomeMessageMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.RequestWelcomeMessageMetadata;

            /**
             * Verifies a RequestWelcomeMessageMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestWelcomeMessageMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestWelcomeMessageMetadata
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.RequestWelcomeMessageMetadata;

            /**
             * Creates a plain object from a RequestWelcomeMessageMetadata message. Also converts values to other types if specified.
             * @param message RequestWelcomeMessageMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.RequestWelcomeMessageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestWelcomeMessageMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RequestWelcomeMessageMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RequestWelcomeMessageMetadata {

            /** LocalChatState enum. */
            enum LocalChatState {
                EMPTY = 0,
                NON_EMPTY = 1
            }
        }

        /** Properties of a ProtocolMessage. */
        interface IProtocolMessage {

            /** ProtocolMessage key */
            key?: (WAProtocol.IMessageKey|null);

            /** ProtocolMessage type */
            type?: (WAE2E.Message.ProtocolMessage.Type|null);

            /** ProtocolMessage ephemeralExpiration */
            ephemeralExpiration?: (number|null);

            /** ProtocolMessage ephemeralSettingTimestamp */
            ephemeralSettingTimestamp?: (number|Long|null);

            /** ProtocolMessage historySyncNotification */
            historySyncNotification?: (WAE2E.Message.IHistorySyncNotification|null);

            /** ProtocolMessage appStateSyncKeyShare */
            appStateSyncKeyShare?: (WAE2E.Message.IAppStateSyncKeyShare|null);

            /** ProtocolMessage appStateSyncKeyRequest */
            appStateSyncKeyRequest?: (WAE2E.Message.IAppStateSyncKeyRequest|null);

            /** ProtocolMessage initialSecurityNotificationSettingSync */
            initialSecurityNotificationSettingSync?: (WAE2E.Message.IInitialSecurityNotificationSettingSync|null);

            /** ProtocolMessage appStateFatalExceptionNotification */
            appStateFatalExceptionNotification?: (WAE2E.Message.IAppStateFatalExceptionNotification|null);

            /** ProtocolMessage disappearingMode */
            disappearingMode?: (WAE2E.IDisappearingMode|null);

            /** ProtocolMessage editedMessage */
            editedMessage?: (WAE2E.IMessage|null);

            /** ProtocolMessage timestampMS */
            timestampMS?: (number|Long|null);

            /** ProtocolMessage peerDataOperationRequestMessage */
            peerDataOperationRequestMessage?: (WAE2E.Message.IPeerDataOperationRequestMessage|null);

            /** ProtocolMessage peerDataOperationRequestResponseMessage */
            peerDataOperationRequestResponseMessage?: (WAE2E.Message.IPeerDataOperationRequestResponseMessage|null);

            /** ProtocolMessage botFeedbackMessage */
            botFeedbackMessage?: (WAE2E.Message.IBotFeedbackMessage|null);

            /** ProtocolMessage invokerJID */
            invokerJID?: (string|null);

            /** ProtocolMessage requestWelcomeMessageMetadata */
            requestWelcomeMessageMetadata?: (WAE2E.Message.IRequestWelcomeMessageMetadata|null);

            /** ProtocolMessage mediaNotifyMessage */
            mediaNotifyMessage?: (WAE2E.IMediaNotifyMessage|null);

            /** ProtocolMessage cloudApiThreadControlNotification */
            cloudApiThreadControlNotification?: (WAE2E.Message.ICloudAPIThreadControlNotification|null);

            /** ProtocolMessage lidMigrationMappingSyncMessage */
            lidMigrationMappingSyncMessage?: (WAE2E.ILIDMigrationMappingSyncMessage|null);
        }

        /** Represents a ProtocolMessage. */
        class ProtocolMessage implements IProtocolMessage {

            /**
             * Constructs a new ProtocolMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IProtocolMessage);

            /** ProtocolMessage key. */
            public key?: (WAProtocol.IMessageKey|null);

            /** ProtocolMessage type. */
            public type: WAE2E.Message.ProtocolMessage.Type;

            /** ProtocolMessage ephemeralExpiration. */
            public ephemeralExpiration: number;

            /** ProtocolMessage ephemeralSettingTimestamp. */
            public ephemeralSettingTimestamp: (number|Long);

            /** ProtocolMessage historySyncNotification. */
            public historySyncNotification?: (WAE2E.Message.IHistorySyncNotification|null);

            /** ProtocolMessage appStateSyncKeyShare. */
            public appStateSyncKeyShare?: (WAE2E.Message.IAppStateSyncKeyShare|null);

            /** ProtocolMessage appStateSyncKeyRequest. */
            public appStateSyncKeyRequest?: (WAE2E.Message.IAppStateSyncKeyRequest|null);

            /** ProtocolMessage initialSecurityNotificationSettingSync. */
            public initialSecurityNotificationSettingSync?: (WAE2E.Message.IInitialSecurityNotificationSettingSync|null);

            /** ProtocolMessage appStateFatalExceptionNotification. */
            public appStateFatalExceptionNotification?: (WAE2E.Message.IAppStateFatalExceptionNotification|null);

            /** ProtocolMessage disappearingMode. */
            public disappearingMode?: (WAE2E.IDisappearingMode|null);

            /** ProtocolMessage editedMessage. */
            public editedMessage?: (WAE2E.IMessage|null);

            /** ProtocolMessage timestampMS. */
            public timestampMS: (number|Long);

            /** ProtocolMessage peerDataOperationRequestMessage. */
            public peerDataOperationRequestMessage?: (WAE2E.Message.IPeerDataOperationRequestMessage|null);

            /** ProtocolMessage peerDataOperationRequestResponseMessage. */
            public peerDataOperationRequestResponseMessage?: (WAE2E.Message.IPeerDataOperationRequestResponseMessage|null);

            /** ProtocolMessage botFeedbackMessage. */
            public botFeedbackMessage?: (WAE2E.Message.IBotFeedbackMessage|null);

            /** ProtocolMessage invokerJID. */
            public invokerJID: string;

            /** ProtocolMessage requestWelcomeMessageMetadata. */
            public requestWelcomeMessageMetadata?: (WAE2E.Message.IRequestWelcomeMessageMetadata|null);

            /** ProtocolMessage mediaNotifyMessage. */
            public mediaNotifyMessage?: (WAE2E.IMediaNotifyMessage|null);

            /** ProtocolMessage cloudApiThreadControlNotification. */
            public cloudApiThreadControlNotification?: (WAE2E.Message.ICloudAPIThreadControlNotification|null);

            /** ProtocolMessage lidMigrationMappingSyncMessage. */
            public lidMigrationMappingSyncMessage?: (WAE2E.ILIDMigrationMappingSyncMessage|null);

            /**
             * Creates a new ProtocolMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtocolMessage instance
             */
            public static create(properties?: WAE2E.Message.IProtocolMessage): WAE2E.Message.ProtocolMessage;

            /**
             * Encodes the specified ProtocolMessage message. Does not implicitly {@link WAE2E.Message.ProtocolMessage.verify|verify} messages.
             * @param message ProtocolMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IProtocolMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtocolMessage message, length delimited. Does not implicitly {@link WAE2E.Message.ProtocolMessage.verify|verify} messages.
             * @param message ProtocolMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IProtocolMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtocolMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtocolMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ProtocolMessage;

            /**
             * Decodes a ProtocolMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtocolMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ProtocolMessage;

            /**
             * Verifies a ProtocolMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtocolMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtocolMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.ProtocolMessage;

            /**
             * Creates a plain object from a ProtocolMessage message. Also converts values to other types if specified.
             * @param message ProtocolMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.ProtocolMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtocolMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ProtocolMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ProtocolMessage {

            /** Type enum. */
            enum Type {
                REVOKE = 0,
                EPHEMERAL_SETTING = 3,
                EPHEMERAL_SYNC_RESPONSE = 4,
                HISTORY_SYNC_NOTIFICATION = 5,
                APP_STATE_SYNC_KEY_SHARE = 6,
                APP_STATE_SYNC_KEY_REQUEST = 7,
                MSG_FANOUT_BACKFILL_REQUEST = 8,
                INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC = 9,
                APP_STATE_FATAL_EXCEPTION_NOTIFICATION = 10,
                SHARE_PHONE_NUMBER = 11,
                MESSAGE_EDIT = 14,
                PEER_DATA_OPERATION_REQUEST_MESSAGE = 16,
                PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE = 17,
                REQUEST_WELCOME_MESSAGE = 18,
                BOT_FEEDBACK_MESSAGE = 19,
                MEDIA_NOTIFY_MESSAGE = 20,
                CLOUD_API_THREAD_CONTROL_NOTIFICATION = 21,
                LID_MIGRATION_MAPPING_SYNC = 22,
                REMINDER_MESSAGE = 23,
                BOT_MEMU_ONBOARDING_MESSAGE = 24
            }
        }

        /** Properties of a CloudAPIThreadControlNotification. */
        interface ICloudAPIThreadControlNotification {

            /** CloudAPIThreadControlNotification status */
            status?: (WAE2E.Message.CloudAPIThreadControlNotification.CloudAPIThreadControl|null);

            /** CloudAPIThreadControlNotification senderNotificationTimestampMS */
            senderNotificationTimestampMS?: (number|Long|null);

            /** CloudAPIThreadControlNotification consumerLid */
            consumerLid?: (string|null);

            /** CloudAPIThreadControlNotification consumerPhoneNumber */
            consumerPhoneNumber?: (string|null);
        }

        /** Represents a CloudAPIThreadControlNotification. */
        class CloudAPIThreadControlNotification implements ICloudAPIThreadControlNotification {

            /**
             * Constructs a new CloudAPIThreadControlNotification.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.ICloudAPIThreadControlNotification);

            /** CloudAPIThreadControlNotification status. */
            public status: WAE2E.Message.CloudAPIThreadControlNotification.CloudAPIThreadControl;

            /** CloudAPIThreadControlNotification senderNotificationTimestampMS. */
            public senderNotificationTimestampMS: (number|Long);

            /** CloudAPIThreadControlNotification consumerLid. */
            public consumerLid: string;

            /** CloudAPIThreadControlNotification consumerPhoneNumber. */
            public consumerPhoneNumber: string;

            /**
             * Creates a new CloudAPIThreadControlNotification instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CloudAPIThreadControlNotification instance
             */
            public static create(properties?: WAE2E.Message.ICloudAPIThreadControlNotification): WAE2E.Message.CloudAPIThreadControlNotification;

            /**
             * Encodes the specified CloudAPIThreadControlNotification message. Does not implicitly {@link WAE2E.Message.CloudAPIThreadControlNotification.verify|verify} messages.
             * @param message CloudAPIThreadControlNotification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.ICloudAPIThreadControlNotification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CloudAPIThreadControlNotification message, length delimited. Does not implicitly {@link WAE2E.Message.CloudAPIThreadControlNotification.verify|verify} messages.
             * @param message CloudAPIThreadControlNotification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.ICloudAPIThreadControlNotification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CloudAPIThreadControlNotification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CloudAPIThreadControlNotification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.CloudAPIThreadControlNotification;

            /**
             * Decodes a CloudAPIThreadControlNotification message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CloudAPIThreadControlNotification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.CloudAPIThreadControlNotification;

            /**
             * Verifies a CloudAPIThreadControlNotification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CloudAPIThreadControlNotification message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CloudAPIThreadControlNotification
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.CloudAPIThreadControlNotification;

            /**
             * Creates a plain object from a CloudAPIThreadControlNotification message. Also converts values to other types if specified.
             * @param message CloudAPIThreadControlNotification
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.CloudAPIThreadControlNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CloudAPIThreadControlNotification to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CloudAPIThreadControlNotification
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace CloudAPIThreadControlNotification {

            /** CloudAPIThreadControl enum. */
            enum CloudAPIThreadControl {
                UNKNOWN = 0,
                CONTROL_PASSED = 1,
                CONTROL_TAKEN = 2
            }
        }

        /** Properties of a BotFeedbackMessage. */
        interface IBotFeedbackMessage {

            /** BotFeedbackMessage messageKey */
            messageKey?: (WAProtocol.IMessageKey|null);

            /** BotFeedbackMessage kind */
            kind?: (WAE2E.Message.BotFeedbackMessage.BotFeedbackKind|null);

            /** BotFeedbackMessage text */
            text?: (string|null);

            /** BotFeedbackMessage kindNegative */
            kindNegative?: (number|Long|null);

            /** BotFeedbackMessage kindPositive */
            kindPositive?: (number|Long|null);

            /** BotFeedbackMessage kindReport */
            kindReport?: (WAE2E.Message.BotFeedbackMessage.ReportKind|null);
        }

        /** Represents a BotFeedbackMessage. */
        class BotFeedbackMessage implements IBotFeedbackMessage {

            /**
             * Constructs a new BotFeedbackMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IBotFeedbackMessage);

            /** BotFeedbackMessage messageKey. */
            public messageKey?: (WAProtocol.IMessageKey|null);

            /** BotFeedbackMessage kind. */
            public kind: WAE2E.Message.BotFeedbackMessage.BotFeedbackKind;

            /** BotFeedbackMessage text. */
            public text: string;

            /** BotFeedbackMessage kindNegative. */
            public kindNegative: (number|Long);

            /** BotFeedbackMessage kindPositive. */
            public kindPositive: (number|Long);

            /** BotFeedbackMessage kindReport. */
            public kindReport: WAE2E.Message.BotFeedbackMessage.ReportKind;

            /**
             * Creates a new BotFeedbackMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BotFeedbackMessage instance
             */
            public static create(properties?: WAE2E.Message.IBotFeedbackMessage): WAE2E.Message.BotFeedbackMessage;

            /**
             * Encodes the specified BotFeedbackMessage message. Does not implicitly {@link WAE2E.Message.BotFeedbackMessage.verify|verify} messages.
             * @param message BotFeedbackMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IBotFeedbackMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BotFeedbackMessage message, length delimited. Does not implicitly {@link WAE2E.Message.BotFeedbackMessage.verify|verify} messages.
             * @param message BotFeedbackMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IBotFeedbackMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BotFeedbackMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BotFeedbackMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.BotFeedbackMessage;

            /**
             * Decodes a BotFeedbackMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BotFeedbackMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.BotFeedbackMessage;

            /**
             * Verifies a BotFeedbackMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BotFeedbackMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BotFeedbackMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.BotFeedbackMessage;

            /**
             * Creates a plain object from a BotFeedbackMessage message. Also converts values to other types if specified.
             * @param message BotFeedbackMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.BotFeedbackMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BotFeedbackMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BotFeedbackMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BotFeedbackMessage {

            /** ReportKind enum. */
            enum ReportKind {
                GENERIC = 0
            }

            /** BotFeedbackKindMultiplePositive enum. */
            enum BotFeedbackKindMultiplePositive {
                BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC = 1
            }

            /** BotFeedbackKindMultipleNegative enum. */
            enum BotFeedbackKindMultipleNegative {
                BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC = 1,
                BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL = 2,
                BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING = 4,
                BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE = 8,
                BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE = 16,
                BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER = 32,
                BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED = 64,
                BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING = 128,
                BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT = 256
            }

            /** BotFeedbackKind enum. */
            enum BotFeedbackKind {
                BOT_FEEDBACK_POSITIVE = 0,
                BOT_FEEDBACK_NEGATIVE_GENERIC = 1,
                BOT_FEEDBACK_NEGATIVE_HELPFUL = 2,
                BOT_FEEDBACK_NEGATIVE_INTERESTING = 3,
                BOT_FEEDBACK_NEGATIVE_ACCURATE = 4,
                BOT_FEEDBACK_NEGATIVE_SAFE = 5,
                BOT_FEEDBACK_NEGATIVE_OTHER = 6,
                BOT_FEEDBACK_NEGATIVE_REFUSED = 7,
                BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING = 8,
                BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT = 9
            }
        }

        /** Properties of a VideoMessage. */
        interface IVideoMessage {

            /** VideoMessage URL */
            URL?: (string|null);

            /** VideoMessage mimetype */
            mimetype?: (string|null);

            /** VideoMessage fileSHA256 */
            fileSHA256?: (Uint8Array|null);

            /** VideoMessage fileLength */
            fileLength?: (number|Long|null);

            /** VideoMessage seconds */
            seconds?: (number|null);

            /** VideoMessage mediaKey */
            mediaKey?: (Uint8Array|null);

            /** VideoMessage caption */
            caption?: (string|null);

            /** VideoMessage gifPlayback */
            gifPlayback?: (boolean|null);

            /** VideoMessage height */
            height?: (number|null);

            /** VideoMessage width */
            width?: (number|null);

            /** VideoMessage fileEncSHA256 */
            fileEncSHA256?: (Uint8Array|null);

            /** VideoMessage interactiveAnnotations */
            interactiveAnnotations?: (WAE2E.IInteractiveAnnotation[]|null);

            /** VideoMessage directPath */
            directPath?: (string|null);

            /** VideoMessage mediaKeyTimestamp */
            mediaKeyTimestamp?: (number|Long|null);

            /** VideoMessage JPEGThumbnail */
            JPEGThumbnail?: (Uint8Array|null);

            /** VideoMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** VideoMessage streamingSidecar */
            streamingSidecar?: (Uint8Array|null);

            /** VideoMessage gifAttribution */
            gifAttribution?: (WAE2E.Message.VideoMessage.Attribution|null);

            /** VideoMessage viewOnce */
            viewOnce?: (boolean|null);

            /** VideoMessage thumbnailDirectPath */
            thumbnailDirectPath?: (string|null);

            /** VideoMessage thumbnailSHA256 */
            thumbnailSHA256?: (Uint8Array|null);

            /** VideoMessage thumbnailEncSHA256 */
            thumbnailEncSHA256?: (Uint8Array|null);

            /** VideoMessage staticURL */
            staticURL?: (string|null);

            /** VideoMessage annotations */
            annotations?: (WAE2E.IInteractiveAnnotation[]|null);

            /** VideoMessage accessibilityLabel */
            accessibilityLabel?: (string|null);

            /** VideoMessage processedVideos */
            processedVideos?: (WAE2E.IProcessedVideo[]|null);
        }

        /** Represents a VideoMessage. */
        class VideoMessage implements IVideoMessage {

            /**
             * Constructs a new VideoMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IVideoMessage);

            /** VideoMessage URL. */
            public URL: string;

            /** VideoMessage mimetype. */
            public mimetype: string;

            /** VideoMessage fileSHA256. */
            public fileSHA256: Uint8Array;

            /** VideoMessage fileLength. */
            public fileLength: (number|Long);

            /** VideoMessage seconds. */
            public seconds: number;

            /** VideoMessage mediaKey. */
            public mediaKey: Uint8Array;

            /** VideoMessage caption. */
            public caption: string;

            /** VideoMessage gifPlayback. */
            public gifPlayback: boolean;

            /** VideoMessage height. */
            public height: number;

            /** VideoMessage width. */
            public width: number;

            /** VideoMessage fileEncSHA256. */
            public fileEncSHA256: Uint8Array;

            /** VideoMessage interactiveAnnotations. */
            public interactiveAnnotations: WAE2E.IInteractiveAnnotation[];

            /** VideoMessage directPath. */
            public directPath: string;

            /** VideoMessage mediaKeyTimestamp. */
            public mediaKeyTimestamp: (number|Long);

            /** VideoMessage JPEGThumbnail. */
            public JPEGThumbnail: Uint8Array;

            /** VideoMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** VideoMessage streamingSidecar. */
            public streamingSidecar: Uint8Array;

            /** VideoMessage gifAttribution. */
            public gifAttribution: WAE2E.Message.VideoMessage.Attribution;

            /** VideoMessage viewOnce. */
            public viewOnce: boolean;

            /** VideoMessage thumbnailDirectPath. */
            public thumbnailDirectPath: string;

            /** VideoMessage thumbnailSHA256. */
            public thumbnailSHA256: Uint8Array;

            /** VideoMessage thumbnailEncSHA256. */
            public thumbnailEncSHA256: Uint8Array;

            /** VideoMessage staticURL. */
            public staticURL: string;

            /** VideoMessage annotations. */
            public annotations: WAE2E.IInteractiveAnnotation[];

            /** VideoMessage accessibilityLabel. */
            public accessibilityLabel: string;

            /** VideoMessage processedVideos. */
            public processedVideos: WAE2E.IProcessedVideo[];

            /**
             * Creates a new VideoMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VideoMessage instance
             */
            public static create(properties?: WAE2E.Message.IVideoMessage): WAE2E.Message.VideoMessage;

            /**
             * Encodes the specified VideoMessage message. Does not implicitly {@link WAE2E.Message.VideoMessage.verify|verify} messages.
             * @param message VideoMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IVideoMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VideoMessage message, length delimited. Does not implicitly {@link WAE2E.Message.VideoMessage.verify|verify} messages.
             * @param message VideoMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IVideoMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VideoMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VideoMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.VideoMessage;

            /**
             * Decodes a VideoMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VideoMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.VideoMessage;

            /**
             * Verifies a VideoMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VideoMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VideoMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.VideoMessage;

            /**
             * Creates a plain object from a VideoMessage message. Also converts values to other types if specified.
             * @param message VideoMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.VideoMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VideoMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VideoMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace VideoMessage {

            /** Attribution enum. */
            enum Attribution {
                NONE = 0,
                GIPHY = 1,
                TENOR = 2
            }
        }

        /** Properties of an ExtendedTextMessage. */
        interface IExtendedTextMessage {

            /** ExtendedTextMessage text */
            text?: (string|null);

            /** ExtendedTextMessage matchedText */
            matchedText?: (string|null);

            /** ExtendedTextMessage canonicalURL */
            canonicalURL?: (string|null);

            /** ExtendedTextMessage description */
            description?: (string|null);

            /** ExtendedTextMessage title */
            title?: (string|null);

            /** ExtendedTextMessage textArgb */
            textArgb?: (number|null);

            /** ExtendedTextMessage backgroundArgb */
            backgroundArgb?: (number|null);

            /** ExtendedTextMessage font */
            font?: (WAE2E.Message.ExtendedTextMessage.FontType|null);

            /** ExtendedTextMessage previewType */
            previewType?: (WAE2E.Message.ExtendedTextMessage.PreviewType|null);

            /** ExtendedTextMessage JPEGThumbnail */
            JPEGThumbnail?: (Uint8Array|null);

            /** ExtendedTextMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** ExtendedTextMessage doNotPlayInline */
            doNotPlayInline?: (boolean|null);

            /** ExtendedTextMessage thumbnailDirectPath */
            thumbnailDirectPath?: (string|null);

            /** ExtendedTextMessage thumbnailSHA256 */
            thumbnailSHA256?: (Uint8Array|null);

            /** ExtendedTextMessage thumbnailEncSHA256 */
            thumbnailEncSHA256?: (Uint8Array|null);

            /** ExtendedTextMessage mediaKey */
            mediaKey?: (Uint8Array|null);

            /** ExtendedTextMessage mediaKeyTimestamp */
            mediaKeyTimestamp?: (number|Long|null);

            /** ExtendedTextMessage thumbnailHeight */
            thumbnailHeight?: (number|null);

            /** ExtendedTextMessage thumbnailWidth */
            thumbnailWidth?: (number|null);

            /** ExtendedTextMessage inviteLinkGroupType */
            inviteLinkGroupType?: (WAE2E.Message.ExtendedTextMessage.InviteLinkGroupType|null);

            /** ExtendedTextMessage inviteLinkParentGroupSubjectV2 */
            inviteLinkParentGroupSubjectV2?: (string|null);

            /** ExtendedTextMessage inviteLinkParentGroupThumbnailV2 */
            inviteLinkParentGroupThumbnailV2?: (Uint8Array|null);

            /** ExtendedTextMessage inviteLinkGroupTypeV2 */
            inviteLinkGroupTypeV2?: (WAE2E.Message.ExtendedTextMessage.InviteLinkGroupType|null);

            /** ExtendedTextMessage viewOnce */
            viewOnce?: (boolean|null);

            /** ExtendedTextMessage videoHeight */
            videoHeight?: (number|null);

            /** ExtendedTextMessage videoWidth */
            videoWidth?: (number|null);
        }

        /** Represents an ExtendedTextMessage. */
        class ExtendedTextMessage implements IExtendedTextMessage {

            /**
             * Constructs a new ExtendedTextMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IExtendedTextMessage);

            /** ExtendedTextMessage text. */
            public text: string;

            /** ExtendedTextMessage matchedText. */
            public matchedText: string;

            /** ExtendedTextMessage canonicalURL. */
            public canonicalURL: string;

            /** ExtendedTextMessage description. */
            public description: string;

            /** ExtendedTextMessage title. */
            public title: string;

            /** ExtendedTextMessage textArgb. */
            public textArgb: number;

            /** ExtendedTextMessage backgroundArgb. */
            public backgroundArgb: number;

            /** ExtendedTextMessage font. */
            public font: WAE2E.Message.ExtendedTextMessage.FontType;

            /** ExtendedTextMessage previewType. */
            public previewType: WAE2E.Message.ExtendedTextMessage.PreviewType;

            /** ExtendedTextMessage JPEGThumbnail. */
            public JPEGThumbnail: Uint8Array;

            /** ExtendedTextMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** ExtendedTextMessage doNotPlayInline. */
            public doNotPlayInline: boolean;

            /** ExtendedTextMessage thumbnailDirectPath. */
            public thumbnailDirectPath: string;

            /** ExtendedTextMessage thumbnailSHA256. */
            public thumbnailSHA256: Uint8Array;

            /** ExtendedTextMessage thumbnailEncSHA256. */
            public thumbnailEncSHA256: Uint8Array;

            /** ExtendedTextMessage mediaKey. */
            public mediaKey: Uint8Array;

            /** ExtendedTextMessage mediaKeyTimestamp. */
            public mediaKeyTimestamp: (number|Long);

            /** ExtendedTextMessage thumbnailHeight. */
            public thumbnailHeight: number;

            /** ExtendedTextMessage thumbnailWidth. */
            public thumbnailWidth: number;

            /** ExtendedTextMessage inviteLinkGroupType. */
            public inviteLinkGroupType: WAE2E.Message.ExtendedTextMessage.InviteLinkGroupType;

            /** ExtendedTextMessage inviteLinkParentGroupSubjectV2. */
            public inviteLinkParentGroupSubjectV2: string;

            /** ExtendedTextMessage inviteLinkParentGroupThumbnailV2. */
            public inviteLinkParentGroupThumbnailV2: Uint8Array;

            /** ExtendedTextMessage inviteLinkGroupTypeV2. */
            public inviteLinkGroupTypeV2: WAE2E.Message.ExtendedTextMessage.InviteLinkGroupType;

            /** ExtendedTextMessage viewOnce. */
            public viewOnce: boolean;

            /** ExtendedTextMessage videoHeight. */
            public videoHeight: number;

            /** ExtendedTextMessage videoWidth. */
            public videoWidth: number;

            /**
             * Creates a new ExtendedTextMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtendedTextMessage instance
             */
            public static create(properties?: WAE2E.Message.IExtendedTextMessage): WAE2E.Message.ExtendedTextMessage;

            /**
             * Encodes the specified ExtendedTextMessage message. Does not implicitly {@link WAE2E.Message.ExtendedTextMessage.verify|verify} messages.
             * @param message ExtendedTextMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IExtendedTextMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtendedTextMessage message, length delimited. Does not implicitly {@link WAE2E.Message.ExtendedTextMessage.verify|verify} messages.
             * @param message ExtendedTextMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IExtendedTextMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtendedTextMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtendedTextMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ExtendedTextMessage;

            /**
             * Decodes an ExtendedTextMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtendedTextMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ExtendedTextMessage;

            /**
             * Verifies an ExtendedTextMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtendedTextMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtendedTextMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.ExtendedTextMessage;

            /**
             * Creates a plain object from an ExtendedTextMessage message. Also converts values to other types if specified.
             * @param message ExtendedTextMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.ExtendedTextMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtendedTextMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtendedTextMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtendedTextMessage {

            /** InviteLinkGroupType enum. */
            enum InviteLinkGroupType {
                DEFAULT = 0,
                PARENT = 1,
                SUB = 2,
                DEFAULT_SUB = 3
            }

            /** PreviewType enum. */
            enum PreviewType {
                NONE = 0,
                VIDEO = 1,
                PLACEHOLDER = 4,
                IMAGE = 5,
                PAYMENT_LINKS = 6
            }

            /** FontType enum. */
            enum FontType {
                SYSTEM = 0,
                SYSTEM_TEXT = 1,
                FB_SCRIPT = 2,
                SYSTEM_BOLD = 6,
                MORNINGBREEZE_REGULAR = 7,
                CALISTOGA_REGULAR = 8,
                EXO2_EXTRABOLD = 9,
                COURIERPRIME_BOLD = 10
            }
        }

        /** Properties of an InvoiceMessage. */
        interface IInvoiceMessage {

            /** InvoiceMessage note */
            note?: (string|null);

            /** InvoiceMessage token */
            token?: (string|null);

            /** InvoiceMessage attachmentType */
            attachmentType?: (WAE2E.Message.InvoiceMessage.AttachmentType|null);

            /** InvoiceMessage attachmentMimetype */
            attachmentMimetype?: (string|null);

            /** InvoiceMessage attachmentMediaKey */
            attachmentMediaKey?: (Uint8Array|null);

            /** InvoiceMessage attachmentMediaKeyTimestamp */
            attachmentMediaKeyTimestamp?: (number|Long|null);

            /** InvoiceMessage attachmentFileSHA256 */
            attachmentFileSHA256?: (Uint8Array|null);

            /** InvoiceMessage attachmentFileEncSHA256 */
            attachmentFileEncSHA256?: (Uint8Array|null);

            /** InvoiceMessage attachmentDirectPath */
            attachmentDirectPath?: (string|null);

            /** InvoiceMessage attachmentJPEGThumbnail */
            attachmentJPEGThumbnail?: (Uint8Array|null);
        }

        /** Represents an InvoiceMessage. */
        class InvoiceMessage implements IInvoiceMessage {

            /**
             * Constructs a new InvoiceMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IInvoiceMessage);

            /** InvoiceMessage note. */
            public note: string;

            /** InvoiceMessage token. */
            public token: string;

            /** InvoiceMessage attachmentType. */
            public attachmentType: WAE2E.Message.InvoiceMessage.AttachmentType;

            /** InvoiceMessage attachmentMimetype. */
            public attachmentMimetype: string;

            /** InvoiceMessage attachmentMediaKey. */
            public attachmentMediaKey: Uint8Array;

            /** InvoiceMessage attachmentMediaKeyTimestamp. */
            public attachmentMediaKeyTimestamp: (number|Long);

            /** InvoiceMessage attachmentFileSHA256. */
            public attachmentFileSHA256: Uint8Array;

            /** InvoiceMessage attachmentFileEncSHA256. */
            public attachmentFileEncSHA256: Uint8Array;

            /** InvoiceMessage attachmentDirectPath. */
            public attachmentDirectPath: string;

            /** InvoiceMessage attachmentJPEGThumbnail. */
            public attachmentJPEGThumbnail: Uint8Array;

            /**
             * Creates a new InvoiceMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InvoiceMessage instance
             */
            public static create(properties?: WAE2E.Message.IInvoiceMessage): WAE2E.Message.InvoiceMessage;

            /**
             * Encodes the specified InvoiceMessage message. Does not implicitly {@link WAE2E.Message.InvoiceMessage.verify|verify} messages.
             * @param message InvoiceMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IInvoiceMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InvoiceMessage message, length delimited. Does not implicitly {@link WAE2E.Message.InvoiceMessage.verify|verify} messages.
             * @param message InvoiceMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IInvoiceMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InvoiceMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InvoiceMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.InvoiceMessage;

            /**
             * Decodes an InvoiceMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InvoiceMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.InvoiceMessage;

            /**
             * Verifies an InvoiceMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InvoiceMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InvoiceMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.InvoiceMessage;

            /**
             * Creates a plain object from an InvoiceMessage message. Also converts values to other types if specified.
             * @param message InvoiceMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.InvoiceMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InvoiceMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InvoiceMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace InvoiceMessage {

            /** AttachmentType enum. */
            enum AttachmentType {
                IMAGE = 0,
                PDF = 1
            }
        }

        /** Properties of an ImageMessage. */
        interface IImageMessage {

            /** ImageMessage URL */
            URL?: (string|null);

            /** ImageMessage mimetype */
            mimetype?: (string|null);

            /** ImageMessage caption */
            caption?: (string|null);

            /** ImageMessage fileSHA256 */
            fileSHA256?: (Uint8Array|null);

            /** ImageMessage fileLength */
            fileLength?: (number|Long|null);

            /** ImageMessage height */
            height?: (number|null);

            /** ImageMessage width */
            width?: (number|null);

            /** ImageMessage mediaKey */
            mediaKey?: (Uint8Array|null);

            /** ImageMessage fileEncSHA256 */
            fileEncSHA256?: (Uint8Array|null);

            /** ImageMessage interactiveAnnotations */
            interactiveAnnotations?: (WAE2E.IInteractiveAnnotation[]|null);

            /** ImageMessage directPath */
            directPath?: (string|null);

            /** ImageMessage mediaKeyTimestamp */
            mediaKeyTimestamp?: (number|Long|null);

            /** ImageMessage JPEGThumbnail */
            JPEGThumbnail?: (Uint8Array|null);

            /** ImageMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** ImageMessage firstScanSidecar */
            firstScanSidecar?: (Uint8Array|null);

            /** ImageMessage firstScanLength */
            firstScanLength?: (number|null);

            /** ImageMessage experimentGroupID */
            experimentGroupID?: (number|null);

            /** ImageMessage scansSidecar */
            scansSidecar?: (Uint8Array|null);

            /** ImageMessage scanLengths */
            scanLengths?: (number[]|null);

            /** ImageMessage midQualityFileSHA256 */
            midQualityFileSHA256?: (Uint8Array|null);

            /** ImageMessage midQualityFileEncSHA256 */
            midQualityFileEncSHA256?: (Uint8Array|null);

            /** ImageMessage viewOnce */
            viewOnce?: (boolean|null);

            /** ImageMessage thumbnailDirectPath */
            thumbnailDirectPath?: (string|null);

            /** ImageMessage thumbnailSHA256 */
            thumbnailSHA256?: (Uint8Array|null);

            /** ImageMessage thumbnailEncSHA256 */
            thumbnailEncSHA256?: (Uint8Array|null);

            /** ImageMessage staticURL */
            staticURL?: (string|null);

            /** ImageMessage annotations */
            annotations?: (WAE2E.IInteractiveAnnotation[]|null);

            /** ImageMessage imageSourceType */
            imageSourceType?: (WAE2E.Message.ImageMessage.ImageSourceType|null);

            /** ImageMessage accessibilityLabel */
            accessibilityLabel?: (string|null);
        }

        /** Represents an ImageMessage. */
        class ImageMessage implements IImageMessage {

            /**
             * Constructs a new ImageMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IImageMessage);

            /** ImageMessage URL. */
            public URL: string;

            /** ImageMessage mimetype. */
            public mimetype: string;

            /** ImageMessage caption. */
            public caption: string;

            /** ImageMessage fileSHA256. */
            public fileSHA256: Uint8Array;

            /** ImageMessage fileLength. */
            public fileLength: (number|Long);

            /** ImageMessage height. */
            public height: number;

            /** ImageMessage width. */
            public width: number;

            /** ImageMessage mediaKey. */
            public mediaKey: Uint8Array;

            /** ImageMessage fileEncSHA256. */
            public fileEncSHA256: Uint8Array;

            /** ImageMessage interactiveAnnotations. */
            public interactiveAnnotations: WAE2E.IInteractiveAnnotation[];

            /** ImageMessage directPath. */
            public directPath: string;

            /** ImageMessage mediaKeyTimestamp. */
            public mediaKeyTimestamp: (number|Long);

            /** ImageMessage JPEGThumbnail. */
            public JPEGThumbnail: Uint8Array;

            /** ImageMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** ImageMessage firstScanSidecar. */
            public firstScanSidecar: Uint8Array;

            /** ImageMessage firstScanLength. */
            public firstScanLength: number;

            /** ImageMessage experimentGroupID. */
            public experimentGroupID: number;

            /** ImageMessage scansSidecar. */
            public scansSidecar: Uint8Array;

            /** ImageMessage scanLengths. */
            public scanLengths: number[];

            /** ImageMessage midQualityFileSHA256. */
            public midQualityFileSHA256: Uint8Array;

            /** ImageMessage midQualityFileEncSHA256. */
            public midQualityFileEncSHA256: Uint8Array;

            /** ImageMessage viewOnce. */
            public viewOnce: boolean;

            /** ImageMessage thumbnailDirectPath. */
            public thumbnailDirectPath: string;

            /** ImageMessage thumbnailSHA256. */
            public thumbnailSHA256: Uint8Array;

            /** ImageMessage thumbnailEncSHA256. */
            public thumbnailEncSHA256: Uint8Array;

            /** ImageMessage staticURL. */
            public staticURL: string;

            /** ImageMessage annotations. */
            public annotations: WAE2E.IInteractiveAnnotation[];

            /** ImageMessage imageSourceType. */
            public imageSourceType: WAE2E.Message.ImageMessage.ImageSourceType;

            /** ImageMessage accessibilityLabel. */
            public accessibilityLabel: string;

            /**
             * Creates a new ImageMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ImageMessage instance
             */
            public static create(properties?: WAE2E.Message.IImageMessage): WAE2E.Message.ImageMessage;

            /**
             * Encodes the specified ImageMessage message. Does not implicitly {@link WAE2E.Message.ImageMessage.verify|verify} messages.
             * @param message ImageMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IImageMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ImageMessage message, length delimited. Does not implicitly {@link WAE2E.Message.ImageMessage.verify|verify} messages.
             * @param message ImageMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IImageMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ImageMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ImageMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ImageMessage;

            /**
             * Decodes an ImageMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ImageMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ImageMessage;

            /**
             * Verifies an ImageMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ImageMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ImageMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.ImageMessage;

            /**
             * Creates a plain object from an ImageMessage message. Also converts values to other types if specified.
             * @param message ImageMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.ImageMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ImageMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ImageMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ImageMessage {

            /** ImageSourceType enum. */
            enum ImageSourceType {
                USER_IMAGE = 0,
                AI_GENERATED = 1,
                AI_MODIFIED = 2
            }
        }

        /** Properties of an AlbumMessage. */
        interface IAlbumMessage {

            /** AlbumMessage caption */
            caption?: (string|null);
        }

        /** Represents an AlbumMessage. */
        class AlbumMessage implements IAlbumMessage {

            /**
             * Constructs a new AlbumMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IAlbumMessage);

            /** AlbumMessage caption. */
            public caption: string;

            /**
             * Creates a new AlbumMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AlbumMessage instance
             */
            public static create(properties?: WAE2E.Message.IAlbumMessage): WAE2E.Message.AlbumMessage;

            /**
             * Encodes the specified AlbumMessage message. Does not implicitly {@link WAE2E.Message.AlbumMessage.verify|verify} messages.
             * @param message AlbumMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IAlbumMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AlbumMessage message, length delimited. Does not implicitly {@link WAE2E.Message.AlbumMessage.verify|verify} messages.
             * @param message AlbumMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IAlbumMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AlbumMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AlbumMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.AlbumMessage;

            /**
             * Decodes an AlbumMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AlbumMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.AlbumMessage;

            /**
             * Verifies an AlbumMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AlbumMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AlbumMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.AlbumMessage;

            /**
             * Creates a plain object from an AlbumMessage message. Also converts values to other types if specified.
             * @param message AlbumMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.AlbumMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AlbumMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AlbumMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MessageHistoryBundle. */
        interface IMessageHistoryBundle {

            /** MessageHistoryBundle mimetype */
            mimetype?: (string|null);

            /** MessageHistoryBundle fileSHA256 */
            fileSHA256?: (Uint8Array|null);

            /** MessageHistoryBundle mediaKey */
            mediaKey?: (Uint8Array|null);

            /** MessageHistoryBundle fileEncSHA256 */
            fileEncSHA256?: (Uint8Array|null);

            /** MessageHistoryBundle directPath */
            directPath?: (string|null);

            /** MessageHistoryBundle mediaKeyTimestamp */
            mediaKeyTimestamp?: (number|Long|null);

            /** MessageHistoryBundle contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** MessageHistoryBundle participants */
            participants?: (string[]|null);
        }

        /** Represents a MessageHistoryBundle. */
        class MessageHistoryBundle implements IMessageHistoryBundle {

            /**
             * Constructs a new MessageHistoryBundle.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IMessageHistoryBundle);

            /** MessageHistoryBundle mimetype. */
            public mimetype: string;

            /** MessageHistoryBundle fileSHA256. */
            public fileSHA256: Uint8Array;

            /** MessageHistoryBundle mediaKey. */
            public mediaKey: Uint8Array;

            /** MessageHistoryBundle fileEncSHA256. */
            public fileEncSHA256: Uint8Array;

            /** MessageHistoryBundle directPath. */
            public directPath: string;

            /** MessageHistoryBundle mediaKeyTimestamp. */
            public mediaKeyTimestamp: (number|Long);

            /** MessageHistoryBundle contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** MessageHistoryBundle participants. */
            public participants: string[];

            /**
             * Creates a new MessageHistoryBundle instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageHistoryBundle instance
             */
            public static create(properties?: WAE2E.Message.IMessageHistoryBundle): WAE2E.Message.MessageHistoryBundle;

            /**
             * Encodes the specified MessageHistoryBundle message. Does not implicitly {@link WAE2E.Message.MessageHistoryBundle.verify|verify} messages.
             * @param message MessageHistoryBundle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IMessageHistoryBundle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageHistoryBundle message, length delimited. Does not implicitly {@link WAE2E.Message.MessageHistoryBundle.verify|verify} messages.
             * @param message MessageHistoryBundle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IMessageHistoryBundle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageHistoryBundle message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageHistoryBundle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.MessageHistoryBundle;

            /**
             * Decodes a MessageHistoryBundle message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageHistoryBundle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.MessageHistoryBundle;

            /**
             * Verifies a MessageHistoryBundle message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageHistoryBundle message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageHistoryBundle
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.MessageHistoryBundle;

            /**
             * Creates a plain object from a MessageHistoryBundle message. Also converts values to other types if specified.
             * @param message MessageHistoryBundle
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.MessageHistoryBundle, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageHistoryBundle to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageHistoryBundle
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EncEventResponseMessage. */
        interface IEncEventResponseMessage {

            /** EncEventResponseMessage eventCreationMessageKey */
            eventCreationMessageKey?: (WAProtocol.IMessageKey|null);

            /** EncEventResponseMessage encPayload */
            encPayload?: (Uint8Array|null);

            /** EncEventResponseMessage encIV */
            encIV?: (Uint8Array|null);
        }

        /** Represents an EncEventResponseMessage. */
        class EncEventResponseMessage implements IEncEventResponseMessage {

            /**
             * Constructs a new EncEventResponseMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IEncEventResponseMessage);

            /** EncEventResponseMessage eventCreationMessageKey. */
            public eventCreationMessageKey?: (WAProtocol.IMessageKey|null);

            /** EncEventResponseMessage encPayload. */
            public encPayload: Uint8Array;

            /** EncEventResponseMessage encIV. */
            public encIV: Uint8Array;

            /**
             * Creates a new EncEventResponseMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EncEventResponseMessage instance
             */
            public static create(properties?: WAE2E.Message.IEncEventResponseMessage): WAE2E.Message.EncEventResponseMessage;

            /**
             * Encodes the specified EncEventResponseMessage message. Does not implicitly {@link WAE2E.Message.EncEventResponseMessage.verify|verify} messages.
             * @param message EncEventResponseMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IEncEventResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EncEventResponseMessage message, length delimited. Does not implicitly {@link WAE2E.Message.EncEventResponseMessage.verify|verify} messages.
             * @param message EncEventResponseMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IEncEventResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EncEventResponseMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EncEventResponseMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.EncEventResponseMessage;

            /**
             * Decodes an EncEventResponseMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EncEventResponseMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.EncEventResponseMessage;

            /**
             * Verifies an EncEventResponseMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EncEventResponseMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EncEventResponseMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.EncEventResponseMessage;

            /**
             * Creates a plain object from an EncEventResponseMessage message. Also converts values to other types if specified.
             * @param message EncEventResponseMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.EncEventResponseMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EncEventResponseMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EncEventResponseMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EventMessage. */
        interface IEventMessage {

            /** EventMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** EventMessage isCanceled */
            isCanceled?: (boolean|null);

            /** EventMessage name */
            name?: (string|null);

            /** EventMessage description */
            description?: (string|null);

            /** EventMessage location */
            location?: (WAE2E.Message.ILocationMessage|null);

            /** EventMessage joinLink */
            joinLink?: (string|null);

            /** EventMessage startTime */
            startTime?: (number|Long|null);

            /** EventMessage endTime */
            endTime?: (number|Long|null);

            /** EventMessage extraGuestsAllowed */
            extraGuestsAllowed?: (boolean|null);
        }

        /** Represents an EventMessage. */
        class EventMessage implements IEventMessage {

            /**
             * Constructs a new EventMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IEventMessage);

            /** EventMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** EventMessage isCanceled. */
            public isCanceled: boolean;

            /** EventMessage name. */
            public name: string;

            /** EventMessage description. */
            public description: string;

            /** EventMessage location. */
            public location?: (WAE2E.Message.ILocationMessage|null);

            /** EventMessage joinLink. */
            public joinLink: string;

            /** EventMessage startTime. */
            public startTime: (number|Long);

            /** EventMessage endTime. */
            public endTime: (number|Long);

            /** EventMessage extraGuestsAllowed. */
            public extraGuestsAllowed: boolean;

            /**
             * Creates a new EventMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EventMessage instance
             */
            public static create(properties?: WAE2E.Message.IEventMessage): WAE2E.Message.EventMessage;

            /**
             * Encodes the specified EventMessage message. Does not implicitly {@link WAE2E.Message.EventMessage.verify|verify} messages.
             * @param message EventMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IEventMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EventMessage message, length delimited. Does not implicitly {@link WAE2E.Message.EventMessage.verify|verify} messages.
             * @param message EventMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IEventMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EventMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EventMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.EventMessage;

            /**
             * Decodes an EventMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EventMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.EventMessage;

            /**
             * Verifies an EventMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EventMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EventMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.EventMessage;

            /**
             * Creates a plain object from an EventMessage message. Also converts values to other types if specified.
             * @param message EventMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.EventMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EventMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EventMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CommentMessage. */
        interface ICommentMessage {

            /** CommentMessage message */
            message?: (WAE2E.IMessage|null);

            /** CommentMessage targetMessageKey */
            targetMessageKey?: (WAProtocol.IMessageKey|null);
        }

        /** Represents a CommentMessage. */
        class CommentMessage implements ICommentMessage {

            /**
             * Constructs a new CommentMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.ICommentMessage);

            /** CommentMessage message. */
            public message?: (WAE2E.IMessage|null);

            /** CommentMessage targetMessageKey. */
            public targetMessageKey?: (WAProtocol.IMessageKey|null);

            /**
             * Creates a new CommentMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommentMessage instance
             */
            public static create(properties?: WAE2E.Message.ICommentMessage): WAE2E.Message.CommentMessage;

            /**
             * Encodes the specified CommentMessage message. Does not implicitly {@link WAE2E.Message.CommentMessage.verify|verify} messages.
             * @param message CommentMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.ICommentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommentMessage message, length delimited. Does not implicitly {@link WAE2E.Message.CommentMessage.verify|verify} messages.
             * @param message CommentMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.ICommentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommentMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommentMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.CommentMessage;

            /**
             * Decodes a CommentMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommentMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.CommentMessage;

            /**
             * Verifies a CommentMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommentMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommentMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.CommentMessage;

            /**
             * Creates a plain object from a CommentMessage message. Also converts values to other types if specified.
             * @param message CommentMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.CommentMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommentMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommentMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EncCommentMessage. */
        interface IEncCommentMessage {

            /** EncCommentMessage targetMessageKey */
            targetMessageKey?: (WAProtocol.IMessageKey|null);

            /** EncCommentMessage encPayload */
            encPayload?: (Uint8Array|null);

            /** EncCommentMessage encIV */
            encIV?: (Uint8Array|null);
        }

        /** Represents an EncCommentMessage. */
        class EncCommentMessage implements IEncCommentMessage {

            /**
             * Constructs a new EncCommentMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IEncCommentMessage);

            /** EncCommentMessage targetMessageKey. */
            public targetMessageKey?: (WAProtocol.IMessageKey|null);

            /** EncCommentMessage encPayload. */
            public encPayload: Uint8Array;

            /** EncCommentMessage encIV. */
            public encIV: Uint8Array;

            /**
             * Creates a new EncCommentMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EncCommentMessage instance
             */
            public static create(properties?: WAE2E.Message.IEncCommentMessage): WAE2E.Message.EncCommentMessage;

            /**
             * Encodes the specified EncCommentMessage message. Does not implicitly {@link WAE2E.Message.EncCommentMessage.verify|verify} messages.
             * @param message EncCommentMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IEncCommentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EncCommentMessage message, length delimited. Does not implicitly {@link WAE2E.Message.EncCommentMessage.verify|verify} messages.
             * @param message EncCommentMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IEncCommentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EncCommentMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EncCommentMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.EncCommentMessage;

            /**
             * Decodes an EncCommentMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EncCommentMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.EncCommentMessage;

            /**
             * Verifies an EncCommentMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EncCommentMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EncCommentMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.EncCommentMessage;

            /**
             * Creates a plain object from an EncCommentMessage message. Also converts values to other types if specified.
             * @param message EncCommentMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.EncCommentMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EncCommentMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EncCommentMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EncReactionMessage. */
        interface IEncReactionMessage {

            /** EncReactionMessage targetMessageKey */
            targetMessageKey?: (WAProtocol.IMessageKey|null);

            /** EncReactionMessage encPayload */
            encPayload?: (Uint8Array|null);

            /** EncReactionMessage encIV */
            encIV?: (Uint8Array|null);
        }

        /** Represents an EncReactionMessage. */
        class EncReactionMessage implements IEncReactionMessage {

            /**
             * Constructs a new EncReactionMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IEncReactionMessage);

            /** EncReactionMessage targetMessageKey. */
            public targetMessageKey?: (WAProtocol.IMessageKey|null);

            /** EncReactionMessage encPayload. */
            public encPayload: Uint8Array;

            /** EncReactionMessage encIV. */
            public encIV: Uint8Array;

            /**
             * Creates a new EncReactionMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EncReactionMessage instance
             */
            public static create(properties?: WAE2E.Message.IEncReactionMessage): WAE2E.Message.EncReactionMessage;

            /**
             * Encodes the specified EncReactionMessage message. Does not implicitly {@link WAE2E.Message.EncReactionMessage.verify|verify} messages.
             * @param message EncReactionMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IEncReactionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EncReactionMessage message, length delimited. Does not implicitly {@link WAE2E.Message.EncReactionMessage.verify|verify} messages.
             * @param message EncReactionMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IEncReactionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EncReactionMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EncReactionMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.EncReactionMessage;

            /**
             * Decodes an EncReactionMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EncReactionMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.EncReactionMessage;

            /**
             * Verifies an EncReactionMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EncReactionMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EncReactionMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.EncReactionMessage;

            /**
             * Creates a plain object from an EncReactionMessage message. Also converts values to other types if specified.
             * @param message EncReactionMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.EncReactionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EncReactionMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EncReactionMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a KeepInChatMessage. */
        interface IKeepInChatMessage {

            /** KeepInChatMessage key */
            key?: (WAProtocol.IMessageKey|null);

            /** KeepInChatMessage keepType */
            keepType?: (WAE2E.KeepType|null);

            /** KeepInChatMessage timestampMS */
            timestampMS?: (number|Long|null);
        }

        /** Represents a KeepInChatMessage. */
        class KeepInChatMessage implements IKeepInChatMessage {

            /**
             * Constructs a new KeepInChatMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IKeepInChatMessage);

            /** KeepInChatMessage key. */
            public key?: (WAProtocol.IMessageKey|null);

            /** KeepInChatMessage keepType. */
            public keepType: WAE2E.KeepType;

            /** KeepInChatMessage timestampMS. */
            public timestampMS: (number|Long);

            /**
             * Creates a new KeepInChatMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeepInChatMessage instance
             */
            public static create(properties?: WAE2E.Message.IKeepInChatMessage): WAE2E.Message.KeepInChatMessage;

            /**
             * Encodes the specified KeepInChatMessage message. Does not implicitly {@link WAE2E.Message.KeepInChatMessage.verify|verify} messages.
             * @param message KeepInChatMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IKeepInChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeepInChatMessage message, length delimited. Does not implicitly {@link WAE2E.Message.KeepInChatMessage.verify|verify} messages.
             * @param message KeepInChatMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IKeepInChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeepInChatMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeepInChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.KeepInChatMessage;

            /**
             * Decodes a KeepInChatMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KeepInChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.KeepInChatMessage;

            /**
             * Verifies a KeepInChatMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeepInChatMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeepInChatMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.KeepInChatMessage;

            /**
             * Creates a plain object from a KeepInChatMessage message. Also converts values to other types if specified.
             * @param message KeepInChatMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.KeepInChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeepInChatMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for KeepInChatMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PollResultSnapshotMessage. */
        interface IPollResultSnapshotMessage {

            /** PollResultSnapshotMessage name */
            name?: (string|null);

            /** PollResultSnapshotMessage pollVotes */
            pollVotes?: (WAE2E.Message.PollResultSnapshotMessage.IPollVote[]|null);

            /** PollResultSnapshotMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);
        }

        /** Represents a PollResultSnapshotMessage. */
        class PollResultSnapshotMessage implements IPollResultSnapshotMessage {

            /**
             * Constructs a new PollResultSnapshotMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IPollResultSnapshotMessage);

            /** PollResultSnapshotMessage name. */
            public name: string;

            /** PollResultSnapshotMessage pollVotes. */
            public pollVotes: WAE2E.Message.PollResultSnapshotMessage.IPollVote[];

            /** PollResultSnapshotMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /**
             * Creates a new PollResultSnapshotMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PollResultSnapshotMessage instance
             */
            public static create(properties?: WAE2E.Message.IPollResultSnapshotMessage): WAE2E.Message.PollResultSnapshotMessage;

            /**
             * Encodes the specified PollResultSnapshotMessage message. Does not implicitly {@link WAE2E.Message.PollResultSnapshotMessage.verify|verify} messages.
             * @param message PollResultSnapshotMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IPollResultSnapshotMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PollResultSnapshotMessage message, length delimited. Does not implicitly {@link WAE2E.Message.PollResultSnapshotMessage.verify|verify} messages.
             * @param message PollResultSnapshotMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IPollResultSnapshotMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PollResultSnapshotMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PollResultSnapshotMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PollResultSnapshotMessage;

            /**
             * Decodes a PollResultSnapshotMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PollResultSnapshotMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PollResultSnapshotMessage;

            /**
             * Verifies a PollResultSnapshotMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PollResultSnapshotMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PollResultSnapshotMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.PollResultSnapshotMessage;

            /**
             * Creates a plain object from a PollResultSnapshotMessage message. Also converts values to other types if specified.
             * @param message PollResultSnapshotMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.PollResultSnapshotMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PollResultSnapshotMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PollResultSnapshotMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PollResultSnapshotMessage {

            /** Properties of a PollVote. */
            interface IPollVote {

                /** PollVote optionName */
                optionName?: (string|null);

                /** PollVote optionVoteCount */
                optionVoteCount?: (number|Long|null);
            }

            /** Represents a PollVote. */
            class PollVote implements IPollVote {

                /**
                 * Constructs a new PollVote.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.PollResultSnapshotMessage.IPollVote);

                /** PollVote optionName. */
                public optionName: string;

                /** PollVote optionVoteCount. */
                public optionVoteCount: (number|Long);

                /**
                 * Creates a new PollVote instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PollVote instance
                 */
                public static create(properties?: WAE2E.Message.PollResultSnapshotMessage.IPollVote): WAE2E.Message.PollResultSnapshotMessage.PollVote;

                /**
                 * Encodes the specified PollVote message. Does not implicitly {@link WAE2E.Message.PollResultSnapshotMessage.PollVote.verify|verify} messages.
                 * @param message PollVote message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.PollResultSnapshotMessage.IPollVote, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PollVote message, length delimited. Does not implicitly {@link WAE2E.Message.PollResultSnapshotMessage.PollVote.verify|verify} messages.
                 * @param message PollVote message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.PollResultSnapshotMessage.IPollVote, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PollVote message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PollVote
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PollResultSnapshotMessage.PollVote;

                /**
                 * Decodes a PollVote message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PollVote
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PollResultSnapshotMessage.PollVote;

                /**
                 * Verifies a PollVote message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PollVote message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PollVote
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.PollResultSnapshotMessage.PollVote;

                /**
                 * Creates a plain object from a PollVote message. Also converts values to other types if specified.
                 * @param message PollVote
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.PollResultSnapshotMessage.PollVote, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PollVote to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PollVote
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a PollVoteMessage. */
        interface IPollVoteMessage {

            /** PollVoteMessage selectedOptions */
            selectedOptions?: (Uint8Array[]|null);
        }

        /** Represents a PollVoteMessage. */
        class PollVoteMessage implements IPollVoteMessage {

            /**
             * Constructs a new PollVoteMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IPollVoteMessage);

            /** PollVoteMessage selectedOptions. */
            public selectedOptions: Uint8Array[];

            /**
             * Creates a new PollVoteMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PollVoteMessage instance
             */
            public static create(properties?: WAE2E.Message.IPollVoteMessage): WAE2E.Message.PollVoteMessage;

            /**
             * Encodes the specified PollVoteMessage message. Does not implicitly {@link WAE2E.Message.PollVoteMessage.verify|verify} messages.
             * @param message PollVoteMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IPollVoteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PollVoteMessage message, length delimited. Does not implicitly {@link WAE2E.Message.PollVoteMessage.verify|verify} messages.
             * @param message PollVoteMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IPollVoteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PollVoteMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PollVoteMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PollVoteMessage;

            /**
             * Decodes a PollVoteMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PollVoteMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PollVoteMessage;

            /**
             * Verifies a PollVoteMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PollVoteMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PollVoteMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.PollVoteMessage;

            /**
             * Creates a plain object from a PollVoteMessage message. Also converts values to other types if specified.
             * @param message PollVoteMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.PollVoteMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PollVoteMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PollVoteMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PollEncValue. */
        interface IPollEncValue {

            /** PollEncValue encPayload */
            encPayload?: (Uint8Array|null);

            /** PollEncValue encIV */
            encIV?: (Uint8Array|null);
        }

        /** Represents a PollEncValue. */
        class PollEncValue implements IPollEncValue {

            /**
             * Constructs a new PollEncValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IPollEncValue);

            /** PollEncValue encPayload. */
            public encPayload: Uint8Array;

            /** PollEncValue encIV. */
            public encIV: Uint8Array;

            /**
             * Creates a new PollEncValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PollEncValue instance
             */
            public static create(properties?: WAE2E.Message.IPollEncValue): WAE2E.Message.PollEncValue;

            /**
             * Encodes the specified PollEncValue message. Does not implicitly {@link WAE2E.Message.PollEncValue.verify|verify} messages.
             * @param message PollEncValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IPollEncValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PollEncValue message, length delimited. Does not implicitly {@link WAE2E.Message.PollEncValue.verify|verify} messages.
             * @param message PollEncValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IPollEncValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PollEncValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PollEncValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PollEncValue;

            /**
             * Decodes a PollEncValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PollEncValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PollEncValue;

            /**
             * Verifies a PollEncValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PollEncValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PollEncValue
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.PollEncValue;

            /**
             * Creates a plain object from a PollEncValue message. Also converts values to other types if specified.
             * @param message PollEncValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.PollEncValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PollEncValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PollEncValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PollUpdateMessageMetadata. */
        interface IPollUpdateMessageMetadata {
        }

        /** Represents a PollUpdateMessageMetadata. */
        class PollUpdateMessageMetadata implements IPollUpdateMessageMetadata {

            /**
             * Constructs a new PollUpdateMessageMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IPollUpdateMessageMetadata);

            /**
             * Creates a new PollUpdateMessageMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PollUpdateMessageMetadata instance
             */
            public static create(properties?: WAE2E.Message.IPollUpdateMessageMetadata): WAE2E.Message.PollUpdateMessageMetadata;

            /**
             * Encodes the specified PollUpdateMessageMetadata message. Does not implicitly {@link WAE2E.Message.PollUpdateMessageMetadata.verify|verify} messages.
             * @param message PollUpdateMessageMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IPollUpdateMessageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PollUpdateMessageMetadata message, length delimited. Does not implicitly {@link WAE2E.Message.PollUpdateMessageMetadata.verify|verify} messages.
             * @param message PollUpdateMessageMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IPollUpdateMessageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PollUpdateMessageMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PollUpdateMessageMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PollUpdateMessageMetadata;

            /**
             * Decodes a PollUpdateMessageMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PollUpdateMessageMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PollUpdateMessageMetadata;

            /**
             * Verifies a PollUpdateMessageMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PollUpdateMessageMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PollUpdateMessageMetadata
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.PollUpdateMessageMetadata;

            /**
             * Creates a plain object from a PollUpdateMessageMetadata message. Also converts values to other types if specified.
             * @param message PollUpdateMessageMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.PollUpdateMessageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PollUpdateMessageMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PollUpdateMessageMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PollUpdateMessage. */
        interface IPollUpdateMessage {

            /** PollUpdateMessage pollCreationMessageKey */
            pollCreationMessageKey?: (WAProtocol.IMessageKey|null);

            /** PollUpdateMessage vote */
            vote?: (WAE2E.Message.IPollEncValue|null);

            /** PollUpdateMessage metadata */
            metadata?: (WAE2E.Message.IPollUpdateMessageMetadata|null);

            /** PollUpdateMessage senderTimestampMS */
            senderTimestampMS?: (number|Long|null);
        }

        /** Represents a PollUpdateMessage. */
        class PollUpdateMessage implements IPollUpdateMessage {

            /**
             * Constructs a new PollUpdateMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IPollUpdateMessage);

            /** PollUpdateMessage pollCreationMessageKey. */
            public pollCreationMessageKey?: (WAProtocol.IMessageKey|null);

            /** PollUpdateMessage vote. */
            public vote?: (WAE2E.Message.IPollEncValue|null);

            /** PollUpdateMessage metadata. */
            public metadata?: (WAE2E.Message.IPollUpdateMessageMetadata|null);

            /** PollUpdateMessage senderTimestampMS. */
            public senderTimestampMS: (number|Long);

            /**
             * Creates a new PollUpdateMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PollUpdateMessage instance
             */
            public static create(properties?: WAE2E.Message.IPollUpdateMessage): WAE2E.Message.PollUpdateMessage;

            /**
             * Encodes the specified PollUpdateMessage message. Does not implicitly {@link WAE2E.Message.PollUpdateMessage.verify|verify} messages.
             * @param message PollUpdateMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IPollUpdateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PollUpdateMessage message, length delimited. Does not implicitly {@link WAE2E.Message.PollUpdateMessage.verify|verify} messages.
             * @param message PollUpdateMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IPollUpdateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PollUpdateMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PollUpdateMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PollUpdateMessage;

            /**
             * Decodes a PollUpdateMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PollUpdateMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PollUpdateMessage;

            /**
             * Verifies a PollUpdateMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PollUpdateMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PollUpdateMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.PollUpdateMessage;

            /**
             * Creates a plain object from a PollUpdateMessage message. Also converts values to other types if specified.
             * @param message PollUpdateMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.PollUpdateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PollUpdateMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PollUpdateMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PollCreationMessage. */
        interface IPollCreationMessage {

            /** PollCreationMessage encKey */
            encKey?: (Uint8Array|null);

            /** PollCreationMessage name */
            name?: (string|null);

            /** PollCreationMessage options */
            options?: (WAE2E.Message.PollCreationMessage.IOption[]|null);

            /** PollCreationMessage selectableOptionsCount */
            selectableOptionsCount?: (number|null);

            /** PollCreationMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);
        }

        /** Represents a PollCreationMessage. */
        class PollCreationMessage implements IPollCreationMessage {

            /**
             * Constructs a new PollCreationMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IPollCreationMessage);

            /** PollCreationMessage encKey. */
            public encKey: Uint8Array;

            /** PollCreationMessage name. */
            public name: string;

            /** PollCreationMessage options. */
            public options: WAE2E.Message.PollCreationMessage.IOption[];

            /** PollCreationMessage selectableOptionsCount. */
            public selectableOptionsCount: number;

            /** PollCreationMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /**
             * Creates a new PollCreationMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PollCreationMessage instance
             */
            public static create(properties?: WAE2E.Message.IPollCreationMessage): WAE2E.Message.PollCreationMessage;

            /**
             * Encodes the specified PollCreationMessage message. Does not implicitly {@link WAE2E.Message.PollCreationMessage.verify|verify} messages.
             * @param message PollCreationMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IPollCreationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PollCreationMessage message, length delimited. Does not implicitly {@link WAE2E.Message.PollCreationMessage.verify|verify} messages.
             * @param message PollCreationMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IPollCreationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PollCreationMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PollCreationMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PollCreationMessage;

            /**
             * Decodes a PollCreationMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PollCreationMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PollCreationMessage;

            /**
             * Verifies a PollCreationMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PollCreationMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PollCreationMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.PollCreationMessage;

            /**
             * Creates a plain object from a PollCreationMessage message. Also converts values to other types if specified.
             * @param message PollCreationMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.PollCreationMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PollCreationMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PollCreationMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PollCreationMessage {

            /** Properties of an Option. */
            interface IOption {

                /** Option optionName */
                optionName?: (string|null);
            }

            /** Represents an Option. */
            class Option implements IOption {

                /**
                 * Constructs a new Option.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.PollCreationMessage.IOption);

                /** Option optionName. */
                public optionName: string;

                /**
                 * Creates a new Option instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Option instance
                 */
                public static create(properties?: WAE2E.Message.PollCreationMessage.IOption): WAE2E.Message.PollCreationMessage.Option;

                /**
                 * Encodes the specified Option message. Does not implicitly {@link WAE2E.Message.PollCreationMessage.Option.verify|verify} messages.
                 * @param message Option message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.PollCreationMessage.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Option message, length delimited. Does not implicitly {@link WAE2E.Message.PollCreationMessage.Option.verify|verify} messages.
                 * @param message Option message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.PollCreationMessage.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Option message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Option
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PollCreationMessage.Option;

                /**
                 * Decodes an Option message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Option
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PollCreationMessage.Option;

                /**
                 * Verifies an Option message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Option message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Option
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.PollCreationMessage.Option;

                /**
                 * Creates a plain object from an Option message. Also converts values to other types if specified.
                 * @param message Option
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.PollCreationMessage.Option, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Option to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Option
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a StickerSyncRMRMessage. */
        interface IStickerSyncRMRMessage {

            /** StickerSyncRMRMessage filehash */
            filehash?: (string[]|null);

            /** StickerSyncRMRMessage rmrSource */
            rmrSource?: (string|null);

            /** StickerSyncRMRMessage requestTimestamp */
            requestTimestamp?: (number|Long|null);
        }

        /** Represents a StickerSyncRMRMessage. */
        class StickerSyncRMRMessage implements IStickerSyncRMRMessage {

            /**
             * Constructs a new StickerSyncRMRMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IStickerSyncRMRMessage);

            /** StickerSyncRMRMessage filehash. */
            public filehash: string[];

            /** StickerSyncRMRMessage rmrSource. */
            public rmrSource: string;

            /** StickerSyncRMRMessage requestTimestamp. */
            public requestTimestamp: (number|Long);

            /**
             * Creates a new StickerSyncRMRMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StickerSyncRMRMessage instance
             */
            public static create(properties?: WAE2E.Message.IStickerSyncRMRMessage): WAE2E.Message.StickerSyncRMRMessage;

            /**
             * Encodes the specified StickerSyncRMRMessage message. Does not implicitly {@link WAE2E.Message.StickerSyncRMRMessage.verify|verify} messages.
             * @param message StickerSyncRMRMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IStickerSyncRMRMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StickerSyncRMRMessage message, length delimited. Does not implicitly {@link WAE2E.Message.StickerSyncRMRMessage.verify|verify} messages.
             * @param message StickerSyncRMRMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IStickerSyncRMRMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StickerSyncRMRMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StickerSyncRMRMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.StickerSyncRMRMessage;

            /**
             * Decodes a StickerSyncRMRMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StickerSyncRMRMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.StickerSyncRMRMessage;

            /**
             * Verifies a StickerSyncRMRMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StickerSyncRMRMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StickerSyncRMRMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.StickerSyncRMRMessage;

            /**
             * Creates a plain object from a StickerSyncRMRMessage message. Also converts values to other types if specified.
             * @param message StickerSyncRMRMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.StickerSyncRMRMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StickerSyncRMRMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StickerSyncRMRMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReactionMessage. */
        interface IReactionMessage {

            /** ReactionMessage key */
            key?: (WAProtocol.IMessageKey|null);

            /** ReactionMessage text */
            text?: (string|null);

            /** ReactionMessage groupingKey */
            groupingKey?: (string|null);

            /** ReactionMessage senderTimestampMS */
            senderTimestampMS?: (number|Long|null);
        }

        /** Represents a ReactionMessage. */
        class ReactionMessage implements IReactionMessage {

            /**
             * Constructs a new ReactionMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IReactionMessage);

            /** ReactionMessage key. */
            public key?: (WAProtocol.IMessageKey|null);

            /** ReactionMessage text. */
            public text: string;

            /** ReactionMessage groupingKey. */
            public groupingKey: string;

            /** ReactionMessage senderTimestampMS. */
            public senderTimestampMS: (number|Long);

            /**
             * Creates a new ReactionMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReactionMessage instance
             */
            public static create(properties?: WAE2E.Message.IReactionMessage): WAE2E.Message.ReactionMessage;

            /**
             * Encodes the specified ReactionMessage message. Does not implicitly {@link WAE2E.Message.ReactionMessage.verify|verify} messages.
             * @param message ReactionMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IReactionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReactionMessage message, length delimited. Does not implicitly {@link WAE2E.Message.ReactionMessage.verify|verify} messages.
             * @param message ReactionMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IReactionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReactionMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReactionMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ReactionMessage;

            /**
             * Decodes a ReactionMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReactionMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ReactionMessage;

            /**
             * Verifies a ReactionMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReactionMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReactionMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.ReactionMessage;

            /**
             * Creates a plain object from a ReactionMessage message. Also converts values to other types if specified.
             * @param message ReactionMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.ReactionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReactionMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReactionMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FutureProofMessage. */
        interface IFutureProofMessage {

            /** FutureProofMessage message */
            message?: (WAE2E.IMessage|null);
        }

        /** Represents a FutureProofMessage. */
        class FutureProofMessage implements IFutureProofMessage {

            /**
             * Constructs a new FutureProofMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IFutureProofMessage);

            /** FutureProofMessage message. */
            public message?: (WAE2E.IMessage|null);

            /**
             * Creates a new FutureProofMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FutureProofMessage instance
             */
            public static create(properties?: WAE2E.Message.IFutureProofMessage): WAE2E.Message.FutureProofMessage;

            /**
             * Encodes the specified FutureProofMessage message. Does not implicitly {@link WAE2E.Message.FutureProofMessage.verify|verify} messages.
             * @param message FutureProofMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IFutureProofMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FutureProofMessage message, length delimited. Does not implicitly {@link WAE2E.Message.FutureProofMessage.verify|verify} messages.
             * @param message FutureProofMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IFutureProofMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FutureProofMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FutureProofMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.FutureProofMessage;

            /**
             * Decodes a FutureProofMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FutureProofMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.FutureProofMessage;

            /**
             * Verifies a FutureProofMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FutureProofMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FutureProofMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.FutureProofMessage;

            /**
             * Creates a plain object from a FutureProofMessage message. Also converts values to other types if specified.
             * @param message FutureProofMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.FutureProofMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FutureProofMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FutureProofMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeviceSentMessage. */
        interface IDeviceSentMessage {

            /** DeviceSentMessage destinationJID */
            destinationJID?: (string|null);

            /** DeviceSentMessage message */
            message?: (WAE2E.IMessage|null);

            /** DeviceSentMessage phash */
            phash?: (string|null);
        }

        /** Represents a DeviceSentMessage. */
        class DeviceSentMessage implements IDeviceSentMessage {

            /**
             * Constructs a new DeviceSentMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IDeviceSentMessage);

            /** DeviceSentMessage destinationJID. */
            public destinationJID: string;

            /** DeviceSentMessage message. */
            public message?: (WAE2E.IMessage|null);

            /** DeviceSentMessage phash. */
            public phash: string;

            /**
             * Creates a new DeviceSentMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeviceSentMessage instance
             */
            public static create(properties?: WAE2E.Message.IDeviceSentMessage): WAE2E.Message.DeviceSentMessage;

            /**
             * Encodes the specified DeviceSentMessage message. Does not implicitly {@link WAE2E.Message.DeviceSentMessage.verify|verify} messages.
             * @param message DeviceSentMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IDeviceSentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeviceSentMessage message, length delimited. Does not implicitly {@link WAE2E.Message.DeviceSentMessage.verify|verify} messages.
             * @param message DeviceSentMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IDeviceSentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeviceSentMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeviceSentMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.DeviceSentMessage;

            /**
             * Decodes a DeviceSentMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeviceSentMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.DeviceSentMessage;

            /**
             * Verifies a DeviceSentMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeviceSentMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeviceSentMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.DeviceSentMessage;

            /**
             * Creates a plain object from a DeviceSentMessage message. Also converts values to other types if specified.
             * @param message DeviceSentMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.DeviceSentMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeviceSentMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeviceSentMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RequestPhoneNumberMessage. */
        interface IRequestPhoneNumberMessage {

            /** RequestPhoneNumberMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);
        }

        /** Represents a RequestPhoneNumberMessage. */
        class RequestPhoneNumberMessage implements IRequestPhoneNumberMessage {

            /**
             * Constructs a new RequestPhoneNumberMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IRequestPhoneNumberMessage);

            /** RequestPhoneNumberMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /**
             * Creates a new RequestPhoneNumberMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestPhoneNumberMessage instance
             */
            public static create(properties?: WAE2E.Message.IRequestPhoneNumberMessage): WAE2E.Message.RequestPhoneNumberMessage;

            /**
             * Encodes the specified RequestPhoneNumberMessage message. Does not implicitly {@link WAE2E.Message.RequestPhoneNumberMessage.verify|verify} messages.
             * @param message RequestPhoneNumberMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IRequestPhoneNumberMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestPhoneNumberMessage message, length delimited. Does not implicitly {@link WAE2E.Message.RequestPhoneNumberMessage.verify|verify} messages.
             * @param message RequestPhoneNumberMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IRequestPhoneNumberMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestPhoneNumberMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestPhoneNumberMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.RequestPhoneNumberMessage;

            /**
             * Decodes a RequestPhoneNumberMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestPhoneNumberMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.RequestPhoneNumberMessage;

            /**
             * Verifies a RequestPhoneNumberMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestPhoneNumberMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestPhoneNumberMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.RequestPhoneNumberMessage;

            /**
             * Creates a plain object from a RequestPhoneNumberMessage message. Also converts values to other types if specified.
             * @param message RequestPhoneNumberMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.RequestPhoneNumberMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestPhoneNumberMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RequestPhoneNumberMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NewsletterAdminInviteMessage. */
        interface INewsletterAdminInviteMessage {

            /** NewsletterAdminInviteMessage newsletterJID */
            newsletterJID?: (string|null);

            /** NewsletterAdminInviteMessage newsletterName */
            newsletterName?: (string|null);

            /** NewsletterAdminInviteMessage JPEGThumbnail */
            JPEGThumbnail?: (Uint8Array|null);

            /** NewsletterAdminInviteMessage caption */
            caption?: (string|null);

            /** NewsletterAdminInviteMessage inviteExpiration */
            inviteExpiration?: (number|Long|null);

            /** NewsletterAdminInviteMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);
        }

        /** Represents a NewsletterAdminInviteMessage. */
        class NewsletterAdminInviteMessage implements INewsletterAdminInviteMessage {

            /**
             * Constructs a new NewsletterAdminInviteMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.INewsletterAdminInviteMessage);

            /** NewsletterAdminInviteMessage newsletterJID. */
            public newsletterJID: string;

            /** NewsletterAdminInviteMessage newsletterName. */
            public newsletterName: string;

            /** NewsletterAdminInviteMessage JPEGThumbnail. */
            public JPEGThumbnail: Uint8Array;

            /** NewsletterAdminInviteMessage caption. */
            public caption: string;

            /** NewsletterAdminInviteMessage inviteExpiration. */
            public inviteExpiration: (number|Long);

            /** NewsletterAdminInviteMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /**
             * Creates a new NewsletterAdminInviteMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NewsletterAdminInviteMessage instance
             */
            public static create(properties?: WAE2E.Message.INewsletterAdminInviteMessage): WAE2E.Message.NewsletterAdminInviteMessage;

            /**
             * Encodes the specified NewsletterAdminInviteMessage message. Does not implicitly {@link WAE2E.Message.NewsletterAdminInviteMessage.verify|verify} messages.
             * @param message NewsletterAdminInviteMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.INewsletterAdminInviteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NewsletterAdminInviteMessage message, length delimited. Does not implicitly {@link WAE2E.Message.NewsletterAdminInviteMessage.verify|verify} messages.
             * @param message NewsletterAdminInviteMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.INewsletterAdminInviteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NewsletterAdminInviteMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NewsletterAdminInviteMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.NewsletterAdminInviteMessage;

            /**
             * Decodes a NewsletterAdminInviteMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NewsletterAdminInviteMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.NewsletterAdminInviteMessage;

            /**
             * Verifies a NewsletterAdminInviteMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NewsletterAdminInviteMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NewsletterAdminInviteMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.NewsletterAdminInviteMessage;

            /**
             * Creates a plain object from a NewsletterAdminInviteMessage message. Also converts values to other types if specified.
             * @param message NewsletterAdminInviteMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.NewsletterAdminInviteMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NewsletterAdminInviteMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NewsletterAdminInviteMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ProductMessage. */
        interface IProductMessage {

            /** ProductMessage product */
            product?: (WAE2E.Message.ProductMessage.IProductSnapshot|null);

            /** ProductMessage businessOwnerJID */
            businessOwnerJID?: (string|null);

            /** ProductMessage catalog */
            catalog?: (WAE2E.Message.ProductMessage.ICatalogSnapshot|null);

            /** ProductMessage body */
            body?: (string|null);

            /** ProductMessage footer */
            footer?: (string|null);

            /** ProductMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);
        }

        /** Represents a ProductMessage. */
        class ProductMessage implements IProductMessage {

            /**
             * Constructs a new ProductMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IProductMessage);

            /** ProductMessage product. */
            public product?: (WAE2E.Message.ProductMessage.IProductSnapshot|null);

            /** ProductMessage businessOwnerJID. */
            public businessOwnerJID: string;

            /** ProductMessage catalog. */
            public catalog?: (WAE2E.Message.ProductMessage.ICatalogSnapshot|null);

            /** ProductMessage body. */
            public body: string;

            /** ProductMessage footer. */
            public footer: string;

            /** ProductMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /**
             * Creates a new ProductMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProductMessage instance
             */
            public static create(properties?: WAE2E.Message.IProductMessage): WAE2E.Message.ProductMessage;

            /**
             * Encodes the specified ProductMessage message. Does not implicitly {@link WAE2E.Message.ProductMessage.verify|verify} messages.
             * @param message ProductMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IProductMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProductMessage message, length delimited. Does not implicitly {@link WAE2E.Message.ProductMessage.verify|verify} messages.
             * @param message ProductMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IProductMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProductMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProductMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ProductMessage;

            /**
             * Decodes a ProductMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProductMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ProductMessage;

            /**
             * Verifies a ProductMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProductMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProductMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.ProductMessage;

            /**
             * Creates a plain object from a ProductMessage message. Also converts values to other types if specified.
             * @param message ProductMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.ProductMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProductMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ProductMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ProductMessage {

            /** Properties of a ProductSnapshot. */
            interface IProductSnapshot {

                /** ProductSnapshot productImage */
                productImage?: (WAE2E.Message.IImageMessage|null);

                /** ProductSnapshot productID */
                productID?: (string|null);

                /** ProductSnapshot title */
                title?: (string|null);

                /** ProductSnapshot description */
                description?: (string|null);

                /** ProductSnapshot currencyCode */
                currencyCode?: (string|null);

                /** ProductSnapshot priceAmount1000 */
                priceAmount1000?: (number|Long|null);

                /** ProductSnapshot retailerID */
                retailerID?: (string|null);

                /** ProductSnapshot URL */
                URL?: (string|null);

                /** ProductSnapshot productImageCount */
                productImageCount?: (number|null);

                /** ProductSnapshot firstImageID */
                firstImageID?: (string|null);

                /** ProductSnapshot salePriceAmount1000 */
                salePriceAmount1000?: (number|Long|null);
            }

            /** Represents a ProductSnapshot. */
            class ProductSnapshot implements IProductSnapshot {

                /**
                 * Constructs a new ProductSnapshot.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.ProductMessage.IProductSnapshot);

                /** ProductSnapshot productImage. */
                public productImage?: (WAE2E.Message.IImageMessage|null);

                /** ProductSnapshot productID. */
                public productID: string;

                /** ProductSnapshot title. */
                public title: string;

                /** ProductSnapshot description. */
                public description: string;

                /** ProductSnapshot currencyCode. */
                public currencyCode: string;

                /** ProductSnapshot priceAmount1000. */
                public priceAmount1000: (number|Long);

                /** ProductSnapshot retailerID. */
                public retailerID: string;

                /** ProductSnapshot URL. */
                public URL: string;

                /** ProductSnapshot productImageCount. */
                public productImageCount: number;

                /** ProductSnapshot firstImageID. */
                public firstImageID: string;

                /** ProductSnapshot salePriceAmount1000. */
                public salePriceAmount1000: (number|Long);

                /**
                 * Creates a new ProductSnapshot instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProductSnapshot instance
                 */
                public static create(properties?: WAE2E.Message.ProductMessage.IProductSnapshot): WAE2E.Message.ProductMessage.ProductSnapshot;

                /**
                 * Encodes the specified ProductSnapshot message. Does not implicitly {@link WAE2E.Message.ProductMessage.ProductSnapshot.verify|verify} messages.
                 * @param message ProductSnapshot message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.ProductMessage.IProductSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProductSnapshot message, length delimited. Does not implicitly {@link WAE2E.Message.ProductMessage.ProductSnapshot.verify|verify} messages.
                 * @param message ProductSnapshot message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.ProductMessage.IProductSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProductSnapshot message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProductSnapshot
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ProductMessage.ProductSnapshot;

                /**
                 * Decodes a ProductSnapshot message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProductSnapshot
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ProductMessage.ProductSnapshot;

                /**
                 * Verifies a ProductSnapshot message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProductSnapshot message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProductSnapshot
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.ProductMessage.ProductSnapshot;

                /**
                 * Creates a plain object from a ProductSnapshot message. Also converts values to other types if specified.
                 * @param message ProductSnapshot
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.ProductMessage.ProductSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProductSnapshot to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ProductSnapshot
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CatalogSnapshot. */
            interface ICatalogSnapshot {

                /** CatalogSnapshot catalogImage */
                catalogImage?: (WAE2E.Message.IImageMessage|null);

                /** CatalogSnapshot title */
                title?: (string|null);

                /** CatalogSnapshot description */
                description?: (string|null);
            }

            /** Represents a CatalogSnapshot. */
            class CatalogSnapshot implements ICatalogSnapshot {

                /**
                 * Constructs a new CatalogSnapshot.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.ProductMessage.ICatalogSnapshot);

                /** CatalogSnapshot catalogImage. */
                public catalogImage?: (WAE2E.Message.IImageMessage|null);

                /** CatalogSnapshot title. */
                public title: string;

                /** CatalogSnapshot description. */
                public description: string;

                /**
                 * Creates a new CatalogSnapshot instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CatalogSnapshot instance
                 */
                public static create(properties?: WAE2E.Message.ProductMessage.ICatalogSnapshot): WAE2E.Message.ProductMessage.CatalogSnapshot;

                /**
                 * Encodes the specified CatalogSnapshot message. Does not implicitly {@link WAE2E.Message.ProductMessage.CatalogSnapshot.verify|verify} messages.
                 * @param message CatalogSnapshot message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.ProductMessage.ICatalogSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CatalogSnapshot message, length delimited. Does not implicitly {@link WAE2E.Message.ProductMessage.CatalogSnapshot.verify|verify} messages.
                 * @param message CatalogSnapshot message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.ProductMessage.ICatalogSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CatalogSnapshot message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CatalogSnapshot
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ProductMessage.CatalogSnapshot;

                /**
                 * Decodes a CatalogSnapshot message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CatalogSnapshot
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ProductMessage.CatalogSnapshot;

                /**
                 * Verifies a CatalogSnapshot message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CatalogSnapshot message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CatalogSnapshot
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.ProductMessage.CatalogSnapshot;

                /**
                 * Creates a plain object from a CatalogSnapshot message. Also converts values to other types if specified.
                 * @param message CatalogSnapshot
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.ProductMessage.CatalogSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CatalogSnapshot to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CatalogSnapshot
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a TemplateButtonReplyMessage. */
        interface ITemplateButtonReplyMessage {

            /** TemplateButtonReplyMessage selectedID */
            selectedID?: (string|null);

            /** TemplateButtonReplyMessage selectedDisplayText */
            selectedDisplayText?: (string|null);

            /** TemplateButtonReplyMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** TemplateButtonReplyMessage selectedIndex */
            selectedIndex?: (number|null);

            /** TemplateButtonReplyMessage selectedCarouselCardIndex */
            selectedCarouselCardIndex?: (number|null);
        }

        /** Represents a TemplateButtonReplyMessage. */
        class TemplateButtonReplyMessage implements ITemplateButtonReplyMessage {

            /**
             * Constructs a new TemplateButtonReplyMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.ITemplateButtonReplyMessage);

            /** TemplateButtonReplyMessage selectedID. */
            public selectedID: string;

            /** TemplateButtonReplyMessage selectedDisplayText. */
            public selectedDisplayText: string;

            /** TemplateButtonReplyMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** TemplateButtonReplyMessage selectedIndex. */
            public selectedIndex: number;

            /** TemplateButtonReplyMessage selectedCarouselCardIndex. */
            public selectedCarouselCardIndex: number;

            /**
             * Creates a new TemplateButtonReplyMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TemplateButtonReplyMessage instance
             */
            public static create(properties?: WAE2E.Message.ITemplateButtonReplyMessage): WAE2E.Message.TemplateButtonReplyMessage;

            /**
             * Encodes the specified TemplateButtonReplyMessage message. Does not implicitly {@link WAE2E.Message.TemplateButtonReplyMessage.verify|verify} messages.
             * @param message TemplateButtonReplyMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.ITemplateButtonReplyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TemplateButtonReplyMessage message, length delimited. Does not implicitly {@link WAE2E.Message.TemplateButtonReplyMessage.verify|verify} messages.
             * @param message TemplateButtonReplyMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.ITemplateButtonReplyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TemplateButtonReplyMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TemplateButtonReplyMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.TemplateButtonReplyMessage;

            /**
             * Decodes a TemplateButtonReplyMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TemplateButtonReplyMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.TemplateButtonReplyMessage;

            /**
             * Verifies a TemplateButtonReplyMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TemplateButtonReplyMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TemplateButtonReplyMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.TemplateButtonReplyMessage;

            /**
             * Creates a plain object from a TemplateButtonReplyMessage message. Also converts values to other types if specified.
             * @param message TemplateButtonReplyMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.TemplateButtonReplyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TemplateButtonReplyMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TemplateButtonReplyMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TemplateMessage. */
        interface ITemplateMessage {

            /** TemplateMessage fourRowTemplate */
            fourRowTemplate?: (WAE2E.Message.TemplateMessage.IFourRowTemplate|null);

            /** TemplateMessage hydratedFourRowTemplate */
            hydratedFourRowTemplate?: (WAE2E.Message.TemplateMessage.IHydratedFourRowTemplate|null);

            /** TemplateMessage interactiveMessageTemplate */
            interactiveMessageTemplate?: (WAE2E.Message.IInteractiveMessage|null);

            /** TemplateMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** TemplateMessage hydratedTemplate */
            hydratedTemplate?: (WAE2E.Message.TemplateMessage.IHydratedFourRowTemplate|null);

            /** TemplateMessage templateID */
            templateID?: (string|null);
        }

        /** Represents a TemplateMessage. */
        class TemplateMessage implements ITemplateMessage {

            /**
             * Constructs a new TemplateMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.ITemplateMessage);

            /** TemplateMessage fourRowTemplate. */
            public fourRowTemplate?: (WAE2E.Message.TemplateMessage.IFourRowTemplate|null);

            /** TemplateMessage hydratedFourRowTemplate. */
            public hydratedFourRowTemplate?: (WAE2E.Message.TemplateMessage.IHydratedFourRowTemplate|null);

            /** TemplateMessage interactiveMessageTemplate. */
            public interactiveMessageTemplate?: (WAE2E.Message.IInteractiveMessage|null);

            /** TemplateMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** TemplateMessage hydratedTemplate. */
            public hydratedTemplate?: (WAE2E.Message.TemplateMessage.IHydratedFourRowTemplate|null);

            /** TemplateMessage templateID. */
            public templateID: string;

            /** TemplateMessage format. */
            public format?: ("fourRowTemplate"|"hydratedFourRowTemplate"|"interactiveMessageTemplate");

            /**
             * Creates a new TemplateMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TemplateMessage instance
             */
            public static create(properties?: WAE2E.Message.ITemplateMessage): WAE2E.Message.TemplateMessage;

            /**
             * Encodes the specified TemplateMessage message. Does not implicitly {@link WAE2E.Message.TemplateMessage.verify|verify} messages.
             * @param message TemplateMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.ITemplateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TemplateMessage message, length delimited. Does not implicitly {@link WAE2E.Message.TemplateMessage.verify|verify} messages.
             * @param message TemplateMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.ITemplateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TemplateMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TemplateMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.TemplateMessage;

            /**
             * Decodes a TemplateMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TemplateMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.TemplateMessage;

            /**
             * Verifies a TemplateMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TemplateMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TemplateMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.TemplateMessage;

            /**
             * Creates a plain object from a TemplateMessage message. Also converts values to other types if specified.
             * @param message TemplateMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.TemplateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TemplateMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TemplateMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace TemplateMessage {

            /** Properties of a HydratedFourRowTemplate. */
            interface IHydratedFourRowTemplate {

                /** HydratedFourRowTemplate documentMessage */
                documentMessage?: (WAE2E.Message.IDocumentMessage|null);

                /** HydratedFourRowTemplate hydratedTitleText */
                hydratedTitleText?: (string|null);

                /** HydratedFourRowTemplate imageMessage */
                imageMessage?: (WAE2E.Message.IImageMessage|null);

                /** HydratedFourRowTemplate videoMessage */
                videoMessage?: (WAE2E.Message.IVideoMessage|null);

                /** HydratedFourRowTemplate locationMessage */
                locationMessage?: (WAE2E.Message.ILocationMessage|null);

                /** HydratedFourRowTemplate hydratedContentText */
                hydratedContentText?: (string|null);

                /** HydratedFourRowTemplate hydratedFooterText */
                hydratedFooterText?: (string|null);

                /** HydratedFourRowTemplate hydratedButtons */
                hydratedButtons?: (WAE2E.IHydratedTemplateButton[]|null);

                /** HydratedFourRowTemplate templateID */
                templateID?: (string|null);

                /** HydratedFourRowTemplate maskLinkedDevices */
                maskLinkedDevices?: (boolean|null);
            }

            /** Represents a HydratedFourRowTemplate. */
            class HydratedFourRowTemplate implements IHydratedFourRowTemplate {

                /**
                 * Constructs a new HydratedFourRowTemplate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.TemplateMessage.IHydratedFourRowTemplate);

                /** HydratedFourRowTemplate documentMessage. */
                public documentMessage?: (WAE2E.Message.IDocumentMessage|null);

                /** HydratedFourRowTemplate hydratedTitleText. */
                public hydratedTitleText?: (string|null);

                /** HydratedFourRowTemplate imageMessage. */
                public imageMessage?: (WAE2E.Message.IImageMessage|null);

                /** HydratedFourRowTemplate videoMessage. */
                public videoMessage?: (WAE2E.Message.IVideoMessage|null);

                /** HydratedFourRowTemplate locationMessage. */
                public locationMessage?: (WAE2E.Message.ILocationMessage|null);

                /** HydratedFourRowTemplate hydratedContentText. */
                public hydratedContentText: string;

                /** HydratedFourRowTemplate hydratedFooterText. */
                public hydratedFooterText: string;

                /** HydratedFourRowTemplate hydratedButtons. */
                public hydratedButtons: WAE2E.IHydratedTemplateButton[];

                /** HydratedFourRowTemplate templateID. */
                public templateID: string;

                /** HydratedFourRowTemplate maskLinkedDevices. */
                public maskLinkedDevices: boolean;

                /** HydratedFourRowTemplate title. */
                public title?: ("documentMessage"|"hydratedTitleText"|"imageMessage"|"videoMessage"|"locationMessage");

                /**
                 * Creates a new HydratedFourRowTemplate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HydratedFourRowTemplate instance
                 */
                public static create(properties?: WAE2E.Message.TemplateMessage.IHydratedFourRowTemplate): WAE2E.Message.TemplateMessage.HydratedFourRowTemplate;

                /**
                 * Encodes the specified HydratedFourRowTemplate message. Does not implicitly {@link WAE2E.Message.TemplateMessage.HydratedFourRowTemplate.verify|verify} messages.
                 * @param message HydratedFourRowTemplate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.TemplateMessage.IHydratedFourRowTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HydratedFourRowTemplate message, length delimited. Does not implicitly {@link WAE2E.Message.TemplateMessage.HydratedFourRowTemplate.verify|verify} messages.
                 * @param message HydratedFourRowTemplate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.TemplateMessage.IHydratedFourRowTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HydratedFourRowTemplate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HydratedFourRowTemplate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.TemplateMessage.HydratedFourRowTemplate;

                /**
                 * Decodes a HydratedFourRowTemplate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HydratedFourRowTemplate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.TemplateMessage.HydratedFourRowTemplate;

                /**
                 * Verifies a HydratedFourRowTemplate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HydratedFourRowTemplate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HydratedFourRowTemplate
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.TemplateMessage.HydratedFourRowTemplate;

                /**
                 * Creates a plain object from a HydratedFourRowTemplate message. Also converts values to other types if specified.
                 * @param message HydratedFourRowTemplate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.TemplateMessage.HydratedFourRowTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HydratedFourRowTemplate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for HydratedFourRowTemplate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FourRowTemplate. */
            interface IFourRowTemplate {

                /** FourRowTemplate documentMessage */
                documentMessage?: (WAE2E.Message.IDocumentMessage|null);

                /** FourRowTemplate highlyStructuredMessage */
                highlyStructuredMessage?: (WAE2E.Message.IHighlyStructuredMessage|null);

                /** FourRowTemplate imageMessage */
                imageMessage?: (WAE2E.Message.IImageMessage|null);

                /** FourRowTemplate videoMessage */
                videoMessage?: (WAE2E.Message.IVideoMessage|null);

                /** FourRowTemplate locationMessage */
                locationMessage?: (WAE2E.Message.ILocationMessage|null);

                /** FourRowTemplate content */
                content?: (WAE2E.Message.IHighlyStructuredMessage|null);

                /** FourRowTemplate footer */
                footer?: (WAE2E.Message.IHighlyStructuredMessage|null);

                /** FourRowTemplate buttons */
                buttons?: (WAE2E.ITemplateButton[]|null);
            }

            /** Represents a FourRowTemplate. */
            class FourRowTemplate implements IFourRowTemplate {

                /**
                 * Constructs a new FourRowTemplate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.TemplateMessage.IFourRowTemplate);

                /** FourRowTemplate documentMessage. */
                public documentMessage?: (WAE2E.Message.IDocumentMessage|null);

                /** FourRowTemplate highlyStructuredMessage. */
                public highlyStructuredMessage?: (WAE2E.Message.IHighlyStructuredMessage|null);

                /** FourRowTemplate imageMessage. */
                public imageMessage?: (WAE2E.Message.IImageMessage|null);

                /** FourRowTemplate videoMessage. */
                public videoMessage?: (WAE2E.Message.IVideoMessage|null);

                /** FourRowTemplate locationMessage. */
                public locationMessage?: (WAE2E.Message.ILocationMessage|null);

                /** FourRowTemplate content. */
                public content?: (WAE2E.Message.IHighlyStructuredMessage|null);

                /** FourRowTemplate footer. */
                public footer?: (WAE2E.Message.IHighlyStructuredMessage|null);

                /** FourRowTemplate buttons. */
                public buttons: WAE2E.ITemplateButton[];

                /** FourRowTemplate title. */
                public title?: ("documentMessage"|"highlyStructuredMessage"|"imageMessage"|"videoMessage"|"locationMessage");

                /**
                 * Creates a new FourRowTemplate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FourRowTemplate instance
                 */
                public static create(properties?: WAE2E.Message.TemplateMessage.IFourRowTemplate): WAE2E.Message.TemplateMessage.FourRowTemplate;

                /**
                 * Encodes the specified FourRowTemplate message. Does not implicitly {@link WAE2E.Message.TemplateMessage.FourRowTemplate.verify|verify} messages.
                 * @param message FourRowTemplate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.TemplateMessage.IFourRowTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FourRowTemplate message, length delimited. Does not implicitly {@link WAE2E.Message.TemplateMessage.FourRowTemplate.verify|verify} messages.
                 * @param message FourRowTemplate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.TemplateMessage.IFourRowTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FourRowTemplate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FourRowTemplate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.TemplateMessage.FourRowTemplate;

                /**
                 * Decodes a FourRowTemplate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FourRowTemplate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.TemplateMessage.FourRowTemplate;

                /**
                 * Verifies a FourRowTemplate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FourRowTemplate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FourRowTemplate
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.TemplateMessage.FourRowTemplate;

                /**
                 * Creates a plain object from a FourRowTemplate message. Also converts values to other types if specified.
                 * @param message FourRowTemplate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.TemplateMessage.FourRowTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FourRowTemplate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FourRowTemplate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a StickerMessage. */
        interface IStickerMessage {

            /** StickerMessage URL */
            URL?: (string|null);

            /** StickerMessage fileSHA256 */
            fileSHA256?: (Uint8Array|null);

            /** StickerMessage fileEncSHA256 */
            fileEncSHA256?: (Uint8Array|null);

            /** StickerMessage mediaKey */
            mediaKey?: (Uint8Array|null);

            /** StickerMessage mimetype */
            mimetype?: (string|null);

            /** StickerMessage height */
            height?: (number|null);

            /** StickerMessage width */
            width?: (number|null);

            /** StickerMessage directPath */
            directPath?: (string|null);

            /** StickerMessage fileLength */
            fileLength?: (number|Long|null);

            /** StickerMessage mediaKeyTimestamp */
            mediaKeyTimestamp?: (number|Long|null);

            /** StickerMessage firstFrameLength */
            firstFrameLength?: (number|null);

            /** StickerMessage firstFrameSidecar */
            firstFrameSidecar?: (Uint8Array|null);

            /** StickerMessage isAnimated */
            isAnimated?: (boolean|null);

            /** StickerMessage pngThumbnail */
            pngThumbnail?: (Uint8Array|null);

            /** StickerMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** StickerMessage stickerSentTS */
            stickerSentTS?: (number|Long|null);

            /** StickerMessage isAvatar */
            isAvatar?: (boolean|null);

            /** StickerMessage isAiSticker */
            isAiSticker?: (boolean|null);

            /** StickerMessage isLottie */
            isLottie?: (boolean|null);

            /** StickerMessage accessibilityLabel */
            accessibilityLabel?: (string|null);
        }

        /** Represents a StickerMessage. */
        class StickerMessage implements IStickerMessage {

            /**
             * Constructs a new StickerMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IStickerMessage);

            /** StickerMessage URL. */
            public URL: string;

            /** StickerMessage fileSHA256. */
            public fileSHA256: Uint8Array;

            /** StickerMessage fileEncSHA256. */
            public fileEncSHA256: Uint8Array;

            /** StickerMessage mediaKey. */
            public mediaKey: Uint8Array;

            /** StickerMessage mimetype. */
            public mimetype: string;

            /** StickerMessage height. */
            public height: number;

            /** StickerMessage width. */
            public width: number;

            /** StickerMessage directPath. */
            public directPath: string;

            /** StickerMessage fileLength. */
            public fileLength: (number|Long);

            /** StickerMessage mediaKeyTimestamp. */
            public mediaKeyTimestamp: (number|Long);

            /** StickerMessage firstFrameLength. */
            public firstFrameLength: number;

            /** StickerMessage firstFrameSidecar. */
            public firstFrameSidecar: Uint8Array;

            /** StickerMessage isAnimated. */
            public isAnimated: boolean;

            /** StickerMessage pngThumbnail. */
            public pngThumbnail: Uint8Array;

            /** StickerMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** StickerMessage stickerSentTS. */
            public stickerSentTS: (number|Long);

            /** StickerMessage isAvatar. */
            public isAvatar: boolean;

            /** StickerMessage isAiSticker. */
            public isAiSticker: boolean;

            /** StickerMessage isLottie. */
            public isLottie: boolean;

            /** StickerMessage accessibilityLabel. */
            public accessibilityLabel: string;

            /**
             * Creates a new StickerMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StickerMessage instance
             */
            public static create(properties?: WAE2E.Message.IStickerMessage): WAE2E.Message.StickerMessage;

            /**
             * Encodes the specified StickerMessage message. Does not implicitly {@link WAE2E.Message.StickerMessage.verify|verify} messages.
             * @param message StickerMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IStickerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StickerMessage message, length delimited. Does not implicitly {@link WAE2E.Message.StickerMessage.verify|verify} messages.
             * @param message StickerMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IStickerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StickerMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StickerMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.StickerMessage;

            /**
             * Decodes a StickerMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StickerMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.StickerMessage;

            /**
             * Verifies a StickerMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StickerMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StickerMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.StickerMessage;

            /**
             * Creates a plain object from a StickerMessage message. Also converts values to other types if specified.
             * @param message StickerMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.StickerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StickerMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StickerMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LiveLocationMessage. */
        interface ILiveLocationMessage {

            /** LiveLocationMessage degreesLatitude */
            degreesLatitude?: (number|null);

            /** LiveLocationMessage degreesLongitude */
            degreesLongitude?: (number|null);

            /** LiveLocationMessage accuracyInMeters */
            accuracyInMeters?: (number|null);

            /** LiveLocationMessage speedInMps */
            speedInMps?: (number|null);

            /** LiveLocationMessage degreesClockwiseFromMagneticNorth */
            degreesClockwiseFromMagneticNorth?: (number|null);

            /** LiveLocationMessage caption */
            caption?: (string|null);

            /** LiveLocationMessage sequenceNumber */
            sequenceNumber?: (number|Long|null);

            /** LiveLocationMessage timeOffset */
            timeOffset?: (number|null);

            /** LiveLocationMessage JPEGThumbnail */
            JPEGThumbnail?: (Uint8Array|null);

            /** LiveLocationMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);
        }

        /** Represents a LiveLocationMessage. */
        class LiveLocationMessage implements ILiveLocationMessage {

            /**
             * Constructs a new LiveLocationMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.ILiveLocationMessage);

            /** LiveLocationMessage degreesLatitude. */
            public degreesLatitude: number;

            /** LiveLocationMessage degreesLongitude. */
            public degreesLongitude: number;

            /** LiveLocationMessage accuracyInMeters. */
            public accuracyInMeters: number;

            /** LiveLocationMessage speedInMps. */
            public speedInMps: number;

            /** LiveLocationMessage degreesClockwiseFromMagneticNorth. */
            public degreesClockwiseFromMagneticNorth: number;

            /** LiveLocationMessage caption. */
            public caption: string;

            /** LiveLocationMessage sequenceNumber. */
            public sequenceNumber: (number|Long);

            /** LiveLocationMessage timeOffset. */
            public timeOffset: number;

            /** LiveLocationMessage JPEGThumbnail. */
            public JPEGThumbnail: Uint8Array;

            /** LiveLocationMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /**
             * Creates a new LiveLocationMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiveLocationMessage instance
             */
            public static create(properties?: WAE2E.Message.ILiveLocationMessage): WAE2E.Message.LiveLocationMessage;

            /**
             * Encodes the specified LiveLocationMessage message. Does not implicitly {@link WAE2E.Message.LiveLocationMessage.verify|verify} messages.
             * @param message LiveLocationMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.ILiveLocationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LiveLocationMessage message, length delimited. Does not implicitly {@link WAE2E.Message.LiveLocationMessage.verify|verify} messages.
             * @param message LiveLocationMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.ILiveLocationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LiveLocationMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiveLocationMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.LiveLocationMessage;

            /**
             * Decodes a LiveLocationMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LiveLocationMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.LiveLocationMessage;

            /**
             * Verifies a LiveLocationMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LiveLocationMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LiveLocationMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.LiveLocationMessage;

            /**
             * Creates a plain object from a LiveLocationMessage message. Also converts values to other types if specified.
             * @param message LiveLocationMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.LiveLocationMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LiveLocationMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LiveLocationMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CancelPaymentRequestMessage. */
        interface ICancelPaymentRequestMessage {

            /** CancelPaymentRequestMessage key */
            key?: (WAProtocol.IMessageKey|null);
        }

        /** Represents a CancelPaymentRequestMessage. */
        class CancelPaymentRequestMessage implements ICancelPaymentRequestMessage {

            /**
             * Constructs a new CancelPaymentRequestMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.ICancelPaymentRequestMessage);

            /** CancelPaymentRequestMessage key. */
            public key?: (WAProtocol.IMessageKey|null);

            /**
             * Creates a new CancelPaymentRequestMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelPaymentRequestMessage instance
             */
            public static create(properties?: WAE2E.Message.ICancelPaymentRequestMessage): WAE2E.Message.CancelPaymentRequestMessage;

            /**
             * Encodes the specified CancelPaymentRequestMessage message. Does not implicitly {@link WAE2E.Message.CancelPaymentRequestMessage.verify|verify} messages.
             * @param message CancelPaymentRequestMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.ICancelPaymentRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelPaymentRequestMessage message, length delimited. Does not implicitly {@link WAE2E.Message.CancelPaymentRequestMessage.verify|verify} messages.
             * @param message CancelPaymentRequestMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.ICancelPaymentRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelPaymentRequestMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelPaymentRequestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.CancelPaymentRequestMessage;

            /**
             * Decodes a CancelPaymentRequestMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelPaymentRequestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.CancelPaymentRequestMessage;

            /**
             * Verifies a CancelPaymentRequestMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelPaymentRequestMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelPaymentRequestMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.CancelPaymentRequestMessage;

            /**
             * Creates a plain object from a CancelPaymentRequestMessage message. Also converts values to other types if specified.
             * @param message CancelPaymentRequestMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.CancelPaymentRequestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelPaymentRequestMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CancelPaymentRequestMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeclinePaymentRequestMessage. */
        interface IDeclinePaymentRequestMessage {

            /** DeclinePaymentRequestMessage key */
            key?: (WAProtocol.IMessageKey|null);
        }

        /** Represents a DeclinePaymentRequestMessage. */
        class DeclinePaymentRequestMessage implements IDeclinePaymentRequestMessage {

            /**
             * Constructs a new DeclinePaymentRequestMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IDeclinePaymentRequestMessage);

            /** DeclinePaymentRequestMessage key. */
            public key?: (WAProtocol.IMessageKey|null);

            /**
             * Creates a new DeclinePaymentRequestMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeclinePaymentRequestMessage instance
             */
            public static create(properties?: WAE2E.Message.IDeclinePaymentRequestMessage): WAE2E.Message.DeclinePaymentRequestMessage;

            /**
             * Encodes the specified DeclinePaymentRequestMessage message. Does not implicitly {@link WAE2E.Message.DeclinePaymentRequestMessage.verify|verify} messages.
             * @param message DeclinePaymentRequestMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IDeclinePaymentRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeclinePaymentRequestMessage message, length delimited. Does not implicitly {@link WAE2E.Message.DeclinePaymentRequestMessage.verify|verify} messages.
             * @param message DeclinePaymentRequestMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IDeclinePaymentRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeclinePaymentRequestMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeclinePaymentRequestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.DeclinePaymentRequestMessage;

            /**
             * Decodes a DeclinePaymentRequestMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeclinePaymentRequestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.DeclinePaymentRequestMessage;

            /**
             * Verifies a DeclinePaymentRequestMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeclinePaymentRequestMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeclinePaymentRequestMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.DeclinePaymentRequestMessage;

            /**
             * Creates a plain object from a DeclinePaymentRequestMessage message. Also converts values to other types if specified.
             * @param message DeclinePaymentRequestMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.DeclinePaymentRequestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeclinePaymentRequestMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeclinePaymentRequestMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RequestPaymentMessage. */
        interface IRequestPaymentMessage {

            /** RequestPaymentMessage noteMessage */
            noteMessage?: (WAE2E.IMessage|null);

            /** RequestPaymentMessage currencyCodeIso4217 */
            currencyCodeIso4217?: (string|null);

            /** RequestPaymentMessage amount1000 */
            amount1000?: (number|Long|null);

            /** RequestPaymentMessage requestFrom */
            requestFrom?: (string|null);

            /** RequestPaymentMessage expiryTimestamp */
            expiryTimestamp?: (number|Long|null);

            /** RequestPaymentMessage amount */
            amount?: (WAE2E.IMoney|null);

            /** RequestPaymentMessage background */
            background?: (WAE2E.IPaymentBackground|null);
        }

        /** Represents a RequestPaymentMessage. */
        class RequestPaymentMessage implements IRequestPaymentMessage {

            /**
             * Constructs a new RequestPaymentMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IRequestPaymentMessage);

            /** RequestPaymentMessage noteMessage. */
            public noteMessage?: (WAE2E.IMessage|null);

            /** RequestPaymentMessage currencyCodeIso4217. */
            public currencyCodeIso4217: string;

            /** RequestPaymentMessage amount1000. */
            public amount1000: (number|Long);

            /** RequestPaymentMessage requestFrom. */
            public requestFrom: string;

            /** RequestPaymentMessage expiryTimestamp. */
            public expiryTimestamp: (number|Long);

            /** RequestPaymentMessage amount. */
            public amount?: (WAE2E.IMoney|null);

            /** RequestPaymentMessage background. */
            public background?: (WAE2E.IPaymentBackground|null);

            /**
             * Creates a new RequestPaymentMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestPaymentMessage instance
             */
            public static create(properties?: WAE2E.Message.IRequestPaymentMessage): WAE2E.Message.RequestPaymentMessage;

            /**
             * Encodes the specified RequestPaymentMessage message. Does not implicitly {@link WAE2E.Message.RequestPaymentMessage.verify|verify} messages.
             * @param message RequestPaymentMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IRequestPaymentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestPaymentMessage message, length delimited. Does not implicitly {@link WAE2E.Message.RequestPaymentMessage.verify|verify} messages.
             * @param message RequestPaymentMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IRequestPaymentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestPaymentMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestPaymentMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.RequestPaymentMessage;

            /**
             * Decodes a RequestPaymentMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestPaymentMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.RequestPaymentMessage;

            /**
             * Verifies a RequestPaymentMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestPaymentMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestPaymentMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.RequestPaymentMessage;

            /**
             * Creates a plain object from a RequestPaymentMessage message. Also converts values to other types if specified.
             * @param message RequestPaymentMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.RequestPaymentMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestPaymentMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RequestPaymentMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SendPaymentMessage. */
        interface ISendPaymentMessage {

            /** SendPaymentMessage noteMessage */
            noteMessage?: (WAE2E.IMessage|null);

            /** SendPaymentMessage requestMessageKey */
            requestMessageKey?: (WAProtocol.IMessageKey|null);

            /** SendPaymentMessage background */
            background?: (WAE2E.IPaymentBackground|null);
        }

        /** Represents a SendPaymentMessage. */
        class SendPaymentMessage implements ISendPaymentMessage {

            /**
             * Constructs a new SendPaymentMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.ISendPaymentMessage);

            /** SendPaymentMessage noteMessage. */
            public noteMessage?: (WAE2E.IMessage|null);

            /** SendPaymentMessage requestMessageKey. */
            public requestMessageKey?: (WAProtocol.IMessageKey|null);

            /** SendPaymentMessage background. */
            public background?: (WAE2E.IPaymentBackground|null);

            /**
             * Creates a new SendPaymentMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SendPaymentMessage instance
             */
            public static create(properties?: WAE2E.Message.ISendPaymentMessage): WAE2E.Message.SendPaymentMessage;

            /**
             * Encodes the specified SendPaymentMessage message. Does not implicitly {@link WAE2E.Message.SendPaymentMessage.verify|verify} messages.
             * @param message SendPaymentMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.ISendPaymentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SendPaymentMessage message, length delimited. Does not implicitly {@link WAE2E.Message.SendPaymentMessage.verify|verify} messages.
             * @param message SendPaymentMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.ISendPaymentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SendPaymentMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SendPaymentMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.SendPaymentMessage;

            /**
             * Decodes a SendPaymentMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SendPaymentMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.SendPaymentMessage;

            /**
             * Verifies a SendPaymentMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SendPaymentMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SendPaymentMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.SendPaymentMessage;

            /**
             * Creates a plain object from a SendPaymentMessage message. Also converts values to other types if specified.
             * @param message SendPaymentMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.SendPaymentMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SendPaymentMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SendPaymentMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ContactsArrayMessage. */
        interface IContactsArrayMessage {

            /** ContactsArrayMessage displayName */
            displayName?: (string|null);

            /** ContactsArrayMessage contacts */
            contacts?: (WAE2E.Message.IContactMessage[]|null);

            /** ContactsArrayMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);
        }

        /** Represents a ContactsArrayMessage. */
        class ContactsArrayMessage implements IContactsArrayMessage {

            /**
             * Constructs a new ContactsArrayMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IContactsArrayMessage);

            /** ContactsArrayMessage displayName. */
            public displayName: string;

            /** ContactsArrayMessage contacts. */
            public contacts: WAE2E.Message.IContactMessage[];

            /** ContactsArrayMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /**
             * Creates a new ContactsArrayMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContactsArrayMessage instance
             */
            public static create(properties?: WAE2E.Message.IContactsArrayMessage): WAE2E.Message.ContactsArrayMessage;

            /**
             * Encodes the specified ContactsArrayMessage message. Does not implicitly {@link WAE2E.Message.ContactsArrayMessage.verify|verify} messages.
             * @param message ContactsArrayMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IContactsArrayMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContactsArrayMessage message, length delimited. Does not implicitly {@link WAE2E.Message.ContactsArrayMessage.verify|verify} messages.
             * @param message ContactsArrayMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IContactsArrayMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContactsArrayMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContactsArrayMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ContactsArrayMessage;

            /**
             * Decodes a ContactsArrayMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContactsArrayMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ContactsArrayMessage;

            /**
             * Verifies a ContactsArrayMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContactsArrayMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContactsArrayMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.ContactsArrayMessage;

            /**
             * Creates a plain object from a ContactsArrayMessage message. Also converts values to other types if specified.
             * @param message ContactsArrayMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.ContactsArrayMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContactsArrayMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ContactsArrayMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InitialSecurityNotificationSettingSync. */
        interface IInitialSecurityNotificationSettingSync {

            /** InitialSecurityNotificationSettingSync securityNotificationEnabled */
            securityNotificationEnabled?: (boolean|null);
        }

        /** Represents an InitialSecurityNotificationSettingSync. */
        class InitialSecurityNotificationSettingSync implements IInitialSecurityNotificationSettingSync {

            /**
             * Constructs a new InitialSecurityNotificationSettingSync.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IInitialSecurityNotificationSettingSync);

            /** InitialSecurityNotificationSettingSync securityNotificationEnabled. */
            public securityNotificationEnabled: boolean;

            /**
             * Creates a new InitialSecurityNotificationSettingSync instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InitialSecurityNotificationSettingSync instance
             */
            public static create(properties?: WAE2E.Message.IInitialSecurityNotificationSettingSync): WAE2E.Message.InitialSecurityNotificationSettingSync;

            /**
             * Encodes the specified InitialSecurityNotificationSettingSync message. Does not implicitly {@link WAE2E.Message.InitialSecurityNotificationSettingSync.verify|verify} messages.
             * @param message InitialSecurityNotificationSettingSync message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IInitialSecurityNotificationSettingSync, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InitialSecurityNotificationSettingSync message, length delimited. Does not implicitly {@link WAE2E.Message.InitialSecurityNotificationSettingSync.verify|verify} messages.
             * @param message InitialSecurityNotificationSettingSync message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IInitialSecurityNotificationSettingSync, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InitialSecurityNotificationSettingSync message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InitialSecurityNotificationSettingSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.InitialSecurityNotificationSettingSync;

            /**
             * Decodes an InitialSecurityNotificationSettingSync message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InitialSecurityNotificationSettingSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.InitialSecurityNotificationSettingSync;

            /**
             * Verifies an InitialSecurityNotificationSettingSync message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InitialSecurityNotificationSettingSync message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InitialSecurityNotificationSettingSync
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.InitialSecurityNotificationSettingSync;

            /**
             * Creates a plain object from an InitialSecurityNotificationSettingSync message. Also converts values to other types if specified.
             * @param message InitialSecurityNotificationSettingSync
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.InitialSecurityNotificationSettingSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InitialSecurityNotificationSettingSync to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InitialSecurityNotificationSettingSync
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PeerDataOperationRequestResponseMessage. */
        interface IPeerDataOperationRequestResponseMessage {

            /** PeerDataOperationRequestResponseMessage peerDataOperationRequestType */
            peerDataOperationRequestType?: (WAE2E.Message.PeerDataOperationRequestType|null);

            /** PeerDataOperationRequestResponseMessage stanzaID */
            stanzaID?: (string|null);

            /** PeerDataOperationRequestResponseMessage peerDataOperationResult */
            peerDataOperationResult?: (WAE2E.Message.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult[]|null);
        }

        /** Represents a PeerDataOperationRequestResponseMessage. */
        class PeerDataOperationRequestResponseMessage implements IPeerDataOperationRequestResponseMessage {

            /**
             * Constructs a new PeerDataOperationRequestResponseMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IPeerDataOperationRequestResponseMessage);

            /** PeerDataOperationRequestResponseMessage peerDataOperationRequestType. */
            public peerDataOperationRequestType: WAE2E.Message.PeerDataOperationRequestType;

            /** PeerDataOperationRequestResponseMessage stanzaID. */
            public stanzaID: string;

            /** PeerDataOperationRequestResponseMessage peerDataOperationResult. */
            public peerDataOperationResult: WAE2E.Message.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult[];

            /**
             * Creates a new PeerDataOperationRequestResponseMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PeerDataOperationRequestResponseMessage instance
             */
            public static create(properties?: WAE2E.Message.IPeerDataOperationRequestResponseMessage): WAE2E.Message.PeerDataOperationRequestResponseMessage;

            /**
             * Encodes the specified PeerDataOperationRequestResponseMessage message. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestResponseMessage.verify|verify} messages.
             * @param message PeerDataOperationRequestResponseMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IPeerDataOperationRequestResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PeerDataOperationRequestResponseMessage message, length delimited. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestResponseMessage.verify|verify} messages.
             * @param message PeerDataOperationRequestResponseMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IPeerDataOperationRequestResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PeerDataOperationRequestResponseMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PeerDataOperationRequestResponseMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PeerDataOperationRequestResponseMessage;

            /**
             * Decodes a PeerDataOperationRequestResponseMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PeerDataOperationRequestResponseMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PeerDataOperationRequestResponseMessage;

            /**
             * Verifies a PeerDataOperationRequestResponseMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PeerDataOperationRequestResponseMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PeerDataOperationRequestResponseMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.PeerDataOperationRequestResponseMessage;

            /**
             * Creates a plain object from a PeerDataOperationRequestResponseMessage message. Also converts values to other types if specified.
             * @param message PeerDataOperationRequestResponseMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.PeerDataOperationRequestResponseMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PeerDataOperationRequestResponseMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PeerDataOperationRequestResponseMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PeerDataOperationRequestResponseMessage {

            /** Properties of a PeerDataOperationResult. */
            interface IPeerDataOperationResult {

                /** PeerDataOperationResult mediaUploadResult */
                mediaUploadResult?: (WAMmsRetry.MediaRetryNotification.ResultType|null);

                /** PeerDataOperationResult stickerMessage */
                stickerMessage?: (WAE2E.Message.IStickerMessage|null);

                /** PeerDataOperationResult linkPreviewResponse */
                linkPreviewResponse?: (WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse|null);

                /** PeerDataOperationResult placeholderMessageResendResponse */
                placeholderMessageResendResponse?: (WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse|null);

                /** PeerDataOperationResult waffleNonceFetchRequestResponse */
                waffleNonceFetchRequestResponse?: (WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IWaffleNonceFetchResponse|null);
            }

            /** Represents a PeerDataOperationResult. */
            class PeerDataOperationResult implements IPeerDataOperationResult {

                /**
                 * Constructs a new PeerDataOperationResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult);

                /** PeerDataOperationResult mediaUploadResult. */
                public mediaUploadResult: WAMmsRetry.MediaRetryNotification.ResultType;

                /** PeerDataOperationResult stickerMessage. */
                public stickerMessage?: (WAE2E.Message.IStickerMessage|null);

                /** PeerDataOperationResult linkPreviewResponse. */
                public linkPreviewResponse?: (WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse|null);

                /** PeerDataOperationResult placeholderMessageResendResponse. */
                public placeholderMessageResendResponse?: (WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse|null);

                /** PeerDataOperationResult waffleNonceFetchRequestResponse. */
                public waffleNonceFetchRequestResponse?: (WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IWaffleNonceFetchResponse|null);

                /**
                 * Creates a new PeerDataOperationResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PeerDataOperationResult instance
                 */
                public static create(properties?: WAE2E.Message.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult;

                /**
                 * Encodes the specified PeerDataOperationResult message. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.verify|verify} messages.
                 * @param message PeerDataOperationResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PeerDataOperationResult message, length delimited. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.verify|verify} messages.
                 * @param message PeerDataOperationResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PeerDataOperationResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PeerDataOperationResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult;

                /**
                 * Decodes a PeerDataOperationResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PeerDataOperationResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult;

                /**
                 * Verifies a PeerDataOperationResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PeerDataOperationResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PeerDataOperationResult
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult;

                /**
                 * Creates a plain object from a PeerDataOperationResult message. Also converts values to other types if specified.
                 * @param message PeerDataOperationResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PeerDataOperationResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PeerDataOperationResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace PeerDataOperationResult {

                /** Properties of a WaffleNonceFetchResponse. */
                interface IWaffleNonceFetchResponse {

                    /** WaffleNonceFetchResponse nonce */
                    nonce?: (string|null);

                    /** WaffleNonceFetchResponse waEntFbid */
                    waEntFbid?: (string|null);
                }

                /** Represents a WaffleNonceFetchResponse. */
                class WaffleNonceFetchResponse implements IWaffleNonceFetchResponse {

                    /**
                     * Constructs a new WaffleNonceFetchResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IWaffleNonceFetchResponse);

                    /** WaffleNonceFetchResponse nonce. */
                    public nonce: string;

                    /** WaffleNonceFetchResponse waEntFbid. */
                    public waEntFbid: string;

                    /**
                     * Creates a new WaffleNonceFetchResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WaffleNonceFetchResponse instance
                     */
                    public static create(properties?: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IWaffleNonceFetchResponse): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse;

                    /**
                     * Encodes the specified WaffleNonceFetchResponse message. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse.verify|verify} messages.
                     * @param message WaffleNonceFetchResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IWaffleNonceFetchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WaffleNonceFetchResponse message, length delimited. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse.verify|verify} messages.
                     * @param message WaffleNonceFetchResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IWaffleNonceFetchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WaffleNonceFetchResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WaffleNonceFetchResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse;

                    /**
                     * Decodes a WaffleNonceFetchResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WaffleNonceFetchResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse;

                    /**
                     * Verifies a WaffleNonceFetchResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WaffleNonceFetchResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WaffleNonceFetchResponse
                     */
                    public static fromObject(object: { [k: string]: any }): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse;

                    /**
                     * Creates a plain object from a WaffleNonceFetchResponse message. Also converts values to other types if specified.
                     * @param message WaffleNonceFetchResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WaffleNonceFetchResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WaffleNonceFetchResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PlaceholderMessageResendResponse. */
                interface IPlaceholderMessageResendResponse {

                    /** PlaceholderMessageResendResponse webMessageInfoBytes */
                    webMessageInfoBytes?: (Uint8Array|null);
                }

                /** Represents a PlaceholderMessageResendResponse. */
                class PlaceholderMessageResendResponse implements IPlaceholderMessageResendResponse {

                    /**
                     * Constructs a new PlaceholderMessageResendResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse);

                    /** PlaceholderMessageResendResponse webMessageInfoBytes. */
                    public webMessageInfoBytes: Uint8Array;

                    /**
                     * Creates a new PlaceholderMessageResendResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PlaceholderMessageResendResponse instance
                     */
                    public static create(properties?: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse;

                    /**
                     * Encodes the specified PlaceholderMessageResendResponse message. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse.verify|verify} messages.
                     * @param message PlaceholderMessageResendResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PlaceholderMessageResendResponse message, length delimited. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse.verify|verify} messages.
                     * @param message PlaceholderMessageResendResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PlaceholderMessageResendResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PlaceholderMessageResendResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse;

                    /**
                     * Decodes a PlaceholderMessageResendResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PlaceholderMessageResendResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse;

                    /**
                     * Verifies a PlaceholderMessageResendResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PlaceholderMessageResendResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PlaceholderMessageResendResponse
                     */
                    public static fromObject(object: { [k: string]: any }): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse;

                    /**
                     * Creates a plain object from a PlaceholderMessageResendResponse message. Also converts values to other types if specified.
                     * @param message PlaceholderMessageResendResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PlaceholderMessageResendResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PlaceholderMessageResendResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LinkPreviewResponse. */
                interface ILinkPreviewResponse {

                    /** LinkPreviewResponse URL */
                    URL?: (string|null);

                    /** LinkPreviewResponse title */
                    title?: (string|null);

                    /** LinkPreviewResponse description */
                    description?: (string|null);

                    /** LinkPreviewResponse thumbData */
                    thumbData?: (Uint8Array|null);

                    /** LinkPreviewResponse canonicalURL */
                    canonicalURL?: (string|null);

                    /** LinkPreviewResponse matchText */
                    matchText?: (string|null);

                    /** LinkPreviewResponse previewType */
                    previewType?: (string|null);

                    /** LinkPreviewResponse hqThumbnail */
                    hqThumbnail?: (WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail|null);
                }

                /** Represents a LinkPreviewResponse. */
                class LinkPreviewResponse implements ILinkPreviewResponse {

                    /**
                     * Constructs a new LinkPreviewResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse);

                    /** LinkPreviewResponse URL. */
                    public URL: string;

                    /** LinkPreviewResponse title. */
                    public title: string;

                    /** LinkPreviewResponse description. */
                    public description: string;

                    /** LinkPreviewResponse thumbData. */
                    public thumbData: Uint8Array;

                    /** LinkPreviewResponse canonicalURL. */
                    public canonicalURL: string;

                    /** LinkPreviewResponse matchText. */
                    public matchText: string;

                    /** LinkPreviewResponse previewType. */
                    public previewType: string;

                    /** LinkPreviewResponse hqThumbnail. */
                    public hqThumbnail?: (WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail|null);

                    /**
                     * Creates a new LinkPreviewResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LinkPreviewResponse instance
                     */
                    public static create(properties?: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse;

                    /**
                     * Encodes the specified LinkPreviewResponse message. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.verify|verify} messages.
                     * @param message LinkPreviewResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LinkPreviewResponse message, length delimited. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.verify|verify} messages.
                     * @param message LinkPreviewResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LinkPreviewResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LinkPreviewResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse;

                    /**
                     * Decodes a LinkPreviewResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LinkPreviewResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse;

                    /**
                     * Verifies a LinkPreviewResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LinkPreviewResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LinkPreviewResponse
                     */
                    public static fromObject(object: { [k: string]: any }): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse;

                    /**
                     * Creates a plain object from a LinkPreviewResponse message. Also converts values to other types if specified.
                     * @param message LinkPreviewResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LinkPreviewResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LinkPreviewResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace LinkPreviewResponse {

                    /** Properties of a LinkPreviewHighQualityThumbnail. */
                    interface ILinkPreviewHighQualityThumbnail {

                        /** LinkPreviewHighQualityThumbnail directPath */
                        directPath?: (string|null);

                        /** LinkPreviewHighQualityThumbnail thumbHash */
                        thumbHash?: (string|null);

                        /** LinkPreviewHighQualityThumbnail encThumbHash */
                        encThumbHash?: (string|null);

                        /** LinkPreviewHighQualityThumbnail mediaKey */
                        mediaKey?: (Uint8Array|null);

                        /** LinkPreviewHighQualityThumbnail mediaKeyTimestampMS */
                        mediaKeyTimestampMS?: (number|Long|null);

                        /** LinkPreviewHighQualityThumbnail thumbWidth */
                        thumbWidth?: (number|null);

                        /** LinkPreviewHighQualityThumbnail thumbHeight */
                        thumbHeight?: (number|null);
                    }

                    /** Represents a LinkPreviewHighQualityThumbnail. */
                    class LinkPreviewHighQualityThumbnail implements ILinkPreviewHighQualityThumbnail {

                        /**
                         * Constructs a new LinkPreviewHighQualityThumbnail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail);

                        /** LinkPreviewHighQualityThumbnail directPath. */
                        public directPath: string;

                        /** LinkPreviewHighQualityThumbnail thumbHash. */
                        public thumbHash: string;

                        /** LinkPreviewHighQualityThumbnail encThumbHash. */
                        public encThumbHash: string;

                        /** LinkPreviewHighQualityThumbnail mediaKey. */
                        public mediaKey: Uint8Array;

                        /** LinkPreviewHighQualityThumbnail mediaKeyTimestampMS. */
                        public mediaKeyTimestampMS: (number|Long);

                        /** LinkPreviewHighQualityThumbnail thumbWidth. */
                        public thumbWidth: number;

                        /** LinkPreviewHighQualityThumbnail thumbHeight. */
                        public thumbHeight: number;

                        /**
                         * Creates a new LinkPreviewHighQualityThumbnail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LinkPreviewHighQualityThumbnail instance
                         */
                        public static create(properties?: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail;

                        /**
                         * Encodes the specified LinkPreviewHighQualityThumbnail message. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail.verify|verify} messages.
                         * @param message LinkPreviewHighQualityThumbnail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LinkPreviewHighQualityThumbnail message, length delimited. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail.verify|verify} messages.
                         * @param message LinkPreviewHighQualityThumbnail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LinkPreviewHighQualityThumbnail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LinkPreviewHighQualityThumbnail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail;

                        /**
                         * Decodes a LinkPreviewHighQualityThumbnail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LinkPreviewHighQualityThumbnail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail;

                        /**
                         * Verifies a LinkPreviewHighQualityThumbnail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LinkPreviewHighQualityThumbnail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LinkPreviewHighQualityThumbnail
                         */
                        public static fromObject(object: { [k: string]: any }): WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail;

                        /**
                         * Creates a plain object from a LinkPreviewHighQualityThumbnail message. Also converts values to other types if specified.
                         * @param message LinkPreviewHighQualityThumbnail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: WAE2E.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LinkPreviewHighQualityThumbnail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LinkPreviewHighQualityThumbnail
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }

        /** Properties of a PeerDataOperationRequestMessage. */
        interface IPeerDataOperationRequestMessage {

            /** PeerDataOperationRequestMessage peerDataOperationRequestType */
            peerDataOperationRequestType?: (WAE2E.Message.PeerDataOperationRequestType|null);

            /** PeerDataOperationRequestMessage requestStickerReupload */
            requestStickerReupload?: (WAE2E.Message.PeerDataOperationRequestMessage.IRequestStickerReupload[]|null);

            /** PeerDataOperationRequestMessage requestURLPreview */
            requestURLPreview?: (WAE2E.Message.PeerDataOperationRequestMessage.IRequestUrlPreview[]|null);

            /** PeerDataOperationRequestMessage historySyncOnDemandRequest */
            historySyncOnDemandRequest?: (WAE2E.Message.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest|null);

            /** PeerDataOperationRequestMessage placeholderMessageResendRequest */
            placeholderMessageResendRequest?: (WAE2E.Message.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest[]|null);
        }

        /** Represents a PeerDataOperationRequestMessage. */
        class PeerDataOperationRequestMessage implements IPeerDataOperationRequestMessage {

            /**
             * Constructs a new PeerDataOperationRequestMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IPeerDataOperationRequestMessage);

            /** PeerDataOperationRequestMessage peerDataOperationRequestType. */
            public peerDataOperationRequestType: WAE2E.Message.PeerDataOperationRequestType;

            /** PeerDataOperationRequestMessage requestStickerReupload. */
            public requestStickerReupload: WAE2E.Message.PeerDataOperationRequestMessage.IRequestStickerReupload[];

            /** PeerDataOperationRequestMessage requestURLPreview. */
            public requestURLPreview: WAE2E.Message.PeerDataOperationRequestMessage.IRequestUrlPreview[];

            /** PeerDataOperationRequestMessage historySyncOnDemandRequest. */
            public historySyncOnDemandRequest?: (WAE2E.Message.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest|null);

            /** PeerDataOperationRequestMessage placeholderMessageResendRequest. */
            public placeholderMessageResendRequest: WAE2E.Message.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest[];

            /**
             * Creates a new PeerDataOperationRequestMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PeerDataOperationRequestMessage instance
             */
            public static create(properties?: WAE2E.Message.IPeerDataOperationRequestMessage): WAE2E.Message.PeerDataOperationRequestMessage;

            /**
             * Encodes the specified PeerDataOperationRequestMessage message. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestMessage.verify|verify} messages.
             * @param message PeerDataOperationRequestMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IPeerDataOperationRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PeerDataOperationRequestMessage message, length delimited. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestMessage.verify|verify} messages.
             * @param message PeerDataOperationRequestMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IPeerDataOperationRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PeerDataOperationRequestMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PeerDataOperationRequestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PeerDataOperationRequestMessage;

            /**
             * Decodes a PeerDataOperationRequestMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PeerDataOperationRequestMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PeerDataOperationRequestMessage;

            /**
             * Verifies a PeerDataOperationRequestMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PeerDataOperationRequestMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PeerDataOperationRequestMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.PeerDataOperationRequestMessage;

            /**
             * Creates a plain object from a PeerDataOperationRequestMessage message. Also converts values to other types if specified.
             * @param message PeerDataOperationRequestMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.PeerDataOperationRequestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PeerDataOperationRequestMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PeerDataOperationRequestMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PeerDataOperationRequestMessage {

            /** Properties of a PlaceholderMessageResendRequest. */
            interface IPlaceholderMessageResendRequest {

                /** PlaceholderMessageResendRequest messageKey */
                messageKey?: (WAProtocol.IMessageKey|null);
            }

            /** Represents a PlaceholderMessageResendRequest. */
            class PlaceholderMessageResendRequest implements IPlaceholderMessageResendRequest {

                /**
                 * Constructs a new PlaceholderMessageResendRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest);

                /** PlaceholderMessageResendRequest messageKey. */
                public messageKey?: (WAProtocol.IMessageKey|null);

                /**
                 * Creates a new PlaceholderMessageResendRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PlaceholderMessageResendRequest instance
                 */
                public static create(properties?: WAE2E.Message.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest): WAE2E.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest;

                /**
                 * Encodes the specified PlaceholderMessageResendRequest message. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest.verify|verify} messages.
                 * @param message PlaceholderMessageResendRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PlaceholderMessageResendRequest message, length delimited. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest.verify|verify} messages.
                 * @param message PlaceholderMessageResendRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PlaceholderMessageResendRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PlaceholderMessageResendRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest;

                /**
                 * Decodes a PlaceholderMessageResendRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PlaceholderMessageResendRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest;

                /**
                 * Verifies a PlaceholderMessageResendRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PlaceholderMessageResendRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PlaceholderMessageResendRequest
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest;

                /**
                 * Creates a plain object from a PlaceholderMessageResendRequest message. Also converts values to other types if specified.
                 * @param message PlaceholderMessageResendRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PlaceholderMessageResendRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PlaceholderMessageResendRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a HistorySyncOnDemandRequest. */
            interface IHistorySyncOnDemandRequest {

                /** HistorySyncOnDemandRequest chatJID */
                chatJID?: (string|null);

                /** HistorySyncOnDemandRequest oldestMsgID */
                oldestMsgID?: (string|null);

                /** HistorySyncOnDemandRequest oldestMsgFromMe */
                oldestMsgFromMe?: (boolean|null);

                /** HistorySyncOnDemandRequest onDemandMsgCount */
                onDemandMsgCount?: (number|null);

                /** HistorySyncOnDemandRequest oldestMsgTimestampMS */
                oldestMsgTimestampMS?: (number|Long|null);
            }

            /** Represents a HistorySyncOnDemandRequest. */
            class HistorySyncOnDemandRequest implements IHistorySyncOnDemandRequest {

                /**
                 * Constructs a new HistorySyncOnDemandRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest);

                /** HistorySyncOnDemandRequest chatJID. */
                public chatJID: string;

                /** HistorySyncOnDemandRequest oldestMsgID. */
                public oldestMsgID: string;

                /** HistorySyncOnDemandRequest oldestMsgFromMe. */
                public oldestMsgFromMe: boolean;

                /** HistorySyncOnDemandRequest onDemandMsgCount. */
                public onDemandMsgCount: number;

                /** HistorySyncOnDemandRequest oldestMsgTimestampMS. */
                public oldestMsgTimestampMS: (number|Long);

                /**
                 * Creates a new HistorySyncOnDemandRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HistorySyncOnDemandRequest instance
                 */
                public static create(properties?: WAE2E.Message.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest): WAE2E.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest;

                /**
                 * Encodes the specified HistorySyncOnDemandRequest message. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest.verify|verify} messages.
                 * @param message HistorySyncOnDemandRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HistorySyncOnDemandRequest message, length delimited. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest.verify|verify} messages.
                 * @param message HistorySyncOnDemandRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HistorySyncOnDemandRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HistorySyncOnDemandRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest;

                /**
                 * Decodes a HistorySyncOnDemandRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HistorySyncOnDemandRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest;

                /**
                 * Verifies a HistorySyncOnDemandRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HistorySyncOnDemandRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HistorySyncOnDemandRequest
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest;

                /**
                 * Creates a plain object from a HistorySyncOnDemandRequest message. Also converts values to other types if specified.
                 * @param message HistorySyncOnDemandRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HistorySyncOnDemandRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for HistorySyncOnDemandRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RequestUrlPreview. */
            interface IRequestUrlPreview {

                /** RequestUrlPreview URL */
                URL?: (string|null);

                /** RequestUrlPreview includeHqThumbnail */
                includeHqThumbnail?: (boolean|null);
            }

            /** Represents a RequestUrlPreview. */
            class RequestUrlPreview implements IRequestUrlPreview {

                /**
                 * Constructs a new RequestUrlPreview.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.PeerDataOperationRequestMessage.IRequestUrlPreview);

                /** RequestUrlPreview URL. */
                public URL: string;

                /** RequestUrlPreview includeHqThumbnail. */
                public includeHqThumbnail: boolean;

                /**
                 * Creates a new RequestUrlPreview instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestUrlPreview instance
                 */
                public static create(properties?: WAE2E.Message.PeerDataOperationRequestMessage.IRequestUrlPreview): WAE2E.Message.PeerDataOperationRequestMessage.RequestUrlPreview;

                /**
                 * Encodes the specified RequestUrlPreview message. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestMessage.RequestUrlPreview.verify|verify} messages.
                 * @param message RequestUrlPreview message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.PeerDataOperationRequestMessage.IRequestUrlPreview, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RequestUrlPreview message, length delimited. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestMessage.RequestUrlPreview.verify|verify} messages.
                 * @param message RequestUrlPreview message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.PeerDataOperationRequestMessage.IRequestUrlPreview, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RequestUrlPreview message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestUrlPreview
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PeerDataOperationRequestMessage.RequestUrlPreview;

                /**
                 * Decodes a RequestUrlPreview message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RequestUrlPreview
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PeerDataOperationRequestMessage.RequestUrlPreview;

                /**
                 * Verifies a RequestUrlPreview message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RequestUrlPreview message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RequestUrlPreview
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.PeerDataOperationRequestMessage.RequestUrlPreview;

                /**
                 * Creates a plain object from a RequestUrlPreview message. Also converts values to other types if specified.
                 * @param message RequestUrlPreview
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.PeerDataOperationRequestMessage.RequestUrlPreview, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RequestUrlPreview to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RequestUrlPreview
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RequestStickerReupload. */
            interface IRequestStickerReupload {

                /** RequestStickerReupload fileSHA256 */
                fileSHA256?: (string|null);
            }

            /** Represents a RequestStickerReupload. */
            class RequestStickerReupload implements IRequestStickerReupload {

                /**
                 * Constructs a new RequestStickerReupload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WAE2E.Message.PeerDataOperationRequestMessage.IRequestStickerReupload);

                /** RequestStickerReupload fileSHA256. */
                public fileSHA256: string;

                /**
                 * Creates a new RequestStickerReupload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestStickerReupload instance
                 */
                public static create(properties?: WAE2E.Message.PeerDataOperationRequestMessage.IRequestStickerReupload): WAE2E.Message.PeerDataOperationRequestMessage.RequestStickerReupload;

                /**
                 * Encodes the specified RequestStickerReupload message. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestMessage.RequestStickerReupload.verify|verify} messages.
                 * @param message RequestStickerReupload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WAE2E.Message.PeerDataOperationRequestMessage.IRequestStickerReupload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RequestStickerReupload message, length delimited. Does not implicitly {@link WAE2E.Message.PeerDataOperationRequestMessage.RequestStickerReupload.verify|verify} messages.
                 * @param message RequestStickerReupload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WAE2E.Message.PeerDataOperationRequestMessage.IRequestStickerReupload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RequestStickerReupload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestStickerReupload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.PeerDataOperationRequestMessage.RequestStickerReupload;

                /**
                 * Decodes a RequestStickerReupload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RequestStickerReupload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.PeerDataOperationRequestMessage.RequestStickerReupload;

                /**
                 * Verifies a RequestStickerReupload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RequestStickerReupload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RequestStickerReupload
                 */
                public static fromObject(object: { [k: string]: any }): WAE2E.Message.PeerDataOperationRequestMessage.RequestStickerReupload;

                /**
                 * Creates a plain object from a RequestStickerReupload message. Also converts values to other types if specified.
                 * @param message RequestStickerReupload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WAE2E.Message.PeerDataOperationRequestMessage.RequestStickerReupload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RequestStickerReupload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RequestStickerReupload
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an AppStateFatalExceptionNotification. */
        interface IAppStateFatalExceptionNotification {

            /** AppStateFatalExceptionNotification collectionNames */
            collectionNames?: (string[]|null);

            /** AppStateFatalExceptionNotification timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents an AppStateFatalExceptionNotification. */
        class AppStateFatalExceptionNotification implements IAppStateFatalExceptionNotification {

            /**
             * Constructs a new AppStateFatalExceptionNotification.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IAppStateFatalExceptionNotification);

            /** AppStateFatalExceptionNotification collectionNames. */
            public collectionNames: string[];

            /** AppStateFatalExceptionNotification timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new AppStateFatalExceptionNotification instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AppStateFatalExceptionNotification instance
             */
            public static create(properties?: WAE2E.Message.IAppStateFatalExceptionNotification): WAE2E.Message.AppStateFatalExceptionNotification;

            /**
             * Encodes the specified AppStateFatalExceptionNotification message. Does not implicitly {@link WAE2E.Message.AppStateFatalExceptionNotification.verify|verify} messages.
             * @param message AppStateFatalExceptionNotification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IAppStateFatalExceptionNotification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AppStateFatalExceptionNotification message, length delimited. Does not implicitly {@link WAE2E.Message.AppStateFatalExceptionNotification.verify|verify} messages.
             * @param message AppStateFatalExceptionNotification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IAppStateFatalExceptionNotification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AppStateFatalExceptionNotification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AppStateFatalExceptionNotification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.AppStateFatalExceptionNotification;

            /**
             * Decodes an AppStateFatalExceptionNotification message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AppStateFatalExceptionNotification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.AppStateFatalExceptionNotification;

            /**
             * Verifies an AppStateFatalExceptionNotification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AppStateFatalExceptionNotification message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AppStateFatalExceptionNotification
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.AppStateFatalExceptionNotification;

            /**
             * Creates a plain object from an AppStateFatalExceptionNotification message. Also converts values to other types if specified.
             * @param message AppStateFatalExceptionNotification
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.AppStateFatalExceptionNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AppStateFatalExceptionNotification to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AppStateFatalExceptionNotification
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AppStateSyncKeyRequest. */
        interface IAppStateSyncKeyRequest {

            /** AppStateSyncKeyRequest keyIDs */
            keyIDs?: (WAE2E.Message.IAppStateSyncKeyId[]|null);
        }

        /** Represents an AppStateSyncKeyRequest. */
        class AppStateSyncKeyRequest implements IAppStateSyncKeyRequest {

            /**
             * Constructs a new AppStateSyncKeyRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IAppStateSyncKeyRequest);

            /** AppStateSyncKeyRequest keyIDs. */
            public keyIDs: WAE2E.Message.IAppStateSyncKeyId[];

            /**
             * Creates a new AppStateSyncKeyRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AppStateSyncKeyRequest instance
             */
            public static create(properties?: WAE2E.Message.IAppStateSyncKeyRequest): WAE2E.Message.AppStateSyncKeyRequest;

            /**
             * Encodes the specified AppStateSyncKeyRequest message. Does not implicitly {@link WAE2E.Message.AppStateSyncKeyRequest.verify|verify} messages.
             * @param message AppStateSyncKeyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IAppStateSyncKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AppStateSyncKeyRequest message, length delimited. Does not implicitly {@link WAE2E.Message.AppStateSyncKeyRequest.verify|verify} messages.
             * @param message AppStateSyncKeyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IAppStateSyncKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AppStateSyncKeyRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AppStateSyncKeyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.AppStateSyncKeyRequest;

            /**
             * Decodes an AppStateSyncKeyRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AppStateSyncKeyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.AppStateSyncKeyRequest;

            /**
             * Verifies an AppStateSyncKeyRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AppStateSyncKeyRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AppStateSyncKeyRequest
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.AppStateSyncKeyRequest;

            /**
             * Creates a plain object from an AppStateSyncKeyRequest message. Also converts values to other types if specified.
             * @param message AppStateSyncKeyRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.AppStateSyncKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AppStateSyncKeyRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AppStateSyncKeyRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AppStateSyncKeyShare. */
        interface IAppStateSyncKeyShare {

            /** AppStateSyncKeyShare keys */
            keys?: (WAE2E.Message.IAppStateSyncKey[]|null);
        }

        /** Represents an AppStateSyncKeyShare. */
        class AppStateSyncKeyShare implements IAppStateSyncKeyShare {

            /**
             * Constructs a new AppStateSyncKeyShare.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IAppStateSyncKeyShare);

            /** AppStateSyncKeyShare keys. */
            public keys: WAE2E.Message.IAppStateSyncKey[];

            /**
             * Creates a new AppStateSyncKeyShare instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AppStateSyncKeyShare instance
             */
            public static create(properties?: WAE2E.Message.IAppStateSyncKeyShare): WAE2E.Message.AppStateSyncKeyShare;

            /**
             * Encodes the specified AppStateSyncKeyShare message. Does not implicitly {@link WAE2E.Message.AppStateSyncKeyShare.verify|verify} messages.
             * @param message AppStateSyncKeyShare message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IAppStateSyncKeyShare, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AppStateSyncKeyShare message, length delimited. Does not implicitly {@link WAE2E.Message.AppStateSyncKeyShare.verify|verify} messages.
             * @param message AppStateSyncKeyShare message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IAppStateSyncKeyShare, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AppStateSyncKeyShare message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AppStateSyncKeyShare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.AppStateSyncKeyShare;

            /**
             * Decodes an AppStateSyncKeyShare message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AppStateSyncKeyShare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.AppStateSyncKeyShare;

            /**
             * Verifies an AppStateSyncKeyShare message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AppStateSyncKeyShare message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AppStateSyncKeyShare
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.AppStateSyncKeyShare;

            /**
             * Creates a plain object from an AppStateSyncKeyShare message. Also converts values to other types if specified.
             * @param message AppStateSyncKeyShare
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.AppStateSyncKeyShare, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AppStateSyncKeyShare to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AppStateSyncKeyShare
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AppStateSyncKeyData. */
        interface IAppStateSyncKeyData {

            /** AppStateSyncKeyData keyData */
            keyData?: (Uint8Array|null);

            /** AppStateSyncKeyData fingerprint */
            fingerprint?: (WAE2E.Message.IAppStateSyncKeyFingerprint|null);

            /** AppStateSyncKeyData timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents an AppStateSyncKeyData. */
        class AppStateSyncKeyData implements IAppStateSyncKeyData {

            /**
             * Constructs a new AppStateSyncKeyData.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IAppStateSyncKeyData);

            /** AppStateSyncKeyData keyData. */
            public keyData: Uint8Array;

            /** AppStateSyncKeyData fingerprint. */
            public fingerprint?: (WAE2E.Message.IAppStateSyncKeyFingerprint|null);

            /** AppStateSyncKeyData timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new AppStateSyncKeyData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AppStateSyncKeyData instance
             */
            public static create(properties?: WAE2E.Message.IAppStateSyncKeyData): WAE2E.Message.AppStateSyncKeyData;

            /**
             * Encodes the specified AppStateSyncKeyData message. Does not implicitly {@link WAE2E.Message.AppStateSyncKeyData.verify|verify} messages.
             * @param message AppStateSyncKeyData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IAppStateSyncKeyData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AppStateSyncKeyData message, length delimited. Does not implicitly {@link WAE2E.Message.AppStateSyncKeyData.verify|verify} messages.
             * @param message AppStateSyncKeyData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IAppStateSyncKeyData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AppStateSyncKeyData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AppStateSyncKeyData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.AppStateSyncKeyData;

            /**
             * Decodes an AppStateSyncKeyData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AppStateSyncKeyData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.AppStateSyncKeyData;

            /**
             * Verifies an AppStateSyncKeyData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AppStateSyncKeyData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AppStateSyncKeyData
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.AppStateSyncKeyData;

            /**
             * Creates a plain object from an AppStateSyncKeyData message. Also converts values to other types if specified.
             * @param message AppStateSyncKeyData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.AppStateSyncKeyData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AppStateSyncKeyData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AppStateSyncKeyData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AppStateSyncKeyFingerprint. */
        interface IAppStateSyncKeyFingerprint {

            /** AppStateSyncKeyFingerprint rawID */
            rawID?: (number|null);

            /** AppStateSyncKeyFingerprint currentIndex */
            currentIndex?: (number|null);

            /** AppStateSyncKeyFingerprint deviceIndexes */
            deviceIndexes?: (number[]|null);
        }

        /** Represents an AppStateSyncKeyFingerprint. */
        class AppStateSyncKeyFingerprint implements IAppStateSyncKeyFingerprint {

            /**
             * Constructs a new AppStateSyncKeyFingerprint.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IAppStateSyncKeyFingerprint);

            /** AppStateSyncKeyFingerprint rawID. */
            public rawID: number;

            /** AppStateSyncKeyFingerprint currentIndex. */
            public currentIndex: number;

            /** AppStateSyncKeyFingerprint deviceIndexes. */
            public deviceIndexes: number[];

            /**
             * Creates a new AppStateSyncKeyFingerprint instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AppStateSyncKeyFingerprint instance
             */
            public static create(properties?: WAE2E.Message.IAppStateSyncKeyFingerprint): WAE2E.Message.AppStateSyncKeyFingerprint;

            /**
             * Encodes the specified AppStateSyncKeyFingerprint message. Does not implicitly {@link WAE2E.Message.AppStateSyncKeyFingerprint.verify|verify} messages.
             * @param message AppStateSyncKeyFingerprint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IAppStateSyncKeyFingerprint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AppStateSyncKeyFingerprint message, length delimited. Does not implicitly {@link WAE2E.Message.AppStateSyncKeyFingerprint.verify|verify} messages.
             * @param message AppStateSyncKeyFingerprint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IAppStateSyncKeyFingerprint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AppStateSyncKeyFingerprint message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AppStateSyncKeyFingerprint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.AppStateSyncKeyFingerprint;

            /**
             * Decodes an AppStateSyncKeyFingerprint message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AppStateSyncKeyFingerprint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.AppStateSyncKeyFingerprint;

            /**
             * Verifies an AppStateSyncKeyFingerprint message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AppStateSyncKeyFingerprint message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AppStateSyncKeyFingerprint
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.AppStateSyncKeyFingerprint;

            /**
             * Creates a plain object from an AppStateSyncKeyFingerprint message. Also converts values to other types if specified.
             * @param message AppStateSyncKeyFingerprint
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.AppStateSyncKeyFingerprint, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AppStateSyncKeyFingerprint to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AppStateSyncKeyFingerprint
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AppStateSyncKeyId. */
        interface IAppStateSyncKeyId {

            /** AppStateSyncKeyId keyID */
            keyID?: (Uint8Array|null);
        }

        /** Represents an AppStateSyncKeyId. */
        class AppStateSyncKeyId implements IAppStateSyncKeyId {

            /**
             * Constructs a new AppStateSyncKeyId.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IAppStateSyncKeyId);

            /** AppStateSyncKeyId keyID. */
            public keyID: Uint8Array;

            /**
             * Creates a new AppStateSyncKeyId instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AppStateSyncKeyId instance
             */
            public static create(properties?: WAE2E.Message.IAppStateSyncKeyId): WAE2E.Message.AppStateSyncKeyId;

            /**
             * Encodes the specified AppStateSyncKeyId message. Does not implicitly {@link WAE2E.Message.AppStateSyncKeyId.verify|verify} messages.
             * @param message AppStateSyncKeyId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IAppStateSyncKeyId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AppStateSyncKeyId message, length delimited. Does not implicitly {@link WAE2E.Message.AppStateSyncKeyId.verify|verify} messages.
             * @param message AppStateSyncKeyId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IAppStateSyncKeyId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AppStateSyncKeyId message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AppStateSyncKeyId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.AppStateSyncKeyId;

            /**
             * Decodes an AppStateSyncKeyId message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AppStateSyncKeyId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.AppStateSyncKeyId;

            /**
             * Verifies an AppStateSyncKeyId message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AppStateSyncKeyId message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AppStateSyncKeyId
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.AppStateSyncKeyId;

            /**
             * Creates a plain object from an AppStateSyncKeyId message. Also converts values to other types if specified.
             * @param message AppStateSyncKeyId
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.AppStateSyncKeyId, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AppStateSyncKeyId to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AppStateSyncKeyId
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AppStateSyncKey. */
        interface IAppStateSyncKey {

            /** AppStateSyncKey keyID */
            keyID?: (WAE2E.Message.IAppStateSyncKeyId|null);

            /** AppStateSyncKey keyData */
            keyData?: (WAE2E.Message.IAppStateSyncKeyData|null);
        }

        /** Represents an AppStateSyncKey. */
        class AppStateSyncKey implements IAppStateSyncKey {

            /**
             * Constructs a new AppStateSyncKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IAppStateSyncKey);

            /** AppStateSyncKey keyID. */
            public keyID?: (WAE2E.Message.IAppStateSyncKeyId|null);

            /** AppStateSyncKey keyData. */
            public keyData?: (WAE2E.Message.IAppStateSyncKeyData|null);

            /**
             * Creates a new AppStateSyncKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AppStateSyncKey instance
             */
            public static create(properties?: WAE2E.Message.IAppStateSyncKey): WAE2E.Message.AppStateSyncKey;

            /**
             * Encodes the specified AppStateSyncKey message. Does not implicitly {@link WAE2E.Message.AppStateSyncKey.verify|verify} messages.
             * @param message AppStateSyncKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IAppStateSyncKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AppStateSyncKey message, length delimited. Does not implicitly {@link WAE2E.Message.AppStateSyncKey.verify|verify} messages.
             * @param message AppStateSyncKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IAppStateSyncKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AppStateSyncKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AppStateSyncKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.AppStateSyncKey;

            /**
             * Decodes an AppStateSyncKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AppStateSyncKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.AppStateSyncKey;

            /**
             * Verifies an AppStateSyncKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AppStateSyncKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AppStateSyncKey
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.AppStateSyncKey;

            /**
             * Creates a plain object from an AppStateSyncKey message. Also converts values to other types if specified.
             * @param message AppStateSyncKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.AppStateSyncKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AppStateSyncKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AppStateSyncKey
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Chat. */
        interface IChat {

            /** Chat displayName */
            displayName?: (string|null);

            /** Chat ID */
            ID?: (string|null);
        }

        /** Represents a Chat. */
        class Chat implements IChat {

            /**
             * Constructs a new Chat.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IChat);

            /** Chat displayName. */
            public displayName: string;

            /** Chat ID. */
            public ID: string;

            /**
             * Creates a new Chat instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Chat instance
             */
            public static create(properties?: WAE2E.Message.IChat): WAE2E.Message.Chat;

            /**
             * Encodes the specified Chat message. Does not implicitly {@link WAE2E.Message.Chat.verify|verify} messages.
             * @param message Chat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Chat message, length delimited. Does not implicitly {@link WAE2E.Message.Chat.verify|verify} messages.
             * @param message Chat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Chat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Chat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.Chat;

            /**
             * Decodes a Chat message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Chat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.Chat;

            /**
             * Verifies a Chat message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Chat message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Chat
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.Chat;

            /**
             * Creates a plain object from a Chat message. Also converts values to other types if specified.
             * @param message Chat
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.Chat, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Chat to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Chat
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Call. */
        interface ICall {

            /** Call callKey */
            callKey?: (Uint8Array|null);

            /** Call conversionSource */
            conversionSource?: (string|null);

            /** Call conversionData */
            conversionData?: (Uint8Array|null);

            /** Call conversionDelaySeconds */
            conversionDelaySeconds?: (number|null);
        }

        /** Represents a Call. */
        class Call implements ICall {

            /**
             * Constructs a new Call.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.ICall);

            /** Call callKey. */
            public callKey: Uint8Array;

            /** Call conversionSource. */
            public conversionSource: string;

            /** Call conversionData. */
            public conversionData: Uint8Array;

            /** Call conversionDelaySeconds. */
            public conversionDelaySeconds: number;

            /**
             * Creates a new Call instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Call instance
             */
            public static create(properties?: WAE2E.Message.ICall): WAE2E.Message.Call;

            /**
             * Encodes the specified Call message. Does not implicitly {@link WAE2E.Message.Call.verify|verify} messages.
             * @param message Call message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Call message, length delimited. Does not implicitly {@link WAE2E.Message.Call.verify|verify} messages.
             * @param message Call message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Call message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Call
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.Call;

            /**
             * Decodes a Call message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Call
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.Call;

            /**
             * Verifies a Call message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Call message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Call
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.Call;

            /**
             * Creates a plain object from a Call message. Also converts values to other types if specified.
             * @param message Call
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.Call, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Call to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Call
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AudioMessage. */
        interface IAudioMessage {

            /** AudioMessage URL */
            URL?: (string|null);

            /** AudioMessage mimetype */
            mimetype?: (string|null);

            /** AudioMessage fileSHA256 */
            fileSHA256?: (Uint8Array|null);

            /** AudioMessage fileLength */
            fileLength?: (number|Long|null);

            /** AudioMessage seconds */
            seconds?: (number|null);

            /** AudioMessage PTT */
            PTT?: (boolean|null);

            /** AudioMessage mediaKey */
            mediaKey?: (Uint8Array|null);

            /** AudioMessage fileEncSHA256 */
            fileEncSHA256?: (Uint8Array|null);

            /** AudioMessage directPath */
            directPath?: (string|null);

            /** AudioMessage mediaKeyTimestamp */
            mediaKeyTimestamp?: (number|Long|null);

            /** AudioMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** AudioMessage streamingSidecar */
            streamingSidecar?: (Uint8Array|null);

            /** AudioMessage waveform */
            waveform?: (Uint8Array|null);

            /** AudioMessage backgroundArgb */
            backgroundArgb?: (number|null);

            /** AudioMessage viewOnce */
            viewOnce?: (boolean|null);

            /** AudioMessage accessibilityLabel */
            accessibilityLabel?: (string|null);
        }

        /** Represents an AudioMessage. */
        class AudioMessage implements IAudioMessage {

            /**
             * Constructs a new AudioMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IAudioMessage);

            /** AudioMessage URL. */
            public URL: string;

            /** AudioMessage mimetype. */
            public mimetype: string;

            /** AudioMessage fileSHA256. */
            public fileSHA256: Uint8Array;

            /** AudioMessage fileLength. */
            public fileLength: (number|Long);

            /** AudioMessage seconds. */
            public seconds: number;

            /** AudioMessage PTT. */
            public PTT: boolean;

            /** AudioMessage mediaKey. */
            public mediaKey: Uint8Array;

            /** AudioMessage fileEncSHA256. */
            public fileEncSHA256: Uint8Array;

            /** AudioMessage directPath. */
            public directPath: string;

            /** AudioMessage mediaKeyTimestamp. */
            public mediaKeyTimestamp: (number|Long);

            /** AudioMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** AudioMessage streamingSidecar. */
            public streamingSidecar: Uint8Array;

            /** AudioMessage waveform. */
            public waveform: Uint8Array;

            /** AudioMessage backgroundArgb. */
            public backgroundArgb: number;

            /** AudioMessage viewOnce. */
            public viewOnce: boolean;

            /** AudioMessage accessibilityLabel. */
            public accessibilityLabel: string;

            /**
             * Creates a new AudioMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AudioMessage instance
             */
            public static create(properties?: WAE2E.Message.IAudioMessage): WAE2E.Message.AudioMessage;

            /**
             * Encodes the specified AudioMessage message. Does not implicitly {@link WAE2E.Message.AudioMessage.verify|verify} messages.
             * @param message AudioMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IAudioMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AudioMessage message, length delimited. Does not implicitly {@link WAE2E.Message.AudioMessage.verify|verify} messages.
             * @param message AudioMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IAudioMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AudioMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AudioMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.AudioMessage;

            /**
             * Decodes an AudioMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AudioMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.AudioMessage;

            /**
             * Verifies an AudioMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AudioMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AudioMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.AudioMessage;

            /**
             * Creates a plain object from an AudioMessage message. Also converts values to other types if specified.
             * @param message AudioMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.AudioMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AudioMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AudioMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DocumentMessage. */
        interface IDocumentMessage {

            /** DocumentMessage URL */
            URL?: (string|null);

            /** DocumentMessage mimetype */
            mimetype?: (string|null);

            /** DocumentMessage title */
            title?: (string|null);

            /** DocumentMessage fileSHA256 */
            fileSHA256?: (Uint8Array|null);

            /** DocumentMessage fileLength */
            fileLength?: (number|Long|null);

            /** DocumentMessage pageCount */
            pageCount?: (number|null);

            /** DocumentMessage mediaKey */
            mediaKey?: (Uint8Array|null);

            /** DocumentMessage fileName */
            fileName?: (string|null);

            /** DocumentMessage fileEncSHA256 */
            fileEncSHA256?: (Uint8Array|null);

            /** DocumentMessage directPath */
            directPath?: (string|null);

            /** DocumentMessage mediaKeyTimestamp */
            mediaKeyTimestamp?: (number|Long|null);

            /** DocumentMessage contactVcard */
            contactVcard?: (boolean|null);

            /** DocumentMessage thumbnailDirectPath */
            thumbnailDirectPath?: (string|null);

            /** DocumentMessage thumbnailSHA256 */
            thumbnailSHA256?: (Uint8Array|null);

            /** DocumentMessage thumbnailEncSHA256 */
            thumbnailEncSHA256?: (Uint8Array|null);

            /** DocumentMessage JPEGThumbnail */
            JPEGThumbnail?: (Uint8Array|null);

            /** DocumentMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);

            /** DocumentMessage thumbnailHeight */
            thumbnailHeight?: (number|null);

            /** DocumentMessage thumbnailWidth */
            thumbnailWidth?: (number|null);

            /** DocumentMessage caption */
            caption?: (string|null);

            /** DocumentMessage accessibilityLabel */
            accessibilityLabel?: (string|null);
        }

        /** Represents a DocumentMessage. */
        class DocumentMessage implements IDocumentMessage {

            /**
             * Constructs a new DocumentMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IDocumentMessage);

            /** DocumentMessage URL. */
            public URL: string;

            /** DocumentMessage mimetype. */
            public mimetype: string;

            /** DocumentMessage title. */
            public title: string;

            /** DocumentMessage fileSHA256. */
            public fileSHA256: Uint8Array;

            /** DocumentMessage fileLength. */
            public fileLength: (number|Long);

            /** DocumentMessage pageCount. */
            public pageCount: number;

            /** DocumentMessage mediaKey. */
            public mediaKey: Uint8Array;

            /** DocumentMessage fileName. */
            public fileName: string;

            /** DocumentMessage fileEncSHA256. */
            public fileEncSHA256: Uint8Array;

            /** DocumentMessage directPath. */
            public directPath: string;

            /** DocumentMessage mediaKeyTimestamp. */
            public mediaKeyTimestamp: (number|Long);

            /** DocumentMessage contactVcard. */
            public contactVcard: boolean;

            /** DocumentMessage thumbnailDirectPath. */
            public thumbnailDirectPath: string;

            /** DocumentMessage thumbnailSHA256. */
            public thumbnailSHA256: Uint8Array;

            /** DocumentMessage thumbnailEncSHA256. */
            public thumbnailEncSHA256: Uint8Array;

            /** DocumentMessage JPEGThumbnail. */
            public JPEGThumbnail: Uint8Array;

            /** DocumentMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /** DocumentMessage thumbnailHeight. */
            public thumbnailHeight: number;

            /** DocumentMessage thumbnailWidth. */
            public thumbnailWidth: number;

            /** DocumentMessage caption. */
            public caption: string;

            /** DocumentMessage accessibilityLabel. */
            public accessibilityLabel: string;

            /**
             * Creates a new DocumentMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DocumentMessage instance
             */
            public static create(properties?: WAE2E.Message.IDocumentMessage): WAE2E.Message.DocumentMessage;

            /**
             * Encodes the specified DocumentMessage message. Does not implicitly {@link WAE2E.Message.DocumentMessage.verify|verify} messages.
             * @param message DocumentMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IDocumentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DocumentMessage message, length delimited. Does not implicitly {@link WAE2E.Message.DocumentMessage.verify|verify} messages.
             * @param message DocumentMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IDocumentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DocumentMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DocumentMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.DocumentMessage;

            /**
             * Decodes a DocumentMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DocumentMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.DocumentMessage;

            /**
             * Verifies a DocumentMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DocumentMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DocumentMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.DocumentMessage;

            /**
             * Creates a plain object from a DocumentMessage message. Also converts values to other types if specified.
             * @param message DocumentMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.DocumentMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DocumentMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DocumentMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LocationMessage. */
        interface ILocationMessage {

            /** LocationMessage degreesLatitude */
            degreesLatitude?: (number|null);

            /** LocationMessage degreesLongitude */
            degreesLongitude?: (number|null);

            /** LocationMessage name */
            name?: (string|null);

            /** LocationMessage address */
            address?: (string|null);

            /** LocationMessage URL */
            URL?: (string|null);

            /** LocationMessage isLive */
            isLive?: (boolean|null);

            /** LocationMessage accuracyInMeters */
            accuracyInMeters?: (number|null);

            /** LocationMessage speedInMps */
            speedInMps?: (number|null);

            /** LocationMessage degreesClockwiseFromMagneticNorth */
            degreesClockwiseFromMagneticNorth?: (number|null);

            /** LocationMessage comment */
            comment?: (string|null);

            /** LocationMessage JPEGThumbnail */
            JPEGThumbnail?: (Uint8Array|null);

            /** LocationMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);
        }

        /** Represents a LocationMessage. */
        class LocationMessage implements ILocationMessage {

            /**
             * Constructs a new LocationMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.ILocationMessage);

            /** LocationMessage degreesLatitude. */
            public degreesLatitude: number;

            /** LocationMessage degreesLongitude. */
            public degreesLongitude: number;

            /** LocationMessage name. */
            public name: string;

            /** LocationMessage address. */
            public address: string;

            /** LocationMessage URL. */
            public URL: string;

            /** LocationMessage isLive. */
            public isLive: boolean;

            /** LocationMessage accuracyInMeters. */
            public accuracyInMeters: number;

            /** LocationMessage speedInMps. */
            public speedInMps: number;

            /** LocationMessage degreesClockwiseFromMagneticNorth. */
            public degreesClockwiseFromMagneticNorth: number;

            /** LocationMessage comment. */
            public comment: string;

            /** LocationMessage JPEGThumbnail. */
            public JPEGThumbnail: Uint8Array;

            /** LocationMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /**
             * Creates a new LocationMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LocationMessage instance
             */
            public static create(properties?: WAE2E.Message.ILocationMessage): WAE2E.Message.LocationMessage;

            /**
             * Encodes the specified LocationMessage message. Does not implicitly {@link WAE2E.Message.LocationMessage.verify|verify} messages.
             * @param message LocationMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.ILocationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LocationMessage message, length delimited. Does not implicitly {@link WAE2E.Message.LocationMessage.verify|verify} messages.
             * @param message LocationMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.ILocationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LocationMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LocationMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.LocationMessage;

            /**
             * Decodes a LocationMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LocationMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.LocationMessage;

            /**
             * Verifies a LocationMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LocationMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LocationMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.LocationMessage;

            /**
             * Creates a plain object from a LocationMessage message. Also converts values to other types if specified.
             * @param message LocationMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.LocationMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LocationMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LocationMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ContactMessage. */
        interface IContactMessage {

            /** ContactMessage displayName */
            displayName?: (string|null);

            /** ContactMessage vcard */
            vcard?: (string|null);

            /** ContactMessage contextInfo */
            contextInfo?: (WAE2E.IContextInfo|null);
        }

        /** Represents a ContactMessage. */
        class ContactMessage implements IContactMessage {

            /**
             * Constructs a new ContactMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.IContactMessage);

            /** ContactMessage displayName. */
            public displayName: string;

            /** ContactMessage vcard. */
            public vcard: string;

            /** ContactMessage contextInfo. */
            public contextInfo?: (WAE2E.IContextInfo|null);

            /**
             * Creates a new ContactMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContactMessage instance
             */
            public static create(properties?: WAE2E.Message.IContactMessage): WAE2E.Message.ContactMessage;

            /**
             * Encodes the specified ContactMessage message. Does not implicitly {@link WAE2E.Message.ContactMessage.verify|verify} messages.
             * @param message ContactMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.IContactMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContactMessage message, length delimited. Does not implicitly {@link WAE2E.Message.ContactMessage.verify|verify} messages.
             * @param message ContactMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.IContactMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContactMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContactMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.ContactMessage;

            /**
             * Decodes a ContactMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContactMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.ContactMessage;

            /**
             * Verifies a ContactMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContactMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContactMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.ContactMessage;

            /**
             * Creates a plain object from a ContactMessage message. Also converts values to other types if specified.
             * @param message ContactMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.ContactMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContactMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ContactMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SenderKeyDistributionMessage. */
        interface ISenderKeyDistributionMessage {

            /** SenderKeyDistributionMessage groupID */
            groupID?: (string|null);

            /** SenderKeyDistributionMessage axolotlSenderKeyDistributionMessage */
            axolotlSenderKeyDistributionMessage?: (Uint8Array|null);
        }

        /** Represents a SenderKeyDistributionMessage. */
        class SenderKeyDistributionMessage implements ISenderKeyDistributionMessage {

            /**
             * Constructs a new SenderKeyDistributionMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.Message.ISenderKeyDistributionMessage);

            /** SenderKeyDistributionMessage groupID. */
            public groupID: string;

            /** SenderKeyDistributionMessage axolotlSenderKeyDistributionMessage. */
            public axolotlSenderKeyDistributionMessage: Uint8Array;

            /**
             * Creates a new SenderKeyDistributionMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SenderKeyDistributionMessage instance
             */
            public static create(properties?: WAE2E.Message.ISenderKeyDistributionMessage): WAE2E.Message.SenderKeyDistributionMessage;

            /**
             * Encodes the specified SenderKeyDistributionMessage message. Does not implicitly {@link WAE2E.Message.SenderKeyDistributionMessage.verify|verify} messages.
             * @param message SenderKeyDistributionMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.Message.ISenderKeyDistributionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SenderKeyDistributionMessage message, length delimited. Does not implicitly {@link WAE2E.Message.SenderKeyDistributionMessage.verify|verify} messages.
             * @param message SenderKeyDistributionMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.Message.ISenderKeyDistributionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SenderKeyDistributionMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Message.SenderKeyDistributionMessage;

            /**
             * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SenderKeyDistributionMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Message.SenderKeyDistributionMessage;

            /**
             * Verifies a SenderKeyDistributionMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SenderKeyDistributionMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SenderKeyDistributionMessage
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.Message.SenderKeyDistributionMessage;

            /**
             * Creates a plain object from a SenderKeyDistributionMessage message. Also converts values to other types if specified.
             * @param message SenderKeyDistributionMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.Message.SenderKeyDistributionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SenderKeyDistributionMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SenderKeyDistributionMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ContextInfo. */
    interface IContextInfo {

        /** ContextInfo stanzaID */
        stanzaID?: (string|null);

        /** ContextInfo participant */
        participant?: (string|null);

        /** ContextInfo quotedMessage */
        quotedMessage?: (WAE2E.IMessage|null);

        /** ContextInfo remoteJID */
        remoteJID?: (string|null);

        /** ContextInfo mentionedJID */
        mentionedJID?: (string[]|null);

        /** ContextInfo conversionSource */
        conversionSource?: (string|null);

        /** ContextInfo conversionData */
        conversionData?: (Uint8Array|null);

        /** ContextInfo conversionDelaySeconds */
        conversionDelaySeconds?: (number|null);

        /** ContextInfo forwardingScore */
        forwardingScore?: (number|null);

        /** ContextInfo isForwarded */
        isForwarded?: (boolean|null);

        /** ContextInfo quotedAd */
        quotedAd?: (WAE2E.ContextInfo.IAdReplyInfo|null);

        /** ContextInfo placeholderKey */
        placeholderKey?: (WAProtocol.IMessageKey|null);

        /** ContextInfo expiration */
        expiration?: (number|null);

        /** ContextInfo ephemeralSettingTimestamp */
        ephemeralSettingTimestamp?: (number|Long|null);

        /** ContextInfo ephemeralSharedSecret */
        ephemeralSharedSecret?: (Uint8Array|null);

        /** ContextInfo externalAdReply */
        externalAdReply?: (WAE2E.ContextInfo.IExternalAdReplyInfo|null);

        /** ContextInfo entryPointConversionSource */
        entryPointConversionSource?: (string|null);

        /** ContextInfo entryPointConversionApp */
        entryPointConversionApp?: (string|null);

        /** ContextInfo entryPointConversionDelaySeconds */
        entryPointConversionDelaySeconds?: (number|null);

        /** ContextInfo disappearingMode */
        disappearingMode?: (WAE2E.IDisappearingMode|null);

        /** ContextInfo actionLink */
        actionLink?: (WAE2E.IActionLink|null);

        /** ContextInfo groupSubject */
        groupSubject?: (string|null);

        /** ContextInfo parentGroupJID */
        parentGroupJID?: (string|null);

        /** ContextInfo trustBannerType */
        trustBannerType?: (string|null);

        /** ContextInfo trustBannerAction */
        trustBannerAction?: (number|null);

        /** ContextInfo isSampled */
        isSampled?: (boolean|null);

        /** ContextInfo groupMentions */
        groupMentions?: (WAE2E.IGroupMention[]|null);

        /** ContextInfo utm */
        utm?: (WAE2E.ContextInfo.IUTMInfo|null);

        /** ContextInfo forwardedNewsletterMessageInfo */
        forwardedNewsletterMessageInfo?: (WAE2E.ContextInfo.IForwardedNewsletterMessageInfo|null);

        /** ContextInfo businessMessageForwardInfo */
        businessMessageForwardInfo?: (WAE2E.ContextInfo.IBusinessMessageForwardInfo|null);

        /** ContextInfo smbClientCampaignID */
        smbClientCampaignID?: (string|null);

        /** ContextInfo smbServerCampaignID */
        smbServerCampaignID?: (string|null);

        /** ContextInfo dataSharingContext */
        dataSharingContext?: (WAE2E.ContextInfo.IDataSharingContext|null);

        /** ContextInfo alwaysShowAdAttribution */
        alwaysShowAdAttribution?: (boolean|null);

        /** ContextInfo featureEligibilities */
        featureEligibilities?: (WAE2E.ContextInfo.IFeatureEligibilities|null);

        /** ContextInfo entryPointConversionExternalSource */
        entryPointConversionExternalSource?: (string|null);

        /** ContextInfo entryPointConversionExternalMedium */
        entryPointConversionExternalMedium?: (string|null);

        /** ContextInfo groupInfoMetadata */
        groupInfoMetadata?: (WAE2E.IGroupInfoMetadata|null);
    }

    /** Represents a ContextInfo. */
    class ContextInfo implements IContextInfo {

        /**
         * Constructs a new ContextInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IContextInfo);

        /** ContextInfo stanzaID. */
        public stanzaID: string;

        /** ContextInfo participant. */
        public participant: string;

        /** ContextInfo quotedMessage. */
        public quotedMessage?: (WAE2E.IMessage|null);

        /** ContextInfo remoteJID. */
        public remoteJID: string;

        /** ContextInfo mentionedJID. */
        public mentionedJID: string[];

        /** ContextInfo conversionSource. */
        public conversionSource: string;

        /** ContextInfo conversionData. */
        public conversionData: Uint8Array;

        /** ContextInfo conversionDelaySeconds. */
        public conversionDelaySeconds: number;

        /** ContextInfo forwardingScore. */
        public forwardingScore: number;

        /** ContextInfo isForwarded. */
        public isForwarded: boolean;

        /** ContextInfo quotedAd. */
        public quotedAd?: (WAE2E.ContextInfo.IAdReplyInfo|null);

        /** ContextInfo placeholderKey. */
        public placeholderKey?: (WAProtocol.IMessageKey|null);

        /** ContextInfo expiration. */
        public expiration: number;

        /** ContextInfo ephemeralSettingTimestamp. */
        public ephemeralSettingTimestamp: (number|Long);

        /** ContextInfo ephemeralSharedSecret. */
        public ephemeralSharedSecret: Uint8Array;

        /** ContextInfo externalAdReply. */
        public externalAdReply?: (WAE2E.ContextInfo.IExternalAdReplyInfo|null);

        /** ContextInfo entryPointConversionSource. */
        public entryPointConversionSource: string;

        /** ContextInfo entryPointConversionApp. */
        public entryPointConversionApp: string;

        /** ContextInfo entryPointConversionDelaySeconds. */
        public entryPointConversionDelaySeconds: number;

        /** ContextInfo disappearingMode. */
        public disappearingMode?: (WAE2E.IDisappearingMode|null);

        /** ContextInfo actionLink. */
        public actionLink?: (WAE2E.IActionLink|null);

        /** ContextInfo groupSubject. */
        public groupSubject: string;

        /** ContextInfo parentGroupJID. */
        public parentGroupJID: string;

        /** ContextInfo trustBannerType. */
        public trustBannerType: string;

        /** ContextInfo trustBannerAction. */
        public trustBannerAction: number;

        /** ContextInfo isSampled. */
        public isSampled: boolean;

        /** ContextInfo groupMentions. */
        public groupMentions: WAE2E.IGroupMention[];

        /** ContextInfo utm. */
        public utm?: (WAE2E.ContextInfo.IUTMInfo|null);

        /** ContextInfo forwardedNewsletterMessageInfo. */
        public forwardedNewsletterMessageInfo?: (WAE2E.ContextInfo.IForwardedNewsletterMessageInfo|null);

        /** ContextInfo businessMessageForwardInfo. */
        public businessMessageForwardInfo?: (WAE2E.ContextInfo.IBusinessMessageForwardInfo|null);

        /** ContextInfo smbClientCampaignID. */
        public smbClientCampaignID: string;

        /** ContextInfo smbServerCampaignID. */
        public smbServerCampaignID: string;

        /** ContextInfo dataSharingContext. */
        public dataSharingContext?: (WAE2E.ContextInfo.IDataSharingContext|null);

        /** ContextInfo alwaysShowAdAttribution. */
        public alwaysShowAdAttribution: boolean;

        /** ContextInfo featureEligibilities. */
        public featureEligibilities?: (WAE2E.ContextInfo.IFeatureEligibilities|null);

        /** ContextInfo entryPointConversionExternalSource. */
        public entryPointConversionExternalSource: string;

        /** ContextInfo entryPointConversionExternalMedium. */
        public entryPointConversionExternalMedium: string;

        /** ContextInfo groupInfoMetadata. */
        public groupInfoMetadata?: (WAE2E.IGroupInfoMetadata|null);

        /**
         * Creates a new ContextInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContextInfo instance
         */
        public static create(properties?: WAE2E.IContextInfo): WAE2E.ContextInfo;

        /**
         * Encodes the specified ContextInfo message. Does not implicitly {@link WAE2E.ContextInfo.verify|verify} messages.
         * @param message ContextInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IContextInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContextInfo message, length delimited. Does not implicitly {@link WAE2E.ContextInfo.verify|verify} messages.
         * @param message ContextInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IContextInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContextInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContextInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.ContextInfo;

        /**
         * Decodes a ContextInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContextInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.ContextInfo;

        /**
         * Verifies a ContextInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContextInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContextInfo
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.ContextInfo;

        /**
         * Creates a plain object from a ContextInfo message. Also converts values to other types if specified.
         * @param message ContextInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.ContextInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContextInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ContextInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ContextInfo {

        /** Properties of a ForwardedNewsletterMessageInfo. */
        interface IForwardedNewsletterMessageInfo {

            /** ForwardedNewsletterMessageInfo newsletterJID */
            newsletterJID?: (string|null);

            /** ForwardedNewsletterMessageInfo serverMessageID */
            serverMessageID?: (number|null);

            /** ForwardedNewsletterMessageInfo newsletterName */
            newsletterName?: (string|null);

            /** ForwardedNewsletterMessageInfo contentType */
            contentType?: (WAE2E.ContextInfo.ForwardedNewsletterMessageInfo.ContentType|null);

            /** ForwardedNewsletterMessageInfo accessibilityText */
            accessibilityText?: (string|null);
        }

        /** Represents a ForwardedNewsletterMessageInfo. */
        class ForwardedNewsletterMessageInfo implements IForwardedNewsletterMessageInfo {

            /**
             * Constructs a new ForwardedNewsletterMessageInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.ContextInfo.IForwardedNewsletterMessageInfo);

            /** ForwardedNewsletterMessageInfo newsletterJID. */
            public newsletterJID: string;

            /** ForwardedNewsletterMessageInfo serverMessageID. */
            public serverMessageID: number;

            /** ForwardedNewsletterMessageInfo newsletterName. */
            public newsletterName: string;

            /** ForwardedNewsletterMessageInfo contentType. */
            public contentType: WAE2E.ContextInfo.ForwardedNewsletterMessageInfo.ContentType;

            /** ForwardedNewsletterMessageInfo accessibilityText. */
            public accessibilityText: string;

            /**
             * Creates a new ForwardedNewsletterMessageInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ForwardedNewsletterMessageInfo instance
             */
            public static create(properties?: WAE2E.ContextInfo.IForwardedNewsletterMessageInfo): WAE2E.ContextInfo.ForwardedNewsletterMessageInfo;

            /**
             * Encodes the specified ForwardedNewsletterMessageInfo message. Does not implicitly {@link WAE2E.ContextInfo.ForwardedNewsletterMessageInfo.verify|verify} messages.
             * @param message ForwardedNewsletterMessageInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.ContextInfo.IForwardedNewsletterMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ForwardedNewsletterMessageInfo message, length delimited. Does not implicitly {@link WAE2E.ContextInfo.ForwardedNewsletterMessageInfo.verify|verify} messages.
             * @param message ForwardedNewsletterMessageInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.ContextInfo.IForwardedNewsletterMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ForwardedNewsletterMessageInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ForwardedNewsletterMessageInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.ContextInfo.ForwardedNewsletterMessageInfo;

            /**
             * Decodes a ForwardedNewsletterMessageInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ForwardedNewsletterMessageInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.ContextInfo.ForwardedNewsletterMessageInfo;

            /**
             * Verifies a ForwardedNewsletterMessageInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ForwardedNewsletterMessageInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ForwardedNewsletterMessageInfo
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.ContextInfo.ForwardedNewsletterMessageInfo;

            /**
             * Creates a plain object from a ForwardedNewsletterMessageInfo message. Also converts values to other types if specified.
             * @param message ForwardedNewsletterMessageInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.ContextInfo.ForwardedNewsletterMessageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ForwardedNewsletterMessageInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ForwardedNewsletterMessageInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ForwardedNewsletterMessageInfo {

            /** ContentType enum. */
            enum ContentType {
                UPDATE = 1,
                UPDATE_CARD = 2,
                LINK_CARD = 3
            }
        }

        /** Properties of an ExternalAdReplyInfo. */
        interface IExternalAdReplyInfo {

            /** ExternalAdReplyInfo title */
            title?: (string|null);

            /** ExternalAdReplyInfo body */
            body?: (string|null);

            /** ExternalAdReplyInfo mediaType */
            mediaType?: (WAE2E.ContextInfo.ExternalAdReplyInfo.MediaType|null);

            /** ExternalAdReplyInfo thumbnailURL */
            thumbnailURL?: (string|null);

            /** ExternalAdReplyInfo mediaURL */
            mediaURL?: (string|null);

            /** ExternalAdReplyInfo thumbnail */
            thumbnail?: (Uint8Array|null);

            /** ExternalAdReplyInfo sourceType */
            sourceType?: (string|null);

            /** ExternalAdReplyInfo sourceID */
            sourceID?: (string|null);

            /** ExternalAdReplyInfo sourceURL */
            sourceURL?: (string|null);

            /** ExternalAdReplyInfo containsAutoReply */
            containsAutoReply?: (boolean|null);

            /** ExternalAdReplyInfo renderLargerThumbnail */
            renderLargerThumbnail?: (boolean|null);

            /** ExternalAdReplyInfo showAdAttribution */
            showAdAttribution?: (boolean|null);

            /** ExternalAdReplyInfo ctwaClid */
            ctwaClid?: (string|null);

            /** ExternalAdReplyInfo ref */
            ref?: (string|null);

            /** ExternalAdReplyInfo clickToWhatsappCall */
            clickToWhatsappCall?: (boolean|null);

            /** ExternalAdReplyInfo adContextPreviewDismissed */
            adContextPreviewDismissed?: (boolean|null);
        }

        /** Represents an ExternalAdReplyInfo. */
        class ExternalAdReplyInfo implements IExternalAdReplyInfo {

            /**
             * Constructs a new ExternalAdReplyInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.ContextInfo.IExternalAdReplyInfo);

            /** ExternalAdReplyInfo title. */
            public title: string;

            /** ExternalAdReplyInfo body. */
            public body: string;

            /** ExternalAdReplyInfo mediaType. */
            public mediaType: WAE2E.ContextInfo.ExternalAdReplyInfo.MediaType;

            /** ExternalAdReplyInfo thumbnailURL. */
            public thumbnailURL: string;

            /** ExternalAdReplyInfo mediaURL. */
            public mediaURL: string;

            /** ExternalAdReplyInfo thumbnail. */
            public thumbnail: Uint8Array;

            /** ExternalAdReplyInfo sourceType. */
            public sourceType: string;

            /** ExternalAdReplyInfo sourceID. */
            public sourceID: string;

            /** ExternalAdReplyInfo sourceURL. */
            public sourceURL: string;

            /** ExternalAdReplyInfo containsAutoReply. */
            public containsAutoReply: boolean;

            /** ExternalAdReplyInfo renderLargerThumbnail. */
            public renderLargerThumbnail: boolean;

            /** ExternalAdReplyInfo showAdAttribution. */
            public showAdAttribution: boolean;

            /** ExternalAdReplyInfo ctwaClid. */
            public ctwaClid: string;

            /** ExternalAdReplyInfo ref. */
            public ref: string;

            /** ExternalAdReplyInfo clickToWhatsappCall. */
            public clickToWhatsappCall: boolean;

            /** ExternalAdReplyInfo adContextPreviewDismissed. */
            public adContextPreviewDismissed: boolean;

            /**
             * Creates a new ExternalAdReplyInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExternalAdReplyInfo instance
             */
            public static create(properties?: WAE2E.ContextInfo.IExternalAdReplyInfo): WAE2E.ContextInfo.ExternalAdReplyInfo;

            /**
             * Encodes the specified ExternalAdReplyInfo message. Does not implicitly {@link WAE2E.ContextInfo.ExternalAdReplyInfo.verify|verify} messages.
             * @param message ExternalAdReplyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.ContextInfo.IExternalAdReplyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExternalAdReplyInfo message, length delimited. Does not implicitly {@link WAE2E.ContextInfo.ExternalAdReplyInfo.verify|verify} messages.
             * @param message ExternalAdReplyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.ContextInfo.IExternalAdReplyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExternalAdReplyInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExternalAdReplyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.ContextInfo.ExternalAdReplyInfo;

            /**
             * Decodes an ExternalAdReplyInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExternalAdReplyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.ContextInfo.ExternalAdReplyInfo;

            /**
             * Verifies an ExternalAdReplyInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExternalAdReplyInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExternalAdReplyInfo
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.ContextInfo.ExternalAdReplyInfo;

            /**
             * Creates a plain object from an ExternalAdReplyInfo message. Also converts values to other types if specified.
             * @param message ExternalAdReplyInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.ContextInfo.ExternalAdReplyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExternalAdReplyInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExternalAdReplyInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExternalAdReplyInfo {

            /** MediaType enum. */
            enum MediaType {
                NONE = 0,
                IMAGE = 1,
                VIDEO = 2
            }
        }

        /** Properties of an AdReplyInfo. */
        interface IAdReplyInfo {

            /** AdReplyInfo advertiserName */
            advertiserName?: (string|null);

            /** AdReplyInfo mediaType */
            mediaType?: (WAE2E.ContextInfo.AdReplyInfo.MediaType|null);

            /** AdReplyInfo JPEGThumbnail */
            JPEGThumbnail?: (Uint8Array|null);

            /** AdReplyInfo caption */
            caption?: (string|null);
        }

        /** Represents an AdReplyInfo. */
        class AdReplyInfo implements IAdReplyInfo {

            /**
             * Constructs a new AdReplyInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.ContextInfo.IAdReplyInfo);

            /** AdReplyInfo advertiserName. */
            public advertiserName: string;

            /** AdReplyInfo mediaType. */
            public mediaType: WAE2E.ContextInfo.AdReplyInfo.MediaType;

            /** AdReplyInfo JPEGThumbnail. */
            public JPEGThumbnail: Uint8Array;

            /** AdReplyInfo caption. */
            public caption: string;

            /**
             * Creates a new AdReplyInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AdReplyInfo instance
             */
            public static create(properties?: WAE2E.ContextInfo.IAdReplyInfo): WAE2E.ContextInfo.AdReplyInfo;

            /**
             * Encodes the specified AdReplyInfo message. Does not implicitly {@link WAE2E.ContextInfo.AdReplyInfo.verify|verify} messages.
             * @param message AdReplyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.ContextInfo.IAdReplyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AdReplyInfo message, length delimited. Does not implicitly {@link WAE2E.ContextInfo.AdReplyInfo.verify|verify} messages.
             * @param message AdReplyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.ContextInfo.IAdReplyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AdReplyInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AdReplyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.ContextInfo.AdReplyInfo;

            /**
             * Decodes an AdReplyInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AdReplyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.ContextInfo.AdReplyInfo;

            /**
             * Verifies an AdReplyInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AdReplyInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AdReplyInfo
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.ContextInfo.AdReplyInfo;

            /**
             * Creates a plain object from an AdReplyInfo message. Also converts values to other types if specified.
             * @param message AdReplyInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.ContextInfo.AdReplyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AdReplyInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AdReplyInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace AdReplyInfo {

            /** MediaType enum. */
            enum MediaType {
                NONE = 0,
                IMAGE = 1,
                VIDEO = 2
            }
        }

        /** Properties of a FeatureEligibilities. */
        interface IFeatureEligibilities {

            /** FeatureEligibilities cannotBeReactedTo */
            cannotBeReactedTo?: (boolean|null);

            /** FeatureEligibilities canRequestFeedback */
            canRequestFeedback?: (boolean|null);
        }

        /** Represents a FeatureEligibilities. */
        class FeatureEligibilities implements IFeatureEligibilities {

            /**
             * Constructs a new FeatureEligibilities.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.ContextInfo.IFeatureEligibilities);

            /** FeatureEligibilities cannotBeReactedTo. */
            public cannotBeReactedTo: boolean;

            /** FeatureEligibilities canRequestFeedback. */
            public canRequestFeedback: boolean;

            /**
             * Creates a new FeatureEligibilities instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureEligibilities instance
             */
            public static create(properties?: WAE2E.ContextInfo.IFeatureEligibilities): WAE2E.ContextInfo.FeatureEligibilities;

            /**
             * Encodes the specified FeatureEligibilities message. Does not implicitly {@link WAE2E.ContextInfo.FeatureEligibilities.verify|verify} messages.
             * @param message FeatureEligibilities message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.ContextInfo.IFeatureEligibilities, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureEligibilities message, length delimited. Does not implicitly {@link WAE2E.ContextInfo.FeatureEligibilities.verify|verify} messages.
             * @param message FeatureEligibilities message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.ContextInfo.IFeatureEligibilities, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureEligibilities message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureEligibilities
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.ContextInfo.FeatureEligibilities;

            /**
             * Decodes a FeatureEligibilities message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureEligibilities
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.ContextInfo.FeatureEligibilities;

            /**
             * Verifies a FeatureEligibilities message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureEligibilities message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureEligibilities
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.ContextInfo.FeatureEligibilities;

            /**
             * Creates a plain object from a FeatureEligibilities message. Also converts values to other types if specified.
             * @param message FeatureEligibilities
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.ContextInfo.FeatureEligibilities, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureEligibilities to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureEligibilities
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DataSharingContext. */
        interface IDataSharingContext {

            /** DataSharingContext showMmDisclosure */
            showMmDisclosure?: (boolean|null);

            /** DataSharingContext encryptedSignalTokenConsented */
            encryptedSignalTokenConsented?: (string|null);
        }

        /** Represents a DataSharingContext. */
        class DataSharingContext implements IDataSharingContext {

            /**
             * Constructs a new DataSharingContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.ContextInfo.IDataSharingContext);

            /** DataSharingContext showMmDisclosure. */
            public showMmDisclosure: boolean;

            /** DataSharingContext encryptedSignalTokenConsented. */
            public encryptedSignalTokenConsented: string;

            /**
             * Creates a new DataSharingContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DataSharingContext instance
             */
            public static create(properties?: WAE2E.ContextInfo.IDataSharingContext): WAE2E.ContextInfo.DataSharingContext;

            /**
             * Encodes the specified DataSharingContext message. Does not implicitly {@link WAE2E.ContextInfo.DataSharingContext.verify|verify} messages.
             * @param message DataSharingContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.ContextInfo.IDataSharingContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DataSharingContext message, length delimited. Does not implicitly {@link WAE2E.ContextInfo.DataSharingContext.verify|verify} messages.
             * @param message DataSharingContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.ContextInfo.IDataSharingContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DataSharingContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DataSharingContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.ContextInfo.DataSharingContext;

            /**
             * Decodes a DataSharingContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DataSharingContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.ContextInfo.DataSharingContext;

            /**
             * Verifies a DataSharingContext message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DataSharingContext message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DataSharingContext
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.ContextInfo.DataSharingContext;

            /**
             * Creates a plain object from a DataSharingContext message. Also converts values to other types if specified.
             * @param message DataSharingContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.ContextInfo.DataSharingContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DataSharingContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DataSharingContext
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UTMInfo. */
        interface IUTMInfo {

            /** UTMInfo utmSource */
            utmSource?: (string|null);

            /** UTMInfo utmCampaign */
            utmCampaign?: (string|null);
        }

        /** Represents a UTMInfo. */
        class UTMInfo implements IUTMInfo {

            /**
             * Constructs a new UTMInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.ContextInfo.IUTMInfo);

            /** UTMInfo utmSource. */
            public utmSource: string;

            /** UTMInfo utmCampaign. */
            public utmCampaign: string;

            /**
             * Creates a new UTMInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UTMInfo instance
             */
            public static create(properties?: WAE2E.ContextInfo.IUTMInfo): WAE2E.ContextInfo.UTMInfo;

            /**
             * Encodes the specified UTMInfo message. Does not implicitly {@link WAE2E.ContextInfo.UTMInfo.verify|verify} messages.
             * @param message UTMInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.ContextInfo.IUTMInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UTMInfo message, length delimited. Does not implicitly {@link WAE2E.ContextInfo.UTMInfo.verify|verify} messages.
             * @param message UTMInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.ContextInfo.IUTMInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UTMInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UTMInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.ContextInfo.UTMInfo;

            /**
             * Decodes a UTMInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UTMInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.ContextInfo.UTMInfo;

            /**
             * Verifies a UTMInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UTMInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UTMInfo
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.ContextInfo.UTMInfo;

            /**
             * Creates a plain object from a UTMInfo message. Also converts values to other types if specified.
             * @param message UTMInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.ContextInfo.UTMInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UTMInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UTMInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BusinessMessageForwardInfo. */
        interface IBusinessMessageForwardInfo {

            /** BusinessMessageForwardInfo businessOwnerJID */
            businessOwnerJID?: (string|null);
        }

        /** Represents a BusinessMessageForwardInfo. */
        class BusinessMessageForwardInfo implements IBusinessMessageForwardInfo {

            /**
             * Constructs a new BusinessMessageForwardInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.ContextInfo.IBusinessMessageForwardInfo);

            /** BusinessMessageForwardInfo businessOwnerJID. */
            public businessOwnerJID: string;

            /**
             * Creates a new BusinessMessageForwardInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BusinessMessageForwardInfo instance
             */
            public static create(properties?: WAE2E.ContextInfo.IBusinessMessageForwardInfo): WAE2E.ContextInfo.BusinessMessageForwardInfo;

            /**
             * Encodes the specified BusinessMessageForwardInfo message. Does not implicitly {@link WAE2E.ContextInfo.BusinessMessageForwardInfo.verify|verify} messages.
             * @param message BusinessMessageForwardInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.ContextInfo.IBusinessMessageForwardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BusinessMessageForwardInfo message, length delimited. Does not implicitly {@link WAE2E.ContextInfo.BusinessMessageForwardInfo.verify|verify} messages.
             * @param message BusinessMessageForwardInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.ContextInfo.IBusinessMessageForwardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BusinessMessageForwardInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BusinessMessageForwardInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.ContextInfo.BusinessMessageForwardInfo;

            /**
             * Decodes a BusinessMessageForwardInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BusinessMessageForwardInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.ContextInfo.BusinessMessageForwardInfo;

            /**
             * Verifies a BusinessMessageForwardInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BusinessMessageForwardInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BusinessMessageForwardInfo
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.ContextInfo.BusinessMessageForwardInfo;

            /**
             * Creates a plain object from a BusinessMessageForwardInfo message. Also converts values to other types if specified.
             * @param message BusinessMessageForwardInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.ContextInfo.BusinessMessageForwardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BusinessMessageForwardInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BusinessMessageForwardInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a BotPluginMetadata. */
    interface IBotPluginMetadata {

        /** BotPluginMetadata provider */
        provider?: (WAE2E.BotPluginMetadata.SearchProvider|null);

        /** BotPluginMetadata pluginType */
        pluginType?: (WAE2E.BotPluginMetadata.PluginType|null);

        /** BotPluginMetadata thumbnailCDNURL */
        thumbnailCDNURL?: (string|null);

        /** BotPluginMetadata profilePhotoCDNURL */
        profilePhotoCDNURL?: (string|null);

        /** BotPluginMetadata searchProviderURL */
        searchProviderURL?: (string|null);

        /** BotPluginMetadata referenceIndex */
        referenceIndex?: (number|null);

        /** BotPluginMetadata expectedLinksCount */
        expectedLinksCount?: (number|null);

        /** BotPluginMetadata searchQuery */
        searchQuery?: (string|null);

        /** BotPluginMetadata parentPluginMessageKey */
        parentPluginMessageKey?: (WAProtocol.IMessageKey|null);

        /** BotPluginMetadata parentPluginType */
        parentPluginType?: (WAE2E.BotPluginMetadata.PluginType|null);
    }

    /** Represents a BotPluginMetadata. */
    class BotPluginMetadata implements IBotPluginMetadata {

        /**
         * Constructs a new BotPluginMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IBotPluginMetadata);

        /** BotPluginMetadata provider. */
        public provider: WAE2E.BotPluginMetadata.SearchProvider;

        /** BotPluginMetadata pluginType. */
        public pluginType: WAE2E.BotPluginMetadata.PluginType;

        /** BotPluginMetadata thumbnailCDNURL. */
        public thumbnailCDNURL: string;

        /** BotPluginMetadata profilePhotoCDNURL. */
        public profilePhotoCDNURL: string;

        /** BotPluginMetadata searchProviderURL. */
        public searchProviderURL: string;

        /** BotPluginMetadata referenceIndex. */
        public referenceIndex: number;

        /** BotPluginMetadata expectedLinksCount. */
        public expectedLinksCount: number;

        /** BotPluginMetadata searchQuery. */
        public searchQuery: string;

        /** BotPluginMetadata parentPluginMessageKey. */
        public parentPluginMessageKey?: (WAProtocol.IMessageKey|null);

        /** BotPluginMetadata parentPluginType. */
        public parentPluginType: WAE2E.BotPluginMetadata.PluginType;

        /**
         * Creates a new BotPluginMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotPluginMetadata instance
         */
        public static create(properties?: WAE2E.IBotPluginMetadata): WAE2E.BotPluginMetadata;

        /**
         * Encodes the specified BotPluginMetadata message. Does not implicitly {@link WAE2E.BotPluginMetadata.verify|verify} messages.
         * @param message BotPluginMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IBotPluginMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotPluginMetadata message, length delimited. Does not implicitly {@link WAE2E.BotPluginMetadata.verify|verify} messages.
         * @param message BotPluginMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IBotPluginMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotPluginMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotPluginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.BotPluginMetadata;

        /**
         * Decodes a BotPluginMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotPluginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.BotPluginMetadata;

        /**
         * Verifies a BotPluginMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotPluginMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotPluginMetadata
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.BotPluginMetadata;

        /**
         * Creates a plain object from a BotPluginMetadata message. Also converts values to other types if specified.
         * @param message BotPluginMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.BotPluginMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotPluginMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotPluginMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotPluginMetadata {

        /** PluginType enum. */
        enum PluginType {
            REELS = 1,
            SEARCH = 2
        }

        /** SearchProvider enum. */
        enum SearchProvider {
            BING = 1,
            GOOGLE = 2
        }
    }

    /** Properties of a BotSearchMetadata. */
    interface IBotSearchMetadata {

        /** BotSearchMetadata sessionID */
        sessionID?: (string|null);

        /** BotSearchMetadata sessionSource */
        sessionSource?: (WAE2E.BotSearchMetadata.SessionSource|null);
    }

    /** Represents a BotSearchMetadata. */
    class BotSearchMetadata implements IBotSearchMetadata {

        /**
         * Constructs a new BotSearchMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IBotSearchMetadata);

        /** BotSearchMetadata sessionID. */
        public sessionID: string;

        /** BotSearchMetadata sessionSource. */
        public sessionSource: WAE2E.BotSearchMetadata.SessionSource;

        /**
         * Creates a new BotSearchMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSearchMetadata instance
         */
        public static create(properties?: WAE2E.IBotSearchMetadata): WAE2E.BotSearchMetadata;

        /**
         * Encodes the specified BotSearchMetadata message. Does not implicitly {@link WAE2E.BotSearchMetadata.verify|verify} messages.
         * @param message BotSearchMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IBotSearchMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSearchMetadata message, length delimited. Does not implicitly {@link WAE2E.BotSearchMetadata.verify|verify} messages.
         * @param message BotSearchMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IBotSearchMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSearchMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotSearchMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.BotSearchMetadata;

        /**
         * Decodes a BotSearchMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotSearchMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.BotSearchMetadata;

        /**
         * Verifies a BotSearchMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotSearchMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotSearchMetadata
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.BotSearchMetadata;

        /**
         * Creates a plain object from a BotSearchMetadata message. Also converts values to other types if specified.
         * @param message BotSearchMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.BotSearchMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotSearchMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotSearchMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotSearchMetadata {

        /** SessionSource enum. */
        enum SessionSource {
            NULL_STATE = 1,
            TYPEAHEAD = 2,
            USER_INPUT = 3,
            EMU_FLASH = 4,
            EMU_FLASH_FOLLOWUP = 5
        }
    }

    /** Properties of a BotReminderMetadata. */
    interface IBotReminderMetadata {

        /** BotReminderMetadata requestMessageKey */
        requestMessageKey?: (WAProtocol.IMessageKey|null);

        /** BotReminderMetadata action */
        action?: (WAE2E.BotReminderMetadata.ReminderAction|null);

        /** BotReminderMetadata name */
        name?: (string|null);

        /** BotReminderMetadata nextTriggerTimestamp */
        nextTriggerTimestamp?: (number|Long|null);

        /** BotReminderMetadata frequency */
        frequency?: (WAE2E.BotReminderMetadata.ReminderFrequency|null);
    }

    /** Represents a BotReminderMetadata. */
    class BotReminderMetadata implements IBotReminderMetadata {

        /**
         * Constructs a new BotReminderMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IBotReminderMetadata);

        /** BotReminderMetadata requestMessageKey. */
        public requestMessageKey?: (WAProtocol.IMessageKey|null);

        /** BotReminderMetadata action. */
        public action: WAE2E.BotReminderMetadata.ReminderAction;

        /** BotReminderMetadata name. */
        public name: string;

        /** BotReminderMetadata nextTriggerTimestamp. */
        public nextTriggerTimestamp: (number|Long);

        /** BotReminderMetadata frequency. */
        public frequency: WAE2E.BotReminderMetadata.ReminderFrequency;

        /**
         * Creates a new BotReminderMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotReminderMetadata instance
         */
        public static create(properties?: WAE2E.IBotReminderMetadata): WAE2E.BotReminderMetadata;

        /**
         * Encodes the specified BotReminderMetadata message. Does not implicitly {@link WAE2E.BotReminderMetadata.verify|verify} messages.
         * @param message BotReminderMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IBotReminderMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotReminderMetadata message, length delimited. Does not implicitly {@link WAE2E.BotReminderMetadata.verify|verify} messages.
         * @param message BotReminderMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IBotReminderMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotReminderMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotReminderMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.BotReminderMetadata;

        /**
         * Decodes a BotReminderMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotReminderMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.BotReminderMetadata;

        /**
         * Verifies a BotReminderMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotReminderMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotReminderMetadata
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.BotReminderMetadata;

        /**
         * Creates a plain object from a BotReminderMetadata message. Also converts values to other types if specified.
         * @param message BotReminderMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.BotReminderMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotReminderMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotReminderMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotReminderMetadata {

        /** ReminderFrequency enum. */
        enum ReminderFrequency {
            ONCE = 1,
            DAILY = 2,
            WEEKLY = 3,
            BIWEEKLY = 4,
            MONTHLY = 5
        }

        /** ReminderAction enum. */
        enum ReminderAction {
            NOTIFY = 1,
            CREATE = 2,
            DELETE = 3
        }
    }

    /** Properties of a BotModelMetadata. */
    interface IBotModelMetadata {

        /** BotModelMetadata modelType */
        modelType?: (WAE2E.BotModelMetadata.ModelType|null);

        /** BotModelMetadata premiumModelStatus */
        premiumModelStatus?: (WAE2E.BotModelMetadata.PremiumModelStatus|null);
    }

    /** Represents a BotModelMetadata. */
    class BotModelMetadata implements IBotModelMetadata {

        /**
         * Constructs a new BotModelMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IBotModelMetadata);

        /** BotModelMetadata modelType. */
        public modelType: WAE2E.BotModelMetadata.ModelType;

        /** BotModelMetadata premiumModelStatus. */
        public premiumModelStatus: WAE2E.BotModelMetadata.PremiumModelStatus;

        /**
         * Creates a new BotModelMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotModelMetadata instance
         */
        public static create(properties?: WAE2E.IBotModelMetadata): WAE2E.BotModelMetadata;

        /**
         * Encodes the specified BotModelMetadata message. Does not implicitly {@link WAE2E.BotModelMetadata.verify|verify} messages.
         * @param message BotModelMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IBotModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotModelMetadata message, length delimited. Does not implicitly {@link WAE2E.BotModelMetadata.verify|verify} messages.
         * @param message BotModelMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IBotModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotModelMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotModelMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.BotModelMetadata;

        /**
         * Decodes a BotModelMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotModelMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.BotModelMetadata;

        /**
         * Verifies a BotModelMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotModelMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotModelMetadata
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.BotModelMetadata;

        /**
         * Creates a plain object from a BotModelMetadata message. Also converts values to other types if specified.
         * @param message BotModelMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.BotModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotModelMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotModelMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotModelMetadata {

        /** PremiumModelStatus enum. */
        enum PremiumModelStatus {
            AVAILABLE = 1,
            QUOTA_EXCEED_LIMIT = 2
        }

        /** ModelType enum. */
        enum ModelType {
            LLAMA_PROD = 1,
            LLAMA_PROD_PREMIUM = 2
        }
    }

    /** Properties of a MessageAssociation. */
    interface IMessageAssociation {

        /** MessageAssociation associationType */
        associationType?: (WAE2E.MessageAssociation.AssociationType|null);

        /** MessageAssociation parentMessageKey */
        parentMessageKey?: (WAProtocol.IMessageKey|null);
    }

    /** Represents a MessageAssociation. */
    class MessageAssociation implements IMessageAssociation {

        /**
         * Constructs a new MessageAssociation.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IMessageAssociation);

        /** MessageAssociation associationType. */
        public associationType: WAE2E.MessageAssociation.AssociationType;

        /** MessageAssociation parentMessageKey. */
        public parentMessageKey?: (WAProtocol.IMessageKey|null);

        /**
         * Creates a new MessageAssociation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageAssociation instance
         */
        public static create(properties?: WAE2E.IMessageAssociation): WAE2E.MessageAssociation;

        /**
         * Encodes the specified MessageAssociation message. Does not implicitly {@link WAE2E.MessageAssociation.verify|verify} messages.
         * @param message MessageAssociation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IMessageAssociation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageAssociation message, length delimited. Does not implicitly {@link WAE2E.MessageAssociation.verify|verify} messages.
         * @param message MessageAssociation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IMessageAssociation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageAssociation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageAssociation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.MessageAssociation;

        /**
         * Decodes a MessageAssociation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageAssociation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.MessageAssociation;

        /**
         * Verifies a MessageAssociation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageAssociation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageAssociation
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.MessageAssociation;

        /**
         * Creates a plain object from a MessageAssociation message. Also converts values to other types if specified.
         * @param message MessageAssociation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.MessageAssociation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageAssociation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageAssociation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MessageAssociation {

        /** AssociationType enum. */
        enum AssociationType {
            UNKNOWN = 0,
            MEDIA_ALBUM = 1,
            BOT_PLUGIN = 2,
            EVENT_COVER_IMAGE = 3
        }
    }

    /** Properties of a MessageContextInfo. */
    interface IMessageContextInfo {

        /** MessageContextInfo deviceListMetadata */
        deviceListMetadata?: (WAE2E.IDeviceListMetadata|null);

        /** MessageContextInfo deviceListMetadataVersion */
        deviceListMetadataVersion?: (number|null);

        /** MessageContextInfo messageSecret */
        messageSecret?: (Uint8Array|null);

        /** MessageContextInfo paddingBytes */
        paddingBytes?: (Uint8Array|null);

        /** MessageContextInfo messageAddOnDurationInSecs */
        messageAddOnDurationInSecs?: (number|null);

        /** MessageContextInfo botMessageSecret */
        botMessageSecret?: (Uint8Array|null);

        /** MessageContextInfo botMetadata */
        botMetadata?: (WAE2E.IBotMetadata|null);

        /** MessageContextInfo reportingTokenVersion */
        reportingTokenVersion?: (number|null);

        /** MessageContextInfo messageAddOnExpiryType */
        messageAddOnExpiryType?: (WAE2E.MessageContextInfo.MessageAddonExpiryType|null);

        /** MessageContextInfo messageAssociation */
        messageAssociation?: (WAE2E.IMessageAssociation|null);
    }

    /** Represents a MessageContextInfo. */
    class MessageContextInfo implements IMessageContextInfo {

        /**
         * Constructs a new MessageContextInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IMessageContextInfo);

        /** MessageContextInfo deviceListMetadata. */
        public deviceListMetadata?: (WAE2E.IDeviceListMetadata|null);

        /** MessageContextInfo deviceListMetadataVersion. */
        public deviceListMetadataVersion: number;

        /** MessageContextInfo messageSecret. */
        public messageSecret: Uint8Array;

        /** MessageContextInfo paddingBytes. */
        public paddingBytes: Uint8Array;

        /** MessageContextInfo messageAddOnDurationInSecs. */
        public messageAddOnDurationInSecs: number;

        /** MessageContextInfo botMessageSecret. */
        public botMessageSecret: Uint8Array;

        /** MessageContextInfo botMetadata. */
        public botMetadata?: (WAE2E.IBotMetadata|null);

        /** MessageContextInfo reportingTokenVersion. */
        public reportingTokenVersion: number;

        /** MessageContextInfo messageAddOnExpiryType. */
        public messageAddOnExpiryType: WAE2E.MessageContextInfo.MessageAddonExpiryType;

        /** MessageContextInfo messageAssociation. */
        public messageAssociation?: (WAE2E.IMessageAssociation|null);

        /**
         * Creates a new MessageContextInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageContextInfo instance
         */
        public static create(properties?: WAE2E.IMessageContextInfo): WAE2E.MessageContextInfo;

        /**
         * Encodes the specified MessageContextInfo message. Does not implicitly {@link WAE2E.MessageContextInfo.verify|verify} messages.
         * @param message MessageContextInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IMessageContextInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageContextInfo message, length delimited. Does not implicitly {@link WAE2E.MessageContextInfo.verify|verify} messages.
         * @param message MessageContextInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IMessageContextInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageContextInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageContextInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.MessageContextInfo;

        /**
         * Decodes a MessageContextInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageContextInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.MessageContextInfo;

        /**
         * Verifies a MessageContextInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageContextInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageContextInfo
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.MessageContextInfo;

        /**
         * Creates a plain object from a MessageContextInfo message. Also converts values to other types if specified.
         * @param message MessageContextInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.MessageContextInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageContextInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageContextInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MessageContextInfo {

        /** MessageAddonExpiryType enum. */
        enum MessageAddonExpiryType {
            STATIC = 1,
            DEPENDENT_ON_PARENT = 2
        }
    }

    /** Properties of a HydratedTemplateButton. */
    interface IHydratedTemplateButton {

        /** HydratedTemplateButton quickReplyButton */
        quickReplyButton?: (WAE2E.HydratedTemplateButton.IHydratedQuickReplyButton|null);

        /** HydratedTemplateButton urlButton */
        urlButton?: (WAE2E.HydratedTemplateButton.IHydratedURLButton|null);

        /** HydratedTemplateButton callButton */
        callButton?: (WAE2E.HydratedTemplateButton.IHydratedCallButton|null);

        /** HydratedTemplateButton index */
        index?: (number|null);
    }

    /** Represents a HydratedTemplateButton. */
    class HydratedTemplateButton implements IHydratedTemplateButton {

        /**
         * Constructs a new HydratedTemplateButton.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IHydratedTemplateButton);

        /** HydratedTemplateButton quickReplyButton. */
        public quickReplyButton?: (WAE2E.HydratedTemplateButton.IHydratedQuickReplyButton|null);

        /** HydratedTemplateButton urlButton. */
        public urlButton?: (WAE2E.HydratedTemplateButton.IHydratedURLButton|null);

        /** HydratedTemplateButton callButton. */
        public callButton?: (WAE2E.HydratedTemplateButton.IHydratedCallButton|null);

        /** HydratedTemplateButton index. */
        public index: number;

        /** HydratedTemplateButton hydratedButton. */
        public hydratedButton?: ("quickReplyButton"|"urlButton"|"callButton");

        /**
         * Creates a new HydratedTemplateButton instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HydratedTemplateButton instance
         */
        public static create(properties?: WAE2E.IHydratedTemplateButton): WAE2E.HydratedTemplateButton;

        /**
         * Encodes the specified HydratedTemplateButton message. Does not implicitly {@link WAE2E.HydratedTemplateButton.verify|verify} messages.
         * @param message HydratedTemplateButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IHydratedTemplateButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HydratedTemplateButton message, length delimited. Does not implicitly {@link WAE2E.HydratedTemplateButton.verify|verify} messages.
         * @param message HydratedTemplateButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IHydratedTemplateButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HydratedTemplateButton message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HydratedTemplateButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.HydratedTemplateButton;

        /**
         * Decodes a HydratedTemplateButton message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HydratedTemplateButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.HydratedTemplateButton;

        /**
         * Verifies a HydratedTemplateButton message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HydratedTemplateButton message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HydratedTemplateButton
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.HydratedTemplateButton;

        /**
         * Creates a plain object from a HydratedTemplateButton message. Also converts values to other types if specified.
         * @param message HydratedTemplateButton
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.HydratedTemplateButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HydratedTemplateButton to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HydratedTemplateButton
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace HydratedTemplateButton {

        /** Properties of a HydratedURLButton. */
        interface IHydratedURLButton {

            /** HydratedURLButton displayText */
            displayText?: (string|null);

            /** HydratedURLButton URL */
            URL?: (string|null);

            /** HydratedURLButton consentedUsersURL */
            consentedUsersURL?: (string|null);

            /** HydratedURLButton webviewPresentation */
            webviewPresentation?: (WAE2E.HydratedTemplateButton.HydratedURLButton.WebviewPresentationType|null);
        }

        /** Represents a HydratedURLButton. */
        class HydratedURLButton implements IHydratedURLButton {

            /**
             * Constructs a new HydratedURLButton.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.HydratedTemplateButton.IHydratedURLButton);

            /** HydratedURLButton displayText. */
            public displayText: string;

            /** HydratedURLButton URL. */
            public URL: string;

            /** HydratedURLButton consentedUsersURL. */
            public consentedUsersURL: string;

            /** HydratedURLButton webviewPresentation. */
            public webviewPresentation: WAE2E.HydratedTemplateButton.HydratedURLButton.WebviewPresentationType;

            /**
             * Creates a new HydratedURLButton instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HydratedURLButton instance
             */
            public static create(properties?: WAE2E.HydratedTemplateButton.IHydratedURLButton): WAE2E.HydratedTemplateButton.HydratedURLButton;

            /**
             * Encodes the specified HydratedURLButton message. Does not implicitly {@link WAE2E.HydratedTemplateButton.HydratedURLButton.verify|verify} messages.
             * @param message HydratedURLButton message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.HydratedTemplateButton.IHydratedURLButton, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HydratedURLButton message, length delimited. Does not implicitly {@link WAE2E.HydratedTemplateButton.HydratedURLButton.verify|verify} messages.
             * @param message HydratedURLButton message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.HydratedTemplateButton.IHydratedURLButton, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HydratedURLButton message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HydratedURLButton
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.HydratedTemplateButton.HydratedURLButton;

            /**
             * Decodes a HydratedURLButton message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HydratedURLButton
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.HydratedTemplateButton.HydratedURLButton;

            /**
             * Verifies a HydratedURLButton message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HydratedURLButton message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HydratedURLButton
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.HydratedTemplateButton.HydratedURLButton;

            /**
             * Creates a plain object from a HydratedURLButton message. Also converts values to other types if specified.
             * @param message HydratedURLButton
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.HydratedTemplateButton.HydratedURLButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HydratedURLButton to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HydratedURLButton
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace HydratedURLButton {

            /** WebviewPresentationType enum. */
            enum WebviewPresentationType {
                FULL = 1,
                TALL = 2,
                COMPACT = 3
            }
        }

        /** Properties of a HydratedCallButton. */
        interface IHydratedCallButton {

            /** HydratedCallButton displayText */
            displayText?: (string|null);

            /** HydratedCallButton phoneNumber */
            phoneNumber?: (string|null);
        }

        /** Represents a HydratedCallButton. */
        class HydratedCallButton implements IHydratedCallButton {

            /**
             * Constructs a new HydratedCallButton.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.HydratedTemplateButton.IHydratedCallButton);

            /** HydratedCallButton displayText. */
            public displayText: string;

            /** HydratedCallButton phoneNumber. */
            public phoneNumber: string;

            /**
             * Creates a new HydratedCallButton instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HydratedCallButton instance
             */
            public static create(properties?: WAE2E.HydratedTemplateButton.IHydratedCallButton): WAE2E.HydratedTemplateButton.HydratedCallButton;

            /**
             * Encodes the specified HydratedCallButton message. Does not implicitly {@link WAE2E.HydratedTemplateButton.HydratedCallButton.verify|verify} messages.
             * @param message HydratedCallButton message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.HydratedTemplateButton.IHydratedCallButton, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HydratedCallButton message, length delimited. Does not implicitly {@link WAE2E.HydratedTemplateButton.HydratedCallButton.verify|verify} messages.
             * @param message HydratedCallButton message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.HydratedTemplateButton.IHydratedCallButton, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HydratedCallButton message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HydratedCallButton
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.HydratedTemplateButton.HydratedCallButton;

            /**
             * Decodes a HydratedCallButton message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HydratedCallButton
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.HydratedTemplateButton.HydratedCallButton;

            /**
             * Verifies a HydratedCallButton message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HydratedCallButton message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HydratedCallButton
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.HydratedTemplateButton.HydratedCallButton;

            /**
             * Creates a plain object from a HydratedCallButton message. Also converts values to other types if specified.
             * @param message HydratedCallButton
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.HydratedTemplateButton.HydratedCallButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HydratedCallButton to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HydratedCallButton
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HydratedQuickReplyButton. */
        interface IHydratedQuickReplyButton {

            /** HydratedQuickReplyButton displayText */
            displayText?: (string|null);

            /** HydratedQuickReplyButton ID */
            ID?: (string|null);
        }

        /** Represents a HydratedQuickReplyButton. */
        class HydratedQuickReplyButton implements IHydratedQuickReplyButton {

            /**
             * Constructs a new HydratedQuickReplyButton.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.HydratedTemplateButton.IHydratedQuickReplyButton);

            /** HydratedQuickReplyButton displayText. */
            public displayText: string;

            /** HydratedQuickReplyButton ID. */
            public ID: string;

            /**
             * Creates a new HydratedQuickReplyButton instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HydratedQuickReplyButton instance
             */
            public static create(properties?: WAE2E.HydratedTemplateButton.IHydratedQuickReplyButton): WAE2E.HydratedTemplateButton.HydratedQuickReplyButton;

            /**
             * Encodes the specified HydratedQuickReplyButton message. Does not implicitly {@link WAE2E.HydratedTemplateButton.HydratedQuickReplyButton.verify|verify} messages.
             * @param message HydratedQuickReplyButton message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.HydratedTemplateButton.IHydratedQuickReplyButton, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HydratedQuickReplyButton message, length delimited. Does not implicitly {@link WAE2E.HydratedTemplateButton.HydratedQuickReplyButton.verify|verify} messages.
             * @param message HydratedQuickReplyButton message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.HydratedTemplateButton.IHydratedQuickReplyButton, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HydratedQuickReplyButton message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HydratedQuickReplyButton
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.HydratedTemplateButton.HydratedQuickReplyButton;

            /**
             * Decodes a HydratedQuickReplyButton message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HydratedQuickReplyButton
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.HydratedTemplateButton.HydratedQuickReplyButton;

            /**
             * Verifies a HydratedQuickReplyButton message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HydratedQuickReplyButton message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HydratedQuickReplyButton
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.HydratedTemplateButton.HydratedQuickReplyButton;

            /**
             * Creates a plain object from a HydratedQuickReplyButton message. Also converts values to other types if specified.
             * @param message HydratedQuickReplyButton
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.HydratedTemplateButton.HydratedQuickReplyButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HydratedQuickReplyButton to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HydratedQuickReplyButton
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a PaymentBackground. */
    interface IPaymentBackground {

        /** PaymentBackground ID */
        ID?: (string|null);

        /** PaymentBackground fileLength */
        fileLength?: (number|Long|null);

        /** PaymentBackground width */
        width?: (number|null);

        /** PaymentBackground height */
        height?: (number|null);

        /** PaymentBackground mimetype */
        mimetype?: (string|null);

        /** PaymentBackground placeholderArgb */
        placeholderArgb?: (number|null);

        /** PaymentBackground textArgb */
        textArgb?: (number|null);

        /** PaymentBackground subtextArgb */
        subtextArgb?: (number|null);

        /** PaymentBackground mediaData */
        mediaData?: (WAE2E.PaymentBackground.IMediaData|null);

        /** PaymentBackground type */
        type?: (WAE2E.PaymentBackground.Type|null);
    }

    /** Represents a PaymentBackground. */
    class PaymentBackground implements IPaymentBackground {

        /**
         * Constructs a new PaymentBackground.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IPaymentBackground);

        /** PaymentBackground ID. */
        public ID: string;

        /** PaymentBackground fileLength. */
        public fileLength: (number|Long);

        /** PaymentBackground width. */
        public width: number;

        /** PaymentBackground height. */
        public height: number;

        /** PaymentBackground mimetype. */
        public mimetype: string;

        /** PaymentBackground placeholderArgb. */
        public placeholderArgb: number;

        /** PaymentBackground textArgb. */
        public textArgb: number;

        /** PaymentBackground subtextArgb. */
        public subtextArgb: number;

        /** PaymentBackground mediaData. */
        public mediaData?: (WAE2E.PaymentBackground.IMediaData|null);

        /** PaymentBackground type. */
        public type: WAE2E.PaymentBackground.Type;

        /**
         * Creates a new PaymentBackground instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaymentBackground instance
         */
        public static create(properties?: WAE2E.IPaymentBackground): WAE2E.PaymentBackground;

        /**
         * Encodes the specified PaymentBackground message. Does not implicitly {@link WAE2E.PaymentBackground.verify|verify} messages.
         * @param message PaymentBackground message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IPaymentBackground, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PaymentBackground message, length delimited. Does not implicitly {@link WAE2E.PaymentBackground.verify|verify} messages.
         * @param message PaymentBackground message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IPaymentBackground, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaymentBackground message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaymentBackground
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.PaymentBackground;

        /**
         * Decodes a PaymentBackground message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PaymentBackground
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.PaymentBackground;

        /**
         * Verifies a PaymentBackground message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PaymentBackground message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PaymentBackground
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.PaymentBackground;

        /**
         * Creates a plain object from a PaymentBackground message. Also converts values to other types if specified.
         * @param message PaymentBackground
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.PaymentBackground, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PaymentBackground to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PaymentBackground
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PaymentBackground {

        /** Type enum. */
        enum Type {
            UNKNOWN = 0,
            DEFAULT = 1
        }

        /** Properties of a MediaData. */
        interface IMediaData {

            /** MediaData mediaKey */
            mediaKey?: (Uint8Array|null);

            /** MediaData mediaKeyTimestamp */
            mediaKeyTimestamp?: (number|Long|null);

            /** MediaData fileSHA256 */
            fileSHA256?: (Uint8Array|null);

            /** MediaData fileEncSHA256 */
            fileEncSHA256?: (Uint8Array|null);

            /** MediaData directPath */
            directPath?: (string|null);
        }

        /** Represents a MediaData. */
        class MediaData implements IMediaData {

            /**
             * Constructs a new MediaData.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.PaymentBackground.IMediaData);

            /** MediaData mediaKey. */
            public mediaKey: Uint8Array;

            /** MediaData mediaKeyTimestamp. */
            public mediaKeyTimestamp: (number|Long);

            /** MediaData fileSHA256. */
            public fileSHA256: Uint8Array;

            /** MediaData fileEncSHA256. */
            public fileEncSHA256: Uint8Array;

            /** MediaData directPath. */
            public directPath: string;

            /**
             * Creates a new MediaData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MediaData instance
             */
            public static create(properties?: WAE2E.PaymentBackground.IMediaData): WAE2E.PaymentBackground.MediaData;

            /**
             * Encodes the specified MediaData message. Does not implicitly {@link WAE2E.PaymentBackground.MediaData.verify|verify} messages.
             * @param message MediaData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.PaymentBackground.IMediaData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MediaData message, length delimited. Does not implicitly {@link WAE2E.PaymentBackground.MediaData.verify|verify} messages.
             * @param message MediaData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.PaymentBackground.IMediaData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MediaData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MediaData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.PaymentBackground.MediaData;

            /**
             * Decodes a MediaData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MediaData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.PaymentBackground.MediaData;

            /**
             * Verifies a MediaData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MediaData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MediaData
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.PaymentBackground.MediaData;

            /**
             * Creates a plain object from a MediaData message. Also converts values to other types if specified.
             * @param message MediaData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.PaymentBackground.MediaData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MediaData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MediaData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a DisappearingMode. */
    interface IDisappearingMode {

        /** DisappearingMode initiator */
        initiator?: (WAE2E.DisappearingMode.Initiator|null);

        /** DisappearingMode trigger */
        trigger?: (WAE2E.DisappearingMode.Trigger|null);

        /** DisappearingMode initiatorDeviceJID */
        initiatorDeviceJID?: (string|null);

        /** DisappearingMode initiatedByMe */
        initiatedByMe?: (boolean|null);
    }

    /** Represents a DisappearingMode. */
    class DisappearingMode implements IDisappearingMode {

        /**
         * Constructs a new DisappearingMode.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IDisappearingMode);

        /** DisappearingMode initiator. */
        public initiator: WAE2E.DisappearingMode.Initiator;

        /** DisappearingMode trigger. */
        public trigger: WAE2E.DisappearingMode.Trigger;

        /** DisappearingMode initiatorDeviceJID. */
        public initiatorDeviceJID: string;

        /** DisappearingMode initiatedByMe. */
        public initiatedByMe: boolean;

        /**
         * Creates a new DisappearingMode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisappearingMode instance
         */
        public static create(properties?: WAE2E.IDisappearingMode): WAE2E.DisappearingMode;

        /**
         * Encodes the specified DisappearingMode message. Does not implicitly {@link WAE2E.DisappearingMode.verify|verify} messages.
         * @param message DisappearingMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IDisappearingMode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisappearingMode message, length delimited. Does not implicitly {@link WAE2E.DisappearingMode.verify|verify} messages.
         * @param message DisappearingMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IDisappearingMode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisappearingMode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisappearingMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.DisappearingMode;

        /**
         * Decodes a DisappearingMode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisappearingMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.DisappearingMode;

        /**
         * Verifies a DisappearingMode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisappearingMode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisappearingMode
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.DisappearingMode;

        /**
         * Creates a plain object from a DisappearingMode message. Also converts values to other types if specified.
         * @param message DisappearingMode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.DisappearingMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisappearingMode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DisappearingMode
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace DisappearingMode {

        /** Trigger enum. */
        enum Trigger {
            UNKNOWN = 0,
            CHAT_SETTING = 1,
            ACCOUNT_SETTING = 2,
            BULK_CHANGE = 3,
            BIZ_SUPPORTS_FB_HOSTING = 4
        }

        /** Initiator enum. */
        enum Initiator {
            CHANGED_IN_CHAT = 0,
            INITIATED_BY_ME = 1,
            INITIATED_BY_OTHER = 2,
            BIZ_UPGRADE_FB_HOSTING = 3
        }
    }

    /** Properties of a ProcessedVideo. */
    interface IProcessedVideo {

        /** ProcessedVideo directPath */
        directPath?: (string|null);

        /** ProcessedVideo fileSHA256 */
        fileSHA256?: (Uint8Array|null);

        /** ProcessedVideo height */
        height?: (number|null);

        /** ProcessedVideo width */
        width?: (number|null);

        /** ProcessedVideo fileLength */
        fileLength?: (number|Long|null);

        /** ProcessedVideo bitrate */
        bitrate?: (number|null);

        /** ProcessedVideo quality */
        quality?: (WAE2E.ProcessedVideo.VideoQuality|null);

        /** ProcessedVideo capabilities */
        capabilities?: (string[]|null);
    }

    /** Represents a ProcessedVideo. */
    class ProcessedVideo implements IProcessedVideo {

        /**
         * Constructs a new ProcessedVideo.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IProcessedVideo);

        /** ProcessedVideo directPath. */
        public directPath: string;

        /** ProcessedVideo fileSHA256. */
        public fileSHA256: Uint8Array;

        /** ProcessedVideo height. */
        public height: number;

        /** ProcessedVideo width. */
        public width: number;

        /** ProcessedVideo fileLength. */
        public fileLength: (number|Long);

        /** ProcessedVideo bitrate. */
        public bitrate: number;

        /** ProcessedVideo quality. */
        public quality: WAE2E.ProcessedVideo.VideoQuality;

        /** ProcessedVideo capabilities. */
        public capabilities: string[];

        /**
         * Creates a new ProcessedVideo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProcessedVideo instance
         */
        public static create(properties?: WAE2E.IProcessedVideo): WAE2E.ProcessedVideo;

        /**
         * Encodes the specified ProcessedVideo message. Does not implicitly {@link WAE2E.ProcessedVideo.verify|verify} messages.
         * @param message ProcessedVideo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IProcessedVideo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProcessedVideo message, length delimited. Does not implicitly {@link WAE2E.ProcessedVideo.verify|verify} messages.
         * @param message ProcessedVideo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IProcessedVideo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProcessedVideo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProcessedVideo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.ProcessedVideo;

        /**
         * Decodes a ProcessedVideo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProcessedVideo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.ProcessedVideo;

        /**
         * Verifies a ProcessedVideo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProcessedVideo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProcessedVideo
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.ProcessedVideo;

        /**
         * Creates a plain object from a ProcessedVideo message. Also converts values to other types if specified.
         * @param message ProcessedVideo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.ProcessedVideo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProcessedVideo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProcessedVideo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ProcessedVideo {

        /** VideoQuality enum. */
        enum VideoQuality {
            UNDEFINED = 0,
            LOW = 1,
            MID = 2,
            HIGH = 3
        }
    }

    /** Properties of a BotAvatarMetadata. */
    interface IBotAvatarMetadata {

        /** BotAvatarMetadata sentiment */
        sentiment?: (number|null);

        /** BotAvatarMetadata behaviorGraph */
        behaviorGraph?: (string|null);

        /** BotAvatarMetadata action */
        action?: (number|null);

        /** BotAvatarMetadata intensity */
        intensity?: (number|null);

        /** BotAvatarMetadata wordCount */
        wordCount?: (number|null);
    }

    /** Represents a BotAvatarMetadata. */
    class BotAvatarMetadata implements IBotAvatarMetadata {

        /**
         * Constructs a new BotAvatarMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IBotAvatarMetadata);

        /** BotAvatarMetadata sentiment. */
        public sentiment: number;

        /** BotAvatarMetadata behaviorGraph. */
        public behaviorGraph: string;

        /** BotAvatarMetadata action. */
        public action: number;

        /** BotAvatarMetadata intensity. */
        public intensity: number;

        /** BotAvatarMetadata wordCount. */
        public wordCount: number;

        /**
         * Creates a new BotAvatarMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotAvatarMetadata instance
         */
        public static create(properties?: WAE2E.IBotAvatarMetadata): WAE2E.BotAvatarMetadata;

        /**
         * Encodes the specified BotAvatarMetadata message. Does not implicitly {@link WAE2E.BotAvatarMetadata.verify|verify} messages.
         * @param message BotAvatarMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IBotAvatarMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotAvatarMetadata message, length delimited. Does not implicitly {@link WAE2E.BotAvatarMetadata.verify|verify} messages.
         * @param message BotAvatarMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IBotAvatarMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotAvatarMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotAvatarMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.BotAvatarMetadata;

        /**
         * Decodes a BotAvatarMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotAvatarMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.BotAvatarMetadata;

        /**
         * Verifies a BotAvatarMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotAvatarMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotAvatarMetadata
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.BotAvatarMetadata;

        /**
         * Creates a plain object from a BotAvatarMetadata message. Also converts values to other types if specified.
         * @param message BotAvatarMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.BotAvatarMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotAvatarMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotAvatarMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotSuggestedPromptMetadata. */
    interface IBotSuggestedPromptMetadata {

        /** BotSuggestedPromptMetadata suggestedPrompts */
        suggestedPrompts?: (string[]|null);

        /** BotSuggestedPromptMetadata selectedPromptIndex */
        selectedPromptIndex?: (number|null);
    }

    /** Represents a BotSuggestedPromptMetadata. */
    class BotSuggestedPromptMetadata implements IBotSuggestedPromptMetadata {

        /**
         * Constructs a new BotSuggestedPromptMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IBotSuggestedPromptMetadata);

        /** BotSuggestedPromptMetadata suggestedPrompts. */
        public suggestedPrompts: string[];

        /** BotSuggestedPromptMetadata selectedPromptIndex. */
        public selectedPromptIndex: number;

        /**
         * Creates a new BotSuggestedPromptMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSuggestedPromptMetadata instance
         */
        public static create(properties?: WAE2E.IBotSuggestedPromptMetadata): WAE2E.BotSuggestedPromptMetadata;

        /**
         * Encodes the specified BotSuggestedPromptMetadata message. Does not implicitly {@link WAE2E.BotSuggestedPromptMetadata.verify|verify} messages.
         * @param message BotSuggestedPromptMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IBotSuggestedPromptMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSuggestedPromptMetadata message, length delimited. Does not implicitly {@link WAE2E.BotSuggestedPromptMetadata.verify|verify} messages.
         * @param message BotSuggestedPromptMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IBotSuggestedPromptMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSuggestedPromptMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotSuggestedPromptMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.BotSuggestedPromptMetadata;

        /**
         * Decodes a BotSuggestedPromptMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotSuggestedPromptMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.BotSuggestedPromptMetadata;

        /**
         * Verifies a BotSuggestedPromptMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotSuggestedPromptMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotSuggestedPromptMetadata
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.BotSuggestedPromptMetadata;

        /**
         * Creates a plain object from a BotSuggestedPromptMetadata message. Also converts values to other types if specified.
         * @param message BotSuggestedPromptMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.BotSuggestedPromptMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotSuggestedPromptMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotSuggestedPromptMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotMediaMetadata. */
    interface IBotMediaMetadata {

        /** BotMediaMetadata fileSHA256 */
        fileSHA256?: (string|null);

        /** BotMediaMetadata mediaKey */
        mediaKey?: (string|null);

        /** BotMediaMetadata fileEncSHA256 */
        fileEncSHA256?: (string|null);

        /** BotMediaMetadata directPath */
        directPath?: (string|null);

        /** BotMediaMetadata mediaKeyTimestamp */
        mediaKeyTimestamp?: (number|Long|null);

        /** BotMediaMetadata mimetype */
        mimetype?: (string|null);
    }

    /** Represents a BotMediaMetadata. */
    class BotMediaMetadata implements IBotMediaMetadata {

        /**
         * Constructs a new BotMediaMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IBotMediaMetadata);

        /** BotMediaMetadata fileSHA256. */
        public fileSHA256: string;

        /** BotMediaMetadata mediaKey. */
        public mediaKey: string;

        /** BotMediaMetadata fileEncSHA256. */
        public fileEncSHA256: string;

        /** BotMediaMetadata directPath. */
        public directPath: string;

        /** BotMediaMetadata mediaKeyTimestamp. */
        public mediaKeyTimestamp: (number|Long);

        /** BotMediaMetadata mimetype. */
        public mimetype: string;

        /**
         * Creates a new BotMediaMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMediaMetadata instance
         */
        public static create(properties?: WAE2E.IBotMediaMetadata): WAE2E.BotMediaMetadata;

        /**
         * Encodes the specified BotMediaMetadata message. Does not implicitly {@link WAE2E.BotMediaMetadata.verify|verify} messages.
         * @param message BotMediaMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IBotMediaMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMediaMetadata message, length delimited. Does not implicitly {@link WAE2E.BotMediaMetadata.verify|verify} messages.
         * @param message BotMediaMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IBotMediaMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMediaMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotMediaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.BotMediaMetadata;

        /**
         * Decodes a BotMediaMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotMediaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.BotMediaMetadata;

        /**
         * Verifies a BotMediaMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMediaMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMediaMetadata
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.BotMediaMetadata;

        /**
         * Creates a plain object from a BotMediaMetadata message. Also converts values to other types if specified.
         * @param message BotMediaMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.BotMediaMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMediaMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotMediaMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotMemuMetadata. */
    interface IBotMemuMetadata {

        /** BotMemuMetadata faceImages */
        faceImages?: (WAE2E.IBotMediaMetadata[]|null);
    }

    /** Represents a BotMemuMetadata. */
    class BotMemuMetadata implements IBotMemuMetadata {

        /**
         * Constructs a new BotMemuMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IBotMemuMetadata);

        /** BotMemuMetadata faceImages. */
        public faceImages: WAE2E.IBotMediaMetadata[];

        /**
         * Creates a new BotMemuMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMemuMetadata instance
         */
        public static create(properties?: WAE2E.IBotMemuMetadata): WAE2E.BotMemuMetadata;

        /**
         * Encodes the specified BotMemuMetadata message. Does not implicitly {@link WAE2E.BotMemuMetadata.verify|verify} messages.
         * @param message BotMemuMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IBotMemuMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMemuMetadata message, length delimited. Does not implicitly {@link WAE2E.BotMemuMetadata.verify|verify} messages.
         * @param message BotMemuMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IBotMemuMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMemuMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotMemuMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.BotMemuMetadata;

        /**
         * Decodes a BotMemuMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotMemuMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.BotMemuMetadata;

        /**
         * Verifies a BotMemuMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMemuMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMemuMetadata
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.BotMemuMetadata;

        /**
         * Creates a plain object from a BotMemuMetadata message. Also converts values to other types if specified.
         * @param message BotMemuMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.BotMemuMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMemuMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotMemuMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotMetadata. */
    interface IBotMetadata {

        /** BotMetadata avatarMetadata */
        avatarMetadata?: (WAE2E.IBotAvatarMetadata|null);

        /** BotMetadata personaID */
        personaID?: (string|null);

        /** BotMetadata pluginMetadata */
        pluginMetadata?: (WAE2E.IBotPluginMetadata|null);

        /** BotMetadata suggestedPromptMetadata */
        suggestedPromptMetadata?: (WAE2E.IBotSuggestedPromptMetadata|null);

        /** BotMetadata invokerJID */
        invokerJID?: (string|null);

        /** BotMetadata searchMetadata */
        searchMetadata?: (WAE2E.IBotSearchMetadata|null);

        /** BotMetadata memuMetadata */
        memuMetadata?: (WAE2E.IBotMemuMetadata|null);

        /** BotMetadata timezone */
        timezone?: (string|null);

        /** BotMetadata reminderMetadata */
        reminderMetadata?: (WAE2E.IBotReminderMetadata|null);

        /** BotMetadata modelMetadata */
        modelMetadata?: (WAE2E.IBotModelMetadata|null);
    }

    /** Represents a BotMetadata. */
    class BotMetadata implements IBotMetadata {

        /**
         * Constructs a new BotMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IBotMetadata);

        /** BotMetadata avatarMetadata. */
        public avatarMetadata?: (WAE2E.IBotAvatarMetadata|null);

        /** BotMetadata personaID. */
        public personaID: string;

        /** BotMetadata pluginMetadata. */
        public pluginMetadata?: (WAE2E.IBotPluginMetadata|null);

        /** BotMetadata suggestedPromptMetadata. */
        public suggestedPromptMetadata?: (WAE2E.IBotSuggestedPromptMetadata|null);

        /** BotMetadata invokerJID. */
        public invokerJID: string;

        /** BotMetadata searchMetadata. */
        public searchMetadata?: (WAE2E.IBotSearchMetadata|null);

        /** BotMetadata memuMetadata. */
        public memuMetadata?: (WAE2E.IBotMemuMetadata|null);

        /** BotMetadata timezone. */
        public timezone: string;

        /** BotMetadata reminderMetadata. */
        public reminderMetadata?: (WAE2E.IBotReminderMetadata|null);

        /** BotMetadata modelMetadata. */
        public modelMetadata?: (WAE2E.IBotModelMetadata|null);

        /**
         * Creates a new BotMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMetadata instance
         */
        public static create(properties?: WAE2E.IBotMetadata): WAE2E.BotMetadata;

        /**
         * Encodes the specified BotMetadata message. Does not implicitly {@link WAE2E.BotMetadata.verify|verify} messages.
         * @param message BotMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IBotMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMetadata message, length delimited. Does not implicitly {@link WAE2E.BotMetadata.verify|verify} messages.
         * @param message BotMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IBotMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.BotMetadata;

        /**
         * Decodes a BotMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.BotMetadata;

        /**
         * Verifies a BotMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMetadata
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.BotMetadata;

        /**
         * Creates a plain object from a BotMetadata message. Also converts values to other types if specified.
         * @param message BotMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.BotMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeviceListMetadata. */
    interface IDeviceListMetadata {

        /** DeviceListMetadata senderKeyHash */
        senderKeyHash?: (Uint8Array|null);

        /** DeviceListMetadata senderTimestamp */
        senderTimestamp?: (number|Long|null);

        /** DeviceListMetadata senderKeyIndexes */
        senderKeyIndexes?: (number[]|null);

        /** DeviceListMetadata senderAccountType */
        senderAccountType?: (WAAdv.ADVEncryptionType|null);

        /** DeviceListMetadata receiverAccountType */
        receiverAccountType?: (WAAdv.ADVEncryptionType|null);

        /** DeviceListMetadata recipientKeyHash */
        recipientKeyHash?: (Uint8Array|null);

        /** DeviceListMetadata recipientTimestamp */
        recipientTimestamp?: (number|Long|null);

        /** DeviceListMetadata recipientKeyIndexes */
        recipientKeyIndexes?: (number[]|null);
    }

    /** Represents a DeviceListMetadata. */
    class DeviceListMetadata implements IDeviceListMetadata {

        /**
         * Constructs a new DeviceListMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IDeviceListMetadata);

        /** DeviceListMetadata senderKeyHash. */
        public senderKeyHash: Uint8Array;

        /** DeviceListMetadata senderTimestamp. */
        public senderTimestamp: (number|Long);

        /** DeviceListMetadata senderKeyIndexes. */
        public senderKeyIndexes: number[];

        /** DeviceListMetadata senderAccountType. */
        public senderAccountType: WAAdv.ADVEncryptionType;

        /** DeviceListMetadata receiverAccountType. */
        public receiverAccountType: WAAdv.ADVEncryptionType;

        /** DeviceListMetadata recipientKeyHash. */
        public recipientKeyHash: Uint8Array;

        /** DeviceListMetadata recipientTimestamp. */
        public recipientTimestamp: (number|Long);

        /** DeviceListMetadata recipientKeyIndexes. */
        public recipientKeyIndexes: number[];

        /**
         * Creates a new DeviceListMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceListMetadata instance
         */
        public static create(properties?: WAE2E.IDeviceListMetadata): WAE2E.DeviceListMetadata;

        /**
         * Encodes the specified DeviceListMetadata message. Does not implicitly {@link WAE2E.DeviceListMetadata.verify|verify} messages.
         * @param message DeviceListMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IDeviceListMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceListMetadata message, length delimited. Does not implicitly {@link WAE2E.DeviceListMetadata.verify|verify} messages.
         * @param message DeviceListMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IDeviceListMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceListMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceListMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.DeviceListMetadata;

        /**
         * Decodes a DeviceListMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceListMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.DeviceListMetadata;

        /**
         * Verifies a DeviceListMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceListMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceListMetadata
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.DeviceListMetadata;

        /**
         * Creates a plain object from a DeviceListMetadata message. Also converts values to other types if specified.
         * @param message DeviceListMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.DeviceListMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceListMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeviceListMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupInfoMetadata. */
    interface IGroupInfoMetadata {

        /** GroupInfoMetadata createdByCapi */
        createdByCapi?: (boolean|null);
    }

    /** Represents a GroupInfoMetadata. */
    class GroupInfoMetadata implements IGroupInfoMetadata {

        /**
         * Constructs a new GroupInfoMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IGroupInfoMetadata);

        /** GroupInfoMetadata createdByCapi. */
        public createdByCapi: boolean;

        /**
         * Creates a new GroupInfoMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupInfoMetadata instance
         */
        public static create(properties?: WAE2E.IGroupInfoMetadata): WAE2E.GroupInfoMetadata;

        /**
         * Encodes the specified GroupInfoMetadata message. Does not implicitly {@link WAE2E.GroupInfoMetadata.verify|verify} messages.
         * @param message GroupInfoMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IGroupInfoMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupInfoMetadata message, length delimited. Does not implicitly {@link WAE2E.GroupInfoMetadata.verify|verify} messages.
         * @param message GroupInfoMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IGroupInfoMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupInfoMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupInfoMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.GroupInfoMetadata;

        /**
         * Decodes a GroupInfoMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupInfoMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.GroupInfoMetadata;

        /**
         * Verifies a GroupInfoMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupInfoMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupInfoMetadata
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.GroupInfoMetadata;

        /**
         * Creates a plain object from a GroupInfoMetadata message. Also converts values to other types if specified.
         * @param message GroupInfoMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.GroupInfoMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupInfoMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupInfoMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an InteractiveAnnotation. */
    interface IInteractiveAnnotation {

        /** InteractiveAnnotation location */
        location?: (WAE2E.ILocation|null);

        /** InteractiveAnnotation newsletter */
        newsletter?: (WAE2E.ContextInfo.IForwardedNewsletterMessageInfo|null);

        /** InteractiveAnnotation polygonVertices */
        polygonVertices?: (WAE2E.IPoint[]|null);

        /** InteractiveAnnotation shouldSkipConfirmation */
        shouldSkipConfirmation?: (boolean|null);
    }

    /** Represents an InteractiveAnnotation. */
    class InteractiveAnnotation implements IInteractiveAnnotation {

        /**
         * Constructs a new InteractiveAnnotation.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IInteractiveAnnotation);

        /** InteractiveAnnotation location. */
        public location?: (WAE2E.ILocation|null);

        /** InteractiveAnnotation newsletter. */
        public newsletter?: (WAE2E.ContextInfo.IForwardedNewsletterMessageInfo|null);

        /** InteractiveAnnotation polygonVertices. */
        public polygonVertices: WAE2E.IPoint[];

        /** InteractiveAnnotation shouldSkipConfirmation. */
        public shouldSkipConfirmation: boolean;

        /** InteractiveAnnotation action. */
        public action?: ("location"|"newsletter");

        /**
         * Creates a new InteractiveAnnotation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InteractiveAnnotation instance
         */
        public static create(properties?: WAE2E.IInteractiveAnnotation): WAE2E.InteractiveAnnotation;

        /**
         * Encodes the specified InteractiveAnnotation message. Does not implicitly {@link WAE2E.InteractiveAnnotation.verify|verify} messages.
         * @param message InteractiveAnnotation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IInteractiveAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InteractiveAnnotation message, length delimited. Does not implicitly {@link WAE2E.InteractiveAnnotation.verify|verify} messages.
         * @param message InteractiveAnnotation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IInteractiveAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InteractiveAnnotation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InteractiveAnnotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.InteractiveAnnotation;

        /**
         * Decodes an InteractiveAnnotation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InteractiveAnnotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.InteractiveAnnotation;

        /**
         * Verifies an InteractiveAnnotation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InteractiveAnnotation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InteractiveAnnotation
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.InteractiveAnnotation;

        /**
         * Creates a plain object from an InteractiveAnnotation message. Also converts values to other types if specified.
         * @param message InteractiveAnnotation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.InteractiveAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InteractiveAnnotation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InteractiveAnnotation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Point. */
    interface IPoint {

        /** Point xDeprecated */
        xDeprecated?: (number|null);

        /** Point yDeprecated */
        yDeprecated?: (number|null);

        /** Point x */
        x?: (number|null);

        /** Point y */
        y?: (number|null);
    }

    /** Represents a Point. */
    class Point implements IPoint {

        /**
         * Constructs a new Point.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IPoint);

        /** Point xDeprecated. */
        public xDeprecated: number;

        /** Point yDeprecated. */
        public yDeprecated: number;

        /** Point x. */
        public x: number;

        /** Point y. */
        public y: number;

        /**
         * Creates a new Point instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Point instance
         */
        public static create(properties?: WAE2E.IPoint): WAE2E.Point;

        /**
         * Encodes the specified Point message. Does not implicitly {@link WAE2E.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link WAE2E.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Point;

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Point;

        /**
         * Verifies a Point message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.Point;

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @param message Point
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Point
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Location. */
    interface ILocation {

        /** Location degreesLatitude */
        degreesLatitude?: (number|null);

        /** Location degreesLongitude */
        degreesLongitude?: (number|null);

        /** Location name */
        name?: (string|null);
    }

    /** Represents a Location. */
    class Location implements ILocation {

        /**
         * Constructs a new Location.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.ILocation);

        /** Location degreesLatitude. */
        public degreesLatitude: number;

        /** Location degreesLongitude. */
        public degreesLongitude: number;

        /** Location name. */
        public name: string;

        /**
         * Creates a new Location instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Location instance
         */
        public static create(properties?: WAE2E.ILocation): WAE2E.Location;

        /**
         * Encodes the specified Location message. Does not implicitly {@link WAE2E.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link WAE2E.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Location;

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Location;

        /**
         * Verifies a Location message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Location
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.Location;

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @param message Location
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Location to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Location
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TemplateButton. */
    interface ITemplateButton {

        /** TemplateButton quickReplyButton */
        quickReplyButton?: (WAE2E.TemplateButton.IQuickReplyButton|null);

        /** TemplateButton urlButton */
        urlButton?: (WAE2E.TemplateButton.IURLButton|null);

        /** TemplateButton callButton */
        callButton?: (WAE2E.TemplateButton.ICallButton|null);

        /** TemplateButton index */
        index?: (number|null);
    }

    /** Represents a TemplateButton. */
    class TemplateButton implements ITemplateButton {

        /**
         * Constructs a new TemplateButton.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.ITemplateButton);

        /** TemplateButton quickReplyButton. */
        public quickReplyButton?: (WAE2E.TemplateButton.IQuickReplyButton|null);

        /** TemplateButton urlButton. */
        public urlButton?: (WAE2E.TemplateButton.IURLButton|null);

        /** TemplateButton callButton. */
        public callButton?: (WAE2E.TemplateButton.ICallButton|null);

        /** TemplateButton index. */
        public index: number;

        /** TemplateButton button. */
        public button?: ("quickReplyButton"|"urlButton"|"callButton");

        /**
         * Creates a new TemplateButton instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TemplateButton instance
         */
        public static create(properties?: WAE2E.ITemplateButton): WAE2E.TemplateButton;

        /**
         * Encodes the specified TemplateButton message. Does not implicitly {@link WAE2E.TemplateButton.verify|verify} messages.
         * @param message TemplateButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.ITemplateButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TemplateButton message, length delimited. Does not implicitly {@link WAE2E.TemplateButton.verify|verify} messages.
         * @param message TemplateButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.ITemplateButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TemplateButton message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TemplateButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.TemplateButton;

        /**
         * Decodes a TemplateButton message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TemplateButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.TemplateButton;

        /**
         * Verifies a TemplateButton message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TemplateButton message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TemplateButton
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.TemplateButton;

        /**
         * Creates a plain object from a TemplateButton message. Also converts values to other types if specified.
         * @param message TemplateButton
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.TemplateButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TemplateButton to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TemplateButton
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace TemplateButton {

        /** Properties of a CallButton. */
        interface ICallButton {

            /** CallButton displayText */
            displayText?: (WAE2E.Message.IHighlyStructuredMessage|null);

            /** CallButton phoneNumber */
            phoneNumber?: (WAE2E.Message.IHighlyStructuredMessage|null);
        }

        /** Represents a CallButton. */
        class CallButton implements ICallButton {

            /**
             * Constructs a new CallButton.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.TemplateButton.ICallButton);

            /** CallButton displayText. */
            public displayText?: (WAE2E.Message.IHighlyStructuredMessage|null);

            /** CallButton phoneNumber. */
            public phoneNumber?: (WAE2E.Message.IHighlyStructuredMessage|null);

            /**
             * Creates a new CallButton instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CallButton instance
             */
            public static create(properties?: WAE2E.TemplateButton.ICallButton): WAE2E.TemplateButton.CallButton;

            /**
             * Encodes the specified CallButton message. Does not implicitly {@link WAE2E.TemplateButton.CallButton.verify|verify} messages.
             * @param message CallButton message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.TemplateButton.ICallButton, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CallButton message, length delimited. Does not implicitly {@link WAE2E.TemplateButton.CallButton.verify|verify} messages.
             * @param message CallButton message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.TemplateButton.ICallButton, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CallButton message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CallButton
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.TemplateButton.CallButton;

            /**
             * Decodes a CallButton message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CallButton
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.TemplateButton.CallButton;

            /**
             * Verifies a CallButton message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CallButton message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CallButton
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.TemplateButton.CallButton;

            /**
             * Creates a plain object from a CallButton message. Also converts values to other types if specified.
             * @param message CallButton
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.TemplateButton.CallButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CallButton to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CallButton
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a URLButton. */
        interface IURLButton {

            /** URLButton displayText */
            displayText?: (WAE2E.Message.IHighlyStructuredMessage|null);

            /** URLButton URL */
            URL?: (WAE2E.Message.IHighlyStructuredMessage|null);
        }

        /** Represents a URLButton. */
        class URLButton implements IURLButton {

            /**
             * Constructs a new URLButton.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.TemplateButton.IURLButton);

            /** URLButton displayText. */
            public displayText?: (WAE2E.Message.IHighlyStructuredMessage|null);

            /** URLButton URL. */
            public URL?: (WAE2E.Message.IHighlyStructuredMessage|null);

            /**
             * Creates a new URLButton instance using the specified properties.
             * @param [properties] Properties to set
             * @returns URLButton instance
             */
            public static create(properties?: WAE2E.TemplateButton.IURLButton): WAE2E.TemplateButton.URLButton;

            /**
             * Encodes the specified URLButton message. Does not implicitly {@link WAE2E.TemplateButton.URLButton.verify|verify} messages.
             * @param message URLButton message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.TemplateButton.IURLButton, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified URLButton message, length delimited. Does not implicitly {@link WAE2E.TemplateButton.URLButton.verify|verify} messages.
             * @param message URLButton message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.TemplateButton.IURLButton, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a URLButton message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns URLButton
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.TemplateButton.URLButton;

            /**
             * Decodes a URLButton message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns URLButton
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.TemplateButton.URLButton;

            /**
             * Verifies a URLButton message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a URLButton message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns URLButton
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.TemplateButton.URLButton;

            /**
             * Creates a plain object from a URLButton message. Also converts values to other types if specified.
             * @param message URLButton
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.TemplateButton.URLButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this URLButton to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for URLButton
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a QuickReplyButton. */
        interface IQuickReplyButton {

            /** QuickReplyButton displayText */
            displayText?: (WAE2E.Message.IHighlyStructuredMessage|null);

            /** QuickReplyButton ID */
            ID?: (string|null);
        }

        /** Represents a QuickReplyButton. */
        class QuickReplyButton implements IQuickReplyButton {

            /**
             * Constructs a new QuickReplyButton.
             * @param [properties] Properties to set
             */
            constructor(properties?: WAE2E.TemplateButton.IQuickReplyButton);

            /** QuickReplyButton displayText. */
            public displayText?: (WAE2E.Message.IHighlyStructuredMessage|null);

            /** QuickReplyButton ID. */
            public ID: string;

            /**
             * Creates a new QuickReplyButton instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QuickReplyButton instance
             */
            public static create(properties?: WAE2E.TemplateButton.IQuickReplyButton): WAE2E.TemplateButton.QuickReplyButton;

            /**
             * Encodes the specified QuickReplyButton message. Does not implicitly {@link WAE2E.TemplateButton.QuickReplyButton.verify|verify} messages.
             * @param message QuickReplyButton message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WAE2E.TemplateButton.IQuickReplyButton, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QuickReplyButton message, length delimited. Does not implicitly {@link WAE2E.TemplateButton.QuickReplyButton.verify|verify} messages.
             * @param message QuickReplyButton message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WAE2E.TemplateButton.IQuickReplyButton, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QuickReplyButton message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QuickReplyButton
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.TemplateButton.QuickReplyButton;

            /**
             * Decodes a QuickReplyButton message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QuickReplyButton
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.TemplateButton.QuickReplyButton;

            /**
             * Verifies a QuickReplyButton message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QuickReplyButton message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QuickReplyButton
             */
            public static fromObject(object: { [k: string]: any }): WAE2E.TemplateButton.QuickReplyButton;

            /**
             * Creates a plain object from a QuickReplyButton message. Also converts values to other types if specified.
             * @param message QuickReplyButton
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WAE2E.TemplateButton.QuickReplyButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QuickReplyButton to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for QuickReplyButton
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Money. */
    interface IMoney {

        /** Money value */
        value?: (number|Long|null);

        /** Money offset */
        offset?: (number|null);

        /** Money currencyCode */
        currencyCode?: (string|null);
    }

    /** Represents a Money. */
    class Money implements IMoney {

        /**
         * Constructs a new Money.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IMoney);

        /** Money value. */
        public value: (number|Long);

        /** Money offset. */
        public offset: number;

        /** Money currencyCode. */
        public currencyCode: string;

        /**
         * Creates a new Money instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Money instance
         */
        public static create(properties?: WAE2E.IMoney): WAE2E.Money;

        /**
         * Encodes the specified Money message. Does not implicitly {@link WAE2E.Money.verify|verify} messages.
         * @param message Money message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Money message, length delimited. Does not implicitly {@link WAE2E.Money.verify|verify} messages.
         * @param message Money message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Money message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Money
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.Money;

        /**
         * Decodes a Money message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Money
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.Money;

        /**
         * Verifies a Money message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Money message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Money
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.Money;

        /**
         * Creates a plain object from a Money message. Also converts values to other types if specified.
         * @param message Money
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.Money, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Money to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Money
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ActionLink. */
    interface IActionLink {

        /** ActionLink URL */
        URL?: (string|null);

        /** ActionLink buttonTitle */
        buttonTitle?: (string|null);
    }

    /** Represents an ActionLink. */
    class ActionLink implements IActionLink {

        /**
         * Constructs a new ActionLink.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IActionLink);

        /** ActionLink URL. */
        public URL: string;

        /** ActionLink buttonTitle. */
        public buttonTitle: string;

        /**
         * Creates a new ActionLink instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionLink instance
         */
        public static create(properties?: WAE2E.IActionLink): WAE2E.ActionLink;

        /**
         * Encodes the specified ActionLink message. Does not implicitly {@link WAE2E.ActionLink.verify|verify} messages.
         * @param message ActionLink message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IActionLink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActionLink message, length delimited. Does not implicitly {@link WAE2E.ActionLink.verify|verify} messages.
         * @param message ActionLink message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IActionLink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActionLink message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.ActionLink;

        /**
         * Decodes an ActionLink message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.ActionLink;

        /**
         * Verifies an ActionLink message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActionLink message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActionLink
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.ActionLink;

        /**
         * Creates a plain object from an ActionLink message. Also converts values to other types if specified.
         * @param message ActionLink
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.ActionLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActionLink to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ActionLink
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GroupMention. */
    interface IGroupMention {

        /** GroupMention groupJID */
        groupJID?: (string|null);

        /** GroupMention groupSubject */
        groupSubject?: (string|null);
    }

    /** Represents a GroupMention. */
    class GroupMention implements IGroupMention {

        /**
         * Constructs a new GroupMention.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IGroupMention);

        /** GroupMention groupJID. */
        public groupJID: string;

        /** GroupMention groupSubject. */
        public groupSubject: string;

        /**
         * Creates a new GroupMention instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupMention instance
         */
        public static create(properties?: WAE2E.IGroupMention): WAE2E.GroupMention;

        /**
         * Encodes the specified GroupMention message. Does not implicitly {@link WAE2E.GroupMention.verify|verify} messages.
         * @param message GroupMention message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IGroupMention, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupMention message, length delimited. Does not implicitly {@link WAE2E.GroupMention.verify|verify} messages.
         * @param message GroupMention message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IGroupMention, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupMention message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupMention
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.GroupMention;

        /**
         * Decodes a GroupMention message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupMention
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.GroupMention;

        /**
         * Verifies a GroupMention message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupMention message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupMention
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.GroupMention;

        /**
         * Creates a plain object from a GroupMention message. Also converts values to other types if specified.
         * @param message GroupMention
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.GroupMention, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupMention to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GroupMention
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageSecretMessage. */
    interface IMessageSecretMessage {

        /** MessageSecretMessage version */
        version?: (number|null);

        /** MessageSecretMessage encIV */
        encIV?: (Uint8Array|null);

        /** MessageSecretMessage encPayload */
        encPayload?: (Uint8Array|null);
    }

    /** Represents a MessageSecretMessage. */
    class MessageSecretMessage implements IMessageSecretMessage {

        /**
         * Constructs a new MessageSecretMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IMessageSecretMessage);

        /** MessageSecretMessage version. */
        public version: number;

        /** MessageSecretMessage encIV. */
        public encIV: Uint8Array;

        /** MessageSecretMessage encPayload. */
        public encPayload: Uint8Array;

        /**
         * Creates a new MessageSecretMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageSecretMessage instance
         */
        public static create(properties?: WAE2E.IMessageSecretMessage): WAE2E.MessageSecretMessage;

        /**
         * Encodes the specified MessageSecretMessage message. Does not implicitly {@link WAE2E.MessageSecretMessage.verify|verify} messages.
         * @param message MessageSecretMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IMessageSecretMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageSecretMessage message, length delimited. Does not implicitly {@link WAE2E.MessageSecretMessage.verify|verify} messages.
         * @param message MessageSecretMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IMessageSecretMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageSecretMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageSecretMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.MessageSecretMessage;

        /**
         * Decodes a MessageSecretMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageSecretMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.MessageSecretMessage;

        /**
         * Verifies a MessageSecretMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageSecretMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageSecretMessage
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.MessageSecretMessage;

        /**
         * Creates a plain object from a MessageSecretMessage message. Also converts values to other types if specified.
         * @param message MessageSecretMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.MessageSecretMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageSecretMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageSecretMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MediaNotifyMessage. */
    interface IMediaNotifyMessage {

        /** MediaNotifyMessage expressPathURL */
        expressPathURL?: (string|null);

        /** MediaNotifyMessage fileEncSHA256 */
        fileEncSHA256?: (Uint8Array|null);

        /** MediaNotifyMessage fileLength */
        fileLength?: (number|Long|null);
    }

    /** Represents a MediaNotifyMessage. */
    class MediaNotifyMessage implements IMediaNotifyMessage {

        /**
         * Constructs a new MediaNotifyMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.IMediaNotifyMessage);

        /** MediaNotifyMessage expressPathURL. */
        public expressPathURL: string;

        /** MediaNotifyMessage fileEncSHA256. */
        public fileEncSHA256: Uint8Array;

        /** MediaNotifyMessage fileLength. */
        public fileLength: (number|Long);

        /**
         * Creates a new MediaNotifyMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MediaNotifyMessage instance
         */
        public static create(properties?: WAE2E.IMediaNotifyMessage): WAE2E.MediaNotifyMessage;

        /**
         * Encodes the specified MediaNotifyMessage message. Does not implicitly {@link WAE2E.MediaNotifyMessage.verify|verify} messages.
         * @param message MediaNotifyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.IMediaNotifyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MediaNotifyMessage message, length delimited. Does not implicitly {@link WAE2E.MediaNotifyMessage.verify|verify} messages.
         * @param message MediaNotifyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.IMediaNotifyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MediaNotifyMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MediaNotifyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.MediaNotifyMessage;

        /**
         * Decodes a MediaNotifyMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MediaNotifyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.MediaNotifyMessage;

        /**
         * Verifies a MediaNotifyMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MediaNotifyMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MediaNotifyMessage
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.MediaNotifyMessage;

        /**
         * Creates a plain object from a MediaNotifyMessage message. Also converts values to other types if specified.
         * @param message MediaNotifyMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.MediaNotifyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MediaNotifyMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MediaNotifyMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LIDMigrationMappingSyncMessage. */
    interface ILIDMigrationMappingSyncMessage {

        /** LIDMigrationMappingSyncMessage encodedMappingPayload */
        encodedMappingPayload?: (Uint8Array|null);
    }

    /** Represents a LIDMigrationMappingSyncMessage. */
    class LIDMigrationMappingSyncMessage implements ILIDMigrationMappingSyncMessage {

        /**
         * Constructs a new LIDMigrationMappingSyncMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAE2E.ILIDMigrationMappingSyncMessage);

        /** LIDMigrationMappingSyncMessage encodedMappingPayload. */
        public encodedMappingPayload: Uint8Array;

        /**
         * Creates a new LIDMigrationMappingSyncMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LIDMigrationMappingSyncMessage instance
         */
        public static create(properties?: WAE2E.ILIDMigrationMappingSyncMessage): WAE2E.LIDMigrationMappingSyncMessage;

        /**
         * Encodes the specified LIDMigrationMappingSyncMessage message. Does not implicitly {@link WAE2E.LIDMigrationMappingSyncMessage.verify|verify} messages.
         * @param message LIDMigrationMappingSyncMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAE2E.ILIDMigrationMappingSyncMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LIDMigrationMappingSyncMessage message, length delimited. Does not implicitly {@link WAE2E.LIDMigrationMappingSyncMessage.verify|verify} messages.
         * @param message LIDMigrationMappingSyncMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAE2E.ILIDMigrationMappingSyncMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LIDMigrationMappingSyncMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LIDMigrationMappingSyncMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAE2E.LIDMigrationMappingSyncMessage;

        /**
         * Decodes a LIDMigrationMappingSyncMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LIDMigrationMappingSyncMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAE2E.LIDMigrationMappingSyncMessage;

        /**
         * Verifies a LIDMigrationMappingSyncMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LIDMigrationMappingSyncMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LIDMigrationMappingSyncMessage
         */
        public static fromObject(object: { [k: string]: any }): WAE2E.LIDMigrationMappingSyncMessage;

        /**
         * Creates a plain object from a LIDMigrationMappingSyncMessage message. Also converts values to other types if specified.
         * @param message LIDMigrationMappingSyncMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAE2E.LIDMigrationMappingSyncMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LIDMigrationMappingSyncMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LIDMigrationMappingSyncMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace WAAdv. */
export namespace WAAdv {

    /** ADVEncryptionType enum. */
    enum ADVEncryptionType {
        E2EE = 0,
        HOSTED = 1
    }

    /** Properties of a ADVKeyIndexList. */
    interface IADVKeyIndexList {

        /** ADVKeyIndexList rawID */
        rawID?: (number|null);

        /** ADVKeyIndexList timestamp */
        timestamp?: (number|Long|null);

        /** ADVKeyIndexList currentIndex */
        currentIndex?: (number|null);

        /** ADVKeyIndexList validIndexes */
        validIndexes?: (number[]|null);

        /** ADVKeyIndexList accountType */
        accountType?: (WAAdv.ADVEncryptionType|null);
    }

    /** Represents a ADVKeyIndexList. */
    class ADVKeyIndexList implements IADVKeyIndexList {

        /**
         * Constructs a new ADVKeyIndexList.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAAdv.IADVKeyIndexList);

        /** ADVKeyIndexList rawID. */
        public rawID: number;

        /** ADVKeyIndexList timestamp. */
        public timestamp: (number|Long);

        /** ADVKeyIndexList currentIndex. */
        public currentIndex: number;

        /** ADVKeyIndexList validIndexes. */
        public validIndexes: number[];

        /** ADVKeyIndexList accountType. */
        public accountType: WAAdv.ADVEncryptionType;

        /**
         * Creates a new ADVKeyIndexList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVKeyIndexList instance
         */
        public static create(properties?: WAAdv.IADVKeyIndexList): WAAdv.ADVKeyIndexList;

        /**
         * Encodes the specified ADVKeyIndexList message. Does not implicitly {@link WAAdv.ADVKeyIndexList.verify|verify} messages.
         * @param message ADVKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAAdv.IADVKeyIndexList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVKeyIndexList message, length delimited. Does not implicitly {@link WAAdv.ADVKeyIndexList.verify|verify} messages.
         * @param message ADVKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAAdv.IADVKeyIndexList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVKeyIndexList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAAdv.ADVKeyIndexList;

        /**
         * Decodes a ADVKeyIndexList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAAdv.ADVKeyIndexList;

        /**
         * Verifies a ADVKeyIndexList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVKeyIndexList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVKeyIndexList
         */
        public static fromObject(object: { [k: string]: any }): WAAdv.ADVKeyIndexList;

        /**
         * Creates a plain object from a ADVKeyIndexList message. Also converts values to other types if specified.
         * @param message ADVKeyIndexList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAAdv.ADVKeyIndexList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVKeyIndexList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ADVKeyIndexList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ADVSignedKeyIndexList. */
    interface IADVSignedKeyIndexList {

        /** ADVSignedKeyIndexList details */
        details?: (Uint8Array|null);

        /** ADVSignedKeyIndexList accountSignature */
        accountSignature?: (Uint8Array|null);

        /** ADVSignedKeyIndexList accountSignatureKey */
        accountSignatureKey?: (Uint8Array|null);
    }

    /** Represents a ADVSignedKeyIndexList. */
    class ADVSignedKeyIndexList implements IADVSignedKeyIndexList {

        /**
         * Constructs a new ADVSignedKeyIndexList.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAAdv.IADVSignedKeyIndexList);

        /** ADVSignedKeyIndexList details. */
        public details: Uint8Array;

        /** ADVSignedKeyIndexList accountSignature. */
        public accountSignature: Uint8Array;

        /** ADVSignedKeyIndexList accountSignatureKey. */
        public accountSignatureKey: Uint8Array;

        /**
         * Creates a new ADVSignedKeyIndexList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVSignedKeyIndexList instance
         */
        public static create(properties?: WAAdv.IADVSignedKeyIndexList): WAAdv.ADVSignedKeyIndexList;

        /**
         * Encodes the specified ADVSignedKeyIndexList message. Does not implicitly {@link WAAdv.ADVSignedKeyIndexList.verify|verify} messages.
         * @param message ADVSignedKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAAdv.IADVSignedKeyIndexList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVSignedKeyIndexList message, length delimited. Does not implicitly {@link WAAdv.ADVSignedKeyIndexList.verify|verify} messages.
         * @param message ADVSignedKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAAdv.IADVSignedKeyIndexList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVSignedKeyIndexList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVSignedKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAAdv.ADVSignedKeyIndexList;

        /**
         * Decodes a ADVSignedKeyIndexList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVSignedKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAAdv.ADVSignedKeyIndexList;

        /**
         * Verifies a ADVSignedKeyIndexList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVSignedKeyIndexList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVSignedKeyIndexList
         */
        public static fromObject(object: { [k: string]: any }): WAAdv.ADVSignedKeyIndexList;

        /**
         * Creates a plain object from a ADVSignedKeyIndexList message. Also converts values to other types if specified.
         * @param message ADVSignedKeyIndexList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAAdv.ADVSignedKeyIndexList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVSignedKeyIndexList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ADVSignedKeyIndexList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ADVDeviceIdentity. */
    interface IADVDeviceIdentity {

        /** ADVDeviceIdentity rawID */
        rawID?: (number|null);

        /** ADVDeviceIdentity timestamp */
        timestamp?: (number|Long|null);

        /** ADVDeviceIdentity keyIndex */
        keyIndex?: (number|null);

        /** ADVDeviceIdentity accountType */
        accountType?: (WAAdv.ADVEncryptionType|null);

        /** ADVDeviceIdentity deviceType */
        deviceType?: (WAAdv.ADVEncryptionType|null);
    }

    /** Represents a ADVDeviceIdentity. */
    class ADVDeviceIdentity implements IADVDeviceIdentity {

        /**
         * Constructs a new ADVDeviceIdentity.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAAdv.IADVDeviceIdentity);

        /** ADVDeviceIdentity rawID. */
        public rawID: number;

        /** ADVDeviceIdentity timestamp. */
        public timestamp: (number|Long);

        /** ADVDeviceIdentity keyIndex. */
        public keyIndex: number;

        /** ADVDeviceIdentity accountType. */
        public accountType: WAAdv.ADVEncryptionType;

        /** ADVDeviceIdentity deviceType. */
        public deviceType: WAAdv.ADVEncryptionType;

        /**
         * Creates a new ADVDeviceIdentity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVDeviceIdentity instance
         */
        public static create(properties?: WAAdv.IADVDeviceIdentity): WAAdv.ADVDeviceIdentity;

        /**
         * Encodes the specified ADVDeviceIdentity message. Does not implicitly {@link WAAdv.ADVDeviceIdentity.verify|verify} messages.
         * @param message ADVDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAAdv.IADVDeviceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVDeviceIdentity message, length delimited. Does not implicitly {@link WAAdv.ADVDeviceIdentity.verify|verify} messages.
         * @param message ADVDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAAdv.IADVDeviceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVDeviceIdentity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAAdv.ADVDeviceIdentity;

        /**
         * Decodes a ADVDeviceIdentity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAAdv.ADVDeviceIdentity;

        /**
         * Verifies a ADVDeviceIdentity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVDeviceIdentity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVDeviceIdentity
         */
        public static fromObject(object: { [k: string]: any }): WAAdv.ADVDeviceIdentity;

        /**
         * Creates a plain object from a ADVDeviceIdentity message. Also converts values to other types if specified.
         * @param message ADVDeviceIdentity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAAdv.ADVDeviceIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVDeviceIdentity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ADVDeviceIdentity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ADVSignedDeviceIdentity. */
    interface IADVSignedDeviceIdentity {

        /** ADVSignedDeviceIdentity details */
        details?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity accountSignatureKey */
        accountSignatureKey?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity accountSignature */
        accountSignature?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity deviceSignature */
        deviceSignature?: (Uint8Array|null);
    }

    /** Represents a ADVSignedDeviceIdentity. */
    class ADVSignedDeviceIdentity implements IADVSignedDeviceIdentity {

        /**
         * Constructs a new ADVSignedDeviceIdentity.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAAdv.IADVSignedDeviceIdentity);

        /** ADVSignedDeviceIdentity details. */
        public details: Uint8Array;

        /** ADVSignedDeviceIdentity accountSignatureKey. */
        public accountSignatureKey: Uint8Array;

        /** ADVSignedDeviceIdentity accountSignature. */
        public accountSignature: Uint8Array;

        /** ADVSignedDeviceIdentity deviceSignature. */
        public deviceSignature: Uint8Array;

        /**
         * Creates a new ADVSignedDeviceIdentity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVSignedDeviceIdentity instance
         */
        public static create(properties?: WAAdv.IADVSignedDeviceIdentity): WAAdv.ADVSignedDeviceIdentity;

        /**
         * Encodes the specified ADVSignedDeviceIdentity message. Does not implicitly {@link WAAdv.ADVSignedDeviceIdentity.verify|verify} messages.
         * @param message ADVSignedDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAAdv.IADVSignedDeviceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVSignedDeviceIdentity message, length delimited. Does not implicitly {@link WAAdv.ADVSignedDeviceIdentity.verify|verify} messages.
         * @param message ADVSignedDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAAdv.IADVSignedDeviceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVSignedDeviceIdentity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVSignedDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAAdv.ADVSignedDeviceIdentity;

        /**
         * Decodes a ADVSignedDeviceIdentity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVSignedDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAAdv.ADVSignedDeviceIdentity;

        /**
         * Verifies a ADVSignedDeviceIdentity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVSignedDeviceIdentity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVSignedDeviceIdentity
         */
        public static fromObject(object: { [k: string]: any }): WAAdv.ADVSignedDeviceIdentity;

        /**
         * Creates a plain object from a ADVSignedDeviceIdentity message. Also converts values to other types if specified.
         * @param message ADVSignedDeviceIdentity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAAdv.ADVSignedDeviceIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVSignedDeviceIdentity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ADVSignedDeviceIdentity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ADVSignedDeviceIdentityHMAC. */
    interface IADVSignedDeviceIdentityHMAC {

        /** ADVSignedDeviceIdentityHMAC details */
        details?: (Uint8Array|null);

        /** ADVSignedDeviceIdentityHMAC HMAC */
        HMAC?: (Uint8Array|null);

        /** ADVSignedDeviceIdentityHMAC accountType */
        accountType?: (WAAdv.ADVEncryptionType|null);
    }

    /** Represents a ADVSignedDeviceIdentityHMAC. */
    class ADVSignedDeviceIdentityHMAC implements IADVSignedDeviceIdentityHMAC {

        /**
         * Constructs a new ADVSignedDeviceIdentityHMAC.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAAdv.IADVSignedDeviceIdentityHMAC);

        /** ADVSignedDeviceIdentityHMAC details. */
        public details: Uint8Array;

        /** ADVSignedDeviceIdentityHMAC HMAC. */
        public HMAC: Uint8Array;

        /** ADVSignedDeviceIdentityHMAC accountType. */
        public accountType: WAAdv.ADVEncryptionType;

        /**
         * Creates a new ADVSignedDeviceIdentityHMAC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVSignedDeviceIdentityHMAC instance
         */
        public static create(properties?: WAAdv.IADVSignedDeviceIdentityHMAC): WAAdv.ADVSignedDeviceIdentityHMAC;

        /**
         * Encodes the specified ADVSignedDeviceIdentityHMAC message. Does not implicitly {@link WAAdv.ADVSignedDeviceIdentityHMAC.verify|verify} messages.
         * @param message ADVSignedDeviceIdentityHMAC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAAdv.IADVSignedDeviceIdentityHMAC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVSignedDeviceIdentityHMAC message, length delimited. Does not implicitly {@link WAAdv.ADVSignedDeviceIdentityHMAC.verify|verify} messages.
         * @param message ADVSignedDeviceIdentityHMAC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAAdv.IADVSignedDeviceIdentityHMAC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVSignedDeviceIdentityHMAC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVSignedDeviceIdentityHMAC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAAdv.ADVSignedDeviceIdentityHMAC;

        /**
         * Decodes a ADVSignedDeviceIdentityHMAC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVSignedDeviceIdentityHMAC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAAdv.ADVSignedDeviceIdentityHMAC;

        /**
         * Verifies a ADVSignedDeviceIdentityHMAC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVSignedDeviceIdentityHMAC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVSignedDeviceIdentityHMAC
         */
        public static fromObject(object: { [k: string]: any }): WAAdv.ADVSignedDeviceIdentityHMAC;

        /**
         * Creates a plain object from a ADVSignedDeviceIdentityHMAC message. Also converts values to other types if specified.
         * @param message ADVSignedDeviceIdentityHMAC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAAdv.ADVSignedDeviceIdentityHMAC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVSignedDeviceIdentityHMAC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ADVSignedDeviceIdentityHMAC
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace WAMmsRetry. */
export namespace WAMmsRetry {

    /** Properties of a MediaRetryNotification. */
    interface IMediaRetryNotification {

        /** MediaRetryNotification stanzaID */
        stanzaID?: (string|null);

        /** MediaRetryNotification directPath */
        directPath?: (string|null);

        /** MediaRetryNotification result */
        result?: (WAMmsRetry.MediaRetryNotification.ResultType|null);
    }

    /** Represents a MediaRetryNotification. */
    class MediaRetryNotification implements IMediaRetryNotification {

        /**
         * Constructs a new MediaRetryNotification.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAMmsRetry.IMediaRetryNotification);

        /** MediaRetryNotification stanzaID. */
        public stanzaID: string;

        /** MediaRetryNotification directPath. */
        public directPath: string;

        /** MediaRetryNotification result. */
        public result: WAMmsRetry.MediaRetryNotification.ResultType;

        /**
         * Creates a new MediaRetryNotification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MediaRetryNotification instance
         */
        public static create(properties?: WAMmsRetry.IMediaRetryNotification): WAMmsRetry.MediaRetryNotification;

        /**
         * Encodes the specified MediaRetryNotification message. Does not implicitly {@link WAMmsRetry.MediaRetryNotification.verify|verify} messages.
         * @param message MediaRetryNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAMmsRetry.IMediaRetryNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MediaRetryNotification message, length delimited. Does not implicitly {@link WAMmsRetry.MediaRetryNotification.verify|verify} messages.
         * @param message MediaRetryNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAMmsRetry.IMediaRetryNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MediaRetryNotification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MediaRetryNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAMmsRetry.MediaRetryNotification;

        /**
         * Decodes a MediaRetryNotification message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MediaRetryNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAMmsRetry.MediaRetryNotification;

        /**
         * Verifies a MediaRetryNotification message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MediaRetryNotification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MediaRetryNotification
         */
        public static fromObject(object: { [k: string]: any }): WAMmsRetry.MediaRetryNotification;

        /**
         * Creates a plain object from a MediaRetryNotification message. Also converts values to other types if specified.
         * @param message MediaRetryNotification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAMmsRetry.MediaRetryNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MediaRetryNotification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MediaRetryNotification
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MediaRetryNotification {

        /** ResultType enum. */
        enum ResultType {
            GENERAL_ERROR = 0,
            SUCCESS = 1,
            NOT_FOUND = 2,
            DECRYPTION_ERROR = 3
        }
    }

    /** Properties of a ServerErrorReceipt. */
    interface IServerErrorReceipt {

        /** ServerErrorReceipt stanzaID */
        stanzaID?: (string|null);
    }

    /** Represents a ServerErrorReceipt. */
    class ServerErrorReceipt implements IServerErrorReceipt {

        /**
         * Constructs a new ServerErrorReceipt.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAMmsRetry.IServerErrorReceipt);

        /** ServerErrorReceipt stanzaID. */
        public stanzaID: string;

        /**
         * Creates a new ServerErrorReceipt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerErrorReceipt instance
         */
        public static create(properties?: WAMmsRetry.IServerErrorReceipt): WAMmsRetry.ServerErrorReceipt;

        /**
         * Encodes the specified ServerErrorReceipt message. Does not implicitly {@link WAMmsRetry.ServerErrorReceipt.verify|verify} messages.
         * @param message ServerErrorReceipt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAMmsRetry.IServerErrorReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerErrorReceipt message, length delimited. Does not implicitly {@link WAMmsRetry.ServerErrorReceipt.verify|verify} messages.
         * @param message ServerErrorReceipt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAMmsRetry.IServerErrorReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerErrorReceipt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerErrorReceipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAMmsRetry.ServerErrorReceipt;

        /**
         * Decodes a ServerErrorReceipt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerErrorReceipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAMmsRetry.ServerErrorReceipt;

        /**
         * Verifies a ServerErrorReceipt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerErrorReceipt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerErrorReceipt
         */
        public static fromObject(object: { [k: string]: any }): WAMmsRetry.ServerErrorReceipt;

        /**
         * Creates a plain object from a ServerErrorReceipt message. Also converts values to other types if specified.
         * @param message ServerErrorReceipt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAMmsRetry.ServerErrorReceipt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerErrorReceipt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerErrorReceipt
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace WAProtocol. */
export namespace WAProtocol {

    /** Properties of a MessageKey. */
    interface IMessageKey {

        /** MessageKey remoteJID */
        remoteJID?: (string|null);

        /** MessageKey fromMe */
        fromMe?: (boolean|null);

        /** MessageKey ID */
        ID?: (string|null);

        /** MessageKey participant */
        participant?: (string|null);
    }

    /** Represents a MessageKey. */
    class MessageKey implements IMessageKey {

        /**
         * Constructs a new MessageKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: WAProtocol.IMessageKey);

        /** MessageKey remoteJID. */
        public remoteJID: string;

        /** MessageKey fromMe. */
        public fromMe: boolean;

        /** MessageKey ID. */
        public ID: string;

        /** MessageKey participant. */
        public participant: string;

        /**
         * Creates a new MessageKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageKey instance
         */
        public static create(properties?: WAProtocol.IMessageKey): WAProtocol.MessageKey;

        /**
         * Encodes the specified MessageKey message. Does not implicitly {@link WAProtocol.MessageKey.verify|verify} messages.
         * @param message MessageKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WAProtocol.IMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link WAProtocol.MessageKey.verify|verify} messages.
         * @param message MessageKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WAProtocol.IMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WAProtocol.MessageKey;

        /**
         * Decodes a MessageKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WAProtocol.MessageKey;

        /**
         * Verifies a MessageKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageKey
         */
        public static fromObject(object: { [k: string]: any }): WAProtocol.MessageKey;

        /**
         * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
         * @param message MessageKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WAProtocol.MessageKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageKey
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}