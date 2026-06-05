import { $Consumer_ } from "@package/java/util/function";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $CancellationToken } from "@package/net/caffeinemc/mods/sodium/client/util/task";
import { $ChunkBuildContext, $BuilderTaskOutput } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
import { $ChunkVertexType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/format";
import { $Throwable } from "@package/java/lang";
import { $ChunkBuilderTask } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor" {
    export class $ChunkJob {
    }
    export interface $ChunkJob extends $CancellationToken {
        getEffort(): number;
        execute(arg0: $ChunkBuildContext): void;
        isStarted(): boolean;
        get effort(): number;
        get started(): boolean;
    }
    export class $ChunkJobTyped<TASK extends $ChunkBuilderTask<OUTPUT>, OUTPUT extends $BuilderTaskOutput> implements $ChunkJob {
        getEffort(): number;
        setCancelled(): void;
        isCancelled(): boolean;
        execute(arg0: $ChunkBuildContext): void;
        isStarted(): boolean;
        get effort(): number;
        get started(): boolean;
    }
    export class $ChunkJobResult<OUTPUT> {
        static successfully<OUTPUT>(arg0: OUTPUT): $ChunkJobResult<OUTPUT>;
        static exceptionally<OUTPUT>(arg0: $Throwable): $ChunkJobResult<OUTPUT>;
        unwrap(): OUTPUT;
    }
    export class $ChunkBuilder {
        getLowEffortSchedulingBudget(): number;
        scheduleTask<TASK extends $ChunkBuilderTask<OUTPUT>, OUTPUT extends $BuilderTaskOutput>(arg0: TASK, arg1: boolean, arg2: $Consumer_<$ChunkJobResult<OUTPUT>>): $ChunkJobTyped<TASK, OUTPUT>;
        getScheduledJobCount(): number;
        getScheduledEffort(): number;
        getBusyThreadCount(): number;
        getHighEffortSchedulingBudget(): number;
        isBuildQueueEmpty(): boolean;
        tryStealTask(arg0: $ChunkJob): void;
        getTotalThreadCount(): number;
        shutdown(): void;
        static EFFORT_PER_THREAD_PER_FRAME: number;
        static HIGH_EFFORT: number;
        static LOW_EFFORT: number;
        constructor(arg0: $ClientLevel, arg1: $ChunkVertexType);
        get lowEffortSchedulingBudget(): number;
        get scheduledJobCount(): number;
        get scheduledEffort(): number;
        get busyThreadCount(): number;
        get highEffortSchedulingBudget(): number;
        get buildQueueEmpty(): boolean;
        get totalThreadCount(): number;
    }
}
