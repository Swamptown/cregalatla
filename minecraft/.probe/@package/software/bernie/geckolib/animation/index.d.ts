import { $JsonElement_ } from "@package/com/google/gson";
import { $GeoModel } from "@package/software/bernie/geckolib/model";
import { $DataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $BoneAnimation_, $AnimationPoint_, $BoneAnimationQueue, $BoneAnimation } from "@package/software/bernie/geckolib/animation/keyframe";
import { $CustomInstructionKeyframeData, $SoundKeyframeData, $ParticleKeyframeData } from "@package/software/bernie/geckolib/animation/keyframe/event/data";
import { $Queue, $List, $Map_, $List_, $Collection, $Map } from "@package/java/util";
import { $GeoAnimatable } from "@package/software/bernie/geckolib/animatable";
import { $Function_ } from "@package/java/util/function";
import { $Double2DoubleFunction, $Double2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/doubles";
import { $GeoBone, $BakedGeoModel_ } from "@package/software/bernie/geckolib/cache/object";
import { $SoundKeyframeEvent, $CustomInstructionKeyframeEvent, $ParticleKeyframeEvent } from "@package/software/bernie/geckolib/animation/keyframe/event";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as keyframe from "@package/software/bernie/geckolib/animation/keyframe";
export * as state from "@package/software/bernie/geckolib/animation/state";

declare module "@package/software/bernie/geckolib/animation" {
    export class $AnimationController$CustomKeyframeHandler<A extends $GeoAnimatable> {
    }
    export interface $AnimationController$CustomKeyframeHandler<A extends $GeoAnimatable> {
        handle(arg0: $CustomInstructionKeyframeEvent<A>): void;
    }
    /**
     * Values that may be interpreted as {@link $AnimationController$CustomKeyframeHandler}.
     */
    export type $AnimationController$CustomKeyframeHandler_<A> = ((arg0: $CustomInstructionKeyframeEvent<A>) => void);
    export class $AnimationProcessor<T extends $GeoAnimatable> {
        getBone(arg0: string): $GeoBone;
        tickAnimation(arg0: T, arg1: $GeoModel<T>, arg2: $AnimatableManager<T>, arg3: number, arg4: $AnimationState<T>, arg5: boolean): void;
        buildAnimationQueue(arg0: T, arg1: $RawAnimation): $Queue<$AnimationProcessor$QueuedAnimation>;
        getRegisteredBones(): $Collection<$GeoBone>;
        registerGeoBone(arg0: $GeoBone): void;
        setActiveModel(arg0: $BakedGeoModel_): void;
        preAnimationSetup(arg0: $AnimationState<T>, arg1: number): void;
        reloadAnimations: boolean;
        constructor(arg0: $GeoModel<T>);
        get registeredBones(): $Collection<$GeoBone>;
        set activeModel(value: $BakedGeoModel_);
    }
    export class $RawAnimation {
        static copyOf(arg0: $RawAnimation): $RawAnimation;
        static begin(): $RawAnimation;
        then(arg0: string, arg1: $Animation$LoopType_): $RawAnimation;
        getAnimationStages(): $List<$RawAnimation$Stage>;
        getStageCount(): number;
        thenPlay(arg0: string): $RawAnimation;
        thenLoop(arg0: string): $RawAnimation;
        thenWait(arg0: number): $RawAnimation;
        thenPlayXTimes(arg0: string, arg1: number): $RawAnimation;
        thenPlayAndHold(arg0: string): $RawAnimation;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RawAnimation>;
        get animationStages(): $List<$RawAnimation$Stage>;
        get stageCount(): number;
    }
    export class $AnimationController$AnimationStateHandler<A extends $GeoAnimatable> {
    }
    export interface $AnimationController$AnimationStateHandler<A extends $GeoAnimatable> {
        handle(arg0: $AnimationState<A>): $PlayState;
    }
    /**
     * Values that may be interpreted as {@link $AnimationController$AnimationStateHandler}.
     */
    export type $AnimationController$AnimationStateHandler_<A> = ((arg0: $AnimationState<A>) => $PlayState_);
    export class $Animation extends $Record {
        name(): string;
        length(): number;
        loopType(): $Animation$LoopType;
        boneAnimations(): $BoneAnimation[];
        keyFrames(): $Animation$Keyframes;
        constructor(name: string, length: number, loopType: $Animation$LoopType_, boneAnimations: $BoneAnimation_[], keyFrames: $Animation$Keyframes_);
    }
    /**
     * Values that may be interpreted as {@link $Animation}.
     */
    export type $Animation_ = { boneAnimations?: $BoneAnimation_[], name?: string, length?: number, keyFrames?: $Animation$Keyframes_, loopType?: $Animation$LoopType_,  } | [boneAnimations?: $BoneAnimation_[], name?: string, length?: number, keyFrames?: $Animation$Keyframes_, loopType?: $Animation$LoopType_, ];
    export class $AnimationProcessor$QueuedAnimation extends $Record {
        loopType(): $Animation$LoopType;
        animation(): $Animation;
        constructor(animation: $Animation_, loopType: $Animation$LoopType_);
    }
    /**
     * Values that may be interpreted as {@link $AnimationProcessor$QueuedAnimation}.
     */
    export type $AnimationProcessor$QueuedAnimation_ = { animation?: $Animation_, loopType?: $Animation$LoopType_,  } | [animation?: $Animation_, loopType?: $Animation$LoopType_, ];
    export class $AnimatableManager$ControllerRegistrar extends $Record {
        remove(arg0: string): $AnimatableManager$ControllerRegistrar;
        add(...arg0: $AnimationController<never>[]): $AnimatableManager$ControllerRegistrar;
        add(arg0: $AnimationController<never>): $AnimatableManager$ControllerRegistrar;
        controllers(): $List<$AnimationController<$GeoAnimatable>>;
        constructor(controllers: $List_<$AnimationController<$GeoAnimatable>>);
    }
    /**
     * Values that may be interpreted as {@link $AnimatableManager$ControllerRegistrar}.
     */
    export type $AnimatableManager$ControllerRegistrar_ = { controllers?: $List_<$AnimationController<$GeoAnimatable>>,  } | [controllers?: $List_<$AnimationController<$GeoAnimatable>>, ];
    export class $AnimationController<T extends $GeoAnimatable> {
        getName(): string;
        stop(): void;
        process(arg0: $GeoModel<T>, arg1: $AnimationState<T>, arg2: $Map_<string, $GeoBone>, arg3: $Map_<string, $BoneSnapshot>, arg4: number, arg5: boolean): void;
        setAnimationSpeed(arg0: number): $AnimationController<T>;
        getAnimationSpeed(): number;
        setAnimation(arg0: $RawAnimation): void;
        getStateHandler(): $AnimationController$AnimationStateHandler<T>;
        setAnimationSpeedHandler(arg0: $Function_<T, number>): $AnimationController<T>;
        triggerableAnim(arg0: string, arg1: $RawAnimation): $AnimationController<T>;
        getBoneAnimationQueues(): $Map<string, $BoneAnimationQueue>;
        setCustomInstructionKeyframeHandler(arg0: $AnimationController$CustomKeyframeHandler_<T>): $AnimationController<T>;
        setSoundKeyframeHandler(arg0: $AnimationController$SoundKeyframeHandler_<T>): $AnimationController<T>;
        setParticleKeyframeHandler(arg0: $AnimationController$ParticleKeyframeHandler_<T>): $AnimationController<T>;
        setOverrideEasingType(arg0: $EasingType_): $AnimationController<T>;
        setOverrideEasingTypeFunction(arg0: $Function_<T, $EasingType>): $AnimationController<T>;
        receiveTriggeredAnimations(): $AnimationController<T>;
        getCurrentAnimation(): $AnimationProcessor$QueuedAnimation;
        getTriggeredAnimation(): $RawAnimation;
        getAnimationState(): $AnimationController$State;
        forceAnimationReset(): void;
        hasAnimationFinished(): boolean;
        getCurrentRawAnimation(): $RawAnimation;
        isPlayingTriggeredAnimation(): boolean;
        tryTriggerAnimation(arg0: string): boolean;
        transitionLength(arg0: number): $AnimationController<T>;
        constructor(arg0: T, arg1: $AnimationController$AnimationStateHandler_<T>);
        constructor(arg0: T, arg1: string, arg2: number, arg3: $AnimationController$AnimationStateHandler_<T>);
        constructor(arg0: T, arg1: string, arg2: $AnimationController$AnimationStateHandler_<T>);
        constructor(arg0: T, arg1: number, arg2: $AnimationController$AnimationStateHandler_<T>);
        get name(): string;
        set animation(value: $RawAnimation);
        get stateHandler(): $AnimationController$AnimationStateHandler<T>;
        set animationSpeedHandler(value: $Function_<T, number>);
        get boneAnimationQueues(): $Map<string, $BoneAnimationQueue>;
        set customInstructionKeyframeHandler(value: $AnimationController$CustomKeyframeHandler_<T>);
        set soundKeyframeHandler(value: $AnimationController$SoundKeyframeHandler_<T>);
        set particleKeyframeHandler(value: $AnimationController$ParticleKeyframeHandler_<T>);
        set overrideEasingType(value: $EasingType_);
        set overrideEasingTypeFunction(value: $Function_<T, $EasingType>);
        get currentAnimation(): $AnimationProcessor$QueuedAnimation;
        get triggeredAnimation(): $RawAnimation;
        get animationState(): $AnimationController$State;
        get currentRawAnimation(): $RawAnimation;
        get playingTriggeredAnimation(): boolean;
    }
    export class $EasingType {
        static pow(arg0: number): $Double2DoubleFunction;
        static exp(arg0: number): number;
        static register(arg0: string, arg1: $EasingType_): $EasingType;
        static step(arg0: number): $Double2DoubleFunction;
        static back(arg0: number): $Double2DoubleFunction;
        static easeInOut(arg0: $Double2DoubleFunction_): $Double2DoubleFunction;
        static quadratic(arg0: number): number;
        static cubic(arg0: number): number;
        static elastic(arg0: number): $Double2DoubleFunction;
        static easeIn(arg0: $Double2DoubleFunction_): $Double2DoubleFunction;
        static easeOut(arg0: $Double2DoubleFunction_): $Double2DoubleFunction;
        static sine(arg0: number): number;
        static circle(arg0: number): number;
        static bounce(arg0: number): $Double2DoubleFunction;
        static linear(arg0: number): number;
        static linear(arg0: $Double2DoubleFunction_): $Double2DoubleFunction;
        static catmullRom(arg0: number): number;
        static stepPositive(arg0: $Double2DoubleFunction_): $Double2DoubleFunction;
        static stepNonNegative(arg0: $Double2DoubleFunction_): $Double2DoubleFunction;
        static fromJson(arg0: $JsonElement_): $EasingType;
        static fromString(arg0: string): $EasingType;
        static lerpWithOverride(arg0: $AnimationPoint_, arg1: $EasingType_): number;
        static EASE_OUT_QUAD: $EasingType;
        static EASE_OUT_SINE: $EasingType;
        static CATMULLROM: $EasingType;
        static EASE_OUT_ELASTIC: $EasingType;
        static EASE_OUT_QUART: $EasingType;
        static EASE_IN_OUT_QUAD: $EasingType;
        static EASE_IN_ELASTIC: $EasingType;
        static EASE_IN_CUBIC: $EasingType;
        static EASE_IN_QUINT: $EasingType;
        static EASE_IN_OUT_SINE: $EasingType;
        static EASE_IN_OUT_CIRC: $EasingType;
        static EASE_IN_EXPO: $EasingType;
        static EASE_OUT_CIRC: $EasingType;
        static EASE_IN_QUART: $EasingType;
        static EASE_OUT_CUBIC: $EasingType;
        static EASE_IN_OUT_BOUNCE: $EasingType;
        static EASE_IN_OUT_CUBIC: $EasingType;
        static EASE_IN_OUT_EXPO: $EasingType;
        static EASING_TYPES: $Map<string, $EasingType>;
        static EASE_OUT_BACK: $EasingType;
        static EASE_IN_BOUNCE: $EasingType;
        static EASE_IN_OUT_BACK: $EasingType;
        static STEP: $EasingType;
        static EASE_IN_OUT_QUINT: $EasingType;
        static EASE_IN_OUT_ELASTIC: $EasingType;
        static EASE_IN_BACK: $EasingType;
        static EASE_OUT_BOUNCE: $EasingType;
        static EASE_IN_SINE: $EasingType;
        static EASE_IN_QUAD: $EasingType;
        static EASE_OUT_EXPO: $EasingType;
        static EASE_OUT_QUINT: $EasingType;
        static LINEAR: $EasingType;
        static EASE_IN_OUT_QUART: $EasingType;
        static EASE_IN_CIRC: $EasingType;
    }
    export interface $EasingType {
        apply(arg0: $AnimationPoint_): number;
        apply(arg0: $AnimationPoint_, arg1: number, arg2: number): number;
        buildTransformer(arg0: number): $Double2DoubleFunction;
    }
    /**
     * Values that may be interpreted as {@link $EasingType}.
     */
    export type $EasingType_ = ((arg0: number) => $Double2DoubleFunction_);
    export class $AnimationController$State extends $Enum<$AnimationController$State> {
        static values(): $AnimationController$State[];
        static valueOf(arg0: string): $AnimationController$State;
        static PAUSED: $AnimationController$State;
        static RUNNING: $AnimationController$State;
        static STOPPED: $AnimationController$State;
        static TRANSITIONING: $AnimationController$State;
    }
    /**
     * Values that may be interpreted as {@link $AnimationController$State}.
     */
    export type $AnimationController$State_ = "running" | "transitioning" | "paused" | "stopped";
    export class $AnimationState<T extends $GeoAnimatable> {
        getData<D>(arg0: $DataTicket<D>): D;
        getAnimatable(): T;
        getPartialTick(): number;
        getController(): $AnimationController<T>;
        setAnimation(arg0: $RawAnimation): void;
        isMoving(): boolean;
        setAndContinue(arg0: $RawAnimation): $PlayState;
        withController(arg0: $AnimationController<T>): $AnimationState<T>;
        getAnimationTick(): number;
        getLimbSwing(): number;
        getLimbSwingAmount(): number;
        isCurrentAnimation(arg0: $RawAnimation): boolean;
        isCurrentAnimationStage(arg0: string): boolean;
        resetCurrentAnimation(): void;
        setControllerSpeed(arg0: number): void;
        setData<D>(arg0: $DataTicket<D>, arg1: D): void;
        getExtraData(): $Map<$DataTicket<never>, never>;
        animationTick: number;
        constructor(arg0: T, arg1: number, arg2: number, arg3: number, arg4: boolean);
        get animatable(): T;
        get partialTick(): number;
        get controller(): $AnimationController<T>;
        set animation(value: $RawAnimation);
        get moving(): boolean;
        set andContinue(value: $RawAnimation);
        get limbSwing(): number;
        get limbSwingAmount(): number;
        set controllerSpeed(value: number);
        get extraData(): $Map<$DataTicket<never>, never>;
    }
    export class $AnimationController$ParticleKeyframeHandler<A extends $GeoAnimatable> {
    }
    export interface $AnimationController$ParticleKeyframeHandler<A extends $GeoAnimatable> {
        handle(arg0: $ParticleKeyframeEvent<A>): void;
    }
    /**
     * Values that may be interpreted as {@link $AnimationController$ParticleKeyframeHandler}.
     */
    export type $AnimationController$ParticleKeyframeHandler_<A> = ((arg0: $ParticleKeyframeEvent<A>) => void);
    export class $Animation$LoopType {
        static register(arg0: string, arg1: $Animation$LoopType_): $Animation$LoopType;
        static fromJson(arg0: $JsonElement_): $Animation$LoopType;
        static fromString(arg0: string): $Animation$LoopType;
        static LOOP: $Animation$LoopType;
        static HOLD_ON_LAST_FRAME: $Animation$LoopType;
        static PLAY_ONCE: $Animation$LoopType;
        static LOOP_TYPES: $Map<string, $Animation$LoopType>;
        static DEFAULT: $Animation$LoopType;
    }
    export interface $Animation$LoopType {
        getId(): string;
        shouldPlayAgain(arg0: $GeoAnimatable, arg1: $AnimationController<$GeoAnimatable>, arg2: $Animation_): boolean;
        get id(): string;
    }
    /**
     * Values that may be interpreted as {@link $Animation$LoopType}.
     */
    export type $Animation$LoopType_ = ((arg0: $GeoAnimatable, arg1: $AnimationController<$GeoAnimatable>, arg2: $Animation) => boolean);
    export class $AnimationController$SoundKeyframeHandler<A extends $GeoAnimatable> {
    }
    export interface $AnimationController$SoundKeyframeHandler<A extends $GeoAnimatable> {
        handle(arg0: $SoundKeyframeEvent<A>): void;
    }
    /**
     * Values that may be interpreted as {@link $AnimationController$SoundKeyframeHandler}.
     */
    export type $AnimationController$SoundKeyframeHandler_<A> = ((arg0: $SoundKeyframeEvent<A>) => void);
    export class $RawAnimation$Stage extends $Record {
        loopType(): $Animation$LoopType;
        animationName(): string;
        additionalTicks(): number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RawAnimation$Stage>;
        constructor(arg0: string, arg1: $Animation$LoopType_);
        constructor(animationName: string, loopType: $Animation$LoopType_, additionalTicks: number);
    }
    /**
     * Values that may be interpreted as {@link $RawAnimation$Stage}.
     */
    export type $RawAnimation$Stage_ = { additionalTicks?: number, loopType?: $Animation$LoopType_, animationName?: string,  } | [additionalTicks?: number, loopType?: $Animation$LoopType_, animationName?: string, ];
    export class $PlayState extends $Enum<$PlayState> {
        static values(): $PlayState[];
        static valueOf(arg0: string): $PlayState;
        static CONTINUE: $PlayState;
        static STOP: $PlayState;
    }
    /**
     * Values that may be interpreted as {@link $PlayState}.
     */
    export type $PlayState_ = "continue" | "stop";
    export class $AnimatableManager<T extends $GeoAnimatable> {
        getData<D>(arg0: $DataTicket<D>): D;
        startedAt(arg0: number): void;
        removeController(arg0: string): void;
        getLastUpdateTime(): number;
        getAnimationControllers(): $Map<string, $AnimationController<T>>;
        getBoneSnapshotCollection(): $Map<string, $BoneSnapshot>;
        clearSnapshotCache(): void;
        getFirstTickTime(): number;
        setData<D>(arg0: $DataTicket<D>, arg1: D): void;
        addController(arg0: $AnimationController<any>): void;
        updatedAt(arg0: number): void;
        isFirstTick(): boolean;
        stopTriggeredAnimation(arg0: string, arg1: string): void;
        stopTriggeredAnimation(arg0: string): void;
        tryTriggerAnimation(arg0: string): void;
        tryTriggerAnimation(arg0: string, arg1: string): void;
        constructor(arg0: $GeoAnimatable);
        get lastUpdateTime(): number;
        get animationControllers(): $Map<string, $AnimationController<T>>;
        get boneSnapshotCollection(): $Map<string, $BoneSnapshot>;
        get firstTickTime(): number;
        get firstTick(): boolean;
    }
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
}
