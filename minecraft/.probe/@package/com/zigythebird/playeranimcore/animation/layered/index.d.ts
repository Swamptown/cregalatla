import { $AnimationData } from "@package/com/zigythebird/playeranimcore/animation";
import { $PlayerAnimBone } from "@package/com/zigythebird/playeranimcore/bones";
import { $FirstPersonConfiguration, $FirstPersonMode } from "@package/com/zigythebird/playeranimcore/api/firstPerson";
import { $Pair } from "@package/it/unimi/dsi/fastutil";
import { $List } from "@package/java/util";
export * as modifier from "@package/com/zigythebird/playeranimcore/animation/layered/modifier";

declare module "@package/com/zigythebird/playeranimcore/animation/layered" {
    export class $IAnimation {
        static DEFAULT_FIRST_PERSON_CONFIG: $FirstPersonConfiguration;
    }
    export interface $IAnimation {
        isActive(): boolean;
        tick(state: $AnimationData): void;
        get3DTransform(bone: $PlayerAnimBone): $PlayerAnimBone;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        setupAnim(state: $AnimationData): void;
        getFirstPersonMode(): $FirstPersonMode;
        canRemove(): boolean;
        get active(): boolean;
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        set upAnim(value: $AnimationData);
        get firstPersonMode(): $FirstPersonMode;
    }
    /**
     * Values that may be interpreted as {@link $IAnimation}.
     */
    export type $IAnimation_ = (() => boolean);
    export class $AnimationStack implements $IAnimation {
        getPriority(): number;
        isActive(): boolean;
        tick(state: $AnimationData): void;
        get3DTransform(bone: $PlayerAnimBone): $PlayerAnimBone;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        setupAnim(state: $AnimationData): void;
        getLayers(): $List<$Pair<number, $IAnimation>>;
        getFirstPersonMode(): $FirstPersonMode;
        addAnimLayer(priority: number, layer: $IAnimation_): void;
        removeLayer(layerLevel: number): boolean;
        removeLayer(layer: $IAnimation_): boolean;
        canRemove(): boolean;
        constructor();
        get priority(): number;
        get active(): boolean;
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        set upAnim(value: $AnimationData);
        get layers(): $List<$Pair<number, $IAnimation>>;
        get firstPersonMode(): $FirstPersonMode;
    }
    export class $AnimationContainer<T extends $IAnimation> implements $IAnimation {
        isActive(): boolean;
        tick(state: $AnimationData): void;
        getAnim(): T;
        get3DTransform(bone: $PlayerAnimBone): $PlayerAnimBone;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        setupAnim(state: $AnimationData): void;
        getFirstPersonMode(): $FirstPersonMode;
        setAnim(newAnim: T): void;
        canRemove(): boolean;
        constructor(anim: T);
        constructor();
        get active(): boolean;
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        set upAnim(value: $AnimationData);
        get firstPersonMode(): $FirstPersonMode;
    }
}
