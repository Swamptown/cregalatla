import { $Annotation } from "@package/java/lang/annotation";
import { $RegistrationEnvironment } from "@package/com/lowdragmc/lowdraglib2/registry";

declare module "@package/com/lowdragmc/lowdraglib2/registry/annotation" {
    export class $LDLRegister implements $Annotation {
        name(): string;
        priority(): number;
        group(): string;
        environment(): $RegistrationEnvironment;
        /**
         * @deprecated
         */
        manual(): boolean;
        modID(): string;
        registry(): string;
    }
    export class $LDLRegisterClient implements $Annotation {
        name(): string;
        priority(): number;
        group(): string;
        environment(): $RegistrationEnvironment;
        /**
         * @deprecated
         */
        manual(): boolean;
        modID(): string;
        registry(): string;
    }
}
