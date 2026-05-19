import { $Annotation } from "@package/java/lang/annotation";
import { $RegistrationEnvironment } from "@package/com/lowdragmc/lowdraglib2/registry";

declare module "@package/com/lowdragmc/lowdraglib2/registry/annotation" {
    export class $LDLRegister implements $Annotation {
        /**
         * @deprecated
         */
        manual(): boolean;
        modID(): string;
        name(): string;
        priority(): number;
        group(): string;
        environment(): $RegistrationEnvironment;
        registry(): string;
    }
    export class $LDLRegisterClient implements $Annotation {
        /**
         * @deprecated
         */
        manual(): boolean;
        modID(): string;
        name(): string;
        priority(): number;
        group(): string;
        environment(): $RegistrationEnvironment;
        registry(): string;
    }
}
