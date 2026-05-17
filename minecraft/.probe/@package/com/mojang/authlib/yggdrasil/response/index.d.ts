import { $Record } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/com/mojang/authlib/yggdrasil/response" {
    export class $KeyPairResponse extends $Record {
        expiresAt(): string;
        keyPair(): $KeyPairResponse$KeyPair;
        refreshedAfter(): string;
        publicKeySignature(): $ByteBuffer;
        constructor(keyPair: $KeyPairResponse$KeyPair_, publicKeySignature: $ByteBuffer, expiresAt: string, refreshedAfter: string);
    }
    /**
     * Values that may be interpreted as {@link $KeyPairResponse}.
     */
    export type $KeyPairResponse_ = { publicKeySignature?: $ByteBuffer, expiresAt?: string, keyPair?: $KeyPairResponse$KeyPair_, refreshedAfter?: string,  } | [publicKeySignature?: $ByteBuffer, expiresAt?: string, keyPair?: $KeyPairResponse$KeyPair_, refreshedAfter?: string, ];
    export class $KeyPairResponse$KeyPair extends $Record {
        publicKey(): string;
        privateKey(): string;
        constructor(privateKey: string, publicKey: string);
    }
    /**
     * Values that may be interpreted as {@link $KeyPairResponse$KeyPair}.
     */
    export type $KeyPairResponse$KeyPair_ = { publicKey?: string, privateKey?: string,  } | [publicKey?: string, privateKey?: string, ];
}
