import { $MountedStorageManager } from "@package/com/simibubi/create/content/contraptions";

declare module "@package/com/simibubi/create/content/contraptions/minecart" {
    export class $TrainCargoManager extends $MountedStorageManager {
        getTicksSinceLastExchange(): number;
        resetIdleCargoTracker(): void;
        tickIdleCargoTracker(): void;
        getVersion(): number;
        constructor();
        get ticksSinceLastExchange(): number;
        get version(): number;
    }
}
