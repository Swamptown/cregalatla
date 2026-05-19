import { $Function1_ } from "@package/kotlin/jvm/functions";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $EmiDrawContext } from "@package/dev/emi/emi/runtime";
import { $Object } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Unit } from "@package/kotlin";

declare module "@package/concerrox/emixx/util" {
    export class $GuiGraphicsUtils {
        static renderItem$default(arg0: $GuiGraphicsUtils, arg1: $GuiGraphics, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $Object): void;
        renderItem(guiGraphics: $GuiGraphics, stack: $ItemStack_, x: number, y: number, size: number): void;
        static INSTANCE: $GuiGraphicsUtils;
    }
    export class $GuiEventListenerExtensionsKt {
        static pos($this$pos: $AbstractWidget, x: number, y: number): $AbstractWidget;
    }
    export class $EmiDrawContextExtensionsKt {
        static push($this$push: $EmiDrawContext, action: $Function1_<$EmiDrawContext, $Unit>): $EmiDrawContext;
    }
    export class $SearchWorkerBridge {
    }
    export interface $SearchWorkerBridge {
        emixx$getQuery(): string;
    }
    /**
     * Values that may be interpreted as {@link $SearchWorkerBridge}.
     */
    export type $SearchWorkerBridge_ = (() => string);
}
