import { $Event } from "@package/net/neoforged/bus/api";
import { $PayloadRegistrar } from "@package/net/neoforged/neoforge/network/registration";
import { $ConfigurationTask } from "@package/net/minecraft/server/network";
import { $Queue } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $ServerConfigurationPacketListener } from "@package/net/minecraft/network/protocol/configuration";

declare module "@package/net/neoforged/neoforge/network/event" {
    export class $RegisterConfigurationTasksEvent extends $Event implements $IModBusEvent {
        register(arg0: $ConfigurationTask): void;
        getConfigurationTasks(): $Queue<$ConfigurationTask>;
        getListener(): $ServerConfigurationPacketListener;
        constructor(arg0: $ServerConfigurationPacketListener);
        get configurationTasks(): $Queue<$ConfigurationTask>;
        get listener(): $ServerConfigurationPacketListener;
    }
    export class $RegisterPayloadHandlersEvent extends $Event implements $IModBusEvent {
        registrar(arg0: string): $PayloadRegistrar;
        constructor();
    }
}
