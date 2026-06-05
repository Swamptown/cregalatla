
declare module "@package/xaero/hud/controls/key/function" {
    export class $KeyMappingFunction {
        isHeld(): boolean;
        onPress(): void;
        onRelease(): void;
        get held(): boolean;
    }
}
