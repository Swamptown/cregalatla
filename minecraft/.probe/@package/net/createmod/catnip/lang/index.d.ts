import { $ChatFormatting_ } from "@package/net/minecraft";
import { $MutableComponent, $Component_, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Object } from "@package/java/lang";
import { $List_ } from "@package/java/util";

declare module "@package/net/createmod/catnip/lang" {
    export class $LangBuilder {
        forGoggles(arg0: $List_<$MutableComponent_>): void;
        forGoggles(arg0: $List_<$MutableComponent_>, arg1: number): void;
        sendStatus(arg0: $Player): void;
        addTo(arg0: $List_<$MutableComponent_>): void;
        space(): $LangBuilder;
        add(arg0: $Component_): $LangBuilder;
        add(arg0: $MutableComponent_): $LangBuilder;
        add(arg0: $LangBuilder): $LangBuilder;
        component(): $MutableComponent;
        newLine(): $LangBuilder;
        color(arg0: number): $LangBuilder;
        color(arg0: $Color): $LangBuilder;
        string(): string;
        text(arg0: $ChatFormatting_, arg1: string): $LangBuilder;
        text(arg0: string): $LangBuilder;
        text(arg0: number, arg1: string): $LangBuilder;
        json(): string;
        style(arg0: $ChatFormatting_): $LangBuilder;
        sendChat(arg0: $Player): void;
        translate(arg0: string, ...arg1: $Object[]): $LangBuilder;
        static resolveBuilders(arg0: $Object[]): $Object[];
        static DEFAULT_SPACE_WIDTH: number;
        constructor(arg0: string);
    }
}
