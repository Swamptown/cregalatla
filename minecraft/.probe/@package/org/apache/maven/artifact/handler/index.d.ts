
declare module "@package/org/apache/maven/artifact/handler" {
    export class $ArtifactHandler {
        static ROLE: string;
    }
    export interface $ArtifactHandler {
        getLanguage(): string;
        getExtension(): string;
        getPackaging(): string;
        isIncludesDependencies(): boolean;
        isAddedToClasspath(): boolean;
        getClassifier(): string;
        getDirectory(): string;
        get language(): string;
        get extension(): string;
        get packaging(): string;
        get includesDependencies(): boolean;
        get addedToClasspath(): boolean;
        get classifier(): string;
        get directory(): string;
    }
}
