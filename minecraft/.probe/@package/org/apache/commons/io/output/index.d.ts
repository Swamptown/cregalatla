import { $OutputStream, $FilterOutputStream } from "@package/java/io";

declare module "@package/org/apache/commons/io/output" {
    export class $ProxyOutputStream extends $FilterOutputStream {
        constructor(arg0: $OutputStream);
    }
    export class $CountingOutputStream extends $ProxyOutputStream {
        getByteCount(): number;
        resetByteCount(): number;
        getCount(): number;
        resetCount(): number;
        constructor(arg0: $OutputStream);
        get byteCount(): number;
        get count(): number;
    }
}
