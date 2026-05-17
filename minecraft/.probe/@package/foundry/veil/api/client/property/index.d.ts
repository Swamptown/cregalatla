import { $Supplier, $Function_ } from "@package/java/util/function";
import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $PropertyModifier$PropertyModifierMode_ } from "@package/foundry/veil/api/flare/modifier";
import { $MolangExpression_, $MolangEnvironment } from "@package/gg/moonflower/molangcompiler/api";
import { $List_ } from "@package/java/util";
import { $PropertyRegistry$PropertyType, $PropertyRegistry$PropertyType_ } from "@package/foundry/veil/api/client/registry";

declare module "@package/foundry/veil/api/client/property" {
    export class $Property<T> {
        getType(): $PropertyRegistry$PropertyType<T, $Property<T>>;
        resetOverrideValue(): void;
        static codec<T, M extends $Property<T>>(arg0: $PropertyRegistry$PropertyType_<T, M>): $MapCodec<M>;
        modify(arg0: T, arg1: $PropertyModifier$PropertyModifierMode_, arg2: ($List_<$MolangExpression_>) | undefined): void;
        static createCodec<T, M extends $Property<T>>(arg0: $Function_<T, M>, arg1: $Codec<T>): $MapCodec<M>;
        applyValue(arg0: string, arg1: $ShaderInstance): void;
        getEnvironment(): $Supplier<$MolangEnvironment>;
        constructor(arg0: $PropertyRegistry$PropertyType_<T, $Property<T>>, arg1: T);
        get type(): $PropertyRegistry$PropertyType<T, $Property<T>>;
        get environment(): $Supplier<$MolangEnvironment>;
    }
}
