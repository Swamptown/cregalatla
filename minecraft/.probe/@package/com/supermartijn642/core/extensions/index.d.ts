import { $Registry } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";

declare module "@package/com/supermartijn642/core/extensions" {
    export class $CoreLibHolderReference {
    }
    export interface $CoreLibHolderReference {
        supermartijn642corelibOverride(key: $ResourceKey_<never>, value: $Object): void;
    }
    /**
     * Values that may be interpreted as {@link $CoreLibHolderReference}.
     */
    export type $CoreLibHolderReference_ = ((key: $ResourceKey<never>, value: $Object) => void);
    export class $TagLoaderExtension {
    }
    export interface $TagLoaderExtension {
        supermartijn642corelibSetRegistry(registry: $Registry<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $TagLoaderExtension}.
     */
    export type $TagLoaderExtension_ = ((registry: $Registry<never>) => void);
    export class $CoreLibMappedRegistry {
    }
    export interface $CoreLibMappedRegistry {
        supermartijn642corelibSetRegisterOverrides(flag: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $CoreLibMappedRegistry}.
     */
    export type $CoreLibMappedRegistry_ = ((flag: boolean) => void);
}
