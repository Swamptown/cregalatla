import { $OutputStream, $InputStream } from "@package/java/io";
export * as entity from "@package/org/apache/http/entity";

declare module "@package/org/apache/http" {
    export class $HttpEntity {
    }
    export interface $HttpEntity {
        isRepeatable(): boolean;
        isStreaming(): boolean;
        isChunked(): boolean;
        /**
         * @deprecated
         */
        consumeContent(): void;
        getContentType(): $Header;
        getContentEncoding(): $Header;
        getContentLength(): number;
        writeTo(arg0: $OutputStream): void;
        getContent(): $InputStream;
        get repeatable(): boolean;
        get streaming(): boolean;
        get chunked(): boolean;
        get contentType(): $Header;
        get contentEncoding(): $Header;
        get contentLength(): number;
        get content(): $InputStream;
    }
    export class $HeaderElement {
    }
    export interface $HeaderElement {
        getParameterByName(arg0: string): $NameValuePair;
        getName(): string;
        getValue(): string;
        getParameterCount(): number;
        getParameters(): $NameValuePair[];
        getParameter(arg0: number): $NameValuePair;
        get name(): string;
        get value(): string;
        get parameterCount(): number;
        get parameters(): $NameValuePair[];
    }
    export class $Header {
    }
    export interface $Header extends $NameValuePair {
        getElements(): $HeaderElement[];
        get elements(): $HeaderElement[];
    }
    export class $NameValuePair {
    }
    export interface $NameValuePair {
        getName(): string;
        getValue(): string;
        get name(): string;
        get value(): string;
    }
}
