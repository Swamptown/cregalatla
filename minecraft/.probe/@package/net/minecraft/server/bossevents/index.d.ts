import { $BossEvent$BossBarOverlay, $BossEvent$BossBarColor } from "@package/net/minecraft/world";
import { $ServerPlayer, $ServerBossEvent } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $UUID_, $Collection_, $Collection } from "@package/java/util";

declare module "@package/net/minecraft/server/bossevents" {
    export class $CustomBossEvents {
        onPlayerDisconnect(arg0: $ServerPlayer): void;
        onPlayerConnect(arg0: $ServerPlayer): void;
        getEvents(): $Collection<$CustomBossEvent>;
        remove(arg0: $CustomBossEvent): void;
        get(arg0: $ResourceLocation_): $CustomBossEvent;
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        save(arg0: $HolderLookup$Provider): $CompoundTag;
        create(arg0: $ResourceLocation_, arg1: $Component_): $CustomBossEvent;
        getIds(): $Collection<$ResourceLocation>;
        constructor();
        get events(): $Collection<$CustomBossEvent>;
        get ids(): $Collection<$ResourceLocation>;
    }
    export class $CustomBossEvent extends $ServerBossEvent {
        setPlayers(arg0: $Collection_<$ServerPlayer>): boolean;
        onPlayerDisconnect(arg0: $ServerPlayer): void;
        onPlayerConnect(arg0: $ServerPlayer): void;
        getTextId(): $ResourceLocation;
        addOfflinePlayer(arg0: $UUID_): void;
        getDisplayName(): $Component;
        static load(arg0: $CompoundTag_, arg1: $ResourceLocation_, arg2: $HolderLookup$Provider): $CustomBossEvent;
        getValue(): number;
        save(arg0: $HolderLookup$Provider): $CompoundTag;
        setValue(arg0: number): void;
        getMax(): number;
        setMax(arg0: number): void;
        darkenScreen: boolean;
        playBossMusic: boolean;
        color: $BossEvent$BossBarColor;
        overlay: $BossEvent$BossBarOverlay;
        name: $Component;
        progress: number;
        createWorldFog: boolean;
        constructor(arg0: $ResourceLocation_, arg1: $Component_);
        set players(value: $Collection_<$ServerPlayer>);
        get textId(): $ResourceLocation;
        get displayName(): $Component;
    }
}
