import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ScoreHolder } from "@package/net/minecraft/world/scores";
import { $Record } from "@package/java/lang";
import { $Set } from "@package/java/util";
import { $LootContext, $LootContext$EntityTarget, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";

declare module "@package/net/minecraft/world/level/storage/loot/providers/score" {
    export class $ContextScoreboardNameProvider extends $Record implements $ScoreboardNameProvider {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static forTarget(arg0: $LootContext$EntityTarget_): $ScoreboardNameProvider;
        getScoreHolder(arg0: $LootContext): $ScoreHolder;
        target(): $LootContext$EntityTarget;
        getType(): $LootScoreProviderType;
        static INLINE_CODEC: $Codec<$ContextScoreboardNameProvider>;
        static CODEC: $MapCodec<$ContextScoreboardNameProvider>;
        constructor(arg0: $LootContext$EntityTarget_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootScoreProviderType;
    }
    /**
     * Values that may be interpreted as {@link $ContextScoreboardNameProvider}.
     */
    export type $ContextScoreboardNameProvider_ = { target?: $LootContext$EntityTarget_,  } | [target?: $LootContext$EntityTarget_, ];
    export class $ScoreboardNameProvider {
    }
    export interface $ScoreboardNameProvider {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getScoreHolder(arg0: $LootContext): $ScoreHolder;
        getType(): $LootScoreProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootScoreProviderType;
    }
    export class $LootScoreProviderType extends $Record {
        codec(): $MapCodec<$ScoreboardNameProvider>;
        constructor(arg0: $MapCodec_<$ScoreboardNameProvider>);
    }
    /**
     * Values that may be interpreted as {@link $LootScoreProviderType}.
     */
    export type $LootScoreProviderType_ = RegistryTypes.LootScoreProviderType | { codec?: $MapCodec_<$ScoreboardNameProvider>,  } | [codec?: $MapCodec_<$ScoreboardNameProvider>, ];
    export interface $LootScoreProviderType extends RegistryMarked<RegistryTypes.LootScoreProviderTypeTag, RegistryTypes.LootScoreProviderType> {}
    export class $ScoreboardNameProviders {
        static CODEC: $Codec<$ScoreboardNameProvider>;
        static FIXED: $LootScoreProviderType;
        static CONTEXT: $LootScoreProviderType;
        constructor();
    }
    export class $FixedScoreboardNameProvider extends $Record implements $ScoreboardNameProvider {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getScoreHolder(arg0: $LootContext): $ScoreHolder;
        name(): string;
        static forName(arg0: string): $ScoreboardNameProvider;
        getType(): $LootScoreProviderType;
        static CODEC: $MapCodec<$FixedScoreboardNameProvider>;
        constructor(arg0: string);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootScoreProviderType;
    }
    /**
     * Values that may be interpreted as {@link $FixedScoreboardNameProvider}.
     */
    export type $FixedScoreboardNameProvider_ = { name?: string,  } | [name?: string, ];
}
