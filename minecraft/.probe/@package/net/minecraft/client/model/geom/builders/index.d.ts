import { $Direction_ } from "@package/net/minecraft/core";
import { $ModelPart, $PartPose, $ModelPart$Cube } from "@package/net/minecraft/client/model/geom";
import { $Set_, $List, $List_, $Map } from "@package/java/util";

declare module "@package/net/minecraft/client/model/geom/builders" {
    export class $CubeDefinition {
        bake(arg0: number, arg1: number): $ModelPart$Cube;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $CubeDeformation, arg10: boolean, arg11: number, arg12: number, arg13: $Set_<$Direction_>);
    }
    export class $CubeDeformation {
        extend(arg0: number, arg1: number, arg2: number): $CubeDeformation;
        extend(arg0: number): $CubeDeformation;
        growX: number;
        growY: number;
        growZ: number;
        static NONE: $CubeDeformation;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number);
    }
    export class $PartDefinition {
        addOrReplaceChild(arg0: string, arg1: $CubeListBuilder, arg2: $PartPose): $PartDefinition;
        getChild(arg0: string): $PartDefinition;
        bake(arg0: number, arg1: number): $ModelPart;
        children: $Map<string, $PartDefinition>;
        constructor(arg0: $List_<$CubeDefinition>, arg1: $PartPose);
    }
    export class $LayerDefinition {
        bakeRoot(): $ModelPart;
        static create(arg0: $MeshDefinition, arg1: number, arg2: number): $LayerDefinition;
        constructor(arg0: $MeshDefinition, arg1: $MaterialDefinition);
    }
    export class $CubeListBuilder {
        getCubes(): $List<$CubeDefinition>;
        texOffs(arg0: number, arg1: number): $CubeListBuilder;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Set_<$Direction_>): $CubeListBuilder;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CubeDeformation, arg7: number, arg8: number): $CubeListBuilder;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $CubeListBuilder;
        addBox(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $CubeDeformation): $CubeListBuilder;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): $CubeListBuilder;
        addBox(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $CubeListBuilder;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CubeDeformation): $CubeListBuilder;
        addBox(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $CubeDeformation, arg8: number, arg9: number): $CubeListBuilder;
        addBox(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): $CubeListBuilder;
        static create(): $CubeListBuilder;
        mirror(arg0: boolean): $CubeListBuilder;
        mirror(): $CubeListBuilder;
        constructor();
        get cubes(): $List<$CubeDefinition>;
    }
    export class $MaterialDefinition {
        xTexSize: number;
        yTexSize: number;
        constructor(arg0: number, arg1: number);
    }
    export class $MeshDefinition {
        getRoot(): $PartDefinition;
        constructor();
        get root(): $PartDefinition;
    }
    export class $UVPair {
        v(): number;
        u(): number;
        constructor(arg0: number, arg1: number);
    }
}
