import { $Codec } from "@package/com/mojang/serialization";
import { $Tag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $Entity$RemovalReason_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $IClientMobEffectExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $AttributeModifier, $Attribute, $AttributeModifier$Operation_, $AttributeModifier$Operation, $AttributeMap } from "@package/net/minecraft/world/entity/ai/attributes";
import { $MobEffectInstanceAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $List, $Set_, $Map, $Set } from "@package/java/util";
import { $BiConsumer_, $Consumer_ } from "@package/java/util/function";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $Holder_, $Holder, $Registry } from "@package/net/minecraft/core";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ChatFormatting } from "@package/net/minecraft";
import { $IMobEffectExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Enum, $Record, $Runnable_, $Comparable } from "@package/java/lang";
import { $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $Int2DoubleFunction, $Int2DoubleFunction_, $Int2IntFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/effect" {
    export class $InstantenousMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
        constructor(arg0: $MobEffectCategory_, arg1: number);
    }
    export class $MobEffect implements $FeatureElement, $IMobEffectExtension {
        shouldApplyEffectTickThisTick(arg0: number, arg1: number): boolean;
        withSoundOnAdded(arg0: $SoundEvent_): $MobEffect;
        setBlendDuration(arg0: number): $MobEffect;
        addAttributeModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_, arg2: number, arg3: $AttributeModifier$Operation_): $MobEffect;
        addAttributeModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_, arg2: $AttributeModifier$Operation_, arg3: $Int2DoubleFunction_): $MobEffect;
        isBeneficial(): boolean;
        createParticleOptions(arg0: $MobEffectInstance): $ParticleOptions;
        /**
         * @deprecated
         */
        initializeClient(arg0: $Consumer_<$IClientMobEffectExtensions>): void;
        getBlendDurationTicks(): number;
        applyEffectTick(arg0: $LivingEntity, arg1: number): boolean;
        applyInstantenousEffect(arg0: $Entity, arg1: $Entity, arg2: $LivingEntity, arg3: number, arg4: number): void;
        isInstantenous(): boolean;
        getOrCreateDescriptionId(): string;
        createModifiers(arg0: number, arg1: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        getDisplayName(): $Component;
        onMobRemoved(arg0: $LivingEntity, arg1: number, arg2: $Entity$RemovalReason_): void;
        onEffectAdded(arg0: $LivingEntity, arg1: number): void;
        onEffectStarted(arg0: $LivingEntity, arg1: number): void;
        addAttributeModifiers(arg0: $AttributeMap, arg1: number): void;
        removeAttributeModifiers(arg0: $AttributeMap): void;
        onMobHurt(arg0: $LivingEntity, arg1: number, arg2: $DamageSource_, arg3: number): void;
        getCategory(): $MobEffectCategory;
        getColor(): number;
        requiredFeatures(...arg0: $FeatureFlag[]): $MobEffect;
        requiredFeatures(): $FeatureFlagSet;
        getDescriptionId(): string;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        fillEffectCures(arg0: $Set_<$EffectCure>, arg1: $MobEffectInstance): void;
        getSortOrder(arg0: $MobEffectInstance): number;
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
        constructor(arg0: $MobEffectCategory_, arg1: number);
        constructor(arg0: $MobEffectCategory_, arg1: number, arg2: $ParticleOptions_);
        set blendDuration(value: number);
        get beneficial(): boolean;
        get blendDurationTicks(): number;
        get instantenous(): boolean;
        get orCreateDescriptionId(): string;
        get displayName(): $Component;
        get category(): $MobEffectCategory;
        get color(): number;
        get descriptionId(): string;
    }
    /**
     * Values that may be interpreted as {@link $MobEffect}.
     */
    export type $MobEffect_ = RegistryTypes.MobEffect;
    export class $MobEffectInstance$Details extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MobEffectInstance$Details}.
     */
    export type $MobEffectInstance$Details_ = { cures?: ($Set_<$EffectCure>) | undefined, showParticles?: boolean, amplifier?: number, ambient?: boolean, duration?: number, hiddenEffect?: ($MobEffectInstance$Details_) | undefined, showIcon?: boolean,  } | [cures?: ($Set_<$EffectCure>) | undefined, showParticles?: boolean, amplifier?: number, ambient?: boolean, duration?: number, hiddenEffect?: ($MobEffectInstance$Details_) | undefined, showIcon?: boolean, ];
    export class $HealOrHarmMobEffect extends $InstantenousMobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $PoisonMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $HungerMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffects {
        static bootstrap(arg0: $Registry<$MobEffect_>): $Holder<$MobEffect>;
        static INVISIBILITY: $Holder<$MobEffect>;
        static SLOW_FALLING: $Holder<$MobEffect>;
        static DAMAGE_RESISTANCE: $Holder<$MobEffect>;
        static HEAL: $Holder<$MobEffect>;
        static BAD_OMEN: $Holder<$MobEffect>;
        static WEAKNESS: $Holder<$MobEffect>;
        static DOLPHINS_GRACE: $Holder<$MobEffect>;
        static JUMP: $Holder<$MobEffect>;
        static TRIAL_OMEN: $Holder<$MobEffect>;
        static MOVEMENT_SLOWDOWN: $Holder<$MobEffect>;
        static WITHER: $Holder<$MobEffect>;
        static LUCK: $Holder<$MobEffect>;
        static FIRE_RESISTANCE: $Holder<$MobEffect>;
        static HARM: $Holder<$MobEffect>;
        static WIND_CHARGED: $Holder<$MobEffect>;
        static WATER_BREATHING: $Holder<$MobEffect>;
        static GLOWING: $Holder<$MobEffect>;
        static OOZING: $Holder<$MobEffect>;
        static DIG_SPEED: $Holder<$MobEffect>;
        static ABSORPTION: $Holder<$MobEffect>;
        static HUNGER: $Holder<$MobEffect>;
        static DIG_SLOWDOWN: $Holder<$MobEffect>;
        static HERO_OF_THE_VILLAGE: $Holder<$MobEffect>;
        static REGENERATION: $Holder<$MobEffect>;
        static INFESTED: $Holder<$MobEffect>;
        static WEAVING: $Holder<$MobEffect>;
        static BLINDNESS: $Holder<$MobEffect>;
        static MOVEMENT_SPEED: $Holder<$MobEffect>;
        static DAMAGE_BOOST: $Holder<$MobEffect>;
        static LEVITATION: $Holder<$MobEffect>;
        static UNLUCK: $Holder<$MobEffect>;
        static CONDUIT_POWER: $Holder<$MobEffect>;
        static RAID_OMEN: $Holder<$MobEffect>;
        static CONFUSION: $Holder<$MobEffect>;
        static POISON: $Holder<$MobEffect>;
        static HEALTH_BOOST: $Holder<$MobEffect>;
        static DARKNESS: $Holder<$MobEffect>;
        static NIGHT_VISION: $Holder<$MobEffect>;
        static SATURATION: $Holder<$MobEffect>;
        constructor();
    }
    export class $MobEffectInstance implements $Comparable<$MobEffectInstance>, $MobEffectInstanceAccessor {
        tick(arg0: $LivingEntity, arg1: $Runnable_): boolean;
        showIcon(): boolean;
        setDetailsFrom(arg0: $MobEffectInstance): void;
        getBlendFactor(arg0: $LivingEntity, arg1: number): number;
        isInfiniteDuration(): boolean;
        endsWithin(arg0: number): boolean;
        mapDuration(arg0: $Int2IntFunction_): number;
        skipBlending(): void;
        getDuration(): number;
        compareTo(arg0: $MobEffectInstance): number;
        update(arg0: $MobEffectInstance): boolean;
        static load(arg0: $CompoundTag_): $MobEffectInstance;
        save(): $Tag;
        is(arg0: $Holder_<$MobEffect>): boolean;
        onMobRemoved(arg0: $LivingEntity, arg1: $Entity$RemovalReason_): void;
        getEffect(): $Holder<$MobEffect>;
        isVisible(): boolean;
        getParticleOptions(): $ParticleOptions;
        isAmbient(): boolean;
        onEffectAdded(arg0: $LivingEntity): void;
        onEffectStarted(arg0: $LivingEntity): void;
        copyBlendState(arg0: $MobEffectInstance): void;
        getAmplifier(): number;
        onMobHurt(arg0: $LivingEntity, arg1: $DamageSource_, arg2: number): void;
        getCures(): $Set<$EffectCure>;
        getDescriptionId(): string;
        create$getHiddenEffect(): $MobEffectInstance;
        static MAX_AMPLIFIER: number;
        static CODEC: $Codec<$MobEffectInstance>;
        static INFINITE_DURATION: number;
        static MIN_AMPLIFIER: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MobEffectInstance>;
        constructor(arg0: $Holder_<$MobEffect>, arg1: number, arg2: number, arg3: boolean, arg4: boolean);
        constructor(arg0: $MobEffectInstance);
        constructor(arg0: $Holder_<$MobEffect>, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean);
        constructor(arg0: $Holder_<$MobEffect>, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $MobEffectInstance);
        constructor(arg0: $Holder_<$MobEffect>);
        constructor(arg0: $Holder_<$MobEffect>, arg1: number);
        constructor(arg0: $Holder_<$MobEffect>, arg1: number, arg2: number);
        set detailsFrom(value: $MobEffectInstance);
        get infiniteDuration(): boolean;
        get duration(): number;
        get effect(): $Holder<$MobEffect>;
        get visible(): boolean;
        get particleOptions(): $ParticleOptions;
        get ambient(): boolean;
        get amplifier(): number;
        get cures(): $Set<$EffectCure>;
        get descriptionId(): string;
    }
    export class $SaturationMobEffect extends $InstantenousMobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $BadOmenMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffectUtil {
        static formatDuration(arg0: $MobEffectInstance, arg1: number, arg2: number): $Component;
        static hasWaterBreathing(arg0: $LivingEntity): boolean;
        static addEffectToPlayersAround(arg0: $ServerLevel, arg1: $Entity, arg2: $Vec3_, arg3: number, arg4: $MobEffectInstance, arg5: number): $List<$ServerPlayer>;
        static hasDigSpeed(arg0: $LivingEntity): boolean;
        static getDigSpeedAmplification(arg0: $LivingEntity): number;
        constructor();
    }
    export class $AbsorptionMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $WindChargedMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffectCategory extends $Enum<$MobEffectCategory> {
        getTooltipFormatting(): $ChatFormatting;
        static values(): $MobEffectCategory[];
        static valueOf(arg0: string): $MobEffectCategory;
        static HARMFUL: $MobEffectCategory;
        static BENEFICIAL: $MobEffectCategory;
        static NEUTRAL: $MobEffectCategory;
        get tooltipFormatting(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectCategory}.
     */
    export type $MobEffectCategory_ = "beneficial" | "harmful" | "neutral";
    export interface $MobEffect extends RegistryMarked<RegistryTypes.MobEffectTag, RegistryTypes.MobEffect> {}
    export class $MobEffect$AttributeTemplate extends $Record {
        curve(): $Int2DoubleFunction;
        amount(): number;
        id(): $ResourceLocation;
        create(arg0: number): $AttributeModifier;
        operation(): $AttributeModifier$Operation;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $AttributeModifier$Operation_);
        constructor(id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_, curve: $Int2DoubleFunction_);
    }
    /**
     * Values that may be interpreted as {@link $MobEffect$AttributeTemplate}.
     */
    export type $MobEffect$AttributeTemplate_ = { curve?: $Int2DoubleFunction_, amount?: number, operation?: $AttributeModifier$Operation_, id?: $ResourceLocation_,  } | [curve?: $Int2DoubleFunction_, amount?: number, operation?: $AttributeModifier$Operation_, id?: $ResourceLocation_, ];
    export class $WeavingMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $RaidOmenMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $InfestedMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $OozingMobEffect$NearbySlimes {
    }
    export interface $OozingMobEffect$NearbySlimes {
    }
    /**
     * Values that may be interpreted as {@link $OozingMobEffect$NearbySlimes}.
     */
    export type $OozingMobEffect$NearbySlimes_ = (() => void);
    export class $RegenerationMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffectInstance$BlendState {
    }
    export class $WitherMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $OozingMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
}
