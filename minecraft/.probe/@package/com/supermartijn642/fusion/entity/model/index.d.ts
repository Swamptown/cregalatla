import { $Triple } from "@package/com/supermartijn642/fusion/util";
import { $Consumer_ } from "@package/java/util/function";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $ModelPart, $ModelLayerLocation, $PartPose, $ModelPart$Cube } from "@package/net/minecraft/client/model/geom";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntityModelPredicate } from "@package/com/supermartijn642/fusion/entity/model/predicates";
import { $VanillaModelLayerProperties } from "@package/com/supermartijn642/fusion/entity";
import { $List, $List_, $Map } from "@package/java/util";
import { $Pair } from "@package/com/supermartijn642/fusion/api/util";
import { $RandomSource } from "@package/net/minecraft/util";
export * as predicates from "@package/com/supermartijn642/fusion/entity/model/predicates";

declare module "@package/com/supermartijn642/fusion/entity/model" {
    export class $EntityLayerProperties$ModelOption {
        isVanillaModel(): boolean;
        textures(): $List<$ResourceLocation>;
        model(): $ModelPart;
        weight(): number;
        scaling(): number;
        constructor(model: $ModelPart, isVanillaModel: boolean, textures: $List_<$ResourceLocation_>, weight: number, scaling: number);
        get vanillaModel(): boolean;
    }
    export class $EntityLayerProperties {
        chooseModel(entity: $Entity): $Triple<$ModelPart, $ResourceLocation, number>;
        gatherModels(output: $Consumer_<$ModelPart>): void;
        identifier(): $ModelLayerLocation;
        transformed(properties: $VanillaModelLayerProperties): $EntityLayerProperties;
        static RANDOM: $RandomSource;
        constructor(identifier: $ModelLayerLocation, defaultModel: $List_<$EntityLayerProperties$ModelOption>, conditionals: $List_<$Pair<$EntityModelPredicate, $List_<$EntityLayerProperties$ModelOption>>>);
    }
    export class $FusionModelPart extends $SubModelPart {
        renderPart(part: $SubModelPart, poseStack: $PoseStack, vertexConsumer: $VertexConsumer, i: number, j: number, k: number): void;
        clear(): void;
        setup(entity: $Entity, bufferSource: $MultiBufferSource_): void;
        setProperties(properties: $EntityLayerProperties, vanillaProperties: $VanillaModelLayerProperties): void;
        visible: boolean;
        static DEFAULT_SCALE: number;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        children: $Map<string, $ModelPart>;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        initialPose: $PartPose;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        zScale: number;
        constructor(layerIndex: number, original: $ModelPart);
    }
    export class $SubModelPart extends $ModelPart {
        validateModelHasImportantChildren(model: $ModelPart, missingPartOutput: $Consumer_<string>): void;
        finish(): void;
        mirror(target: $ModelPart): void;
        visible: boolean;
        static DEFAULT_SCALE: number;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        children: $Map<string, $ModelPart>;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        initialPose: $PartPose;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        zScale: number;
        constructor(mainPart: $FusionModelPart);
    }
}
