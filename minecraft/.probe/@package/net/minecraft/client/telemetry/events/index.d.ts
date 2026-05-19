import { $GameType_ } from "@package/net/minecraft/world/level";
import { $Duration_ } from "@package/java/time";
import { $TelemetryProperty_, $TelemetryEventSender_, $TelemetryPropertyMap$Builder } from "@package/net/minecraft/client/telemetry";
import { $Codec } from "@package/com/mojang/serialization";
import { $Ticker, $Stopwatch } from "@package/com/google/common/base";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/client/telemetry/events" {
    export class $GameLoadTimesEvent {
        send(arg0: $TelemetryEventSender_): void;
        endStep(arg0: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>): void;
        beginStep(arg0: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>): void;
        beginStep(arg0: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>, arg1: $Stopwatch): void;
        setBootstrapTime(arg0: number): void;
        static INSTANCE: $GameLoadTimesEvent;
        constructor(arg0: $Ticker);
        set bootstrapTime(value: number);
    }
    export class $WorldLoadTimesEvent {
        send(arg0: $TelemetryEventSender_): void;
        constructor(arg0: boolean, arg1: $Duration_);
    }
    export class $WorldUnloadEvent {
        setTime(arg0: number): void;
        send(arg0: $TelemetryEventSender_): void;
        onPlayerInfoReceived(): void;
        constructor();
        set time(value: number);
    }
    export class $AggregatedTelemetryEvent {
        getSampleCount(): number;
        shouldTakeSample(): boolean;
        shouldSentEvent(): boolean;
        takeSample(): void;
        sendEvent(arg0: $TelemetryEventSender_): void;
        tick(arg0: $TelemetryEventSender_): void;
        start(): void;
        stop(): void;
        constructor();
        get sampleCount(): number;
    }
    export class $GameLoadTimesEvent$Measurement extends $Record {
        millis(): number;
        static CODEC: $Codec<$GameLoadTimesEvent$Measurement>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $GameLoadTimesEvent$Measurement}.
     */
    export type $GameLoadTimesEvent$Measurement_ = { millis?: number,  } | [millis?: number, ];
    export class $PerformanceMetricsEvent extends $AggregatedTelemetryEvent {
        constructor();
    }
    export class $WorldLoadEvent {
        setServerBrand(arg0: string): void;
        addProperties(arg0: $TelemetryPropertyMap$Builder): void;
        setGameMode(arg0: $GameType_, arg1: boolean): void;
        send(arg0: $TelemetryEventSender_): boolean;
        constructor(arg0: string);
        set serverBrand(value: string);
    }
}
