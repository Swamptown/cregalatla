import { $Level_, $Level, $EntityGetter } from "@package/net/minecraft/world/level";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $ArrayList, $List } from "@package/java/util";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/createmod/catnip/levelWrappers" {
    export class $WrappedLevel extends $Level {
        getLevel(): $Level;
        setChunkSource(arg0: $ChunkSource): void;
        self(): $EntityGetter;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(arg0: $Level_);
        get level(): $Level;
        set chunkSource(value: $ChunkSource);
    }
}
