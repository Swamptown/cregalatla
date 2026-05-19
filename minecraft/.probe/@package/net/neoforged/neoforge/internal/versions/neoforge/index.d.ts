import { $VersionChecker$Status } from "@package/net/neoforged/fml";

declare module "@package/net/neoforged/neoforge/internal/versions/neoforge" {
    export class $NeoForgeVersion {
        static getFmlVersion(): string;
        static getVersion(): string;
        static getTarget(): string;
        static getStatus(): $VersionChecker$Status;
        static MOD_ID: string;
        constructor();
        static get fmlVersion(): string;
        static get version(): string;
        static get target(): string;
        static get status(): $VersionChecker$Status;
    }
}
