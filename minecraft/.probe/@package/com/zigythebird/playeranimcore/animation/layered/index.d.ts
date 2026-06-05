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
        get3DTransform(bone: $PlayerAnimBone): $PlayerAnimBone;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        setupAnim(state: $AnimationData): void;
        tick(state: $AnimationData): void;
        isActive(): boolean;
        canRemove(): boolean;
        getFirstPersonMode(): $FirstPersonMode;
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        set upAnim(value: $AnimationData);
        get active(): boolean;
        get firstPersonMode(): $FirstPersonMode;
    }
    /**
     * Values that may be interpreted as {@link $IAnimation}.
     */
    export type $IAnimation_ = (() => boolean);
    export class $AnimationStack implements $IAnimation {
        addAnimLayer(priority: number, layer: $IAnimation_): void;
        removeLayer(layer: $IAnimation_): boolean;
        removeLayer(layerLevel: number): boolean;
        get3DTransform(bone: $PlayerAnimBone): $PlayerAnimBone;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        setupAnim(state: $AnimationData): void;
        tick(state: $AnimationData): void;
        getLayers(): $List<$Pair<number, $IAnimation>>;
        getPriority(): number;
        isActive(): boolean;
        getFirstPersonMode(): $FirstPersonMode;
        canRemove(): boolean;
        constructor();
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        set upAnim(value: $AnimationData);
        get layers(): $List<$Pair<number, $IAnimation>>;
        get priority(): number;
        get active(): boolean;
        get firstPersonMode(): $FirstPersonMode;
    }
    export class $AnimationContainer<T extends $IAnimation> implements $IAnimation {
        setAnim(newAnim: T): void;
        getAnim(): T;
        get3DTransform(bone: $PlayerAnimBone): $PlayerAnimBone;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        setupAnim(state: $AnimationData): void;
        tick(state: $AnimationData): void;
        isActive(): boolean;
        getFirstPersonMode(): $FirstPersonMode;
        canRemove(): boolean;
        constructor(anim: T);
        constructor();
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        set upAnim(value: $AnimationData);
        get active(): boolean;
        get firstPersonMode(): $FirstPersonMode;
    }
}
