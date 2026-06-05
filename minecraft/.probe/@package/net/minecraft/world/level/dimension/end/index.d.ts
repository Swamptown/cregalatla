import { $EndCrystal, $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/level/dimension/end" {
    export class $DragonRespawnAnimation extends $Enum<$DragonRespawnAnimation> {
        tick(arg0: $ServerLevel, arg1: $EndDragonFight, arg2: $List_<$EndCrystal>, arg3: number, arg4: $BlockPos_): void;
        static values(): $DragonRespawnAnimation[];
        static valueOf(arg0: string): $DragonRespawnAnimation;
        static SUMMONING_PILLARS: $DragonRespawnAnimation;
        static START: $DragonRespawnAnimation;
        static END: $DragonRespawnAnimation;
        static PREPARING_TO_SUMMON_PILLARS: $DragonRespawnAnimation;
        static SUMMONING_DRAGON: $DragonRespawnAnimation;
    }
    /**
     * Values that may be interpreted as {@link $DragonRespawnAnimation}.
     */
    export type $DragonRespawnAnimation_ = "start" | "preparing_to_summon_pillars" | "summoning_pillars" | "summoning_dragon" | "end";
    export class $EndDragonFight {
        /**
         * @deprecated
         */
        skipArenaLoadedCheck(): void;
        setRespawnStage(arg0: $DragonRespawnAnimation_): void;
        /**
         * @deprecated
         */
        removeAllGateways(): void;
        resetSpikeCrystals(): void;
        tick(): void;
        removePlayer(arg0: $ServerPlayer): void;
        tryRespawn(): void;
        saveData(): $EndDragonFight$Data;
        addPlayer(arg0: $ServerPlayer): void;
        onCrystalDestroyed(arg0: $EndCrystal, arg1: $DamageSource_): void;
        getDragonUUID(): $UUID;
        updateDragon(arg0: $EnderDragon): void;
        setDragonKilled(arg0: $EnderDragon): void;
        hasPreviouslyKilledDragon(): boolean;
        getCrystalsAlive(): number;
        static TIME_BETWEEN_PLAYER_SCANS: number;
        static ARENA_TICKET_LEVEL: number;
        static DRAGON_SPAWN_Y: number;
        constructor(arg0: $ServerLevel, arg1: number, arg2: $EndDragonFight$Data_, arg3: $BlockPos_);
        constructor(arg0: $ServerLevel, arg1: number, arg2: $EndDragonFight$Data_);
        set respawnStage(value: $DragonRespawnAnimation_);
        get dragonUUID(): $UUID;
        set dragonKilled(value: $EnderDragon);
        get crystalsAlive(): number;
    }
    export class $EndDragonFight$Data extends $Record {
        needsStateScanning(): boolean;
        dragonKilled(): boolean;
        previouslyKilled(): boolean;
        isRespawning(): boolean;
        dragonUUID(): ($UUID) | undefined;
        exitPortalLocation(): ($BlockPos) | undefined;
        gateways(): ($List<number>) | undefined;
        static CODEC: $Codec<$EndDragonFight$Data>;
        static DEFAULT: $EndDragonFight$Data;
        constructor(needsStateScanning: boolean, dragonKilled: boolean, previouslyKilled: boolean, isRespawning: boolean, dragonUUID: ($UUID_) | undefined, exitPortalLocation: ($BlockPos_) | undefined, gateways: ($List_<number>) | undefined);
        get respawning(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EndDragonFight$Data}.
     */
    export type $EndDragonFight$Data_ = { needsStateScanning?: boolean, dragonKilled?: boolean, dragonUUID?: ($UUID_) | undefined, gateways?: ($List_<number>) | undefined, exitPortalLocation?: ($BlockPos_) | undefined, previouslyKilled?: boolean, isRespawning?: boolean,  } | [needsStateScanning?: boolean, dragonKilled?: boolean, dragonUUID?: ($UUID_) | undefined, gateways?: ($List_<number>) | undefined, exitPortalLocation?: ($BlockPos_) | undefined, previouslyKilled?: boolean, isRespawning?: boolean, ];
}
