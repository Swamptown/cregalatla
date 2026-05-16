import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $LevelSimulatedReader } from "@package/net/minecraft/world/level";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $BlockStateProvider } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $List } from "@package/java/util";
import { $Products$P3 } from "@package/com/mojang/datafixers";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BiConsumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction_, $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/levelgen/feature/rootplacers" {
    export class $RootPlacer {
        type(): $RootPlacerType<never>;
        static rootPlacerParts<P extends $RootPlacer>(arg0: $RecordCodecBuilder$Instance<P>): $Products$P3<$RecordCodecBuilder$Mu<P>, $IntProvider, $BlockStateProvider, ($AboveRootPlacement) | undefined>;
        canPlaceRoot(arg0: $LevelSimulatedReader, arg1: $BlockPos_): boolean;
        placeRoot(arg0: $LevelSimulatedReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $BlockPos_, arg4: $TreeConfiguration): void;
        getPotentiallyWaterloggedState(arg0: $LevelSimulatedReader, arg1: $BlockPos_, arg2: $BlockState_): $BlockState;
        placeRoots(arg0: $LevelSimulatedReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $BlockPos_, arg4: $BlockPos_, arg5: $TreeConfiguration): boolean;
        getTrunkOrigin(arg0: $BlockPos_, arg1: $RandomSource): $BlockPos;
        static CODEC: $Codec<$RootPlacer>;
        aboveRootPlacement: ($AboveRootPlacement) | undefined;
        trunkOffsetY: $IntProvider;
        rootProvider: $BlockStateProvider;
        constructor(arg0: $IntProvider_, arg1: $BlockStateProvider, arg2: ($AboveRootPlacement_) | undefined);
    }
    export class $AboveRootPlacement extends $Record {
        aboveRootPlacementChance(): number;
        aboveRootProvider(): $BlockStateProvider;
        static CODEC: $Codec<$AboveRootPlacement>;
        constructor(arg0: $BlockStateProvider, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $AboveRootPlacement}.
     */
    export type $AboveRootPlacement_ = { aboveRootProvider?: $BlockStateProvider, aboveRootPlacementChance?: number,  } | [aboveRootProvider?: $BlockStateProvider, aboveRootPlacementChance?: number, ];
    export interface $RootPlacerType<P> extends RegistryMarked<RegistryTypes.WorldgenRootPlacerTypeTag, RegistryTypes.WorldgenRootPlacerType> {}
    export class $MangroveRootPlacement extends $Record {
        maxRootLength(): number;
        maxRootWidth(): number;
        randomSkewChance(): number;
        muddyRootsProvider(): $BlockStateProvider;
        muddyRootsIn(): $HolderSet<$Block>;
        canGrowThrough(): $HolderSet<$Block>;
        static CODEC: $Codec<$MangroveRootPlacement>;
        constructor(arg0: $HolderSet_<$Block>, arg1: $HolderSet_<$Block>, arg2: $BlockStateProvider, arg3: number, arg4: number, arg5: number);
    }
    /**
     * Values that may be interpreted as {@link $MangroveRootPlacement}.
     */
    export type $MangroveRootPlacement_ = { randomSkewChance?: number, maxRootWidth?: number, maxRootLength?: number, canGrowThrough?: $HolderSet_<$Block>, muddyRootsIn?: $HolderSet_<$Block>, muddyRootsProvider?: $BlockStateProvider,  } | [randomSkewChance?: number, maxRootWidth?: number, maxRootLength?: number, canGrowThrough?: $HolderSet_<$Block>, muddyRootsIn?: $HolderSet_<$Block>, muddyRootsProvider?: $BlockStateProvider, ];
    export class $MangroveRootPlacer extends $RootPlacer {
        potentialRootPositions(arg0: $BlockPos_, arg1: $Direction_, arg2: $RandomSource, arg3: $BlockPos_): $List<$BlockPos>;
        static CODEC: $MapCodec<$MangroveRootPlacer>;
        static ROOT_WIDTH_LIMIT: number;
        aboveRootPlacement: ($AboveRootPlacement) | undefined;
        trunkOffsetY: $IntProvider;
        static ROOT_LENGTH_LIMIT: number;
        rootProvider: $BlockStateProvider;
        constructor(arg0: $IntProvider_, arg1: $BlockStateProvider, arg2: ($AboveRootPlacement_) | undefined, arg3: $MangroveRootPlacement_);
    }
    export class $RootPlacerType<P extends $RootPlacer> {
        codec(): $MapCodec<P>;
        static MANGROVE_ROOT_PLACER: $RootPlacerType<$MangroveRootPlacer>;
        constructor(arg0: $MapCodec_<P>);
    }
    /**
     * Values that may be interpreted as {@link $RootPlacerType}.
     */
    export type $RootPlacerType_<P> = RegistryTypes.WorldgenRootPlacerType;
}
