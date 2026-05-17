import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $SpriteData, $RenderStyle, $RenderStyle_, $SpriteData_ } from "@package/foundry/veil/api/quasar/particle";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParticleModuleData } from "@package/foundry/veil/api/quasar/data/module";
import { $List, $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $EmitterShape_, $EmitterShape } from "@package/foundry/veil/api/quasar/emitters/shape";
import { $Vector3dc, $Vector3fc, $Vector3d, $Vector3f } from "@package/org/joml";
import { $RandomSource } from "@package/net/minecraft/util";
export * as module from "@package/foundry/veil/api/quasar/data/module";

declare module "@package/foundry/veil/api/quasar/data" {
    export class $QuasarParticleData extends $Record {
        faceVelocity(): boolean;
        velocityStretchFactor(): number;
        initModules(): $List<$Holder<$ParticleModuleData>>;
        updateModules(): $List<$Holder<$ParticleModuleData>>;
        collisionModules(): $List<$Holder<$ParticleModuleData>>;
        forceModules(): $List<$Holder<$ParticleModuleData>>;
        renderModules(): $List<$Holder<$ParticleModuleData>>;
        renderStyle(): $RenderStyle;
        getAllModules(): $List<$Holder<$ParticleModuleData>>;
        getRegistryId(): $ResourceLocation;
        additive(): boolean;
        spriteData(): $SpriteData;
        shouldCollide(): boolean;
        static CODEC: $Codec<$Holder<$QuasarParticleData>>;
        static DIRECT_CODEC: $Codec<$QuasarParticleData>;
        constructor(shouldCollide: boolean, faceVelocity: boolean, velocityStretchFactor: number, initModules: $List_<$Holder_<$ParticleModuleData>>, updateModules: $List_<$Holder_<$ParticleModuleData>>, collisionModules: $List_<$Holder_<$ParticleModuleData>>, forceModules: $List_<$Holder_<$ParticleModuleData>>, renderModules: $List_<$Holder_<$ParticleModuleData>>, spriteData: $SpriteData_, additive: boolean, renderStyle: $RenderStyle_);
        get allModules(): $List<$Holder<$ParticleModuleData>>;
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $QuasarParticleData}.
     */
    export type $QuasarParticleData_ = { collisionModules?: $List_<$Holder_<$ParticleModuleData>>, shouldCollide?: boolean, initModules?: $List_<$Holder_<$ParticleModuleData>>, forceModules?: $List_<$Holder_<$ParticleModuleData>>, velocityStretchFactor?: number, updateModules?: $List_<$Holder_<$ParticleModuleData>>, spriteData?: $SpriteData_, faceVelocity?: boolean, renderModules?: $List_<$Holder_<$ParticleModuleData>>, additive?: boolean, renderStyle?: $RenderStyle_,  } | [collisionModules?: $List_<$Holder_<$ParticleModuleData>>, shouldCollide?: boolean, initModules?: $List_<$Holder_<$ParticleModuleData>>, forceModules?: $List_<$Holder_<$ParticleModuleData>>, velocityStretchFactor?: number, updateModules?: $List_<$Holder_<$ParticleModuleData>>, spriteData?: $SpriteData_, faceVelocity?: boolean, renderModules?: $List_<$Holder_<$ParticleModuleData>>, additive?: boolean, renderStyle?: $RenderStyle_, ];
    export class $EmitterShapeSettings extends $Record {
        dimensions(): $Vector3fc;
        shape(): $EmitterShape;
        getRegistryId(): $ResourceLocation;
        fromSurface(): boolean;
        rotation(): $Vector3fc;
        getPos(arg0: $RandomSource, arg1: $Vector3dc): $Vector3d;
        static CODEC: $Codec<$Holder<$EmitterShapeSettings>>;
        static DIRECT_CODEC: $Codec<$EmitterShapeSettings>;
        constructor(shape: $EmitterShape_, dimensions: $Vector3fc, rotation: $Vector3fc, fromSurface: boolean);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $EmitterShapeSettings}.
     */
    export type $EmitterShapeSettings_ = { fromSurface?: boolean, dimensions?: $Vector3fc, rotation?: $Vector3fc, shape?: $EmitterShape_,  } | [fromSurface?: boolean, dimensions?: $Vector3fc, rotation?: $Vector3fc, shape?: $EmitterShape_, ];
    export class $ParticleEmitterData extends $Record {
        count(): number;
        loop(): boolean;
        getRegistryId(): $ResourceLocation;
        maxLifetime(): number;
        maxParticles(): number;
        emitterSettings(): $EmitterSettings;
        particleDataHolder(): $Holder<$QuasarParticleData>;
        particleData(): $QuasarParticleData;
        rate(): number;
        static CODEC: $Codec<$Holder<$ParticleEmitterData>>;
        static DIRECT_CODEC: $Codec<$ParticleEmitterData>;
        constructor(maxLifetime: number, loop: boolean, rate: number, count: number, maxParticles: number, emitterSettings: $EmitterSettings_, particleDataHolder: $Holder_<$QuasarParticleData>);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEmitterData}.
     */
    export type $ParticleEmitterData_ = { loop?: boolean, particleDataHolder?: $Holder_<$QuasarParticleData>, maxParticles?: number, count?: number, emitterSettings?: $EmitterSettings_, maxLifetime?: number, rate?: number,  } | [loop?: boolean, particleDataHolder?: $Holder_<$QuasarParticleData>, maxParticles?: number, count?: number, emitterSettings?: $EmitterSettings_, maxLifetime?: number, rate?: number, ];
    export class $ParticleSettings extends $Record {
        initialDirection(): $Vector3fc;
        initialDirection(arg0: $RandomSource): $Vector3fc;
        particleDirection(arg0: $RandomSource): $Vector3f;
        particleSpeed(arg0: $RandomSource): number;
        particleSpeed(): number;
        particleSize(): number;
        particleSize(arg0: $RandomSource): number;
        particleSizeVariation(): number;
        particleLifetime(arg0: $RandomSource): number;
        particleLifetime(): number;
        particleLifetimeVariation(): number;
        randomInitialDirection(): boolean;
        randomInitialRotation(): boolean;
        randomSpeed(): boolean;
        randomSize(): boolean;
        randomLifetime(): boolean;
        getRegistryId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$ParticleSettings>>;
        static DIRECT_CODEC: $Codec<$ParticleSettings>;
        constructor(particleSpeed: number, particleSize: number, particleSizeVariation: number, particleLifetime: number, particleLifetimeVariation: number, initialDirection: $Vector3fc, randomInitialDirection: boolean, randomInitialRotation: boolean, randomSpeed: boolean, randomSize: boolean, randomLifetime: boolean);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ParticleSettings}.
     */
    export type $ParticleSettings_ = { particleSpeed?: number, particleSizeVariation?: number, randomInitialRotation?: boolean, randomLifetime?: boolean, particleLifetime?: number, particleLifetimeVariation?: number, randomInitialDirection?: boolean, particleSize?: number, randomSize?: boolean, initialDirection?: $Vector3fc, randomSpeed?: boolean,  } | [particleSpeed?: number, particleSizeVariation?: number, randomInitialRotation?: boolean, randomLifetime?: boolean, particleLifetime?: number, particleLifetimeVariation?: number, randomInitialDirection?: boolean, particleSize?: number, randomSize?: boolean, initialDirection?: $Vector3fc, randomSpeed?: boolean, ];
    export class $EmitterSettings extends $Record {
        forceSpawn(): boolean;
        particleSettingsHolder(): $Holder<$ParticleSettings>;
        emitterShapeSettingsHolders(): $List<$Holder<$EmitterShapeSettings>>;
        emitterShapeSettings(): $List<$EmitterShapeSettings>;
        particleSettings(): $ParticleSettings;
        static CODEC: $Codec<$EmitterSettings>;
        constructor(emitterShapeSettingsHolders: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder: $Holder_<$ParticleSettings>, forceSpawn: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EmitterSettings}.
     */
    export type $EmitterSettings_ = { particleSettingsHolder?: $Holder_<$ParticleSettings>, emitterShapeSettingsHolders?: $List_<$Holder_<$EmitterShapeSettings>>, forceSpawn?: boolean,  } | [particleSettingsHolder?: $Holder_<$ParticleSettings>, emitterShapeSettingsHolders?: $List_<$Holder_<$EmitterShapeSettings>>, forceSpawn?: boolean, ];
}
