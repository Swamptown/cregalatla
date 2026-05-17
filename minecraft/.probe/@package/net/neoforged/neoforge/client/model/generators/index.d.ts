import { $JsonObject_, $JsonObject, $JsonElement } from "@package/com/google/gson";
import { $ExistingFileHelper, $ExistingFileHelper$ResourceType } from "@package/net/neoforged/neoforge/common/data";
import { $Item_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $BlockModel$GuiLight_ } from "@package/net/minecraft/client/renderer/block/model";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Multimap, $ImmutableMap } from "@package/com/google/common/collect";
import { $SortedMap, $List, $Set_, $Comparator, $Map } from "@package/java/util";
import { $DataProvider, $PackOutput, $CachedOutput_ } from "@package/net/minecraft/data";
import { $ModelBuilderMixinDuck } from "@package/net/zlt/create_vibrant_vaults/duck";
import { $Predicate, $BiConsumer_, $Function_, $Predicate_, $BiFunction_ } from "@package/java/util/function";
import { $WallSide, $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Direction$Axis_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $TransformationHelper$TransformOrigin_ } from "@package/net/neoforged/neoforge/common/util";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CeilingHangingSignBlock, $IronBarsBlock, $WallSignBlock, $Block_, $WallBlock, $PressurePlateBlock, $StandingSignBlock, $RotatedPillarBlock, $DoorBlock, $FenceGateBlock, $FenceBlock, $StairBlock, $ButtonBlock, $TrapDoorBlock, $CrossCollisionBlock, $Block, $WallHangingSignBlock, $SlabBlock } from "@package/net/minecraft/world/level/block";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $Transformation } from "@package/com/mojang/math";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
export * as loaders from "@package/net/neoforged/neoforge/client/model/generators/loaders";

declare module "@package/net/neoforged/neoforge/client/model/generators" {
    export class $ModelBuilder$ElementBuilder$FaceBuilder {
        end(): $ModelBuilder$ElementBuilder;
        ao(arg0: boolean): $ModelBuilder$ElementBuilder$FaceBuilder;
        color(arg0: number): $ModelBuilder$ElementBuilder$FaceBuilder;
        texture(arg0: string): $ModelBuilder$ElementBuilder$FaceBuilder;
        uvs(arg0: number, arg1: number, arg2: number, arg3: number): $ModelBuilder$ElementBuilder$FaceBuilder;
        cullface(arg0: $Direction_): $ModelBuilder$ElementBuilder$FaceBuilder;
        tintindex(arg0: number): $ModelBuilder$ElementBuilder$FaceBuilder;
        emissivity(arg0: number, arg1: number): $ModelBuilder$ElementBuilder$FaceBuilder;
        rotation(arg0: $ModelBuilder$FaceRotation_): $ModelBuilder$ElementBuilder$FaceBuilder;
    }
    export class $ModelProvider<T extends $ModelBuilder<T>> implements $DataProvider {
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        sign(arg0: string, arg1: $ResourceLocation_): T;
        nested(): T;
        singleTexture(arg0: string, arg1: $ResourceLocation_, arg2: string, arg3: $ResourceLocation_): T;
        singleTexture(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        cubeTop(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        cubeBottomTop(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): T;
        orientableVertical(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        orientableWithBottom(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_): T;
        buttonInventory(arg0: string, arg1: $ResourceLocation_): T;
        fenceInventory(arg0: string, arg1: $ResourceLocation_): T;
        wallInventory(arg0: string, arg1: $ResourceLocation_): T;
        torchWall(arg0: string, arg1: $ResourceLocation_): T;
        cubeColumn(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        mcLoc(arg0: string): $ResourceLocation;
        withExistingParent(arg0: string, arg1: $ResourceLocation_): T;
        withExistingParent(arg0: string, arg1: string): T;
        modLoc(arg0: string): $ResourceLocation;
        cubeAll(arg0: string, arg1: $ResourceLocation_): T;
        cubeColumnHorizontal(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        orientable(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): T;
        stairsInner(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): T;
        stairsOuter(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): T;
        slabTop(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): T;
        getExistingFile(arg0: $ResourceLocation_): $ModelFile$ExistingModelFile;
        buttonPressed(arg0: string, arg1: $ResourceLocation_): T;
        pressurePlateDown(arg0: string, arg1: $ResourceLocation_): T;
        fencePost(arg0: string, arg1: $ResourceLocation_): T;
        fenceSide(arg0: string, arg1: $ResourceLocation_): T;
        fenceGateOpen(arg0: string, arg1: $ResourceLocation_): T;
        fenceGateWall(arg0: string, arg1: $ResourceLocation_): T;
        fenceGateWallOpen(arg0: string, arg1: $ResourceLocation_): T;
        wallPost(arg0: string, arg1: $ResourceLocation_): T;
        wallSide(arg0: string, arg1: $ResourceLocation_): T;
        wallSideTall(arg0: string, arg1: $ResourceLocation_): T;
        panePost(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        paneSide(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        paneSideAlt(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        paneNoSide(arg0: string, arg1: $ResourceLocation_): T;
        paneNoSideAlt(arg0: string, arg1: $ResourceLocation_): T;
        doorBottomLeft(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        doorBottomLeftOpen(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        doorBottomRight(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        doorBottomRightOpen(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        doorTopLeft(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        doorTopLeftOpen(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        doorTopRight(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        doorTopRightOpen(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        trapdoorOrientableBottom(arg0: string, arg1: $ResourceLocation_): T;
        trapdoorBottom(arg0: string, arg1: $ResourceLocation_): T;
        trapdoorOrientableTop(arg0: string, arg1: $ResourceLocation_): T;
        trapdoorTop(arg0: string, arg1: $ResourceLocation_): T;
        trapdoorOrientableOpen(arg0: string, arg1: $ResourceLocation_): T;
        trapdoorOpen(arg0: string, arg1: $ResourceLocation_): T;
        cube(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: $ResourceLocation_, arg6: $ResourceLocation_): T;
        pressurePlate(arg0: string, arg1: $ResourceLocation_): T;
        stairs(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): T;
        fenceGate(arg0: string, arg1: $ResourceLocation_): T;
        carpet(arg0: string, arg1: $ResourceLocation_): T;
        crop(arg0: string, arg1: $ResourceLocation_): T;
        leaves(arg0: string, arg1: $ResourceLocation_): T;
        slab(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): T;
        torch(arg0: string, arg1: $ResourceLocation_): T;
        getBuilder(arg0: string): T;
        button(arg0: string, arg1: $ResourceLocation_): T;
        cross(arg0: string, arg1: $ResourceLocation_): T;
        static TEXTURE: $ExistingFileHelper$ResourceType;
        static ITEM_FOLDER: string;
        generatedModels: $Map<$ResourceLocation, T>;
        existingFileHelper: $ExistingFileHelper;
        static BLOCK_FOLDER: string;
        constructor(arg0: $PackOutput, arg1: string, arg2: string, arg3: $BiFunction_<$ResourceLocation, $ExistingFileHelper, T>, arg4: $ExistingFileHelper);
        constructor(arg0: $PackOutput, arg1: string, arg2: string, arg3: $Function_<$ResourceLocation, T>, arg4: $ExistingFileHelper);
    }
    export class $ModelBuilder$RootTransformsBuilder {
        scale(arg0: $Vector3f): $ModelBuilder$RootTransformsBuilder;
        scale(arg0: number): $ModelBuilder$RootTransformsBuilder;
        scale(arg0: number, arg1: number, arg2: number): $ModelBuilder$RootTransformsBuilder;
        transform(arg0: $Transformation): $ModelBuilder$RootTransformsBuilder;
        end(): $ModelBuilder<T>;
        origin(arg0: $TransformationHelper$TransformOrigin_): $ModelBuilder$RootTransformsBuilder;
        origin(arg0: $Vector3f): $ModelBuilder$RootTransformsBuilder;
        rightRotation(arg0: number, arg1: number, arg2: number, arg3: boolean): $ModelBuilder$RootTransformsBuilder;
        rightRotation(arg0: $Quaternionf): $ModelBuilder$RootTransformsBuilder;
        postRotation(arg0: $Quaternionf): $ModelBuilder$RootTransformsBuilder;
        postRotation(arg0: number, arg1: number, arg2: number, arg3: boolean): $ModelBuilder$RootTransformsBuilder;
        translation(arg0: number, arg1: number, arg2: number): $ModelBuilder$RootTransformsBuilder;
        translation(arg0: $Vector3f): $ModelBuilder$RootTransformsBuilder;
        toJson(): $JsonObject;
        rotation(arg0: number, arg1: number, arg2: number, arg3: boolean): $ModelBuilder$RootTransformsBuilder;
        rotation(arg0: $Quaternionf): $ModelBuilder$RootTransformsBuilder;
        leftRotation(arg0: number, arg1: number, arg2: number, arg3: boolean): $ModelBuilder$RootTransformsBuilder;
        leftRotation(arg0: $Quaternionf): $ModelBuilder$RootTransformsBuilder;
    }
    export class $BlockStateProvider$ConfiguredModelList {
        append(...arg0: $ConfiguredModel[]): $BlockStateProvider$ConfiguredModelList;
        toJSON(): $JsonElement;
        constructor(...arg0: $ConfiguredModel[]);
        constructor(arg0: $ConfiguredModel);
    }
    export class $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup {
        end(): $MultiPartBlockStateBuilder$PartBuilder;
        condition<T extends $Comparable<T>>(arg0: $Property<T>, ...arg1: T[]): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup;
        nestedGroup(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup;
        endNestedGroup(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup;
        useOr(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup;
        nestedConditionGroups: $List<$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup>;
        conditions: $Multimap<$Property<never>, $Comparable<never>>;
        constructor(arg0: $MultiPartBlockStateBuilder$PartBuilder);
    }
    export class $VariantBlockStateBuilder$PartialBlockstate implements $Predicate<$BlockState> {
        test(arg0: $BlockState_): boolean;
        with<T extends $Comparable<T>>(arg0: $Property<T>, arg1: T): $VariantBlockStateBuilder$PartialBlockstate;
        getOwner(): $Block;
        partialState(): $VariantBlockStateBuilder$PartialBlockstate;
        setModels(...arg0: $ConfiguredModel[]): $VariantBlockStateBuilder;
        modelForState(): $ConfiguredModel$Builder<$VariantBlockStateBuilder>;
        addModels(...arg0: $ConfiguredModel[]): $VariantBlockStateBuilder$PartialBlockstate;
        getSetStates(): $SortedMap<$Property<never>, $Comparable<never>>;
        static comparingByProperties(): $Comparator<$VariantBlockStateBuilder$PartialBlockstate>;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        get owner(): $Block;
        set models(value: $ConfiguredModel[]);
        get setStates(): $SortedMap<$Property<never>, $Comparable<never>>;
    }
    export class $ModelBuilder$ElementBuilder$RotationBuilder {
        end(): $ModelBuilder$ElementBuilder;
        origin(arg0: number, arg1: number, arg2: number): $ModelBuilder$ElementBuilder$RotationBuilder;
        rescale(arg0: boolean): $ModelBuilder$ElementBuilder$RotationBuilder;
        angle(arg0: number): $ModelBuilder$ElementBuilder$RotationBuilder;
        axis(arg0: $Direction$Axis_): $ModelBuilder$ElementBuilder$RotationBuilder;
        constructor(arg0: $ModelBuilder$ElementBuilder);
    }
    export class $ItemModelBuilder extends $ModelBuilder<$ItemModelBuilder> {
        override(arg0: number): $ItemModelBuilder$OverrideBuilder;
        override(): $ItemModelBuilder$OverrideBuilder;
        constructor(arg0: $ResourceLocation_, arg1: $ExistingFileHelper);
    }
    export class $ModelBuilder<T extends $ModelBuilder<T>> extends $ModelFile implements $ModelBuilderMixinDuck<any> {
        parent(arg0: $ModelFile): $Object;
        ao(arg0: boolean): $Object;
        element(arg0: number): $ModelBuilder$ElementBuilder;
        element(): $ModelBuilder$ElementBuilder;
        texture(arg0: string, arg1: string): $Object;
        texture(arg0: string, arg1: $ResourceLocation_): $Object;
        rootTransforms(): $ModelBuilder$RootTransformsBuilder;
        getElementCount(): number;
        createVibrantVaults$uncheckedTexture(arg0: string, arg1: $ResourceLocation_): $ModelBuilder<any>;
        transforms(): $ModelBuilder$TransformsBuilder;
        guiLight(arg0: $BlockModel$GuiLight_): $Object;
        customLoader<L extends $CustomLoaderBuilder<T>>(arg0: $BiFunction_<$Object, $ExistingFileHelper, L>): L;
        renderType(arg0: string): $Object;
        renderType(arg0: $ResourceLocation_): $Object;
        toJson(): $JsonObject;
        get elementCount(): number;
    }
    export class $ModelFile$UncheckedModelFile extends $ModelFile {
        constructor(arg0: string);
        constructor(arg0: $ResourceLocation_);
    }
    export class $BlockModelBuilder extends $ModelBuilder<$BlockModelBuilder> {
        constructor(arg0: $ResourceLocation_, arg1: $ExistingFileHelper);
    }
    export class $ModelFile {
        getLocation(): $ResourceLocation;
        assertExistence(): void;
        getUncheckedLocation(): $ResourceLocation;
        get location(): $ResourceLocation;
        get uncheckedLocation(): $ResourceLocation;
    }
    export class $ItemModelProvider extends $ModelProvider<$ItemModelBuilder> {
        basicItem(arg0: $ResourceLocation_): $ItemModelBuilder;
        basicItem(arg0: $Item_): $ItemModelBuilder;
        handheldItem(arg0: $ResourceLocation_): $ItemModelBuilder;
        handheldItem(arg0: $Item_): $ItemModelBuilder;
        spawnEggItem(arg0: $Item_): $ItemModelBuilder;
        spawnEggItem(arg0: $ResourceLocation_): $ItemModelBuilder;
        simpleBlockItem(arg0: $ResourceLocation_): $ItemModelBuilder;
        simpleBlockItem(arg0: $Block_): $ItemModelBuilder;
        static TEXTURE: $ExistingFileHelper$ResourceType;
        static ITEM_FOLDER: string;
        generatedModels: $Map<$ResourceLocation, $ItemModelBuilder>;
        existingFileHelper: $ExistingFileHelper;
        static BLOCK_FOLDER: string;
        constructor(arg0: $PackOutput, arg1: string, arg2: $ExistingFileHelper);
    }
    export class $ItemModelBuilder$OverrideBuilder {
        end(): $ItemModelBuilder;
        model(arg0: $ModelFile): $ItemModelBuilder$OverrideBuilder;
        predicate(arg0: $ResourceLocation_, arg1: number): $ItemModelBuilder$OverrideBuilder;
        constructor(arg0: $ItemModelBuilder);
    }
    export class $ModelFile$ExistingModelFile extends $ModelFile {
        constructor(arg0: $ResourceLocation_, arg1: $ExistingFileHelper);
    }
    export class $BlockModelProvider extends $ModelProvider<$BlockModelBuilder> {
        static TEXTURE: $ExistingFileHelper$ResourceType;
        static ITEM_FOLDER: string;
        generatedModels: $Map<$ResourceLocation, $BlockModelBuilder>;
        existingFileHelper: $ExistingFileHelper;
        static BLOCK_FOLDER: string;
        constructor(arg0: $PackOutput, arg1: string, arg2: $ExistingFileHelper);
    }
    export class $IGeneratedBlockState {
    }
    export interface $IGeneratedBlockState {
        toJson(): $JsonObject;
    }
    /**
     * Values that may be interpreted as {@link $IGeneratedBlockState}.
     */
    export type $IGeneratedBlockState_ = (() => $JsonObject_);
    export class $CustomLoaderBuilder<T extends $ModelBuilder<T>> {
        end(): T;
        optional(): $CustomLoaderBuilder<T>;
        toJson(arg0: $JsonObject_): $JsonObject;
        visibility(arg0: string, arg1: boolean): $CustomLoaderBuilder<T>;
    }
    export class $BlockStateProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        blockTexture(arg0: $Block_): $ResourceLocation;
        simpleBlockItem(arg0: $Block_, arg1: $ModelFile): void;
        getVariantBuilder(arg0: $Block_): $VariantBlockStateBuilder;
        axisBlock(arg0: $RotatedPillarBlock, arg1: $ModelFile, arg2: $ModelFile): void;
        axisBlock(arg0: $RotatedPillarBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_): void;
        axisBlock(arg0: $RotatedPillarBlock, arg1: $ResourceLocation_): void;
        axisBlock(arg0: $RotatedPillarBlock): void;
        itemModels(): $ItemModelProvider;
        mcLoc(arg0: string): $ResourceLocation;
        simpleBlockWithItem(arg0: $Block_, arg1: $ModelFile): void;
        logBlock(arg0: $RotatedPillarBlock): void;
        logBlockWithRenderType(arg0: $RotatedPillarBlock, arg1: string): void;
        logBlockWithRenderType(arg0: $RotatedPillarBlock, arg1: $ResourceLocation_): void;
        fenceBlock(arg0: $FenceBlock, arg1: string, arg2: $ResourceLocation_): void;
        fenceBlock(arg0: $FenceBlock, arg1: $ResourceLocation_): void;
        fenceBlockWithRenderType(arg0: $FenceBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_): void;
        fenceBlockWithRenderType(arg0: $FenceBlock, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_): void;
        fenceBlockWithRenderType(arg0: $FenceBlock, arg1: string, arg2: $ResourceLocation_, arg3: string): void;
        fenceBlockWithRenderType(arg0: $FenceBlock, arg1: $ResourceLocation_, arg2: string): void;
        fenceGateBlockWithRenderType(arg0: $FenceGateBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_): void;
        fenceGateBlockWithRenderType(arg0: $FenceGateBlock, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_): void;
        fenceGateBlockWithRenderType(arg0: $FenceGateBlock, arg1: string, arg2: $ResourceLocation_, arg3: string): void;
        fenceGateBlockWithRenderType(arg0: $FenceGateBlock, arg1: $ResourceLocation_, arg2: string): void;
        wallBlockWithRenderType(arg0: $WallBlock, arg1: string, arg2: $ResourceLocation_, arg3: string): void;
        wallBlockWithRenderType(arg0: $WallBlock, arg1: $ResourceLocation_, arg2: string): void;
        wallBlockWithRenderType(arg0: $WallBlock, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_): void;
        wallBlockWithRenderType(arg0: $WallBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_): void;
        paneBlockWithRenderType(arg0: $IronBarsBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: string): void;
        paneBlockWithRenderType(arg0: $IronBarsBlock, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: string): void;
        paneBlockWithRenderType(arg0: $IronBarsBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): void;
        paneBlockWithRenderType(arg0: $IronBarsBlock, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_): void;
        doorBlockWithRenderType(arg0: $DoorBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): void;
        doorBlockWithRenderType(arg0: $DoorBlock, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_): void;
        doorBlockWithRenderType(arg0: $DoorBlock, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: string): void;
        doorBlockWithRenderType(arg0: $DoorBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: string): void;
        trapdoorBlockWithRenderType(arg0: $TrapDoorBlock, arg1: $ResourceLocation_, arg2: boolean, arg3: string): void;
        trapdoorBlockWithRenderType(arg0: $TrapDoorBlock, arg1: string, arg2: $ResourceLocation_, arg3: boolean, arg4: $ResourceLocation_): void;
        trapdoorBlockWithRenderType(arg0: $TrapDoorBlock, arg1: string, arg2: $ResourceLocation_, arg3: boolean, arg4: string): void;
        trapdoorBlockWithRenderType(arg0: $TrapDoorBlock, arg1: $ResourceLocation_, arg2: boolean, arg3: $ResourceLocation_): void;
        modLoc(arg0: string): $ResourceLocation;
        cubeAll(arg0: $Block_): $ModelFile;
        simpleBlock(arg0: $Block_): void;
        simpleBlock(arg0: $Block_, ...arg1: $ConfiguredModel[]): void;
        simpleBlock(arg0: $Block_, arg1: $Function_<$ModelFile, $ConfiguredModel[]>): void;
        simpleBlock(arg0: $Block_, arg1: $ModelFile): void;
        axisBlockWithRenderType(arg0: $RotatedPillarBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: string): void;
        axisBlockWithRenderType(arg0: $RotatedPillarBlock, arg1: $ResourceLocation_, arg2: string): void;
        axisBlockWithRenderType(arg0: $RotatedPillarBlock, arg1: string): void;
        axisBlockWithRenderType(arg0: $RotatedPillarBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_): void;
        axisBlockWithRenderType(arg0: $RotatedPillarBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): void;
        axisBlockWithRenderType(arg0: $RotatedPillarBlock, arg1: $ResourceLocation_): void;
        horizontalBlock(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): void;
        horizontalBlock(arg0: $Block_, arg1: $Function_<$BlockState, $ModelFile>, arg2: number): void;
        horizontalBlock(arg0: $Block_, arg1: $Function_<$BlockState, $ModelFile>): void;
        horizontalBlock(arg0: $Block_, arg1: $ModelFile): void;
        horizontalBlock(arg0: $Block_, arg1: $ModelFile, arg2: number): void;
        horizontalFaceBlock(arg0: $Block_, arg1: $ModelFile): void;
        horizontalFaceBlock(arg0: $Block_, arg1: $ModelFile, arg2: number): void;
        horizontalFaceBlock(arg0: $Block_, arg1: $Function_<$BlockState, $ModelFile>): void;
        horizontalFaceBlock(arg0: $Block_, arg1: $Function_<$BlockState, $ModelFile>, arg2: number): void;
        directionalBlock(arg0: $Block_, arg1: $Function_<$BlockState, $ModelFile>): void;
        directionalBlock(arg0: $Block_, arg1: $ModelFile): void;
        directionalBlock(arg0: $Block_, arg1: $ModelFile, arg2: number): void;
        directionalBlock(arg0: $Block_, arg1: $Function_<$BlockState, $ModelFile>, arg2: number): void;
        stairsBlock(arg0: $StairBlock, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_): void;
        stairsBlock(arg0: $StairBlock, arg1: string, arg2: $ResourceLocation_): void;
        stairsBlock(arg0: $StairBlock, arg1: $ModelFile, arg2: $ModelFile, arg3: $ModelFile): void;
        stairsBlock(arg0: $StairBlock, arg1: $ResourceLocation_): void;
        stairsBlock(arg0: $StairBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): void;
        stairsBlockWithRenderType(arg0: $StairBlock, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_): void;
        stairsBlockWithRenderType(arg0: $StairBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_): void;
        stairsBlockWithRenderType(arg0: $StairBlock, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: $ResourceLocation_): void;
        stairsBlockWithRenderType(arg0: $StairBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_): void;
        stairsBlockWithRenderType(arg0: $StairBlock, arg1: string, arg2: $ResourceLocation_, arg3: string): void;
        stairsBlockWithRenderType(arg0: $StairBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: string): void;
        stairsBlockWithRenderType(arg0: $StairBlock, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: string): void;
        stairsBlockWithRenderType(arg0: $StairBlock, arg1: $ResourceLocation_, arg2: string): void;
        slabBlock(arg0: $SlabBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_): void;
        slabBlock(arg0: $SlabBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_): void;
        slabBlock(arg0: $SlabBlock, arg1: $ModelFile, arg2: $ModelFile, arg3: $ModelFile): void;
        buttonBlock(arg0: $ButtonBlock, arg1: $ResourceLocation_): void;
        buttonBlock(arg0: $ButtonBlock, arg1: $ModelFile, arg2: $ModelFile): void;
        pressurePlateBlock(arg0: $PressurePlateBlock, arg1: $ModelFile, arg2: $ModelFile): void;
        pressurePlateBlock(arg0: $PressurePlateBlock, arg1: $ResourceLocation_): void;
        signBlock(arg0: $StandingSignBlock, arg1: $WallSignBlock, arg2: $ModelFile): void;
        signBlock(arg0: $StandingSignBlock, arg1: $WallSignBlock, arg2: $ResourceLocation_): void;
        hangingSignBlock(arg0: $CeilingHangingSignBlock, arg1: $WallHangingSignBlock, arg2: $ResourceLocation_): void;
        hangingSignBlock(arg0: $CeilingHangingSignBlock, arg1: $WallHangingSignBlock, arg2: $ModelFile): void;
        getMultipartBuilder(arg0: $Block_): $MultiPartBlockStateBuilder;
        fourWayMultipart(arg0: $MultiPartBlockStateBuilder, arg1: $ModelFile): void;
        fourWayBlock(arg0: $CrossCollisionBlock, arg1: $ModelFile, arg2: $ModelFile): void;
        fenceGateBlock(arg0: $FenceGateBlock, arg1: $ModelFile, arg2: $ModelFile, arg3: $ModelFile, arg4: $ModelFile): void;
        fenceGateBlock(arg0: $FenceGateBlock, arg1: $ResourceLocation_): void;
        fenceGateBlock(arg0: $FenceGateBlock, arg1: string, arg2: $ResourceLocation_): void;
        wallBlock(arg0: $WallBlock, arg1: $ModelFile, arg2: $ModelFile, arg3: $ModelFile): void;
        wallBlock(arg0: $WallBlock, arg1: string, arg2: $ResourceLocation_): void;
        wallBlock(arg0: $WallBlock, arg1: $ResourceLocation_): void;
        paneBlock(arg0: $IronBarsBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_): void;
        paneBlock(arg0: $IronBarsBlock, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_): void;
        paneBlock(arg0: $IronBarsBlock, arg1: $ModelFile, arg2: $ModelFile, arg3: $ModelFile, arg4: $ModelFile, arg5: $ModelFile): void;
        doorBlock(arg0: $DoorBlock, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_): void;
        doorBlock(arg0: $DoorBlock, arg1: $ResourceLocation_, arg2: $ResourceLocation_): void;
        doorBlock(arg0: $DoorBlock, arg1: $ModelFile, arg2: $ModelFile, arg3: $ModelFile, arg4: $ModelFile, arg5: $ModelFile, arg6: $ModelFile, arg7: $ModelFile, arg8: $ModelFile): void;
        trapdoorBlock(arg0: $TrapDoorBlock, arg1: string, arg2: $ResourceLocation_, arg3: boolean): void;
        trapdoorBlock(arg0: $TrapDoorBlock, arg1: $ResourceLocation_, arg2: boolean): void;
        trapdoorBlock(arg0: $TrapDoorBlock, arg1: $ModelFile, arg2: $ModelFile, arg3: $ModelFile, arg4: boolean): void;
        models(): $BlockModelProvider;
        static WALL_PROPS: $ImmutableMap<$Direction, $Property<$WallSide>>;
        constructor(arg0: $PackOutput, arg1: string, arg2: $ExistingFileHelper);
        get name(): string;
    }
    export class $ModelBuilder$FaceRotation extends $Enum<$ModelBuilder$FaceRotation> {
        static values(): $ModelBuilder$FaceRotation[];
        static valueOf(arg0: string): $ModelBuilder$FaceRotation;
        static ZERO: $ModelBuilder$FaceRotation;
        static COUNTERCLOCKWISE_90: $ModelBuilder$FaceRotation;
        static CLOCKWISE_90: $ModelBuilder$FaceRotation;
        static UPSIDE_DOWN: $ModelBuilder$FaceRotation;
    }
    /**
     * Values that may be interpreted as {@link $ModelBuilder$FaceRotation}.
     */
    export type $ModelBuilder$FaceRotation_ = "zero" | "clockwise_90" | "upside_down" | "counterclockwise_90";
    export class $ModelBuilder$TransformsBuilder$TransformVecBuilder {
        scale(arg0: number, arg1: number, arg2: number): $ModelBuilder$TransformsBuilder$TransformVecBuilder;
        scale(arg0: number): $ModelBuilder$TransformsBuilder$TransformVecBuilder;
        end(): $ModelBuilder$TransformsBuilder;
        rightRotation(arg0: number, arg1: number, arg2: number): $ModelBuilder$TransformsBuilder$TransformVecBuilder;
        translation(arg0: number, arg1: number, arg2: number): $ModelBuilder$TransformsBuilder$TransformVecBuilder;
        rotation(arg0: number, arg1: number, arg2: number): $ModelBuilder$TransformsBuilder$TransformVecBuilder;
        leftRotation(arg0: number, arg1: number, arg2: number): $ModelBuilder$TransformsBuilder$TransformVecBuilder;
    }
    export class $ModelBuilder$ElementBuilder {
        from(arg0: number, arg1: number, arg2: number): $ModelBuilder$ElementBuilder;
        to(arg0: number, arg1: number, arg2: number): $ModelBuilder$ElementBuilder;
        end(): T;
        ao(arg0: boolean): $ModelBuilder$ElementBuilder;
        color(arg0: number): $ModelBuilder$ElementBuilder;
        allFaces(arg0: $BiConsumer_<$Direction, $ModelBuilder$ElementBuilder$FaceBuilder>): $ModelBuilder$ElementBuilder;
        texture(arg0: string): $ModelBuilder$ElementBuilder;
        faces(arg0: $BiConsumer_<$Direction, $ModelBuilder$ElementBuilder$FaceBuilder>): $ModelBuilder$ElementBuilder;
        cube(arg0: string): $ModelBuilder$ElementBuilder;
        allFacesExcept(arg0: $BiConsumer_<$Direction, $ModelBuilder$ElementBuilder$FaceBuilder>, arg1: $Set_<$Direction_>): $ModelBuilder$ElementBuilder;
        textureAll(arg0: string): $ModelBuilder$ElementBuilder;
        emissivity(arg0: number, arg1: number): $ModelBuilder$ElementBuilder;
        rotation(): $ModelBuilder$ElementBuilder$RotationBuilder;
        face(arg0: $Direction_): $ModelBuilder$ElementBuilder$FaceBuilder;
        shade(arg0: boolean): $ModelBuilder$ElementBuilder;
        constructor(arg0: $ModelBuilder<any>);
    }
    export class $MultiPartBlockStateBuilder implements $IGeneratedBlockState {
        part(): $ConfiguredModel$Builder<$MultiPartBlockStateBuilder$PartBuilder>;
        toJson(): $JsonObject;
        constructor(arg0: $Block_);
    }
    export class $VariantBlockStateBuilder implements $IGeneratedBlockState {
        getOwner(): $Block;
        partialState(): $VariantBlockStateBuilder$PartialBlockstate;
        setModels(arg0: $VariantBlockStateBuilder$PartialBlockstate, ...arg1: $ConfiguredModel[]): $VariantBlockStateBuilder;
        forAllStates(arg0: $Function_<$BlockState, $ConfiguredModel[]>): $VariantBlockStateBuilder;
        forAllStatesExcept(arg0: $Function_<$BlockState, $ConfiguredModel[]>, ...arg1: $Property<never>[]): $VariantBlockStateBuilder;
        addModels(arg0: $VariantBlockStateBuilder$PartialBlockstate, ...arg1: $ConfiguredModel[]): $VariantBlockStateBuilder;
        getModels(): $Map<$VariantBlockStateBuilder$PartialBlockstate, $BlockStateProvider$ConfiguredModelList>;
        toJson(): $JsonObject;
        get owner(): $Block;
    }
    export class $ModelBuilder$TransformsBuilder {
        transform(arg0: $ItemDisplayContext_): $ModelBuilder$TransformsBuilder$TransformVecBuilder;
        end(): T;
        constructor(arg0: $ModelBuilder<any>);
    }
    export class $ConfiguredModel$Builder<T> {
        build(): $ConfiguredModel[];
        buildLast(): $ConfiguredModel;
        nextModel(): $ConfiguredModel$Builder<T>;
        modelFile(arg0: $ModelFile): $ConfiguredModel$Builder<T>;
        addModel(): T;
        uvLock(arg0: boolean): $ConfiguredModel$Builder<T>;
        weight(arg0: number): $ConfiguredModel$Builder<T>;
        rotationX(arg0: number): $ConfiguredModel$Builder<T>;
        rotationY(arg0: number): $ConfiguredModel$Builder<T>;
    }
    export class $MultiPartBlockStateBuilder$PartBuilder {
        end(): $MultiPartBlockStateBuilder;
        condition<T extends $Comparable<T>>(arg0: $Property<T>, ...arg1: T[]): $MultiPartBlockStateBuilder$PartBuilder;
        nestedGroup(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup;
        canApplyTo(arg0: $Block_): boolean;
        useOr(): $MultiPartBlockStateBuilder$PartBuilder;
        nestedConditionGroups: $List<$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup>;
        models: $BlockStateProvider$ConfiguredModelList;
        conditions: $Multimap<$Property<never>, $Comparable<never>>;
    }
    export class $ConfiguredModel {
        static builder(): $ConfiguredModel$Builder<never>;
        static allYRotations(arg0: $ModelFile, arg1: number, arg2: boolean, arg3: number): $ConfiguredModel[];
        static allYRotations(arg0: $ModelFile, arg1: number, arg2: boolean): $ConfiguredModel[];
        static allRotations(arg0: $ModelFile, arg1: boolean): $ConfiguredModel[];
        static allRotations(arg0: $ModelFile, arg1: boolean, arg2: number): $ConfiguredModel[];
        rotationX: number;
        rotationY: number;
        uvLock: boolean;
        weight: number;
        model: $ModelFile;
        static DEFAULT_WEIGHT: number;
        constructor(arg0: $ModelFile, arg1: number, arg2: number, arg3: boolean, arg4: number);
        constructor(arg0: $ModelFile);
        constructor(arg0: $ModelFile, arg1: number, arg2: number, arg3: boolean);
    }
}
