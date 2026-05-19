import { $JsonElement_, $JsonDeserializationContext_, $JsonObject_, $JsonDeserializer } from "@package/com/google/gson";
import { $Predicate, $Function_ } from "@package/java/util/function";
import { $BlockModelDefinition$Context, $MultiVariant } from "@package/net/minecraft/client/renderer/block/model";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Type } from "@package/java/lang/reflect";
import { $Material, $UnbakedModel, $ModelState, $BakedModel, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $List, $Set, $List_, $Collection } from "@package/java/util";
import { $Iterable_ } from "@package/java/lang";

declare module "@package/net/minecraft/client/renderer/block/model/multipart" {
    export class $Selector$Deserializer implements $JsonDeserializer<$Selector> {
        static getCondition(arg0: $JsonObject_): $Condition;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $Selector;
        constructor();
    }
    export class $MultiPart implements $UnbakedModel {
        getSelectors(): $List<$Selector>;
        getMultiVariants(): $Set<$MultiVariant>;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        getDependencies(): $Collection<$ResourceLocation>;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        definition: $StateDefinition<$Block, $BlockState>;
        constructor(arg0: $StateDefinition<$Block_, $BlockState_>, arg1: $List_<$Selector>);
        get selectors(): $List<$Selector>;
        get multiVariants(): $Set<$MultiVariant>;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $MultiPart$Deserializer implements $JsonDeserializer<$MultiPart> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $MultiPart;
        constructor(arg0: $BlockModelDefinition$Context);
    }
    export class $Condition {
        static TRUE: $Condition;
        static FALSE: $Condition;
    }
    export interface $Condition {
        getPredicate(arg0: $StateDefinition<$Block_, $BlockState_>): $Predicate<$BlockState>;
    }
    /**
     * Values that may be interpreted as {@link $Condition}.
     */
    export type $Condition_ = ((arg0: $StateDefinition<$Block, $BlockState>) => $Predicate<$BlockState>);
    export class $KeyValueCondition implements $Condition {
        getPredicate(arg0: $StateDefinition<any, any>): $Predicate<any>;
        constructor(arg0: string, arg1: string);
    }
    export class $AndCondition implements $Condition {
        getPredicate(arg0: $StateDefinition<any, any>): $Predicate<any>;
        static TOKEN: string;
        constructor(arg0: $Iterable_<$Condition>);
    }
    export class $Selector {
        getVariant(): $MultiVariant;
        getPredicate(arg0: $StateDefinition<$Block_, $BlockState_>): $Predicate<$BlockState>;
        constructor(arg0: $Condition_, arg1: $MultiVariant);
        get variant(): $MultiVariant;
    }
    export class $OrCondition implements $Condition {
        getPredicate(arg0: $StateDefinition<any, any>): $Predicate<any>;
        static TOKEN: string;
        constructor(arg0: $Iterable_<$Condition>);
    }
}
