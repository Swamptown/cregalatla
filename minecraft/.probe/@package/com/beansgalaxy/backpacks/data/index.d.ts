import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $HashSet, $UUID_, $List_ } from "@package/java/util";
import { $TraitComponentKind } from "@package/com/beansgalaxy/backpacks/traits";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Reference2ObjectOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $GenericTraits } from "@package/com/beansgalaxy/backpacks/traits/generic";
import { $DataComponentType, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/beansgalaxy/backpacks/data" {
    export class $EnderStorage {
        static sendEntry(arg0: $ServerPlayer, arg1: $UUID_, arg2: $ResourceLocation_): void;
        getDisplayName(arg0: $UUID_): $Component;
        remove<T>(arg0: $UUID_, arg1: $ResourceLocation_, arg2: $DataComponentType_<T>): T;
        get(arg0: $UUID_): $EnderStorage$PlayerEntry;
        static get(arg0: $Level_): $EnderStorage;
        get(arg0: $Player, arg1: $ResourceLocation_): $Reference2ObjectOpenHashMap<$DataComponentType<never>, $Object>;
        get(arg0: $UUID_, arg1: $ResourceLocation_): $Reference2ObjectOpenHashMap<$DataComponentType<never>, $Object>;
        load(arg0: $CompoundTag_): void;
        set<T>(arg0: $UUID_, arg1: $ResourceLocation_, arg2: $DataComponentType_<T>, arg3: T): void;
        set(arg0: $UUID_, arg1: $ResourceLocation_, arg2: $Reference2ObjectOpenHashMap<$DataComponentType_<never>, $Object>): void;
        set<T extends $GenericTraits>(arg0: $UUID_, arg1: $ResourceLocation_, arg2: $TraitComponentKind<T>, arg3: T, arg4: $Reference2ObjectOpenHashMap<$DataComponentType_<never>, $Object>, arg5: $Component_): void;
        set(arg0: $UUID_, arg1: $ResourceLocation_, arg2: $Reference2ObjectOpenHashMap<$DataComponentType_<never>, $Object>, arg3: $Component_): void;
        save(arg0: $CompoundTag_): void;
        getListeners(arg0: $UUID_): $HashSet<$ServerPlayer>;
        getTrait(arg0: $UUID_, arg1: $ResourceLocation_): $GenericTraits;
        setLegacyEnder(arg0: $UUID_, arg1: $List_<$ItemStack_>): void;
        static LEGACY_ENDER_LOCATION: $ResourceLocation;
        static ENTRY_MAP_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Reference2ObjectOpenHashMap<$DataComponentType<never>, $Object>>;
        constructor();
    }
    export class $EnderStorage$PlayerEntry {
    }
}
