import { $JsonDeserializer, $JsonElement_, $JsonSerializer, $JsonDeserializationContext_, $JsonSerializationContext, $JsonElement } from "@package/com/google/gson";
import { $MapCodec_, $DataResult, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag } from "@package/net/minecraft/nbt";
import { $Message, $Message_, $ParseResults } from "@package/com/mojang/brigadier";
import { $EntityType_, $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $UUID_, $UUID, $List, $Date, $Collection_, $List_, $BitSet } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $ArgumentCommandNode } from "@package/com/mojang/brigadier/tree";
import { $SignatureUpdater$Output_, $FormattedCharSequence, $StringRepresentable, $SignatureUpdater_, $SignatureValidator_, $Signer_, $Unit } from "@package/net/minecraft/util";
import { $Consumer_, $Function_, $UnaryOperator_, $BooleanSupplier_ } from "@package/java/util/function";
import { $RegistryAccess, $HolderLookup$Provider, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $WithCodec } from "@package/dev/latvian/mods/kubejs/util";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes, SpecialTypes } from "@special/types";
import { $URI } from "@package/java/net";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Type } from "@package/java/lang/reflect";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Enum, $Exception, $Comparable, $Iterable, $Throwable, $Record, $Object } from "@package/java/lang";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Int2IntFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Logger } from "@package/org/slf4j";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $ProfileKeyPair, $ProfilePublicKey, $ProfilePublicKey$Data_, $ProfileKeyPair_, $ProfilePublicKey$Data, $ProfilePublicKey_ } from "@package/net/minecraft/world/entity/player";
import { $DataSource } from "@package/net/minecraft/network/chat/contents";
import { $Instant, $Duration_, $Duration } from "@package/java/time";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ResourceKey_, $ResourceKey, $RegistryOps, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ComponentKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as numbers from "@package/net/minecraft/network/chat/numbers";
export * as contents from "@package/net/minecraft/network/chat/contents";

declare module "@package/net/minecraft/network/chat" {
    export class $SignableCommand$Argument<S> extends $Record {
        name(): string;
        value(): string;
        node(): $ArgumentCommandNode<S, never>;
        constructor(node: $ArgumentCommandNode<S, never>, value: string);
    }
    /**
     * Values that may be interpreted as {@link $SignableCommand$Argument}.
     */
    export type $SignableCommand$Argument_<S> = { node?: $ArgumentCommandNode<any, never>, value?: string,  } | [node?: $ArgumentCommandNode<any, never>, value?: string, ];
    export class $ChatTypeDecoration extends $Record {
        static teamMessage(arg0: string): $ChatTypeDecoration;
        static withSender(arg0: string): $ChatTypeDecoration;
        static incomingDirectMessage(arg0: string): $ChatTypeDecoration;
        static outgoingDirectMessage(arg0: string): $ChatTypeDecoration;
        parameters(): $List<$ChatTypeDecoration$Parameter>;
        style(): $Style;
        translationKey(): string;
        decorate(arg0: $Component_, arg1: $ChatType$Bound_): $Component;
        static CODEC: $Codec<$ChatTypeDecoration>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChatTypeDecoration>;
        constructor(arg0: string, arg1: $List_<$ChatTypeDecoration$Parameter_>, arg2: $Style);
    }
    /**
     * Values that may be interpreted as {@link $ChatTypeDecoration}.
     */
    export type $ChatTypeDecoration_ = { style?: $Style, parameters?: $List_<$ChatTypeDecoration$Parameter_>, translationKey?: string,  } | [style?: $Style, parameters?: $List_<$ChatTypeDecoration$Parameter_>, translationKey?: string, ];
    export class $MessageSignatureCache {
        pack(arg0: $MessageSignature_): number;
        push(arg0: $SignedMessageBody_, arg1: $MessageSignature_): void;
        push(arg0: $List_<$MessageSignature_>): void;
        unpack(arg0: number): $MessageSignature;
        static createDefault(): $MessageSignatureCache;
        static NOT_FOUND: number;
        constructor(arg0: number);
    }
    export class $SignedMessageLink extends $Record {
        updateSignature(arg0: $SignatureUpdater$Output_): void;
        isDescendantOf(arg0: $SignedMessageLink_): boolean;
        sender(): $UUID;
        static unsigned(arg0: $UUID_): $SignedMessageLink;
        index(): number;
        static root(arg0: $UUID_, arg1: $UUID_): $SignedMessageLink;
        advance(): $SignedMessageLink;
        sessionId(): $UUID;
        static CODEC: $Codec<$SignedMessageLink>;
        constructor(arg0: number, arg1: $UUID_, arg2: $UUID_);
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageLink}.
     */
    export type $SignedMessageLink_ = { sessionId?: $UUID_, sender?: $UUID_, index?: number,  } | [sessionId?: $UUID_, sender?: $UUID_, index?: number, ];
    export class $SignedMessageBody extends $Record {
        updateSignature(arg0: $SignatureUpdater$Output_): void;
        lastSeen(): $LastSeenMessages;
        pack(arg0: $MessageSignatureCache): $SignedMessageBody$Packed;
        content(): string;
        static unsigned(arg0: string): $SignedMessageBody;
        timeStamp(): $Instant;
        salt(): number;
        static MAP_CODEC: $MapCodec<$SignedMessageBody>;
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $LastSeenMessages_);
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageBody}.
     */
    export type $SignedMessageBody_ = { timeStamp?: $Instant, salt?: number, lastSeen?: $LastSeenMessages_, content?: string,  } | [timeStamp?: $Instant, salt?: number, lastSeen?: $LastSeenMessages_, content?: string, ];
    export class $ComponentContents {
    }
    export interface $ComponentContents {
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        type(): $ComponentContents$Type<never>;
        resolve(arg0: $CommandSourceStack, arg1: $Entity, arg2: number): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $ComponentContents}.
     */
    export type $ComponentContents_ = (() => $ComponentContents$Type_<never>);
    export class $RemoteChatSession extends $Record {
        profilePublicKey(): $ProfilePublicKey;
        createMessageDecoder(arg0: $UUID_): $SignedMessageChain$Decoder;
        createMessageValidator(arg0: $Duration_): $SignedMessageValidator;
        sessionId(): $UUID;
        hasExpired(): boolean;
        asData(): $RemoteChatSession$Data;
        constructor(arg0: $UUID_, arg1: $ProfilePublicKey_);
    }
    /**
     * Values that may be interpreted as {@link $RemoteChatSession}.
     */
    export type $RemoteChatSession_ = { sessionId?: $UUID_, profilePublicKey?: $ProfilePublicKey_,  } | [sessionId?: $UUID_, profilePublicKey?: $ProfilePublicKey_, ];
    export class $ChatType extends $Record {
        static bind(arg0: $ResourceKey_<$ChatType>, arg1: $CommandSourceStack): $ChatType$Bound;
        static bind(arg0: $ResourceKey_<$ChatType>, arg1: $RegistryAccess, arg2: $Component_): $ChatType$Bound;
        static bind(arg0: $ResourceKey_<$ChatType>, arg1: $Entity): $ChatType$Bound;
        static bootstrap(arg0: $BootstrapContext<$ChatType_>): void;
        chat(): $ChatTypeDecoration;
        narration(): $ChatTypeDecoration;
        static SAY_COMMAND: $ResourceKey<$ChatType>;
        static MSG_COMMAND_OUTGOING: $ResourceKey<$ChatType>;
        static MSG_COMMAND_INCOMING: $ResourceKey<$ChatType>;
        static CHAT: $ResourceKey<$ChatType>;
        static TEAM_MSG_COMMAND_OUTGOING: $ResourceKey<$ChatType>;
        static TEAM_MSG_COMMAND_INCOMING: $ResourceKey<$ChatType>;
        static DIRECT_CODEC: $Codec<$ChatType>;
        static EMOTE_COMMAND: $ResourceKey<$ChatType>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChatType>;
        static DEFAULT_CHAT_DECORATION: $ChatTypeDecoration;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$ChatType>>;
        constructor(arg0: $ChatTypeDecoration_, arg1: $ChatTypeDecoration_);
    }
    /**
     * Values that may be interpreted as {@link $ChatType}.
     */
    export type $ChatType_ = RegistryTypes.ChatType | { narration?: $ChatTypeDecoration_, chat?: $ChatTypeDecoration_,  } | [narration?: $ChatTypeDecoration_, chat?: $ChatTypeDecoration_, ];
    export class $ChatTypeDecoration$Parameter extends $Enum<$ChatTypeDecoration$Parameter> implements $StringRepresentable {
        static values(): $ChatTypeDecoration$Parameter[];
        static valueOf(arg0: string): $ChatTypeDecoration$Parameter;
        select(arg0: $Component_, arg1: $ChatType$Bound_): $Component;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static TARGET: $ChatTypeDecoration$Parameter;
        static CODEC: $Codec<$ChatTypeDecoration$Parameter>;
        static SENDER: $ChatTypeDecoration$Parameter;
        static CONTENT: $ChatTypeDecoration$Parameter;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ChatTypeDecoration$Parameter>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ChatTypeDecoration$Parameter}.
     */
    export type $ChatTypeDecoration$Parameter_ = "sender" | "target" | "content";
    export class $LastSeenTrackedEntry extends $Record {
        acknowledge(): $LastSeenTrackedEntry;
        pending(): boolean;
        signature(): $MessageSignature;
        constructor(arg0: $MessageSignature_, arg1: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LastSeenTrackedEntry}.
     */
    export type $LastSeenTrackedEntry_ = { pending?: boolean, signature?: $MessageSignature_,  } | [pending?: boolean, signature?: $MessageSignature_, ];
    export class $OutgoingChatMessage {
        static create(arg0: $PlayerChatMessage_): $OutgoingChatMessage;
    }
    export interface $OutgoingChatMessage {
        content(): $Component;
        sendToPlayer(arg0: $ServerPlayer, arg1: boolean, arg2: $ChatType$Bound_): void;
    }
    export class $OutgoingChatMessage$Disguised extends $Record implements $OutgoingChatMessage {
        content(): $Component;
        sendToPlayer(arg0: $ServerPlayer, arg1: boolean, arg2: $ChatType$Bound_): void;
        constructor(arg0: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $OutgoingChatMessage$Disguised}.
     */
    export type $OutgoingChatMessage$Disguised_ = { content?: $Component_,  } | [content?: $Component_, ];
    export class $ChatDecorator {
        static PLAIN: $ChatDecorator;
    }
    export interface $ChatDecorator {
        decorate(arg0: $ServerPlayer, arg1: $Component_): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ChatDecorator}.
     */
    export type $ChatDecorator_ = ((arg0: $ServerPlayer, arg1: $Component) => $Component_);
    export class $SignedMessageChain$Encoder {
        static UNSIGNED: $SignedMessageChain$Encoder;
    }
    export interface $SignedMessageChain$Encoder {
        pack(arg0: $SignedMessageBody_): $MessageSignature;
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageChain$Encoder}.
     */
    export type $SignedMessageChain$Encoder_ = ((arg0: $SignedMessageBody) => $MessageSignature_);
    export class $ComponentSerialization$FuzzyCodec<T> extends $MapCodec<T> {
    }
    export class $Style$1Collector {
    }
    export class $SignedMessageBody$Packed extends $Record {
        lastSeen(): $LastSeenMessages$Packed;
        content(): string;
        timeStamp(): $Instant;
        write(arg0: $FriendlyByteBuf): void;
        unpack(arg0: $MessageSignatureCache): ($SignedMessageBody) | undefined;
        salt(): number;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $LastSeenMessages$Packed_);
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageBody$Packed}.
     */
    export type $SignedMessageBody$Packed_ = { timeStamp?: $Instant, salt?: number, lastSeen?: $LastSeenMessages$Packed_, content?: string,  } | [timeStamp?: $Instant, salt?: number, lastSeen?: $LastSeenMessages$Packed_, content?: string, ];
    export class $LastSeenMessages extends $Record {
        updateSignature(arg0: $SignatureUpdater$Output_): void;
        pack(arg0: $MessageSignatureCache): $LastSeenMessages$Packed;
        entries(): $List<$MessageSignature>;
        static CODEC: $Codec<$LastSeenMessages>;
        static LAST_SEEN_MESSAGES_MAX_LENGTH: number;
        static EMPTY: $LastSeenMessages;
        constructor(arg0: $List_<$MessageSignature_>);
    }
    /**
     * Values that may be interpreted as {@link $LastSeenMessages}.
     */
    export type $LastSeenMessages_ = { entries?: $List_<$MessageSignature_>,  } | [entries?: $List_<$MessageSignature_>, ];
    export class $HoverEvent$Action<T> implements $StringRepresentable {
        isAllowedFromServer(): boolean;
        cast(arg0: $Object): T;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        codec: $MapCodec<$HoverEvent$TypedHoverEvent<T>>;
        static CODEC: $Codec<$HoverEvent$Action<never>>;
        static SHOW_ITEM: $HoverEvent$Action<$HoverEvent$ItemStackInfo>;
        static SHOW_ENTITY: $HoverEvent$Action<$HoverEvent$EntityTooltipInfo>;
        static UNSAFE_CODEC: $Codec<$HoverEvent$Action<never>>;
        static SHOW_TEXT: $HoverEvent$Action<$Component>;
        legacyCodec: $MapCodec<$HoverEvent$TypedHoverEvent<T>>;
        constructor(arg0: string, arg1: boolean, arg2: $Codec<T>, arg3: $HoverEvent$LegacyConverter_<T>);
        get allowedFromServer(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    export class $LastSeenMessagesTracker$Update extends $Record {
        lastSeen(): $LastSeenMessages;
        update(): $LastSeenMessages$Update;
        constructor(arg0: $LastSeenMessages_, arg1: $LastSeenMessages$Update_);
    }
    /**
     * Values that may be interpreted as {@link $LastSeenMessagesTracker$Update}.
     */
    export type $LastSeenMessagesTracker$Update_ = { update?: $LastSeenMessages$Update_, lastSeen?: $LastSeenMessages_,  } | [update?: $LastSeenMessages$Update_, lastSeen?: $LastSeenMessages_, ];
    export class $SignedMessageValidator$KeyBased implements $SignedMessageValidator {
        updateAndValidate(arg0: $PlayerChatMessage_): $PlayerChatMessage;
        constructor(arg0: $SignatureValidator_, arg1: $BooleanSupplier_);
    }
    export class $RemoteChatSession$Data extends $Record {
        profilePublicKey(): $ProfilePublicKey$Data;
        validate(arg0: $GameProfile, arg1: $SignatureValidator_): $RemoteChatSession;
        static write(arg0: $FriendlyByteBuf, arg1: $RemoteChatSession$Data_): void;
        static read(arg0: $FriendlyByteBuf): $RemoteChatSession$Data;
        sessionId(): $UUID;
        constructor(arg0: $UUID_, arg1: $ProfilePublicKey$Data_);
    }
    /**
     * Values that may be interpreted as {@link $RemoteChatSession$Data}.
     */
    export type $RemoteChatSession$Data_ = { sessionId?: $UUID_, profilePublicKey?: $ProfilePublicKey$Data_,  } | [sessionId?: $UUID_, profilePublicKey?: $ProfilePublicKey$Data_, ];
    export class $Style {
        isEmpty(): boolean;
        isObfuscated(): boolean;
        getColor(): $TextColor;
        withBold(arg0: boolean): $Style;
        withUnderlined(arg0: boolean): $Style;
        getFont(): $ResourceLocation;
        getHoverEvent(): $HoverEvent;
        withClickEvent(arg0: $ClickEvent_): $Style;
        withColor(arg0: number): $Style;
        withColor(arg0: $ChatFormatting_): $Style;
        withColor(arg0: $TextColor_): $Style;
        applyTo(arg0: $Style): $Style;
        isBold(): boolean;
        isItalic(): boolean;
        isStrikethrough(): boolean;
        isUnderlined(): boolean;
        getClickEvent(): $ClickEvent;
        getInsertion(): string;
        applyLegacyFormat(arg0: $ChatFormatting_): $Style;
        applyFormats(...arg0: $ChatFormatting_[]): $Style;
        applyFormat(arg0: $ChatFormatting_): $Style;
        withItalic(arg0: boolean): $Style;
        withStrikethrough(arg0: boolean): $Style;
        withObfuscated(arg0: boolean): $Style;
        withInsertion(arg0: string): $Style;
        withFont(arg0: $ResourceLocation_): $Style;
        withHoverEvent(arg0: $HoverEvent): $Style;
        hoverEvent: $HoverEvent;
        clickEvent: $ClickEvent;
        static DEFAULT_FONT: $ResourceLocation;
        color: $TextColor;
        underlined: boolean;
        insertion: string;
        bold: boolean;
        strikethrough: boolean;
        static EMPTY: $Style;
        italic: boolean;
        obfuscated: boolean;
        font: $ResourceLocation;
        get empty(): boolean;
    }
    export class $OutgoingChatMessage$Player extends $Record implements $OutgoingChatMessage {
        content(): $Component;
        message(): $PlayerChatMessage;
        sendToPlayer(arg0: $ServerPlayer, arg1: boolean, arg2: $ChatType$Bound_): void;
        constructor(arg0: $PlayerChatMessage_);
    }
    /**
     * Values that may be interpreted as {@link $OutgoingChatMessage$Player}.
     */
    export type $OutgoingChatMessage$Player_ = { message?: $PlayerChatMessage_,  } | [message?: $PlayerChatMessage_, ];
    export class $SignedMessageChain {
        encoder(arg0: $Signer_): $SignedMessageChain$Encoder;
        decoder(arg0: $ProfilePublicKey_): $SignedMessageChain$Decoder;
        lastTimeStamp: $Instant;
        static LOGGER: $Logger;
        nextLink: $SignedMessageLink;
        constructor(arg0: $UUID_, arg1: $UUID_);
    }
    export class $MessageSignature extends $Record {
        pack(arg0: $MessageSignatureCache): $MessageSignature$Packed;
        bytes(): number[];
        static write(arg0: $FriendlyByteBuf, arg1: $MessageSignature_): void;
        static read(arg0: $FriendlyByteBuf): $MessageSignature;
        verify(arg0: $SignatureValidator_, arg1: $SignatureUpdater_): boolean;
        asByteBuffer(): $ByteBuffer;
        static BYTES: number;
        static CODEC: $Codec<$MessageSignature>;
        constructor(arg0: number[]);
    }
    /**
     * Values that may be interpreted as {@link $MessageSignature}.
     */
    export type $MessageSignature_ = { bytes?: number[],  } | [bytes?: number[], ];
    export class $FilterMask$Type extends $Enum<$FilterMask$Type> implements $StringRepresentable {
        getRemappedEnumConstantName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FilterMask$Type}.
     */
    export type $FilterMask$Type_ = "pass_through" | "fully_filtered" | "partially_filtered";
    export class $Style$Serializer {
        static CODEC: $Codec<$Style>;
        static MAP_CODEC: $MapCodec<$Style>;
        static TRUSTED_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Style>;
        constructor();
    }
    export class $ComponentSerialization {
        static flatCodec(arg0: number): $Codec<$Component>;
        static createLegacyComponentMatcher<T extends $StringRepresentable, E>(arg0: T[], arg1: $Function_<T, $MapCodec<E>>, arg2: $Function_<E, T>, arg3: string): $MapCodec<E>;
        static TRUSTED_CONTEXT_FREE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Component>;
        static CODEC: $Codec<$Component>;
        static TRUSTED_OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($Component) | undefined>;
        static TRUSTED_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Component>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($Component) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Component>;
        static FLAT_CODEC: $Codec<$Component>;
        constructor();
    }
    export class $SignableCommand<S> extends $Record {
        static of<S>(arg0: $ParseResults<S>): $SignableCommand<S>;
        arguments(): $List<$SignableCommand$Argument<S>>;
        getArgument(arg0: string): $SignableCommand$Argument<S>;
        static hasSignableArguments<S>(arg0: $ParseResults<S>): boolean;
        constructor(arguments: $List_<$SignableCommand$Argument_<S>>);
    }
    /**
     * Values that may be interpreted as {@link $SignableCommand}.
     */
    export type $SignableCommand_<S> = { arguments?: $List_<$SignableCommand$Argument_<any>>,  } | [arguments?: $List_<$SignableCommand$Argument_<any>>, ];
    export class $ClickEvent implements $WithCodec {
        getValue(): string;
        getCodec(): $Codec<any>;
        getAction(): $ClickEvent$Action;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        static CODEC: $Codec<$ClickEvent>;
        constructor(arg0: $ClickEvent$Action_, arg1: string);
        get value(): string;
        get codec(): $Codec<any>;
        get action(): $ClickEvent$Action;
    }
    /**
     * Values that may be interpreted as {@link $ClickEvent}.
     */
    export type $ClickEvent_ = { action: $ClickEvent$Action_, value: string,  };
    export class $SignedMessageChain$DecodeException extends $ThrowingComponent {
        static OUT_OF_ORDER_CHAT: $Component;
        static EXPIRED_PROFILE_KEY: $Component;
        static INVALID_SIGNATURE: $Component;
        static MISSING_PROFILE_KEY: $Component;
        static CHAIN_BROKEN: $Component;
        constructor(arg0: $Component_);
    }
    export class $ChatTypeDecoration$Parameter$Selector {
    }
    export interface $ChatTypeDecoration$Parameter$Selector {
        select(arg0: $Component_, arg1: $ChatType$Bound_): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ChatTypeDecoration$Parameter$Selector}.
     */
    export type $ChatTypeDecoration$Parameter$Selector_ = ((arg0: $Component, arg1: $ChatType$Bound) => $Component_);
    export class $FormattedText {
        static of(arg0: string): $FormattedText;
        static of(arg0: string, arg1: $Style): $FormattedText;
        static composite(...arg0: $FormattedText[]): $FormattedText;
        static composite(arg0: $List_<$FormattedText>): $FormattedText;
        static EMPTY: $FormattedText;
        static STOP_ITERATION: ($Unit) | undefined;
    }
    export interface $FormattedText {
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        getString(): string;
        get string(): string;
    }
    export class $Component$SerializerAdapter implements $JsonDeserializer<$MutableComponent>, $JsonSerializer<$Component> {
        serialize(arg0: $Component_, arg1: $Type, arg2: $JsonSerializationContext): $JsonElement;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $MutableComponent;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $MessageSignature$Packed extends $Record {
        fullSignature(): $MessageSignature;
        id(): number;
        static write(arg0: $FriendlyByteBuf, arg1: $MessageSignature$Packed_): void;
        static read(arg0: $FriendlyByteBuf): $MessageSignature$Packed;
        unpack(arg0: $MessageSignatureCache): ($MessageSignature) | undefined;
        static FULL_SIGNATURE: number;
        constructor(arg0: $MessageSignature_);
        constructor(arg0: number, arg1: $MessageSignature_);
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $MessageSignature$Packed}.
     */
    export type $MessageSignature$Packed_ = { id?: number, fullSignature?: $MessageSignature_,  } | [id?: number, fullSignature?: $MessageSignature_, ];
    export class $TextColor implements $KubeColor {
        formatValue(): string;
        kjs$getARGB(): number;
        static parseColor(arg0: string): $DataResult<$TextColor>;
        kjs$getRGB(): number;
        getValue(): number;
        serialize(): string;
        static fromLegacyFormat(arg0: $ChatFormatting_): $TextColor;
        static fromRgb(arg0: number): $TextColor;
        getFireworkRGB(): number;
        toHexString(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        createTextColor(): $TextColor;
        serialize(): string;
        static CODEC: $Codec<$TextColor>;
        get value(): number;
        get fireworkRGB(): number;
    }
    /**
     * Values that may be interpreted as {@link $TextColor}.
     */
    export type $TextColor_ = "" | "light_blue_dye" | "blue_dye" | "purple_dye" | "dark_red" | "lightgraydye" | "dark_aqua" | "none" | "green_dye" | "blackdye" | "dark_blue" | "red" | "pink_dye" | "aqua" | "white" | "white_dye" | "dark_gray" | "light_purple" | "brown_dye" | "black" | "darkpurple" | "none" | "light_blue_dye" | "aqua" | "lightbluedye" | "limedye" | "purple_dye" | "green_dye" | "magenta_dye" | "-" | "lime_dye" | "yellowdye" | "graydye" | "purpledye" | "dark_purple" | "orange_dye" | "darkgray" | "browndye" | "yellow" | "lime_dye" | "bluedye" | "white_dye" | "pinkdye" | "blue_dye" | "cyandye" | "gold" | "gray" | "magenta_dye" | "blue" | "light_gray_dye" | "yellow" | "darkblue" | "transparent" | "orange_dye" | "red_dye" | "dark_purple" | "gold" | "gray" | "light_purple" | "darkred" | "greendye" | "dark_red" | "reddye" | "gray_dye" | "orangedye" | "yellow_dye" | "black_dye" | "magentadye" | "white" | "green" | "light_gray_dye" | "black_dye" | "darkgreen" | "red_dye" | "dark_green" | "black" | "lightpurple" | "pink_dye" | "dark_blue" | "green" | "darkaqua" | "gray_dye" | "cyan_dye" | "red" | "brown_dye" | "cyan_dye" | "blue" | "whitedye" | "dark_aqua" | "yellow_dye" | "dark_green" | "dark_gray" | `#${string}` | number;
    export class $HoverEvent {
        getValue<T>(arg0: $HoverEvent$Action<T>): T;
        getAction(): $HoverEvent$Action<never>;
        static CODEC: $Codec<$HoverEvent>;
        constructor<T>(arg0: $HoverEvent$Action<T>, arg1: T);
        get action(): $HoverEvent$Action<never>;
    }
    export class $LastSeenMessages$Update extends $Record {
        acknowledged(): $BitSet;
        offset(): number;
        write(arg0: $FriendlyByteBuf): void;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $BitSet);
    }
    /**
     * Values that may be interpreted as {@link $LastSeenMessages$Update}.
     */
    export type $LastSeenMessages$Update_ = { offset?: number, acknowledged?: $BitSet,  } | [offset?: number, acknowledged?: $BitSet, ];
    export class $CommonComponents {
        static joinLines(...arg0: $Component_[]): $Component;
        static joinLines(arg0: $Collection_<$Component_>): $Component;
        static hours(arg0: number): $MutableComponent;
        static minutes(arg0: number): $MutableComponent;
        static space(): $MutableComponent;
        static days(arg0: number): $MutableComponent;
        static joinForNarration(...arg0: $Component_[]): $MutableComponent;
        static optionStatus(arg0: boolean): $Component;
        static optionStatus(arg0: $Component_, arg1: boolean): $MutableComponent;
        static optionNameValue(arg0: $Component_, arg1: $Component_): $MutableComponent;
        static GUI_TO_TITLE: $Component;
        static GUI_OPEN_IN_BROWSER: $Component;
        static CONNECT_FAILED: $Component;
        static GUI_CONTINUE: $Component;
        static GUI_COPY_LINK_TO_CLIPBOARD: $Component;
        static TRANSFER_CONNECT_FAILED: $Component;
        static NEW_LINE: $Component;
        static SPACE: $Component;
        static GUI_DISCONNECT: $Component;
        static GUI_ACKNOWLEDGE: $Component;
        static GUI_CANCEL: $Component;
        static GUI_YES: $Component;
        static ELLIPSIS: $Component;
        static GUI_PROCEED: $Component;
        static GUI_DONE: $Component;
        static GUI_OK: $Component;
        static OPTION_OFF: $Component;
        static NARRATION_SEPARATOR: $Component;
        static GUI_BACK: $Component;
        static EMPTY: $Component;
        static GUI_NO: $Component;
        static OPTION_ON: $Component;
        constructor();
    }
    export class $ThrowingComponent extends $Exception {
        getComponent(): $Component;
        constructor(arg0: $Component_);
        constructor(arg0: $Component_, arg1: $Throwable);
        get component(): $Component;
    }
    export class $HoverEvent$LegacyConverter<T> {
    }
    export interface $HoverEvent$LegacyConverter<T> {
        parse(arg0: $Component_, arg1: $RegistryOps<never>): $DataResult<T>;
    }
    /**
     * Values that may be interpreted as {@link $HoverEvent$LegacyConverter}.
     */
    export type $HoverEvent$LegacyConverter_<T> = ((arg0: $Component, arg1: $RegistryOps<never>) => $DataResult<T>);
    export class $FilterMask {
        setFiltered(arg0: number): void;
        isFullyFiltered(): boolean;
        applyWithFormatting(arg0: string): $Component;
        isEmpty(): boolean;
        apply(arg0: string): string;
        static write(arg0: $FriendlyByteBuf, arg1: $FilterMask): void;
        static read(arg0: $FriendlyByteBuf): $FilterMask;
        static PARTIALLY_FILTERED_CODEC: $MapCodec<$FilterMask>;
        static PASS_THROUGH: $FilterMask;
        static CODEC: $Codec<$FilterMask>;
        static FULLY_FILTERED: $FilterMask;
        static FILTERED_STYLE: $Style;
        static PASS_THROUGH_CODEC: $MapCodec<$FilterMask>;
        static FULLY_FILTERED_CODEC: $MapCodec<$FilterMask>;
        constructor(arg0: number);
        set filtered(value: number);
        get fullyFiltered(): boolean;
        get empty(): boolean;
    }
    export class $Component$Serializer {
        static fromJsonLenient(arg0: string, arg1: $HolderLookup$Provider): $MutableComponent;
        static fromJson(arg0: string, arg1: $HolderLookup$Provider): $MutableComponent;
        static fromJson(arg0: $JsonElement_, arg1: $HolderLookup$Provider): $MutableComponent;
        static deserialize(arg0: $JsonElement_, arg1: $HolderLookup$Provider): $MutableComponent;
        static serialize(arg0: $Component_, arg1: $HolderLookup$Provider): $JsonElement;
        static toJson(arg0: $Component_, arg1: $HolderLookup$Provider): string;
    }
    export class $FormattedText$ContentConsumer<T> {
    }
    export interface $FormattedText$ContentConsumer<T> {
        accept(arg0: string): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $FormattedText$ContentConsumer}.
     */
    export type $FormattedText$ContentConsumer_<T> = ((arg0: string) => (T) | undefined);
    export class $ComponentUtils {
        static formatAndSortList<T extends $Comparable<T>>(arg0: $Collection_<T>, arg1: $Function_<T, $Component>): $Component;
        static copyOnClickText(arg0: string): $MutableComponent;
        static fromMessage(arg0: $Message_): $Component;
        static isTranslationResolvable(arg0: $Component_): boolean;
        static mergeStyles(arg0: $MutableComponent_, arg1: $Style): $MutableComponent;
        static wrapInSquareBrackets(arg0: $Component_): $MutableComponent;
        static formatList<T>(arg0: $Collection_<T>, arg1: $Component_, arg2: $Function_<T, $Component>): $MutableComponent;
        static formatList(arg0: $Collection_<$Component_>, arg1: $Component_): $Component;
        static formatList<T>(arg0: $Collection_<T>, arg1: ($Component_) | undefined, arg2: $Function_<T, $Component>): $MutableComponent;
        static formatList<T>(arg0: $Collection_<T>, arg1: $Function_<T, $Component>): $Component;
        static formatList(arg0: $Collection_<string>): $Component;
        static updateForEntity(arg0: $CommandSourceStack, arg1: $Component_, arg2: $Entity, arg3: number): $MutableComponent;
        static updateForEntity(arg0: $CommandSourceStack, arg1: ($Component_) | undefined, arg2: $Entity, arg3: number): ($MutableComponent) | undefined;
        static DEFAULT_NO_STYLE_SEPARATOR: $Component;
        static DEFAULT_SEPARATOR_TEXT: string;
        static DEFAULT_SEPARATOR: $Component;
        constructor();
    }
    export class $ClickEvent$Action extends $Enum<$ClickEvent$Action> implements $StringRepresentable {
        isAllowedFromServer(): boolean;
        static filterForSerialization(arg0: $ClickEvent$Action_): $DataResult<$ClickEvent$Action>;
        static values(): $ClickEvent$Action[];
        static valueOf(arg0: string): $ClickEvent$Action;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $MapCodec<$ClickEvent$Action>;
        static UNSAFE_CODEC: $MapCodec<$ClickEvent$Action>;
        static RUN_COMMAND: $ClickEvent$Action;
        static CHANGE_PAGE: $ClickEvent$Action;
        static COPY_TO_CLIPBOARD: $ClickEvent$Action;
        static SUGGEST_COMMAND: $ClickEvent$Action;
        static OPEN_FILE: $ClickEvent$Action;
        static OPEN_URL: $ClickEvent$Action;
        get allowedFromServer(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ClickEvent$Action}.
     */
    export type $ClickEvent$Action_ = "open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard";
    export class $HoverEvent$ItemStackInfo {
        getItemStack(): $ItemStack;
        static CODEC: $Codec<$HoverEvent$ItemStackInfo>;
        static FULL_CODEC: $Codec<$HoverEvent$ItemStackInfo>;
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPatch_);
        constructor(arg0: $ItemStack_);
        get itemStack(): $ItemStack;
    }
    export class $FormattedText$StyledContentConsumer<T> {
    }
    export interface $FormattedText$StyledContentConsumer<T> {
        accept(arg0: $Style, arg1: string): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $FormattedText$StyledContentConsumer}.
     */
    export type $FormattedText$StyledContentConsumer_<T> = ((arg0: $Style, arg1: string) => (T) | undefined);
    export class $LocalChatSession extends $Record {
        keyPair(): $ProfileKeyPair;
        static create(arg0: $ProfileKeyPair_): $LocalChatSession;
        sessionId(): $UUID;
        createMessageEncoder(arg0: $UUID_): $SignedMessageChain$Encoder;
        asRemote(): $RemoteChatSession;
        constructor(arg0: $UUID_, arg1: $ProfileKeyPair_);
    }
    /**
     * Values that may be interpreted as {@link $LocalChatSession}.
     */
    export type $LocalChatSession_ = { sessionId?: $UUID_, keyPair?: $ProfileKeyPair_,  } | [sessionId?: $UUID_, keyPair?: $ProfileKeyPair_, ];
    export class $ComponentContents$Type<T extends $ComponentContents> extends $Record implements $StringRepresentable {
        id(): string;
        codec(): $MapCodec<T>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        constructor(arg0: $MapCodec_<T>, arg1: string);
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ComponentContents$Type}.
     */
    export type $ComponentContents$Type_<T> = { codec?: $MapCodec_<$ComponentContents_>, id?: string,  } | [codec?: $MapCodec_<$ComponentContents_>, id?: string, ];
    export class $SignedMessageValidator {
        static LOGGER: $Logger;
        static ACCEPT_UNSIGNED: $SignedMessageValidator;
        static REJECT_ALL: $SignedMessageValidator;
    }
    export interface $SignedMessageValidator {
        updateAndValidate(arg0: $PlayerChatMessage_): $PlayerChatMessage;
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageValidator}.
     */
    export type $SignedMessageValidator_ = ((arg0: $PlayerChatMessage) => $PlayerChatMessage_);
    export class $ComponentSerialization$StrictEither<T> extends $MapCodec<T> {
    }
    export class $LastSeenMessagesValidator {
        applyUpdate(arg0: $LastSeenMessages$Update_): ($LastSeenMessages) | undefined;
        trackedMessagesCount(): number;
        applyOffset(arg0: number): boolean;
        addPending(arg0: $MessageSignature_): void;
        constructor(arg0: number);
    }
    export interface $ChatType extends RegistryMarked<RegistryTypes.ChatTypeTag, RegistryTypes.ChatType> {}
    export class $Component {
        static selector(arg0: string, arg1: ($Component_) | undefined): $MutableComponent;
        static empty(): $MutableComponent;
        static literal(arg0: string): $MutableComponent;
        static score(arg0: string, arg1: string): $MutableComponent;
        static nullToEmpty(arg0: string): $Component;
        static translatable(arg0: string): $MutableComponent;
        static translatable(arg0: string, ...arg1: $Object[]): $MutableComponent;
        static translatableEscape(arg0: string, ...arg1: $Object[]): $MutableComponent;
        static translatableWithFallback(arg0: string, arg1: string): $MutableComponent;
        static translatableWithFallback(arg0: string, arg1: string, ...arg2: $Object[]): $MutableComponent;
        static keybind(arg0: string): $MutableComponent;
        static nbt(arg0: string, arg1: boolean, arg2: ($Component_) | undefined, arg3: $DataSource): $MutableComponent;
        static translationArg(arg0: $URI): $Component;
        static translationArg(arg0: $ChunkPos): $Component;
        static translationArg(arg0: $Date): $Component;
        static translationArg(arg0: $ResourceLocation_): $Component;
        static translationArg(arg0: $UUID_): $Component;
        static translationArg(arg0: $Message_): $Component;
    }
    export interface $Component extends $Message, $FormattedText {
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        getString(arg0: number): string;
        getString(): string;
        getContents(): $ComponentContents;
        contains(arg0: $Component_): boolean;
        copy(): $MutableComponent;
        getVisualOrderText(): $FormattedCharSequence;
        getStyle(): $Style;
        getSiblings(): $List<$Component>;
        tryCollapseToString(): string;
        plainCopy(): $MutableComponent;
        toFlatList(arg0: $Style): $List<$Component>;
        toFlatList(): $List<$Component>;
        get contents(): $ComponentContents;
        get visualOrderText(): $FormattedCharSequence;
        get style(): $Style;
        get siblings(): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $Component}.
     */
    export type $Component_ = string | { text?: string, translate?: SpecialTypes.TranslationKey, with?: any[], color?: $KubeColor_, bold?: boolean, italic?: boolean, underlined?: boolean, strikethrough?: boolean, obfuscated?: boolean, insertion?: string, font?: string, click?: $ClickEvent_, hover?: $Component_, extra?: $Component_[],  } | $Component_[];
    export class $LastSeenMessages$Packed extends $Record {
        write(arg0: $FriendlyByteBuf): void;
        entries(): $List<$MessageSignature$Packed>;
        unpack(arg0: $MessageSignatureCache): ($LastSeenMessages) | undefined;
        static EMPTY: $LastSeenMessages$Packed;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: $List_<$MessageSignature$Packed_>);
    }
    /**
     * Values that may be interpreted as {@link $LastSeenMessages$Packed}.
     */
    export type $LastSeenMessages$Packed_ = { entries?: $List_<$MessageSignature$Packed_>,  } | [entries?: $List_<$MessageSignature$Packed_>, ];
    export class $LastSeenMessagesTracker {
        offset(): number;
        ignorePending(arg0: $MessageSignature_): void;
        addPending(arg0: $MessageSignature_, arg1: boolean): boolean;
        getAndClearOffset(): number;
        generateAndApplyUpdate(): $LastSeenMessagesTracker$Update;
        constructor(arg0: number);
        get andClearOffset(): number;
    }
    export class $SignedMessageChain$Decoder {
        static unsigned(arg0: $UUID_, arg1: $BooleanSupplier_): $SignedMessageChain$Decoder;
    }
    export interface $SignedMessageChain$Decoder {
        setChainBroken(): void;
        unpack(arg0: $MessageSignature_, arg1: $SignedMessageBody_): $PlayerChatMessage;
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageChain$Decoder}.
     */
    export type $SignedMessageChain$Decoder_ = ((arg0: $MessageSignature, arg1: $SignedMessageBody) => $PlayerChatMessage_);
    export class $SubStringSource {
        getPlainText(): string;
        substring(arg0: number, arg1: number, arg2: boolean): $List<$FormattedCharSequence>;
        static create(arg0: $FormattedText, arg1: $Int2IntFunction_, arg2: $UnaryOperator_<string>): $SubStringSource;
        static create(arg0: $FormattedText): $SubStringSource;
        get plainText(): string;
    }
    export class $HoverEvent$EntityTooltipInfo {
        static legacyCreate(arg0: $Component_, arg1: $RegistryOps<never>): $DataResult<$HoverEvent$EntityTooltipInfo>;
        getTooltipLines(): $List<$Component>;
        static CODEC: $Codec<$HoverEvent$EntityTooltipInfo>;
        name: ($Component) | undefined;
        id: $UUID;
        type: $EntityType<never>;
        constructor(arg0: $EntityType_<never>, arg1: $UUID_, arg2: $Component_);
        constructor(arg0: $EntityType_<never>, arg1: $UUID_, arg2: ($Component_) | undefined);
        get tooltipLines(): $List<$Component>;
    }
    export class $PlayerChatMessage extends $Record {
        hasExpiredServer(arg0: $Instant): boolean;
        removeSignature(): $PlayerChatMessage;
        static updateSignature(arg0: $SignatureUpdater$Output_, arg1: $SignedMessageLink_, arg2: $SignedMessageBody_): void;
        hasExpiredClient(arg0: $Instant): boolean;
        signedBody(): $SignedMessageBody;
        removeUnsignedContent(): $PlayerChatMessage;
        isFullyFiltered(): boolean;
        sender(): $UUID;
        withUnsignedContent(arg0: $Component_): $PlayerChatMessage;
        decoratedContent(): $Component;
        hasSignatureFrom(arg0: $UUID_): boolean;
        signedContent(): string;
        link(): $SignedMessageLink;
        static unsigned(arg0: $UUID_, arg1: string): $PlayerChatMessage;
        isSystem(): boolean;
        timeStamp(): $Instant;
        signature(): $MessageSignature;
        filter(arg0: boolean): $PlayerChatMessage;
        filter(arg0: $FilterMask): $PlayerChatMessage;
        static system(arg0: string): $PlayerChatMessage;
        verify(arg0: $SignatureValidator_): boolean;
        hasSignature(): boolean;
        salt(): number;
        unsignedContent(): $Component;
        filterMask(): $FilterMask;
        static MESSAGE_EXPIRES_AFTER_SERVER: $Duration;
        static MAP_CODEC: $MapCodec<$PlayerChatMessage>;
        static MESSAGE_EXPIRES_AFTER_CLIENT: $Duration;
        constructor(arg0: $SignedMessageLink_, arg1: $MessageSignature_, arg2: $SignedMessageBody_, arg3: $Component_, arg4: $FilterMask);
        get fullyFiltered(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PlayerChatMessage}.
     */
    export type $PlayerChatMessage_ = { unsignedContent?: $Component_, signedBody?: $SignedMessageBody_, link?: $SignedMessageLink_, signature?: $MessageSignature_, filterMask?: $FilterMask,  } | [unsignedContent?: $Component_, signedBody?: $SignedMessageBody_, link?: $SignedMessageLink_, signature?: $MessageSignature_, filterMask?: $FilterMask, ];
    export class $MutableComponent implements $Component, $ComponentKJS {
        getContents(): $ComponentContents;
        append(arg0: $Component_): $MutableComponent;
        static create(arg0: $ComponentContents_): $MutableComponent;
        setStyle(arg0: $Style): $MutableComponent;
        getVisualOrderText(): $FormattedCharSequence;
        withStyle(arg0: $UnaryOperator_<$Style>): $MutableComponent;
        withStyle(arg0: $ChatFormatting_): $MutableComponent;
        withStyle(arg0: $Style): $MutableComponent;
        withStyle(...arg0: $ChatFormatting_[]): $MutableComponent;
        withColor(arg0: number): $MutableComponent;
        getStyle(): $Style;
        getSiblings(): $List<$Component>;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        getString(arg0: number): string;
        getString(): string;
        contains(arg0: $Component_): boolean;
        copy(): $MutableComponent;
        tryCollapseToString(): string;
        plainCopy(): $MutableComponent;
        toFlatList(arg0: $Style): $List<$Component>;
        toFlatList(): $List<$Component>;
        forEach(action: $Consumer_<$Component>): void;
        getCodec(): $Codec<never>;
        self(): $MutableComponent;
        asIterable(): $Iterable<$Component>;
        color(c: $KubeColor_): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        bold(): $MutableComponent;
        italic(): $MutableComponent;
        italic(value: boolean): $MutableComponent;
        underlined(): $MutableComponent;
        underlined(value: boolean): $MutableComponent;
        strikethrough(): $MutableComponent;
        strikethrough(value: boolean): $MutableComponent;
        obfuscated(): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        hasStyle(): boolean;
        hasSiblings(): boolean;
        black(): $MutableComponent;
        darkBlue(): $MutableComponent;
        darkGreen(): $MutableComponent;
        darkAqua(): $MutableComponent;
        darkRed(): $MutableComponent;
        darkPurple(): $MutableComponent;
        gold(): $MutableComponent;
        gray(): $MutableComponent;
        darkGray(): $MutableComponent;
        blue(): $MutableComponent;
        green(): $MutableComponent;
        aqua(): $MutableComponent;
        red(): $MutableComponent;
        lightPurple(): $MutableComponent;
        yellow(): $MutableComponent;
        white(): $MutableComponent;
        noColor(): $MutableComponent;
        insertion(s: string): $MutableComponent;
        font(s: $ResourceLocation_): $MutableComponent;
        clickRunCommand(command: string): $MutableComponent;
        clickSuggestCommand(command: string): $MutableComponent;
        clickCopy(text: string): $MutableComponent;
        clickChangePage(page: string): $MutableComponent;
        clickOpenUrl(url: string): $MutableComponent;
        clickOpenFile(path: string): $MutableComponent;
        hover(s: $Component_): $MutableComponent;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        rawComponent(): $MutableComponent;
        /**
         * @deprecated
         */
        rawCopy(): $MutableComponent;
        /**
         * @deprecated
         */
        component(): $Component;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        contents: $ComponentContents;
        constructor(arg0: $ComponentContents_, arg1: $List_<$Component_>, arg2: $Style);
        get visualOrderText(): $FormattedCharSequence;
        get siblings(): $List<$Component>;
        get codec(): $Codec<never>;
    }
    /**
     * Values that may be interpreted as {@link $MutableComponent}.
     */
    export type $MutableComponent_ = string | { text?: string, translate?: SpecialTypes.TranslationKey, with?: any[], color?: $KubeColor_, bold?: boolean, italic?: boolean, underlined?: boolean, strikethrough?: boolean, obfuscated?: boolean, insertion?: string, font?: string, click?: $ClickEvent_, hover?: $MutableComponent_, extra?: $MutableComponent_[],  } | $MutableComponent_[];
    export class $HoverEvent$TypedHoverEvent<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $HoverEvent$TypedHoverEvent}.
     */
    export type $HoverEvent$TypedHoverEvent_<T> = { action?: $HoverEvent$Action<any>, value?: any,  } | [action?: $HoverEvent$Action<any>, value?: any, ];
    export class $ChatType$Bound extends $Record {
        decorateNarration(arg0: $Component_): $Component;
        withTargetName(arg0: $Component_): $ChatType$Bound;
        targetName(): ($Component) | undefined;
        name(): $Component;
        decorate(arg0: $Component_): $Component;
        chatType(): $Holder<$ChatType>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChatType$Bound>;
        constructor(arg0: $Holder_<$ChatType>, arg1: $Component_);
        constructor(arg0: $Holder_<$ChatType>, arg1: $Component_, arg2: ($Component_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ChatType$Bound}.
     */
    export type $ChatType$Bound_ = { name?: $Component_, targetName?: ($Component_) | undefined, chatType?: $Holder_<$ChatType>,  } | [name?: $Component_, targetName?: ($Component_) | undefined, chatType?: $Holder_<$ChatType>, ];
}
