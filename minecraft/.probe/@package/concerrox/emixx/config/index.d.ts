import { $Function1_ } from "@package/kotlin/jvm/functions";
import { $Supplier_ } from "@package/java/util/function";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Path } from "@package/java/nio/file";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Button$OnPress_ } from "@package/net/minecraft/client/gui/components";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $ConfigSearch, $ListWidget, $ConfigEntryWidget, $GroupNameWidget } from "@package/dev/emi/emi/screen/widget/config";
import { $List, $List_, $Map } from "@package/java/util";
import { $ModConfigSpec$BooleanValue, $ModConfigSpec$Builder, $ModConfigSpec, $ModConfigSpec$ConfigValue } from "@package/net/neoforged/neoforge/common";
import { $EmiConfig$ConfigGroup } from "@package/dev/emi/emi/config";
import { $ConfigScreen } from "@package/dev/emi/emi/screen";

declare module "@package/concerrox/emixx/config" {
    export class $EmiPlusPlusConfig$Companion {
        getCONFIG_SPEC(): $ModConfigSpec;
        getEmiOnlyInRecipeBook(): $ModConfigSpec$BooleanValue;
        getCONFIG_DIRECTORY_PATH(): $Path;
        getEnableCreativeModeTabs(): $ModConfigSpec$BooleanValue;
        getShowCreativeTabNameInSearchbar(): $ModConfigSpec$BooleanValue;
        getDisabledCreativeModeTabs(): $ModConfigSpec$ConfigValue<$List<string>>;
        getEnableStackGroups(): $ModConfigSpec$BooleanValue;
        getEnableCreateStackGroupButton(): $ModConfigSpec$BooleanValue;
        setEnableCreativeModeTabs(<set-?>: $ModConfigSpec$BooleanValue): void;
        setSyncSelectedCreativeModeTab(<set-?>: $ModConfigSpec$BooleanValue): void;
        setShowCreativeTabNameInSearchbar(<set-?>: $ModConfigSpec$BooleanValue): void;
        setDisabledCreativeModeTabs(<set-?>: $ModConfigSpec$ConfigValue<$List_<string>>): void;
        setEnableStackGroups(<set-?>: $ModConfigSpec$BooleanValue): void;
        setEnableCreateStackGroupButton(<set-?>: $ModConfigSpec$BooleanValue): void;
        setEmiOnlyInRecipeBook(<set-?>: $ModConfigSpec$BooleanValue): void;
        getSyncSelectedCreativeModeTab(): $ModConfigSpec$BooleanValue;
        save(): void;
        ensureLoaded(): void;
        constructor($constructor_marker: $DefaultConstructorMarker);
        get CONFIG_SPEC(): $ModConfigSpec;
        get CONFIG_DIRECTORY_PATH(): $Path;
    }
    export class $EmiPlusPlusConfig {
        static access$getCONFIG_SPEC$cp(): $ModConfigSpec;
        static access$getCONFIG_DIRECTORY_PATH$cp(): $Path;
        static Companion: $EmiPlusPlusConfig$Companion;
        static enableCreativeModeTabs: $ModConfigSpec$BooleanValue;
        static showCreativeTabNameInSearchbar: $ModConfigSpec$BooleanValue;
        static emiOnlyInRecipeBook: $ModConfigSpec$BooleanValue;
        static disabledCreativeModeTabs: $ModConfigSpec$ConfigValue<$List<string>>;
        static enableCreateStackGroupButton: $ModConfigSpec$BooleanValue;
        static syncSelectedCreativeModeTab: $ModConfigSpec$BooleanValue;
        static enableStackGroups: $ModConfigSpec$BooleanValue;
        constructor(builder: $ModConfigSpec$Builder);
    }
    export class $ConfigScreenManager {
        static access$getUnsavedChanges$p(): $Map<any, any>;
        injectConfigScreen(configScreen: $ConfigScreen, list: $ListWidget, search: $ConfigSearch): void;
        static INSTANCE: $ConfigScreenManager;
    }
    export class $ConfigScreenManager$ActionWidget extends $ConfigEntryWidget {
        endGroup: boolean;
        parentGroups: $List<$GroupNameWidget>;
        parentList: $ListWidget;
        group: $EmiConfig$ConfigGroup;
        constructor(name: $Component_, tooltip: $List_<$ClientTooltipComponent>, search: $Supplier_<string>, onClickedListener: $Button$OnPress_);
    }
    export class $EmiPlusPlusConfigKt {
        static access$group($receiver: $ModConfigSpec$Builder, path: string, action: $Function1_<any, any>): $ModConfigSpec$Builder;
    }
}
