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
         * Remove an entity from the list of affected entities.
         */
        removeAffectedEntity(entity: $Entity): void;
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
         * Gets a list of all blocks affected by the explosion.
         */
        getAffectedBlocks(): $List<$LevelBlock>;
        /**
         * Gets a list of all entities affected by the explosion.
         */
        getAffectedEntities(): $EntityArrayList;
        constructor(level: $Level_, explosion: $Explosion, affectedEntities: $List_<$Entity>);
        get affectedBlocks(): $List<$LevelBlock>;
        get affectedEntities(): $EntityArrayList;
    }
    export class $WrappedSpawner extends $Record {
        isWorldgen(): boolean;
        entity(): $Entity;
        static of(spawner: $Either<$BlockEntity, $Entity>): $WrappedSpawner;
        block(): $LevelBlock;
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
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    /**
     * Values that may be interpreted as {@link $KubeLevelEvent}.
     */
    export type $KubeLevelEvent_ = (() => $Level_);
    export class $CachedLevelBlock implements $LevelBlock {
        getEntity(): $BlockEntity;
        getLevel(): $Level;
        clearCache(): void;
        setBlockState(state: $BlockState_, flags: number): void;
        getPos(): $BlockPos;
        getBlockState(): $BlockState;
        createEntity(type: $EntityType_<never>): $Entity;
        setEntityData(tag: $CompoundTag_): void;
        getCenterY(): number;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(effectOnly: boolean): void;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
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
        getDimension(): $ResourceLocation;
        getItem(): $ItemStack;
        getY(): number;
        offset(f: $Direction_): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_, d: number): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getDimensionKey(): $ResourceKey<$Level>;
        canSeeSkyFromBelowWater(): boolean;
        setBlockState(state: $BlockState_): void;
        getEntityData(): $CompoundTag;
        getBlock(): $Block;
        explode(properties: $ExplosionProperties_): $Explosion;
        getCenterX(): number;
        getCenterZ(): number;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        getX(): number;
        getZ(): number;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        getTypeData(): $Map<string, $Object>;
        getId(): string;
        asHolder(): $Holder<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        getKey(): $ResourceKey<$Block>;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        minecraftLevel: $Level;
        constructor(w: $Level_, p: $BlockPos_);
        get entity(): $BlockEntity;
        get level(): $Level;
        get pos(): $BlockPos;
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
        get y(): number;
        get properties(): $Map<string, string>;
        get dimensionKey(): $ResourceKey<$Level>;
        get block(): $Block;
        get centerX(): number;
        get centerZ(): number;
        get x(): number;
        get z(): number;
        get typeData(): $Map<string, $Object>;
        get id(): string;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get key(): $ResourceKey<$Block>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
    }
    export class $ExplosionProperties extends $Record {
        smallParticles(): $ParticleOptions;
        largeParticles(): $ParticleOptions;
        causesFire(): (boolean) | undefined;
        damageCalculator(): $ExplosionDamageCalculator;
        explosionSound(): $Holder<$SoundEvent>;
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        damageSource(): $DamageSource;
        explode(level: $Level_, x: number, y: number, z: number): $Explosion;
        particles(): (boolean) | undefined;
        strength(): (number) | undefined;
        constructor(source: $Entity, damageSource: $DamageSource_, damageCalculator: $ExplosionDamageCalculator, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_, particles: (boolean) | undefined, smallParticles: $ParticleOptions_, largeParticles: $ParticleOptions_, explosionSound: $Holder_<$SoundEvent>);
    }
    /**
     * Values that may be interpreted as {@link $ExplosionProperties}.
     */
    export type $ExplosionProperties_ = { mode?: $Level$ExplosionInteraction_, source?: $Entity, strength?: (number) | undefined, smallParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, largeParticles?: $ParticleOptions_, explosionSound?: $Holder_<$SoundEvent>, damageSource?: $DamageSource_, particles?: (boolean) | undefined, causesFire?: (boolean) | undefined,  } | [mode?: $Level$ExplosionInteraction_, source?: $Entity, strength?: (number) | undefined, smallParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, largeParticles?: $ParticleOptions_, explosionSound?: $Holder_<$SoundEvent>, damageSource?: $DamageSource_, particles?: (boolean) | undefined, causesFire?: (boolean) | undefined, ];
    export class $SimpleLevelKubeEvent implements $KubeLevelEvent {
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
        constructor(l: $Level_);
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $KubeJSWorldEventHandler {
        static serverTickEvent(event: $LevelTickEvent$Post): void;
        static serverLevelLoad(event: $LevelEvent$Load): void;
        static serverLevelUnload(event: $LevelEvent$Unload): void;
        static preExplosion(event: $ExplosionEvent$Start): void;
        static detonateExplosion(event: $ExplosionEvent$Detonate): void;
        constructor();
    }
    export class $LevelBlock {
    }
    export interface $LevelBlock extends $BlockProviderKJS {
        createEntity(type: $EntityType_<never>): $Entity;
        getEntity(): $BlockEntity;
        setEntityData(tag: $CompoundTag_): void;
        getCenterY(): number;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(effectOnly: boolean): void;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
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
        getDimension(): $ResourceLocation;
        getLevel(): $Level;
        getItem(): $ItemStack;
        getY(): number;
        offset(f: $Direction_): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_, d: number): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getDimensionKey(): $ResourceKey<$Level>;
        canSeeSkyFromBelowWater(): boolean;
        setBlockState(state: $BlockState_): void;
        setBlockState(state: $BlockState_, flags: number): void;
        getEntityData(): $CompoundTag;
        getBlock(): $Block;
        getPos(): $BlockPos;
        explode(properties: $ExplosionProperties_): $Explosion;
        getCenterX(): number;
        getCenterZ(): number;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        getX(): number;
        getZ(): number;
        getBlockState(): $BlockState;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        get entity(): $BlockEntity;
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
        get level(): $Level;
        get item(): $ItemStack;
        get y(): number;
        get properties(): $Map<string, string>;
        get dimensionKey(): $ResourceKey<$Level>;
        get block(): $Block;
        get pos(): $BlockPos;
        get centerX(): number;
        get centerZ(): number;
        get x(): number;
        get z(): number;
    }
    export class $ExplosionKubeEvent$Before extends $ExplosionKubeEvent {
        /**
         * Sets the size of the explosion.
         */
        setSize(s: number): void;
        /**
         * Returns the size of the explosion.
         */
        getSize(): number;
        constructor(level: $Level_, explosion: $Explosion);
    }
    export class $ExplosionKubeEvent implements $KubeLevelEvent {
        getExploder(): $LivingEntity;
        getBlock(): $LevelBlock;
        getLevel(): $Level;
        getY(): number;
        getPosition(): $Vec3;
        getX(): number;
        getZ(): number;
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
        constructor(level: $Level_, explosion: $Explosion);
        get exploder(): $LivingEntity;
        get block(): $LevelBlock;
        get level(): $Level;
        get y(): number;
        get position(): $Vec3;
        get x(): number;
        get z(): number;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
}
