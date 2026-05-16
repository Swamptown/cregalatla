import { $Closeable } from "@package/java/io";
import { $Consumer_ } from "@package/java/util/function";
import { $Path_, $OpenOption } from "@package/java/nio/file";
import { $SocketOption, $SocketAddress, $ServerSocket, $NetworkInterface, $DatagramSocket, $InetAddress, $ProtocolFamily_, $Socket } from "@package/java/net";
import { $ExecutorService, $Future } from "@package/java/util/concurrent";
import { $AbstractSelectableChannel, $SelectorProvider, $AbstractInterruptibleChannel } from "@package/java/nio/channels/spi";
import { $FileAttribute } from "@package/java/nio/file/attribute";
import { $Arena, $MemorySegment } from "@package/java/lang/foreign";
import { $Throwable, $AutoCloseable, $Object } from "@package/java/lang";
import { $Set_, $Set } from "@package/java/util";
import { $ByteBuffer, $MappedByteBuffer } from "@package/java/nio";
export * as spi from "@package/java/nio/channels/spi";

declare module "@package/java/nio/channels" {
    export class $WritableByteChannel {
    }
    export interface $WritableByteChannel extends $Channel {
        write(arg0: $ByteBuffer): number;
    }
    export class $AsynchronousChannel {
    }
    export interface $AsynchronousChannel extends $Channel {
        close(): void;
    }
    export class $Pipe$SourceChannel extends $AbstractSelectableChannel implements $ReadableByteChannel, $ScatteringByteChannel {
    }
    export class $NetworkChannel {
    }
    export interface $NetworkChannel extends $Channel {
        bind(arg0: $SocketAddress): $NetworkChannel;
        getLocalAddress(): $SocketAddress;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $NetworkChannel;
        getOption<T>(arg0: $SocketOption<T>): T;
        supportedOptions(): $Set<$SocketOption<never>>;
        get localAddress(): $SocketAddress;
    }
    export class $Pipe$SinkChannel extends $AbstractSelectableChannel implements $WritableByteChannel, $GatheringByteChannel {
    }
    export class $ReadableByteChannel {
    }
    export interface $ReadableByteChannel extends $Channel {
        read(arg0: $ByteBuffer): number;
    }
    export class $SelectionKey {
        cancel(): void;
        attachment(): $Object;
        attach(arg0: $Object): $Object;
        channel(): $SelectableChannel;
        isWritable(): boolean;
        selector(): $Selector;
        isValid(): boolean;
        interestOps(): number;
        interestOps(arg0: number): $SelectionKey;
        isReadable(): boolean;
        interestOpsOr(arg0: number): number;
        interestOpsAnd(arg0: number): number;
        isConnectable(): boolean;
        isAcceptable(): boolean;
        readyOps(): number;
        static OP_CONNECT: number;
        static OP_ACCEPT: number;
        static OP_READ: number;
        static OP_WRITE: number;
        get writable(): boolean;
        get valid(): boolean;
        get readable(): boolean;
        get connectable(): boolean;
        get acceptable(): boolean;
    }
    export class $SeekableByteChannel {
    }
    export interface $SeekableByteChannel extends $ByteChannel {
        size(): number;
        position(arg0: number): $SeekableByteChannel;
        position(): number;
        write(arg0: $ByteBuffer): number;
        read(arg0: $ByteBuffer): number;
        truncate(arg0: number): $SeekableByteChannel;
    }
    export class $SocketChannel extends $AbstractSelectableChannel implements $ByteChannel, $ScatteringByteChannel, $GatheringByteChannel, $NetworkChannel {
        write(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        write(arg0: $ByteBuffer[]): number;
        write(arg0: $ByteBuffer): number;
        static open(arg0: $ProtocolFamily_): $SocketChannel;
        static open(arg0: $SocketAddress): $SocketChannel;
        static open(): $SocketChannel;
        read(arg0: $ByteBuffer[]): number;
        read(arg0: $ByteBuffer): number;
        read(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        getLocalAddress(): $SocketAddress;
        connect(arg0: $SocketAddress): boolean;
        isConnected(): boolean;
        shutdownInput(): $SocketChannel;
        shutdownOutput(): $SocketChannel;
        socket(): $Socket;
        isConnectionPending(): boolean;
        finishConnect(): boolean;
        getRemoteAddress(): $SocketAddress;
        bind(arg0: $SocketAddress): $NetworkChannel;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $NetworkChannel;
        get localAddress(): $SocketAddress;
        get connected(): boolean;
        get connectionPending(): boolean;
        get remoteAddress(): $SocketAddress;
    }
    export class $Selector implements $Closeable {
        isOpen(): boolean;
        provider(): $SelectorProvider;
        close(): void;
        keys(): $Set<$SelectionKey>;
        static open(): $Selector;
        selectNow(arg0: $Consumer_<$SelectionKey>): number;
        selectNow(): number;
        selectedKeys(): $Set<$SelectionKey>;
        wakeup(): $Selector;
        select(): number;
        select(arg0: $Consumer_<$SelectionKey>): number;
        select(arg0: $Consumer_<$SelectionKey>, arg1: number): number;
        select(arg0: number): number;
    }
    export class $ServerSocketChannel extends $AbstractSelectableChannel implements $NetworkChannel {
        accept(): $SocketChannel;
        static open(arg0: $ProtocolFamily_): $ServerSocketChannel;
        static open(): $ServerSocketChannel;
        bind(arg0: $SocketAddress, arg1: number): $ServerSocketChannel;
        getLocalAddress(): $SocketAddress;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $ServerSocketChannel;
        socket(): $ServerSocket;
        bind(arg0: $SocketAddress): $NetworkChannel;
        get localAddress(): $SocketAddress;
    }
    export class $Channel {
    }
    export interface $Channel extends $Closeable {
        isOpen(): boolean;
        close(): void;
        get open(): boolean;
    }
    export class $FileChannel$MapMode {
        static READ_ONLY: $FileChannel$MapMode;
        static READ_WRITE: $FileChannel$MapMode;
        static PRIVATE: $FileChannel$MapMode;
    }
    export class $ByteChannel {
    }
    export interface $ByteChannel extends $ReadableByteChannel, $WritableByteChannel {
    }
    export class $ScatteringByteChannel {
    }
    export interface $ScatteringByteChannel extends $ReadableByteChannel {
        read(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        read(arg0: $ByteBuffer[]): number;
    }
    export class $MembershipKey {
        group(): $InetAddress;
        unblock(arg0: $InetAddress): $MembershipKey;
        block(arg0: $InetAddress): $MembershipKey;
        channel(): $MulticastChannel;
        isValid(): boolean;
        networkInterface(): $NetworkInterface;
        sourceAddress(): $InetAddress;
        drop(): void;
        get valid(): boolean;
    }
    export class $CompletionHandler<V, A> {
    }
    export interface $CompletionHandler<V, A> {
        completed(arg0: V, arg1: A): void;
        failed(arg0: $Throwable, arg1: A): void;
    }
    export class $FileChannel extends $AbstractInterruptibleChannel implements $SeekableByteChannel, $GatheringByteChannel, $ScatteringByteChannel {
        size(): number;
        position(arg0: number): $FileChannel;
        position(): number;
        map(arg0: $FileChannel$MapMode, arg1: number, arg2: number): $MappedByteBuffer;
        map(arg0: $FileChannel$MapMode, arg1: number, arg2: number, arg3: $Arena): $MemorySegment;
        lock(arg0: number, arg1: number, arg2: boolean): $FileLock;
        lock(): $FileLock;
        write(arg0: $ByteBuffer, arg1: number): number;
        write(arg0: $ByteBuffer[]): number;
        write(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        write(arg0: $ByteBuffer): number;
        static open(arg0: $Path_, ...arg1: $OpenOption[]): $FileChannel;
        static open(arg0: $Path_, arg1: $Set_<$OpenOption>, ...arg2: $FileAttribute<never>[]): $FileChannel;
        read(arg0: $ByteBuffer): number;
        read(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        read(arg0: $ByteBuffer, arg1: number): number;
        read(arg0: $ByteBuffer[]): number;
        transferTo(arg0: number, arg1: number, arg2: $WritableByteChannel): number;
        tryLock(arg0: number, arg1: number, arg2: boolean): $FileLock;
        tryLock(): $FileLock;
        force(arg0: boolean): void;
        transferFrom(arg0: $ReadableByteChannel, arg1: number, arg2: number): number;
        truncate(arg0: number): $SeekableByteChannel;
    }
    export class $SelectableChannel extends $AbstractInterruptibleChannel implements $Channel {
        isRegistered(): boolean;
        register(arg0: $Selector, arg1: number): $SelectionKey;
        register(arg0: $Selector, arg1: number, arg2: $Object): $SelectionKey;
        provider(): $SelectorProvider;
        validOps(): number;
        keyFor(arg0: $Selector): $SelectionKey;
        configureBlocking(arg0: boolean): $SelectableChannel;
        isBlocking(): boolean;
        blockingLock(): $Object;
        get registered(): boolean;
        get blocking(): boolean;
    }
    export class $GatheringByteChannel {
    }
    export interface $GatheringByteChannel extends $WritableByteChannel {
        write(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        write(arg0: $ByteBuffer[]): number;
    }
    export class $MulticastChannel {
    }
    export interface $MulticastChannel extends $NetworkChannel {
        join(arg0: $InetAddress, arg1: $NetworkInterface): $MembershipKey;
        join(arg0: $InetAddress, arg1: $NetworkInterface, arg2: $InetAddress): $MembershipKey;
        close(): void;
    }
    export class $FileLock implements $AutoCloseable {
        size(): number;
        position(): number;
        close(): void;
        release(): void;
        channel(): $FileChannel;
        isValid(): boolean;
        acquiredBy(): $Channel;
        isShared(): boolean;
        overlaps(arg0: number, arg1: number): boolean;
        get valid(): boolean;
        get shared(): boolean;
    }
    export class $AsynchronousFileChannel implements $AsynchronousChannel {
        size(): number;
        lock<A>(arg0: number, arg1: number, arg2: boolean, arg3: A, arg4: $CompletionHandler<$FileLock, A>): void;
        lock<A>(arg0: A, arg1: $CompletionHandler<$FileLock, A>): void;
        lock(arg0: number, arg1: number, arg2: boolean): $Future<$FileLock>;
        lock(): $Future<$FileLock>;
        write<A>(arg0: $ByteBuffer, arg1: number, arg2: A, arg3: $CompletionHandler<number, A>): void;
        write(arg0: $ByteBuffer, arg1: number): $Future<number>;
        static open(arg0: $Path_, ...arg1: $OpenOption[]): $AsynchronousFileChannel;
        static open(arg0: $Path_, arg1: $Set_<$OpenOption>, arg2: $ExecutorService, ...arg3: $FileAttribute<never>[]): $AsynchronousFileChannel;
        read(arg0: $ByteBuffer, arg1: number): $Future<number>;
        read<A>(arg0: $ByteBuffer, arg1: number, arg2: A, arg3: $CompletionHandler<number, A>): void;
        tryLock(): $FileLock;
        tryLock(arg0: number, arg1: number, arg2: boolean): $FileLock;
        force(arg0: boolean): void;
        truncate(arg0: number): $AsynchronousFileChannel;
    }
    export class $InterruptibleChannel {
    }
    export interface $InterruptibleChannel extends $Channel {
        close(): void;
    }
    export class $Pipe {
        source(): $Pipe$SourceChannel;
        static open(): $Pipe;
        sink(): $Pipe$SinkChannel;
    }
    export class $DatagramChannel extends $AbstractSelectableChannel implements $ByteChannel, $ScatteringByteChannel, $GatheringByteChannel, $MulticastChannel {
        write(arg0: $ByteBuffer[]): number;
        write(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        write(arg0: $ByteBuffer): number;
        static open(arg0: $ProtocolFamily_): $DatagramChannel;
        static open(): $DatagramChannel;
        read(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        read(arg0: $ByteBuffer): number;
        read(arg0: $ByteBuffer[]): number;
        getLocalAddress(): $SocketAddress;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $DatagramChannel;
        connect(arg0: $SocketAddress): $DatagramChannel;
        isConnected(): boolean;
        socket(): $DatagramSocket;
        getRemoteAddress(): $SocketAddress;
        receive(arg0: $ByteBuffer): $SocketAddress;
        disconnect(): $DatagramChannel;
        send(arg0: $ByteBuffer, arg1: $SocketAddress): number;
        bind(arg0: $SocketAddress): $NetworkChannel;
        get localAddress(): $SocketAddress;
        get connected(): boolean;
        get remoteAddress(): $SocketAddress;
    }
}
