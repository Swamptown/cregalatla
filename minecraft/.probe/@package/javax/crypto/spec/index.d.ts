import { $KeySpec } from "@package/java/security/spec";
import { $SecretKey } from "@package/javax/crypto";

declare module "@package/javax/crypto/spec" {
    export class $SecretKeySpec implements $KeySpec, $SecretKey {
        getEncoded(): number[];
        getFormat(): string;
        getAlgorithm(): string;
        isDestroyed(): boolean;
        destroy(): void;
        constructor(arg0: number[], arg1: string);
        constructor(arg0: number[], arg1: number, arg2: number, arg3: string);
        get encoded(): number[];
        get format(): string;
        get algorithm(): string;
        get destroyed(): boolean;
    }
}
