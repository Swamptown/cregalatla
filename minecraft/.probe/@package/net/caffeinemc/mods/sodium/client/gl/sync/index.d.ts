
declare module "@package/net/caffeinemc/mods/sodium/client/gl/sync" {
    export class $GlFence {
        isCompleted(): boolean;
        delete(): void;
        sync(): void;
        sync(arg0: number): void;
        constructor(arg0: number);
        get completed(): boolean;
    }
}
