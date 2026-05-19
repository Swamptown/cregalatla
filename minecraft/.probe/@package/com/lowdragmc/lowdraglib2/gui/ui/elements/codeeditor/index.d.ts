import { $Codec } from "@package/com/mojang/serialization";
import { $Style } from "@package/net/minecraft/network/chat";
import { $ILanguageDefinition, $SyntaxParser, $StyleManager } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor/language";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $Font } from "@package/net/minecraft/client/gui";
import { $List, $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Scroller, $TextArea } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
export * as language from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor/language";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor" {
    export class $CodeEditor extends $TextArea {
        getStyledLines(): $List<$StyledLine>;
        getSyntaxParser(): $SyntaxParser;
        getStyleManager(): $StyleManager;
        setStyleManager(arg0: $StyleManager): $CodeEditor;
        setLanguage(arg0: $ILanguageDefinition): $CodeEditor;
        getLanguage(): $ILanguageDefinition;
        contentView: $UIElement;
        verticalScroller: $Scroller;
        static CODEC: $Codec<$UIElement>;
        horizontalScroller: $Scroller;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get styledLines(): $List<$StyledLine>;
        get syntaxParser(): $SyntaxParser;
    }
    export class $StyledLine extends $Record {
        getWidth(arg0: $Font, arg1: $Style): number;
        text(): $List<$StyledText>;
        line(): number;
        constructor(line: number, text: $List_<$StyledText_>);
    }
    /**
     * Values that may be interpreted as {@link $StyledLine}.
     */
    export type $StyledLine_ = { line?: number, text?: $List_<$StyledText_>,  } | [line?: number, text?: $List_<$StyledText_>, ];
    export class $StyledText extends $Record {
        text(): string;
        style(): $Style;
        constructor(text: string, style: $Style);
    }
    /**
     * Values that may be interpreted as {@link $StyledText}.
     */
    export type $StyledText_ = { text?: string, style?: $Style,  } | [text?: string, style?: $Style, ];
}
