import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $InfoDisplayManagerConfigData } from "@package/xaero/hud/minimap/common/config/info/config";
import { $List_, $Map_, $List } from "@package/java/util";
import { $InfoDisplayRenderer } from "@package/xaero/hud/minimap/info/render";
export * as render from "@package/xaero/hud/minimap/info/render";

declare module "@package/xaero/hud/minimap/info" {
    export class $InfoDisplays {
        getIo(): $InfoDisplayIO;
        clearStateCache(): void;
        getRenderer(): $InfoDisplayRenderer;
        getManager(): $InfoDisplayManager;
        constructor(arg0: $InfoDisplayIO);
        get io(): $InfoDisplayIO;
        get renderer(): $InfoDisplayRenderer;
        get manager(): $InfoDisplayManager;
    }
    export class $InfoDisplayManager {
        getOrderedStream(): $Stream<$InfoDisplay<never>>;
        getDefaultOrder(): $List<string>;
        getEnforcedConfig(): $InfoDisplayManagerConfigData;
        adaptOrder(arg0: $Stream<string>): $List<string>;
        clearStateCache(): void;
        getLocalConfig(): $InfoDisplayManagerConfigData;
        getStream(): $Stream<$InfoDisplay<never>>;
        get(arg0: string): $InfoDisplay<never>;
        add(arg0: $InfoDisplay<never>): void;
        getCount(): number;
        applyLocalConfig(): void;
        constructor(arg0: $Map_<string, $InfoDisplay<never>>, arg1: $List_<string>, arg2: $List_<string>, arg3: $Supplier_<$InfoDisplayManagerConfigData>, arg4: $Consumer_<$InfoDisplayManagerConfigData>, arg5: $Supplier_<$InfoDisplayManagerConfigData>);
        get orderedStream(): $Stream<$InfoDisplay<never>>;
        get defaultOrder(): $List<string>;
        get enforcedConfig(): $InfoDisplayManagerConfigData;
        get localConfig(): $InfoDisplayManagerConfigData;
        get stream(): $Stream<$InfoDisplay<never>>;
        get count(): number;
    }
    export class $InfoDisplayIO {
        decode(arg0: string): $InfoDisplayManagerConfigData;
        encode(arg0: $InfoDisplayManagerConfigData): string;
        constructor();
    }
}
