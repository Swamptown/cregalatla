import { $Level$ExplosionInteraction, $Level$ExplosionInteraction_ } from "@package/net/minecraft/world/level";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $BlockItemStateProperties_, $BlockItemStateProperties } from "@package/net/minecraft/world/item/component";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $BlockStateProvider } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $GameEvent } from "@package/net/minecraft/world/level/gameevent";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $AttributeModifier, $Attribute, $AttributeModifier$Operation_, $AttributeModifier$Operation } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $StringRepresentable_ } from "@package/net/minecraft/util";
import { $BlockPredicate } from "@package/net/minecraft/world/level/levelgen/blockpredicates";
import { $Function_ } from "@package/java/util/function";
import { $Holder_, $HolderSet, $HolderSet_, $Holder, $Registry, $Vec3i } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $FloatProvider } from "@package/net/minecraft/util/valueproviders";
import { $LevelBasedValue, $EnchantedItemInUse_ } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/item/enchantment/effects" {
    export class $SummonEntityEffect extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        joinTeam(): boolean;
        codec(): $MapCodec<$SummonEntityEffect>;
        entityTypes(): $HolderSet<$EntityType<never>>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$SummonEntityEffect>;
        constructor(arg0: $HolderSet_<$EntityType<never>>, arg1: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SummonEntityEffect}.
     */
    export type $SummonEntityEffect_ = { entityTypes?: $HolderSet_<$EntityType<never>>, joinTeam?: boolean,  } | [entityTypes?: $HolderSet_<$EntityType<never>>, joinTeam?: boolean, ];
    export class $ReplaceBlock extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        offset(): $Vec3i;
        predicate(): ($BlockPredicate) | undefined;
        triggerGameEvent(): ($Holder<$GameEvent>) | undefined;
        codec(): $MapCodec<$ReplaceBlock>;
        blockState(): $BlockStateProvider;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$ReplaceBlock>;
        constructor(arg0: $Vec3i, arg1: ($BlockPredicate) | undefined, arg2: $BlockStateProvider, arg3: ($Holder_<$GameEvent>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ReplaceBlock}.
     */
    export type $ReplaceBlock_ = { offset?: $Vec3i, blockState?: $BlockStateProvider, predicate?: ($BlockPredicate) | undefined, triggerGameEvent?: ($Holder_<$GameEvent>) | undefined,  } | [offset?: $Vec3i, blockState?: $BlockStateProvider, predicate?: ($BlockPredicate) | undefined, triggerGameEvent?: ($Holder_<$GameEvent>) | undefined, ];
    export class $DamageEntity extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        maxDamage(): $LevelBasedValue;
        minDamage(): $LevelBasedValue;
        damageType(): $Holder<$DamageType>;
        codec(): $MapCodec<$DamageEntity>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$DamageEntity>;
        constructor(arg0: $LevelBasedValue, arg1: $LevelBasedValue, arg2: $Holder_<$DamageType>);
    }
    /**
     * Values that may be interpreted as {@link $DamageEntity}.
     */
    export type $DamageEntity_ = { maxDamage?: $LevelBasedValue, damageType?: $Holder_<$DamageType>, minDamage?: $LevelBasedValue,  } | [maxDamage?: $LevelBasedValue, damageType?: $Holder_<$DamageType>, minDamage?: $LevelBasedValue, ];
    export class $Ignite extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        duration(): $LevelBasedValue;
        codec(): $MapCodec<$Ignite>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$Ignite>;
        constructor(arg0: $LevelBasedValue);
    }
    /**
     * Values that may be interpreted as {@link $Ignite}.
     */
    export type $Ignite_ = { duration?: $LevelBasedValue,  } | [duration?: $LevelBasedValue, ];
    export class $DamageItem extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        amount(): $LevelBasedValue;
        codec(): $MapCodec<$DamageItem>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$DamageItem>;
        constructor(arg0: $LevelBasedValue);
    }
    /**
     * Values that may be interpreted as {@link $DamageItem}.
     */
    export type $DamageItem_ = { amount?: $LevelBasedValue,  } | [amount?: $LevelBasedValue, ];
    export class $RunFunction extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        function(): $ResourceLocation;
        codec(): $MapCodec<$RunFunction>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$RunFunction>;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $RunFunction}.
     */
    export type $RunFunction_ = { function?: $ResourceLocation_,  } | [function?: $ResourceLocation_, ];
    export class $DamageImmunity extends $Record {
        static CODEC: $Codec<$DamageImmunity>;
        static INSTANCE: $DamageImmunity;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $DamageImmunity}.
     */
    export type $DamageImmunity_ = {  } | [];
    export class $MultiplyValue extends $Record implements $EnchantmentValueEffect {
        process(arg0: number, arg1: $RandomSource, arg2: number): number;
        factor(): $LevelBasedValue;
        codec(): $MapCodec<$MultiplyValue>;
        static CODEC: $MapCodec<$MultiplyValue>;
        constructor(arg0: $LevelBasedValue);
    }
    /**
     * Values that may be interpreted as {@link $MultiplyValue}.
     */
    export type $MultiplyValue_ = { factor?: $LevelBasedValue,  } | [factor?: $LevelBasedValue, ];
    export class $EnchantmentEntityEffect {
        static bootstrap(arg0: $Registry<$MapCodec_<$EnchantmentEntityEffect>>): $MapCodec<$EnchantmentEntityEffect>;
        static CODEC: $Codec<$EnchantmentEntityEffect>;
    }
    export interface $EnchantmentEntityEffect extends $EnchantmentLocationBasedEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        codec(): $MapCodec<$EnchantmentEntityEffect>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
    }
    export class $EnchantmentAttributeEffect extends $Record implements $EnchantmentLocationBasedEffect {
        id(): $ResourceLocation;
        attribute(): $Holder<$Attribute>;
        amount(): $LevelBasedValue;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        operation(): $AttributeModifier$Operation;
        codec(): $MapCodec<$EnchantmentAttributeEffect>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        getModifier(arg0: number, arg1: $StringRepresentable_): $AttributeModifier;
        static CODEC: $MapCodec<$EnchantmentAttributeEffect>;
        constructor(arg0: $ResourceLocation_, arg1: $Holder_<$Attribute>, arg2: $LevelBasedValue, arg3: $AttributeModifier$Operation_);
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentAttributeEffect}.
     */
    export type $EnchantmentAttributeEffect_ = { id?: $ResourceLocation_, attribute?: $Holder_<$Attribute>, operation?: $AttributeModifier$Operation_, amount?: $LevelBasedValue,  } | [id?: $ResourceLocation_, attribute?: $Holder_<$Attribute>, operation?: $AttributeModifier$Operation_, amount?: $LevelBasedValue, ];
    export class $EnchantmentLocationBasedEffect {
        static bootstrap(arg0: $Registry<$MapCodec_<$EnchantmentLocationBasedEffect>>): $MapCodec<$EnchantmentLocationBasedEffect>;
        static CODEC: $Codec<$EnchantmentLocationBasedEffect>;
    }
    export interface $EnchantmentLocationBasedEffect {
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        codec(): $MapCodec<$EnchantmentLocationBasedEffect>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
    }
    export class $ReplaceDisk extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        offset(): $Vec3i;
        predicate(): ($BlockPredicate) | undefined;
        triggerGameEvent(): ($Holder<$GameEvent>) | undefined;
        height(): $LevelBasedValue;
        codec(): $MapCodec<$ReplaceDisk>;
        radius(): $LevelBasedValue;
        blockState(): $BlockStateProvider;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$ReplaceDisk>;
        constructor(arg0: $LevelBasedValue, arg1: $LevelBasedValue, arg2: $Vec3i, arg3: ($BlockPredicate) | undefined, arg4: $BlockStateProvider, arg5: ($Holder_<$GameEvent>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ReplaceDisk}.
     */
    export type $ReplaceDisk_ = { triggerGameEvent?: ($Holder_<$GameEvent>) | undefined, offset?: $Vec3i, predicate?: ($BlockPredicate) | undefined, blockState?: $BlockStateProvider, height?: $LevelBasedValue, radius?: $LevelBasedValue,  } | [triggerGameEvent?: ($Holder_<$GameEvent>) | undefined, offset?: $Vec3i, predicate?: ($BlockPredicate) | undefined, blockState?: $BlockStateProvider, height?: $LevelBasedValue, radius?: $LevelBasedValue, ];
    export class $PlaySoundEffect extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        soundEvent(): $Holder<$SoundEvent>;
        volume(): $FloatProvider;
        codec(): $MapCodec<$PlaySoundEffect>;
        pitch(): $FloatProvider;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$PlaySoundEffect>;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: $FloatProvider, arg2: $FloatProvider);
    }
    /**
     * Values that may be interpreted as {@link $PlaySoundEffect}.
     */
    export type $PlaySoundEffect_ = { pitch?: $FloatProvider, volume?: $FloatProvider, soundEvent?: $Holder_<$SoundEvent>,  } | [pitch?: $FloatProvider, volume?: $FloatProvider, soundEvent?: $Holder_<$SoundEvent>, ];
    export class $SpawnParticlesEffect extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        horizontalPosition(): $SpawnParticlesEffect$PositionSource;
        verticalPosition(): $SpawnParticlesEffect$PositionSource;
        horizontalVelocity(): $SpawnParticlesEffect$VelocitySource;
        verticalVelocity(): $SpawnParticlesEffect$VelocitySource;
        static offsetFromEntityPosition(arg0: number): $SpawnParticlesEffect$PositionSource;
        static inBoundingBox(): $SpawnParticlesEffect$PositionSource;
        static movementScaled(arg0: number): $SpawnParticlesEffect$VelocitySource;
        static fixedVelocity(arg0: $FloatProvider): $SpawnParticlesEffect$VelocitySource;
        codec(): $MapCodec<$SpawnParticlesEffect>;
        particle(): $ParticleOptions;
        speed(): $FloatProvider;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$SpawnParticlesEffect>;
        constructor(arg0: $ParticleOptions_, arg1: $SpawnParticlesEffect$PositionSource_, arg2: $SpawnParticlesEffect$PositionSource_, arg3: $SpawnParticlesEffect$VelocitySource_, arg4: $SpawnParticlesEffect$VelocitySource_, arg5: $FloatProvider);
    }
    /**
     * Values that may be interpreted as {@link $SpawnParticlesEffect}.
     */
    export type $SpawnParticlesEffect_ = { verticalVelocity?: $SpawnParticlesEffect$VelocitySource_, horizontalPosition?: $SpawnParticlesEffect$PositionSource_, particle?: $ParticleOptions_, speed?: $FloatProvider, horizontalVelocity?: $SpawnParticlesEffect$VelocitySource_, verticalPosition?: $SpawnParticlesEffect$PositionSource_,  } | [verticalVelocity?: $SpawnParticlesEffect$VelocitySource_, horizontalPosition?: $SpawnParticlesEffect$PositionSource_, particle?: $ParticleOptions_, speed?: $FloatProvider, horizontalVelocity?: $SpawnParticlesEffect$VelocitySource_, verticalPosition?: $SpawnParticlesEffect$PositionSource_, ];
    export class $ExplodeEffect extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        offset(): $Vec3;
        knockbackMultiplier(): ($LevelBasedValue) | undefined;
        immuneBlocks(): ($HolderSet<$Block>) | undefined;
        blockInteraction(): $Level$ExplosionInteraction;
        damageType(): ($Holder<$DamageType>) | undefined;
        attributeToUser(): boolean;
        createFire(): boolean;
        smallParticle(): $ParticleOptions;
        largeParticle(): $ParticleOptions;
        codec(): $MapCodec<$ExplodeEffect>;
        radius(): $LevelBasedValue;
        sound(): $Holder<$SoundEvent>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$ExplodeEffect>;
        constructor(arg0: boolean, arg1: ($Holder_<$DamageType>) | undefined, arg2: ($LevelBasedValue) | undefined, arg3: ($HolderSet_<$Block>) | undefined, arg4: $Vec3_, arg5: $LevelBasedValue, arg6: boolean, arg7: $Level$ExplosionInteraction_, arg8: $ParticleOptions_, arg9: $ParticleOptions_, arg10: $Holder_<$SoundEvent>);
    }
    /**
     * Values that may be interpreted as {@link $ExplodeEffect}.
     */
    export type $ExplodeEffect_ = { knockbackMultiplier?: ($LevelBasedValue) | undefined, radius?: $LevelBasedValue, damageType?: ($Holder_<$DamageType>) | undefined, attributeToUser?: boolean, sound?: $Holder_<$SoundEvent>, createFire?: boolean, immuneBlocks?: ($HolderSet_<$Block>) | undefined, largeParticle?: $ParticleOptions_, offset?: $Vec3_, smallParticle?: $ParticleOptions_, blockInteraction?: $Level$ExplosionInteraction_,  } | [knockbackMultiplier?: ($LevelBasedValue) | undefined, radius?: $LevelBasedValue, damageType?: ($Holder_<$DamageType>) | undefined, attributeToUser?: boolean, sound?: $Holder_<$SoundEvent>, createFire?: boolean, immuneBlocks?: ($HolderSet_<$Block>) | undefined, largeParticle?: $ParticleOptions_, offset?: $Vec3_, smallParticle?: $ParticleOptions_, blockInteraction?: $Level$ExplosionInteraction_, ];
    export class $SpawnParticlesEffect$VelocitySource extends $Record {
        base(): $FloatProvider;
        movementScale(): number;
        getVelocity(arg0: number, arg1: $RandomSource): number;
        static CODEC: $MapCodec<$SpawnParticlesEffect$VelocitySource>;
        constructor(arg0: number, arg1: $FloatProvider);
    }
    /**
     * Values that may be interpreted as {@link $SpawnParticlesEffect$VelocitySource}.
     */
    export type $SpawnParticlesEffect$VelocitySource_ = { movementScale?: number, base?: $FloatProvider,  } | [movementScale?: number, base?: $FloatProvider, ];
    export class $SpawnParticlesEffect$PositionSourceType$CoordinateSource {
    }
    export interface $SpawnParticlesEffect$PositionSourceType$CoordinateSource {
    }
    /**
     * Values that may be interpreted as {@link $SpawnParticlesEffect$PositionSourceType$CoordinateSource}.
     */
    export type $SpawnParticlesEffect$PositionSourceType$CoordinateSource_ = (() => void);
    export class $EnchantmentValueEffect {
        static bootstrap(arg0: $Registry<$MapCodec_<$EnchantmentValueEffect>>): $MapCodec<$EnchantmentValueEffect>;
        static CODEC: $Codec<$EnchantmentValueEffect>;
    }
    export interface $EnchantmentValueEffect {
        process(arg0: number, arg1: $RandomSource, arg2: number): number;
        codec(): $MapCodec<$EnchantmentValueEffect>;
    }
    export class $RemoveBinomial extends $Record implements $EnchantmentValueEffect {
        process(arg0: number, arg1: $RandomSource, arg2: number): number;
        chance(): $LevelBasedValue;
        codec(): $MapCodec<$RemoveBinomial>;
        static CODEC: $MapCodec<$RemoveBinomial>;
        constructor(arg0: $LevelBasedValue);
    }
    /**
     * Values that may be interpreted as {@link $RemoveBinomial}.
     */
    export type $RemoveBinomial_ = { chance?: $LevelBasedValue,  } | [chance?: $LevelBasedValue, ];
    export class $ApplyMobEffect extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        toApply(): $HolderSet<$MobEffect>;
        minDuration(): $LevelBasedValue;
        maxDuration(): $LevelBasedValue;
        minAmplifier(): $LevelBasedValue;
        maxAmplifier(): $LevelBasedValue;
        codec(): $MapCodec<$ApplyMobEffect>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$ApplyMobEffect>;
        constructor(arg0: $HolderSet_<$MobEffect>, arg1: $LevelBasedValue, arg2: $LevelBasedValue, arg3: $LevelBasedValue, arg4: $LevelBasedValue);
    }
    /**
     * Values that may be interpreted as {@link $ApplyMobEffect}.
     */
    export type $ApplyMobEffect_ = { toApply?: $HolderSet_<$MobEffect>, maxAmplifier?: $LevelBasedValue, minDuration?: $LevelBasedValue, maxDuration?: $LevelBasedValue, minAmplifier?: $LevelBasedValue,  } | [toApply?: $HolderSet_<$MobEffect>, maxAmplifier?: $LevelBasedValue, minDuration?: $LevelBasedValue, maxDuration?: $LevelBasedValue, minAmplifier?: $LevelBasedValue, ];
    export class $AllOf$EntityEffects extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        codec(): $MapCodec<$AllOf$EntityEffects>;
        effects(): $List<$EnchantmentEntityEffect>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$AllOf$EntityEffects>;
        constructor(arg0: $List_<$EnchantmentEntityEffect>);
    }
    /**
     * Values that may be interpreted as {@link $AllOf$EntityEffects}.
     */
    export type $AllOf$EntityEffects_ = { effects?: $List_<$EnchantmentEntityEffect>,  } | [effects?: $List_<$EnchantmentEntityEffect>, ];
    export class $AllOf {
        static entityEffects(...arg0: $EnchantmentEntityEffect[]): $AllOf$EntityEffects;
        static locationBasedEffects(...arg0: $EnchantmentLocationBasedEffect[]): $AllOf$LocationBasedEffects;
        static valueEffects(...arg0: $EnchantmentValueEffect[]): $AllOf$ValueEffects;
        static codec<T, A extends T>(arg0: $Codec<T>, arg1: $Function_<$List<T>, A>, arg2: $Function_<A, $List<T>>): $MapCodec<A>;
    }
    export interface $AllOf {
    }
    export class $SpawnParticlesEffect$PositionSource extends $Record {
        type(): $SpawnParticlesEffect$PositionSourceType;
        scale(): number;
        offset(): number;
        getCoordinate(arg0: number, arg1: number, arg2: number, arg3: $RandomSource): number;
        static CODEC: $MapCodec<$SpawnParticlesEffect$PositionSource>;
        constructor(arg0: $SpawnParticlesEffect$PositionSourceType_, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $SpawnParticlesEffect$PositionSource}.
     */
    export type $SpawnParticlesEffect$PositionSource_ = { scale?: number, type?: $SpawnParticlesEffect$PositionSourceType_, offset?: number,  } | [scale?: number, type?: $SpawnParticlesEffect$PositionSourceType_, offset?: number, ];
    export class $AllOf$LocationBasedEffects extends $Record implements $EnchantmentLocationBasedEffect {
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        codec(): $MapCodec<$AllOf$LocationBasedEffects>;
        effects(): $List<$EnchantmentLocationBasedEffect>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        static CODEC: $MapCodec<$AllOf$LocationBasedEffects>;
        constructor(arg0: $List_<$EnchantmentLocationBasedEffect>);
    }
    /**
     * Values that may be interpreted as {@link $AllOf$LocationBasedEffects}.
     */
    export type $AllOf$LocationBasedEffects_ = { effects?: $List_<$EnchantmentLocationBasedEffect>,  } | [effects?: $List_<$EnchantmentLocationBasedEffect>, ];
    export class $SetValue extends $Record implements $EnchantmentValueEffect {
        value(): $LevelBasedValue;
        process(arg0: number, arg1: $RandomSource, arg2: number): number;
        codec(): $MapCodec<$SetValue>;
        static CODEC: $MapCodec<$SetValue>;
        constructor(arg0: $LevelBasedValue);
    }
    /**
     * Values that may be interpreted as {@link $SetValue}.
     */
    export type $SetValue_ = { value?: $LevelBasedValue,  } | [value?: $LevelBasedValue, ];
    export class $AddValue extends $Record implements $EnchantmentValueEffect {
        value(): $LevelBasedValue;
        process(arg0: number, arg1: $RandomSource, arg2: number): number;
        codec(): $MapCodec<$AddValue>;
        static CODEC: $MapCodec<$AddValue>;
        constructor(arg0: $LevelBasedValue);
    }
    /**
     * Values that may be interpreted as {@link $AddValue}.
     */
    export type $AddValue_ = { value?: $LevelBasedValue,  } | [value?: $LevelBasedValue, ];
    export class $AllOf$ValueEffects extends $Record implements $EnchantmentValueEffect {
        process(arg0: number, arg1: $RandomSource, arg2: number): number;
        codec(): $MapCodec<$AllOf$ValueEffects>;
        effects(): $List<$EnchantmentValueEffect>;
        static CODEC: $MapCodec<$AllOf$ValueEffects>;
        constructor(arg0: $List_<$EnchantmentValueEffect>);
    }
    /**
     * Values that may be interpreted as {@link $AllOf$ValueEffects}.
     */
    export type $AllOf$ValueEffects_ = { effects?: $List_<$EnchantmentValueEffect>,  } | [effects?: $List_<$EnchantmentValueEffect>, ];
    export class $SpawnParticlesEffect$PositionSourceType extends $Enum<$SpawnParticlesEffect$PositionSourceType> implements $StringRepresentable {
        static values(): $SpawnParticlesEffect$PositionSourceType[];
        static valueOf(arg0: string): $SpawnParticlesEffect$PositionSourceType;
        getCoordinate(arg0: number, arg1: number, arg2: number, arg3: $RandomSource): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static BOUNDING_BOX: $SpawnParticlesEffect$PositionSourceType;
        static CODEC: $Codec<$SpawnParticlesEffect$PositionSourceType>;
        static ENTITY_POSITION: $SpawnParticlesEffect$PositionSourceType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SpawnParticlesEffect$PositionSourceType}.
     */
    export type $SpawnParticlesEffect$PositionSourceType_ = "entity_position" | "in_bounding_box";
    export class $SetBlockProperties extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        offset(): $Vec3i;
        properties(): $BlockItemStateProperties;
        triggerGameEvent(): ($Holder<$GameEvent>) | undefined;
        codec(): $MapCodec<$SetBlockProperties>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$SetBlockProperties>;
        constructor(arg0: $BlockItemStateProperties_);
        constructor(arg0: $BlockItemStateProperties_, arg1: $Vec3i, arg2: ($Holder_<$GameEvent>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $SetBlockProperties}.
     */
    export type $SetBlockProperties_ = { triggerGameEvent?: ($Holder_<$GameEvent>) | undefined, properties?: $BlockItemStateProperties_, offset?: $Vec3i,  } | [triggerGameEvent?: ($Holder_<$GameEvent>) | undefined, properties?: $BlockItemStateProperties_, offset?: $Vec3i, ];
}
