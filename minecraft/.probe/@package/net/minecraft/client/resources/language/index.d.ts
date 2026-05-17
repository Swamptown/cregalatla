import { $IMixinClientLanguage as $IMixinClientLanguage$1 } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $Codec } from "@package/com/mojang/serialization";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $IMixinClientLanguage } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $Language } from "@package/net/minecraft/locale";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $SortedMap, $Locale, $Map, $List_, $Collection } from "@package/java/util";
import { $FormattedCharSequence } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record, $Object } from "@package/java/lang";

declare module "@package/net/minecraft/client/resources/language" {
    export class $I18n {
        static get(arg0: string, ...arg1: $Object[]): string;
        static exists(arg0: string): boolean;
        static setLanguage(arg0: $Language): void;
        static set language(value: $Language);
    }
    export class $LanguageManager implements $ResourceManagerReloadListener, $IdentifiableResourceReloadListener {
        getLanguage(arg0: string): $LanguageInfo;
        getLanguages(): $SortedMap<string, $LanguageInfo>;
        onResourceManagerReload(arg0: $ResourceManager): void;
        getSelected(): string;
        setSelected(arg0: string): void;
        getJavaLocale(): $Locale;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor(arg0: string, arg1: $Consumer_<$ClientLanguage>);
        get languages(): $SortedMap<string, $LanguageInfo>;
        get javaLocale(): $Locale;
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get name(): string;
    }
    export class $ClientLanguage extends $Language implements $IMixinClientLanguage, $IMixinClientLanguage$1 {
        static loadFrom(arg0: $ResourceManager, arg1: $List_<string>, arg2: boolean): $ClientLanguage;
        getStorageKonkrete(): $Map<string, string>;
        getStorageFancyMenu(): $Map<string, string>;
        storage: $Map<string, string>;
        static DEFAULT: string;
        get storageKonkrete(): $Map<string, string>;
        get storageFancyMenu(): $Map<string, string>;
    }
    export class $FormattedBidiReorder {
        static reorder(arg0: $FormattedText, arg1: boolean): $FormattedCharSequence;
        constructor();
    }
    export class $LanguageInfo extends $Record {
        name(): string;
        region(): string;
        bidirectional(): boolean;
        toComponent(): $Component;
        static CODEC: $Codec<$LanguageInfo>;
        constructor(arg0: string, arg1: string, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LanguageInfo}.
     */
    export type $LanguageInfo_ = { name?: string, region?: string, bidirectional?: boolean,  } | [name?: string, region?: string, bidirectional?: boolean, ];
}
