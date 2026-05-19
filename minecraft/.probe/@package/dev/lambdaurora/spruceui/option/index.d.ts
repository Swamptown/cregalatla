import { $Position } from "@package/dev/lambdaurora/spruceui";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Nameable } from "@package/dev/lambdaurora/spruceui/util";
import { $SpruceWidget } from "@package/dev/lambdaurora/spruceui/widget";

declare module "@package/dev/lambdaurora/spruceui/option" {
    export class $SpruceOption implements $Nameable {
        getName(): string;
        getPrefix(): $Component;
        getDisplayText(value: $Component_): $Component;
        getOptionTooltip(): ($Component) | undefined;
        createWidget(arg0: $Position, arg1: number): $SpruceWidget;
        setTooltip(tooltip: $Component_): void;
        key: string;
        constructor(key: string);
        get name(): string;
        get prefix(): $Component;
        get optionTooltip(): ($Component) | undefined;
        set tooltip(value: $Component_);
    }
}
