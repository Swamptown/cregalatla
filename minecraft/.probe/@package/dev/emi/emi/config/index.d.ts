import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $Annotation } from "@package/java/lang/annotation";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Enum } from "@package/java/lang";

declare module "@package/dev/emi/emi/config" {
    export class $EmiConfig$ConfigGroup implements $Annotation {
        value(): string;
    }
    export class $SidebarType extends $Enum<$SidebarType> implements $ConfigEnum, $GlobalMixin {
        static fromName(name: string): $SidebarType;
        getDescription(): $Component;
        getName(): string;
        static values(): $SidebarType[];
        static valueOf(name: string): $SidebarType;
        getText(): $Component;
        static CHESS: $SidebarType;
        static CRAFT_HISTORY: $SidebarType;
        u: number;
        static LOOKUP_HISTORY: $SidebarType;
        v: number;
        static CRAFTABLES: $SidebarType;
        static FAVORITES: $SidebarType;
        static INDEX: $SidebarType;
        static NONE: $SidebarType;
        static EMPTY: $SidebarType;
        get description(): $Component;
        get text(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $SidebarType}.
     */
    export type $SidebarType_ = "none" | "index" | "craftables" | "favorites" | "lookup_history" | "craft_history" | "empty" | "chess";
    export class $ConfigEnum {
    }
    export interface $ConfigEnum extends $GlobalMixin {
        getName(): string;
        getText(): $Component;
        get name(): string;
        get text(): $Component;
    }
}
