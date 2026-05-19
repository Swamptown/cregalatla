import { $JsonObject } from "@package/com/google/gson";
import { $Function2_ } from "@package/kotlin/jvm/functions";
import { $EmiStack } from "@package/dev/emi/emi/api/stack";
import { $StackGroup } from "@package/concerrox/emixx/content/stackgroup/data";
import { $Path } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
export * as data from "@package/concerrox/emixx/content/stackgroup/data";

declare module "@package/concerrox/emixx/content/stackgroup" {
    export class $EmiGroupStack$StackWrapper {
    }
    export class $EmiGroupStack$ShadowDropCompat {
    }
    export class $GroupedEmiStack<T extends $EmiStack> extends $EmiStack {
        getRealStack(): T;
        getStackGroup(): $StackGroup;
        copy(): $EmiStack;
        static EMPTY: $EmiStack;
        constructor(realStack: T, stackGroup: $StackGroup);
        get realStack(): T;
        get stackGroup(): $StackGroup;
    }
    export class $EmiGroupStack extends $EmiStack {
        setExpanded(<set-?>: boolean): void;
        getItemsNew$emixx_common(): $List<$GroupedEmiStack<$EmiStack>>;
        setItemsNew$emixx_common(<set-?>: $List_<$GroupedEmiStack<$EmiStack>>): void;
        getItems(): $List<$GroupedEmiStack<$EmiStack>>;
        append(stack: $GroupedEmiStack<$EmiStack>): boolean;
        getGroup(): $StackGroup;
        isExpanded(): boolean;
        copy(): $EmiStack;
        static EMPTY: $EmiStack;
        constructor(group: $StackGroup, itemsNew: $List_<$GroupedEmiStack<$EmiStack>>);
        get items(): $List<$GroupedEmiStack<$EmiStack>>;
        get group(): $StackGroup;
    }
    export class $StackGroupManager {
        hasGroup(tag: $ResourceLocation_): boolean;
        buildGroupedEmiStacksAndStackGroupToContents$emixx_common(source: $List_<$EmiStack>): void;
        getStackGroups$emixx_common(): $List<$StackGroup>;
        getGroupedEmiStacks$emixx_common(): $List<$EmiStack>;
        getGroupToGroupStacks$emixx_common(): $Map<$StackGroup, $EmiGroupStack>;
        setGroupToGroupStacks$emixx_common(<set-?>: $Map_<$StackGroup, $EmiGroupStack>): void;
        toggleTagGroup(tag: $ResourceLocation_): void;
        appendStacksForMatchingGroups(query: string, results: $List_<$EmiStack>): void;
        getGroupPath(tag: $ResourceLocation_): $Path;
        buildGroupedStacks$emixx_common(source: $List_<$EmiStack>): $List<$EmiStack>;
        reload(): void;
        registerType(type: string, factory: $Function2_<$ResourceLocation, $JsonObject, $StackGroup>): void;
        static INSTANCE: $StackGroupManager;
        get stackGroups$emixx_common(): $List<$StackGroup>;
        get groupedEmiStacks$emixx_common(): $List<$EmiStack>;
    }
}
