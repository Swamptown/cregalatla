import { RegistryTypes, RegistryMarked } from "@special/types";
import { $AbstractPanelBehaviour } from "@package/net/liukrast/eg/api/logistics/board";
import { $Class } from "@package/java/lang";
import { $FactoryPanelBlockEntity, $FactoryPanelBlock$PanelSlot_, $FactoryPanelBlock$PanelSlot } from "@package/com/simibubi/create/content/logistics/factoryBoard";

declare module "@package/net/liukrast/eg/api/registry" {
    export interface $PanelType<T> extends RegistryMarked<RegistryTypes.ExtraGaugesPanelsTag, RegistryTypes.ExtraGaugesPanels> {}
    export class $PanelType<T extends $AbstractPanelBehaviour> {
        create(arg0: $FactoryPanelBlockEntity, arg1: $FactoryPanelBlock$PanelSlot_): $AbstractPanelBehaviour;
        asClass(): $Class<T>;
        constructor(arg0: $PanelType$Constructor_<T>, arg1: $Class<T>);
    }
    /**
     * Values that may be interpreted as {@link $PanelType}.
     */
    export type $PanelType_<T> = RegistryTypes.ExtraGaugesPanels;
    export class $PanelType$Constructor<T extends $AbstractPanelBehaviour> {
    }
    export interface $PanelType$Constructor<T extends $AbstractPanelBehaviour> {
        apply(arg0: $PanelType_<T>, arg1: $FactoryPanelBlockEntity, arg2: $FactoryPanelBlock$PanelSlot_): T;
    }
    /**
     * Values that may be interpreted as {@link $PanelType$Constructor}.
     */
    export type $PanelType$Constructor_<T> = ((arg0: $PanelType<T>, arg1: $FactoryPanelBlockEntity, arg2: $FactoryPanelBlock$PanelSlot) => T);
}
