import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Record, $Object } from "@package/java/lang";
import { $ExplosionEvent$Detonate, $LevelEvent$Unload, $ExplosionEvent$Start, $LevelEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $Explosion, $Level$ExplosionInteraction, $Level$ExplosionInteraction_, $Level, $ExplosionDamageCalculator, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockProviderKJS, $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as ruletest from "@package/dev/latvian/mods/kubejs/level/ruletest";

declare module "@package/dev/latvian/mods/kubejs/level" {
    export class $ExplosionKubeEvent$After extends $ExplosionKubeEvent {
        /**
         * Gets a list of all blocks affected by the explosion.
         */
        getAffectedBlocks(): $List<$LevelBlock>;
        /**
         * Gets a list of all entities affected by the explosion.
         */
        getAffectedEntities(): $EntityArrayList;
        /**
         * Remove all entities from the list of affected entities.
         */
        removeAllAffectedEntities(): void;
        /**
         * Remove a block from the list of affected blocks.
         */
        removeAffectedBlock(block: $LevelBlock): void;
        /**
         * Remove all blocks from the list of affected blocks.
         */
        removeAllAffectedBlocks(): void;
        /**
         * Remove all knockback from all affected *players*.
         */
        removeKnockback(): void;
        /**
         * Remove an entity from the list of affected entities.
         */
        removeAffectedEntity(entity: $Entity): void;
        constructor(level: $Level_, explosion: $Explosion, affectedEntities: $List_<$Entity>);
        get affectedBlocks(): $List<$LevelBlock>;
        get affectedEntities(): $EntityArrayList;
    }
    export class $WrappedSpawner extends $Record {
        static of(spawner: $Either<$BlockEntity, $Entity>): $WrappedSpawner;
        block(): $LevelBlock;
        entity(): $Entity;
        isWorldgen(): boolean;
        constructor(entity: $Entity, block: $LevelBlock);
        get worldgen(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WrappedSpawner}.
     */
    export type $WrappedSpawner_ = { entity?: $Entity, block?: $LevelBlock,  } | [entity?: $Entity, block?: $LevelBlock, ];
    export class $KubeLevelEvent {
    }
    export interface $KubeLevelEvent extends $KubeEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    /**
     * Values that may be interpreted as {@link $KubeLevelEvent}.
     */
    export type $KubeLevelEvent_ = (() => $Level_);
    export class $CachedLevelBlock implements $LevelBlock {
        clearCache(): void;
        getLevel(): $Level;
        getEntity(): $BlockEntity;
        getBlockState(): $BlockState;
        setBlockState(state: $BlockState_, flags: number): void;
        getPos(): $BlockPos;
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getY(): number;
        setEntityData(tag: $CompoundTag_): void;
        getCenterY(): number;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(effectOnly: boolean): void;
        getPlayersInRadius(): $EntityArrayList;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getDown(): $LevelBlock;
        getUp(): $LevelBlock;
        getNorth(): $LevelBlock;
        getSouth(): $LevelBlock;
        getWest(): $LevelBlock;
        getEast(): $LevelBlock;
        getEntityId(): string;
        mergeEntityData(tag: $CompoundTag_): void;
        getLight(): number;
        getSkyLight(): number;
        getBlockLight(): number;
        getCanSeeSky(): boolean;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        popItem(item: $ItemStack_): void;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        getBiomeId(): $ResourceLocation;
        toBlockStateString(): string;
        createEntity(type: $EntityType_<never>): $Entity;
        getDimension(): $ResourceLocation;
        getItem(): $ItemStack;
        getX(): number;
        getZ(): number;
        getInventory(): $InventoryKJS;
        getInventory(facing: $Direction_): $InventoryKJS;
        getEntityData(): $CompoundTag;
        getBlock(): $Block;
        setBlockState(state: $BlockState_): void;
        explode(properties: $ExplosionProperties_): $Explosion;
        getCenterX(): number;
        getCenterZ(): number;
        getDimensionKey(): $ResourceKey<$Level>;
        getDrops(): $List<$ItemStack>;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        canSeeSkyFromBelowWater(): boolean;
        getTypeData(): $Map<string, $Object>;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        asHolder(): $Holder<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTagKeys(): $List<$TagKey<$Block>>;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        minecraftLevel: $Level;
        constructor(w: $Level_, p: $BlockPos_);
        get level(): $Level;
        get entity(): $BlockEntity;
        get pos(): $BlockPos;
        get properties(): $Map<string, string>;
        get y(): number;
        get centerY(): number;
        get down(): $LevelBlock;
        get up(): $LevelBlock;
        get north(): $LevelBlock;
        get south(): $LevelBlock;
        get west(): $LevelBlock;
        get east(): $LevelBlock;
        get entityId(): string;
        get light(): number;
        get skyLight(): number;
        get blockLight(): number;
        get canSeeSky(): boolean;
        get biomeId(): $ResourceLocation;
        get dimension(): $ResourceLocation;
        get item(): $ItemStack;
        get x(): number;
        get z(): number;
        get block(): $Block;
        get centerX(): number;
        get centerZ(): number;
        get dimensionKey(): $ResourceKey<$Level>;
        get typeData(): $Map<string, $Object>;
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get tagKeys(): $List<$TagKey<$Block>>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tags(): $List<$ResourceLocation>;
    }
    export class $ExplosionProperties extends $Record {
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        damageCalculator(): $ExplosionDamageCalculator;
        explosionSound(): $Holder<$SoundEvent>;
        causesFire(): (boolean) | undefined;
        smallParticles(): $ParticleOptions;
        largeParticles(): $ParticleOptions;
        particles(): (boolean) | undefined;
        strength(): (number) | undefined;
        damageSource(): $DamageSource;
        explode(level: $Level_, x: number, y: number, z: number): $Explosion;
        constructor(source: $Entity, damageSource: $DamageSource_, damageCalculator: $ExplosionDamageCalculator, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_, particles: (boolean) | undefined, smallParticles: $ParticleOptions_, largeParticles: $ParticleOptions_, explosionSound: $Holder_<$SoundEvent>);
    }
    /**
     * Values that may be interpreted as {@link $ExplosionProperties}.
     */
    export type $ExplosionProperties_ = { particles?: (boolean) | undefined, damageSource?: $DamageSource_, explosionSound?: $Holder_<$SoundEvent>, largeParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, smallParticles?: $ParticleOptions_, strength?: (number) | undefined, source?: $Entity, mode?: $Level$ExplosionInteraction_, causesFire?: (boolean) | undefined,  } | [particles?: (boolean) | undefined, damageSource?: $DamageSource_, explosionSound?: $Holder_<$SoundEvent>, largeParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, smallParticles?: $ParticleOptions_, strength?: (number) | undefined, source?: $Entity, mode?: $Level$ExplosionInteraction_, causesFire?: (boolean) | undefined, ];
    export class $SimpleLevelKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
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
        constructor(l: $Level_);
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $KubeJSWorldEventHandler {
        static serverLevelLoad(event: $LevelEvent$Load): void;
        static serverLevelUnload(event: $LevelEvent$Unload): void;
        static preExplosion(event: $ExplosionEvent$Start): void;
        static detonateExplosion(event: $ExplosionEvent$Detonate): void;
        static serverTickEvent(event: $LevelTickEvent$Post): void;
        constructor();
    }
    export class $LevelBlock {
    }
    export interface $LevelBlock extends $BlockProviderKJS {
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getLevel(): $Level;
        getEntity(): $BlockEntity;
        getY(): number;
        setEntityData(tag: $CompoundTag_): void;
        getCenterY(): number;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(effectOnly: boolean): void;
        getPlayersInRadius(): $EntityArrayList;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getDown(): $LevelBlock;
        getUp(): $LevelBlock;
        getNorth(): $LevelBlock;
        getSouth(): $LevelBlock;
        getWest(): $LevelBlock;
        getEast(): $LevelBlock;
        getEntityId(): string;
        mergeEntityData(tag: $CompoundTag_): void;
        getLight(): number;
        getSkyLight(): number;
        getBlockLight(): number;
        getCanSeeSky(): boolean;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        popItem(item: $ItemStack_): void;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        getBiomeId(): $ResourceLocation;
        toBlockStateString(): string;
        createEntity(type: $EntityType_<never>): $Entity;
        getDimension(): $ResourceLocation;
        getItem(): $ItemStack;
        getX(): number;
        getZ(): number;
        getBlockState(): $BlockState;
        getInventory(): $InventoryKJS;
        getInventory(facing: $Direction_): $InventoryKJS;
        getEntityData(): $CompoundTag;
        getBlock(): $Block;
        setBlockState(state: $BlockState_, flags: number): void;
        setBlockState(state: $BlockState_): void;
        getPos(): $BlockPos;
        explode(properties: $ExplosionProperties_): $Explosion;
        getCenterX(): number;
        getCenterZ(): number;
        getDimensionKey(): $ResourceKey<$Level>;
        getDrops(): $List<$ItemStack>;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        canSeeSkyFromBelowWater(): boolean;
        get properties(): $Map<string, string>;
        get level(): $Level;
        get entity(): $BlockEntity;
        get y(): number;
        get centerY(): number;
        get down(): $LevelBlock;
        get up(): $LevelBlock;
        get north(): $LevelBlock;
        get south(): $LevelBlock;
        get west(): $LevelBlock;
        get east(): $LevelBlock;
        get entityId(): string;
        get light(): number;
        get skyLight(): number;
        get blockLight(): number;
        get canSeeSky(): boolean;
        get biomeId(): $ResourceLocation;
        get dimension(): $ResourceLocation;
        get item(): $ItemStack;
        get x(): number;
        get z(): number;
        get block(): $Block;
        get pos(): $BlockPos;
        get centerX(): number;
        get centerZ(): number;
        get dimensionKey(): $ResourceKey<$Level>;
    }
    export class $ExplosionKubeEvent$Before extends $ExplosionKubeEvent {
        /**
         * Returns the size of the explosion.
         */
        getSize(): number;
        /**
         * Sets the size of the explosion.
         */
        setSize(s: number): void;
        constructor(level: $Level_, explosion: $Explosion);
    }
    export class $ExplosionKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getPosition(): $Vec3;
        getY(): number;
        getExploder(): $LivingEntity;
        getBlock(): $LevelBlock;
        getX(): number;
        getZ(): number;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
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
        constructor(level: $Level_, explosion: $Explosion);
        get level(): $Level;
        get position(): $Vec3;
        get y(): number;
        get exploder(): $LivingEntity;
        get block(): $LevelBlock;
        get x(): number;
        get z(): number;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
}
