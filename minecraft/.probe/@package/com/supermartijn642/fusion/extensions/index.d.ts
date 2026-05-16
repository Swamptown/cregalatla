import { $Triple, $Triple_ } from "@package/com/supermartijn642/fusion/util";
import { $TextureType } from "@package/com/supermartijn642/fusion/api/texture";
import { $FusionModelPart } from "@package/com/supermartijn642/fusion/entity/model";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $FusionPackMetadata } from "@package/com/supermartijn642/fusion/resources";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelInstance } from "@package/com/supermartijn642/fusion/api/model";
import { $Object } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Pair } from "@package/com/supermartijn642/fusion/api/util";

declare module "@package/com/supermartijn642/fusion/extensions" {
    export class $PackResourcesExtension {
    }
    export interface $PackResourcesExtension {
        setFusionOverridesFolder(folder: string): void;
        set fusionOverridesFolder(value: string);
    }
    /**
     * Values that may be interpreted as {@link $PackResourcesExtension}.
     */
    export type $PackResourcesExtension_ = ((folder: string) => void);
    export class $EntityRendererExtension {
    }
    export interface $EntityRendererExtension {
        getFusionModelParts(): $List<$FusionModelPart>;
        setFusionModelParts(parts: $List_<$FusionModelPart>): void;
    }
    export class $EntityExtension {
    }
    export interface $EntityExtension {
        getFusionModel(layerIndex: number): $Triple<$ModelPart, $ResourceLocation, number>;
        setFusionModel(layerIndex: number, model: $Triple_<$ModelPart, $ResourceLocation_, number>): void;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        markFusionRecomputeModels(): void;
    }
    export class $BlockModelExtension {
    }
    export interface $BlockModelExtension {
        getFusionModel(): $ModelInstance<never>;
        setFusionModel(model: $ModelInstance<never>): void;
    }
    export class $PackExtension {
    }
    export interface $PackExtension {
        getFusionMetadata(): $FusionPackMetadata;
        get fusionMetadata(): $FusionPackMetadata;
    }
    /**
     * Values that may be interpreted as {@link $PackExtension}.
     */
    export type $PackExtension_ = (() => $FusionPackMetadata);
    export class $TextureAtlasSpriteExtension {
    }
    export interface $TextureAtlasSpriteExtension {
        setFusionTextureType(type: $TextureType<never>): void;
        getFusionTextureType(): $TextureType<never>;
    }
    export class $BufferSourceExtension {
    }
    export interface $BufferSourceExtension {
        fusionGetLastRenderType(): $RenderType;
    }
    /**
     * Values that may be interpreted as {@link $BufferSourceExtension}.
     */
    export type $BufferSourceExtension_ = (() => $RenderType);
    export class $SpriteContentsExtension {
    }
    export interface $SpriteContentsExtension {
        fusionTextureMetadata(): $Pair<$TextureType<$Object>, $Object>;
        clearFusionTextureMetadata(): void;
    }
}
