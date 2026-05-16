import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $EmiIngredient } from "@package/dev/emi/emi/api/stack";

declare module "@package/dev/emi/emi/api/stack/serializer" {
    export class $EmiIngredientSerializer<T extends $EmiIngredient> {
        static getDeserialized(element: $JsonElement_): $EmiIngredient;
        static getSerialized(ingredient: $EmiIngredient): $JsonElement;
    }
    export interface $EmiIngredientSerializer<T extends $EmiIngredient> {
        getType(): string;
        deserialize(arg0: $JsonElement_): $EmiIngredient;
        serialize(arg0: T): $JsonElement;
        get type(): string;
    }
}
