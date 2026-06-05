import { $FFICIF } from "@package/org/lwjgl/system/libffi";
import { $ByteBuffer } from "@package/java/nio";
import { $CallbackI, $Callback } from "@package/org/lwjgl/system";

declare module "@package/org/lwjgl/stb" {
    export class $STBIWriteCallbackI {
        static CIF: $FFICIF;
    }
    export interface $STBIWriteCallbackI extends $CallbackI {
        callback(arg0: number, arg1: number): void;
        invoke(arg0: number, arg1: number, arg2: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $STBIWriteCallbackI}.
     */
    export type $STBIWriteCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $STBIWriteCallback extends $Callback implements $STBIWriteCallbackI {
        static getData(arg0: number, arg1: number): $ByteBuffer;
        static create(arg0: $STBIWriteCallbackI_): $STBIWriteCallback;
        static create(arg0: number): $STBIWriteCallback;
        static createSafe(arg0: number): $STBIWriteCallback;
        callback(arg0: number, arg1: number): void;
        getCallInterface(): $FFICIF;
        get callInterface(): $FFICIF;
    }
}
