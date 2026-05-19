
declare module "@package/com/zigythebird/playeranimcore/animation/keyframe/event/data" {
    export class $SoundKeyframeData extends $KeyFrameData {
        getSound(): string;
        constructor(startTick: number, sound: string);
        get sound(): string;
    }
    export class $KeyFrameData {
        getStartTick(): number;
        constructor(startTick: number);
        get startTick(): number;
    }
    export class $CustomInstructionKeyframeData extends $KeyFrameData {
        getInstructions(): string;
        constructor(startTick: number, instructions: string);
        get instructions(): string;
    }
    export class $ParticleKeyframeData extends $KeyFrameData {
        getLocator(): string;
        script(): string;
        getEffect(): string;
        constructor(startTick: number, effect: string, locator: string, script: string);
        get locator(): string;
        get effect(): string;
    }
}
