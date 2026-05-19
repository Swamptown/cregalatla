import { $JigsawJunction } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ObjectListIterator } from "@package/it/unimi/dsi/fastutil/objects";
import { $EnhancedTerrainAdaptation } from "@package/com/yungnickyoung/minecraft/yungsapi/world/structure/terrainadaptation/adaptations";
import { $Rotation_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/com/yungnickyoung/minecraft/yungsapi/world/structure/terrainadaptation/beardifier" {
    export class $EnhancedJigsawJunction extends $Record {
        pieceTerrainAdaptation(): $EnhancedTerrainAdaptation;
        jigsawJunction(): $JigsawJunction;
        constructor(jigsawJunction: $JigsawJunction, pieceTerrainAdaptation: $EnhancedTerrainAdaptation);
    }
    /**
     * Values that may be interpreted as {@link $EnhancedJigsawJunction}.
     */
    export type $EnhancedJigsawJunction_ = { pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, jigsawJunction?: $JigsawJunction,  } | [pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, jigsawJunction?: $JigsawJunction, ];
    export class $EnhancedBeardifierRigid extends $Record {
        pieceBoundingBox(): $BoundingBox;
        pieceTerrainAdaptation(): $EnhancedTerrainAdaptation;
        pieceGroundLevelDelta(): number;
        rotation(): $Rotation;
        constructor(pieceBoundingBox: $BoundingBox, pieceTerrainAdaptation: $EnhancedTerrainAdaptation, pieceGroundLevelDelta: number, rotation: $Rotation_);
    }
    /**
     * Values that may be interpreted as {@link $EnhancedBeardifierRigid}.
     */
    export type $EnhancedBeardifierRigid_ = { pieceGroundLevelDelta?: number, rotation?: $Rotation_, pieceBoundingBox?: $BoundingBox, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation,  } | [pieceGroundLevelDelta?: number, rotation?: $Rotation_, pieceBoundingBox?: $BoundingBox, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, ];
    export class $EnhancedBeardifierData {
    }
    export interface $EnhancedBeardifierData {
        getEnhancedPieceIterator(): $ObjectListIterator<$EnhancedBeardifierRigid>;
        setEnhancedPieceIterator(arg0: $ObjectListIterator<$EnhancedBeardifierRigid_>): void;
        getEnhancedJunctionIterator(): $ObjectListIterator<$EnhancedJigsawJunction>;
        setEnhancedJunctionIterator(arg0: $ObjectListIterator<$EnhancedJigsawJunction_>): void;
        getNoiseChunk(): $NoiseChunk;
        setNoiseChunk(arg0: $NoiseChunk): void;
    }
}
