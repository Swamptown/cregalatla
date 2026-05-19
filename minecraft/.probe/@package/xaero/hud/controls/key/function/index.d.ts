
declare module "@package/xaero/hud/controls/key/function" {
    export class $KeyMappingFunction {
        isHeld(): boolean;
        onRelease(): void;
        onPress(): void;
        get held(): boolean;
    }
}
