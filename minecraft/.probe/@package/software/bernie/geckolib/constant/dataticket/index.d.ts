import { $Map_ } from "@package/java/util";
import { $Class } from "@package/java/lang";

declare module "@package/software/bernie/geckolib/constant/dataticket" {
    export class $DataTicket<D> {
        getData<D>(arg0: $Map_<$DataTicket<never>, never>): D;
        id(): string;
        objectType(): $Class<D>;
        constructor(arg0: string, arg1: $Class<D>);
    }
}
