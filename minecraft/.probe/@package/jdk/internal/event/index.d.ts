import { $Object } from "@package/java/lang";

declare module "@package/jdk/internal/event" {
    export class $Event {
        commit(): void;
        begin(): void;
        end(): void;
        set(arg0: number, arg1: $Object): void;
        isEnabled(): boolean;
        shouldCommit(): boolean;
        get enabled(): boolean;
    }
}
