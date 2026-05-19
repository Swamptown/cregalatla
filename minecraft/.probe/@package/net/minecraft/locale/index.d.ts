import { $InputStream } from "@package/java/io";
import { $BiConsumer_ } from "@package/java/util/function";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $List_, $Map, $List } from "@package/java/util";
import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/locale" {
    export class $Language {
        has(arg0: string): boolean;
        static getInstance(): $Language;
        getOrDefault(arg0: string): string;
        getOrDefault(arg0: string, arg1: string): string;
        getComponent(arg0: string): $Component;
        static inject(arg0: $Language): void;
        static loadFromJson(arg0: $InputStream, arg1: $BiConsumer_<string, string>, arg2: $BiConsumer_<string, $Component>): void;
        static loadFromJson(arg0: $InputStream, arg1: $BiConsumer_<string, string>): void;
        isDefaultRightToLeft(): boolean;
        getVisualOrder(arg0: $List_<$FormattedText>): $List<$FormattedCharSequence>;
        getVisualOrder(arg0: $FormattedText): $FormattedCharSequence;
        getLanguageData(): $Map<string, string>;
        static DEFAULT: string;
        constructor();
        static get instance(): $Language;
        get defaultRightToLeft(): boolean;
        get languageData(): $Map<string, string>;
    }
}
