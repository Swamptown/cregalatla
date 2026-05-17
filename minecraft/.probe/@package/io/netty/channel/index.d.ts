import { $Serializable } from "@package/java/io";
import { $AttributeKey, $AttributeMap, $IntSupplier, $AbstractConstant, $Attribute, $IntSupplier_ } from "@package/io/netty/util";
import { $Promise, $EventExecutor, $ProgressiveFuture, $GenericFutureListener_, $ProgressivePromise, $MultithreadEventExecutorGroup, $Future, $EventExecutorGroup, $OrderedEventExecutor } from "@package/io/netty/util/concurrent";
import { $Executor_, $ThreadFactory_ } from "@package/java/util/concurrent";
import { $SocketAddress, $NetworkInterface, $InetAddress } from "@package/java/net";
import { $Queue, $List, $Map_, $Map, $Map$Entry } from "@package/java/util";
import { $Throwable, $Class, $Runnable_, $Comparable, $Object, $Iterable, $Runnable } from "@package/java/lang";
import { $ByteBufAllocator, $ByteBuf } from "@package/io/netty/buffer";
import { $ByteBuffer } from "@package/java/nio";
export * as epoll from "@package/io/netty/channel/epoll";
export * as nio from "@package/io/netty/channel/nio";

declare module "@package/io/netty/channel" {
    export class $EventLoop {
    }
    export interface $EventLoop extends $OrderedEventExecutor, $EventLoopGroup {
        parent(): $EventLoopGroup;
    }
    export class $WriteBufferWaterMark {
        high(): number;
        low(): number;
        static DEFAULT: $WriteBufferWaterMark;
        constructor(arg0: number, arg1: number);
    }
    export class $SimpleChannelInboundHandler<I> extends $ChannelInboundHandlerAdapter {
        acceptInboundMessage(arg0: $Object): boolean;
    }
    export class $ChannelOutboundInvoker {
    }
    export interface $ChannelOutboundInvoker {
        flush(): $ChannelOutboundInvoker;
        write(arg0: $Object, arg1: $ChannelPromise): $ChannelFuture;
        write(arg0: $Object): $ChannelFuture;
        close(arg0: $ChannelPromise): $ChannelFuture;
        close(): $ChannelFuture;
        read(): $ChannelOutboundInvoker;
        bind(arg0: $SocketAddress): $ChannelFuture;
        bind(arg0: $SocketAddress, arg1: $ChannelPromise): $ChannelFuture;
        connect(arg0: $SocketAddress): $ChannelFuture;
        connect(arg0: $SocketAddress, arg1: $SocketAddress): $ChannelFuture;
        connect(arg0: $SocketAddress, arg1: $ChannelPromise): $ChannelFuture;
        connect(arg0: $SocketAddress, arg1: $SocketAddress, arg2: $ChannelPromise): $ChannelFuture;
        voidPromise(): $ChannelPromise;
        deregister(arg0: $ChannelPromise): $ChannelFuture;
        deregister(): $ChannelFuture;
        writeAndFlush(arg0: $Object): $ChannelFuture;
        writeAndFlush(arg0: $Object, arg1: $ChannelPromise): $ChannelFuture;
        newPromise(): $ChannelPromise;
        newProgressivePromise(): $ChannelProgressivePromise;
        newSucceededFuture(): $ChannelFuture;
        newFailedFuture(arg0: $Throwable): $ChannelFuture;
        disconnect(): $ChannelFuture;
        disconnect(arg0: $ChannelPromise): $ChannelFuture;
    }
    export class $MultithreadEventLoopGroup extends $MultithreadEventExecutorGroup implements $EventLoopGroup {
        register(arg0: $Channel): $ChannelFuture;
        /**
         * @deprecated
         */
        register(arg0: $Channel, arg1: $ChannelPromise): $ChannelFuture;
        register(arg0: $ChannelPromise): $ChannelFuture;
    }
    export class $ChannelInboundInvoker {
    }
    export interface $ChannelInboundInvoker {
        fireExceptionCaught(arg0: $Throwable): $ChannelInboundInvoker;
        fireChannelRegistered(): $ChannelInboundInvoker;
        fireChannelUnregistered(): $ChannelInboundInvoker;
        fireChannelActive(): $ChannelInboundInvoker;
        fireChannelInactive(): $ChannelInboundInvoker;
        fireUserEventTriggered(arg0: $Object): $ChannelInboundInvoker;
        fireChannelRead(arg0: $Object): $ChannelInboundInvoker;
        fireChannelReadComplete(): $ChannelInboundInvoker;
        fireChannelWritabilityChanged(): $ChannelInboundInvoker;
    }
    export class $ChannelInboundHandlerAdapter extends $ChannelHandlerAdapter implements $ChannelInboundHandler {
        channelActive(arg0: $ChannelHandlerContext): void;
        channelInactive(arg0: $ChannelHandlerContext): void;
        channelRead(arg0: $ChannelHandlerContext, arg1: $Object): void;
        channelRegistered(arg0: $ChannelHandlerContext): void;
        channelUnregistered(arg0: $ChannelHandlerContext): void;
        channelReadComplete(arg0: $ChannelHandlerContext): void;
        userEventTriggered(arg0: $ChannelHandlerContext, arg1: $Object): void;
        channelWritabilityChanged(arg0: $ChannelHandlerContext): void;
        constructor();
    }
    export class $MessageSizeEstimator$Handle {
    }
    export interface $MessageSizeEstimator$Handle {
        size(arg0: $Object): number;
    }
    /**
     * Values that may be interpreted as {@link $MessageSizeEstimator$Handle}.
     */
    export type $MessageSizeEstimator$Handle_ = ((arg0: $Object) => number);
    export class $EventLoopGroup {
    }
    export interface $EventLoopGroup extends $EventExecutorGroup {
        next(): $EventLoop;
        /**
         * @deprecated
         */
        register(arg0: $Channel, arg1: $ChannelPromise): $ChannelFuture;
        register(arg0: $ChannelPromise): $ChannelFuture;
        register(arg0: $Channel): $ChannelFuture;
    }
    export class $ChannelMetadata {
        defaultMaxMessagesPerRead(): number;
        hasDisconnect(): boolean;
        constructor(arg0: boolean);
        constructor(arg0: boolean, arg1: number);
    }
    export class $RecvByteBufAllocator {
    }
    export interface $RecvByteBufAllocator {
        newHandle(): $RecvByteBufAllocator$Handle;
    }
    /**
     * Values that may be interpreted as {@link $RecvByteBufAllocator}.
     */
    export type $RecvByteBufAllocator_ = (() => $RecvByteBufAllocator$Handle);
    export class $SelectStrategyFactory {
    }
    export interface $SelectStrategyFactory {
        newSelectStrategy(): $SelectStrategy;
    }
    /**
     * Values that may be interpreted as {@link $SelectStrategyFactory}.
     */
    export type $SelectStrategyFactory_ = (() => $SelectStrategy);
    export class $ChannelProgressivePromise {
    }
    export interface $ChannelProgressivePromise extends $ProgressivePromise<void>, $ChannelProgressiveFuture, $ChannelPromise {
        await(): $ChannelProgressivePromise;
        sync(): $ChannelProgressivePromise;
        setFailure(arg0: $Throwable): $ChannelProgressivePromise;
        addListeners(...arg0: $GenericFutureListener_<$Future<void>>[]): $ChannelProgressivePromise;
        syncUninterruptibly(): $ChannelProgressivePromise;
        awaitUninterruptibly(): $ChannelProgressivePromise;
        setSuccess(arg0: void): $ChannelProgressivePromise;
        setSuccess(): $ChannelProgressivePromise;
        unvoid(): $ChannelProgressivePromise;
        setProgress(arg0: number, arg1: number): $ChannelProgressivePromise;
        removeListeners(...arg0: $GenericFutureListener_<$Future<void>>[]): $ChannelProgressivePromise;
        removeListener(arg0: $GenericFutureListener_<$Future<void>>): $ChannelProgressivePromise;
        addListener(arg0: $GenericFutureListener_<$Future<void>>): $ChannelProgressivePromise;
        set failure(value: $Throwable);
    }
    export class $Channel$Unsafe {
    }
    export interface $Channel$Unsafe {
        flush(): void;
        register(arg0: $EventLoop, arg1: $ChannelPromise): void;
        write(arg0: $Object, arg1: $ChannelPromise): void;
        close(arg0: $ChannelPromise): void;
        bind(arg0: $SocketAddress, arg1: $ChannelPromise): void;
        connect(arg0: $SocketAddress, arg1: $SocketAddress, arg2: $ChannelPromise): void;
        localAddress(): $SocketAddress;
        remoteAddress(): $SocketAddress;
        beginRead(): void;
        recvBufAllocHandle(): $RecvByteBufAllocator$Handle;
        outboundBuffer(): $ChannelOutboundBuffer;
        closeForcibly(): void;
        voidPromise(): $ChannelPromise;
        deregister(arg0: $ChannelPromise): void;
        disconnect(arg0: $ChannelPromise): void;
    }
    /**
     * @deprecated
     */
    export class $RecvByteBufAllocator$Handle {
    }
    export interface $RecvByteBufAllocator$Handle {
        reset(arg0: $ChannelConfig): void;
        allocate(arg0: $ByteBufAllocator): $ByteBuf;
        continueReading(): boolean;
        readComplete(): void;
        incMessagesRead(arg0: number): void;
        lastBytesRead(): number;
        lastBytesRead(arg0: number): void;
        attemptedBytesRead(): number;
        attemptedBytesRead(arg0: number): void;
        guess(): number;
    }
    export class $ChannelOutboundHandler {
    }
    export interface $ChannelOutboundHandler extends $ChannelHandler {
        flush(arg0: $ChannelHandlerContext): void;
        write(arg0: $ChannelHandlerContext, arg1: $Object, arg2: $ChannelPromise): void;
        close(arg0: $ChannelHandlerContext, arg1: $ChannelPromise): void;
        read(arg0: $ChannelHandlerContext): void;
        bind(arg0: $ChannelHandlerContext, arg1: $SocketAddress, arg2: $ChannelPromise): void;
        connect(arg0: $ChannelHandlerContext, arg1: $SocketAddress, arg2: $SocketAddress, arg3: $ChannelPromise): void;
        deregister(arg0: $ChannelHandlerContext, arg1: $ChannelPromise): void;
        disconnect(arg0: $ChannelHandlerContext, arg1: $ChannelPromise): void;
    }
    export class $ChannelOption<T> extends $AbstractConstant<$ChannelOption<T>> {
        static valueOf<T>(arg0: string): $ChannelOption<T>;
        static valueOf<T>(arg0: $Class<never>, arg1: string): $ChannelOption<T>;
        /**
         * @deprecated
         */
        static newInstance<T>(arg0: string): $ChannelOption<T>;
        validate(arg0: $ChannelOption<T>): void;
        static exists(arg0: string): boolean;
        /**
         * @deprecated
         */
        static WRITE_BUFFER_HIGH_WATER_MARK: $ChannelOption<number>;
        /**
         * @deprecated
         */
        static WRITE_BUFFER_LOW_WATER_MARK: $ChannelOption<number>;
        /**
         * @deprecated
         */
        static DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION: $ChannelOption<boolean>;
        static IP_TOS: $ChannelOption<number>;
        static SINGLE_EVENTEXECUTOR_PER_GROUP: $ChannelOption<boolean>;
        static SO_SNDBUF: $ChannelOption<number>;
        static IP_MULTICAST_IF: $ChannelOption<$NetworkInterface>;
        static WRITE_BUFFER_WATER_MARK: $ChannelOption<$WriteBufferWaterMark>;
        static TCP_NODELAY: $ChannelOption<boolean>;
        static TCP_FASTOPEN: $ChannelOption<number>;
        static SO_LINGER: $ChannelOption<number>;
        static SO_RCVBUF: $ChannelOption<number>;
        static SO_KEEPALIVE: $ChannelOption<boolean>;
        static ALLOCATOR: $ChannelOption<$ByteBufAllocator>;
        static IP_MULTICAST_ADDR: $ChannelOption<$InetAddress>;
        static IP_MULTICAST_LOOP_DISABLED: $ChannelOption<boolean>;
        static TCP_FASTOPEN_CONNECT: $ChannelOption<boolean>;
        static MESSAGE_SIZE_ESTIMATOR: $ChannelOption<$MessageSizeEstimator>;
        static WRITE_SPIN_COUNT: $ChannelOption<number>;
        static SO_TIMEOUT: $ChannelOption<number>;
        static SO_REUSEADDR: $ChannelOption<boolean>;
        static CONNECT_TIMEOUT_MILLIS: $ChannelOption<number>;
        static ALLOW_HALF_CLOSURE: $ChannelOption<boolean>;
        static SO_BACKLOG: $ChannelOption<number>;
        /**
         * @deprecated
         */
        static MAX_MESSAGES_PER_READ: $ChannelOption<number>;
        static AUTO_CLOSE: $ChannelOption<boolean>;
        static MAX_MESSAGES_PER_WRITE: $ChannelOption<number>;
        static SO_BROADCAST: $ChannelOption<boolean>;
        static AUTO_READ: $ChannelOption<boolean>;
        static IP_MULTICAST_TTL: $ChannelOption<number>;
        static RCVBUF_ALLOCATOR: $ChannelOption<$RecvByteBufAllocator>;
    }
    export class $MessageSizeEstimator {
    }
    export interface $MessageSizeEstimator {
        newHandle(): $MessageSizeEstimator$Handle;
    }
    /**
     * Values that may be interpreted as {@link $MessageSizeEstimator}.
     */
    export type $MessageSizeEstimator_ = (() => $MessageSizeEstimator$Handle_);
    export class $ChannelDuplexHandler extends $ChannelInboundHandlerAdapter implements $ChannelOutboundHandler {
        flush(arg0: $ChannelHandlerContext): void;
        write(arg0: $ChannelHandlerContext, arg1: $Object, arg2: $ChannelPromise): void;
        close(arg0: $ChannelHandlerContext, arg1: $ChannelPromise): void;
        read(arg0: $ChannelHandlerContext): void;
        bind(arg0: $ChannelHandlerContext, arg1: $SocketAddress, arg2: $ChannelPromise): void;
        connect(arg0: $ChannelHandlerContext, arg1: $SocketAddress, arg2: $SocketAddress, arg3: $ChannelPromise): void;
        deregister(arg0: $ChannelHandlerContext, arg1: $ChannelPromise): void;
        disconnect(arg0: $ChannelHandlerContext, arg1: $ChannelPromise): void;
        constructor();
    }
    export class $ChannelInboundHandler {
    }
    export interface $ChannelInboundHandler extends $ChannelHandler {
        exceptionCaught(arg0: $ChannelHandlerContext, arg1: $Throwable): void;
        channelActive(arg0: $ChannelHandlerContext): void;
        channelInactive(arg0: $ChannelHandlerContext): void;
        channelRead(arg0: $ChannelHandlerContext, arg1: $Object): void;
        channelRegistered(arg0: $ChannelHandlerContext): void;
        channelUnregistered(arg0: $ChannelHandlerContext): void;
        channelReadComplete(arg0: $ChannelHandlerContext): void;
        userEventTriggered(arg0: $ChannelHandlerContext, arg1: $Object): void;
        channelWritabilityChanged(arg0: $ChannelHandlerContext): void;
    }
    export class $SelectStrategy {
        static CONTINUE: number;
        static BUSY_WAIT: number;
        static SELECT: number;
    }
    export interface $SelectStrategy {
        calculateStrategy(arg0: $IntSupplier_, arg1: boolean): number;
    }
    /**
     * Values that may be interpreted as {@link $SelectStrategy}.
     */
    export type $SelectStrategy_ = ((arg0: $IntSupplier, arg1: boolean) => number);
    export class $ChannelOutboundHandlerAdapter extends $ChannelHandlerAdapter implements $ChannelOutboundHandler {
        flush(arg0: $ChannelHandlerContext): void;
        write(arg0: $ChannelHandlerContext, arg1: $Object, arg2: $ChannelPromise): void;
        close(arg0: $ChannelHandlerContext, arg1: $ChannelPromise): void;
        read(arg0: $ChannelHandlerContext): void;
        bind(arg0: $ChannelHandlerContext, arg1: $SocketAddress, arg2: $ChannelPromise): void;
        connect(arg0: $ChannelHandlerContext, arg1: $SocketAddress, arg2: $SocketAddress, arg3: $ChannelPromise): void;
        deregister(arg0: $ChannelHandlerContext, arg1: $ChannelPromise): void;
        disconnect(arg0: $ChannelHandlerContext, arg1: $ChannelPromise): void;
        constructor();
    }
    export class $ChannelOutboundBuffer {
        remove(): boolean;
        remove(arg0: $Throwable): boolean;
        size(): number;
        isEmpty(): boolean;
        current(): $Object;
        isWritable(): boolean;
        addFlush(): void;
        nioBufferSize(): number;
        removeBytes(arg0: number): void;
        getUserDefinedWritability(arg0: number): boolean;
        setUserDefinedWritability(arg0: number, arg1: boolean): void;
        totalPendingWriteBytes(): number;
        forEachFlushedMessage(arg0: $ChannelOutboundBuffer$MessageProcessor_): void;
        bytesBeforeUnwritable(): number;
        bytesBeforeWritable(): number;
        /**
         * @deprecated
         */
        recycle(): void;
        currentProgress(): number;
        nioBufferCount(): number;
        nioBuffers(arg0: number, arg1: number): $ByteBuffer[];
        nioBuffers(): $ByteBuffer[];
        addMessage(arg0: $Object, arg1: number, arg2: $ChannelPromise): void;
        progress(arg0: number): void;
        get empty(): boolean;
        get writable(): boolean;
    }
    export class $ChannelFuture {
    }
    export interface $ChannelFuture extends $Future<void> {
        await(): $ChannelFuture;
        isVoid(): boolean;
        sync(): $ChannelFuture;
        channel(): $Channel;
        addListeners(...arg0: $GenericFutureListener_<$Future<void>>[]): $ChannelFuture;
        syncUninterruptibly(): $ChannelFuture;
        awaitUninterruptibly(): $ChannelFuture;
        removeListeners(...arg0: $GenericFutureListener_<$Future<void>>[]): $ChannelFuture;
        removeListener(arg0: $GenericFutureListener_<$Future<void>>): $ChannelFuture;
        addListener(arg0: $GenericFutureListener_<$Future<void>>): $ChannelFuture;
        get void(): boolean;
    }
    export class $ChannelHandlerAdapter implements $ChannelHandler {
        handlerAdded(arg0: $ChannelHandlerContext): void;
        handlerRemoved(arg0: $ChannelHandlerContext): void;
        /**
         * @deprecated
         */
        exceptionCaught(arg0: $ChannelHandlerContext, arg1: $Throwable): void;
        isSharable(): boolean;
        constructor();
        get sharable(): boolean;
    }
    export class $ChannelPipeline {
    }
    export interface $ChannelPipeline extends $ChannelInboundInvoker, $ChannelOutboundInvoker, $Iterable<$Map$Entry<string, $ChannelHandler>> {
        remove(arg0: string): $ChannelHandler;
        remove<T extends $ChannelHandler>(arg0: $Class<T>): T;
        remove(arg0: $ChannelHandler): $ChannelPipeline;
        get(arg0: string): $ChannelHandler;
        get<T extends $ChannelHandler>(arg0: $Class<T>): T;
        flush(): $ChannelPipeline;
        replace(arg0: $ChannelHandler, arg1: string, arg2: $ChannelHandler): $ChannelPipeline;
        replace(arg0: string, arg1: string, arg2: $ChannelHandler): $ChannelHandler;
        replace<T extends $ChannelHandler>(arg0: $Class<T>, arg1: string, arg2: $ChannelHandler): T;
        last(): $ChannelHandler;
        toMap(): $Map<string, $ChannelHandler>;
        first(): $ChannelHandler;
        names(): $List<string>;
        context(arg0: $Class<$ChannelHandler>): $ChannelHandlerContext;
        context(arg0: string): $ChannelHandlerContext;
        context(arg0: $ChannelHandler): $ChannelHandlerContext;
        addFirst(arg0: string, arg1: $ChannelHandler): $ChannelPipeline;
        addFirst(arg0: $EventExecutorGroup, ...arg1: $ChannelHandler[]): $ChannelPipeline;
        addFirst(arg0: $EventExecutorGroup, arg1: string, arg2: $ChannelHandler): $ChannelPipeline;
        addFirst(...arg0: $ChannelHandler[]): $ChannelPipeline;
        addLast(arg0: $EventExecutorGroup, arg1: string, arg2: $ChannelHandler): $ChannelPipeline;
        addLast(arg0: string, arg1: $ChannelHandler): $ChannelPipeline;
        addLast(...arg0: $ChannelHandler[]): $ChannelPipeline;
        addLast(arg0: $EventExecutorGroup, ...arg1: $ChannelHandler[]): $ChannelPipeline;
        removeFirst(): $ChannelHandler;
        removeLast(): $ChannelHandler;
        channel(): $Channel;
        firstContext(): $ChannelHandlerContext;
        fireExceptionCaught(arg0: $Throwable): $ChannelPipeline;
        fireChannelRegistered(): $ChannelPipeline;
        fireChannelUnregistered(): $ChannelPipeline;
        fireChannelActive(): $ChannelPipeline;
        fireChannelInactive(): $ChannelPipeline;
        fireUserEventTriggered(arg0: $Object): $ChannelPipeline;
        fireChannelRead(arg0: $Object): $ChannelPipeline;
        fireChannelReadComplete(): $ChannelPipeline;
        fireChannelWritabilityChanged(): $ChannelPipeline;
        lastContext(): $ChannelHandlerContext;
        addAfter(arg0: $EventExecutorGroup, arg1: string, arg2: string, arg3: $ChannelHandler): $ChannelPipeline;
        addAfter(arg0: string, arg1: string, arg2: $ChannelHandler): $ChannelPipeline;
        addBefore(arg0: string, arg1: string, arg2: $ChannelHandler): $ChannelPipeline;
        addBefore(arg0: $EventExecutorGroup, arg1: string, arg2: string, arg3: $ChannelHandler): $ChannelPipeline;
    }
    export class $DefaultEventLoopGroup extends $MultithreadEventLoopGroup {
        constructor(arg0: number, arg1: $Executor_);
        constructor(arg0: number, arg1: $ThreadFactory_);
        constructor(arg0: $ThreadFactory_);
        constructor(arg0: number);
        constructor();
    }
    export class $ChannelPromise {
    }
    export interface $ChannelPromise extends $ChannelFuture, $Promise<void> {
        await(): $ChannelPromise;
        sync(): $ChannelPromise;
        channel(): $Channel;
        trySuccess(): boolean;
        setFailure(arg0: $Throwable): $ChannelPromise;
        addListeners(...arg0: $GenericFutureListener_<$Future<void>>[]): $ChannelPromise;
        syncUninterruptibly(): $ChannelPromise;
        awaitUninterruptibly(): $ChannelPromise;
        setSuccess(arg0: void): $ChannelPromise;
        setSuccess(): $ChannelPromise;
        unvoid(): $ChannelPromise;
        removeListeners(...arg0: $GenericFutureListener_<$Future<void>>[]): $ChannelPromise;
        removeListener(arg0: $GenericFutureListener_<$Future<void>>): $ChannelPromise;
        addListener(arg0: $GenericFutureListener_<$Future<void>>): $ChannelPromise;
        set failure(value: $Throwable);
    }
    export class $Channel {
    }
    export interface $Channel extends $AttributeMap, $ChannelOutboundInvoker, $Comparable<$Channel> {
        parent(): $Channel;
        flush(): $Channel;
        isOpen(): boolean;
        isRegistered(): boolean;
        id(): $ChannelId;
        unsafe(): $Channel$Unsafe;
        read(): $Channel;
        isActive(): boolean;
        config(): $ChannelConfig;
        isWritable(): boolean;
        localAddress(): $SocketAddress;
        remoteAddress(): $SocketAddress;
        closeFuture(): $ChannelFuture;
        bytesBeforeUnwritable(): number;
        bytesBeforeWritable(): number;
        eventLoop(): $EventLoop;
        alloc(): $ByteBufAllocator;
        metadata(): $ChannelMetadata;
        pipeline(): $ChannelPipeline;
        get open(): boolean;
        get registered(): boolean;
        get active(): boolean;
        get writable(): boolean;
    }
    export class $EventLoopTaskQueueFactory {
    }
    export interface $EventLoopTaskQueueFactory {
        newTaskQueue(arg0: number): $Queue<$Runnable>;
    }
    /**
     * Values that may be interpreted as {@link $EventLoopTaskQueueFactory}.
     */
    export type $EventLoopTaskQueueFactory_ = ((arg0: number) => $Queue<$Runnable_>);
    export class $ChannelConfig {
    }
    export interface $ChannelConfig {
        setOption<T>(arg0: $ChannelOption<T>, arg1: T): boolean;
        getOption<T>(arg0: $ChannelOption<T>): T;
        isAutoClose(): boolean;
        getConnectTimeoutMillis(): number;
        /**
         * @deprecated
         */
        getMaxMessagesPerRead(): number;
        /**
         * @deprecated
         */
        setMaxMessagesPerRead(arg0: number): $ChannelConfig;
        getWriteSpinCount(): number;
        setWriteSpinCount(arg0: number): $ChannelConfig;
        setRecvByteBufAllocator(arg0: $RecvByteBufAllocator_): $ChannelConfig;
        getWriteBufferHighWaterMark(): number;
        setWriteBufferHighWaterMark(arg0: number): $ChannelConfig;
        getWriteBufferLowWaterMark(): number;
        setWriteBufferLowWaterMark(arg0: number): $ChannelConfig;
        getMessageSizeEstimator(): $MessageSizeEstimator;
        setMessageSizeEstimator(arg0: $MessageSizeEstimator_): $ChannelConfig;
        getWriteBufferWaterMark(): $WriteBufferWaterMark;
        setWriteBufferWaterMark(arg0: $WriteBufferWaterMark): $ChannelConfig;
        getRecvByteBufAllocator<T extends $RecvByteBufAllocator>(): T;
        isAutoRead(): boolean;
        setAllocator(arg0: $ByteBufAllocator): $ChannelConfig;
        setOptions(arg0: $Map_<$ChannelOption<never>, never>): boolean;
        setAutoClose(arg0: boolean): $ChannelConfig;
        getOptions(): $Map<$ChannelOption<never>, $Object>;
        setConnectTimeoutMillis(arg0: number): $ChannelConfig;
        getAllocator(): $ByteBufAllocator;
        setAutoRead(arg0: boolean): $ChannelConfig;
    }
    export class $ChannelOutboundBuffer$MessageProcessor {
    }
    export interface $ChannelOutboundBuffer$MessageProcessor {
        processMessage(arg0: $Object): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChannelOutboundBuffer$MessageProcessor}.
     */
    export type $ChannelOutboundBuffer$MessageProcessor_ = ((arg0: $Object) => boolean);
    export class $ChannelId {
    }
    export interface $ChannelId extends $Serializable, $Comparable<$ChannelId> {
        asLongText(): string;
        asShortText(): string;
    }
    export class $ChannelProgressiveFuture {
    }
    export interface $ChannelProgressiveFuture extends $ChannelFuture, $ProgressiveFuture<void> {
        await(): $ChannelProgressiveFuture;
        sync(): $ChannelProgressiveFuture;
        addListeners(...arg0: $GenericFutureListener_<$Future<void>>[]): $ChannelProgressiveFuture;
        syncUninterruptibly(): $ChannelProgressiveFuture;
        awaitUninterruptibly(): $ChannelProgressiveFuture;
        removeListeners(...arg0: $GenericFutureListener_<$Future<void>>[]): $ChannelProgressiveFuture;
        removeListener(arg0: $GenericFutureListener_<$Future<void>>): $ChannelProgressiveFuture;
        addListener(arg0: $GenericFutureListener_<$Future<void>>): $ChannelProgressiveFuture;
    }
    export class $ChannelHandlerContext {
    }
    export interface $ChannelHandlerContext extends $AttributeMap, $ChannelInboundInvoker, $ChannelOutboundInvoker {
        name(): string;
        flush(): $ChannelHandlerContext;
        handler(): $ChannelHandler;
        read(): $ChannelHandlerContext;
        /**
         * @deprecated
         */
        attr<T>(arg0: $AttributeKey<T>): $Attribute<T>;
        channel(): $Channel;
        executor(): $EventExecutor;
        fireExceptionCaught(arg0: $Throwable): $ChannelHandlerContext;
        /**
         * @deprecated
         */
        hasAttr<T>(arg0: $AttributeKey<T>): boolean;
        fireChannelRegistered(): $ChannelHandlerContext;
        fireChannelUnregistered(): $ChannelHandlerContext;
        fireChannelActive(): $ChannelHandlerContext;
        fireChannelInactive(): $ChannelHandlerContext;
        fireUserEventTriggered(arg0: $Object): $ChannelHandlerContext;
        fireChannelRead(arg0: $Object): $ChannelHandlerContext;
        fireChannelReadComplete(): $ChannelHandlerContext;
        fireChannelWritabilityChanged(): $ChannelHandlerContext;
        alloc(): $ByteBufAllocator;
        pipeline(): $ChannelPipeline;
        isRemoved(): boolean;
        get removed(): boolean;
    }
    export class $ChannelHandler {
    }
    export interface $ChannelHandler {
        handlerAdded(arg0: $ChannelHandlerContext): void;
        handlerRemoved(arg0: $ChannelHandlerContext): void;
        /**
         * @deprecated
         */
        exceptionCaught(arg0: $ChannelHandlerContext, arg1: $Throwable): void;
    }
}
