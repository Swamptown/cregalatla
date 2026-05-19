import { $Instant, $ZoneId, $Duration_ } from "@package/java/time";
import { $HTTPPayload } from "@package/dev/latvian/apps/tinyserver/http/response";
import { $Consumer_, $Supplier_, $Function_ } from "@package/java/util/function";
import { $FileResponseHandler_ } from "@package/dev/latvian/apps/tinyserver/http/file";
import { $IntStream, $Stream } from "@package/java/util/stream";
import { $WSSessionFactory_, $WSHandler, $WSSession } from "@package/dev/latvian/apps/tinyserver/ws";
import { $Path_ } from "@package/java/nio/file";
import { $HTTPRequest, $HTTPHandler_, $HTTPPathHandler, $HTTPHandler, $HTTPUpgrade, $HTTPMethod_, $HTTPMethod } from "@package/dev/latvian/apps/tinyserver/http";
import { $Runnable_, $Record, $Runnable } from "@package/java/lang";
import { $Set } from "@package/java/util";
import { $SocketChannel } from "@package/java/nio/channels";
import { $ByteBuffer } from "@package/java/nio";
export * as ws from "@package/dev/latvian/apps/tinyserver/ws";
export * as http from "@package/dev/latvian/apps/tinyserver/http";
export * as content from "@package/dev/latvian/apps/tinyserver/content";

declare module "@package/dev/latvian/apps/tinyserver" {
    export class $OptionalString extends $Record {
        asULong(): number;
        asULong(def: number): number;
        asZoneId(): $ZoneId;
        isMissing(): boolean;
        asInt(): number;
        asInt(def: number): number;
        value(): string;
        static of(str: string): $OptionalString;
        isPresent(): boolean;
        as<T>(mapper: $Function_<string, T>): T;
        as<T>(mapper: $Function_<string, T>, def: T): T;
        asDouble(def: number): number;
        asDouble(): number;
        asString(def: string): string;
        asString(): string;
        asLong(): number;
        asLong(def: number): number;
        require(): $OptionalString;
        asBoolean(): boolean;
        asBoolean(def: boolean): boolean;
        asFloat(): number;
        asFloat(def: number): number;
        static MISSING: $OptionalString;
        static EMPTY: $OptionalString;
        constructor(value: string);
        get missing(): boolean;
        get present(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $OptionalString}.
     */
    export type $OptionalString_ = { value?: string,  } | [value?: string, ];
    export class $StatusCode extends $Record {
        code(): number;
        message(): string;
        constructor(code: number, message: string);
    }
    /**
     * Values that may be interpreted as {@link $StatusCode}.
     */
    export type $StatusCode_ = { message?: string, code?: number,  } | [message?: string, code?: number, ];
    export class $CompiledPath$Part extends $Record {
        variable(): boolean;
        name(): string;
        matches(string: string): boolean;
        constructor(name: string, variable: boolean);
    }
    /**
     * Values that may be interpreted as {@link $CompiledPath$Part}.
     */
    export type $CompiledPath$Part_ = { variable?: boolean, name?: string,  } | [variable?: boolean, name?: string, ];
    export class $HTTPConnection<REQ extends $HTTPRequest> implements $Runnable {
        readDirectly(buffer: $ByteBuffer): number;
        writeDirectly(buffer: $ByteBuffer): void;
        upgrade(): $HTTPUpgrade<REQ>;
        readCRLF(): string;
        readFloat(): number;
        readByte(): number;
        readShort(): number;
        readLong(): number;
        readDouble(): number;
        run(): void;
        write(buffer: $ByteBuffer): void;
        read(buffer: $ByteBuffer): void;
        close(): void;
        close(reason: string, error: boolean): void;
        readInt(): number;
        readBytes(bytes: number[]): void;
        readBytes(bytes: number[], off: number, len: number): void;
        server(): $HTTPServer<REQ>;
        static SOCKET_CLOSED: $StatusCode;
        static CLOSED: $StatusCode;
        static INVALID_REQUEST: $StatusCode;
        createdTime: $Instant;
        static TIMEOUT: $StatusCode;
        static OPEN: $StatusCode;
        constructor(server: $HTTPServer<REQ>, socketChannel: $SocketChannel, createdTime: $Instant);
    }
    export class $HTTPServer<REQ extends $HTTPRequest> implements $Runnable, $ServerRegistry<REQ> {
        setServerName(name: string): void;
        setAddress(address: string): void;
        setMaxKeepAliveConnections(max: number): void;
        setKeepAliveTimeout(duration: $Duration_): void;
        run(): void;
        setDaemon(daemon: boolean): void;
        start(): number;
        stop(): void;
        handlers(): $Stream<$HTTPPathHandler<REQ>>;
        createBuilder(req: REQ, handler: $HTTPHandler_<REQ>): $HTTPPayload;
        http(method: $HTTPMethod_, path: string, handler: $HTTPHandler_<REQ>): void;
        setBufferSize(bufferSize: number): void;
        isRunning(): boolean;
        setPort(range: $IntStream): void;
        setPort(port: number): void;
        connections(): $Set<$HTTPConnection<REQ>>;
        singleFile(path: string, file: $Path_, responseHandler: $FileResponseHandler_): void;
        dynamicFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        staticFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        acceptPostString(path: string, handler: $Consumer_<string>): void;
        acceptPostTask(path: string, task: $Runnable_): void;
        redirect(path: string, redirect: string): void;
        post(path: string, handler: $HTTPHandler_<REQ>): void;
        get(path: string, handler: $HTTPHandler_<REQ>): void;
        put(path: string, handler: $HTTPHandler_<REQ>): void;
        delete(path: string, handler: $HTTPHandler_<REQ>): void;
        patch(path: string, handler: $HTTPHandler_<REQ>): void;
        ws<WSS extends $WSSession<REQ>>(path: string): $WSHandler<REQ, WSS>;
        ws<WSS extends $WSSession<REQ>>(path: string, factory: $WSSessionFactory_<REQ, WSS>): $WSHandler<REQ, WSS>;
        constructor(requestFactory: $Supplier_<REQ>);
        set serverName(value: string);
        set address(value: string);
        set maxKeepAliveConnections(value: number);
        set keepAliveTimeout(value: $Duration_);
        set daemon(value: boolean);
        set bufferSize(value: number);
        get running(): boolean;
    }
    export class $CompiledPath extends $Record {
        variables(): number;
        wildcard(): boolean;
        matches(path: string[]): string[];
        static compile(string: string): $CompiledPath;
        parts(): $CompiledPath$Part[];
        string(): string;
        static EMPTY: $CompiledPath;
        constructor(parts: $CompiledPath$Part_[], string: string, variables: number, wildcard: boolean);
    }
    /**
     * Values that may be interpreted as {@link $CompiledPath}.
     */
    export type $CompiledPath_ = { string?: string, parts?: $CompiledPath$Part_[], variables?: number, wildcard?: boolean,  } | [string?: string, parts?: $CompiledPath$Part_[], variables?: number, wildcard?: boolean, ];
    export class $ServerRegistry<REQ extends $HTTPRequest> {
    }
    export interface $ServerRegistry<REQ extends $HTTPRequest> {
        singleFile(path: string, file: $Path_, responseHandler: $FileResponseHandler_): void;
        dynamicFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        staticFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        acceptPostString(path: string, handler: $Consumer_<string>): void;
        acceptPostTask(path: string, task: $Runnable_): void;
        redirect(path: string, redirect: string): void;
        post(path: string, handler: $HTTPHandler_<REQ>): void;
        get(path: string, handler: $HTTPHandler_<REQ>): void;
        put(path: string, handler: $HTTPHandler_<REQ>): void;
        delete(path: string, handler: $HTTPHandler_<REQ>): void;
        patch(path: string, handler: $HTTPHandler_<REQ>): void;
        ws<WSS extends $WSSession<REQ>>(path: string): $WSHandler<REQ, WSS>;
        ws<WSS extends $WSSession<REQ>>(path: string, factory: $WSSessionFactory_<REQ, WSS>): $WSHandler<REQ, WSS>;
        http(method: $HTTPMethod_, path: string, handler: $HTTPHandler_<REQ>): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerRegistry}.
     */
    export type $ServerRegistry_<REQ> = ((method: $HTTPMethod, path: string, handler: $HTTPHandler<REQ>) => void);
}
