import { $Serializable } from "@package/java/io";
import { $Stream } from "@package/java/util/stream";
import { $URL } from "@package/java/net";
import { $Subject, $Destroyable } from "@package/javax/security/auth";
import { $AlgorithmParameterSpec } from "@package/java/security/spec";
import { $Certificate, $CertPath } from "@package/java/security/cert";
import { $Enumeration, $Properties, $Random, $Map_, $Set, $Date, $List_ } from "@package/java/util";
import { $ClassLoader, $Object, $Class } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";
export * as spec from "@package/java/security/spec";
export * as cert from "@package/java/security/cert";

declare module "@package/java/security" {
    export class $KeyPair implements $Serializable {
        getPrivate(): $PrivateKey;
        getPublic(): $PublicKey;
        constructor(arg0: $PublicKey, arg1: $PrivateKey);
        get private(): $PrivateKey;
        get public(): $PublicKey;
    }
    export class $Principal {
    }
    export interface $Principal {
        getName(): string;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        implies(arg0: $Subject): boolean;
        get name(): string;
    }
    export class $Signature extends $SignatureSpi {
        setParameter(arg0: $AlgorithmParameterSpec): void;
        /**
         * @deprecated
         */
        setParameter(arg0: string, arg1: $Object): void;
        initVerify(arg0: $Certificate): void;
        initVerify(arg0: $PublicKey): void;
        initSign(arg0: $PrivateKey): void;
        initSign(arg0: $PrivateKey, arg1: $SecureRandom): void;
        getProvider(): $Provider;
        verify(arg0: number[], arg1: number, arg2: number): boolean;
        verify(arg0: number[]): boolean;
        update(arg0: number[]): void;
        update(arg0: number[], arg1: number, arg2: number): void;
        update(arg0: $ByteBuffer): void;
        update(arg0: number): void;
        static getInstance(arg0: string, arg1: $Provider): $Signature;
        static getInstance(arg0: string): $Signature;
        static getInstance(arg0: string, arg1: string): $Signature;
        getParameters(): $AlgorithmParameters;
        sign(arg0: number[], arg1: number, arg2: number): number;
        sign(): number[];
        getAlgorithm(): string;
        /**
         * @deprecated
         */
        getParameter(arg0: string): $Object;
        get provider(): $Provider;
        get parameters(): $AlgorithmParameters;
        get algorithm(): string;
    }
    export class $ProtectionDomain {
        getClassLoader(): $ClassLoader;
        getCodeSource(): $CodeSource;
        implies(arg0: $Permission): boolean;
        getPermissions(): $PermissionCollection;
        getPrincipals(): $Principal[];
        staticPermissionsOnly(): boolean;
        constructor(arg0: $CodeSource, arg1: $PermissionCollection);
        constructor(arg0: $CodeSource, arg1: $PermissionCollection, arg2: $ClassLoader, arg3: $Principal[]);
        get classLoader(): $ClassLoader;
        get codeSource(): $CodeSource;
        get permissions(): $PermissionCollection;
        get principals(): $Principal[];
    }
    export class $SignatureSpi {
        clone(): $Object;
        constructor();
    }
    export class $CodeSource implements $Serializable {
        getLocation(): $URL;
        getCertificates(): $Certificate[];
        implies(arg0: $CodeSource): boolean;
        getCodeSigners(): $CodeSigner[];
        constructor(arg0: $URL, arg1: $Certificate[]);
        constructor(arg0: $URL, arg1: $CodeSigner[]);
        get location(): $URL;
        get certificates(): $Certificate[];
        get codeSigners(): $CodeSigner[];
    }
    export class $SecureRandomParameters {
    }
    export interface $SecureRandomParameters {
    }
    export class $PrivilegedExceptionAction<T> {
    }
    export interface $PrivilegedExceptionAction<T> {
        run(): T;
    }
    /**
     * Values that may be interpreted as {@link $PrivilegedExceptionAction}.
     */
    export type $PrivilegedExceptionAction_<T> = (() => T);
    export class $CodeSigner implements $Serializable {
        getSignerCertPath(): $CertPath;
        getTimestamp(): $Timestamp;
        constructor(arg0: $CertPath, arg1: $Timestamp);
        get signerCertPath(): $CertPath;
        get timestamp(): $Timestamp;
    }
    export class $PrivilegedAction<T> {
    }
    export interface $PrivilegedAction<T> {
        run(): T;
    }
    /**
     * Values that may be interpreted as {@link $PrivilegedAction}.
     */
    export type $PrivilegedAction_<T> = (() => T);
    export class $Provider extends $Properties {
        configure(arg0: string): $Provider;
        isConfigured(): boolean;
        getVersionStr(): string;
        getInfo(): string;
        getService(arg0: string, arg1: string): $Provider$Service;
        getServices(): $Set<$Provider$Service>;
        /**
         * @deprecated
         */
        getVersion(): number;
        getName(): string;
        get configured(): boolean;
        get versionStr(): string;
        get info(): string;
        get services(): $Set<$Provider$Service>;
        get version(): number;
        get name(): string;
    }
    export class $SecureRandom extends $Random {
        setSeed(arg0: number[]): void;
        generateSeed(arg0: number): number[];
        static getSeed(arg0: number): number[];
        static getInstanceStrong(): $SecureRandom;
        reseed(): void;
        reseed(arg0: $SecureRandomParameters): void;
        getProvider(): $Provider;
        nextBytes(arg0: number[], arg1: $SecureRandomParameters): void;
        static getInstance(arg0: string, arg1: $SecureRandomParameters): $SecureRandom;
        static getInstance(arg0: string, arg1: $Provider): $SecureRandom;
        static getInstance(arg0: string, arg1: string): $SecureRandom;
        static getInstance(arg0: string): $SecureRandom;
        static getInstance(arg0: string, arg1: $SecureRandomParameters, arg2: string): $SecureRandom;
        static getInstance(arg0: string, arg1: $SecureRandomParameters, arg2: $Provider): $SecureRandom;
        getParameters(): $SecureRandomParameters;
        getAlgorithm(): string;
        constructor(arg0: number[]);
        constructor();
        static get instanceStrong(): $SecureRandom;
        get provider(): $Provider;
        get parameters(): $SecureRandomParameters;
        get algorithm(): string;
    }
    export class $PrivateKey {
        /**
         * @deprecated
         */
        static serialVersionUID: number;
    }
    export interface $PrivateKey extends $Key, $Destroyable {
    }
    export class $Guard {
    }
    export interface $Guard {
        checkGuard(arg0: $Object): void;
    }
    /**
     * Values that may be interpreted as {@link $Guard}.
     */
    export type $Guard_ = ((arg0: $Object) => void);
    export class $PublicKey {
        /**
         * @deprecated
         */
        static serialVersionUID: number;
    }
    export interface $PublicKey extends $Key {
    }
    export class $Provider$Service {
        supportsParameter(arg0: $Object): boolean;
        getProvider(): $Provider;
        getAttribute(arg0: string): string;
        newInstance(arg0: $Object): $Object;
        getType(): string;
        getClassName(): string;
        getAlgorithm(): string;
        constructor(arg0: $Provider, arg1: string, arg2: string, arg3: string, arg4: $List_<string>, arg5: $Map_<string, string>);
        get provider(): $Provider;
        get type(): string;
        get className(): string;
        get algorithm(): string;
    }
    /**
     * @deprecated
     */
    export class $AccessControlContext {
        checkPermission(arg0: $Permission): void;
        getDomainCombiner(): $DomainCombiner;
        constructor(arg0: $AccessControlContext, arg1: $DomainCombiner);
        constructor(arg0: $ProtectionDomain[]);
        get domainCombiner(): $DomainCombiner;
    }
    export class $PermissionCollection implements $Serializable {
        elementsAsStream(): $Stream<$Permission>;
        add(arg0: $Permission): void;
        elements(): $Enumeration<$Permission>;
        setReadOnly(): void;
        implies(arg0: $Permission): boolean;
        isReadOnly(): boolean;
        constructor();
    }
    export class $Permission implements $Guard, $Serializable {
        newPermissionCollection(): $PermissionCollection;
        checkGuard(arg0: $Object): void;
        getName(): string;
        implies(arg0: $Permission): boolean;
        getActions(): string;
        constructor(arg0: string);
        get name(): string;
        get actions(): string;
    }
    export class $AlgorithmParameters {
        getParameterSpec<T extends $AlgorithmParameterSpec>(arg0: $Class<T>): T;
        getProvider(): $Provider;
        static getInstance(arg0: string): $AlgorithmParameters;
        static getInstance(arg0: string, arg1: string): $AlgorithmParameters;
        static getInstance(arg0: string, arg1: $Provider): $AlgorithmParameters;
        init(arg0: $AlgorithmParameterSpec): void;
        init(arg0: number[], arg1: string): void;
        init(arg0: number[]): void;
        getEncoded(arg0: string): number[];
        getEncoded(): number[];
        getAlgorithm(): string;
        get provider(): $Provider;
        get algorithm(): string;
    }
    export class $Key {
        /**
         * @deprecated
         */
        static serialVersionUID: number;
    }
    export interface $Key extends $Serializable {
        getFormat(): string;
        getEncoded(): number[];
        getAlgorithm(): string;
        get format(): string;
        get encoded(): number[];
        get algorithm(): string;
    }
    export class $Timestamp implements $Serializable {
        getSignerCertPath(): $CertPath;
        getTimestamp(): $Date;
        constructor(arg0: $Date, arg1: $CertPath);
        get signerCertPath(): $CertPath;
        get timestamp(): $Date;
    }
}
