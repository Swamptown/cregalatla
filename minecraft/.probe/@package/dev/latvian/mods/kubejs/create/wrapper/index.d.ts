import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ProcessingOutput } from "@package/com/simibubi/create/content/processing/recipe";

declare module "@package/dev/latvian/mods/kubejs/create/wrapper" {
    export class $KubeCreateOutput {
        static of(stack: $ItemStack_, c: number): $ProcessingOutput;
        static of(stack: $ItemStack_): $ProcessingOutput;
    }
    export interface $KubeCreateOutput {
    }
}
