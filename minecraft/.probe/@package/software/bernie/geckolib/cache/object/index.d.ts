import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ModelProperties, $ModelProperties_, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $List, $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix3f, $Vector3d, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        topLevelBones(): $List<$GeoBone>;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        getBone(arg0: string): ($GeoBone) | undefined;
        properties(): $ModelProperties;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { properties?: $ModelProperties_, topLevelBones?: $List_<$GeoBone>,  } | [properties?: $ModelProperties_, topLevelBones?: $List_<$GeoBone>, ];
    export class $GeoBone {
        getScaleX(): number;
        getScaleY(): number;
        getScaleZ(): number;
        getPosZ(): number;
        getRotZ(): number;
        getChildBones(): $List<$GeoBone>;
        getLocalPosition(): $Vector3d;
        setRotZ(arg0: number): void;
        setPosZ(arg0: number): void;
        setScaleX(arg0: number): void;
        setScaleY(arg0: number): void;
        setScaleZ(arg0: number): void;
        getCubes(): $List<$GeoCube>;
        getPositionVector(): $Vector3d;
        getScaleVector(): $Vector3d;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        markRotationAsChanged(): void;
        markPositionAsChanged(): void;
        markScaleAsChanged(): void;
        hasRotationChanged(): boolean;
        hasPositionChanged(): boolean;
        hasScaleChanged(): boolean;
        saveInitialSnapshot(): void;
        resetStateChanges(): void;
        getInitialSnapshot(): $BoneSnapshot;
        setChildrenHidden(arg0: boolean): void;
        setPivotX(arg0: number): void;
        setPivotY(arg0: number): void;
        setPivotZ(arg0: number): void;
        setTrackingMatrices(arg0: boolean): void;
        getLocalSpaceMatrix(): $Matrix4f;
        getModelSpaceMatrix(): $Matrix4f;
        getWorldSpaceMatrix(): $Matrix4f;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        getPivotX(): number;
        getPivotY(): number;
        getPivotZ(): number;
        isHidingChildren(): boolean;
        getInflate(): number;
        shouldNeverRender(): boolean;
        getReset(): boolean;
        isTrackingMatrices(): boolean;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        getWorldSpaceNormal(): $Matrix3f;
        getModelPosition(): $Vector3d;
        setModelPosition(arg0: $Vector3d): void;
        getModelRotationMatrix(): $Matrix4f;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        setPosX(arg0: number): void;
        getPosX(): number;
        setPosY(arg0: number): void;
        getPosY(): number;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getWorldPosition(): $Vector3d;
        getRotY(): number;
        setRotY(arg0: number): void;
        getRotX(): number;
        setRotX(arg0: number): void;
        setHidden(arg0: boolean): void;
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        getMirror(): boolean;
        getRotationVector(): $Vector3d;
        saveSnapshot(): $BoneSnapshot;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get childBones(): $List<$GeoBone>;
        get localPosition(): $Vector3d;
        get cubes(): $List<$GeoCube>;
        get positionVector(): $Vector3d;
        get scaleVector(): $Vector3d;
        get initialSnapshot(): $BoneSnapshot;
        set childrenHidden(value: boolean);
        get hidingChildren(): boolean;
        get inflate(): number;
        get reset(): boolean;
        get modelRotationMatrix(): $Matrix4f;
        get worldPosition(): $Vector3d;
        get name(): string;
        get parent(): $GeoBone;
        get mirror(): boolean;
        get rotationVector(): $Vector3d;
    }
    export class $GeoQuad extends $Record {
        vertices(): $GeoVertex[];
        normal(): $Vector3f;
        direction(): $Direction;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $GeoQuad}.
     */
    export type $GeoQuad_ = { normal?: $Vector3f, direction?: $Direction_, vertices?: $GeoVertex_[],  } | [normal?: $Vector3f, direction?: $Direction_, vertices?: $GeoVertex_[], ];
    export class $GeoCube extends $Record {
        quads(): $GeoQuad[];
        size(): $Vec3;
        inflate(): number;
        pivot(): $Vec3;
        mirror(): boolean;
        rotation(): $Vec3;
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { rotation?: $Vec3_, quads?: $GeoQuad_[], pivot?: $Vec3_, mirror?: boolean, inflate?: number, size?: $Vec3_,  } | [rotation?: $Vec3_, quads?: $GeoQuad_[], pivot?: $Vec3_, mirror?: boolean, inflate?: number, size?: $Vec3_, ];
    export class $GeoVertex extends $Record {
        withUVs(arg0: number, arg1: number): $GeoVertex;
        texU(): number;
        texV(): number;
        position(): $Vector3f;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
    /**
     * Values that may be interpreted as {@link $GeoVertex}.
     */
    export type $GeoVertex_ = { texV?: number, position?: $Vector3f, texU?: number,  } | [texV?: number, position?: $Vector3f, texU?: number, ];
}
