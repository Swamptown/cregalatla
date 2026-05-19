import { $JsonObject_, $JsonElement_ } from "@package/com/google/gson";
import { $MochaEngine } from "@package/team/unnamed/mocha";
import { $FirstPersonConfiguration, $FirstPersonMode, $FirstPersonMode_ } from "@package/com/zigythebird/playeranimcore/api/firstPerson";
import { $UUID, $List, $Map_, $Map } from "@package/java/util";
import { $Function_, $Consumer_, $Predicate_, $Function, $Supplier } from "@package/java/util/function";
import { $AbstractModifier, $AbstractFadeModifier } from "@package/com/zigythebird/playeranimcore/animation/layered/modifier";
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
        isDisableAxisIfNotModified(): boolean;
        isAnimationPlayerAnimatorFormat(): boolean;
        getNullable<T>(key: string): T;
        has(name: string): boolean;
        name(): string;
        get<T>(key: string): (T) | undefined;
        put(name: string, object: $Object): void;
        getValue(element: $JsonElement_): $Object;
        data(): $Map<string, $Object>;
        copy(): $ExtraAnimationData;
        getList(key: string): $List<never>;
        fromJson(node: $JsonObject_, root: boolean): void;
        getRaw(name: string): $Object;
        static DISABLE_AXIS_IF_NOT_MODIFIED: string;
        static APPLY_BEND_TO_OTHER_BONES_KEY: string;
        static END_TICK_KEY: string;
        static NAME_KEY: string;
        static PARTICLE_EFFECTS_KEY: string;
        static BEGIN_TICK_KEY: string;
        static UUID_KEY: string;
        static EASING_BEFORE_KEY: string;
        static FORMAT_KEY: string;
        constructor(key: string, value: $Object);
        constructor(data: $Map_<string, $Object>);
        constructor();
        get disableAxisIfNotModified(): boolean;
        get animationPlayerAnimatorFormat(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ExtraAnimationData}.
     */
    export type $ExtraAnimationData_ = { data?: $Map_<string, $Object>,  } | [data?: $Map_<string, $Object>, ];
    export class $RawAnimation$Stage extends $Record {
        additionalTicks(): number;
        stage(): $AnimationStage;
        loopType(): $Animation$LoopType;
        animation(): $Animation;
        constructor(stage: $AnimationStage_, animation: $Animation_, loopType: $Animation$LoopType_);
        constructor(animation: $Animation_, loopType: $Animation$LoopType_);
        constructor(stage: $AnimationStage_, animation: $Animation_, loopType: $Animation$LoopType_, additionalTicks: number);
    }
    /**
     * Values that may be interpreted as {@link $RawAnimation$Stage}.
     */
    export type $RawAnimation$Stage_ = { additionalTicks?: number, stage?: $AnimationStage_, loopType?: $Animation$LoopType_, animation?: $Animation_,  } | [additionalTicks?: number, stage?: $AnimationStage_, loopType?: $Animation$LoopType_, animation?: $Animation_, ];
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
        isMovingLenient(): boolean;
        setVelocity(velocity: number): void;
        setPartialTick(partialTick: number): void;
        getPartialTick(): number;
        isMoving(): boolean;
        copy(): $AnimationData;
        getVelocity(): number;
        constructor(velocity: number, partialTick: number);
        get movingLenient(): boolean;
        get moving(): boolean;
    }
    export class $Animation$LoopType {
        static returnToTickLoop(tick: number): $Animation$LoopType;
        static register(name: string, loopType: $Animation$LoopType_): $Animation$LoopType;
        static fromJson(json: $JsonElement_): $Animation$LoopType;
        static fromString(name: string): $Animation$LoopType;
        static LOOP: $Animation$LoopType;
        static HOLD_ON_LAST_FRAME: $Animation$LoopType;
        static PLAY_ONCE: $Animation$LoopType;
        static LOOP_TYPES: $Map<string, $Animation$LoopType>;
        static DEFAULT: $Animation$LoopType;
    }
    export interface $Animation$LoopType {
        restartFromTick(controller: $AnimationController, currentAnimation: $Animation_): number;
        shouldPlayAgain(arg0: $AnimationController, arg1: $Animation_): boolean;
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
    export type $Animation$Keyframes_ = { particles?: $ParticleKeyframeData[], customInstructions?: $CustomInstructionKeyframeData[], sounds?: $SoundKeyframeData[],  } | [particles?: $ParticleKeyframeData[], customInstructions?: $CustomInstructionKeyframeData[], sounds?: $SoundKeyframeData[], ];
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
        getAnimationStages(): $List<$RawAnimation$Stage>;
        thenPlay(animation: $Animation_): $RawAnimation;
        thenLoop(animation: $Animation_): $RawAnimation;
        thenWait(ticks: number): $RawAnimation;
        thenPlayAndHold(animation: $Animation_): $RawAnimation;
        thenPlayXTimes(animation: $Animation_, playCount: number): $RawAnimation;
        then(animation: $Animation_, loopType: $Animation$LoopType_): $RawAnimation;
        static copyOf(other: $RawAnimation): $RawAnimation;
        static begin(): $RawAnimation;
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
    export type $AnimationProcessor$QueuedAnimation_ = { animation?: $Animation_, loopType?: $Animation$LoopType_,  } | [animation?: $Animation_, loopType?: $Animation$LoopType_, ];
    export class $AnimationController implements $IAnimation {
        setPostAnimationSetupConsumer(postAnimationSetupConsumer: $Consumer_<$Function<string, $AdvancedPlayerAnimBone>>): $AnimationController;
        isLoopStarted(): boolean;
        registerBones(): void;
        setSoundKeyframeHandler(soundHandler: $CustomKeyFrameEvents$CustomKeyFrameHandler_<$SoundKeyframeData>): $AnimationController;
        setParticleKeyframeHandler(particleHandler: $CustomKeyFrameEvents$CustomKeyFrameHandler_<$ParticleKeyframeData>): $AnimationController;
        setCustomInstructionKeyframeHandler(customInstructionHandler: $CustomKeyFrameEvents$CustomKeyFrameHandler_<$CustomInstructionKeyframeData>): $AnimationController;
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
        triggerAnimation(newAnimation: $Animation_): void;
        triggerAnimation(newAnimation: $RawAnimation, startAnimFrom: number): void;
        triggerAnimation(newAnimation: $RawAnimation): void;
        triggerAnimation(newAnimation: $Animation_, startAnimFrom: number): void;
        replaceAnimationWithFade(fadeModifier: $AbstractFadeModifier, newAnimation: $Animation_): void;
        replaceAnimationWithFade(fadeModifier: $AbstractFadeModifier, newAnimation: $Animation_, fadeFromNothing: boolean): void;
        replaceAnimationWithFade(fadeModifier: $AbstractFadeModifier, newAnimation: $RawAnimation): void;
        replaceAnimationWithFade(fadeModifier: $AbstractFadeModifier, newAnimation: $RawAnimation, fadeFromNothing: boolean): void;
        addModifierLast(modifier: $AbstractModifier): $AnimationController;
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
        getAnimationSpeed(): number;
        unpause(): void;
        setupAnim(state: $AnimationData): void;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        get3DTransform(bone: $PlayerAnimBone): $PlayerAnimBone;
        getBone(name: string): $AdvancedPlayerAnimBone;
        addModifier(modifier: $AbstractModifier, idx: number): $AnimationController;
        tick(state: $AnimationData): void;
        getModifiers(): $List<$AbstractModifier>;
        stop(): void;
        isActive(): boolean;
        process(state: $AnimationData): void;
        getFirstPersonMode(): $FirstPersonMode;
        pause(): void;
        getModifier(idx: number): $AbstractModifier;
        removeModifier(idx: number): $AnimationController;
        canRemove(): boolean;
        static EMPTY_KEYFRAME_LOCATION: $KeyframeLocation<$Keyframe>;
        static EMPTY_SCALE_KEYFRAME_LOCATION: $KeyframeLocation<$Keyframe>;
        constructor(animationHandler: $AnimationController$AnimationStateHandler_, molangRuntime: $Function_<$AnimationController, $MochaEngine<$AnimationController>>);
        set postAnimationSetupConsumer(value: $Consumer_<$Function<string, $AdvancedPlayerAnimBone>>);
        get loopStarted(): boolean;
        set soundKeyframeHandler(value: $CustomKeyFrameEvents$CustomKeyFrameHandler_<$SoundKeyframeData>);
        set particleKeyframeHandler(value: $CustomKeyFrameEvents$CustomKeyFrameHandler_<$ParticleKeyframeData>);
        set customInstructionKeyframeHandler(value: $CustomKeyFrameEvents$CustomKeyFrameHandler_<$CustomInstructionKeyframeData>);
        set overrideEasingType(value: $EasingType_);
        set overrideEasingTypeFunction(value: $Function_<$AnimationController, $EasingType>);
        get currentAnimation(): $AnimationProcessor$QueuedAnimation;
        get currentAnimationInstance(): $Animation;
        get triggeredAnimation(): $RawAnimation;
        get animationState(): $State;
        get animationData(): $AnimationData;
        get currentRawAnimation(): $RawAnimation;
        get playingTriggeredAnimation(): boolean;
        get animationTime(): number;
        get animationTicks(): number;
        get disableAxisIfNotModified(): boolean;
        get animationPlayerAnimatorFormat(): boolean;
        set firstPersonModeHandler(value: $Function_<$AnimationController, $FirstPersonMode>);
        set firstPersonConfigurationHandler(value: $Function_<$AnimationController, $FirstPersonConfiguration>);
        get modifierCount(): number;
        get animationSpeed(): number;
        set upAnim(value: $AnimationData);
        get modifiers(): $List<$AbstractModifier>;
        get active(): boolean;
    }
    export class $Animation extends $Record implements $Supplier<$UUID> {
        bones(): $Map<string, $Vec3f>;
        keyFrames(): $Animation$Keyframes;
        boneAnimations(): $Map<string, $BoneAnimation>;
        isPlayingAt(tick: number): boolean;
        getBone(id: string): $BoneAnimation;
        getBoneOptional(id: string): ($BoneAnimation) | undefined;
        getNameOrId(): string;
        get(): $UUID;
        length(): number;
        data(): $ExtraAnimationData;
        parents(): $Map<string, string>;
        loopType(): $Animation$LoopType;
        uuid(): $UUID;
        constructor(data: $ExtraAnimationData_, length: number, loopType: $Animation$LoopType_, boneAnimations: $Map_<string, $BoneAnimation_>, keyFrames: $Animation$Keyframes_, bones: $Map_<string, $Vec3f_>, parents: $Map_<string, string>);
        get nameOrId(): string;
    }
    /**
     * Values that may be interpreted as {@link $Animation}.
     */
    export type $Animation_ = { loopType?: $Animation$LoopType_, data?: $ExtraAnimationData_, parents?: $Map_<string, string>, keyFrames?: $Animation$Keyframes_, bones?: $Map_<string, $Vec3f_>, boneAnimations?: $Map_<string, $BoneAnimation_>, length?: number,  } | [loopType?: $Animation$LoopType_, data?: $ExtraAnimationData_, parents?: $Map_<string, string>, keyFrames?: $Animation$Keyframes_, bones?: $Map_<string, $Vec3f_>, boneAnimations?: $Map_<string, $BoneAnimation_>, length?: number, ];
}
