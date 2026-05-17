import { $Explosion } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Style, $Component } from "@package/net/minecraft/network/chat";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Fireball, $FireworkRocketEntity, $AbstractArrow, $WitherSkull } from "@package/net/minecraft/world/entity/projectile";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IScalingFunction, $IDeathMessageProvider } from "@package/net/neoforged/neoforge/common/damagesource";
import { $Holder_, $Holder, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/damagesource" {
    export interface $DamageType extends RegistryMarked<RegistryTypes.DamageTypeTag, RegistryTypes.DamageType> {}
    export class $DamageSources {
        source(arg0: $ResourceKey_<$DamageType>, arg1: $Entity, arg2: $Entity): $DamageSource;
        source(arg0: $ResourceKey_<$DamageType>, arg1: $Entity): $DamageSource;
        source(arg0: $ResourceKey_<$DamageType>): $DamageSource;
        thrown(arg0: $Entity, arg1: $Entity): $DamageSource;
        generic(): $DamageSource;
        freeze(): $DamageSource;
        magic(): $DamageSource;
        noAggroMobAttack(arg0: $LivingEntity): $DamageSource;
        sonicBoom(arg0: $Entity): $DamageSource;
        spit(arg0: $Entity, arg1: $LivingEntity): $DamageSource;
        mobAttack(arg0: $LivingEntity): $DamageSource;
        wither(): $DamageSource;
        trident(arg0: $Entity, arg1: $Entity): $DamageSource;
        hotFloor(): $DamageSource;
        sweetBerryBush(): $DamageSource;
        badRespawnPointExplosion(arg0: $Vec3_): $DamageSource;
        stalagmite(): $DamageSource;
        fallingStalactite(arg0: $Entity): $DamageSource;
        indirectMagic(arg0: $Entity, arg1: $Entity): $DamageSource;
        fall(): $DamageSource;
        arrow(arg0: $AbstractArrow, arg1: $Entity): $DamageSource;
        fireball(arg0: $Fireball, arg1: $Entity): $DamageSource;
        witherSkull(arg0: $WitherSkull, arg1: $Entity): $DamageSource;
        anvil(arg0: $Entity): $DamageSource;
        inFire(): $DamageSource;
        windCharge(arg0: $Entity, arg1: $LivingEntity): $DamageSource;
        thorns(arg0: $Entity): $DamageSource;
        mobProjectile(arg0: $Entity, arg1: $LivingEntity): $DamageSource;
        starve(): $DamageSource;
        fallingBlock(arg0: $Entity): $DamageSource;
        sting(arg0: $LivingEntity): $DamageSource;
        dryOut(): $DamageSource;
        cactus(): $DamageSource;
        campfire(): $DamageSource;
        dragonBreath(): $DamageSource;
        onFire(): $DamageSource;
        lava(): $DamageSource;
        genericKill(): $DamageSource;
        inWall(): $DamageSource;
        outOfBorder(): $DamageSource;
        fellOutOfWorld(): $DamageSource;
        flyIntoWall(): $DamageSource;
        drown(): $DamageSource;
        cramming(): $DamageSource;
        playerAttack(arg0: $Player): $DamageSource;
        lightningBolt(): $DamageSource;
        explosion(arg0: $Entity, arg1: $Entity): $DamageSource;
        explosion(arg0: $Explosion): $DamageSource;
        fireworks(arg0: $FireworkRocketEntity, arg1: $Entity): $DamageSource;
        damageTypes: $Registry<$DamageType>;
        constructor(arg0: $RegistryAccess);
    }
    export class $CombatRules {
        static getDamageAfterAbsorb(arg0: $LivingEntity, arg1: number, arg2: $DamageSource_, arg3: number, arg4: number): number;
        static getDamageAfterMagicAbsorb(arg0: number, arg1: number): number;
        static BASE_ARMOR_TOUGHNESS: number;
        static MIN_ARMOR_RATIO: number;
        static ARMOR_PROTECTION_DIVIDER: number;
        static MAX_ARMOR: number;
        constructor();
    }
    export class $DamageType extends $Record {
        deathMessageType(): $DeathMessageType;
        msgId(): string;
        scaling(): $DamageScaling;
        effects(): $DamageEffects;
        exhaustion(): number;
        static CODEC: $Codec<$Holder<$DamageType>>;
        static DIRECT_CODEC: $Codec<$DamageType>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$DamageType>>;
        constructor(arg0: string, arg1: $DamageScaling_, arg2: number, arg3: $DamageEffects_, arg4: $DeathMessageType_);
        constructor(arg0: string, arg1: number);
        constructor(arg0: string, arg1: number, arg2: $DamageEffects_);
        constructor(arg0: string, arg1: $DamageScaling_, arg2: number, arg3: $DamageEffects_);
        constructor(arg0: string, arg1: $DamageScaling_, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $DamageType}.
     */
    export type $DamageType_ = RegistryTypes.DamageType | { effects?: $DamageEffects_, exhaustion?: number, deathMessageType?: $DeathMessageType_, msgId?: string, scaling?: $DamageScaling_,  } | [effects?: $DamageEffects_, exhaustion?: number, deathMessageType?: $DeathMessageType_, msgId?: string, scaling?: $DamageScaling_, ];
    export class $DamageSource {
        type(): $DamageType;
        isDirect(): boolean;
        is(arg0: $TagKey_<$DamageType>): boolean;
        is(arg0: $ResourceKey_<$DamageType>): boolean;
        getLocalizedDeathMessage(arg0: $LivingEntity): $Component;
        /**
         * @deprecated
         */
        scalesWithDifficulty(): boolean;
        getType(): string;
        sourcePositionRaw(): $Vec3;
        getPlayer(): $Player;
        getActual(): $Entity;
        getImmediate(): $Entity;
        getSourcePosition(): $Vec3;
        getWeaponItem(): $ItemStack;
        typeHolder(): $Holder<$DamageType>;
        getFoodExhaustion(): number;
        isCreativePlayer(): boolean;
        constructor(arg0: $Holder_<$DamageType>, arg1: $Entity);
        constructor(arg0: $Holder_<$DamageType>, arg1: $Entity, arg2: $Entity);
        constructor(arg0: $Holder_<$DamageType>, arg1: $Entity, arg2: $Entity, arg3: $Vec3_);
        constructor(arg0: $Holder_<$DamageType>);
        constructor(arg0: $Holder_<$DamageType>, arg1: $Vec3_);
        get direct(): boolean;
        get player(): $Player;
        get actual(): $Entity;
        get immediate(): $Entity;
        get sourcePosition(): $Vec3;
        get weaponItem(): $ItemStack;
        get foodExhaustion(): number;
        get creativePlayer(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DamageSource}.
     */
    export type $DamageSource_ = RegistryTypes.DamageType | $LivingEntity;
    export class $FallLocation extends $Record {
        id(): string;
        languageKey(): string;
        static getCurrentFallLocation(arg0: $LivingEntity): $FallLocation;
        static blockToFallLocation(arg0: $BlockState_): $FallLocation;
        static GENERIC: $FallLocation;
        static LADDER: $FallLocation;
        static VINES: $FallLocation;
        static WEEPING_VINES: $FallLocation;
        static OTHER_CLIMBABLE: $FallLocation;
        static TWISTING_VINES: $FallLocation;
        static SCAFFOLDING: $FallLocation;
        static WATER: $FallLocation;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $FallLocation}.
     */
    export type $FallLocation_ = { id?: string,  } | [id?: string, ];
    export class $DamageScaling extends $Enum<$DamageScaling> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $DamageScaling[];
        static valueOf(arg0: string): $DamageScaling;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        getScalingFunction(): $IScalingFunction;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$DamageScaling>;
        static WHEN_CAUSED_BY_LIVING_NON_PLAYER: $DamageScaling;
        static NEVER: $DamageScaling;
        static ALWAYS: $DamageScaling;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get scalingFunction(): $IScalingFunction;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DamageScaling}.
     */
    export type $DamageScaling_ = "never" | "when_caused_by_living_non_player" | "always";
    export class $DeathMessageType extends $Enum<$DeathMessageType> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $DeathMessageType[];
        static valueOf(arg0: string): $DeathMessageType;
        getMessageFunction(): $IDeathMessageProvider;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static INTENTIONAL_GAME_DESIGN: $DeathMessageType;
        static FALL_VARIANTS: $DeathMessageType;
        static CODEC: $Codec<$DeathMessageType>;
        static DEFAULT: $DeathMessageType;
        get messageFunction(): $IDeathMessageProvider;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DeathMessageType}.
     */
    export type $DeathMessageType_ = "default" | "fall_variants" | "intentional_game_design";
    export class $CombatEntry extends $Record {
        source(): $DamageSource;
        fallLocation(): $FallLocation;
        fallDistance(): number;
        damage(): number;
        constructor(arg0: $DamageSource_, arg1: number, arg2: $FallLocation_, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $CombatEntry}.
     */
    export type $CombatEntry_ = { source?: $DamageSource_, damage?: number, fallLocation?: $FallLocation_, fallDistance?: number,  } | [source?: $DamageSource_, damage?: number, fallLocation?: $FallLocation_, fallDistance?: number, ];
    export class $DamageEffects extends $Enum<$DamageEffects> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $DamageEffects[];
        static valueOf(arg0: string): $DamageEffects;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        sound(): $SoundEvent;
        getRemappedEnumConstantName(): string;
        static FREEZING: $DamageEffects;
        static CODEC: $Codec<$DamageEffects>;
        static DROWNING: $DamageEffects;
        static POKING: $DamageEffects;
        static BURNING: $DamageEffects;
        static HURT: $DamageEffects;
        static THORNS: $DamageEffects;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DamageEffects}.
     */
    export type $DamageEffects_ = "hurt" | "thorns" | "drowning" | "burning" | "poking" | "freezing";
    export class $DamageTypes {
        static bootstrap(arg0: $BootstrapContext<$DamageType_>): void;
        static IN_WALL: $ResourceKey<$DamageType>;
        static FREEZE: $ResourceKey<$DamageType>;
        static LAVA: $ResourceKey<$DamageType>;
        static UNATTRIBUTED_FIREBALL: $ResourceKey<$DamageType>;
        static CRAMMING: $ResourceKey<$DamageType>;
        static EXPLOSION: $ResourceKey<$DamageType>;
        static IN_FIRE: $ResourceKey<$DamageType>;
        static BAD_RESPAWN_POINT: $ResourceKey<$DamageType>;
        static TRIDENT: $ResourceKey<$DamageType>;
        static WITHER: $ResourceKey<$DamageType>;
        static ARROW: $ResourceKey<$DamageType>;
        static GENERIC_KILL: $ResourceKey<$DamageType>;
        static LIGHTNING_BOLT: $ResourceKey<$DamageType>;
        static MAGIC: $ResourceKey<$DamageType>;
        static ON_FIRE: $ResourceKey<$DamageType>;
        static FALL: $ResourceKey<$DamageType>;
        static MOB_ATTACK_NO_AGGRO: $ResourceKey<$DamageType>;
        static PLAYER_ATTACK: $ResourceKey<$DamageType>;
        static DRY_OUT: $ResourceKey<$DamageType>;
        static DRAGON_BREATH: $ResourceKey<$DamageType>;
        static WITHER_SKULL: $ResourceKey<$DamageType>;
        static STARVE: $ResourceKey<$DamageType>;
        static FELL_OUT_OF_WORLD: $ResourceKey<$DamageType>;
        static PLAYER_EXPLOSION: $ResourceKey<$DamageType>;
        static SONIC_BOOM: $ResourceKey<$DamageType>;
        static MOB_ATTACK: $ResourceKey<$DamageType>;
        static FALLING_ANVIL: $ResourceKey<$DamageType>;
        static FIREBALL: $ResourceKey<$DamageType>;
        static CACTUS: $ResourceKey<$DamageType>;
        static CAMPFIRE: $ResourceKey<$DamageType>;
        static MOB_PROJECTILE: $ResourceKey<$DamageType>;
        static WIND_CHARGE: $ResourceKey<$DamageType>;
        static INDIRECT_MAGIC: $ResourceKey<$DamageType>;
        static OUTSIDE_BORDER: $ResourceKey<$DamageType>;
        static FALLING_BLOCK: $ResourceKey<$DamageType>;
        static FLY_INTO_WALL: $ResourceKey<$DamageType>;
        static SPIT: $ResourceKey<$DamageType>;
        static THORNS: $ResourceKey<$DamageType>;
        static GENERIC: $ResourceKey<$DamageType>;
        static FIREWORKS: $ResourceKey<$DamageType>;
        static SWEET_BERRY_BUSH: $ResourceKey<$DamageType>;
        static HOT_FLOOR: $ResourceKey<$DamageType>;
        static STING: $ResourceKey<$DamageType>;
        static DROWN: $ResourceKey<$DamageType>;
        static FALLING_STALACTITE: $ResourceKey<$DamageType>;
        static THROWN: $ResourceKey<$DamageType>;
        static STALAGMITE: $ResourceKey<$DamageType>;
    }
    export interface $DamageTypes {
    }
    export class $CombatTracker {
        getMostSignificantFall(): $CombatEntry;
        getCombatDuration(): number;
        getFallMessage(arg0: $CombatEntry_, arg1: $Entity): $Component;
        getDeathMessage(): $Component;
        recheckStatus(): void;
        recordDamage(arg0: $DamageSource_, arg1: number): void;
        static INTENTIONAL_GAME_DESIGN_STYLE: $Style;
        static RESET_COMBAT_STATUS_TIME: number;
        static RESET_DAMAGE_STATUS_TIME: number;
        constructor(arg0: $LivingEntity);
        get mostSignificantFall(): $CombatEntry;
        get combatDuration(): number;
        get deathMessage(): $Component;
    }
}
