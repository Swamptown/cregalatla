import { $NioEventLoopGroup } from "@package/io/netty/channel/nio";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag, $NbtAccounter, $CompoundTag } from "@package/net/minecraft/nbt";
import { $ClientStatusPacketListener } from "@package/net/minecraft/network/protocol/status";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $UUID_, $Map, $UUID, $List, $EnumSet, $Map_, $Date, $Collection_, $List_, $Collection, $BitSet } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $ByteToMessageDecoder$Cumulator, $MessageToMessageEncoder, $EncoderException, $MessageToMessageDecoder, $ByteToMessageDecoder, $MessageToByteEncoder } from "@package/io/netty/handler/codec";
import { $IntFunction_, $Supplier_, $IntFunction, $Consumer_, $Function, $BiConsumer_, $Function_, $BiFunction_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $RegistryAccess, $Registry, $SectionPos } from "@package/net/minecraft/core";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $IFriendlyByteBufExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $EpollEventLoopGroup } from "@package/io/netty/channel/epoll";
import { $Path_, $Path } from "@package/java/nio/file";
import { $InetSocketAddress, $SocketAddress, $URI } from "@package/java/net";
import { $PacketType, $PacketFlow, $PacketFlow_, $BundlerInfo, $PacketType_, $Packet } from "@package/net/minecraft/network/protocol";
import { $CharSequence, $Enum, $Exception, $Throwable, $Record, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $Cipher } from "@package/javax/crypto";
import { $ReferenceCounted } from "@package/io/netty/util";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $OutputStream } from "@package/java/io";
import { $Marker } from "@package/org/slf4j";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $DialtoneConnectionExtensions } from "@package/link/e4mc";
import { $PublicKey } from "@package/java/security";
import { $Instant } from "@package/java/time";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $ChannelHandlerContext, $Channel, $ChannelDuplexHandler, $ChannelPipeline, $ChannelInboundHandlerAdapter, $DefaultEventLoopGroup, $SimpleChannelInboundHandler, $ChannelFuture, $ChannelOutboundHandlerAdapter } from "@package/io/netty/channel";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ConnectionExtension } from "@package/dev/ryanhcode/sable/mixinterface/udp";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $StreamCodec, $StreamEncoder_, $StreamDecoder_ } from "@package/net/minecraft/network/codec";
import { $TriConsumer_ } from "@package/org/apache/commons/lang3/function";
export * as protocol from "@package/net/minecraft/network/protocol";
export * as chat from "@package/net/minecraft/network/chat";
export * as syncher from "@package/net/minecraft/network/syncher";
export * as codec from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network" {
    export class $CipherDecoder extends $MessageToMessageDecoder<$ByteBuf> {
        decode(arg0: $ChannelHandlerContext, arg1: $ByteBuf, arg2: $List_<$Object>): void;
        constructor(arg0: $Cipher);
    }
    export class $Utf8String {
        static write(arg0: $ByteBuf, arg1: $CharSequence, arg2: number): void;
        static read(arg0: $ByteBuf, arg1: number): string;
        constructor();
    }
    export class $MonitorFrameDecoder extends $ChannelInboundHandlerAdapter {
        constructor(arg0: $BandwidthDebugMonitor);
    }
    export class $VarLong {
        static write(arg0: $ByteBuf, arg1: number): $ByteBuf;
        static read(arg0: $ByteBuf): number;
        static getByteSize(arg0: number): number;
        static hasContinuationBit(arg0: number): boolean;
        constructor();
    }
    export class $RateKickingConnection extends $Connection {
        static PACKET_MARKER: $Marker;
        bandwidthDebugMonitor: $BandwidthDebugMonitor;
        static PACKET_SENT_MARKER: $Marker;
        static NETWORK_WORKER_GROUP: $Supplier<$NioEventLoopGroup>;
        static PACKET_RECEIVED_MARKER: $Marker;
        static LOCAL_WORKER_GROUP: $Supplier<$DefaultEventLoopGroup>;
        static ROOT_MARKER: $Marker;
        static NETWORK_EPOLL_WORKER_GROUP: $Supplier<$EpollEventLoopGroup>;
        constructor(arg0: number);
    }
    export class $DisconnectionDetails extends $Record {
        reason(): $Component;
        report(): ($Path) | undefined;
        bugReportLink(): ($URI) | undefined;
        constructor(arg0: $Component_);
        constructor(arg0: $Component_, arg1: ($Path_) | undefined, arg2: ($URI) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $DisconnectionDetails}.
     */
    export type $DisconnectionDetails_ = { reason?: $Component_, bugReportLink?: ($URI) | undefined, report?: ($Path_) | undefined,  } | [reason?: $Component_, bugReportLink?: ($URI) | undefined, report?: ($Path_) | undefined, ];
    export class $PacketListener {
    }
    export interface $PacketListener {
        protocol(): $ConnectionProtocol;
        isAcceptingMessages(): boolean;
        fillCrashReport(arg0: $CrashReport): void;
        flow(): $PacketFlow;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        get acceptingMessages(): boolean;
    }
    export class $ProtocolInfo$Unbound<T extends $PacketListener, B extends $ByteBuf> {
    }
    export interface $ProtocolInfo$Unbound<T extends $PacketListener, B extends $ByteBuf> {
        id(): $ConnectionProtocol;
        bind(arg0: $Function_<$ByteBuf, B>): $ProtocolInfo<T>;
        listPackets(arg0: $ProtocolInfo$Unbound$PacketVisitor_): void;
        flow(): $PacketFlow;
    }
    export class $UnconfiguredPipelineHandler$Outbound extends $ChannelOutboundHandlerAdapter {
        constructor();
    }
    export class $ConnectionProtocol extends $Enum<$ConnectionProtocol> {
        static values(): $ConnectionProtocol[];
        static valueOf(arg0: string): $ConnectionProtocol;
        id(): string;
        isPlay(): boolean;
        isConfiguration(): boolean;
        static PLAY: $ConnectionProtocol;
        static STATUS: $ConnectionProtocol;
        static CONFIGURATION: $ConnectionProtocol;
        static LOGIN: $ConnectionProtocol;
        static HANDSHAKING: $ConnectionProtocol;
        get play(): boolean;
        get configuration(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionProtocol}.
     */
    export type $ConnectionProtocol_ = "handshaking" | "play" | "status" | "login" | "configuration";
    export class $NoOpFrameEncoder extends $ChannelOutboundHandlerAdapter {
        constructor();
    }
    export class $RegistryFriendlyByteBuf extends $FriendlyByteBuf {
        getConnectionType(): $ConnectionType;
        static decorator(arg0: $RegistryAccess, arg1: $ConnectionType_): $Function<$ByteBuf, $RegistryFriendlyByteBuf>;
        /**
         * @deprecated
         */
        static decorator(arg0: $RegistryAccess): $Function<$ByteBuf, $RegistryFriendlyByteBuf>;
        registryAccess(): $RegistryAccess;
        static MAX_COMPONENT_STRING_LENGTH: number;
        static MAX_STRING_LENGTH: number;
        static DEFAULT_NBT_QUOTA: number;
        /**
         * @deprecated
         */
        constructor(arg0: $ByteBuf, arg1: $RegistryAccess);
        constructor(arg0: $ByteBuf, arg1: $RegistryAccess, arg2: $ConnectionType_);
        get connectionType(): $ConnectionType;
    }
    export class $ProtocolSwapHandler {
        static handleOutboundTerminalPacket(arg0: $ChannelHandlerContext, arg1: $Packet<never>): void;
        static handleInboundTerminalPacket(arg0: $ChannelHandlerContext, arg1: $Packet<never>): void;
    }
    export interface $ProtocolSwapHandler {
    }
    export class $CipherEncoder extends $MessageToByteEncoder<$ByteBuf> {
        encode(arg0: $ChannelHandlerContext, arg1: $ByteBuf, arg2: $ByteBuf): void;
        constructor(arg0: $Cipher);
    }
    export class $TickablePacketListener {
    }
    export interface $TickablePacketListener extends $PacketListener {
        tick(): void;
    }
    export class $FriendlyByteBuf extends $ByteBuf implements $IFriendlyByteBufExtension {
        clear(): $FriendlyByteBuf;
        getBytes(arg0: number, arg1: $ByteBuffer): $FriendlyByteBuf;
        getBytes(arg0: number, arg1: $OutputStream, arg2: number): $FriendlyByteBuf;
        getBytes(arg0: number, arg1: number[]): $FriendlyByteBuf;
        getBytes(arg0: number, arg1: $ByteBuf, arg2: number, arg3: number): $FriendlyByteBuf;
        getBytes(arg0: number, arg1: $ByteBuf): $FriendlyByteBuf;
        setChar(arg0: number, arg1: number): $FriendlyByteBuf;
        setShort(arg0: number, arg1: number): $FriendlyByteBuf;
        setDouble(arg0: number, arg1: number): $FriendlyByteBuf;
        capacity(arg0: number): $FriendlyByteBuf;
        writeLong(arg0: number): $FriendlyByteBuf;
        writeShort(arg0: number): $FriendlyByteBuf;
        writeBytes(arg0: $ByteBuf): $FriendlyByteBuf;
        writeChar(arg0: number): $FriendlyByteBuf;
        writeDouble(arg0: number): $FriendlyByteBuf;
        skipBytes(arg0: number): $FriendlyByteBuf;
        writeBoolean(arg0: boolean): $FriendlyByteBuf;
        /**
         * @deprecated
         */
        readWithCodecTrusted<T>(arg0: $DynamicOps<$Tag_>, arg1: $Codec<T>): T;
        /**
         * @deprecated
         */
        readWithCodec<T>(arg0: $DynamicOps<$Tag_>, arg1: $Codec<T>, arg2: $NbtAccounter): T;
        /**
         * @deprecated
         */
        writeWithCodec<T>(arg0: $DynamicOps<$Tag_>, arg1: $Codec<T>, arg2: T): $FriendlyByteBuf;
        readJsonWithCodec<T>(arg0: $Codec<T>): T;
        writeJsonWithCodec<T>(arg0: $Codec<T>, arg1: T): void;
        writeUtf(arg0: string, arg1: number): $FriendlyByteBuf;
        writeUtf(arg0: string): $FriendlyByteBuf;
        static limitValue<T>(arg0: $IntFunction_<T>, arg1: number): $IntFunction<T>;
        readCollection<T, C extends $Collection<T>>(arg0: $IntFunction_<C>, arg1: $StreamDecoder_<$FriendlyByteBuf, T>): C;
        readVarInt(): number;
        writeCollection<T>(arg0: $Collection_<T>, arg1: $StreamEncoder_<$FriendlyByteBuf, T>): void;
        writeVarInt(arg0: number): $FriendlyByteBuf;
        readIntIdList(): $IntList;
        writeIntIdList(arg0: $IntList): void;
        readWithCount(arg0: $Consumer_<$FriendlyByteBuf>): void;
        writeEnumSet<E extends $Enum<E>>(arg0: $EnumSet<E>, arg1: $Class<E>): void;
        writeFixedBitSet(arg0: $BitSet, arg1: number): void;
        readEnumSet<E extends $Enum<E>>(arg0: $Class<E>): $EnumSet<E>;
        readFixedBitSet(arg0: number): $BitSet;
        writeOptional<T>(arg0: (T) | undefined, arg1: $StreamEncoder_<$FriendlyByteBuf, T>): void;
        readOptional<T>(arg0: $StreamDecoder_<$FriendlyByteBuf, T>): (T) | undefined;
        writeVarIntArray(arg0: number[]): $FriendlyByteBuf;
        readVarIntArray(arg0: number): number[];
        readVarIntArray(): number[];
        writeLongArray(arg0: number[]): $FriendlyByteBuf;
        readLongArray(arg0: number[], arg1: number): number[];
        readLongArray(arg0: number[]): number[];
        readLongArray(): number[];
        static readBlockPos(arg0: $ByteBuf): $BlockPos;
        readBlockPos(): $BlockPos;
        readChunkPos(): $ChunkPos;
        writeChunkPos(arg0: $ChunkPos): $FriendlyByteBuf;
        readSectionPos(): $SectionPos;
        writeSectionPos(arg0: $SectionPos): $FriendlyByteBuf;
        readGlobalPos(): $GlobalPos;
        readResourceKey<T>(arg0: $ResourceKey_<$Registry<T>>): $ResourceKey<T>;
        writeGlobalPos(arg0: $GlobalPos_): void;
        writeResourceKey(arg0: $ResourceKey_<never>): void;
        readVec3(): $Vec3;
        writeVec3(arg0: $Vec3_): void;
        readEnum<T extends $Enum<T>>(arg0: $Class<T>): T;
        writeEnum(arg0: $Enum<never>): $FriendlyByteBuf;
        readById<T>(arg0: $IntFunction_<T>): T;
        writeById<T>(arg0: $ToIntFunction_<T>, arg1: T): $FriendlyByteBuf;
        readVarLong(): number;
        writeVarLong(arg0: number): $FriendlyByteBuf;
        readResourceLocation(): $ResourceLocation;
        writeResourceLocation(arg0: $ResourceLocation_): $FriendlyByteBuf;
        readRegistryKey<T>(): $ResourceKey<$Registry<T>>;
        readDate(): $Date;
        readInstant(): $Instant;
        writeInstant(arg0: $Instant): void;
        readPublicKey(): $PublicKey;
        writePublicKey(arg0: $PublicKey): $FriendlyByteBuf;
        readBlockHitResult(): $BlockHitResult;
        readerIndex(arg0: number): $FriendlyByteBuf;
        writerIndex(arg0: number): $FriendlyByteBuf;
        markReaderIndex(): $FriendlyByteBuf;
        resetReaderIndex(): $FriendlyByteBuf;
        markWriterIndex(): $FriendlyByteBuf;
        discardSomeReadBytes(): $FriendlyByteBuf;
        setShortLE(arg0: number, arg1: number): $FriendlyByteBuf;
        setMediumLE(arg0: number, arg1: number): $FriendlyByteBuf;
        setIntLE(arg0: number, arg1: number): $FriendlyByteBuf;
        setLongLE(arg0: number, arg1: number): $FriendlyByteBuf;
        setBytes(arg0: number, arg1: number[]): $FriendlyByteBuf;
        setBytes(arg0: number, arg1: $ByteBuf, arg2: number, arg3: number): $FriendlyByteBuf;
        setBytes(arg0: number, arg1: number[], arg2: number, arg3: number): $FriendlyByteBuf;
        setBytes(arg0: number, arg1: $ByteBuffer): $FriendlyByteBuf;
        setBytes(arg0: number, arg1: $ByteBuf): $FriendlyByteBuf;
        writeShortLE(arg0: number): $FriendlyByteBuf;
        writeMediumLE(arg0: number): $FriendlyByteBuf;
        writeIntLE(arg0: number): $FriendlyByteBuf;
        writeZero(arg0: number): $FriendlyByteBuf;
        writeBlockHitResult(arg0: $BlockHitResult): void;
        readBitSet(): $BitSet;
        writeBitSet(arg0: $BitSet): void;
        readUtf(arg0: number): string;
        readUtf(): string;
        writeDate(arg0: $Date): $FriendlyByteBuf;
        writeMap<K, V>(arg0: $Map_<K, V>, arg1: $StreamEncoder_<$FriendlyByteBuf, K>, arg2: $StreamEncoder_<$FriendlyByteBuf, V>): void;
        readUUID(): $UUID;
        static readUUID(arg0: $ByteBuf): $UUID;
        writeUUID(arg0: $UUID_): $FriendlyByteBuf;
        static writeUUID(arg0: $ByteBuf, arg1: $UUID_): void;
        readList<T>(arg0: $StreamDecoder_<$FriendlyByteBuf, T>): $List<T>;
        readMap<K, V>(arg0: $StreamDecoder_<$FriendlyByteBuf, K>, arg1: $StreamDecoder_<$FriendlyByteBuf, V>): $Map<K, V>;
        readMap<K, V, M extends $Map<K, V>>(arg0: $IntFunction_<M>, arg1: $StreamDecoder_<$FriendlyByteBuf, K>, arg2: $StreamDecoder_<$FriendlyByteBuf, V>): M;
        static readByteArray(arg0: $ByteBuf): number[];
        readByteArray(arg0: number): number[];
        readByteArray(): number[];
        static readByteArray(arg0: $ByteBuf, arg1: number): number[];
        static writeByteArray(arg0: $ByteBuf, arg1: number[]): void;
        writeByteArray(arg0: number[]): $FriendlyByteBuf;
        static readNbt(arg0: $ByteBuf, arg1: $NbtAccounter): $Tag;
        readNbt(): $CompoundTag;
        readNbt(arg0: $NbtAccounter): $Tag;
        static readNbt(arg0: $ByteBuf): $CompoundTag;
        static writeNbt(arg0: $ByteBuf, arg1: $Tag_): void;
        writeNbt(arg0: $Tag_): $FriendlyByteBuf;
        readVector3f(): $Vector3f;
        static readVector3f(arg0: $ByteBuf): $Vector3f;
        static writeQuaternion(arg0: $ByteBuf, arg1: $Quaternionf): void;
        writeQuaternion(arg0: $Quaternionf): void;
        static readNullable<T, B extends $ByteBuf>(arg0: B, arg1: $StreamDecoder_<B, T>): T;
        readNullable<T>(arg0: $StreamDecoder_<$FriendlyByteBuf, T>): T;
        writeNullable<T>(arg0: T, arg1: $StreamEncoder_<$FriendlyByteBuf, T>): void;
        static writeNullable<T, B extends $ByteBuf>(arg0: B, arg1: T, arg2: $StreamEncoder_<B, T>): void;
        static writeVector3f(arg0: $ByteBuf, arg1: $Vector3f): void;
        writeVector3f(arg0: $Vector3f): void;
        readQuaternion(): $Quaternionf;
        static readQuaternion(arg0: $ByteBuf): $Quaternionf;
        static writeBlockPos(arg0: $ByteBuf, arg1: $BlockPos_): void;
        writeBlockPos(arg0: $BlockPos_): $FriendlyByteBuf;
        getSource(): $ByteBuf;
        writeByte(arg0: number): $FriendlyByteBuf;
        writeObjectCollection<T>(arg0: $Collection_<T>, arg1: $BiConsumer_<T, $FriendlyByteBuf>): void;
        writeMap<K, V>(arg0: $Map_<K, V>, arg1: $StreamEncoder_<$FriendlyByteBuf, K>, arg2: $TriConsumer_<$FriendlyByteBuf, K, V>): void;
        readMap<K, V>(arg0: $StreamDecoder_<$FriendlyByteBuf, K>, arg1: $BiFunction_<$FriendlyByteBuf, K, V>): $Map<K, V>;
        readArray<T>(arg0: $IntFunction_<T[]>, arg1: $StreamDecoder_<$FriendlyByteBuf, T>): T[];
        writeArray<T>(arg0: T[], arg1: $StreamEncoder_<$FriendlyByteBuf, T>): $FriendlyByteBuf;
        touch(arg0: $Object): $ReferenceCounted;
        touch(): $ByteBuf;
        retain(arg0: number): $ByteBuf;
        retain(): $ByteBuf;
        static MAX_COMPONENT_STRING_LENGTH: number;
        static MAX_STRING_LENGTH: number;
        static DEFAULT_NBT_QUOTA: number;
        constructor(arg0: $ByteBuf);
        get source(): $ByteBuf;
    }
    export class $VarInt {
        static write(arg0: $ByteBuf, arg1: number): $ByteBuf;
        static read(arg0: $ByteBuf): number;
        static getByteSize(arg0: number): number;
        static hasContinuationBit(arg0: number): boolean;
        constructor();
    }
    export class $ProtocolInfo$Unbound$PacketVisitor {
    }
    export interface $ProtocolInfo$Unbound$PacketVisitor {
        accept(arg0: $PacketType_<never>, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ProtocolInfo$Unbound$PacketVisitor}.
     */
    export type $ProtocolInfo$Unbound$PacketVisitor_ = ((arg0: $PacketType<never>, arg1: number) => void);
    export class $SkipPacketException extends $EncoderException {
        constructor(arg0: $Throwable);
    }
    export class $UnconfiguredPipelineHandler$InboundConfigurationTask {
    }
    export interface $UnconfiguredPipelineHandler$InboundConfigurationTask {
        run(arg0: $ChannelHandlerContext): void;
        andThen(arg0: $UnconfiguredPipelineHandler$InboundConfigurationTask_): $UnconfiguredPipelineHandler$InboundConfigurationTask;
    }
    /**
     * Values that may be interpreted as {@link $UnconfiguredPipelineHandler$InboundConfigurationTask}.
     */
    export type $UnconfiguredPipelineHandler$InboundConfigurationTask_ = ((arg0: $ChannelHandlerContext) => void);
    export class $PacketDecoder<T extends $PacketListener> extends $ByteToMessageDecoder implements $ProtocolSwapHandler {
        decode(arg0: $ChannelHandlerContext, arg1: $ByteBuf, arg2: $List_<$Object>): void;
        static COMPOSITE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        static MERGE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        constructor(arg0: $ProtocolInfo<T>);
    }
    export class $PacketSendListener {
        static exceptionallySend(arg0: $Supplier_<$Packet<never>>): $PacketSendListener;
        static thenRun(arg0: $Runnable_): $PacketSendListener;
    }
    export interface $PacketSendListener {
        onFailure(): $Packet<never>;
        onSuccess(): void;
    }
    export class $CompressionEncoder extends $MessageToByteEncoder<$ByteBuf> {
        encode(arg0: $ChannelHandlerContext, arg1: $ByteBuf, arg2: $ByteBuf): void;
        setThreshold(arg0: number): void;
        getThreshold(): number;
        constructor(arg0: number);
    }
    export class $PacketBundlePacker extends $MessageToMessageDecoder<$Packet<never>> {
        decode(arg0: $ChannelHandlerContext, arg1: $Packet<never>, arg2: $List_<$Object>): void;
        constructor(arg0: $BundlerInfo);
    }
    export class $ClientboundPacketListener {
    }
    export interface $ClientboundPacketListener extends $PacketListener {
        flow(): $PacketFlow;
    }
    export class $PacketEncoder<T extends $PacketListener> extends $MessageToByteEncoder<$Packet<T>> {
        encode(arg0: $ChannelHandlerContext, arg1: $Packet<T>, arg2: $ByteBuf): void;
        getProtocolInfo(): $ProtocolInfo<T>;
        constructor(arg0: $ProtocolInfo<T>);
        get protocolInfo(): $ProtocolInfo<T>;
    }
    export class $Varint21LengthFieldPrepender extends $MessageToByteEncoder<$ByteBuf> {
        encode(arg0: $ChannelHandlerContext, arg1: $ByteBuf, arg2: $ByteBuf): void;
        static MAX_VARINT21_BYTES: number;
        constructor();
    }
    export class $BandwidthDebugMonitor {
        tick(): void;
        onReceive(arg0: number): void;
        constructor(arg0: $LocalSampleLogger);
    }
    export class $NoOpFrameDecoder extends $ChannelInboundHandlerAdapter {
        constructor();
    }
    export class $CipherBase {
        decipher(arg0: $ChannelHandlerContext, arg1: $ByteBuf): $ByteBuf;
        encipher(arg0: $ByteBuf, arg1: $ByteBuf): void;
        constructor(arg0: $Cipher);
    }
    export class $CompressionDecoder extends $ByteToMessageDecoder {
        decode(arg0: $ChannelHandlerContext, arg1: $ByteBuf, arg2: $List_<$Object>): void;
        setThreshold(arg0: number, arg1: boolean): void;
        static MAXIMUM_UNCOMPRESSED_LENGTH: number;
        static MAXIMUM_COMPRESSED_LENGTH: number;
        static COMPOSITE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        static MERGE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        constructor(arg0: number, arg1: boolean);
    }
    export class $HandlerNames {
        static LEGACY_QUERY: string;
        static ENCODER: string;
        static DECOMPRESS: string;
        static BUNDLER: string;
        static PACKET_HANDLER: string;
        static COMPRESS: string;
        static INBOUND_CONFIG: string;
        static DECRYPT: string;
        static UNBUNDLER: string;
        static OUTBOUND_CONFIG: string;
        static SPLITTER: string;
        static LATENCY: string;
        static ENCRYPT: string;
        static TIMEOUT: string;
        static PREPENDER: string;
        static DECODER: string;
        constructor();
    }
    export class $PacketBundleUnpacker extends $MessageToMessageEncoder<$Packet<never>> {
        encode(arg0: $ChannelHandlerContext, arg1: $Packet<never>, arg2: $List_<$Object>): void;
        constructor(arg0: $BundlerInfo);
    }
    export class $UnconfiguredPipelineHandler {
        static setupInboundProtocol<T extends $PacketListener>(arg0: $ProtocolInfo<T>): $UnconfiguredPipelineHandler$InboundConfigurationTask;
        static setupOutboundProtocol<T extends $PacketListener>(arg0: $ProtocolInfo<T>): $UnconfiguredPipelineHandler$OutboundConfigurationTask;
        constructor();
        static set upInboundProtocol(value: $ProtocolInfo<T>);
        static set upOutboundProtocol(value: $ProtocolInfo<T>);
    }
    export class $ServerboundPacketListener {
    }
    export interface $ServerboundPacketListener extends $PacketListener {
        flow(): $PacketFlow;
    }
    export class $UnconfiguredPipelineHandler$Inbound extends $ChannelDuplexHandler {
        constructor();
    }
    export class $Connection extends $SimpleChannelInboundHandler<$Packet<never>> implements $DialtoneConnectionExtensions, $ConnectionExtension {
        setReadOnly(): void;
        channel(): $Channel;
        static connect(arg0: $InetSocketAddress, arg1: boolean, arg2: $Connection): $ChannelFuture;
        isConnected(): boolean;
        getRemoteAddress(): $SocketAddress;
        tick(): void;
        setEncryptionKey(arg0: $Cipher, arg1: $Cipher): void;
        getInboundProtocol(): $ProtocolInfo<never>;
        getSending(): $PacketFlow;
        channelRead0(arg0: $ChannelHandlerContext, arg1: $Packet<never>): void;
        getReceiving(): $PacketFlow;
        setListenerForServerboundHandshake(arg0: $PacketListener): void;
        initiateServerboundStatusConnection(arg0: string, arg1: number, arg2: $ClientStatusPacketListener): void;
        runOnceConnected(arg0: $Consumer_<$Connection>): void;
        flushChannel(): void;
        tickSecond(): void;
        getLoggableAddress(arg0: boolean): string;
        static connectToServer(arg0: $InetSocketAddress, arg1: boolean, arg2: $LocalSampleLogger): $Connection;
        setBandwidthLogger(arg0: $LocalSampleLogger): void;
        configurePacketHandler(arg0: $ChannelPipeline): void;
        static configureSerialization(arg0: $ChannelPipeline, arg1: $PacketFlow_, arg2: boolean, arg3: $BandwidthDebugMonitor): void;
        static configureInMemoryPipeline(arg0: $ChannelPipeline, arg1: $PacketFlow_): void;
        isConnecting(): boolean;
        getDisconnectionDetails(): $DisconnectionDetails;
        setupCompression(arg0: number, arg1: boolean): void;
        getAverageReceivedPackets(): number;
        getAverageSentPackets(): number;
        e4mc$exportKeyingMaterial(label: number[], context: number[], length: number): number[];
        sable$setUDPChannel(arg0: $Channel): void;
        sable$getUDPChannel(): $Channel;
        getPacketListener(): $PacketListener;
        getDirection(): $PacketFlow;
        disconnect(arg0: $DisconnectionDetails_): void;
        disconnect(arg0: $Component_): void;
        send(arg0: $Packet<never>, arg1: $PacketSendListener): void;
        send(arg0: $Packet<never>, arg1: $PacketSendListener, arg2: boolean): void;
        send(arg0: $Packet<never>): void;
        static connectToLocalServer(arg0: $SocketAddress): $Connection;
        initiateServerboundPlayConnection(arg0: string, arg1: number, arg2: $ClientLoginPacketListener): void;
        initiateServerboundPlayConnection<S extends $ServerboundPacketListener, C extends $ClientboundPacketListener>(arg0: string, arg1: number, arg2: $ProtocolInfo<S>, arg3: $ProtocolInfo<C>, arg4: C, arg5: boolean): void;
        isEncrypted(): boolean;
        setupInboundProtocol<T extends $PacketListener>(arg0: $ProtocolInfo<T>, arg1: T): void;
        setupOutboundProtocol(arg0: $ProtocolInfo<never>): void;
        isMemoryConnection(): boolean;
        handleDisconnection(): void;
        static PACKET_MARKER: $Marker;
        bandwidthDebugMonitor: $BandwidthDebugMonitor;
        static PACKET_SENT_MARKER: $Marker;
        static NETWORK_WORKER_GROUP: $Supplier<$NioEventLoopGroup>;
        static PACKET_RECEIVED_MARKER: $Marker;
        static LOCAL_WORKER_GROUP: $Supplier<$DefaultEventLoopGroup>;
        static ROOT_MARKER: $Marker;
        static NETWORK_EPOLL_WORKER_GROUP: $Supplier<$EpollEventLoopGroup>;
        constructor(arg0: $PacketFlow_);
        get connected(): boolean;
        get remoteAddress(): $SocketAddress;
        get inboundProtocol(): $ProtocolInfo<never>;
        get sending(): $PacketFlow;
        get receiving(): $PacketFlow;
        set listenerForServerboundHandshake(value: $PacketListener);
        set bandwidthLogger(value: $LocalSampleLogger);
        get connecting(): boolean;
        get disconnectionDetails(): $DisconnectionDetails;
        get averageReceivedPackets(): number;
        get averageSentPackets(): number;
        get packetListener(): $PacketListener;
        get direction(): $PacketFlow;
        get encrypted(): boolean;
        set upOutboundProtocol(value: $ProtocolInfo<never>);
        get memoryConnection(): boolean;
    }
    export class $ProtocolInfo<T extends $PacketListener> {
    }
    export interface $ProtocolInfo<T extends $PacketListener> {
        id(): $ConnectionProtocol;
        bundlerInfo(): $BundlerInfo;
        codec(): $StreamCodec<$ByteBuf, $Packet<T>>;
        flow(): $PacketFlow;
    }
    export class $Varint21FrameDecoder extends $ByteToMessageDecoder {
        decode(arg0: $ChannelHandlerContext, arg1: $ByteBuf, arg2: $List_<$Object>): void;
        handlerRemoved0(arg0: $ChannelHandlerContext): void;
        static COMPOSITE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        static MERGE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        constructor(arg0: $BandwidthDebugMonitor);
    }
    export class $UnconfiguredPipelineHandler$OutboundConfigurationTask {
    }
    export interface $UnconfiguredPipelineHandler$OutboundConfigurationTask {
        run(arg0: $ChannelHandlerContext): void;
        andThen(arg0: $UnconfiguredPipelineHandler$OutboundConfigurationTask_): $UnconfiguredPipelineHandler$OutboundConfigurationTask;
    }
    /**
     * Values that may be interpreted as {@link $UnconfiguredPipelineHandler$OutboundConfigurationTask}.
     */
    export type $UnconfiguredPipelineHandler$OutboundConfigurationTask_ = ((arg0: $ChannelHandlerContext) => void);
}
