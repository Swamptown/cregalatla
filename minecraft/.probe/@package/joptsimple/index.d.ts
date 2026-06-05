import { $Class } from "@package/java/lang";

declare module "@package/joptsimple" {
    export class $ValueConverter<V> {
    }
    export interface $ValueConverter<V> {
        valueType(): $Class<V>;
        convert(arg0: string): V;
        valuePattern(): string;
    }
}
