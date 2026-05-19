
declare module "@package/xaero/map/util/linked" {
    export class $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
    }
    export interface $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
        onDestroyed(): void;
        getNext(): V;
        isDestroyed(): boolean;
        getPrevious(): V;
        setNext(arg0: V): void;
        setPrevious(arg0: V): void;
        get destroyed(): boolean;
    }
}
