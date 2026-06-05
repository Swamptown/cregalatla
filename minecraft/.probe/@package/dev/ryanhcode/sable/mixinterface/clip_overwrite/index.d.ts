import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Pose3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Function_ } from "@package/it/unimi/dsi/fastutil";

declare module "@package/dev/ryanhcode/sable/mixinterface/clip_overwrite" {
    export class $LevelPoseProviderExtension {
    }
    export interface $LevelPoseProviderExtension {
        sable$getPose(arg0: $SubLevel): $Pose3dc;
        sable$pushPoseSupplier(arg0: $Function_<$SubLevel, $Pose3dc>): void;
        sable$popPoseSupplier(): void;
    }
    export class $ClipContextExtension {
    }
    export interface $ClipContextExtension {
        sable$setIgnoreMainLevel(arg0: boolean): void;
        sable$setSubLevelIgnoring(arg0: $Predicate_<$SubLevel>): void;
        sable$setIgnoredSubLevel(arg0: $SubLevel): void;
        sable$doNotProject(): boolean;
        sable$getIgnoredSubLevel(): $SubLevel;
        sable$getSubLevelIgnoring(): $Predicate<$SubLevel>;
        sable$isIgnoreMainLevel(): boolean;
        sable$setDoNotProject(arg0: boolean): void;
    }
}
