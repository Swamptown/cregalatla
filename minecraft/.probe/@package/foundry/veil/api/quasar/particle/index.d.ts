import { $Colorc } from "@package/foundry/veil/api/client/color";
import { $Codec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MolangEnvironment } from "@package/gg/moonflower/molangcompiler/api";
import { $Camera } from "@package/net/minecraft/client";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos } from "@package/net/minecraft/core";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $TickTaskScheduler } from "@package/foundry/veil/api";
import { $Trail } from "@package/foundry/veil/api/quasar/fx";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $CodeModule_ } from "@package/foundry/veil/api/quasar/data/module";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ForceParticleModule, $ParticleModule, $CollisionParticleModule, $UpdateParticleModule, $InitParticleModule, $RenderParticleModule } from "@package/foundry/veil/api/quasar/emitters/module";
import { $Vector4fc, $Vector3dc, $Vector3d, $Vector3f, $Vector4f, $Vector3fc } from "@package/org/joml";
import { $QuasarParticleData_, $QuasarParticleData, $ParticleSettings, $ParticleSettings_, $EmitterShapeSettings, $ParticleEmitterData, $EmitterShapeSettings_ } from "@package/foundry/veil/api/quasar/data";

declare module "@package/foundry/veil/api/quasar/particle" {
    export class $RenderStyle {
        static CODEC: $Codec<$RenderStyle>;
    }
    export interface $RenderStyle {
        clear(): void;
        setup(arg0: number): boolean;
        render(arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number): void;
        getRenderType(arg0: $QuasarParticle, arg1: $RenderData): $RenderType;
        set up(value: number);
    }
    /**
     * Values that may be interpreted as {@link $RenderStyle}.
     */
    export type $RenderStyle_ = RegistryTypes.VeilQuasarRenderStyle | ((arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number) => void);
    export class $RenderData {
        getFixedPackedLight(): number;
        getTrails(): $List<$Trail>;
        setSpriteData(arg0: $SpriteData_): void;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        setFixedPackedLight(arg0: number): void;
        getAtlasSprite(): $TextureAtlasSprite;
        getSpriteData(): $SpriteData;
        getRenderRotation(): $Vector3fc;
        getRenderRadius(): number;
        getRenderAge(): number;
        getAgePercent(): number;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
        setRed(arg0: number): void;
        setGreen(arg0: number): void;
        setBlue(arg0: number): void;
        getPackedLight(): number;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        getAlpha(): number;
        markDirty(): void;
        getRenderPosition(): $Vector3dc;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setColor(arg0: $Vector4fc): void;
        setColor(arg0: $Colorc): void;
        tick(arg0: $QuasarParticle, arg1: number): void;
        isAdditive(): boolean;
        setAdditive(arg0: boolean): void;
        render(arg0: $QuasarParticle, arg1: number): void;
        getRenderType(): $RenderType;
        setAlpha(arg0: number): void;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData_);
        get trails(): $List<$Trail>;
        get renderRotation(): $Vector3fc;
        get renderRadius(): number;
        get packedLight(): number;
        get renderPosition(): $Vector3dc;
        get renderType(): $RenderType;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        getEnabledRenderModuleCount(): number;
        getCollisionModules(): $CollisionParticleModule[];
        getInitModules(): $InitParticleModule[];
        updateEnabled(): void;
        getUpdateModules(): $UpdateParticleModule[];
        getForceModules(): $ForceParticleModule[];
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        getRenderModules(): $RenderParticleModule[];
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        getAllModules(): $ParticleModule[];
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        get enabledRenderModuleCount(): number;
        get collisionModules(): $CollisionParticleModule[];
        get initModules(): $InitParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get enabledRenderModulesArray(): $RenderParticleModule[];
        get renderModules(): $RenderParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get allModules(): $ParticleModule[];
    }
    export class $ParticleModuleSet$Builder {
        addModule(arg0: $ParticleModule): void;
        build(): $ParticleModuleSet;
        constructor();
    }
    export class $QuasarParticle {
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        getBlockStateInOrUnder(): $BlockState;
        getEmitter(): $ParticleEmitter;
        getModules(): $ParticleModuleSet;
        getSettings(): $ParticleSettings;
        getEnvironment(): $MolangEnvironment;
        getRadius(): number;
        setRadius(arg0: number): void;
        setAge(arg0: number): void;
        getRandomSource(): $RandomSource;
        getLevel(): $ClientLevel;
        getPosition(): $Vector3d;
        tick(): void;
        remove(): void;
        init(): void;
        getData(): $QuasarParticleData;
        getBlockPosition(): $BlockPos;
        getScheduler(): $TickTaskScheduler;
        getAge(): number;
        render(arg0: number): void;
        onRemove(): void;
        isRemoved(): boolean;
        getRotation(): $Vector3f;
        getBoundingBox(): $AABB;
        getVelocity(): $Vector3d;
        getRenderData(): $RenderData;
        getLifetime(): number;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get blockStateInOrUnder(): $BlockState;
        get emitter(): $ParticleEmitter;
        get modules(): $ParticleModuleSet;
        get settings(): $ParticleSettings;
        get environment(): $MolangEnvironment;
        get randomSource(): $RandomSource;
        get level(): $ClientLevel;
        get position(): $Vector3d;
        get data(): $QuasarParticleData;
        get blockPosition(): $BlockPos;
        get scheduler(): $TickTaskScheduler;
        get removed(): boolean;
        get rotation(): $Vector3f;
        get boundingBox(): $AABB;
        get velocity(): $Vector3d;
        get renderData(): $RenderData;
        get lifetime(): number;
    }
    export class $ParticleEmitter {
        setMaxParticles(arg0: number): void;
        getMaxParticles(): number;
        getParticleCount(): number;
        addCodeModule(arg0: $CodeModule_): void;
        getMaxLifetime(): number;
        getRate(): number;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        getParticleSettings(): $ParticleSettings;
        isForceSpawn(): boolean;
        getParticleData(): $QuasarParticleData;
        getAttachedEntity(): $Entity;
        setMaxLifetime(arg0: number): void;
        setRate(arg0: number): void;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        setParticleSettings(arg0: $ParticleSettings_): void;
        setForceSpawn(arg0: boolean): void;
        setParticleData(arg0: $QuasarParticleData_): void;
        setAttachedEntity(arg0: $Entity): void;
        static clearErrors(): void;
        getRegistryName(): $ResourceLocation;
        getPosition(): $Vector3d;
        setLoop(arg0: boolean): void;
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        getData(): $ParticleEmitterData;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        setCount(arg0: number): void;
        isRemoved(): boolean;
        setPosition(arg0: $Vec3_): void;
        setPosition(arg0: $Vector3dc): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        get particleCount(): number;
        get registryName(): $ResourceLocation;
        get data(): $ParticleEmitterData;
        get removed(): boolean;
    }
    export class $SpriteData extends $Record {
        frameCount(): number;
        frameTime(): number;
        stretchToLifetime(): boolean;
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        v(arg0: number, arg1: number, arg2: number): number;
        u(arg0: number, arg1: number, arg2: number): number;
        sprite(): $ResourceLocation;
        frameWidth(): number;
        frameHeight(): number;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpriteData}.
     */
    export type $SpriteData_ = { frameCount?: number, frameHeight?: number, frameTime?: number, sprite?: $ResourceLocation_, frameWidth?: number, stretchToLifetime?: boolean,  } | [frameCount?: number, frameHeight?: number, frameTime?: number, sprite?: $ResourceLocation_, frameWidth?: number, stretchToLifetime?: boolean, ];
}
