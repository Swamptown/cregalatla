import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $TreeDecoratorType, $TreeDecorator } from "@package/net/minecraft/world/level/levelgen/feature/treedecorators";
import { $MapCodec_ } from "@package/com/mojang/serialization";
import { $CreativeModeTab, $DyeColor_, $ItemStack_, $ItemStack, $DyeColor } from "@package/net/minecraft/world/item";
import { $BlockEntityWithoutLevelRenderer } from "@package/net/minecraft/client/renderer";
import { $Fraction } from "@package/org/apache/commons/lang3/math";
import { $TextureSlot } from "@package/net/minecraft/data/models/model";
import { $Biome$ClimateSettings, $BiomeGenerationSettings$Builder, $Biome$ClimateSettings_ } from "@package/net/minecraft/world/level/biome";
import { $EntityDimensions, $EntityType_, $MobCategory_, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $GuiSpriteScaling$NineSlice, $GuiSpriteScaling$NineSlice_ } from "@package/net/minecraft/client/resources/metadata/gui";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Map, $List_ } from "@package/java/util";
import { $BlockPos, $BlockPos_, $Direction$Axis, $NonNullList, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ChannelAccess$ChannelHandle, $SoundEngine } from "@package/net/minecraft/client/sounds";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Vec3_, $AABB_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/blackgear/vanillabackport/core/mixin/access" {
    export class $SoundManagerAccessor {
    }
    export interface $SoundManagerAccessor {
        getSoundEngine(): $SoundEngine;
        get soundEngine(): $SoundEngine;
    }
    /**
     * Values that may be interpreted as {@link $SoundManagerAccessor}.
     */
    export type $SoundManagerAccessor_ = (() => $SoundEngine);
    export class $CreativeModeInventoryScreenAccessor {
        static getSelectedTab(): $CreativeModeTab;
        static get selectedTab(): $CreativeModeTab;
    }
    export interface $CreativeModeInventoryScreenAccessor {
    }
    export class $VoxelShapeAccessor {
    }
    export interface $VoxelShapeAccessor {
        callGetCoords(arg0: $Direction$Axis_): $DoubleList;
    }
    /**
     * Values that may be interpreted as {@link $VoxelShapeAccessor}.
     */
    export type $VoxelShapeAccessor_ = ((arg0: $Direction$Axis) => $DoubleList);
    export class $SoundEngineAccessor {
    }
    export interface $SoundEngineAccessor {
        isLoaded(): boolean;
        getInstanceToChannel(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
        callCalculateVolume(arg0: $SoundInstance): number;
        get loaded(): boolean;
        get instanceToChannel(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
    }
    export class $BundleContentsAccessor {
        static callGetWeight(stack: $ItemStack_): $Fraction;
    }
    export interface $BundleContentsAccessor {
    }
    export class $BlockRenderDispatcherAccessor {
    }
    export interface $BlockRenderDispatcherAccessor {
        getBlockColors(): $BlockColors;
        getBlockEntityRenderer(): $BlockEntityWithoutLevelRenderer;
        get blockColors(): $BlockColors;
        get blockEntityRenderer(): $BlockEntityWithoutLevelRenderer;
    }
    export class $TextureSlotAccessor {
        static create(name: string): $TextureSlot;
    }
    export interface $TextureSlotAccessor {
    }
    export class $GuiGraphicsAccessor {
    }
    export interface $GuiGraphicsAccessor {
        callBlitNineSlicedSprite(arg0: $TextureAtlasSprite, arg1: $GuiSpriteScaling$NineSlice_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    }
    /**
     * Values that may be interpreted as {@link $GuiGraphicsAccessor}.
     */
    export type $GuiGraphicsAccessor_ = ((arg0: $TextureAtlasSprite, arg1: $GuiSpriteScaling$NineSlice, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number) => void);
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        isJumping(): boolean;
        getLastArmorItemStacks(): $NonNullList<$ItemStack>;
        callGetFallDamageSound(arg0: number): $SoundEvent;
        get jumping(): boolean;
        get lastArmorItemStacks(): $NonNullList<$ItemStack>;
    }
    export class $OverworldBiomesAccessor {
        static callGlobalOverworldGeneration(builder: $BiomeGenerationSettings$Builder): void;
    }
    export interface $OverworldBiomesAccessor {
    }
    export class $BiomeAccessor {
    }
    export interface $BiomeAccessor {
        getClimateSettings(): $Biome$ClimateSettings;
        get climateSettings(): $Biome$ClimateSettings;
    }
    /**
     * Values that may be interpreted as {@link $BiomeAccessor}.
     */
    export type $BiomeAccessor_ = (() => $Biome$ClimateSettings_);
    export class $RangedAttributeAccessor {
    }
    export interface $RangedAttributeAccessor {
        setMinValue(arg0: number): void;
        set minValue(value: number);
    }
    /**
     * Values that may be interpreted as {@link $RangedAttributeAccessor}.
     */
    export type $RangedAttributeAccessor_ = ((arg0: number) => void);
    export class $SpawnStateAccessor {
    }
    export interface $SpawnStateAccessor {
        callCanSpawnForCategory(arg0: $MobCategory_, arg1: $ChunkPos): boolean;
        callAfterSpawn(arg0: $Mob, arg1: $ChunkAccess): void;
        callCanSpawn(arg0: $EntityType_<never>, arg1: $BlockPos_, arg2: $ChunkAccess): boolean;
    }
    export class $EntityRendererAccessor {
    }
    export interface $EntityRendererAccessor {
        callGetBlockLightLevel<T extends $Entity>(arg0: T, arg1: $BlockPos_): number;
    }
    /**
     * Values that may be interpreted as {@link $EntityRendererAccessor}.
     */
    export type $EntityRendererAccessor_ = ((arg0: any, arg1: $BlockPos) => number);
    export class $TreeDecoratorTypeAccessor {
        static createTreeDecorator<T extends $TreeDecorator>(codec: $MapCodec_<T>): $TreeDecoratorType<T>;
    }
    export interface $TreeDecoratorTypeAccessor {
    }
    export class $WolfAccessor {
    }
    export interface $WolfAccessor {
        callSetCollarColor(arg0: $DyeColor_): void;
    }
    /**
     * Values that may be interpreted as {@link $WolfAccessor}.
     */
    export type $WolfAccessor_ = ((arg0: $DyeColor) => void);
    export class $EntityAccessor {
        static callCollideWithShapes(deltaMovement: $Vec3_, entityBB: $AABB_, shapes: $List_<$VoxelShape>): $Vec3;
    }
    export interface $EntityAccessor {
        getDimensions(): $EntityDimensions;
        callGetBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        callReapplyPosition(): void;
        callSetRot(arg0: number, arg1: number): void;
        callCollide(arg0: $Vec3_): $Vec3;
        getNextStep(): number;
        setNextStep(arg0: number): void;
        callVibrationAndSoundEffectsFromBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean, arg3: boolean, arg4: $Vec3_): boolean;
        callIsStateClimbable(arg0: $BlockState_): boolean;
        callCalculateViewVector(arg0: number, arg1: number): $Vec3;
        get dimensions(): $EntityDimensions;
    }
}
