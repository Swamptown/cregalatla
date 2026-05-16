import { $Level_, $Level, $EntityGetter } from "@package/net/minecraft/world/level";
import { $VisualizationLevel } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Codec } from "@package/com/mojang/serialization";
import { $LevelChunk, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $ArrayList, $Collection_, $List } from "@package/java/util";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Vec3i } from "@package/net/minecraft/core";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Runnable_ } from "@package/java/lang";
import { $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";

declare module "@package/com/simibubi/create/foundation/virtualWorld" {
    export class $VirtualRenderWorld extends $Level implements $VisualizationLevel {
        clear(): void;
        setBlockEntities(arg0: $Collection_<$BlockEntity>): void;
        runLightEngine(): void;
        static nextMultipleOf16(arg0: number): number;
        setExternalLight(arg0: number): void;
        resetExternalLight(): void;
        getChunkAtImmediately(arg0: number, arg1: number): $LevelChunk;
        getAnyChunkImmediately(arg0: number, arg1: number): $ChunkAccess;
        getBlockState(arg0: number, arg1: number, arg2: number): $BlockState;
        supportsVisualization(): boolean;
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
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: $Vec3i, arg4: $Runnable_);
        set blockEntities(value: $Collection_<$BlockEntity>);
        set externalLight(value: number);
    }
}
