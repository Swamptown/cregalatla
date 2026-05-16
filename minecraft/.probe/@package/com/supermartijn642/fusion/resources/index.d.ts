
declare module "@package/com/supermartijn642/fusion/resources" {
    export class $FusionPackMetadata {
        getMinimumVersion(): string;
        isMinVersionSatisfied(): boolean;
        hasOverridesFolder(): boolean;
        getOverridesFolder(): string;
        get minimumVersion(): string;
        get minVersionSatisfied(): boolean;
        get overridesFolder(): string;
    }
}
