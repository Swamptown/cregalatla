import { $ScoreboardNameProvider } from "@package/net/minecraft/world/level/storage/loot/providers/score";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $LevelBasedValue } from "@package/net/minecraft/world/item/enchantment";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $NbtPathArgument$NbtPath } from "@package/net/minecraft/commands/arguments";
import { $Record } from "@package/java/lang";
import { $Set } from "@package/java/util";
import { $LootContextUser, $ValidationContext, $LootContext, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";

declare module "@package/net/minecraft/world/level/storage/loot/providers/number" {
    export class $NumberProvider {
    }
    export interface $NumberProvider extends $LootContextUser {
        getInt(arg0: $LootContext): number;
        getFloat(arg0: $LootContext): number;
        getType(): $LootNumberProviderType;
        get type(): $LootNumberProviderType;
    }
    /**
     * Values that may be interpreted as {@link $NumberProvider}.
     */
    export type $NumberProvider_ = number | [min: number, max: number, ] | { min: number, max: number,  } | { n: number, p: number,  } | { value: number,  };
    export class $UniformGenerator extends $Record implements $NumberProvider {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        min(): $NumberProvider;
        max(): $NumberProvider;
        getInt(arg0: $LootContext): number;
        getFloat(arg0: $LootContext): number;
        getType(): $LootNumberProviderType;
        static between(arg0: number, arg1: number): $UniformGenerator;
        validate(arg0: $ValidationContext): void;
        static CODEC: $MapCodec<$UniformGenerator>;
        constructor(arg0: $NumberProvider_, arg1: $NumberProvider_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootNumberProviderType;
    }
    /**
     * Values that may be interpreted as {@link $UniformGenerator}.
     */
    export type $UniformGenerator_ = { min?: $NumberProvider_, max?: $NumberProvider_,  } | [min?: $NumberProvider_, max?: $NumberProvider_, ];
    export class $ConstantValue extends $Record implements $NumberProvider {
        static exactly(arg0: number): $ConstantValue;
        value(): number;
        getFloat(arg0: $LootContext): number;
        getType(): $LootNumberProviderType;
        getInt(arg0: $LootContext): number;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        validate(arg0: $ValidationContext): void;
        static INLINE_CODEC: $Codec<$ConstantValue>;
        static CODEC: $MapCodec<$ConstantValue>;
        constructor(arg0: number);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $ConstantValue}.
     */
    export type $ConstantValue_ = { value?: number,  } | [value?: number, ];
    export class $StorageValue extends $Record implements $NumberProvider {
        getInt(arg0: $LootContext): number;
        getFloat(arg0: $LootContext): number;
        getType(): $LootNumberProviderType;
        path(): $NbtPathArgument$NbtPath;
        storage(): $ResourceLocation;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        validate(arg0: $ValidationContext): void;
        static CODEC: $MapCodec<$StorageValue>;
        constructor(arg0: $ResourceLocation_, arg1: $NbtPathArgument$NbtPath);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $StorageValue}.
     */
    export type $StorageValue_ = { storage?: $ResourceLocation_, path?: $NbtPathArgument$NbtPath,  } | [storage?: $ResourceLocation_, path?: $NbtPathArgument$NbtPath, ];
    export class $NumberProviders {
        static STORAGE: $LootNumberProviderType;
        static CODEC: $Codec<$NumberProvider>;
        static SCORE: $LootNumberProviderType;
        static BINOMIAL: $LootNumberProviderType;
        static UNIFORM: $LootNumberProviderType;
        static CONSTANT: $LootNumberProviderType;
        static ENCHANTMENT_LEVEL: $LootNumberProviderType;
        constructor();
    }
    export interface $LootNumberProviderType extends RegistryMarked<RegistryTypes.LootNumberProviderTypeTag, RegistryTypes.LootNumberProviderType> {}
    export class $ScoreboardValue extends $Record implements $NumberProvider {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static fromScoreboard(arg0: $LootContext$EntityTarget_, arg1: string, arg2: number): $ScoreboardValue;
        static fromScoreboard(arg0: $LootContext$EntityTarget_, arg1: string): $ScoreboardValue;
        target(): $ScoreboardNameProvider;
        getFloat(arg0: $LootContext): number;
        scale(): number;
        getType(): $LootNumberProviderType;
        score(): string;
        getInt(arg0: $LootContext): number;
        validate(arg0: $ValidationContext): void;
        static CODEC: $MapCodec<$ScoreboardValue>;
        constructor(arg0: $ScoreboardNameProvider, arg1: string, arg2: number);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootNumberProviderType;
    }
    /**
     * Values that may be interpreted as {@link $ScoreboardValue}.
     */
    export type $ScoreboardValue_ = { scale?: number, score?: string, target?: $ScoreboardNameProvider,  } | [scale?: number, score?: string, target?: $ScoreboardNameProvider, ];
    export class $EnchantmentLevelProvider extends $Record implements $NumberProvider {
        static forEnchantmentLevel(arg0: $LevelBasedValue): $EnchantmentLevelProvider;
        amount(): $LevelBasedValue;
        getFloat(arg0: $LootContext): number;
        getType(): $LootNumberProviderType;
        getInt(arg0: $LootContext): number;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        validate(arg0: $ValidationContext): void;
        static CODEC: $MapCodec<$EnchantmentLevelProvider>;
        constructor(arg0: $LevelBasedValue);
        get type(): $LootNumberProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentLevelProvider}.
     */
    export type $EnchantmentLevelProvider_ = { amount?: $LevelBasedValue,  } | [amount?: $LevelBasedValue, ];
    export class $LootNumberProviderType extends $Record {
        codec(): $MapCodec<$NumberProvider>;
        constructor(arg0: $MapCodec_<$NumberProvider_>);
    }
    /**
     * Values that may be interpreted as {@link $LootNumberProviderType}.
     */
    export type $LootNumberProviderType_ = RegistryTypes.LootNumberProviderType | { codec?: $MapCodec_<$NumberProvider_>,  } | [codec?: $MapCodec_<$NumberProvider_>, ];
    export class $BinomialDistributionGenerator extends $Record implements $NumberProvider {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getInt(arg0: $LootContext): number;
        getFloat(arg0: $LootContext): number;
        n(): $NumberProvider;
        p(): $NumberProvider;
        getType(): $LootNumberProviderType;
        static binomial(arg0: number, arg1: number): $BinomialDistributionGenerator;
        validate(arg0: $ValidationContext): void;
        static CODEC: $MapCodec<$BinomialDistributionGenerator>;
        constructor(arg0: $NumberProvider_, arg1: $NumberProvider_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootNumberProviderType;
    }
    /**
     * Values that may be interpreted as {@link $BinomialDistributionGenerator}.
     */
    export type $BinomialDistributionGenerator_ = { n?: $NumberProvider_, p?: $NumberProvider_,  } | [n?: $NumberProvider_, p?: $NumberProvider_, ];
}
