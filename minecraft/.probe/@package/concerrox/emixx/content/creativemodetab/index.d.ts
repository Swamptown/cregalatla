import { $CreativeModeTab_, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $ItemTab } from "@package/concerrox/emixx/content/creativemodetab/gui/itemtab";
import { $Button } from "@package/net/minecraft/client/gui/components";
import { $Object } from "@package/java/lang";
import { $List } from "@package/java/util";
export * as gui from "@package/concerrox/emixx/content/creativemodetab/gui";

declare module "@package/concerrox/emixx/content/creativemodetab" {
    export class $CreativeModeTabManager {
        onCreativeModeInventoryScreenTabSelected$emixx_common(tab: $CreativeModeTab_): void;
        getVisibleCreativeModeTabs$emixx_common(): $List<$CreativeModeTab>;
        loadDisabledTabs$emixx_common(): $List<$CreativeModeTab>;
        initialize$emixx_common(): void;
        shouldHideTab$emixx_common(tab: $CreativeModeTab_): boolean;
        nextPage$emixx_common(button: $Button): void;
        previousPage$emixx_common(button: $Button): void;
        onTabSelected$emixx_common(tab: $ItemTab): void;
        getHIDDEN_CREATIVE_MODE_TABS(): $List<$CreativeModeTab>;
        getScrollOffset$emixx_common(): number;
        setScrollOffset$emixx_common(<set-?>: number): void;
        getMaxScroll$emixx_common(): number;
        static nextPage$emixx_common$default(arg0: $CreativeModeTabManager, arg1: $Button, arg2: number, arg3: $Object): void;
        static previousPage$emixx_common$default(arg0: $CreativeModeTabManager, arg1: $Button, arg2: number, arg3: $Object): void;
        reload(): void;
        static INSTANCE: $CreativeModeTabManager;
        get visibleCreativeModeTabs$emixx_common(): $List<$CreativeModeTab>;
        get HIDDEN_CREATIVE_MODE_TABS(): $List<$CreativeModeTab>;
        get maxScroll$emixx_common(): number;
    }
    export class $CreativeModeTabManager$WhenMappings {
        static $EnumSwitchMapping$0: number[];
    }
}
