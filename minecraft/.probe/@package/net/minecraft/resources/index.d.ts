import { $JsonDeserializationContext_, $JsonDeserializer, $JsonSerializationContext, $JsonElement_, $JsonElement, $JsonSerializer } from "@package/com/google/gson";
import { $RegistryBuilder } from "@package/net/neoforged/neoforge/registries";
import { $RegistryDataAccessor } from "@package/foundry/veil/mixin/registry/accessor";
import { $DelegatingOpsAccessor } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $Decoder, $Decoder$Simple, $Codec$ResultFunction, $Encoder_, $DataResult, $DynamicOps, $MapLike, $ListBuilder, $Codec, $Decoder$Boxed, $Lifecycle, $Dynamic, $RecordBuilder, $MapCodec, $Encoder, $Decoder$Terminal, $Decoder_ } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $ResourceManager, $Resource, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $BiConsumer, $Consumer, $BiConsumer_, $Supplier_, $Function_, $Consumer_, $UnaryOperator_, $Function } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $RegistryAccess$Frozen, $HolderSet, $HolderSet_, $Holder, $HolderLookup$RegistryLookup, $RegistrySynchronization$PackedRegistryEntry_, $RegistryAccess, $Registry, $Holder$Reference, $HolderOwner, $WritableRegistry, $HolderGetter } from "@package/net/minecraft/core";
import { $IntStream, $LongStream, $Stream } from "@package/java/util/stream";
import { $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { RegistryTypes } from "@special/types";
import { $Type } from "@package/java/lang/reflect";
import { $SpecialEquality } from "@package/dev/latvian/mods/rhino/util";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $Record, $Number, $Exception, $Comparable, $Object } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/resources" {
    export class $ResourceLocation implements $Comparable<$ResourceLocation>, $SpecialEquality {
        getNamespace(): string;
        compareTo(arg0: $ResourceLocation_): number;
        static read(arg0: $StringReader): $ResourceLocation;
        static read(arg0: string): $DataResult<$ResourceLocation>;
        static parse(arg0: string): $ResourceLocation;
        getPath(): string;
        withPrefix(arg0: string): $ResourceLocation;
        withSuffix(arg0: string): $ResourceLocation;
        static fromNamespaceAndPath(arg0: string, arg1: string): $ResourceLocation;
        static tryParse(arg0: string): $ResourceLocation;
        static withDefaultNamespace(arg0: string): $ResourceLocation;
        static isValidPath(arg0: string): boolean;
        static isValidNamespace(arg0: string): boolean;
        static bySeparator(arg0: string, arg1: string): $ResourceLocation;
        static tryBySeparator(arg0: string, arg1: string): $ResourceLocation;
        static tryBuild(arg0: string, arg1: string): $ResourceLocation;
        withPath(arg0: $UnaryOperator_<string>): $ResourceLocation;
        withPath(arg0: string): $ResourceLocation;
        compareNamespaced(arg0: $ResourceLocation_): number;
        toDebugFileName(): string;
        toLanguageKey(arg0: string, arg1: string): string;
        toLanguageKey(): string;
        toLanguageKey(arg0: string): string;
        toShortLanguageKey(): string;
        static isAllowedInResourceLocation(arg0: string): boolean;
        static readNonEmpty(arg0: $StringReader): $ResourceLocation;
        static validPathChar(arg0: string): boolean;
        static validNamespaceChar(arg0: string): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        static CODEC: $Codec<$ResourceLocation>;
        static REALMS_NAMESPACE: string;
        static ERROR_INVALID: $SimpleCommandExceptionType;
        static NAMESPACE_SEPARATOR: string;
        static DEFAULT_NAMESPACE: string;
        static $assertionsDisabled: boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ResourceLocation>;
        get namespace(): string;
        get path(): string;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLocation}.
     */
    export type $ResourceLocation_ = string;
    export class $RegistryDataLoader$LoadingFunction {
    }
    export interface $RegistryDataLoader$LoadingFunction {
        apply(arg0: $RegistryDataLoader$Loader_<never>, arg1: $RegistryOps$RegistryInfoLookup_): void;
    }
    /**
     * Values that may be interpreted as {@link $RegistryDataLoader$LoadingFunction}.
     */
    export type $RegistryDataLoader$LoadingFunction_ = ((arg0: $RegistryDataLoader$Loader<never>, arg1: $RegistryOps$RegistryInfoLookup) => void);
    export class $RegistryDataLoader$RegistryData<T> extends $Record implements $RegistryDataAccessor {
        requiredNonEmpty(): boolean;
        registryBuilderConsumer(): $Consumer<$RegistryBuilder<T>>;
        runWithArguments(arg0: $BiConsumer_<$ResourceKey<$Registry<T>>, $Codec<T>>): void;
        key(): $ResourceKey<$Registry<T>>;
        create(arg0: $Lifecycle, arg1: $Map_<$ResourceKey_<never>, $Exception>): $RegistryDataLoader$Loader<T>;
        elementCodec(): $Codec<T>;
        invokeCreate(arg0: $Lifecycle, arg1: $Map_<$ResourceKey_<never>, $Exception>): $RegistryDataLoader$Loader<never>;
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $Codec<T>, arg2: boolean);
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $Codec<T>);
        constructor(key: $ResourceKey_<$Registry<T>>, elementCodec: $Codec<T>, requiredNonEmpty: boolean, registryBuilderConsumer: $Consumer_<$RegistryBuilder<T>>);
    }
    /**
     * Values that may be interpreted as {@link $RegistryDataLoader$RegistryData}.
     */
    export type $RegistryDataLoader$RegistryData_<T> = { key?: $ResourceKey_<$Registry<any>>, requiredNonEmpty?: boolean, registryBuilderConsumer?: $Consumer_<$RegistryBuilder<any>>, elementCodec?: $Codec<any>,  } | [key?: $ResourceKey_<$Registry<any>>, requiredNonEmpty?: boolean, registryBuilderConsumer?: $Consumer_<$RegistryBuilder<any>>, elementCodec?: $Codec<any>, ];
    export class $HolderSetCodec<E> implements $Codec<$HolderSet<E>> {
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair<$HolderSet<E>, T>>;
        encode<T>(arg0: $HolderSet_<E>, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        static create<E>(arg0: $ResourceKey_<$Registry<E>>, arg1: $Codec<$Holder_<E>>, arg2: boolean): $Codec<$HolderSet<E>>;
        dispatch<E>(arg0: $Function_<E, $HolderSet<E>>, arg1: $Function_<$HolderSet<E>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $HolderSet<E>>, arg2: $Function_<$HolderSet<E>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$HolderSet<E>, $DataResult<$HolderSet<E>>>): $Codec<$HolderSet<E>>;
        orElse(arg0: $HolderSet_<E>): $Codec<$HolderSet<E>>;
        orElse(arg0: $Consumer_<string>, arg1: $HolderSet_<E>): $Codec<$HolderSet<E>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $HolderSet_<E>): $Codec<$HolderSet<E>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$HolderSet<E>>): $Codec<$HolderSet<E>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$HolderSet<E>>): $Codec<$HolderSet<E>>;
        orElseGet(arg0: $Supplier_<$HolderSet<E>>): $Codec<$HolderSet<E>>;
        comapFlatMap<S>(arg0: $Function_<$HolderSet<E>, $DataResult<S>>, arg1: $Function_<S, $HolderSet<E>>): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: $HolderSet_<E>, arg2: $Lifecycle): $MapCodec<$HolderSet<E>>;
        optionalFieldOf(arg0: string): $MapCodec<($HolderSet<E>) | undefined>;
        optionalFieldOf(arg0: string, arg1: $HolderSet_<E>): $MapCodec<$HolderSet<E>>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $HolderSet_<E>, arg3: $Lifecycle): $MapCodec<$HolderSet<E>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$HolderSet<E>>>;
        listOf(): $Codec<$List<$HolderSet<E>>>;
        xmap<S>(arg0: $Function_<$HolderSet<E>, S>, arg1: $Function_<S, $HolderSet<E>>): $Codec<S>;
        stable(): $Codec<$HolderSet<E>>;
        withLifecycle(arg0: $Lifecycle): $Codec<$HolderSet<E>>;
        deprecated(arg0: number): $Codec<$HolderSet<E>>;
        flatXmap<S>(arg0: $Function_<$HolderSet<E>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$HolderSet<E>>>): $Codec<S>;
        fieldOf(arg0: string): $MapCodec<$HolderSet<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $HolderSet_<E>, arg2: $Lifecycle): $MapCodec<$HolderSet<E>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($HolderSet<E>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $HolderSet_<E>, arg3: $Lifecycle): $MapCodec<$HolderSet<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $HolderSet_<E>): $MapCodec<$HolderSet<E>>;
        mapResult(arg0: $Codec$ResultFunction<$HolderSet_<E>>): $Codec<$HolderSet<E>>;
        promotePartial(arg0: $Consumer_<string>): $Codec<$HolderSet<E>>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$HolderSet<E>>>, arg2: $Function_<$HolderSet<E>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $HolderSet<E>>, arg2: $Function_<$HolderSet<E>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, $HolderSet<E>>, arg1: $Function_<$HolderSet<E>, $MapCodec<E>>): $MapCodec<E>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$HolderSet<E>>>;
        flatComapMap<S>(arg0: $Function_<$HolderSet<E>, S>, arg1: $Function_<S, $DataResult<$HolderSet<E>>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, $HolderSet<E>>, arg1: $Function_<$HolderSet<E>, $MapCodec<E>>): $Codec<E>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: $HolderSet_<E>): $DataResult<T>;
        comap<B>(arg0: $Function_<B, $HolderSet<E>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$HolderSet<E>>>): $Encoder<B>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$HolderSet<E>, T>>;
        map<B>(arg0: $Function_<$HolderSet<E>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$HolderSet<E>, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$HolderSet<E>>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$HolderSet<E>>;
        boxed(): $Decoder$Boxed<$HolderSet<E>>;
        terminal(): $Decoder$Terminal<$HolderSet<E>>;
        simple(): $Decoder$Simple<$HolderSet<E>>;
    }
    export class $RegistryOps<T> extends $DelegatingOps<T> {
        static retrieveGetter<E, O>(arg0: $ResourceKey_<$Registry<E>>): $RecordCodecBuilder<O, $HolderGetter<E>>;
        static retrieveRegistryLookup<E>(arg0: $ResourceKey_<$Registry<E>>): $MapCodec<$HolderLookup$RegistryLookup<E>>;
        static retrieveElement<E, O>(arg0: $ResourceKey_<E>): $RecordCodecBuilder<O, $Holder$Reference<E>>;
        static injectRegistryContext<T>(arg0: $Dynamic<T>, arg1: $HolderLookup$Provider): $Dynamic<T>;
        getter<E>(arg0: $ResourceKey_<$Registry<E>>): ($HolderGetter<E>) | undefined;
        owner<E>(arg0: $ResourceKey_<$Registry<E>>): ($HolderOwner<E>) | undefined;
        static create<T>(arg0: $DynamicOps<T>, arg1: $RegistryOps$RegistryInfoLookup_): $RegistryOps<T>;
        static create<T>(arg0: $DynamicOps<T>, arg1: $HolderLookup$Provider): $RegistryOps<T>;
        withParent<U>(arg0: $DynamicOps<U>): $RegistryOps<U>;
        delegate: $DynamicOps<T>;
        lookupProvider: $RegistryOps$RegistryInfoLookup;
        constructor(arg0: $DynamicOps<T>, arg1: $RegistryOps$RegistryInfoLookup_);
        constructor(arg0: $RegistryOps<T>);
    }
    export class $RegistryOps$RegistryInfo<T> extends $Record {
        static fromRegistryLookup<T>(arg0: $HolderLookup$RegistryLookup<T>): $RegistryOps$RegistryInfo<T>;
        elementsLifecycle(): $Lifecycle;
        getter(): $HolderGetter<T>;
        owner(): $HolderOwner<T>;
        constructor(owner: $HolderOwner<T>, getter: $HolderGetter<T>, elementsLifecycle: $Lifecycle);
        get ter(): $HolderGetter<T>;
    }
    /**
     * Values that may be interpreted as {@link $RegistryOps$RegistryInfo}.
     */
    export type $RegistryOps$RegistryInfo_<T> = { elementsLifecycle?: $Lifecycle, getter?: $HolderGetter<any>, owner?: $HolderOwner<any>,  } | [elementsLifecycle?: $Lifecycle, getter?: $HolderGetter<any>, owner?: $HolderOwner<any>, ];
    export class $RegistryOps$RegistryInfoLookup {
    }
    export interface $RegistryOps$RegistryInfoLookup {
        lookup<T>(arg0: $ResourceKey_<$Registry<T>>): ($RegistryOps$RegistryInfo<T>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $RegistryOps$RegistryInfoLookup}.
     */
    export type $RegistryOps$RegistryInfoLookup_ = ((arg0: $ResourceKey<$Registry<any>>) => ($RegistryOps$RegistryInfo_<T>) | undefined);
    export class $DelegatingOps<T> implements $DynamicOps<T>, $DelegatingOpsAccessor<any> {
        getStringValue(arg0: T): $DataResult<string>;
        getStream(arg0: T): $DataResult<$Stream<T>>;
        createMap(arg0: $Stream<$Pair<T, T>>): T;
        createMap(arg0: $Map_<T, T>): T;
        remove(arg0: T, arg1: string): T;
        empty(): T;
        emptyList(): T;
        getByteBuffer(arg0: T): $DataResult<$ByteBuffer>;
        emptyMap(): T;
        getMap(arg0: T): $DataResult<$MapLike<T>>;
        createLong(arg0: number): T;
        createString(arg0: string): T;
        getList(arg0: T): $DataResult<$Consumer<$Consumer<T>>>;
        createList(arg0: $Stream<T>): T;
        getBooleanValue(arg0: T): $DataResult<boolean>;
        createFloat(arg0: number): T;
        createDouble(arg0: number): T;
        getNumberValue(arg0: T): $DataResult<$Number>;
        createNumeric(arg0: $Number): T;
        createByte(arg0: number): T;
        mergeToMap(arg0: T, arg1: $Map_<T, T>): $DataResult<T>;
        mergeToMap(arg0: T, arg1: $MapLike<T>): $DataResult<T>;
        mergeToMap(arg0: T, arg1: T, arg2: T): $DataResult<T>;
        getMapValues(arg0: T): $DataResult<$Stream<$Pair<T, T>>>;
        convertTo<U>(arg0: $DynamicOps<U>, arg1: T): U;
        mergeToList(arg0: T, arg1: $List_<T>): $DataResult<T>;
        mergeToList(arg0: T, arg1: T): $DataResult<T>;
        createShort(arg0: number): T;
        createInt(arg0: number): T;
        createBoolean(arg0: boolean): T;
        mergeToPrimitive(arg0: T, arg1: T): $DataResult<T>;
        getMapEntries(arg0: T): $DataResult<$Consumer<$BiConsumer<T, T>>>;
        createByteList(arg0: $ByteBuffer): T;
        getIntStream(arg0: T): $DataResult<$IntStream>;
        createIntList(arg0: $IntStream): T;
        getLongStream(arg0: T): $DataResult<$LongStream>;
        createLongList(arg0: $LongStream): T;
        compressMaps(): boolean;
        listBuilder(): $ListBuilder<T>;
        mapBuilder(): $RecordBuilder<T>;
        get(arg0: T, arg1: string): $DataResult<T>;
        update(arg0: T, arg1: string, arg2: $Function_<T, T>): T;
        set(arg0: T, arg1: string, arg2: T): T;
        getNumberValue(arg0: T, arg1: $Number): $Number;
        getGeneric(arg0: T, arg1: T): $DataResult<T>;
        updateGeneric(arg0: T, arg1: T, arg2: $Function_<T, T>): T;
        withEncoder<E>(arg0: $Encoder_<E>): $Function<E, $DataResult<T>>;
        withDecoder<E>(arg0: $Decoder_<E>): $Function<T, $DataResult<$Pair<E, T>>>;
        withParser<E>(arg0: $Decoder_<E>): $Function<T, $DataResult<E>>;
        convertList<U>(arg0: $DynamicOps<U>, arg1: T): U;
        convertMap<U>(arg0: $DynamicOps<U>, arg1: T): U;
        getDelegate(): $DynamicOps<T>;
        delegate: $DynamicOps<T>;
        constructor(arg0: $DynamicOps<T>);
    }
    export class $RegistryFileCodec<E> implements $Codec<$Holder<E>> {
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair<$Holder<E>, T>>;
        encode<T>(arg0: $Holder_<E>, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        static create<E>(arg0: $ResourceKey_<$Registry<E>>, arg1: $Codec<E>): $RegistryFileCodec<E>;
        static create<E>(arg0: $ResourceKey_<$Registry<E>>, arg1: $Codec<E>, arg2: boolean): $RegistryFileCodec<E>;
        dispatch<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $Holder<E>>, arg2: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$Holder<E>, $DataResult<$Holder<E>>>): $Codec<$Holder<E>>;
        orElse(arg0: $Holder_<E>): $Codec<$Holder<E>>;
        orElse(arg0: $Consumer_<string>, arg1: $Holder_<E>): $Codec<$Holder<E>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $Holder_<E>): $Codec<$Holder<E>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        orElseGet(arg0: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        comapFlatMap<S>(arg0: $Function_<$Holder<E>, $DataResult<S>>, arg1: $Function_<S, $Holder<E>>): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: $Holder_<E>, arg2: $Lifecycle): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string): $MapCodec<($Holder<E>) | undefined>;
        optionalFieldOf(arg0: string, arg1: $Holder_<E>): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Holder_<E>, arg3: $Lifecycle): $MapCodec<$Holder<E>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$Holder<E>>>;
        listOf(): $Codec<$List<$Holder<E>>>;
        xmap<S>(arg0: $Function_<$Holder<E>, S>, arg1: $Function_<S, $Holder<E>>): $Codec<S>;
        stable(): $Codec<$Holder<E>>;
        withLifecycle(arg0: $Lifecycle): $Codec<$Holder<E>>;
        deprecated(arg0: number): $Codec<$Holder<E>>;
        flatXmap<S>(arg0: $Function_<$Holder<E>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$Holder<E>>>): $Codec<S>;
        fieldOf(arg0: string): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Holder_<E>, arg2: $Lifecycle): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($Holder<E>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Holder_<E>, arg3: $Lifecycle): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Holder_<E>): $MapCodec<$Holder<E>>;
        mapResult(arg0: $Codec$ResultFunction<$Holder_<E>>): $Codec<$Holder<E>>;
        promotePartial(arg0: $Consumer_<string>): $Codec<$Holder<E>>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$Holder<E>>>, arg2: $Function_<$Holder<E>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $Holder<E>>, arg2: $Function_<$Holder<E>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $MapCodec<E>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$Holder<E>>>;
        flatComapMap<S>(arg0: $Function_<$Holder<E>, S>, arg1: $Function_<S, $DataResult<$Holder<E>>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: $Holder_<E>): $DataResult<T>;
        comap<B>(arg0: $Function_<B, $Holder<E>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$Holder<E>>>): $Encoder<B>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$Holder<E>, T>>;
        map<B>(arg0: $Function_<$Holder<E>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$Holder<E>, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$Holder<E>>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Holder<E>>;
        boxed(): $Decoder$Boxed<$Holder<E>>;
        terminal(): $Decoder$Terminal<$Holder<E>>;
        simple(): $Decoder$Simple<$Holder<E>>;
    }
    export class $ResourceLocation$Serializer implements $JsonDeserializer<$ResourceLocation>, $JsonSerializer<$ResourceLocation> {
        serialize(arg0: $ResourceLocation_, arg1: $Type, arg2: $JsonSerializationContext): $JsonElement;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $ResourceLocation;
        constructor();
    }
    export class $ResourceKey<T> implements $Comparable<$ResourceKey<never>>, $SpecialEquality {
        static createRegistryKey<T>(arg0: $ResourceLocation_): $ResourceKey<$Registry<T>>;
        static streamCodec<T>(arg0: $ResourceKey_<$Registry<T>>): $StreamCodec<$ByteBuf, $ResourceKey<T>>;
        isFor(arg0: $ResourceKey_<$Registry<never>>): boolean;
        getNamespace(): string;
        getPath(): string;
        cast<E>(arg0: $ResourceKey_<$Registry<E>>): ($ResourceKey<E>) | undefined;
        compareTo(arg0: $ResourceKey_<never>): number;
        location(): $ResourceLocation;
        static create<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $ResourceLocation_): $ResourceKey<T>;
        registry(): $ResourceLocation;
        static codec<T>(arg0: $ResourceKey_<$Registry<T>>): $Codec<$ResourceKey<T>>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        registryKey(): $ResourceKey<$Registry<$ResourceKey<never>>>;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
        get namespace(): string;
        get path(): string;
    }
    /**
     * Values that may be interpreted as {@link $ResourceKey}.
     */
    export type $ResourceKey_<T> = RegistryTypes.ResolveObject<T>;
    export class $RegistryDataLoader {
        static loadContentsFromManager<E>(arg0: $ResourceManager, arg1: $RegistryOps$RegistryInfoLookup_, arg2: $WritableRegistry<E>, arg3: $Decoder_<E>, arg4: $Map_<$ResourceKey_<never>, $Exception>): void;
        static loadContentsFromNetwork<E>(arg0: $Map_<$ResourceKey_<$Registry<never>>, $List_<$RegistrySynchronization$PackedRegistryEntry_>>, arg1: $ResourceProvider_, arg2: $RegistryOps$RegistryInfoLookup_, arg3: $WritableRegistry<E>, arg4: $Decoder_<E>, arg5: $Map_<$ResourceKey_<never>, $Exception>): void;
        static load(arg0: $Map_<$ResourceKey_<$Registry<never>>, $List_<$RegistrySynchronization$PackedRegistryEntry_>>, arg1: $ResourceProvider_, arg2: $RegistryAccess, arg3: $List_<$RegistryDataLoader$RegistryData_<never>>): $RegistryAccess$Frozen;
        static load(arg0: $ResourceManager, arg1: $RegistryAccess, arg2: $List_<$RegistryDataLoader$RegistryData_<never>>): $RegistryAccess$Frozen;
        static createContext(arg0: $RegistryAccess, arg1: $List_<$RegistryDataLoader$Loader_<never>>): $RegistryOps$RegistryInfoLookup;
        static WORLDGEN_REGISTRIES: $List<$RegistryDataLoader$RegistryData<never>>;
        static SYNCHRONIZED_REGISTRIES: $List<$RegistryDataLoader$RegistryData<never>>;
        static DIMENSION_REGISTRIES: $List<$RegistryDataLoader$RegistryData<never>>;
        constructor();
    }
    export class $RegistryFixedCodec<E> implements $Codec<$Holder<E>> {
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair<$Holder<E>, T>>;
        encode<T>(arg0: $Holder_<E>, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        static create<E>(arg0: $ResourceKey_<$Registry<E>>): $RegistryFixedCodec<E>;
        dispatch<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $Holder<E>>, arg2: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$Holder<E>, $DataResult<$Holder<E>>>): $Codec<$Holder<E>>;
        orElse(arg0: $Holder_<E>): $Codec<$Holder<E>>;
        orElse(arg0: $Consumer_<string>, arg1: $Holder_<E>): $Codec<$Holder<E>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $Holder_<E>): $Codec<$Holder<E>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        orElseGet(arg0: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        comapFlatMap<S>(arg0: $Function_<$Holder<E>, $DataResult<S>>, arg1: $Function_<S, $Holder<E>>): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: $Holder_<E>, arg2: $Lifecycle): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string): $MapCodec<($Holder<E>) | undefined>;
        optionalFieldOf(arg0: string, arg1: $Holder_<E>): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Holder_<E>, arg3: $Lifecycle): $MapCodec<$Holder<E>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$Holder<E>>>;
        listOf(): $Codec<$List<$Holder<E>>>;
        xmap<S>(arg0: $Function_<$Holder<E>, S>, arg1: $Function_<S, $Holder<E>>): $Codec<S>;
        stable(): $Codec<$Holder<E>>;
        withLifecycle(arg0: $Lifecycle): $Codec<$Holder<E>>;
        deprecated(arg0: number): $Codec<$Holder<E>>;
        flatXmap<S>(arg0: $Function_<$Holder<E>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$Holder<E>>>): $Codec<S>;
        fieldOf(arg0: string): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Holder_<E>, arg2: $Lifecycle): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($Holder<E>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Holder_<E>, arg3: $Lifecycle): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Holder_<E>): $MapCodec<$Holder<E>>;
        mapResult(arg0: $Codec$ResultFunction<$Holder_<E>>): $Codec<$Holder<E>>;
        promotePartial(arg0: $Consumer_<string>): $Codec<$Holder<E>>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$Holder<E>>>, arg2: $Function_<$Holder<E>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $Holder<E>>, arg2: $Function_<$Holder<E>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $MapCodec<E>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$Holder<E>>>;
        flatComapMap<S>(arg0: $Function_<$Holder<E>, S>, arg1: $Function_<S, $DataResult<$Holder<E>>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: $Holder_<E>): $DataResult<T>;
        comap<B>(arg0: $Function_<B, $Holder<E>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$Holder<E>>>): $Encoder<B>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$Holder<E>, T>>;
        map<B>(arg0: $Function_<$Holder<E>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$Holder<E>, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$Holder<E>>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Holder<E>>;
        boxed(): $Decoder$Boxed<$Holder<E>>;
        terminal(): $Decoder$Terminal<$Holder<E>>;
        simple(): $Decoder$Simple<$Holder<E>>;
    }
    export class $ResourceKey$InternKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ResourceKey$InternKey}.
     */
    export type $ResourceKey$InternKey_ = { location?: $ResourceLocation_, registry?: $ResourceLocation_,  } | [location?: $ResourceLocation_, registry?: $ResourceLocation_, ];
    export class $FileToIdConverter {
        listMatchingResourceStacks(arg0: $ResourceManager): $Map<$ResourceLocation, $List<$Resource>>;
        listMatchingResourcesFromNamespace(arg0: $ResourceManager, arg1: string): $Map<$ResourceLocation, $Resource>;
        listMatchingResourceStacksFromNamespace(arg0: $ResourceManager, arg1: string): $Map<$ResourceLocation, $List<$Resource>>;
        idToFile(arg0: $ResourceLocation_): $ResourceLocation;
        listMatchingResources(arg0: $ResourceManager): $Map<$ResourceLocation, $Resource>;
        fileToId(arg0: $ResourceLocation_): $ResourceLocation;
        static json(arg0: string): $FileToIdConverter;
        constructor(arg0: string, arg1: string);
    }
    export class $RegistryDataLoader$Loader<T> extends $Record {
        loadFromNetwork(arg0: $Map_<$ResourceKey_<$Registry<never>>, $List_<$RegistrySynchronization$PackedRegistryEntry_>>, arg1: $ResourceProvider_, arg2: $RegistryOps$RegistryInfoLookup_): void;
        loadFromResources(arg0: $ResourceManager, arg1: $RegistryOps$RegistryInfoLookup_): void;
        data(): $RegistryDataLoader$RegistryData<T>;
        registry(): $WritableRegistry<T>;
        loadingErrors(): $Map<$ResourceKey<never>, $Exception>;
        constructor(data: $RegistryDataLoader$RegistryData_<T>, registry: $WritableRegistry<T>, loadingErrors: $Map_<$ResourceKey_<never>, $Exception>);
    }
    /**
     * Values that may be interpreted as {@link $RegistryDataLoader$Loader}.
     */
    export type $RegistryDataLoader$Loader_<T> = { loadingErrors?: $Map_<$ResourceKey_<never>, $Exception>, registry?: $WritableRegistry<any>, data?: $RegistryDataLoader$RegistryData_<any>,  } | [loadingErrors?: $Map_<$ResourceKey_<never>, $Exception>, registry?: $WritableRegistry<any>, data?: $RegistryDataLoader$RegistryData_<any>, ];
    export class $RegistryOps$HolderLookupAdapter implements $RegistryOps$RegistryInfoLookup {
        lookup<E>(arg0: $ResourceKey_<$Registry<E>>): ($RegistryOps$RegistryInfo<E>) | undefined;
        lookupProvider: $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
}
