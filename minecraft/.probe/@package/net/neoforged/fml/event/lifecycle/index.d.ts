import { $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Stream } from "@package/java/util/stream";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Runnable_ } from "@package/java/lang";
import { $ModContainer, $DeferredWorkQueue, $InterModComms$IMCMessage } from "@package/net/neoforged/fml";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/fml/event/lifecycle" {
    export class $ModLifecycleEvent extends $Event implements $IModBusEvent {
        getIMCStream(): $Stream<$InterModComms$IMCMessage>;
        getIMCStream(arg0: $Predicate_<string>): $Stream<$InterModComms$IMCMessage>;
        description(): string;
        constructor(arg0: $ModContainer);
    }
    export class $FMLClientSetupEvent extends $ParallelDispatchEvent {
        constructor(arg0: $ModContainer, arg1: $DeferredWorkQueue);
    }
    export class $FMLCommonSetupEvent extends $ParallelDispatchEvent {
        constructor(arg0: $ModContainer, arg1: $DeferredWorkQueue);
    }
    export class $FMLLoadCompleteEvent extends $ParallelDispatchEvent {
        constructor(arg0: $ModContainer, arg1: $DeferredWorkQueue);
    }
    export class $ParallelDispatchEvent extends $ModLifecycleEvent {
        enqueueWork(arg0: $Runnable_): $CompletableFuture<void>;
        enqueueWork<T>(arg0: $Supplier_<T>): $CompletableFuture<T>;
        constructor(arg0: $ModContainer, arg1: $DeferredWorkQueue);
    }
}
