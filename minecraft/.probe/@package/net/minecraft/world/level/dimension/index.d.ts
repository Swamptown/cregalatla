import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Dynamic, $DataResult, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $OptionalLong } from "@package/java/util";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as end from "@package/net/minecraft/world/level/dimension/end";

declare module "@package/net/minecraft/world/level/dimension" {
    export class $BuiltinDimensionTypes {
        static OVERWORLD: $ResourceKey<$DimensionType>;
        static END_EFFECTS: $ResourceLocation;
        static NETHER: $ResourceKey<$DimensionType>;
        static NETHER_EFFECTS: $ResourceLocation;
        static END: $ResourceKey<$DimensionType>;
        static OVERWORLD_EFFECTS: $ResourceLocation;
        static OVERWORLD_CAVES: $ResourceKey<$DimensionType>;
        constructor();
    }
    export class $LevelStem extends $Record {
        type(): $Holder<$DimensionType>;
        generator(): $ChunkGenerator;
        static CODEC: $Codec<$LevelStem>;
        static OVERWORLD: $ResourceKey<$LevelStem>;
        static NETHER: $ResourceKey<$LevelStem>;
        static END: $ResourceKey<$LevelStem>;
        constructor(arg0: $Holder_<$DimensionType>, arg1: $ChunkGenerator);
    }
    /**
     * Values that may be interpreted as {@link $LevelStem}.
     */
    export type $LevelStem_ = { generator?: $ChunkGenerator, type?: $Holder_<$DimensionType>,  } | [generator?: $ChunkGenerator, type?: $Holder_<$DimensionType>, ];
    export interface $DimensionType extends RegistryMarked<RegistryTypes.DimensionTypeTag, RegistryTypes.DimensionType> {}
    export class $DimensionType extends $Record {
        timeOfDay(arg0: number): number;
        infiniburn(): $TagKey<$Block>;
        fixedTime(): $OptionalLong;
        effectsLocation(): $ResourceLocation;
        monsterSettings(): $DimensionType$MonsterSettings;
        static getStorageFolder(arg0: $ResourceKey_<$Level>, arg1: $Path_): $Path;
        hasRaids(): boolean;
        logicalHeight(): number;
        ultraWarm(): boolean;
        static getTeleportationScale(arg0: $DimensionType_, arg1: $DimensionType_): number;
        respawnAnchorWorks(): boolean;
        bedWorks(): boolean;
        monsterSpawnBlockLightLimit(): number;
        monsterSpawnLightTest(): $IntProvider;
        piglinSafe(): boolean;
        minY(): number;
        /**
         * @deprecated
         */
        static parseLegacy(arg0: $Dynamic<never>): $DataResult<$ResourceKey<$Level>>;
        height(): number;
        natural(): boolean;
        coordinateScale(): number;
        hasFixedTime(): boolean;
        hasSkyLight(): boolean;
        hasCeiling(): boolean;
        ambientLight(): number;
        moonPhase(arg0: number): number;
        static MIN_Y: number;
        static CODEC: $Codec<$Holder<$DimensionType>>;
        static MIN_HEIGHT: number;
        static MAX_Y: number;
        static Y_SIZE: number;
        static WAY_ABOVE_MAX_Y: number;
        static WAY_BELOW_MIN_Y: number;
        static DIRECT_CODEC: $Codec<$DimensionType>;
        static BITS_FOR_Y: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$DimensionType>>;
        static MOON_BRIGHTNESS_PER_PHASE: number[];
        constructor(arg0: $OptionalLong, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: number, arg11: $TagKey_<$Block>, arg12: $ResourceLocation_, arg13: number, arg14: $DimensionType$MonsterSettings_);
    }
    /**
     * Values that may be interpreted as {@link $DimensionType}.
     */
    export type $DimensionType_ = RegistryTypes.DimensionType | { hasSkyLight?: boolean, ambientLight?: number, effectsLocation?: $ResourceLocation_, monsterSettings?: $DimensionType$MonsterSettings_, natural?: boolean, fixedTime?: $OptionalLong, coordinateScale?: number, infiniburn?: $TagKey_<$Block>, respawnAnchorWorks?: boolean, minY?: number, ultraWarm?: boolean, bedWorks?: boolean, height?: number, hasCeiling?: boolean, logicalHeight?: number,  } | [hasSkyLight?: boolean, ambientLight?: number, effectsLocation?: $ResourceLocation_, monsterSettings?: $DimensionType$MonsterSettings_, natural?: boolean, fixedTime?: $OptionalLong, coordinateScale?: number, infiniburn?: $TagKey_<$Block>, respawnAnchorWorks?: boolean, minY?: number, ultraWarm?: boolean, bedWorks?: boolean, height?: number, hasCeiling?: boolean, logicalHeight?: number, ];
    export class $DimensionType$MonsterSettings extends $Record {
        hasRaids(): boolean;
        monsterSpawnBlockLightLimit(): number;
        monsterSpawnLightTest(): $IntProvider;
        piglinSafe(): boolean;
        static CODEC: $MapCodec<$DimensionType$MonsterSettings>;
        constructor(arg0: boolean, arg1: boolean, arg2: $IntProvider_, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $DimensionType$MonsterSettings}.
     */
    export type $DimensionType$MonsterSettings_ = { piglinSafe?: boolean, monsterSpawnBlockLightLimit?: number, hasRaids?: boolean, monsterSpawnLightTest?: $IntProvider_,  } | [piglinSafe?: boolean, monsterSpawnBlockLightLimit?: number, hasRaids?: boolean, monsterSpawnLightTest?: $IntProvider_, ];
    export class $DimensionDefaults {
        static OVERWORLD_MIN_Y: number;
        static OVERWORLD_LEVEL_HEIGHT: number;
        static OVERWORLD_GENERATION_HEIGHT: number;
        static NETHER_GENERATION_HEIGHT: number;
        static NETHER_LOGICAL_HEIGHT: number;
        static OVERWORLD_LOGICAL_HEIGHT: number;
        static NETHER_LEVEL_HEIGHT: number;
        static END_MIN_Y: number;
        static END_GENERATION_HEIGHT: number;
        static NETHER_MIN_Y: number;
        static END_LEVEL_HEIGHT: number;
        static END_LOGICAL_HEIGHT: number;
        constructor();
    }
}
