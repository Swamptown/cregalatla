import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $MobCategory_, $EntityType, $Entity, $LivingEntity, $MobSpawnType_, $MobSpawnType } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Attribute, $Attribute_, $Attribute$Sentiment_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List, $Collection, $Map } from "@package/java/util";
import { $WrappedSpawner, $LevelBlock, $KubeLevelEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $Holder, $RegistryAccess, $Registry, $Direction } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $EntityJoinLevelEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $LivingDamageEvent$Pre, $LivingDropsEvent, $LivingDeathEvent, $FinalizeSpawnEvent, $LivingDamageEvent$Post } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Record, $Object } from "@package/java/lang";
import { $HitResult, $Vec3, $HitResult$Type } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/dev/latvian/mods/kubejs/entity" {
    export class $EntityPotionEffectsJS {
        getActive(mobEffect: $Holder_<$MobEffect>): $MobEffectInstance;
        getActive(): $Collection<$MobEffectInstance>;
        isApplicable(effect: $MobEffectInstance): boolean;
        getDuration(mobEffect: $Holder_<$MobEffect>): number;
        getMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        clear(): void;
        add(mobEffect: $Holder_<$MobEffect>, duration: number, amplifier: number): void;
        add(mobEffect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, showParticles: boolean): void;
        add(mobEffect: $Holder_<$MobEffect>): void;
        add(mobEffect: $Holder_<$MobEffect>, duration: number): void;
        isActive(mobEffect: $Holder_<$MobEffect>): boolean;
        constructor(e: $LivingEntity);
        get map(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
    }
    export class $CheckLivingEntitySpawnKubeEvent implements $KubeLivingEntityEvent {
        /**
         * The block the entity is being spawned on.
         */
        getBlock(): $LevelBlock;
        /**
         * The spawner that spawned the entity.
         */
        getSpawner(): $WrappedSpawner;
        /**
         * The level the entity is being spawned into.
         */
        getLevel(): $Level;
        /**
         * The type of spawn.
         */
        getType(): $MobSpawnType;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        getEntity(): $LivingEntity;
        x: number;
        y: number;
        z: number;
        constructor(entity: $LivingEntity, level: $Level_, x: number, y: number, z: number, type: $MobSpawnType_, spawnerEither: $Either<$BlockEntity, $Entity>);
        get block(): $LevelBlock;
        get spawner(): $WrappedSpawner;
        get level(): $Level;
        get type(): $MobSpawnType;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $KubeEntityEvent {
    }
    export interface $KubeEntityEvent extends $KubeLevelEvent {
        getEntity(): $Entity;
        getPlayer(): $Player;
        getLevel(): $Level;
        get entity(): $Entity;
        get player(): $Player;
        get level(): $Level;
    }
    /**
     * Values that may be interpreted as {@link $KubeEntityEvent}.
     */
    export type $KubeEntityEvent_ = (() => $Entity);
    export class $AttributeBuilder extends $BuilderBase<$Attribute> {
        transformObject(attribute: $Attribute_): $Attribute;
        negativeSentiment(): this;
        neutralSentiment(): this;
        attachToPlayers(): this;
        attachToMonsters(): this;
        attachToCategory(category: $MobCategory_): this;
        attachTo(entityType: $Predicate_<$EntityType<never>>): this;
        syncable(watch: boolean): this;
        sentiment(sentiment: $Attribute$Sentiment_): this;
        range(defaultValue: number, min: number, max: number): this;
        bool(defaultValue: boolean): this;
        registryKey: $ResourceKey<$Registry<$Attribute>>;
        sourceLine: $SourceLine;
        predicateList: $List<$Predicate<$EntityType<never>>>;
        defaultValue: $Either<$AttributeBuilder$Range, boolean>;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $LivingEntityDeathKubeEvent implements $KubeLivingEntityEvent {
        /**
         * The damage source that triggers the death.
         */
        getSource(): $DamageSource;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        getEntity(): $LivingEntity;
        constructor(entity: $LivingEntity, source: $DamageSource_);
        get source(): $DamageSource;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $EntitySpawnedKubeEvent implements $KubeEntityEvent {
        /**
         * The entity being added to the world.
         */
        getEntity(): $Entity;
        /**
         * The level the entity is being added to.
         */
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        constructor(entity: $Entity, level: $Level_);
        get entity(): $Entity;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $BeforeLivingEntityHurtKubeEvent implements $KubeLivingEntityEvent {
        setDamage(damage: number): void;
        /**
         * The damage source.
         */
        getSource(): $DamageSource;
        /**
         * The amount of damage.
         */
        getDamage(): number;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        getEntity(): $LivingEntity;
        constructor(event: $LivingDamageEvent$Pre);
        get source(): $DamageSource;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $LivingEntityDropsKubeEvent implements $KubeLivingEntityEvent {
        addDrop(stack: $ItemStack_): $ItemEntity;
        addDrop(stack: $ItemStack_, chance: number): $ItemEntity;
        isRecentlyHit(): boolean;
        getSource(): $DamageSource;
        getDrops(): $List<$ItemEntity>;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        getEntity(): $LivingEntity;
        eventDrops: $List<$ItemEntity>;
        constructor(e: $LivingDropsEvent);
        get recentlyHit(): boolean;
        get source(): $DamageSource;
        get drops(): $List<$ItemEntity>;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $AttributeBuilder$Range extends $Record {
        min(): number;
        max(): number;
        defaultValue(): number;
        constructor(defaultValue: number, min: number, max: number);
    }
    /**
     * Values that may be interpreted as {@link $AttributeBuilder$Range}.
     */
    export type $AttributeBuilder$Range_ = { defaultValue?: number, min?: number, max?: number,  } | [defaultValue?: number, min?: number, max?: number, ];
    export class $AfterLivingEntityHurtKubeEvent implements $KubeLivingEntityEvent {
        /**
         * The damage source.
         */
        getSource(): $DamageSource;
        /**
         * The amount of damage.
         */
        getDamage(): number;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        getEntity(): $LivingEntity;
        constructor(event: $LivingDamageEvent$Post);
        get source(): $DamageSource;
        get damage(): number;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $KubeRayTraceResult {
        getHitX(): number;
        getHitY(): number;
        getHitZ(): number;
        hit: $Vec3;
        fromEntity: $Entity;
        distance: number;
        facing: $Direction;
        block: $LevelBlock;
        type: $HitResult$Type;
        entity: $Entity;
        constructor(from: $Entity, result: $HitResult);
        constructor(from: $Entity, result: $HitResult, d: number);
        get hitX(): number;
        get hitY(): number;
        get hitZ(): number;
    }
    export class $KubeJSEntityEventHandler {
        static livingDeath(event: $LivingDeathEvent): void;
        static beforeLivingHurt(event: $LivingDamageEvent$Pre): void;
        static afterLivingHurt(event: $LivingDamageEvent$Post): void;
        static entitySpawned(event: $EntityJoinLevelEvent): void;
        static livingDrops(event: $LivingDropsEvent): void;
        static checkSpawn(event: $FinalizeSpawnEvent): void;
        constructor();
    }
    export class $KubeLivingEntityEvent {
    }
    export interface $KubeLivingEntityEvent extends $KubeEntityEvent {
        getEntity(): $LivingEntity;
        get entity(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $KubeLivingEntityEvent}.
     */
    export type $KubeLivingEntityEvent_ = (() => $LivingEntity);
}
