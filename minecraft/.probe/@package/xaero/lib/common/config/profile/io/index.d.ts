import { $ConfigProfile } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/common/config/profile/io" {
    export class $ConfigProfileManagerIO {
        saveAll(): void;
        load(): void;
        delete(arg0: $ConfigProfile, arg1: number): void;
        delete(arg0: $ConfigProfile): void;
        save(arg0: $ConfigProfile): void;
    }
}
