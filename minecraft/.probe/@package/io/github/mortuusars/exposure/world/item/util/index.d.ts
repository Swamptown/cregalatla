import { $BiConsumer_, $BiFunction_ } from "@package/java/util/function";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/io/github/mortuusars/exposure/world/item/util" {
    export class $ItemAndStack<T extends $Item> {
        apply(_function: $BiConsumer_<T, $ItemStack>): $ItemAndStack<T>;
        map<R>(mappingFunction: $BiFunction_<T, $ItemStack, R>): R;
        getItemStack(): $ItemStack;
        getItem(): T;
        constructor(stack: $ItemStack_);
        get itemStack(): $ItemStack;
        get item(): T;
    }
}
