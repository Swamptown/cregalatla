import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Tag } from "@package/net/minecraft/nbt";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $Set } from "@package/java/util";
import { $LootContext, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";

declare module "@package/net/minecraft/world/level/storage/loot/providers/nbt" {
    export class $NbtProvider {
    }
    export interface $NbtProvider {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        get(arg0: $LootContext): $Tag;
        getType(): $LootNbtProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootNbtProviderType;
    }
    export class $NbtProviders {
        static STORAGE: $LootNbtProviderType;
        static CODEC: $Codec<$NbtProvider>;
        static CONTEXT: $LootNbtProviderType;
        constructor();
    }
    export class $ContextNbtProvider$Getter {
    }
    export interface $ContextNbtProvider$Getter {
    }
    export class $LootNbtProviderType extends $Record {
        codec(): $MapCodec<$NbtProvider>;
        constructor(arg0: $MapCodec_<$NbtProvider>);
    }
    /**
     * Values that may be interpreted as {@link $LootNbtProviderType}.
     */
    export type $LootNbtProviderType_ = RegistryTypes.LootNbtProviderType | { codec?: $MapCodec_<$NbtProvider>,  } | [codec?: $MapCodec_<$NbtProvider>, ];
    export class $ContextNbtProvider implements $NbtProvider {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static forContextEntity(arg0: $LootContext$EntityTarget_): $NbtProvider;
        get(arg0: $LootContext): $Tag;
        getType(): $LootNbtProviderType;
        static INLINE_CODEC: $Codec<$ContextNbtProvider>;
        static CODEC: $MapCodec<$ContextNbtProvider>;
        static BLOCK_ENTITY: $ContextNbtProvider;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootNbtProviderType;
    }
    export class $StorageNbtProvider extends $Record implements $NbtProvider {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        get(arg0: $LootContext): $Tag;
        id(): $ResourceLocation;
        getType(): $LootNbtProviderType;
        static CODEC: $MapCodec<$StorageNbtProvider>;
        constructor(arg0: $ResourceLocation_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootNbtProviderType;
    }
    /**
     * Values that may be interpreted as {@link $StorageNbtProvider}.
     */
    export type $StorageNbtProvider_ = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
    export interface $LootNbtProviderType extends RegistryMarked<RegistryTypes.LootNbtProviderTypeTag, RegistryTypes.LootNbtProviderType> {}
}
