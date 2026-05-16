import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $ComponentContents$Type, $MutableComponent, $Component_, $Style, $ComponentContents, $FormattedText$ContentConsumer_, $Component, $FormattedText$StyledContentConsumer_, $FormattedText } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntitySelector } from "@package/net/minecraft/commands/arguments/selector";
import { $NbtPathArgument$NbtPath } from "@package/net/minecraft/commands/arguments";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Function_, $Function, $Supplier } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Coordinates } from "@package/net/minecraft/commands/arguments/coordinates";
import { $Throwable, $Record, $Object, $IllegalArgumentException } from "@package/java/lang";

declare module "@package/net/minecraft/network/chat/contents" {
    export class $DataSource {
        static CODEC: $MapCodec<$DataSource>;
    }
    export interface $DataSource {
        type(): $DataSource$Type<never>;
        getData(arg0: $CommandSourceStack): $Stream<$CompoundTag>;
    }
    export class $NbtContents implements $ComponentContents {
        type(): $ComponentContents$Type<never>;
        resolve(arg0: $CommandSourceStack, arg1: $Entity, arg2: number): $MutableComponent;
        getSeparator(): ($Component) | undefined;
        getNbtPath(): string;
        isInterpreting(): boolean;
        getDataSource(): $DataSource;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        static CODEC: $MapCodec<$NbtContents>;
        compiledNbtPath: $NbtPathArgument$NbtPath;
        static TYPE: $ComponentContents$Type<$NbtContents>;
        constructor(arg0: string, arg1: boolean, arg2: ($Component_) | undefined, arg3: $DataSource);
        get separator(): ($Component) | undefined;
        get nbtPath(): string;
        get interpreting(): boolean;
        get dataSource(): $DataSource;
    }
    export class $TranslatableFormatException extends $IllegalArgumentException {
        constructor(arg0: $TranslatableContents, arg1: string);
        constructor(arg0: $TranslatableContents, arg1: number);
        constructor(arg0: $TranslatableContents, arg1: $Throwable);
    }
    export class $ScoreContents implements $ComponentContents {
        getName(): string;
        type(): $ComponentContents$Type<never>;
        resolve(arg0: $CommandSourceStack, arg1: $Entity, arg2: number): $MutableComponent;
        getObjective(): string;
        getSelector(): $EntitySelector;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        static CODEC: $MapCodec<$ScoreContents>;
        static TYPE: $ComponentContents$Type<$ScoreContents>;
        static INNER_CODEC: $MapCodec<$ScoreContents>;
        constructor(arg0: string, arg1: string);
        get name(): string;
        get objective(): string;
        get selector(): $EntitySelector;
    }
    export class $PlainTextContents$LiteralContents extends $Record implements $PlainTextContents {
        text(): string;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        type(): $ComponentContents$Type<never>;
        resolve(arg0: $CommandSourceStack, arg1: $Entity, arg2: number): $MutableComponent;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $PlainTextContents$LiteralContents}.
     */
    export type $PlainTextContents$LiteralContents_ = { text?: string,  } | [text?: string, ];
    export class $TranslatableContents implements $ComponentContents {
        type(): $ComponentContents$Type<never>;
        getKey(): string;
        resolve(arg0: $CommandSourceStack, arg1: $Entity, arg2: number): $MutableComponent;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        getArgs(): $Object[];
        getArgument(arg0: number): $FormattedText;
        getFallback(): string;
        static isAllowedPrimitiveArgument(arg0: $Object): boolean;
        args: $Object[];
        static CODEC: $MapCodec<$TranslatableContents>;
        static NO_ARGS: $Object[];
        static TYPE: $ComponentContents$Type<$TranslatableContents>;
        constructor(arg0: string, arg1: string, arg2: $Object[]);
        get key(): string;
        get fallback(): string;
    }
    export class $KeybindResolver {
        static setKeyResolver(arg0: $Function_<string, $Supplier<$Component>>): void;
        static keyResolver: $Function<string, $Supplier<$Component>>;
        constructor();
    }
    export class $SelectorContents implements $ComponentContents {
        type(): $ComponentContents$Type<never>;
        resolve(arg0: $CommandSourceStack, arg1: $Entity, arg2: number): $MutableComponent;
        getSeparator(): ($Component) | undefined;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        getPattern(): string;
        getSelector(): $EntitySelector;
        static CODEC: $MapCodec<$SelectorContents>;
        static TYPE: $ComponentContents$Type<$SelectorContents>;
        separator: ($Component) | undefined;
        constructor(arg0: string, arg1: ($Component_) | undefined);
        get pattern(): string;
        get selector(): $EntitySelector;
    }
    export class $EntityDataSource extends $Record implements $DataSource {
        type(): $DataSource$Type<never>;
        getData(arg0: $CommandSourceStack): $Stream<$CompoundTag>;
        selectorPattern(): string;
        compiledSelector(): $EntitySelector;
        static SUB_CODEC: $MapCodec<$EntityDataSource>;
        static TYPE: $DataSource$Type<$EntityDataSource>;
        constructor(arg0: string);
        constructor(arg0: string, arg1: $EntitySelector);
    }
    /**
     * Values that may be interpreted as {@link $EntityDataSource}.
     */
    export type $EntityDataSource_ = { compiledSelector?: $EntitySelector, selectorPattern?: string,  } | [compiledSelector?: $EntitySelector, selectorPattern?: string, ];
    export class $DataSource$Type<T extends $DataSource> extends $Record implements $StringRepresentable {
        id(): string;
        codec(): $MapCodec<T>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        constructor(arg0: $MapCodec_<T>, arg1: string);
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DataSource$Type}.
     */
    export type $DataSource$Type_<T> = { id?: string, codec?: $MapCodec_<$DataSource>,  } | [id?: string, codec?: $MapCodec_<$DataSource>, ];
    export class $PlainTextContents {
        static create(arg0: string): $PlainTextContents;
        static CODEC: $MapCodec<$PlainTextContents>;
        static TYPE: $ComponentContents$Type<$PlainTextContents>;
        static EMPTY: $PlainTextContents;
    }
    export interface $PlainTextContents extends $ComponentContents {
        type(): $ComponentContents$Type<never>;
        text(): string;
    }
    /**
     * Values that may be interpreted as {@link $PlainTextContents}.
     */
    export type $PlainTextContents_ = (() => string);
    export class $KeybindContents implements $ComponentContents {
        getName(): string;
        type(): $ComponentContents$Type<never>;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        resolve(arg0: $CommandSourceStack, arg1: $Entity, arg2: number): $MutableComponent;
        static CODEC: $MapCodec<$KeybindContents>;
        static TYPE: $ComponentContents$Type<$KeybindContents>;
        constructor(arg0: string);
        get name(): string;
    }
    export class $BlockDataSource extends $Record implements $DataSource {
        type(): $DataSource$Type<never>;
        getData(arg0: $CommandSourceStack): $Stream<$CompoundTag>;
        posPattern(): string;
        compiledPos(): $Coordinates;
        static SUB_CODEC: $MapCodec<$BlockDataSource>;
        static TYPE: $DataSource$Type<$BlockDataSource>;
        constructor(arg0: string);
        constructor(arg0: string, arg1: $Coordinates);
    }
    /**
     * Values that may be interpreted as {@link $BlockDataSource}.
     */
    export type $BlockDataSource_ = { posPattern?: string, compiledPos?: $Coordinates,  } | [posPattern?: string, compiledPos?: $Coordinates, ];
    export class $StorageDataSource extends $Record implements $DataSource {
        type(): $DataSource$Type<never>;
        id(): $ResourceLocation;
        getData(arg0: $CommandSourceStack): $Stream<$CompoundTag>;
        static SUB_CODEC: $MapCodec<$StorageDataSource>;
        static TYPE: $DataSource$Type<$StorageDataSource>;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $StorageDataSource}.
     */
    export type $StorageDataSource_ = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
}
