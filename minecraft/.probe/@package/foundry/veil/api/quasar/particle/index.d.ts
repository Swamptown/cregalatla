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
        tick(arg0: $QuasarParticle, arg1: number): void;
        setColor(arg0: $Colorc): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setColor(arg0: $Vector4fc): void;
        getPackedLight(): number;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
        setFixedPackedLight(arg0: number): void;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        getRenderRotation(): $Vector3fc;
        getRenderRadius(): number;
        getRenderAge(): number;
        getAgePercent(): number;
        getAtlasSprite(): $TextureAtlasSprite;
        getSpriteData(): $SpriteData;
        setRed(arg0: number): void;
        setGreen(arg0: number): void;
        setBlue(arg0: number): void;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        getAlpha(): number;
        markDirty(): void;
        getRenderPosition(): $Vector3dc;
        getTrails(): $List<$Trail>;
        setSpriteData(arg0: $SpriteData_): void;
        getFixedPackedLight(): number;
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
        get packedLight(): number;
        get renderRotation(): $Vector3fc;
        get renderRadius(): number;
        get renderPosition(): $Vector3dc;
        get trails(): $List<$Trail>;
        get renderType(): $RenderType;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        copy(): $ParticleModuleSet;
        static builder(): $ParticleModuleSet$Builder;
        getRenderModules(): $RenderParticleModule[];
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        getAllModules(): $ParticleModule[];
        getCollisionModules(): $CollisionParticleModule[];
        getInitModules(): $InitParticleModule[];
        updateEnabled(): void;
        getUpdateModules(): $UpdateParticleModule[];
        getForceModules(): $ForceParticleModule[];
        getEnabledRenderModuleCount(): number;
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        get renderModules(): $RenderParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get allModules(): $ParticleModule[];
        get collisionModules(): $CollisionParticleModule[];
        get initModules(): $InitParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get enabledRenderModuleCount(): number;
        get enabledRenderModulesArray(): $RenderParticleModule[];
    }
    export class $ParticleModuleSet$Builder {
        build(): $ParticleModuleSet;
        addModule(arg0: $ParticleModule): void;
        constructor();
    }
    export class $QuasarParticle {
        remove(): void;
        init(): void;
        tick(): void;
        getLevel(): $ClientLevel;
        getPosition(): $Vector3d;
        getData(): $QuasarParticleData;
        getModules(): $ParticleModuleSet;
        getBlockStateInOrUnder(): $BlockState;
        setAge(arg0: number): void;
        getRadius(): number;
        setRadius(arg0: number): void;
        getRandomSource(): $RandomSource;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        getEmitter(): $ParticleEmitter;
        getSettings(): $ParticleSettings;
        getScheduler(): $TickTaskScheduler;
        getAge(): number;
        render(arg0: number): void;
        onRemove(): void;
        isRemoved(): boolean;
        getRotation(): $Vector3f;
        getBoundingBox(): $AABB;
        getVelocity(): $Vector3d;
        getRenderData(): $RenderData;
        getBlockPosition(): $BlockPos;
        getLifetime(): number;
        getEnvironment(): $MolangEnvironment;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get level(): $ClientLevel;
        get position(): $Vector3d;
        get data(): $QuasarParticleData;
        get modules(): $ParticleModuleSet;
        get blockStateInOrUnder(): $BlockState;
        get randomSource(): $RandomSource;
        get emitter(): $ParticleEmitter;
        get settings(): $ParticleSettings;
        get scheduler(): $TickTaskScheduler;
        get removed(): boolean;
        get rotation(): $Vector3f;
        get boundingBox(): $AABB;
        get velocity(): $Vector3d;
        get renderData(): $RenderData;
        get blockPosition(): $BlockPos;
        get lifetime(): number;
        get environment(): $MolangEnvironment;
    }
    export class $ParticleEmitter {
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        getPosition(): $Vector3d;
        getData(): $ParticleEmitterData;
        static clearErrors(): void;
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
        getParticleCount(): number;
        setLoop(arg0: boolean): void;
        setMaxParticles(arg0: number): void;
        getMaxParticles(): number;
        getRegistryName(): $ResourceLocation;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        setCount(arg0: number): void;
        isRemoved(): boolean;
        setPosition(arg0: $Vec3_): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        setPosition(arg0: $Vector3dc): void;
        get data(): $ParticleEmitterData;
        get particleCount(): number;
        get registryName(): $ResourceLocation;
        get removed(): boolean;
    }
    export class $SpriteData extends $Record {
        v(arg0: number, arg1: number, arg2: number): number;
        u(arg0: number, arg1: number, arg2: number): number;
        frameTime(): number;
        frameCount(): number;
        stretchToLifetime(): boolean;
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        sprite(): $ResourceLocation;
        frameWidth(): number;
        frameHeight(): number;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpriteData}.
     */
    export type $SpriteData_ = { stretchToLifetime?: boolean, frameWidth?: number, sprite?: $ResourceLocation_, frameTime?: number, frameHeight?: number, frameCount?: number,  } | [stretchToLifetime?: boolean, frameWidth?: number, sprite?: $ResourceLocation_, frameTime?: number, frameHeight?: number, frameCount?: number, ];
}
