import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Level_, $ItemLike } from "@package/net/minecraft/world/level";
import { $Predicate_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $EntityType, $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType, $BaseFlowingFluid } from "@package/net/neoforged/neoforge/fluids";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";

declare module "@package/com/tterrag/registrate/util/entry" {
    export class $ItemProviderEntry<R extends $ItemLike, T extends R> extends $RegistryEntry<R, T> implements $ItemLike {
        is(arg0: $Item_): boolean;
        asStack(): $ItemStack;
        asStack(arg0: number): $ItemStack;
        asItem(): $Item;
        isIn(arg0: $ItemStack_): boolean;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<R, T>);
    }
    export class $ItemEntry<T extends $Item> extends $ItemProviderEntry<$Item, T> {
        static cast<T extends $Item>(arg0: $RegistryEntry<$Item_, T>): $ItemEntry<T>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$Item_, T>);
    }
    export class $EntityEntry<T extends $Entity> extends $RegistryEntry<$EntityType<never>, $EntityType<T>> {
        static cast<T extends $Entity>(arg0: $RegistryEntry<$EntityType_<never>, $EntityType_<T>>): $EntityEntry<T>;
        is(arg0: $Entity): boolean;
        create(arg0: $Level_): $EntityType<T>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$EntityType_<never>, $EntityType_<$EntityType_<T>>>);
    }
    export class $RegistryEntry<R, S extends R> extends $DeferredHolder<R, S> implements $NonNullSupplier<S> {
        filter(arg0: $Predicate_<R>): ($RegistryEntry<R, S>) | undefined;
        is<X>(arg0: X): boolean;
        getSibling<X, Y extends X>(arg0: $ResourceKey_<$Registry<X>>): $RegistryEntry<X, Y>;
        getSibling<X, Y extends X>(arg0: $Registry<X>): $RegistryEntry<X, Y>;
        lazy(): $NonNullSupplier<S>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<R, S>);
    }
    export class $FluidEntry<T extends $BaseFlowingFluid> extends $RegistryEntry<$Fluid, T> {
        getType(): $FluidType;
        getBucket<I extends $Item>(): (I) | undefined;
        getSource<S extends $BaseFlowingFluid>(): S;
        getBlock<B extends $Block>(): (B) | undefined;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$Fluid_, T>);
        get type(): $FluidType;
        get bucket(): (I) | undefined;
        get source(): S;
        get block(): (B) | undefined;
    }
}
