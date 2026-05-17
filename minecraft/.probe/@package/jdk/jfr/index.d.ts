import { $Reader, $InputStream, $Closeable } from "@package/java/io";
import { $Instant, $Duration, $Duration_ } from "@package/java/time";
import { $Annotation } from "@package/java/lang/annotation";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Event as $Event$1 } from "@package/jdk/internal/event";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $Enum, $Object, $Class } from "@package/java/lang";
export * as consumer from "@package/jdk/jfr/consumer";

declare module "@package/jdk/jfr" {
    export class $Event extends $Event$1 {
    }
    export class $RecordingState extends $Enum<$RecordingState> {
        static values(): $RecordingState[];
        static valueOf(arg0: string): $RecordingState;
        static NEW: $RecordingState;
        static DELAYED: $RecordingState;
        static CLOSED: $RecordingState;
        static RUNNING: $RecordingState;
        static STOPPED: $RecordingState;
    }
    /**
     * Values that may be interpreted as {@link $RecordingState}.
     */
    export type $RecordingState_ = "new" | "delayed" | "running" | "stopped" | "closed";
    export class $Configuration {
        getName(): string;
        static create(arg0: $Reader): $Configuration;
        static create(arg0: $Path_): $Configuration;
        getLabel(): string;
        getProvider(): string;
        getContents(): string;
        getSettings(): $Map<string, string>;
        static getConfiguration(arg0: string): $Configuration;
        getDescription(): string;
        static getConfigurations(): $List<$Configuration>;
        get name(): string;
        get label(): string;
        get provider(): string;
        get contents(): string;
        get settings(): $Map<string, string>;
        get description(): string;
        static get configurations(): $List<$Configuration>;
    }
    export class $AnnotationElement {
        getValue(arg0: string): $Object;
        getTypeName(): string;
        getAnnotation<A>(arg0: $Class<$Annotation>): A;
        hasValue(arg0: string): boolean;
        getValues(): $List<$Object>;
        getTypeId(): number;
        getAnnotationElements(): $List<$AnnotationElement>;
        getValueDescriptors(): $List<$ValueDescriptor>;
        constructor(arg0: $Class<$Annotation>);
        constructor(arg0: $Class<$Annotation>, arg1: $Object);
        constructor(arg0: $Class<$Annotation>, arg1: $Map_<string, $Object>);
        get typeName(): string;
        get values(): $List<$Object>;
        get typeId(): number;
        get annotationElements(): $List<$AnnotationElement>;
        get valueDescriptors(): $List<$ValueDescriptor>;
    }
    export class $ValueDescriptor {
        getName(): string;
        isArray(): boolean;
        getTypeName(): string;
        getFields(): $List<$ValueDescriptor>;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getLabel(): string;
        getTypeId(): number;
        getAnnotationElements(): $List<$AnnotationElement>;
        getContentType(): string;
        getDescription(): string;
        constructor(arg0: $Class<never>, arg1: string, arg2: $List_<$AnnotationElement>);
        constructor(arg0: $Class<never>, arg1: string);
        get name(): string;
        get array(): boolean;
        get typeName(): string;
        get fields(): $List<$ValueDescriptor>;
        get label(): string;
        get typeId(): number;
        get annotationElements(): $List<$AnnotationElement>;
        get contentType(): string;
        get description(): string;
    }
    export class $EventType {
        getName(): string;
        getFields(): $List<$ValueDescriptor>;
        getField(arg0: string): $ValueDescriptor;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        isEnabled(): boolean;
        getId(): number;
        getLabel(): string;
        static getEventType(arg0: $Class<$Event>): $EventType;
        getAnnotationElements(): $List<$AnnotationElement>;
        getSettingDescriptors(): $List<$SettingDescriptor>;
        getCategoryNames(): $List<string>;
        getDescription(): string;
        get name(): string;
        get fields(): $List<$ValueDescriptor>;
        get enabled(): boolean;
        get id(): number;
        get label(): string;
        get annotationElements(): $List<$AnnotationElement>;
        get settingDescriptors(): $List<$SettingDescriptor>;
        get categoryNames(): $List<string>;
        get description(): string;
    }
    export class $Recording implements $Closeable {
        getName(): string;
        copy(arg0: boolean): $Recording;
        start(): void;
        stop(): boolean;
        setName(arg0: string): void;
        getId(): number;
        getState(): $RecordingState;
        close(): void;
        dump(arg0: $Path_): void;
        getSize(): number;
        enable(arg0: $Class<$Event>): $EventSettings;
        enable(arg0: string): $EventSettings;
        getDuration(): $Duration;
        getStream(arg0: $Instant, arg1: $Instant): $InputStream;
        setToDisk(arg0: boolean): void;
        setSettings(arg0: $Map_<string, string>): void;
        setMaxAge(arg0: $Duration_): void;
        setMaxSize(arg0: number): void;
        setDuration(arg0: $Duration_): void;
        setDumpOnExit(arg0: boolean): void;
        scheduleStart(arg0: $Duration_): void;
        isToDisk(): boolean;
        getSettings(): $Map<string, string>;
        getMaxSize(): number;
        getMaxAge(): $Duration;
        getDumpOnExit(): boolean;
        getStopTime(): $Instant;
        disable(arg0: string): $EventSettings;
        disable(arg0: $Class<$Event>): $EventSettings;
        getStartTime(): $Instant;
        setDestination(arg0: $Path_): void;
        getDestination(): $Path;
        constructor(arg0: $Configuration);
        constructor();
        constructor(arg0: $Map_<string, string>);
        get id(): number;
        get state(): $RecordingState;
        get size(): number;
        get stopTime(): $Instant;
        get startTime(): $Instant;
    }
    export class $SettingDescriptor {
        getName(): string;
        getTypeName(): string;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getDefaultValue(): string;
        getLabel(): string;
        getTypeId(): number;
        getAnnotationElements(): $List<$AnnotationElement>;
        getContentType(): string;
        getDescription(): string;
        get name(): string;
        get typeName(): string;
        get defaultValue(): string;
        get label(): string;
        get typeId(): number;
        get annotationElements(): $List<$AnnotationElement>;
        get contentType(): string;
        get description(): string;
    }
    export class $EventSettings {
        with(arg0: string, arg1: string): $EventSettings;
        withStackTrace(): $EventSettings;
        withoutStackTrace(): $EventSettings;
        withoutThreshold(): $EventSettings;
        withPeriod(arg0: $Duration_): $EventSettings;
        withThreshold(arg0: $Duration_): $EventSettings;
    }
}
