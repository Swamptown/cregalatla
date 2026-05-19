import { $ChunkPos, $StructureManager, $WorldGenLevel } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $StructureTemplate$Palette, $StructureTemplate$StructureBlockInfo, $StructureTemplate, $StructureTemplate$StructureEntityInfo } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $List, $Map_, $Map, $List_, $Collection } from "@package/java/util";
import { $KubeLevelEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Vec3i } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PiecesContainer, $StructurePieceType_, $PiecesContainer_ } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
import { $StructurePiece, $BoundingBox, $Structure, $Structure_ } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/com/almostreliable/morejs/features/structure" {
    export class $StructureTemplateAccess {
    }
    export interface $StructureTemplateAccess {
        getPalettes(): $List<$StructureTemplate$Palette>;
        getBorderSize(): $Vec3i;
        getEntities(): $List<$StructureTemplate$StructureEntityInfo>;
        get palettes(): $List<$StructureTemplate$Palette>;
        get borderSize(): $Vec3i;
        get entities(): $List<$StructureTemplate$StructureEntityInfo>;
    }
    export class $EntityInfoWrapper {
        add(arg0: $CompoundTag_): void;
        forEach(arg0: $Consumer_<$StructureTemplate$StructureEntityInfo>): void;
        removeIf(arg0: $Predicate_<$StructureTemplate$StructureEntityInfo>): void;
        constructor(arg0: $List_<$StructureTemplate$StructureEntityInfo>, arg1: $Vec3i);
    }
    export class $StructureAfterPlaceEventJS implements $KubeLevelEvent {
        getIntersectionMap(): $Map<$StructurePiece, $BoundingBox>;
        getChunkGenerator(): $ChunkGenerator;
        getChunkBoundingBox(): $BoundingBox;
        getPiecesContainer(): $PiecesContainer;
        getWorldGenLevel(): $WorldGenLevel;
        getPieceType(arg0: $StructurePieceType_): $ResourceLocation;
        getGenStep(): string;
        getIntersectionBoxes(): $Collection<$BoundingBox>;
        getIntersectionPieces(): $Collection<$StructurePiece>;
        getStructureBoundingBox(): $BoundingBox;
        getStructureManager(): $StructureManager;
        getRandomSource(): $RandomSource;
        getChunkPos(): $ChunkPos;
        getLevel(): $ServerLevel;
        getId(): $ResourceLocation;
        getType(): $ResourceLocation;
        getStructure(): $Structure;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(arg0: $Structure_, arg1: $WorldGenLevel, arg2: $StructureManager, arg3: $ChunkGenerator, arg4: $RandomSource, arg5: $BoundingBox, arg6: $ChunkPos, arg7: $PiecesContainer_);
        get intersectionMap(): $Map<$StructurePiece, $BoundingBox>;
        get chunkGenerator(): $ChunkGenerator;
        get chunkBoundingBox(): $BoundingBox;
        get piecesContainer(): $PiecesContainer;
        get worldGenLevel(): $WorldGenLevel;
        get genStep(): string;
        get intersectionBoxes(): $Collection<$BoundingBox>;
        get intersectionPieces(): $Collection<$StructurePiece>;
        get structureBoundingBox(): $BoundingBox;
        get structureManager(): $StructureManager;
        get randomSource(): $RandomSource;
        get chunkPos(): $ChunkPos;
        get level(): $ServerLevel;
        get id(): $ResourceLocation;
        get type(): $ResourceLocation;
        get structure(): $Structure;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $StructureBlockInfoModification {
    }
    export interface $StructureBlockInfoModification {
        hasNbt(): boolean;
        setNbt(arg0: $CompoundTag_): void;
        setVanillaBlockState(arg0: $BlockState_): void;
        getNbt(): $CompoundTag;
        getPosition(): $BlockPos;
        getBlock(): $Block;
        getProperties(): $Map<string, $Object>;
        getId(): string;
        setBlock(arg0: $ResourceLocation_): void;
        setBlock(arg0: $ResourceLocation_, arg1: $Map_<string, $Object>): void;
        set vanillaBlockState(value: $BlockState_);
        get position(): $BlockPos;
        get properties(): $Map<string, $Object>;
        get id(): string;
    }
    export class $StructureLoadEventJS implements $KubeEvent {
        getPalettesSize(): number;
        getEntitiesSize(): number;
        removePalette(arg0: number): void;
        forEachPalettes(arg0: $Consumer_<$PaletteWrapper>): void;
        getEntities(): $EntityInfoWrapper;
        getStructureSize(): $Vec3i;
        static invoke(arg0: $StructureTemplate, arg1: $ResourceLocation_): void;
        getId(): string;
        getPalette(arg0: number): $PaletteWrapper;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(arg0: $StructureTemplateAccess, arg1: $ResourceLocation_);
        get palettesSize(): number;
        get entitiesSize(): number;
        get entities(): $EntityInfoWrapper;
        get structureSize(): $Vec3i;
        get id(): string;
    }
    export class $PaletteWrapper {
        get(arg0: $BlockPos_): $StructureTemplate$StructureBlockInfo;
        clear(): void;
        add(arg0: $BlockPos_, arg1: $BlockState_, arg2: $CompoundTag_): void;
        add(arg0: $BlockPos_, arg1: $BlockState_): void;
        forEach(arg0: $Consumer_<$StructureTemplate$StructureBlockInfo>): void;
        removeIf(arg0: $Predicate_<$StructureTemplate$StructureBlockInfo>): void;
        constructor(arg0: $StructureTemplate$Palette, arg1: $Vec3i);
    }
}
