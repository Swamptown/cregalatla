import { $Function_, $Function, $ToIntFunction } from "@package/java/util/function";
import { $NoteBlockInstrument } from "@package/net/minecraft/world/level/block/state/properties";
import { $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $BlockBehaviour$StateArgumentPredicate, $BlockBehaviour$OffsetFunction_, $BlockBehaviour$Properties, $BlockState, $BlockBehaviour$OffsetFunction, $BlockBehaviour$StatePredicate } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $EntityType, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $SoundType } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/fabricmc/fabric/mixin/object/builder" {
    export class $DefaultAttributeRegistryAccessor {
        static getRegistry(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
        static get registry(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
    }
    export interface $DefaultAttributeRegistryAccessor {
    }
    export class $AbstractBlockSettingsAccessor {
    }
    export interface $AbstractBlockSettingsAccessor {
        getHasCollision(): boolean;
        isRequiresCorrectToolForDrops(): boolean;
        getDestroyTime(): number;
        getIsRandomlyTicking(): boolean;
        getDynamicShape(): boolean;
        getCanOcclude(): boolean;
        getIsAir(): boolean;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        getSpawnTerrainParticles(): boolean;
        getRequiredFeatures(): $FeatureFlagSet;
        getIgnitedByLava(): boolean;
        getForceSolidOff(): boolean;
        getForceSolidOn(): boolean;
        getPushReaction(): $PushReaction;
        getInstrument(): $NoteBlockInstrument;
        getReplaceable(): boolean;
        setHasCollision(arg0: boolean): void;
        setIsRandomlyTicking(arg0: boolean): void;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        setDynamicShape(arg0: boolean): void;
        setCanOcclude(arg0: boolean): void;
        setIsAir(arg0: boolean): void;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        setSpawnTerrainParticles(arg0: boolean): void;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        setIgnitedByLava(arg0: boolean): void;
        setLiquid(arg0: boolean): void;
        setForceSolidOff(arg0: boolean): void;
        setForceSolidOn(arg0: boolean): void;
        setReplaceable(arg0: boolean): void;
        getLiquid(): boolean;
        getSoundType(): $SoundType;
        getFriction(): number;
        getLuminance(): $ToIntFunction<$BlockState>;
        getJumpFactor(): number;
        getSpeedFactor(): number;
        getExplosionResistance(): number;
        getMapColor(): $Function<$BlockState, $MapColor>;
        getDrops(): $ResourceKey<$LootTable>;
        get destroyTime(): number;
        get isValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        get isRedstoneConductor(): $BlockBehaviour$StatePredicate;
        get isSuffocating(): $BlockBehaviour$StatePredicate;
        get isViewBlocking(): $BlockBehaviour$StatePredicate;
        get hasPostProcess(): $BlockBehaviour$StatePredicate;
        get emissiveRendering(): $BlockBehaviour$StatePredicate;
        get pushReaction(): $PushReaction;
        get instrument(): $NoteBlockInstrument;
        get soundType(): $SoundType;
        get friction(): number;
        get luminance(): $ToIntFunction<$BlockState>;
        get jumpFactor(): number;
        get speedFactor(): number;
        get explosionResistance(): number;
    }
    export class $AbstractBlockAccessor {
    }
    export interface $AbstractBlockAccessor {
        getProperties(): $BlockBehaviour$Properties;
        get properties(): $BlockBehaviour$Properties;
    }
    /**
     * Values that may be interpreted as {@link $AbstractBlockAccessor}.
     */
    export type $AbstractBlockAccessor_ = (() => $BlockBehaviour$Properties);
}
