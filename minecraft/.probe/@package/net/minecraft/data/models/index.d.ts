import { $JsonObject, $JsonElement } from "@package/com/google/gson";
import { $ArmorMaterial, $Item_, $Item, $ArmorItem } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ModelTemplate, $TextureMapping, $TexturedModel, $TextureSlot, $TexturedModel$Provider_ } from "@package/net/minecraft/data/models/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ItemModelGeneratorsAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $BlockStateGenerator, $PropertyDispatch, $Variant, $PropertyDispatch$C4, $MultiPartGenerator, $VariantProperties$Rotation_, $Condition$TerminalCondition, $MultiVariantGenerator } from "@package/net/minecraft/data/models/blockstates";
import { $BlockFamily, $DataProvider, $PackOutput, $CachedOutput_, $BlockFamily$Variant } from "@package/net/minecraft/data";
import { $BiConsumer, $Consumer, $BiConsumer_, $Function_, $Consumer_, $UnaryOperator_, $BiFunction_, $Function, $Supplier } from "@package/java/util/function";
import { $Holder_, $Holder, $FrontAndTop_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $DripstoneThickness_, $DoorHingeSide_, $DoorHingeSide, $DoubleBlockHalf_, $Property, $BooleanProperty, $DoubleBlockHalf } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record, $Comparable } from "@package/java/lang";
export * as blockstates from "@package/net/minecraft/data/models/blockstates";
export * as model from "@package/net/minecraft/data/models/model";

declare module "@package/net/minecraft/data/models" {
    export class $BlockModelGenerators$BlockStateGeneratorSupplier {
    }
    export interface $BlockModelGenerators$BlockStateGeneratorSupplier {
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$BlockStateGeneratorSupplier}.
     */
    export type $BlockModelGenerators$BlockStateGeneratorSupplier_ = (() => void);
    export class $BlockModelGenerators$BlockFamilyProvider {
        customFence(arg0: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        customFenceGate(arg0: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        generateFor(arg0: $BlockFamily): $BlockModelGenerators$BlockFamilyProvider;
        donateModelTo(arg0: $Block_, arg1: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        fullBlock(arg0: $Block_, arg1: $ModelTemplate): $BlockModelGenerators$BlockFamilyProvider;
        slab(arg0: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        pressurePlate(arg0: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        stairs(arg0: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        fenceGate(arg0: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        wall(arg0: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        fence(arg0: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        sign(arg0: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        button(arg0: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        this$0: $BlockModelGenerators;
        constructor(arg0: $BlockModelGenerators, arg1: $TextureMapping);
    }
    export class $BlockModelGenerators$TintState extends $Enum<$BlockModelGenerators$TintState> {
        getCross(): $ModelTemplate;
        getCrossPot(): $ModelTemplate;
        static values(): $BlockModelGenerators$TintState[];
        static valueOf(arg0: string): $BlockModelGenerators$TintState;
        static NOT_TINTED: $BlockModelGenerators$TintState;
        static TINTED: $BlockModelGenerators$TintState;
        get cross(): $ModelTemplate;
        get crossPot(): $ModelTemplate;
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$TintState}.
     */
    export type $BlockModelGenerators$TintState_ = "tinted" | "not_tinted";
    export class $BlockModelGenerators {
        static createFence(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $BlockStateGenerator;
        static createMirroredCubeGenerator(arg0: $Block_, arg1: $ResourceLocation_, arg2: $TextureMapping, arg3: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        static createRotatedVariant(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $MultiVariantGenerator;
        static createRotatedVariant(arg0: $Block_, arg1: $ResourceLocation_): $MultiVariantGenerator;
        static createNorthWestMirroredCubeGenerator(arg0: $Block_, arg1: $ResourceLocation_, arg2: $TextureMapping, arg3: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        static createSimpleBlock(arg0: $Block_, arg1: $ResourceLocation_): $MultiVariantGenerator;
        static createMirroredColumnGenerator(arg0: $Block_, arg1: $ResourceLocation_, arg2: $TextureMapping, arg3: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        static createRotatedPillar(): $PropertyDispatch;
        skipAutoItemBlock(arg0: $Block_): void;
        delegateItemModel(arg0: $Block_, arg1: $ResourceLocation_): void;
        delegateItemModel(arg0: $Item_, arg1: $ResourceLocation_): void;
        createSimpleFlatItemModel(arg0: $Block_, arg1: string): void;
        createSimpleFlatItemModel(arg0: $Item_): void;
        createSimpleFlatItemModel(arg0: $Block_): void;
        static createHorizontalFacingDispatch(): $PropertyDispatch;
        static createHorizontalFacingDispatchAlt(): $PropertyDispatch;
        static createTorchHorizontalDispatch(): $PropertyDispatch;
        static createFacingDispatch(): $PropertyDispatch;
        static createRotatedVariants(arg0: $ResourceLocation_): $Variant[];
        static createBooleanModelDispatch(arg0: $BooleanProperty, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $PropertyDispatch;
        createRotatedMirroredVariantBlock(arg0: $Block_): void;
        createRotatedVariantBlock(arg0: $Block_): void;
        createBrushableBlock(arg0: $Block_): void;
        static configureDoorHalf(arg0: $PropertyDispatch$C4<$Direction_, $DoubleBlockHalf_, $DoorHingeSide_, boolean>, arg1: $DoubleBlockHalf_, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: $ResourceLocation_): $PropertyDispatch$C4<$Direction, $DoubleBlockHalf, $DoorHingeSide, boolean>;
        createDoor(arg0: $Block_): void;
        static createDoor(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: $ResourceLocation_, arg6: $ResourceLocation_, arg7: $ResourceLocation_, arg8: $ResourceLocation_): $BlockStateGenerator;
        static createCustomFence(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: $ResourceLocation_): $BlockStateGenerator;
        static createWall(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): $BlockStateGenerator;
        static createFenceGate(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: boolean): $BlockStateGenerator;
        static createStairs(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): $BlockStateGenerator;
        createOrientableTrapdoor(arg0: $Block_): void;
        static createOrientableTrapdoor(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): $BlockStateGenerator;
        createTrapdoor(arg0: $Block_): void;
        static createTrapdoor(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): $BlockStateGenerator;
        static createPillarBlockUVLocked(arg0: $Block_, arg1: $TextureMapping, arg2: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        createAxisAlignedPillarBlock(arg0: $Block_, arg1: $TexturedModel$Provider_): void;
        static createAxisAlignedPillarBlock(arg0: $Block_, arg1: $ResourceLocation_): $BlockStateGenerator;
        createAxisAlignedPillarBlockCustomModel(arg0: $Block_, arg1: $ResourceLocation_): void;
        createHorizontallyRotatedBlock(arg0: $Block_, arg1: $TexturedModel$Provider_): void;
        static createRotatedPillarWithHorizontalVariant(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $BlockStateGenerator;
        createRotatedPillarWithHorizontalVariant(arg0: $Block_, arg1: $TexturedModel$Provider_, arg2: $TexturedModel$Provider_): void;
        createSuffixedVariant(arg0: $Block_, arg1: string, arg2: $ModelTemplate, arg3: $Function_<$ResourceLocation, $TextureMapping>): $ResourceLocation;
        static createPressurePlate(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $BlockStateGenerator;
        static createSlab(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): $BlockStateGenerator;
        createTrivialCube(arg0: $Block_): void;
        createTrivialBlock(arg0: $Block_, arg1: $TexturedModel$Provider_): void;
        createTrivialBlock(arg0: $Block_, arg1: $TextureMapping, arg2: $ModelTemplate): void;
        createHangingSign(arg0: $Block_, arg1: $Block_, arg2: $Block_): void;
        copyDoorModel(arg0: $Block_, arg1: $Block_): void;
        copyTrapdoorModel(arg0: $Block_, arg1: $Block_): void;
        woodProvider(arg0: $Block_): $BlockModelGenerators$WoodProvider;
        createNonTemplateModelBlock(arg0: $Block_, arg1: $Block_): void;
        createNonTemplateModelBlock(arg0: $Block_): void;
        createCrossBlockWithDefaultItem(arg0: $Block_, arg1: $BlockModelGenerators$TintState_): void;
        createCrossBlockWithDefaultItem(arg0: $Block_, arg1: $BlockModelGenerators$TintState_, arg2: $TextureMapping): void;
        createCrossBlock(arg0: $Block_, arg1: $BlockModelGenerators$TintState_, arg2: $Property<number>, ...arg3: number[]): void;
        createCrossBlock(arg0: $Block_, arg1: $BlockModelGenerators$TintState_, arg2: $TextureMapping): void;
        createCrossBlock(arg0: $Block_, arg1: $BlockModelGenerators$TintState_): void;
        createPlant(arg0: $Block_, arg1: $Block_, arg2: $BlockModelGenerators$TintState_): void;
        createCoralFans(arg0: $Block_, arg1: $Block_): void;
        createStems(arg0: $Block_, arg1: $Block_): void;
        createDoubleBlock(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_): void;
        createCoral(arg0: $Block_, arg1: $Block_, arg2: $Block_, arg3: $Block_, arg4: $Block_, arg5: $Block_, arg6: $Block_, arg7: $Block_): void;
        createDoublePlant(arg0: $Block_, arg1: $BlockModelGenerators$TintState_): void;
        createPassiveRail(arg0: $Block_): void;
        createActiveRail(arg0: $Block_): void;
        blockEntityModels(arg0: $ResourceLocation_, arg1: $Block_): $BlockModelGenerators$BlockEntityModelGenerator;
        blockEntityModels(arg0: $Block_, arg1: $Block_): $BlockModelGenerators$BlockEntityModelGenerator;
        createAirLikeBlock(arg0: $Block_, arg1: $ResourceLocation_): void;
        createAirLikeBlock(arg0: $Block_, arg1: $Item_): void;
        createFullAndCarpetBlocks(arg0: $Block_, arg1: $Block_): void;
        createFlowerBed(arg0: $Block_): void;
        createColoredBlockWithRandomRotations(arg0: $TexturedModel$Provider_, ...arg1: $Block_[]): void;
        createColoredBlockWithStateRotations(arg0: $TexturedModel$Provider_, ...arg1: $Block_[]): void;
        createGlassBlocks(arg0: $Block_, arg1: $Block_): void;
        createCommandBlock(arg0: $Block_): void;
        createAnvil(arg0: $Block_): void;
        createBambooModels(arg0: number): $List<$Variant>;
        createColumnWithFacing(): $PropertyDispatch;
        static createEmptyOrFullDispatch<T extends $Comparable<T>>(arg0: $Property<T>, arg1: T, arg2: $ResourceLocation_, arg3: $ResourceLocation_): $PropertyDispatch;
        createBeeNest(arg0: $Block_, arg1: $Function_<$Block, $TextureMapping>): void;
        createCropBlock(arg0: $Block_, arg1: $Property<number>, ...arg2: number[]): void;
        createFurnace(arg0: $Block_, arg1: $TexturedModel$Provider_): void;
        createCampfires(...arg0: $Block_[]): void;
        createAzalea(arg0: $Block_): void;
        createPottedAzalea(arg0: $Block_): void;
        createMushroomBlock(arg0: $Block_): void;
        createCraftingTableLike(arg0: $Block_, arg1: $Block_, arg2: $BiFunction_<$Block, $Block, $TextureMapping>): void;
        createGenericCube(arg0: $Block_): void;
        createPumpkinVariant(arg0: $Block_, arg1: $TextureMapping): void;
        createDispenserBlock(arg0: $Block_): void;
        createCopperBulb(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_): $BlockStateGenerator;
        createCopperBulb(arg0: $Block_): void;
        copyCopperBulbModel(arg0: $Block_, arg1: $Block_): void;
        createAmethystCluster(arg0: $Block_): void;
        createPointedDripstoneVariant(arg0: $Direction_, arg1: $DripstoneThickness_): $Variant;
        createNyliumBlock(arg0: $Block_): void;
        createRotatableColumn(arg0: $Block_): void;
        createFloorFireModels(arg0: $Block_): $List<$ResourceLocation>;
        createSideFireModels(arg0: $Block_): $List<$ResourceLocation>;
        createTopFireModels(arg0: $Block_): $List<$ResourceLocation>;
        static wrapModels(arg0: $List_<$ResourceLocation_>, arg1: $UnaryOperator_<$Variant>): $List<$Variant>;
        createLantern(arg0: $Block_): void;
        createGrassLikeBlock(arg0: $Block_, arg1: $ResourceLocation_, arg2: $Variant): void;
        createWeightedPressurePlate(arg0: $Block_, arg1: $Block_): void;
        copyModel(arg0: $Block_, arg1: $Block_): void;
        createNonTemplateHorizontalBlock(arg0: $Block_): void;
        createPistonVariant(arg0: $Block_, arg1: $ResourceLocation_, arg2: $TextureMapping): void;
        createNormalTorch(arg0: $Block_, arg1: $Block_): void;
        createTurtleEggModel(arg0: number, arg1: number): $ResourceLocation;
        createTurtleEggModel(arg0: number, arg1: string, arg2: $TextureMapping): $ResourceLocation;
        createMultiface(arg0: $Block_): void;
        addSlotStateAndRotationVariants(arg0: $MultiPartGenerator, arg1: $Condition$TerminalCondition, arg2: $VariantProperties$Rotation_): void;
        addBookSlotModel(arg0: $MultiPartGenerator, arg1: $Condition$TerminalCondition, arg2: $VariantProperties$Rotation_, arg3: $BooleanProperty, arg4: $ModelTemplate, arg5: boolean): void;
        createShulkerBox(arg0: $Block_): void;
        createGrowingPlant(arg0: $Block_, arg1: $Block_, arg2: $BlockModelGenerators$TintState_): void;
        createBedItem(arg0: $Block_, arg1: $Block_): void;
        createNetherRoots(arg0: $Block_, arg1: $Block_): void;
        createCandleAndCandleCake(arg0: $Block_, arg1: $Block_): void;
        applyRotation(arg0: $FrontAndTop_, arg1: $Variant): $Variant;
        family(arg0: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        run(): void;
        static createButton(arg0: $Block_, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $BlockStateGenerator;
        static MULTIFACE_GENERATOR: $List<$Pair<$BooleanProperty, $Function<$ResourceLocation, $Variant>>>;
        nonOrientableTrapdoor: $List<$Block>;
        texturedModels: $Map<$Block, $TexturedModel>;
        fullBlockModelCustomGenerators: $Map<$Block, $BlockModelGenerators$BlockStateGeneratorSupplier>;
        blockStateOutput: $Consumer<$BlockStateGenerator>;
        modelOutput: $BiConsumer<$ResourceLocation, $Supplier<$JsonElement>>;
        static SHAPE_CONSUMERS: $Map<$BlockFamily$Variant, $BiConsumer<$BlockModelGenerators$BlockFamilyProvider, $Block>>;
        constructor(arg0: $Consumer_<$BlockStateGenerator>, arg1: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>, arg2: $Consumer_<$Item>);
    }
    export class $ModelProvider implements $DataProvider {
        handler$icl000$fabric_data_generation_api_v1$init(arg0: $PackOutput, arg1: $CallbackInfo): void;
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput);
        get name(): string;
    }
    export class $ItemModelGenerators implements $ItemModelGeneratorsAccessor {
        getItemModelForTrimMaterial(arg0: $ResourceLocation_, arg1: string): $ResourceLocation;
        generateItemWithOverlay(arg0: $Item_): void;
        generateLayeredItem(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): void;
        generateLayeredItem(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_): void;
        generateCompassItem(arg0: $Item_): void;
        generateClockItem(arg0: $Item_): void;
        generateArmorTrims(arg0: $ArmorItem): void;
        static getGENERATED_TRIM_MODELS$create_$md$3b3139$0(): $List<any>;
        generateBaseArmorTrimTemplate(arg0: $ResourceLocation_, arg1: $Map_<$TextureSlot, $ResourceLocation_>, arg2: $Holder_<$ArmorMaterial>): $JsonObject;
        generateFlatItem(arg0: $Item_, arg1: string, arg2: $ModelTemplate): void;
        generateFlatItem(arg0: $Item_, arg1: $ModelTemplate): void;
        generateFlatItem(arg0: $Item_, arg1: $Item_, arg2: $ModelTemplate): void;
        run(): void;
        output: $BiConsumer<$ResourceLocation, $Supplier<$JsonElement>>;
        static GENERATED_TRIM_MODELS: $List<$ItemModelGenerators$TrimModelData>;
        static TRIM_TYPE_PREDICATE_ID: $ResourceLocation;
        constructor(arg0: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>);
        static get GENERATED_TRIM_MODELS$create_$md$3b3139$0(): $List<any>;
    }
    export class $BlockModelGenerators$WoodProvider {
        wood(arg0: $Block_): $BlockModelGenerators$WoodProvider;
        logWithHorizontal(arg0: $Block_): $BlockModelGenerators$WoodProvider;
        logUVLocked(arg0: $Block_): $BlockModelGenerators$WoodProvider;
        log(arg0: $Block_): $BlockModelGenerators$WoodProvider;
        this$0: $BlockModelGenerators;
        constructor(arg0: $BlockModelGenerators, arg1: $TextureMapping);
    }
    export class $ItemModelGenerators$TrimModelData extends $Record {
        itemModelIndex(): number;
        overrideArmorMaterials(): $Map<$Holder<$ArmorMaterial>, string>;
        name(): string;
        name(arg0: $Holder_<$ArmorMaterial>): string;
        constructor(arg0: string, arg1: number, arg2: $Map_<$Holder_<$ArmorMaterial>, string>);
    }
    /**
     * Values that may be interpreted as {@link $ItemModelGenerators$TrimModelData}.
     */
    export type $ItemModelGenerators$TrimModelData_ = { name?: string, overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>, itemModelIndex?: number,  } | [name?: string, overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>, itemModelIndex?: number, ];
    export class $BlockModelGenerators$BlockEntityModelGenerator {
        createWithoutBlockItem(...arg0: $Block_[]): $BlockModelGenerators$BlockEntityModelGenerator;
        createWithCustomBlockItemModel(arg0: $ModelTemplate, ...arg1: $Block_[]): $BlockModelGenerators$BlockEntityModelGenerator;
        create(...arg0: $Block_[]): $BlockModelGenerators$BlockEntityModelGenerator;
        this$0: $BlockModelGenerators;
        constructor(arg0: $BlockModelGenerators, arg1: $ResourceLocation_, arg2: $Block_);
    }
    export class $BlockModelGenerators$BookSlotModelCacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$BookSlotModelCacheKey}.
     */
    export type $BlockModelGenerators$BookSlotModelCacheKey_ = { template?: $ModelTemplate, modelSuffix?: string,  } | [template?: $ModelTemplate, modelSuffix?: string, ];
}
