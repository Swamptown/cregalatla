import { $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/net/liukrast/eg/mixin" {
    export class $FactoryPanelBehaviourAccessor {
    }
    export interface $FactoryPanelBehaviourAccessor {
        getLastReportedLevelInStorage(): number;
        getLastReportedUnloadedLinks(): number;
        getLastReportedPromises(): number;
        getTimer(): number;
        get lastReportedLevelInStorage(): number;
        get lastReportedUnloadedLinks(): number;
        get lastReportedPromises(): number;
        get timer(): number;
    }
    export class $FilteringBehaviourMixin {
    }
    export interface $FilteringBehaviourMixin {
        setValueBoxTransform(arg0: $ValueBoxTransform): void;
        set valueBoxTransform(value: $ValueBoxTransform);
    }
    /**
     * Values that may be interpreted as {@link $FilteringBehaviourMixin}.
     */
    export type $FilteringBehaviourMixin_ = ((arg0: $ValueBoxTransform) => void);
    export class $FactoryPanelBehaviourIMixin {
    }
    export interface $FactoryPanelBehaviourIMixin {
        extra_gauges$notifyRedstoneOutputs(): void;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelBehaviourIMixin}.
     */
    export type $FactoryPanelBehaviourIMixin_ = (() => void);
}
