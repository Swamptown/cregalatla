import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $EntityType, $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/fr/lucreeper74/createmetallurgy/content/blocks/industrial_crucible/foundry/recipes/base" {
    export class $DamagedEntityIngredient {
        test(arg0: $EntityType_<never>): boolean;
        static fromType(arg0: $EntityType_<never>, arg1: number): $DamagedEntityIngredient;
        static fromEntity(arg0: $Entity, arg1: number): $DamagedEntityIngredient;
        getDisplay(): $List<$DamagedEntityIngredient$EntityStack>;
        getIngredient(): $EntityIngredient;
        getEntities(): $List<$EntityType<never>>;
        getDamage(): number;
        static fromTag(arg0: $TagKey_<$EntityType<never>>, arg1: number): $DamagedEntityIngredient;
        static CODEC: $Codec<$DamagedEntityIngredient>;
        static EMPTY: $DamagedEntityIngredient;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DamagedEntityIngredient>;
        constructor(arg0: $EntityIngredient, arg1: number);
        get display(): $List<$DamagedEntityIngredient$EntityStack>;
        get ingredient(): $EntityIngredient;
        get entities(): $List<$EntityType<never>>;
        get damage(): number;
    }
    export class $EntityIngredient implements $Predicate<$EntityType<never>> {
        test(arg0: $EntityType_<never>): boolean;
        getEntities(): $List<$EntityType<never>>;
        or(arg0: $Predicate_<$EntityType<never>>): $Predicate<$EntityType<never>>;
        negate(): $Predicate<$EntityType<never>>;
        and(arg0: $Predicate_<$EntityType<never>>): $Predicate<$EntityType<never>>;
        static CODEC: $MapCodec<$EntityIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EntityIngredient>;
        constructor();
        get entities(): $List<$EntityType<never>>;
    }
    export class $DamagedEntityIngredient$EntityStack extends $Record {
        type(): $EntityType<never>;
        static wrap(arg0: $List_<$EntityType_<never>>): $List<$DamagedEntityIngredient$EntityStack>;
        static CODEC: $Codec<$DamagedEntityIngredient$EntityStack>;
        constructor(type: $EntityType_<never>);
    }
    /**
     * Values that may be interpreted as {@link $DamagedEntityIngredient$EntityStack}.
     */
    export type $DamagedEntityIngredient$EntityStack_ = { type?: $EntityType_<never>,  } | [type?: $EntityType_<never>, ];
}
