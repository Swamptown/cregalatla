import { $JsonObject_, $JsonElement_ } from "@package/com/google/gson";
import { $MochaEngine } from "@package/team/unnamed/mocha";
import { $FirstPersonConfiguration, $FirstPersonMode, $FirstPersonMode_ } from "@package/com/zigythebird/playeranimcore/api/firstPerson";
import { $UUID, $List, $Map_, $Map } from "@package/java/util";
import { $Function_, $Consumer_, $Predicate_, $Function, $Supplier } from "@package/java/util/function";
import { $AbstractFadeModifier, $AbstractModifier } from "@package/com/zigythebird/playeranimcore/animation/layered/modifier";
import { $CustomKeyFrameEvents$CustomKeyFrameHandler_ } from "@package/com/zigythebird/playeranimcore/animation/keyframe/event";
import { $Vec3f_, $Vec3f } from "@package/com/zigythebird/playeranimcore/math";
import { $SoundKeyframeData, $CustomInstructionKeyframeData, $ParticleKeyframeData } from "@package/com/zigythebird/playeranimcore/animation/keyframe/event/data";
import { $PlayerAnimBone, $AdvancedPlayerAnimBone } from "@package/com/zigythebird/playeranimcore/bones";
import { $KeyframeLocation, $BoneAnimation_, $BoneAnimation, $Keyframe } from "@package/com/zigythebird/playeranimcore/animation/keyframe";
import { $Record, $Object } from "@package/java/lang";
import { $PlayState_, $State, $AnimationStage, $PlayState, $AnimationStage_ } from "@package/com/zigythebird/playeranimcore/enums";
import { $IAnimation, $AnimationStack } from "@package/com/zigythebird/playeranimcore/animation/layered";
import { $EasingType, $EasingType_ } from "@package/com/zigythebird/playeranimcore/easing";
export * as layered from "@package/com/zigythebird/playeranimcore/animation/layered";
export * as keyframe from "@package/com/zigythebird/playeranimcore/animation/keyframe";

declare module "@package/com/zigythebird/playeranimcore/animation" {
    export class $ExtraAnimationData extends $Record {
        name(): string;
        get<T>(key: string): (T) | undefined;
        put(name: string, object: $Object): void;
        copy(): $ExtraAnimationData;
        getValue(element: $JsonElement_): $Object;
        data(): $Map<string, $Object>;
        has(name: string): boolean;
        getNullable<T>(key: string): T;
        getList(key: string): $List<never>;
        fromJson(node: $JsonObject_, root: boolean): void;
        getRaw(name: string): $Object;
        isDisableAxisIfNotModified(): boolean;
        isAnimationPlayerAnimatorFormat(): boolean;
        static DISABLE_AXIS_IF_NOT_MODIFIED: string;
        static APPLY_BEND_TO_OTHER_BONES_KEY: string;
        static END_TICK_KEY: string;
        static NAME_KEY: string;
        static PARTICLE_EFFECTS_KEY: string;
        static BEGIN_TICK_KEY: string;
        static UUID_KEY: string;
        static EASING_BEFORE_KEY: string;
        static FORMAT_KEY: string;
        constructor(data: $Map_<string, $Object>);
        constructor();
        constructor(key: string, value: $Object);
        get disableAxisIfNotModified(): boolean;
        get animationPlayerAnimatorFormat(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ExtraAnimationData}.
     */
    export type $ExtraAnimationData_ = { data?: $Map_<string, $Object>,  } | [data?: $Map_<string, $Object>, ];
    export class $RawAnimation$Stage extends $Record {
        stage(): $AnimationStage;
        loopType(): $Animation$LoopType;
        animation(): $Animation;
        additionalTicks(): number;
        constructor(stage: $AnimationStage_, animation: $Animation_, loopType: $Animation$LoopType_, additionalTicks: number);
        constructor(animation: $Animation_, loopType: $Animation$LoopType_);
        constructor(stage: $AnimationStage_, animation: $Animation_, loopType: $Animation$LoopType_);
    }
    /**
     * Values that may be interpreted as {@link $RawAnimation$Stage}.
     */
    export type $RawAnimation$Stage_ = { animation?: $Animation_, loopType?: $Animation$LoopType_, stage?: $AnimationStage_, additionalTicks?: number,  } | [animation?: $Animation_, loopType?: $Animation$LoopType_, stage?: $AnimationStage_, additionalTicks?: number, ];
    export class $AnimationProcessor {
        tickAnimation(playerAnimManager: $AnimationStack, state: $AnimationData): void;
        handleAnimations(arg0: number, arg1: boolean): void;
        constructor();
    }
    export class $AnimationController$AnimationSetter {
    }
    export interface $AnimationController$AnimationSetter {
        setAnimation(animation: $RawAnimation): $PlayState;
        setAnimation(arg0: $RawAnimation, arg1: number): $PlayState;
    }
    /**
     * Values that may be interpreted as {@link $AnimationController$AnimationSetter}.
     */
    export type $AnimationController$AnimationSetter_ = ((arg0: $RawAnimation, arg1: number) => $PlayState_);
    export class $AnimationData {
        copy(): $AnimationData;
        isMovingLenient(): boolean;
        setVelocity(velocity: number): void;
        setPartialTick(partialTick: number): void;
        getPartialTick(): number;
        isMoving(): boolean;
        getVelocity(): number;
        constructor(velocity: number, partialTick: number);
        get movingLenient(): boolean;
        get moving(): boolean;
    }
    export class $Animation$LoopType {
        static register(name: string, loopType: $Animation$LoopType_): $Animation$LoopType;
        static returnToTickLoop(tick: number): $Animation$LoopType;
        static fromJson(json: $JsonElement_): $Animation$LoopType;
        static fromString(name: string): $Animation$LoopType;
        static LOOP: $Animation$LoopType;
        static HOLD_ON_LAST_FRAME: $Animation$LoopType;
        static PLAY_ONCE: $Animation$LoopType;
        static LOOP_TYPES: $Map<string, $Animation$LoopType>;
        static DEFAULT: $Animation$LoopType;
    }
    export interface $Animation$LoopType {
        shouldPlayAgain(arg0: $AnimationController, arg1: $Animation_): boolean;
        restartFromTick(controller: $AnimationController, currentAnimation: $Animation_): number;
    }
    /**
     * Values that may be interpreted as {@link $Animation$LoopType}.
     */
    export type $Animation$LoopType_ = ((arg0: $AnimationController, arg1: $Animation) => boolean);
    export class $Animation$Keyframes extends $Record {
        customInstructions(): $CustomInstructionKeyframeData[];
        sounds(): $SoundKeyframeData[];
        particles(): $ParticleKeyframeData[];
        constructor(sounds: $SoundKeyframeData[], particles: $ParticleKeyframeData[], customInstructions: $CustomInstructionKeyframeData[]);
    }
    /**
     * Values that may be interpreted as {@link $Animation$Keyframes}.
     */
    export type $Animation$Keyframes_ = { sounds?: $SoundKeyframeData[], customInstructions?: $CustomInstructionKeyframeData[], particles?: $ParticleKeyframeData[],  } | [sounds?: $SoundKeyframeData[], customInstructions?: $CustomInstructionKeyframeData[], particles?: $ParticleKeyframeData[], ];
    export class $AnimationController$AnimationStateHandler {
    }
    export interface $AnimationController$AnimationStateHandler {
        handle(arg0: $AnimationController, arg1: $AnimationData, arg2: $AnimationController$AnimationSetter_): $PlayState;
    }
    /**
     * Values that may be interpreted as {@link $AnimationController$AnimationStateHandler}.
     */
    export type $AnimationController$AnimationStateHandler_ = ((arg0: $AnimationController, arg1: $AnimationData, arg2: $AnimationController$AnimationSetter) => $PlayState_);
    export class $RawAnimation {
        static copyOf(other: $RawAnimation): $RawAnimation;
        static begin(): $RawAnimation;
        then(animation: $Animation_, loopType: $Animation$LoopType_): $RawAnimation;
        getAnimationStages(): $List<$RawAnimation$Stage>;
        thenPlay(animation: $Animation_): $RawAnimation;
        thenLoop(animation: $Animation_): $RawAnimation;
        thenWait(ticks: number): $RawAnimation;
        thenPlayAndHold(animation: $Animation_): $RawAnimation;
        thenPlayXTimes(animation: $Animation_, playCount: number): $RawAnimation;
        get animationStages(): $List<$RawAnimation$Stage>;
    }
    export class $AnimationProcessor$QueuedAnimation extends $Record {
        loopType(): $Animation$LoopType;
        animation(): $Animation;
        constructor(animation: $Animation_, loopType: $Animation$LoopType_);
    }
    /**
     * Values that may be interpreted as {@link $AnimationProcessor$QueuedAnimation}.
     */
    export type $AnimationProcessor$QueuedAnimation_ = { loopType?: $Animation$LoopType_, animation?: $Animation_,  } | [loopType?: $Animation$LoopType_, animation?: $Animation_, ];
    export class $AnimationController implements $IAnimation {
        getModifiers(): $List<$AbstractModifier>;
        stop(): void;
        isActive(): boolean;
        tick(state: $AnimationData): void;
        process(state: $AnimationData): void;
        get3DTransform(bone: $PlayerAnimBone): $PlayerAnimBone;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        getBone(name: string): $AdvancedPlayerAnimBone;
        unpause(): void;
        getAnimationSpeed(): number;
        setupAnim(state: $AnimationData): void;
        addModifier(modifier: $AbstractModifier, idx: number): $AnimationController;
        pause(): void;
        getFirstPersonMode(): $FirstPersonMode;
        getModifier(idx: number): $AbstractModifier;
        removeModifier(idx: number): $AnimationController;
        setCustomInstructionKeyframeHandler(customInstructionHandler: $CustomKeyFrameEvents$CustomKeyFrameHandler_<$CustomInstructionKeyframeData>): $AnimationController;
        stopTriggeredAnimation(): boolean;
        getBonePosition(arg0: string): $Vec3f;
        getAnimationTime(): number;
        getAnimationTicks(): number;
        hasBeginTick(): boolean;
        hasEndTick(): boolean;
        isDisableAxisIfNotModified(): boolean;
        isAnimationPlayerAnimatorFormat(): boolean;
        get3DTransformRaw(bone: $PlayerAnimBone): $PlayerAnimBone;
        setFirstPersonMode(mode: $FirstPersonMode_): void;
        setFirstPersonModeHandler(modeHandler: $Function_<$AnimationController, $FirstPersonMode>): void;
        setFirstPersonConfiguration(config: $FirstPersonConfiguration): void;
        setFirstPersonConfigurationHandler(configHandler: $Function_<$AnimationController, $FirstPersonConfiguration>): void;
        addModifierBefore(modifier: $AbstractModifier): $AnimationController;
        removeAllModifiers(): $AnimationController;
        getModifierCount(): number;
        removeModifierIf(predicate: $Predicate_<$AbstractModifier>): boolean;
        registerPlayerAnimBone(bone: $AdvancedPlayerAnimBone): $AdvancedPlayerAnimBone;
        registerPlayerAnimBone(name: string): $AdvancedPlayerAnimBone;
        isLoopStarted(): boolean;
        registerBones(): void;
        setSoundKeyframeHandler(soundHandler: $CustomKeyFrameEvents$CustomKeyFrameHandler_<$SoundKeyframeData>): $AnimationController;
        setParticleKeyframeHandler(particleHandler: $CustomKeyFrameEvents$CustomKeyFrameHandler_<$ParticleKeyframeData>): $AnimationController;
        setPostAnimationSetupConsumer(postAnimationSetupConsumer: $Consumer_<$Function<string, $AdvancedPlayerAnimBone>>): $AnimationController;
        setOverrideEasingType(easingTypeFunction: $EasingType_): $AnimationController;
        setOverrideEasingTypeFunction(easingType: $Function_<$AnimationController, $EasingType>): $AnimationController;
        receiveTriggeredAnimations(): $AnimationController;
        getCurrentAnimation(): $AnimationProcessor$QueuedAnimation;
        getCurrentAnimationInstance(): $Animation;
        getTriggeredAnimation(): $RawAnimation;
        getAnimationState(): $State;
        getAnimationData(): $AnimationData;
        forceAnimationReset(): void;
        hasAnimationFinished(): boolean;
        getCurrentRawAnimation(): $RawAnimation;
        isPlayingTriggeredAnimation(): boolean;
        triggerAnimation(newAnimation: $RawAnimation): void;
        triggerAnimation(newAnimation: $Animation_, startAnimFrom: number): void;
        triggerAnimation(newAnimation: $Animation_): void;
        triggerAnimation(newAnimation: $RawAnimation, startAnimFrom: number): void;
        replaceAnimationWithFade(fadeModifier: $AbstractFadeModifier, newAnimation: $Animation_, fadeFromNothing: boolean): void;
        replaceAnimationWithFade(fadeModifier: $AbstractFadeModifier, newAnimation: $RawAnimation): void;
        replaceAnimationWithFade(fadeModifier: $AbstractFadeModifier, newAnimation: $RawAnimation, fadeFromNothing: boolean): void;
        replaceAnimationWithFade(fadeModifier: $AbstractFadeModifier, newAnimation: $Animation_): void;
        addModifierLast(modifier: $AbstractModifier): $AnimationController;
        canRemove(): boolean;
        static EMPTY_KEYFRAME_LOCATION: $KeyframeLocation<$Keyframe>;
        static EMPTY_SCALE_KEYFRAME_LOCATION: $KeyframeLocation<$Keyframe>;
        constructor(animationHandler: $AnimationController$AnimationStateHandler_, molangRuntime: $Function_<$AnimationController, $MochaEngine<$AnimationController>>);
        get modifiers(): $List<$AbstractModifier>;
        get active(): boolean;
        get animationSpeed(): number;
        set upAnim(value: $AnimationData);
        set customInstructionKeyframeHandler(value: $CustomKeyFrameEvents$CustomKeyFrameHandler_<$CustomInstructionKeyframeData>);
        get animationTime(): number;
        get animationTicks(): number;
        get disableAxisIfNotModified(): boolean;
        get animationPlayerAnimatorFormat(): boolean;
        set firstPersonModeHandler(value: $Function_<$AnimationController, $FirstPersonMode>);
        set firstPersonConfigurationHandler(value: $Function_<$AnimationController, $FirstPersonConfiguration>);
        get modifierCount(): number;
        get loopStarted(): boolean;
        set soundKeyframeHandler(value: $CustomKeyFrameEvents$CustomKeyFrameHandler_<$SoundKeyframeData>);
        set particleKeyframeHandler(value: $CustomKeyFrameEvents$CustomKeyFrameHandler_<$ParticleKeyframeData>);
        set postAnimationSetupConsumer(value: $Consumer_<$Function<string, $AdvancedPlayerAnimBone>>);
        set overrideEasingType(value: $EasingType_);
        set overrideEasingTypeFunction(value: $Function_<$AnimationController, $EasingType>);
        get currentAnimation(): $AnimationProcessor$QueuedAnimation;
        get currentAnimationInstance(): $Animation;
        get triggeredAnimation(): $RawAnimation;
        get animationState(): $State;
        get animationData(): $AnimationData;
        get currentRawAnimation(): $RawAnimation;
        get playingTriggeredAnimation(): boolean;
    }
    export class $Animation extends $Record implements $Supplier<$UUID> {
        length(): number;
        data(): $ExtraAnimationData;
        parents(): $Map<string, string>;
        loopType(): $Animation$LoopType;
        bones(): $Map<string, $Vec3f>;
        boneAnimations(): $Map<string, $BoneAnimation>;
        keyFrames(): $Animation$Keyframes;
        isPlayingAt(tick: number): boolean;
        getBone(id: string): $BoneAnimation;
        getBoneOptional(id: string): ($BoneAnimation) | undefined;
        getNameOrId(): string;
        uuid(): $UUID;
        get(): $UUID;
        constructor(data: $ExtraAnimationData_, length: number, loopType: $Animation$LoopType_, boneAnimations: $Map_<string, $BoneAnimation_>, keyFrames: $Animation$Keyframes_, bones: $Map_<string, $Vec3f_>, parents: $Map_<string, string>);
        get nameOrId(): string;
    }
    /**
     * Values that may be interpreted as {@link $Animation}.
     */
    export type $Animation_ = { boneAnimations?: $Map_<string, $BoneAnimation_>, bones?: $Map_<string, $Vec3f_>, keyFrames?: $Animation$Keyframes_, parents?: $Map_<string, string>, data?: $ExtraAnimationData_, loopType?: $Animation$LoopType_, length?: number,  } | [boneAnimations?: $Map_<string, $BoneAnimation_>, bones?: $Map_<string, $Vec3f_>, keyFrames?: $Animation$Keyframes_, parents?: $Map_<string, string>, data?: $ExtraAnimationData_, loopType?: $Animation$LoopType_, length?: number, ];
}
