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
        value(): string;
        static of(str: string): $OptionalString;
        isPresent(): boolean;
        as<T>(mapper: $Function_<string, T>): T;
        as<T>(mapper: $Function_<string, T>, def: T): T;
        isMissing(): boolean;
        asULong(): number;
        asULong(def: number): number;
        asZoneId(): $ZoneId;
        asDouble(): number;
        asDouble(def: number): number;
        asString(): string;
        asString(def: string): string;
        asLong(): number;
        asLong(def: number): number;
        asFloat(): number;
        asFloat(def: number): number;
        asBoolean(): boolean;
        asBoolean(def: boolean): boolean;
        require(): $OptionalString;
        asInt(def: number): number;
        asInt(): number;
        static MISSING: $OptionalString;
        static EMPTY: $OptionalString;
        constructor(value: string);
        get present(): boolean;
        get missing(): boolean;
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
        name(): string;
        matches(string: string): boolean;
        variable(): boolean;
        constructor(name: string, variable: boolean);
    }
    /**
     * Values that may be interpreted as {@link $CompiledPath$Part}.
     */
    export type $CompiledPath$Part_ = { name?: string, variable?: boolean,  } | [name?: string, variable?: boolean, ];
    export class $HTTPConnection<REQ extends $HTTPRequest> implements $Runnable {
        run(): void;
        write(buffer: $ByteBuffer): void;
        close(reason: string, error: boolean): void;
        close(): void;
        readInt(): number;
        read(buffer: $ByteBuffer): void;
        readLong(): number;
        readByte(): number;
        readShort(): number;
        readBytes(bytes: number[]): void;
        readBytes(bytes: number[], off: number, len: number): void;
        readFloat(): number;
        readDouble(): number;
        readCRLF(): string;
        upgrade(): $HTTPUpgrade<REQ>;
        readDirectly(buffer: $ByteBuffer): number;
        writeDirectly(buffer: $ByteBuffer): void;
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
        run(): void;
        setDaemon(daemon: boolean): void;
        start(): number;
        stop(): void;
        handlers(): $Stream<$HTTPPathHandler<REQ>>;
        setServerName(name: string): void;
        setAddress(address: string): void;
        setMaxKeepAliveConnections(max: number): void;
        setKeepAliveTimeout(duration: $Duration_): void;
        http(method: $HTTPMethod_, path: string, handler: $HTTPHandler_<REQ>): void;
        setBufferSize(bufferSize: number): void;
        isRunning(): boolean;
        setPort(port: number): void;
        setPort(range: $IntStream): void;
        createBuilder(req: REQ, handler: $HTTPHandler_<REQ>): $HTTPPayload;
        connections(): $Set<$HTTPConnection<REQ>>;
        get(path: string, handler: $HTTPHandler_<REQ>): void;
        put(path: string, handler: $HTTPHandler_<REQ>): void;
        delete(path: string, handler: $HTTPHandler_<REQ>): void;
        ws<WSS extends $WSSession<REQ>>(path: string): $WSHandler<REQ, WSS>;
        ws<WSS extends $WSSession<REQ>>(path: string, factory: $WSSessionFactory_<REQ, WSS>): $WSHandler<REQ, WSS>;
        patch(path: string, handler: $HTTPHandler_<REQ>): void;
        post(path: string, handler: $HTTPHandler_<REQ>): void;
        redirect(path: string, redirect: string): void;
        acceptPostString(path: string, handler: $Consumer_<string>): void;
        acceptPostTask(path: string, task: $Runnable_): void;
        dynamicFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        staticFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        singleFile(path: string, file: $Path_, responseHandler: $FileResponseHandler_): void;
        constructor(requestFactory: $Supplier_<REQ>);
        set daemon(value: boolean);
        set serverName(value: string);
        set address(value: string);
        set maxKeepAliveConnections(value: number);
        set keepAliveTimeout(value: $Duration_);
        set bufferSize(value: number);
        get running(): boolean;
    }
    export class $CompiledPath extends $Record {
        matches(path: string[]): string[];
        static compile(string: string): $CompiledPath;
        parts(): $CompiledPath$Part[];
        string(): string;
        variables(): number;
        wildcard(): boolean;
        static EMPTY: $CompiledPath;
        constructor(parts: $CompiledPath$Part_[], string: string, variables: number, wildcard: boolean);
    }
    /**
     * Values that may be interpreted as {@link $CompiledPath}.
     */
    export type $CompiledPath_ = { variables?: number, parts?: $CompiledPath$Part_[], string?: string, wildcard?: boolean,  } | [variables?: number, parts?: $CompiledPath$Part_[], string?: string, wildcard?: boolean, ];
    export class $ServerRegistry<REQ extends $HTTPRequest> {
    }
    export interface $ServerRegistry<REQ extends $HTTPRequest> {
        get(path: string, handler: $HTTPHandler_<REQ>): void;
        put(path: string, handler: $HTTPHandler_<REQ>): void;
        delete(path: string, handler: $HTTPHandler_<REQ>): void;
        ws<WSS extends $WSSession<REQ>>(path: string): $WSHandler<REQ, WSS>;
        ws<WSS extends $WSSession<REQ>>(path: string, factory: $WSSessionFactory_<REQ, WSS>): $WSHandler<REQ, WSS>;
        patch(path: string, handler: $HTTPHandler_<REQ>): void;
        post(path: string, handler: $HTTPHandler_<REQ>): void;
        redirect(path: string, redirect: string): void;
        acceptPostString(path: string, handler: $Consumer_<string>): void;
        acceptPostTask(path: string, task: $Runnable_): void;
        dynamicFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        staticFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        singleFile(path: string, file: $Path_, responseHandler: $FileResponseHandler_): void;
        http(method: $HTTPMethod_, path: string, handler: $HTTPHandler_<REQ>): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerRegistry}.
     */
    export type $ServerRegistry_<REQ> = ((method: $HTTPMethod, path: string, handler: $HTTPHandler<REQ>) => void);
}
