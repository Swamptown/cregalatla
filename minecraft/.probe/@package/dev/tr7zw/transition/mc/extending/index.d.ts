import { $Object, $Class } from "@package/java/lang";

declare module "@package/dev/tr7zw/transition/mc/extending" {
    export class $ExtensionHolder {
    }
    export interface $ExtensionHolder {
        setExtension(arg0: $Object, arg1: $Object): void;
        getExtension<T>(arg0: $Object, arg1: $Class<T>): T;
    }
}
