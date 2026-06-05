import { $PistonStructureResolver } from "@package/net/minecraft/world/level/block/piston";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MobCategory_, $MobCategory, $Entity } from "@package/net/minecraft/world/entity";
import { $List, $EnumSet, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ChunkHolder, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ChunkType_, $ChunkType } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum } from "@package/java/lang";
import { $ItemAbility_, $ItemAbility } from "@package/net/neoforged/neoforge/common";
import { $CustomSpawner_, $Explosion, $LevelAccessor, $ChunkPos, $Level, $CustomSpawner, $Level_ } from "@package/net/minecraft/world/level";
import { $TreeDecorator$Context } from "@package/net/minecraft/world/level/levelgen/feature/treedecorators";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelChunk, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $NoteBlockInstrument, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $PortalShape } from "@package/net/minecraft/world/level/portal";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $EventHandlerImplCommon$LevelEventAttachment } from "@package/dev/architectury/event/forge";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as block from "@package/net/neoforged/neoforge/event/level/block";

declare module "@package/net/neoforged/neoforge/event/level" {
    export class $SleepFinishedTimeEvent extends $LevelEvent {
        getNewTime(): number;
        setTimeAddition(arg0: number): boolean;
        constructor(arg0: $ServerLevel, arg1: number, arg2: number);
        get newTime(): number;
        set timeAddition(value: number);
    }
    export class $AlterGroundEvent extends $Event {
        setStateProvider(arg0: $AlterGroundEvent$StateProvider_): void;
        getStateProvider(): $AlterGroundEvent$StateProvider;
        getPositions(): $List<$BlockPos>;
        getContext(): $TreeDecorator$Context;
        constructor(arg0: $TreeDecorator$Context, arg1: $List_<$BlockPos_>, arg2: $AlterGroundEvent$StateProvider_);
        get positions(): $List<$BlockPos>;
        get context(): $TreeDecorator$Context;
    }
    export class $ChunkWatchEvent$Watch extends $ChunkWatchEvent {
        getChunk(): $LevelChunk;
        constructor(arg0: $ServerPlayer, arg1: $LevelChunk, arg2: $ServerLevel);
        get chunk(): $LevelChunk;
    }
    export class $NoteBlockEvent$Octave extends $Enum<$NoteBlockEvent$Octave> {
        static values(): $NoteBlockEvent$Octave[];
        static valueOf(arg0: string): $NoteBlockEvent$Octave;
        static HIGH: $NoteBlockEvent$Octave;
        static LOW: $NoteBlockEvent$Octave;
        static MID: $NoteBlockEvent$Octave;
    }
    /**
     * Values that may be interpreted as {@link $NoteBlockEvent$Octave}.
     */
    export type $NoteBlockEvent$Octave_ = "low" | "mid" | "high";
    export class $ExplosionEvent$Start extends $ExplosionEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $Explosion);
    }
    export class $ModifyCustomSpawnersEvent extends $Event {
        addCustomSpawner(arg0: $CustomSpawner_): void;
        getCustomSpawners(): $List<$CustomSpawner>;
        getLevel(): $ServerLevel;
        constructor(arg0: $ServerLevel, arg1: $List_<$CustomSpawner_>);
        get customSpawners(): $List<$CustomSpawner>;
        get level(): $ServerLevel;
    }
    export class $ChunkTicketLevelUpdatedEvent extends $Event {
        getOldTicketLevel(): number;
        getNewTicketLevel(): number;
        getChunkHolder(): $ChunkHolder;
        getChunkPos(): number;
        getLevel(): $ServerLevel;
        constructor(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number, arg4: $ChunkHolder);
        get oldTicketLevel(): number;
        get newTicketLevel(): number;
        get chunkHolder(): $ChunkHolder;
        get chunkPos(): number;
        get level(): $ServerLevel;
    }
    export class $ChunkWatchEvent$UnWatch extends $ChunkWatchEvent {
        constructor(arg0: $ServerPlayer, arg1: $ChunkPos, arg2: $ServerLevel);
    }
    export class $ChunkEvent$Load extends $ChunkEvent {
        isNewChunk(): boolean;
        constructor(arg0: $ChunkAccess, arg1: boolean);
        get newChunk(): boolean;
    }
    export class $LevelEvent$PotentialSpawns extends $LevelEvent implements $ICancellableEvent {
        getSpawnerDataList(): $List<$MobSpawnSettings$SpawnerData>;
        removeSpawnerData(arg0: $MobSpawnSettings$SpawnerData): boolean;
        getMobCategory(): $MobCategory;
        addSpawnerData(arg0: $MobSpawnSettings$SpawnerData): void;
        getPos(): $BlockPos;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $MobCategory_, arg2: $BlockPos_, arg3: $WeightedRandomList<$MobSpawnSettings$SpawnerData>);
        get spawnerDataList(): $List<$MobSpawnSettings$SpawnerData>;
        get mobCategory(): $MobCategory;
        get pos(): $BlockPos;
    }
    export class $ChunkWatchEvent extends $Event {
        getPlayer(): $ServerPlayer;
        getLevel(): $ServerLevel;
        getPos(): $ChunkPos;
        constructor(arg0: $ServerPlayer, arg1: $ChunkPos, arg2: $ServerLevel);
        get player(): $ServerPlayer;
        get level(): $ServerLevel;
        get pos(): $ChunkPos;
    }
    export class $LevelEvent extends $Event implements $EventHandlerImplCommon$LevelEventAttachment {
        getLevel(): $LevelAccessor;
        architectury$getAttachedLevel(): $LevelAccessor;
        architectury$attachLevel(level: $LevelAccessor): void;
        constructor(arg0: $LevelAccessor);
        get level(): $LevelAccessor;
    }
    export class $LevelEvent$Save extends $LevelEvent {
        constructor(arg0: $LevelAccessor);
    }
    export class $LevelEvent$Load extends $LevelEvent {
        constructor(arg0: $LevelAccessor);
    }
    export class $ExplosionEvent extends $Event {
        getExplosion(): $Explosion;
        getLevel(): $Level;
        constructor(arg0: $Level_, arg1: $Explosion);
        get explosion(): $Explosion;
        get level(): $Level;
    }
    export class $BlockEvent$PortalSpawnEvent extends $BlockEvent implements $ICancellableEvent {
        getPortalSize(): $PortalShape;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PortalShape);
        get portalSize(): $PortalShape;
    }
    export class $BlockDropsEvent extends $BlockEvent implements $ICancellableEvent {
        setDroppedExperience(arg0: number): void;
        getDroppedExperience(): number;
        getBreaker(): $Entity;
        getTool(): $ItemStack;
        getLevel(): $ServerLevel;
        getDrops(): $List<$ItemEntity>;
        setCanceled(arg0: boolean): void;
        getBlockEntity(): $BlockEntity;
        isCanceled(): boolean;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: $List_<$ItemEntity>, arg5: $Entity, arg6: $ItemStack_);
        get breaker(): $Entity;
        get tool(): $ItemStack;
        get level(): $ServerLevel;
        get drops(): $List<$ItemEntity>;
        get blockEntity(): $BlockEntity;
    }
    export class $BlockEvent$NeighborNotifyEvent extends $BlockEvent implements $ICancellableEvent {
        getNotifiedSides(): $EnumSet<$Direction>;
        getForceRedstoneUpdate(): boolean;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $EnumSet<$Direction_>, arg4: boolean);
        get notifiedSides(): $EnumSet<$Direction>;
        get forceRedstoneUpdate(): boolean;
    }
    export class $LevelEvent$CreateSpawnPosition extends $LevelEvent implements $ICancellableEvent {
        getSettings(): $ServerLevelData;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $ServerLevelData);
        get settings(): $ServerLevelData;
    }
    export class $BlockEvent$FarmlandTrampleEvent extends $BlockEvent implements $ICancellableEvent {
        getEntity(): $Entity;
        getFallDistance(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: $Entity);
        get entity(): $Entity;
        get fallDistance(): number;
    }
    export class $BlockEvent$EntityPlaceEvent extends $BlockEvent implements $ICancellableEvent {
        getPlacedBlock(): $BlockState;
        getBlockSnapshot(): $BlockSnapshot;
        getPlacedAgainst(): $BlockState;
        getEntity(): $Entity;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $BlockSnapshot, arg1: $BlockState_, arg2: $Entity);
        get placedBlock(): $BlockState;
        get blockSnapshot(): $BlockSnapshot;
        get placedAgainst(): $BlockState;
        get entity(): $Entity;
    }
    export class $NoteBlockEvent$Play extends $NoteBlockEvent implements $ICancellableEvent {
        setInstrument(arg0: $NoteBlockInstrument_): void;
        getInstrument(): $NoteBlockInstrument;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: $NoteBlockInstrument_);
    }
    export class $ChunkDataEvent$Save extends $ChunkDataEvent {
        constructor(arg0: $ChunkAccess, arg1: $LevelAccessor, arg2: $CompoundTag_);
    }
    export class $ChunkDataEvent extends $ChunkEvent {
        getData(): $CompoundTag;
        constructor(arg0: $ChunkAccess, arg1: $LevelAccessor, arg2: $CompoundTag_);
        constructor(arg0: $ChunkAccess, arg1: $CompoundTag_);
        get data(): $CompoundTag;
    }
    export class $BlockEvent$EntityMultiPlaceEvent extends $BlockEvent$EntityPlaceEvent implements $ICancellableEvent {
        getReplacedBlockSnapshots(): $List<$BlockSnapshot>;
        constructor(arg0: $List_<$BlockSnapshot>, arg1: $BlockState_, arg2: $Entity);
        get replacedBlockSnapshots(): $List<$BlockSnapshot>;
    }
    export class $ChunkDataEvent$Load extends $ChunkDataEvent {
        getType(): $ChunkType;
        constructor(arg0: $ChunkAccess, arg1: $CompoundTag_, arg2: $ChunkType_);
        get type(): $ChunkType;
    }
    export class $PistonEvent$PistonMoveType extends $Enum<$PistonEvent$PistonMoveType> {
        static values(): $PistonEvent$PistonMoveType[];
        static valueOf(arg0: string): $PistonEvent$PistonMoveType;
        static RETRACT: $PistonEvent$PistonMoveType;
        isExtend: boolean;
        static EXTEND: $PistonEvent$PistonMoveType;
    }
    /**
     * Values that may be interpreted as {@link $PistonEvent$PistonMoveType}.
     */
    export type $PistonEvent$PistonMoveType_ = "extend" | "retract";
    export class $NoteBlockEvent$Note extends $Enum<$NoteBlockEvent$Note> {
        static values(): $NoteBlockEvent$Note[];
        static valueOf(arg0: string): $NoteBlockEvent$Note;
        static A: $NoteBlockEvent$Note;
        static F_SHARP: $NoteBlockEvent$Note;
        static B: $NoteBlockEvent$Note;
        static C: $NoteBlockEvent$Note;
        static D: $NoteBlockEvent$Note;
        static E: $NoteBlockEvent$Note;
        static F: $NoteBlockEvent$Note;
        static G: $NoteBlockEvent$Note;
        static G_SHARP: $NoteBlockEvent$Note;
        static A_SHARP: $NoteBlockEvent$Note;
        static D_SHARP: $NoteBlockEvent$Note;
        static C_SHARP: $NoteBlockEvent$Note;
    }
    /**
     * Values that may be interpreted as {@link $NoteBlockEvent$Note}.
     */
    export type $NoteBlockEvent$Note_ = "f_sharp" | "g" | "g_sharp" | "a" | "a_sharp" | "b" | "c" | "c_sharp" | "d" | "d_sharp" | "e" | "f";
    export class $PistonEvent$Post extends $PistonEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $PistonEvent$PistonMoveType_);
    }
    export class $BlockEvent$BreakEvent extends $BlockEvent implements $ICancellableEvent {
        getPlayer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Player);
        get player(): $Player;
    }
    export class $BlockGrowFeatureEvent extends $LevelEvent implements $ICancellableEvent {
        getFeature(): $Holder<$ConfiguredFeature<never, never>>;
        getRandom(): $RandomSource;
        setFeature(arg0: $Holder_<$ConfiguredFeature<never, never>>): void;
        setFeature(arg0: $ResourceKey_<$ConfiguredFeature<never, never>>): void;
        getPos(): $BlockPos;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $RandomSource, arg2: $BlockPos_, arg3: $Holder_<$ConfiguredFeature<never, never>>);
        get random(): $RandomSource;
        get pos(): $BlockPos;
    }
    export class $PistonEvent$Pre extends $PistonEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $PistonEvent$PistonMoveType_);
    }
    export class $PistonEvent extends $BlockEvent {
        getPistonMoveType(): $PistonEvent$PistonMoveType;
        getFaceOffsetPos(): $BlockPos;
        getStructureHelper(): $PistonStructureResolver;
        getDirection(): $Direction;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $PistonEvent$PistonMoveType_);
        get pistonMoveType(): $PistonEvent$PistonMoveType;
        get faceOffsetPos(): $BlockPos;
        get structureHelper(): $PistonStructureResolver;
        get direction(): $Direction;
    }
    export class $ChunkWatchEvent$Sent extends $ChunkWatchEvent {
        getChunk(): $LevelChunk;
        constructor(arg0: $ServerPlayer, arg1: $LevelChunk, arg2: $ServerLevel);
        get chunk(): $LevelChunk;
    }
    export class $ChunkEvent extends $LevelEvent {
        getChunk(): $ChunkAccess;
        constructor(arg0: $ChunkAccess);
        constructor(arg0: $ChunkAccess, arg1: $LevelAccessor);
        get chunk(): $ChunkAccess;
    }
    export class $NoteBlockEvent extends $BlockEvent {
        getOctave(): $NoteBlockEvent$Octave;
        setNote(arg0: $NoteBlockEvent$Note_, arg1: $NoteBlockEvent$Octave_): void;
        getNote(): $NoteBlockEvent$Note;
        getVanillaNoteId(): number;
        get octave(): $NoteBlockEvent$Octave;
        get vanillaNoteId(): number;
    }
    export class $ExplosionKnockbackEvent extends $ExplosionEvent {
        getAffectedEntity(): $Entity;
        setKnockbackVelocity(arg0: $Vec3_): void;
        getKnockbackVelocity(): $Vec3;
        getAffectedBlocks(): $List<$BlockPos>;
        constructor(arg0: $Level_, arg1: $Explosion, arg2: $Entity, arg3: $Vec3_);
        get affectedEntity(): $Entity;
        get affectedBlocks(): $List<$BlockPos>;
    }
    export class $BlockEvent extends $Event {
        getLevel(): $LevelAccessor;
        getState(): $BlockState;
        getPos(): $BlockPos;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_);
        get level(): $LevelAccessor;
        get state(): $BlockState;
        get pos(): $BlockPos;
    }
    export class $BlockEvent$BlockToolModificationEvent extends $BlockEvent implements $ICancellableEvent {
        getItemAbility(): $ItemAbility;
        getHeldItemStack(): $ItemStack;
        getPlayer(): $Player;
        setFinalState(arg0: $BlockState_): void;
        getFinalState(): $BlockState;
        isSimulated(): boolean;
        getContext(): $UseOnContext;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $BlockState_, arg1: $UseOnContext, arg2: $ItemAbility_, arg3: boolean);
        get itemAbility(): $ItemAbility;
        get heldItemStack(): $ItemStack;
        get player(): $Player;
        get simulated(): boolean;
        get context(): $UseOnContext;
    }
    export class $LevelEvent$Unload extends $LevelEvent {
        constructor(arg0: $LevelAccessor);
    }
    export class $NoteBlockEvent$Change extends $NoteBlockEvent implements $ICancellableEvent {
        getOldNote(): $NoteBlockEvent$Note;
        getOldOctave(): $NoteBlockEvent$Octave;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: number);
        get oldNote(): $NoteBlockEvent$Note;
        get oldOctave(): $NoteBlockEvent$Octave;
    }
    export class $AlterGroundEvent$StateProvider {
    }
    export interface $AlterGroundEvent$StateProvider {
        getState(arg0: $RandomSource, arg1: $BlockPos_): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $AlterGroundEvent$StateProvider}.
     */
    export type $AlterGroundEvent$StateProvider_ = ((arg0: $RandomSource, arg1: $BlockPos) => $BlockState_);
    export class $ExplosionEvent$Detonate extends $ExplosionEvent {
        getAffectedBlocks(): $List<$BlockPos>;
        getAffectedEntities(): $List<$Entity>;
        constructor(arg0: $Level_, arg1: $Explosion, arg2: $List_<$Entity>);
        get affectedBlocks(): $List<$BlockPos>;
        get affectedEntities(): $List<$Entity>;
    }
    export class $BlockEvent$FluidPlaceBlockEvent extends $BlockEvent implements $ICancellableEvent {
        getLiquidPos(): $BlockPos;
        setNewState(arg0: $BlockState_): void;
        getNewState(): $BlockState;
        getOriginalState(): $BlockState;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $BlockState_);
        get liquidPos(): $BlockPos;
        get originalState(): $BlockState;
    }
    export class $ChunkEvent$Unload extends $ChunkEvent {
        constructor(arg0: $ChunkAccess);
    }
}
