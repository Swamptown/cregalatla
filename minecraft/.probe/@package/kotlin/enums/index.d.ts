import { $KMappedMarker } from "@package/kotlin/jvm/internal/markers";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";

declare module "@package/kotlin/enums" {
    export class $EnumEntries<E extends $Enum<E>> {
    }
    export interface $EnumEntries<E extends $Enum<E>> extends $List<E>, $KMappedMarker {
    }
}
