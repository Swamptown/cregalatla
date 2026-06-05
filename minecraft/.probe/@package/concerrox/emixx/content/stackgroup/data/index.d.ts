import { $JsonElement_ } from "@package/com/google/gson";
import { $EmiIngredient } from "@package/dev/emi/emi/api/stack";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Set_, $Set } from "@package/java/util";

declare module "@package/concerrox/emixx/content/stackgroup/data" {
    export class $BannerPatternItemGroup extends $StackGroup {
        static Companion: $StackGroup$Companion;
        constructor();
    }
    export class $PressurePlateItemGroup extends $StackGroup {
        static Companion: $StackGroup$Companion;
        constructor();
    }
    export class $StackGroup$Companion {
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $CopperBlockItemGroup$Companion {
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $InfestedBlockItemGroup extends $StackGroup {
        static Companion: $StackGroup$Companion;
        constructor();
    }
    export class $MinecartItemGroup extends $StackGroup {
        static Companion: $StackGroup$Companion;
        constructor();
    }
    export class $EmiStackGroup$Companion {
        parse(json: $JsonElement_, filenameId: $ResourceLocation_): $EmiStackGroup;
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $AnimalArmorItemGroup extends $StackGroup {
        static Companion: $StackGroup$Companion;
        constructor();
    }
    export class $CopperBlockItemGroup extends $StackGroup {
        static Companion: $CopperBlockItemGroup$Companion;
        constructor();
    }
    export class $StackGroup {
        isEnabled$emixx_common(): boolean;
        getOptimizedIds(): $Set<$ResourceLocation>;
        setEnabled$emixx_common(<set-?>: boolean): void;
        getName(): $Component;
        match(arg0: $EmiIngredient): boolean;
        getId(): $ResourceLocation;
        static Companion: $StackGroup$Companion;
        constructor(id: $ResourceLocation_, name: $Component_);
        constructor(arg0: $ResourceLocation_, arg1: $Component_, arg2: number, arg3: $DefaultConstructorMarker);
        get optimizedIds(): $Set<$ResourceLocation>;
        get name(): $Component;
        get id(): $ResourceLocation;
    }
    export class $EmiStackGroup extends $StackGroup {
        static Companion: $EmiStackGroup$Companion;
        constructor(arg0: $ResourceLocation_, arg1: $Set_<any>, arg2: $Set_<any>, arg3: $Component_, arg4: number, arg5: $DefaultConstructorMarker);
        constructor(id: $ResourceLocation_, targets: $Set_<$EmiIngredient>, excludedIds: $Set_<$ResourceLocation_>, name: $Component_);
    }
    export class $SpawnEggItemGroup extends $StackGroup {
        static Companion: $StackGroup$Companion;
        constructor();
    }
}
