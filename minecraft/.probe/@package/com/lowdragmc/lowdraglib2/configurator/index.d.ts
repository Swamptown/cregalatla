import { $Consumer_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $Runnable_ } from "@package/java/lang";
import { $ConfiguratorGroup, $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
export * as ui from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
export * as annotation from "@package/com/lowdragmc/lowdraglib2/configurator/annotation";

declare module "@package/com/lowdragmc/lowdraglib2/configurator" {
    export class $SerializableRecordAction<T extends $INBTSerializable<never>> implements $EditAction {
        setOnAction(arg0: $Consumer_<T>): $SerializableRecordAction<T>;
        updateSnapshot(): void;
        setOnExecute(arg0: $Consumer_<T>): $SerializableRecordAction<T>;
        setOnUndo(arg0: $Consumer_<T>): $SerializableRecordAction<T>;
        static of<T extends $INBTSerializable<never>>(arg0: T): $SerializableRecordAction<T>;
        execute(): void;
        undo(): void;
        mergeExecuteAfter(arg0: $EditAction): $EditAction;
        mergeExecuteBefore(arg0: $EditAction): $EditAction;
        serializable: T;
        set onAction(value: $Consumer_<T>);
        set onExecute(value: $Consumer_<T>);
        set onUndo(value: $Consumer_<T>);
    }
    export class $IConfigurable {
        static create(arg0: $Consumer_<$ConfiguratorGroup>): $IConfigurable;
    }
    export interface $IConfigurable {
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        get configurableName(): string;
    }
    export class $EditAction {
        static of(arg0: $Runnable_, arg1: $Runnable_): $EditAction;
    }
    export interface $EditAction {
        mergeExecuteAfter(arg0: $EditAction): $EditAction;
        mergeExecuteBefore(arg0: $EditAction): $EditAction;
        execute(): void;
        undo(): void;
    }
}
