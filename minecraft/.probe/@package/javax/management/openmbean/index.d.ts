import { $Serializable } from "@package/java/io";
import { $Object } from "@package/java/lang";
import { $Collection, $Set, $List } from "@package/java/util";

declare module "@package/javax/management/openmbean" {
    export class $OpenType<T> implements $Serializable {
        isArray(): boolean;
        getTypeName(): string;
        getClassName(): string;
        isValue(arg0: $Object): boolean;
        getDescription(): string;
        static ALLOWED_CLASSNAMES_LIST: $List<string>;
        /**
         * @deprecated
         */
        static ALLOWED_CLASSNAMES: string[];
        get array(): boolean;
        get typeName(): string;
        get className(): string;
        get description(): string;
    }
    export class $CompositeType extends $OpenType<$CompositeData> {
        keySet(): $Set<string>;
        containsKey(arg0: string): boolean;
        getType(arg0: string): $OpenType<never>;
        getDescription(arg0: string): string;
        static ALLOWED_CLASSNAMES_LIST: $List<string>;
        /**
         * @deprecated
         */
        static ALLOWED_CLASSNAMES: string[];
        constructor(arg0: string, arg1: string, arg2: string[], arg3: string[], arg4: $OpenType<never>[]);
    }
    export class $CompositeData {
    }
    export interface $CompositeData {
        get(arg0: string): $Object;
        equals(arg0: $Object): boolean;
        toString(): string;
        values(): $Collection<never>;
        hashCode(): number;
        containsValue(arg0: $Object): boolean;
        containsKey(arg0: string): boolean;
        getAll(arg0: string[]): $Object[];
        getCompositeType(): $CompositeType;
        get compositeType(): $CompositeType;
    }
}
