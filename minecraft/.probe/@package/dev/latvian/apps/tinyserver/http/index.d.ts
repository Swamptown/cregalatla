import { $HTTPResponse, $HTTPPayload } from "@package/dev/latvian/apps/tinyserver/http/response";
import { $Instant } from "@package/java/time";
import { $OptionalString, $HTTPServer, $OptionalString_, $CompiledPath, $CompiledPath_, $HTTPConnection } from "@package/dev/latvian/apps/tinyserver";
import { $List, $Map_, $Map, $Set, $List_ } from "@package/java/util";
import { $Throwable, $Enum, $Record } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";
export * as file from "@package/dev/latvian/apps/tinyserver/http/file";
export * as response from "@package/dev/latvian/apps/tinyserver/http/response";

declare module "@package/dev/latvian/apps/tinyserver/http" {
    export class $HTTPMethod extends $Enum<$HTTPMethod> {
        body(): boolean;
        static values(): $HTTPMethod[];
        static valueOf(name: string): $HTTPMethod;
        static fromString(method: string): $HTTPMethod;
        static TRACE: $HTTPMethod;
        static HEAD: $HTTPMethod;
        static DELETE: $HTTPMethod;
        static POST: $HTTPMethod;
        static GET: $HTTPMethod;
        static CONNECT: $HTTPMethod;
        static OPTIONS: $HTTPMethod;
        static PUT: $HTTPMethod;
        static PATCH: $HTTPMethod;
    }
    /**
     * Values that may be interpreted as {@link $HTTPMethod}.
     */
    export type $HTTPMethod_ = "head" | "get" | "post" | "put" | "patch" | "delete" | "options" | "trace" | "connect";
    export class $HTTPPathHandler<REQ extends $HTTPRequest> extends $Record {
        method(): $HTTPMethod;
        handler(): $HTTPHandler<REQ>;
        path(): $CompiledPath;
        static DEFAULT: $HTTPPathHandler<never>;
        constructor(method: $HTTPMethod_, path: $CompiledPath_, handler: $HTTPHandler_<REQ>);
    }
    /**
     * Values that may be interpreted as {@link $HTTPPathHandler}.
     */
    export type $HTTPPathHandler_<REQ> = { path?: $CompiledPath_, handler?: $HTTPHandler_<$HTTPRequest>, method?: $HTTPMethod_,  } | [path?: $CompiledPath_, handler?: $HTTPHandler_<$HTTPRequest>, method?: $HTTPMethod_, ];
    export class $Body {
        getPostData(): $Map<string, $OptionalString>;
        contentType(): string;
        byteBuffer(): $ByteBuffer;
        name(): string;
        fileName(): string;
        bytes(): number[];
        property(key: string): $OptionalString;
        text(): string;
        constructor();
        get postData(): $Map<string, $OptionalString>;
    }
    export class $HTTPRequest {
        fullPath(): string;
        createPreResponse(handler: $HTTPHandler_<never>): $HTTPResponse;
        afterResponse(payload: $HTTPPayload, response: $HTTPResponse, handler: $HTTPHandler_<never>, error: $Throwable): void;
        queryString(): string;
        mainBody(): $Body;
        formData(): $Map<string, $OptionalString>;
        formData(key: string): $OptionalString;
        acceptedEncodings(): $Set<string>;
        bodyBuffer(): $ByteBuffer;
        bodyList(): $List<$Body>;
        gitHubSignature(): string;
        gitHubEvent(): string;
        cookie(key: string): $OptionalString;
        cookies(): $Map<string, $OptionalString>;
        preInit(session: $HTTPConnection<never>, startTime: $Instant, method: $HTTPMethod_): void;
        ip(): string;
        header(name: string): $OptionalString;
        country(): string;
        variable(name: string): $OptionalString;
        method(): $HTTPMethod;
        init(path: string, pathParts: string[], compiledPath: $CompiledPath_, headers: $List_<$Header_>, queryString: string, query: $Map_<string, $OptionalString_>): void;
        startTime(): $Instant;
        query(): $Map<string, $OptionalString>;
        query(key: string): $OptionalString;
        path(): string;
        server(): $HTTPServer<never>;
        connection(): $HTTPConnection<never>;
        userAgent(): string;
        pathParts(): string[];
        headers(): $List<$Header>;
        afterInit(): void;
        variables(): $Map<string, $OptionalString>;
        ipv6(): string;
        handleResponse(payload: $HTTPPayload, response: $HTTPResponse, error: $Throwable): $HTTPResponse;
        constructor();
    }
    export class $Header extends $Record {
        value(): $OptionalString;
        key(): string;
        is(name: string): boolean;
        constructor(key: string, value: string);
        constructor(key: string, value: $OptionalString_);
    }
    /**
     * Values that may be interpreted as {@link $Header}.
     */
    export type $Header_ = { key?: string, value?: $OptionalString_,  } | [key?: string, value?: $OptionalString_, ];
    export class $HTTPHandler<REQ extends $HTTPRequest> {
    }
    export interface $HTTPHandler<REQ extends $HTTPRequest> {
        isFileHandler(): boolean;
        handle(req: REQ): $HTTPResponse;
        get fileHandler(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $HTTPHandler}.
     */
    export type $HTTPHandler_<REQ> = ((req: REQ) => $HTTPResponse);
    export class $HTTPUpgrade<REQ extends $HTTPRequest> {
    }
    export interface $HTTPUpgrade<REQ extends $HTTPRequest> {
        start(req: REQ): void;
        protocol(): string;
        isClosed(): boolean;
        get closed(): boolean;
    }
}
