import { $VersionChecker$Status } from "@package/net/neoforged/fml";

declare module "@package/net/neoforged/neoforge/internal/versions/neoforge" {
    export class $NeoForgeVersion {
        static getTarget(): string;
        static getVersion(): string;
        static getFmlVersion(): string;
        static getStatus(): $VersionChecker$Status;
        static MOD_ID: string;
        constructor();
        static get target(): string;
        static get version(): string;
        static get fmlVersion(): string;
        static get status(): $VersionChecker$Status;
    }
}
