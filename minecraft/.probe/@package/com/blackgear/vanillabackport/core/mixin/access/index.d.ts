import { $TreeDecoratorType, $TreeDecorator } from "@package/net/minecraft/world/level/levelgen/feature/treedecorators";
import { $MapCodec_ } from "@package/com/mojang/serialization";
import { $CreativeModeTab, $DyeColor_, $DyeColor, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fraction } from "@package/org/apache/commons/lang3/math";
import { $TextureSlot } from "@package/net/minecraft/data/models/model";
import { $Biome$ClimateSettings, $Biome$ClimateSettings_, $BiomeGenerationSettings$Builder } from "@package/net/minecraft/world/level/biome";
import { $EntityDimensions, $Entity } from "@package/net/minecraft/world/entity";
import { $GuiSpriteScaling$NineSlice, $GuiSpriteScaling$NineSlice_ } from "@package/net/minecraft/client/resources/metadata/gui";
import { $Map } from "@package/java/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $SoundEngine, $ChannelAccess$ChannelHandle } from "@package/net/minecraft/client/sounds";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $SurfaceRules$RuleSource } from "@package/net/minecraft/world/level/levelgen";

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
    export class $NoiseGeneratorSettingsAccessor {
    }
    export interface $NoiseGeneratorSettingsAccessor {
        setSurfaceRule(arg0: $SurfaceRules$RuleSource): void;
        set surfaceRule(value: $SurfaceRules$RuleSource);
    }
    /**
     * Values that may be interpreted as {@link $NoiseGeneratorSettingsAccessor}.
     */
    export type $NoiseGeneratorSettingsAccessor_ = ((arg0: $SurfaceRules$RuleSource) => void);
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        isJumping(): boolean;
        get jumping(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = (() => boolean);
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
    }
    export interface $EntityAccessor {
        getDimensions(): $EntityDimensions;
        callReapplyPosition(): void;
        callSetRot(arg0: number, arg1: number): void;
        get dimensions(): $EntityDimensions;
    }
}
