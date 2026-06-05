import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $OffsetProvider, $OffsetProvider_, $SkullData, $Mesh, $PlayerData } from "@package/dev/tr7zw/skinlayers/api";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";

declare module "@package/dev/tr7zw/skinlayers/accessor" {
    export class $NativeImageAccessor {
    }
    export interface $NativeImageAccessor {
        skinlayers$isAllocated(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NativeImageAccessor}.
     */
    export type $NativeImageAccessor_ = (() => boolean);
    export class $SkullModelAccessor {
    }
    export interface $SkullModelAccessor {
        injectHatMesh(arg0: $Mesh): void;
    }
    /**
     * Values that may be interpreted as {@link $SkullModelAccessor}.
     */
    export type $SkullModelAccessor_ = ((arg0: $Mesh) => void);
    export class $HttpTextureAccessor {
    }
    export interface $HttpTextureAccessor {
        getImage(): $NativeImage;
        get image(): $NativeImage;
    }
    /**
     * Values that may be interpreted as {@link $HttpTextureAccessor}.
     */
    export type $HttpTextureAccessor_ = (() => $NativeImage);
    export class $PlayerSettings {
    }
    export interface $PlayerSettings extends $PlayerData {
        setHeadMesh(arg0: $Mesh): void;
        setTorsoMesh(arg0: $Mesh): void;
        setLeftArmMesh(arg0: $Mesh): void;
        setRightArmMesh(arg0: $Mesh): void;
        setLeftLegMesh(arg0: $Mesh): void;
        setRightLegMesh(arg0: $Mesh): void;
        getCurrentSkin(): $ResourceLocation;
        setCurrentSkin(arg0: $ResourceLocation_): void;
        hasThinArms(): boolean;
        setThinArms(arg0: boolean): void;
        clearMeshes(): void;
        set headMesh(value: $Mesh);
        set torsoMesh(value: $Mesh);
        set leftArmMesh(value: $Mesh);
        set rightArmMesh(value: $Mesh);
        set leftLegMesh(value: $Mesh);
        set rightLegMesh(value: $Mesh);
        set thinArms(value: boolean);
    }
    export class $ModelPartInjector {
    }
    export interface $ModelPartInjector {
        setInjectedMesh(arg0: $Mesh, arg1: $OffsetProvider_): void;
        prepareTranslateAndRotate(arg0: $PoseStack): void;
        getInjectedMesh(): $Mesh;
        getOffsetProvider(): $OffsetProvider;
        isVisible(): boolean;
        get offsetProvider(): $OffsetProvider;
        get visible(): boolean;
    }
    export class $PlayerEntityModelAccessor {
    }
    export interface $PlayerEntityModelAccessor {
        setIgnored(arg0: boolean): void;
        hasThinArms(): boolean;
        set ignored(value: boolean);
    }
    export class $SkullSettings {
    }
    export interface $SkullSettings extends $SkullData {
        getHeadLayers(): $Mesh;
        setupHeadLayers(arg0: $Mesh): void;
        setLastTexture(arg0: $ResourceLocation_): void;
        getLastTexture(): $ResourceLocation;
        getMesh(): $Mesh;
        initialized(): boolean;
        setInitialized(arg0: boolean): void;
        get headLayers(): $Mesh;
        set upHeadLayers(value: $Mesh);
        get mesh(): $Mesh;
    }
}
