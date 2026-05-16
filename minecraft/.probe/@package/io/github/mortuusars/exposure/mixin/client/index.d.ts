import { $List_, $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/io/github/mortuusars/exposure/mixin/client" {
    export class $BuggerScreenRenderLinesInvoker {
    }
    export interface $BuggerScreenRenderLinesInvoker {
        drawLines(arg0: $GuiGraphics, arg1: $List_<string>, arg2: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $BuggerScreenRenderLinesInvoker}.
     */
    export type $BuggerScreenRenderLinesInvoker_ = ((arg0: $GuiGraphics, arg1: $List<string>, arg2: boolean) => void);
}
