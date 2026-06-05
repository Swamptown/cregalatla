import { $Path_ } from "@package/java/nio/file";

declare module "@package/xaero/common/config" {
    export class $LegacyCommonConfigIO {
        shouldEnableEveryoneTracksEveryone(): boolean;
        load(): void;
        constructor(arg0: $Path_);
    }
}
