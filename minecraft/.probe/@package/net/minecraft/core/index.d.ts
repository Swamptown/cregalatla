import { $LongConsumer_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $Keyable, $DynamicOps, $Codec, $Dynamic, $MapCodec, $Lifecycle } from "@package/com/mojang/serialization";
import { $RegistryLayer_ } from "@package/net/minecraft/server";
import { $Tag_, $Tag, $ListTag_, $ListTag } from "@package/net/minecraft/nbt";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $MappedRegistryAccessor } from "@package/org/sinytra/connector/mod/mixin/registries";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MappedRegistryAccessor as $MappedRegistryAccessor$2 } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $UUID_, $Set_, $Map, $Map$Entry, $Set, $Spliterator, $Iterator, $UUID, $List, $SequencedCollection, $Map_, $Collection_, $List_, $Collection, $AbstractList } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $IntFunction, $Consumer_, $Predicate_, $Predicate, $Consumer, $BiConsumer_, $Function_ } from "@package/java/util/function";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $Reference2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $IHolderSetExtension$SerializationType, $IHolderExtension, $IHolderLookupProviderExtension, $IHolderSetExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $NonNullListAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/block/hopper";
import { RegistryTypes } from "@special/types";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $CoreLibHolderReference, $CoreLibMappedRegistry } from "@package/com/supermartijn642/core/extensions";
import { $Enum, $RuntimeException, $Comparable, $Iterable, $Record, $Runnable_, $Object } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $EntityAccess } from "@package/net/minecraft/world/level/entity";
import { $BaseMappedRegistry, $IRegistryExtension } from "@package/net/neoforged/neoforge/registries";
import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $KnownPack_, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $MappedRegistryAccessor as $MappedRegistryAccessor$1 } from "@package/net/fabricmc/fabric/mixin/registry/sync";
import { $ResourceKey_, $ResourceKey, $RegistryOps, $ResourceLocation, $ResourceLocation_, $RegistryOps$RegistryInfo_ } from "@package/net/minecraft/resources";
import { $MappedRegistryAccessor as $MappedRegistryAccessor$3 } from "@package/net/neoforged/neoforge/mixins";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Transformation } from "@package/com/mojang/math";
import { $AABB_, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Vector3f, $Quaternionf } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as dispenser from "@package/net/minecraft/core/dispenser";
export * as component from "@package/net/minecraft/core/component";
export * as particles from "@package/net/minecraft/core/particles";
export * as cauldron from "@package/net/minecraft/core/cauldron";
export * as registries from "@package/net/minecraft/core/registries";

declare module "@package/net/minecraft/core" {
    export class $Holder$Reference<T> implements $Holder<T>, $CoreLibHolderReference {
        value(): T;
        getKey(): $ResourceKey<T>;
        kind(): $Holder$Kind;
        is(arg0: $ResourceLocation_): boolean;
        is(arg0: $Predicate_<$ResourceKey<T>>): boolean;
        key(): $ResourceKey<T>;
        unwrap(): $Either<$ResourceKey<T>, T>;
        tags(): $Stream<$TagKey<T>>;
        getData<A>(arg0: $DataMapType<T, A>): A;
        bindTags(arg0: $Collection_<$TagKey_<T>>): void;
        bindKey(arg0: $ResourceKey_<T>): void;
        bindValue(arg0: T): void;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
        /**
         * @deprecated
         */
        static createIntrusive<T>(arg0: $HolderOwner<T>, arg1: T): $Holder$Reference<T>;
        static createStandAlone<T>(arg0: $HolderOwner<T>, arg1: $ResourceKey_<T>): $Holder$Reference<T>;
        supermartijn642corelibOverride(key: $ResourceKey_<any>, value: $Object): void;
        unwrapLookup(): $HolderLookup$RegistryLookup<T>;
        isBound(): boolean;
        unwrapKey(): ($ResourceKey<T>) | undefined;
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(tagKey: $ResourceLocation_): boolean;
        getRegisteredName(): string;
        getDelegate(): $Holder<T>;
        owner: $HolderOwner<T>;
        constructor(arg0: $Holder$Reference$Type_, arg1: $HolderOwner<T>, arg2: $ResourceKey_<T>, arg3: T);
        get bound(): boolean;
        get registeredName(): string;
        get delegate(): $Holder<T>;
    }
    export class $AxisCycle extends $Enum<$AxisCycle> {
        static values(): $AxisCycle[];
        static valueOf(arg0: string): $AxisCycle;
        static between(arg0: $Direction$Axis_, arg1: $Direction$Axis_): $AxisCycle;
        inverse(): $AxisCycle;
        cycle(arg0: $Direction$Axis_): $Direction$Axis;
        cycle(arg0: number, arg1: number, arg2: number, arg3: $Direction$Axis_): number;
        cycle(arg0: number, arg1: number, arg2: number, arg3: $Direction$Axis_): number;
        static BACKWARD: $AxisCycle;
        static FORWARD: $AxisCycle;
        static VALUES: $AxisCycle[];
        static NONE: $AxisCycle;
        static AXIS_VALUES: $Direction$Axis[];
    }
    /**
     * Values that may be interpreted as {@link $AxisCycle}.
     */
    export type $AxisCycle_ = "none" | "forward" | "backward";
    export class $WritableRegistry<T> {
    }
    export interface $WritableRegistry<T> extends $Registry<T> {
        isEmpty(): boolean;
        register(arg0: $ResourceKey_<T>, arg1: T, arg2: $RegistrationInfo_): $Holder$Reference<T>;
        createRegistrationLookup(): $HolderGetter<T>;
        get empty(): boolean;
    }
    export class $RegistrySetBuilder$RegisteredValue<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$RegisteredValue}.
     */
    export type $RegistrySetBuilder$RegisteredValue_<T> = { lifecycle?: $Lifecycle, value?: any,  } | [lifecycle?: $Lifecycle, value?: any, ];
    export class $RegistrySetBuilder$UniversalLookup extends $RegistrySetBuilder$EmptyTagLookup<$Object> implements $HolderLookup<$Object> {
        listElementIds(): $Stream<$ResourceKey<$Object>>;
        listTagIds(): $Stream<$TagKey<$Object>>;
    }
    export class $HolderLookup$Provider {
        static create(arg0: $Stream<$HolderLookup$RegistryLookup<never>>): $HolderLookup$Provider;
    }
    export interface $HolderLookup$Provider extends $IHolderLookupProviderExtension {
        lookup<T>(arg0: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        createSerializationContext<V>(arg0: $DynamicOps<V>): $RegistryOps<V>;
        asGetterLookup(): $HolderGetter$Provider;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        lookupOrThrow<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
    }
    export class $RegistrySetBuilder {
        add<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $RegistrySetBuilder$RegistryBootstrap_<T>): $RegistrySetBuilder;
        add<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $Lifecycle, arg2: $RegistrySetBuilder$RegistryBootstrap_<T>): $RegistrySetBuilder;
        build(arg0: $RegistryAccess): $HolderLookup$Provider;
        getEntryKeys(): $List<$ResourceKey<$Registry<never>>>;
        static wrapContextLookup<T>(arg0: $HolderLookup$RegistryLookup<T>): $HolderGetter<T>;
        static lookupFromMap<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $Lifecycle, arg2: $HolderOwner<T>, arg3: $Map_<$ResourceKey_<T>, $Holder$Reference<T>>): $HolderLookup$RegistryLookup<T>;
        buildPatch(arg0: $RegistryAccess, arg1: $HolderLookup$Provider, arg2: $Cloner$Factory): $RegistrySetBuilder$PatchedRegistries;
        entries: $List<$RegistrySetBuilder$RegistryStub<never>>;
        constructor();
        get entryKeys(): $List<$ResourceKey<$Registry<never>>>;
    }
    export class $Holder$Reference$Type extends $Enum<$Holder$Reference$Type> {
    }
    /**
     * Values that may be interpreted as {@link $Holder$Reference$Type}.
     */
    export type $Holder$Reference$Type_ = "stand_alone" | "intrusive";
    export class $UUIDUtil {
        static createOfflinePlayerUUID(arg0: string): $UUID;
        static uuidFromIntArray(arg0: number[]): $UUID;
        static uuidToIntArray(arg0: $UUID_): number[];
        static uuidToByteArray(arg0: $UUID_): number[];
        static readUUID(arg0: $Dynamic<never>): $UUID;
        static createOfflineProfile(arg0: string): $GameProfile;
        static CODEC_SET: $Codec<$Set<$UUID>>;
        static AUTHLIB_CODEC: $Codec<$UUID>;
        static CODEC: $Codec<$UUID>;
        static CODEC_LINKED_SET: $Codec<$Set<$UUID>>;
        static UUID_BYTES: number;
        static STRING_CODEC: $Codec<$UUID>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $UUID>;
        static LENIENT_CODEC: $Codec<$UUID>;
    }
    export class $FrontAndTop extends $Enum<$FrontAndTop> implements $StringRepresentable {
        static values(): $FrontAndTop[];
        static valueOf(arg0: string): $FrontAndTop;
        top(): $Direction;
        front(): $Direction;
        static fromFrontAndTop(arg0: $Direction_, arg1: $Direction_): $FrontAndTop;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static UP_SOUTH: $FrontAndTop;
        static DOWN_NORTH: $FrontAndTop;
        static UP_EAST: $FrontAndTop;
        static UP_NORTH: $FrontAndTop;
        static NORTH_UP: $FrontAndTop;
        static SOUTH_UP: $FrontAndTop;
        static DOWN_EAST: $FrontAndTop;
        static DOWN_WEST: $FrontAndTop;
        static UP_WEST: $FrontAndTop;
        static WEST_UP: $FrontAndTop;
        static DOWN_SOUTH: $FrontAndTop;
        static EAST_UP: $FrontAndTop;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FrontAndTop}.
     */
    export type $FrontAndTop_ = "down_east" | "down_north" | "down_south" | "down_west" | "up_east" | "up_north" | "up_south" | "up_west" | "west_up" | "east_up" | "north_up" | "south_up";
    export class $BlockMath {
        static getUVLockTransform(arg0: $Transformation, arg1: $Direction_): $Transformation;
        static blockCenterToCorner(arg0: $Transformation): $Transformation;
        static blockCornerToCenter(arg0: $Transformation): $Transformation;
        static VANILLA_UV_TRANSFORM_GLOBAL_TO_LOCAL: $Map<$Direction, $Transformation>;
        static VANILLA_UV_TRANSFORM_LOCAL_TO_GLOBAL: $Map<$Direction, $Transformation>;
        constructor();
    }
    export class $RegistrySetBuilder$ValueAndHolder<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$ValueAndHolder}.
     */
    export type $RegistrySetBuilder$ValueAndHolder_<T> = { holder?: ($Holder$Reference<T>) | undefined, value?: $RegistrySetBuilder$RegisteredValue_<any>,  } | [holder?: ($Holder$Reference<T>) | undefined, value?: $RegistrySetBuilder$RegisteredValue_<any>, ];
    export class $RegistryAccess$RegistryEntry<T> extends $Record {
        value(): $Registry<T>;
        key(): $ResourceKey<$Registry<T>>;
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $Registry<T>);
    }
    /**
     * Values that may be interpreted as {@link $RegistryAccess$RegistryEntry}.
     */
    export type $RegistryAccess$RegistryEntry_<T> = { key?: $ResourceKey_<$Registry<any>>, value?: $Registry<any>,  } | [key?: $ResourceKey_<$Registry<any>>, value?: $Registry<any>, ];
    export class $RegistryAccess {
        static fromRegistryOfRegistries(arg0: $Registry<$Registry<never>>): $RegistryAccess$Frozen;
        static LOGGER: $Logger;
        static EMPTY: $RegistryAccess$Frozen;
    }
    export interface $RegistryAccess extends $HolderLookup$Provider {
        lookup<T>(arg0: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        freeze(): $RegistryAccess$Frozen;
        allRegistriesLifecycle(): $Lifecycle;
        registry<E>(arg0: $ResourceKey_<$Registry<E>>): ($Registry<E>) | undefined;
        registries(): $Stream<$RegistryAccess$RegistryEntry<never>>;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        registryOrThrow<E>(arg0: $ResourceKey_<$Registry<E>>): $Registry<E>;
    }
    export class $BlockPos extends $Vec3i {
        static min(arg0: $BlockPos_, arg1: $BlockPos_): $BlockPos;
        static max(arg0: $BlockPos_, arg1: $BlockPos_): $BlockPos;
        static of(arg0: number): $BlockPos;
        static offset(arg0: number, arg1: $Direction_): number;
        offset(arg0: $Vec3i): $BlockPos;
        static offset(arg0: number, arg1: number, arg2: number, arg3: number): number;
        multiply(arg0: number): $BlockPos;
        rotate(arg0: $Rotation_): $BlockPos;
        subtract(arg0: $Vec3i): $BlockPos;
        relative(arg0: $Direction_, arg1: number): $BlockPos;
        relative(arg0: $Direction$Axis_, arg1: number): $BlockPos;
        static getY(arg0: number): number;
        immutable(): $BlockPos;
        static asLong(arg0: number, arg1: number, arg2: number): number;
        asLong(): number;
        mutable(): $BlockPos$MutableBlockPos;
        static getX(arg0: number): number;
        static getZ(arg0: number): number;
        west(arg0: number): $BlockPos;
        west(): $BlockPos;
        south(arg0: number): $BlockPos;
        south(): $BlockPos;
        static containing(arg0: $Position): $BlockPos;
        static containing(arg0: number, arg1: number, arg2: number): $BlockPos;
        atY(arg0: number): $BlockPos;
        getCenter(): $Vec3;
        getBottomCenter(): $Vec3;
        static betweenClosedStream(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Stream<$BlockPos>;
        static betweenClosedStream(arg0: $AABB_): $Stream<$BlockPos>;
        static betweenClosedStream(arg0: $BoundingBox): $Stream<$BlockPos>;
        static betweenClosedStream(arg0: $BlockPos_, arg1: $BlockPos_): $Stream<$BlockPos>;
        static getFlatIndex(arg0: number): number;
        clampLocationWithin(arg0: $Vec3_): $Vec3;
        static randomInCube(arg0: $RandomSource, arg1: number, arg2: $BlockPos_, arg3: number): $Iterable<$BlockPos>;
        static randomBetweenClosed(arg0: $RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Iterable<$BlockPos>;
        /**
         * @deprecated
         */
        static squareOutSouthEast(arg0: $BlockPos_): $Stream<$BlockPos>;
        static withinManhattan(arg0: $BlockPos_, arg1: number, arg2: number, arg3: number): $Iterable<$BlockPos>;
        static findClosestMatch(arg0: $BlockPos_, arg1: number, arg2: number, arg3: $Predicate_<$BlockPos>): ($BlockPos) | undefined;
        static withinManhattanStream(arg0: $BlockPos_, arg1: number, arg2: number, arg3: number): $Stream<$BlockPos>;
        static betweenClosed(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Iterable<$BlockPos>;
        static betweenClosed(arg0: $BlockPos_, arg1: $BlockPos_): $Iterable<$BlockPos>;
        static spiralAround(arg0: $BlockPos_, arg1: number, arg2: $Direction_, arg3: $Direction_): $Iterable<$BlockPos$MutableBlockPos>;
        static breadthFirstTraversal(arg0: $BlockPos_, arg1: number, arg2: number, arg3: $BiConsumer_<$BlockPos, $Consumer<$BlockPos>>, arg4: $Predicate_<$BlockPos>): number;
        static ZERO: $BlockPos;
        static CODEC: $Codec<$BlockPos>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockPos>;
        static PACKED_Y_LENGTH: number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $Vec3i);
        get center(): $Vec3;
        get bottomCenter(): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $BlockPos}.
     */
    export type $BlockPos_ = [x: number, y: number, z: number, ];
    export class $HolderSet$Named<T> extends $HolderSet$ListBacked<T> {
        key(): $TagKey<T>;
        bind(arg0: $List_<$Holder_<T>>): void;
        constructor(arg0: $HolderOwner<T>, arg1: $TagKey_<T>);
    }
    export class $RegistrySetBuilder$RegistryBootstrap<T> {
    }
    export interface $RegistrySetBuilder$RegistryBootstrap<T> {
        run(arg0: $BootstrapContext<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$RegistryBootstrap}.
     */
    export type $RegistrySetBuilder$RegistryBootstrap_<T> = ((arg0: $BootstrapContext<T>) => void);
    export class $Direction$Axis extends $Enum<$Direction$Axis> implements $StringRepresentable, $Predicate<$Direction> {
        getName(): string;
        static values(): $Direction$Axis[];
        test(arg0: $Direction_): boolean;
        static valueOf(arg0: string): $Direction$Axis;
        isHorizontal(): boolean;
        isVertical(): boolean;
        getPlane(): $Direction$Plane;
        static byName(arg0: string): $Direction$Axis;
        getSerializedName(): string;
        static getRandom(arg0: $RandomSource): $Direction$Axis;
        choose(arg0: number, arg1: number, arg2: number): number;
        choose(arg0: number, arg1: number, arg2: number): number;
        getRemappedEnumConstantName(): string;
        or(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        negate(): $Predicate<$Direction>;
        and(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        static CODEC: $StringRepresentable$EnumCodec<$Direction$Axis>;
        static X: $Direction$Axis;
        static Y: $Direction$Axis;
        static Z: $Direction$Axis;
        static VALUES: $Direction$Axis[];
        get horizontal(): boolean;
        get vertical(): boolean;
        get plane(): $Direction$Plane;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Direction$Axis}.
     */
    export type $Direction$Axis_ = "x" | "y" | "z";
    export class $RegistrySetBuilder$BuildState extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$BuildState}.
     */
    export type $RegistrySetBuilder$BuildState_ = { errors?: $List_<$RuntimeException>, registeredValues?: $Map_<$ResourceKey_<never>, $RegistrySetBuilder$RegisteredValue_<never>>, registries?: $Map_<$ResourceLocation_, $HolderGetter<never>>, lookup?: $RegistrySetBuilder$UniversalLookup, owner?: $RegistrySetBuilder$UniversalOwner,  } | [errors?: $List_<$RuntimeException>, registeredValues?: $Map_<$ResourceKey_<never>, $RegistrySetBuilder$RegisteredValue_<never>>, registries?: $Map_<$ResourceLocation_, $HolderGetter<never>>, lookup?: $RegistrySetBuilder$UniversalLookup, owner?: $RegistrySetBuilder$UniversalOwner, ];
    export class $DefaultedMappedRegistry<T> extends $MappedRegistry<T> implements $DefaultedRegistry<T> {
        getDefaultKey(): $ResourceLocation;
        registrationInfos: $Map<$ResourceKey<T>, $RegistrationInfo>;
        frozen: boolean;
        constructor(arg0: string, arg1: $ResourceKey_<$Registry<T>>, arg2: $Lifecycle, arg3: boolean);
        get defaultKey(): $ResourceLocation;
    }
    export class $Holder$Kind extends $Enum<$Holder$Kind> {
        static values(): $Holder$Kind[];
        static valueOf(arg0: string): $Holder$Kind;
        static REFERENCE: $Holder$Kind;
        static DIRECT: $Holder$Kind;
    }
    /**
     * Values that may be interpreted as {@link $Holder$Kind}.
     */
    export type $Holder$Kind_ = "reference" | "direct";
    export class $RegistrySynchronization$PackedRegistryEntry extends $Record {
        data(): ($Tag) | undefined;
        id(): $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RegistrySynchronization$PackedRegistryEntry>;
        constructor(arg0: $ResourceLocation_, arg1: ($Tag_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $RegistrySynchronization$PackedRegistryEntry}.
     */
    export type $RegistrySynchronization$PackedRegistryEntry_ = { id?: $ResourceLocation_, data?: ($Tag_) | undefined,  } | [id?: $ResourceLocation_, data?: ($Tag_) | undefined, ];
    export class $Holder<T> {
        static direct<T>(arg0: T): $Holder<T>;
    }
    export interface $Holder<T> extends $IHolderExtension<T> {
        value(): T;
        kind(): $Holder$Kind;
        /**
         * Tests the resource key held by the holder using a predicate.
         */
        test(arg0: $Predicate_<$ResourceKey<T>>): boolean;
        /**
         * Test if the holder holds an object registered with given resource location.
         */
        is(arg0: $ResourceLocation_): boolean;
        unwrap(): $Either<$ResourceKey<T>, T>;
        tags(): $Stream<$TagKey<T>>;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(tagKey: $ResourceLocation_): boolean;
        isBound(): boolean;
        unwrapKey(): ($ResourceKey<T>) | undefined;
        getRegisteredName(): string;
        get bound(): boolean;
        get registeredName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Holder}.
     */
    export type $Holder_<T> = RegistryTypes.ResolveObject<T>;
    export class $Rotations {
        save(): $ListTag;
        getY(): number;
        getWrappedX(): number;
        getWrappedY(): number;
        getWrappedZ(): number;
        getX(): number;
        getZ(): number;
        x: number;
        y: number;
        z: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Rotations>;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $ListTag_);
        get wrappedX(): number;
        get wrappedY(): number;
        get wrappedZ(): number;
    }
    export class $HolderLookup<T> {
    }
    export interface $HolderLookup<T> extends $HolderGetter<T> {
        listElements(): $Stream<$Holder$Reference<T>>;
        listElementIds(): $Stream<$ResourceKey<T>>;
        listTags(): $Stream<$HolderSet$Named<T>>;
        listTagIds(): $Stream<$TagKey<T>>;
    }
    export class $HolderOwner<T> {
    }
    export interface $HolderOwner<T> {
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
    }
    export class $Cloner<T> {
        clone(arg0: T, arg1: $HolderLookup$Provider, arg2: $HolderLookup$Provider): T;
        constructor(arg0: $Codec<T>);
    }
    export class $QuartPos {
        static quartLocal(arg0: number): number;
        static fromBlock(arg0: number): number;
        static toBlock(arg0: number): number;
        static fromSection(arg0: number): number;
        static toSection(arg0: number): number;
        static SIZE: number;
        static BITS: number;
        static MASK: number;
    }
    export class $RegistrySetBuilder$UniversalOwner implements $HolderOwner<$Object> {
        canSerializeIn(arg0: $HolderOwner<$Object>): boolean;
    }
    export class $GlobalPos extends $Record {
        static of(arg0: $ResourceKey_<$Level>, arg1: $BlockPos_): $GlobalPos;
        pos(): $BlockPos;
        dimension(): $ResourceKey<$Level>;
        static CODEC: $Codec<$GlobalPos>;
        static MAP_CODEC: $MapCodec<$GlobalPos>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $GlobalPos>;
        constructor(arg0: $ResourceKey_<$Level>, arg1: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $GlobalPos}.
     */
    export type $GlobalPos_ = { pos?: $BlockPos_, dimension?: $ResourceKey_<$Level>,  } | [pos?: $BlockPos_, dimension?: $ResourceKey_<$Level>, ];
    export class $RegistryAccess$1FrozenAccess extends $RegistryAccess$ImmutableRegistryAccess implements $RegistryAccess$Frozen {
    }
    export class $HolderSet$ListBacked<T> implements $HolderSet<T> {
        size(): number;
        get(arg0: number): $Holder<T>;
        iterator(): $Iterator<$Holder<T>>;
        stream(): $Stream<$Holder<T>>;
        spliterator(): $Spliterator<$Holder<T>>;
        contents(): $List<$Holder<T>>;
        getRandomElement(arg0: $RandomSource): ($Holder<T>) | undefined;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
        forEach(arg0: $Consumer_<T>): void;
        addInvalidationListener(arg0: $Runnable_): void;
        serializationType(): $IHolderSetExtension$SerializationType;
        constructor();
        [Symbol.iterator](): Iterator<$Holder<T>>
    }
    export class $RegistrationInfo extends $Record {
        knownPackInfo(): ($KnownPack) | undefined;
        lifecycle(): $Lifecycle;
        static BUILT_IN: $RegistrationInfo;
        constructor(arg0: ($KnownPack_) | undefined, arg1: $Lifecycle);
    }
    /**
     * Values that may be interpreted as {@link $RegistrationInfo}.
     */
    export type $RegistrationInfo_ = { knownPackInfo?: ($KnownPack_) | undefined, lifecycle?: $Lifecycle,  } | [knownPackInfo?: ($KnownPack_) | undefined, lifecycle?: $Lifecycle, ];
    export class $Cloner$Factory {
        cloner<T>(arg0: $ResourceKey_<$Registry<T>>): $Cloner<T>;
        addCodec<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $Codec<T>): $Cloner$Factory;
        constructor();
    }
    export class $IdMapper<T> implements $IdMap<T> {
        size(): number;
        add(arg0: T): void;
        iterator(): $Iterator<T>;
        contains(arg0: number): boolean;
        getId(arg0: T): number;
        addMapping(arg0: T, arg1: number): void;
        byId(arg0: number): T;
        byIdOrThrow(arg0: number): T;
        getIdOrThrow(arg0: T): number;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        tToId: $Reference2IntMap<T>;
        nextId: number;
        idToT: $List<T>;
        constructor();
        constructor(arg0: number);
        [Symbol.iterator](): Iterator<T>
    }
    export class $BlockPos$MutableBlockPos extends $BlockPos {
        clamp(arg0: $Direction$Axis_, arg1: number, arg2: number): $BlockPos$MutableBlockPos;
        set(arg0: $Vec3i): $BlockPos$MutableBlockPos;
        set(arg0: number): $BlockPos$MutableBlockPos;
        set(arg0: $AxisCycle_, arg1: number, arg2: number, arg3: number): $BlockPos$MutableBlockPos;
        set(arg0: number, arg1: number, arg2: number): $BlockPos$MutableBlockPos;
        set(arg0: number, arg1: number, arg2: number): $BlockPos$MutableBlockPos;
        move(arg0: number, arg1: number, arg2: number): $BlockPos$MutableBlockPos;
        move(arg0: $Vec3i): $BlockPos$MutableBlockPos;
        move(arg0: $Direction_, arg1: number): $BlockPos$MutableBlockPos;
        move(arg0: $Direction_): $BlockPos$MutableBlockPos;
        setWithOffset(arg0: $Vec3i, arg1: $Vec3i): $BlockPos$MutableBlockPos;
        setWithOffset(arg0: $Vec3i, arg1: number, arg2: number, arg3: number): $BlockPos$MutableBlockPos;
        setWithOffset(arg0: $Vec3i, arg1: $Direction_): $BlockPos$MutableBlockPos;
        static ZERO: $BlockPos;
        static CODEC: $Codec<$BlockPos>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockPos>;
        static PACKED_Y_LENGTH: number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor();
    }
    export class $RegistryAccess$Frozen {
    }
    export interface $RegistryAccess$Frozen extends $RegistryAccess {
    }
    export class $HolderLookup$RegistryLookup$Delegate<T> {
    }
    export interface $HolderLookup$RegistryLookup$Delegate<T> extends $HolderLookup$RegistryLookup<T> {
        parent(): $HolderLookup$RegistryLookup<T>;
        get(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        get(arg0: $TagKey_<T>): ($HolderSet$Named<T>) | undefined;
        key(): $ResourceKey<$Registry<T>>;
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
        registryLifecycle(): $Lifecycle;
        listElements(): $Stream<$Holder$Reference<T>>;
        listTags(): $Stream<$HolderSet$Named<T>>;
    }
    /**
     * Values that may be interpreted as {@link $HolderLookup$RegistryLookup$Delegate}.
     */
    export type $HolderLookup$RegistryLookup$Delegate_<T> = (() => $HolderLookup$RegistryLookup<T>);
    export class $Registry<T> {
        static register<V, T extends V>(arg0: $Registry<V>, arg1: $ResourceKey_<V>, arg2: T): T;
        static register<V, T extends V>(arg0: $Registry<V>, arg1: $ResourceLocation_, arg2: T): T;
        static register<T>(arg0: $Registry<T>, arg1: string, arg2: T): T;
        static registerForHolder<T>(arg0: $Registry<T>, arg1: $ResourceKey_<T>, arg2: T): $Holder$Reference<T>;
        static registerForHolder<T>(arg0: $Registry<T>, arg1: $ResourceLocation_, arg2: T): $Holder$Reference<T>;
    }
    export interface $Registry<T> extends $Keyable, $IdMap<T>, $IRegistryExtension<T> {
        get(arg0: $ResourceLocation_): T;
        get(arg0: $ResourceKey_<T>): T;
        stream(): $Stream<T>;
        entrySet(): $Set<$Map$Entry<$ResourceKey<T>, T>>;
        getKey(arg0: T): $ResourceLocation;
        key(): $ResourceKey<$Registry<T>>;
        getId(arg0: T): number;
        keys<U>(arg0: $DynamicOps<U>): $Stream<U>;
        keySet(): $Set<$ResourceLocation>;
        containsKey(arg0: $ResourceKey_<T>): boolean;
        containsKey(arg0: $ResourceLocation_): boolean;
        freeze(): $Registry<T>;
        createIntrusiveHolder(arg0: T): $Holder$Reference<T>;
        holders(): $Stream<$Holder$Reference<T>>;
        getTagOrEmpty(arg0: $TagKey_<T>): $Iterable<$Holder<T>>;
        getRandomElementOf(arg0: $TagKey_<T>, arg1: $RandomSource): ($Holder<T>) | undefined;
        getOrCreateTag(arg0: $TagKey_<T>): $HolderSet$Named<T>;
        getTagNames(): $Stream<$TagKey<T>>;
        resetTags(): void;
        bindTags(arg0: $Map_<$TagKey_<T>, $List_<$Holder_<T>>>): void;
        holderOwner(): $HolderOwner<T>;
        asTagAddingLookup(): $HolderLookup$RegistryLookup<T>;
        holderByNameCodec(): $Codec<$Holder<T>>;
        registrationInfo(arg0: $ResourceKey_<T>): ($RegistrationInfo) | undefined;
        registryLifecycle(): $Lifecycle;
        registryKeySet(): $Set<$ResourceKey<T>>;
        getTag(arg0: $TagKey_<T>): ($HolderSet$Named<T>) | undefined;
        getOptional(arg0: $ResourceKey_<T>): (T) | undefined;
        getOptional(arg0: $ResourceLocation_): (T) | undefined;
        getAny(): ($Holder$Reference<T>) | undefined;
        getOrThrow(arg0: $ResourceKey_<T>): T;
        asHolderIdMap(): $IdMap<$Holder<T>>;
        getHolder(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        getHolder(arg0: $ResourceLocation_): ($Holder$Reference<T>) | undefined;
        getHolder(arg0: number): ($Holder$Reference<T>) | undefined;
        getRandom(arg0: $RandomSource): ($Holder$Reference<T>) | undefined;
        getTags(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>;
        byNameCodec(): $Codec<T>;
        getHolderOrThrow(arg0: $ResourceKey_<T>): $Holder$Reference<T>;
        wrapAsHolder(arg0: T): $Holder<T>;
        getResourceKey(arg0: T): ($ResourceKey<T>) | undefined;
        asLookup(): $HolderLookup$RegistryLookup<T>;
        get tagNames(): $Stream<$TagKey<T>>;
        get any(): ($Holder$Reference<T>) | undefined;
        get tags(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>;
    }
    export class $RegistryCodecs {
        static homogeneousList<E>(arg0: $ResourceKey_<$Registry<E>>, arg1: boolean): $Codec<$HolderSet<E>>;
        static homogeneousList<E>(arg0: $ResourceKey_<$Registry<E>>): $Codec<$HolderSet<E>>;
        static homogeneousList<E>(arg0: $ResourceKey_<$Registry<E>>, arg1: $Codec<E>, arg2: boolean): $Codec<$HolderSet<E>>;
        static homogeneousList<E>(arg0: $ResourceKey_<$Registry<E>>, arg1: $Codec<E>): $Codec<$HolderSet<E>>;
        constructor();
    }
    export class $NonNullList<E> extends $AbstractList<E> implements $NonNullListAccessor<any> {
        static copyOf<E>(arg0: $Collection_<E>): $NonNullList<E>;
        static of<E>(arg0: E, ...arg1: E[]): $NonNullList<E>;
        static create<E>(): $NonNullList<E>;
        static createWithCapacity<E>(arg0: number): $NonNullList<E>;
        static codecOf<E>(arg0: $Codec<E>): $Codec<$NonNullList<E>>;
        static withSize<E>(arg0: number, arg1: E): $NonNullList<E>;
        getDelegate(): $List<$Object>;
        reversed(): $SequencedCollection<E>;
        constructor(arg0: $List_<E>, arg1: E);
        get delegate(): $List<$Object>;
    }
    export class $RegistrySetBuilder$EmptyTagRegistryLookup<T> extends $RegistrySetBuilder$EmptyTagLookup<T> implements $HolderLookup$RegistryLookup<T> {
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
        filterElements(arg0: $Predicate_<T>): $HolderLookup$RegistryLookup<T>;
        filterFeatures(arg0: $FeatureFlagSet): $HolderLookup$RegistryLookup<T>;
        listElementIds(): $Stream<$ResourceKey<T>>;
        listTagIds(): $Stream<$TagKey<T>>;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
    }
    export class $Vec3i implements $Comparable<$Vec3i> {
        get(arg0: $Direction$Axis_): number;
        compareTo(arg0: $Vec3i): number;
        offset(arg0: number, arg1: number, arg2: number): $Vec3i;
        offset(arg0: $Vec3i): $Vec3i;
        toShortString(): string;
        multiply(arg0: number): $Vec3i;
        subtract(arg0: $Vec3i): $Vec3i;
        relative(arg0: $Direction_, arg1: number): $Vec3i;
        relative(arg0: $Direction$Axis_, arg1: number): $Vec3i;
        relative(arg0: $Direction_): $Vec3i;
        getY(): number;
        above(arg0: number): $Vec3i;
        above(): $Vec3i;
        below(arg0: number): $Vec3i;
        below(): $Vec3i;
        getX(): number;
        getZ(): number;
        cross(arg0: $Vec3i): $Vec3i;
        east(): $Vec3i;
        east(arg0: number): $Vec3i;
        west(arg0: number): $Vec3i;
        west(): $Vec3i;
        north(arg0: number): $Vec3i;
        north(): $Vec3i;
        south(): $Vec3i;
        south(arg0: number): $Vec3i;
        closerThan(arg0: $Vec3i, arg1: number): boolean;
        static offsetCodec(arg0: number): $Codec<$Vec3i>;
        setX(arg0: number): $Vec3i;
        setY(arg0: number): $Vec3i;
        setZ(arg0: number): $Vec3i;
        distSqr(arg0: $Vec3i): number;
        closerToCenterThan(arg0: $Position, arg1: number): boolean;
        distToCenterSqr(arg0: number, arg1: number, arg2: number): number;
        distToCenterSqr(arg0: $Position): number;
        distToLowCornerSqr(arg0: number, arg1: number, arg2: number): number;
        distManhattan(arg0: $Vec3i): number;
        static ZERO: $Vec3i;
        static CODEC: $Codec<$Vec3i>;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $LayeredRegistryAccess<T> {
        getLayer(arg0: T): $RegistryAccess$Frozen;
        getAccessForLoading(arg0: T): $RegistryAccess$Frozen;
        getAccessFrom(arg0: T): $RegistryAccess$Frozen;
        replaceFrom(arg0: T, ...arg1: $RegistryAccess$Frozen[]): $LayeredRegistryAccess<T>;
        replaceFrom(arg0: T, arg1: $List_<$RegistryAccess$Frozen>): $LayeredRegistryAccess<T>;
        compositeAccess(): $RegistryAccess$Frozen;
        constructor(arg0: $List_<T>);
    }
    export class $Direction8 extends $Enum<$Direction8> {
        static values(): $Direction8[];
        static valueOf(arg0: string): $Direction8;
        getDirections(): $Set<$Direction>;
        getStepX(): number;
        getStepZ(): number;
        static NORTH_WEST: $Direction8;
        static NORTH: $Direction8;
        static NORTH_EAST: $Direction8;
        static WEST: $Direction8;
        static SOUTH_EAST: $Direction8;
        static SOUTH: $Direction8;
        static SOUTH_WEST: $Direction8;
        static EAST: $Direction8;
        get directions(): $Set<$Direction>;
        get stepX(): number;
        get stepZ(): number;
    }
    /**
     * Values that may be interpreted as {@link $Direction8}.
     */
    export type $Direction8_ = "north" | "north_east" | "east" | "south_east" | "south" | "south_west" | "west" | "north_west";
    export class $Holder$Direct<T> extends $Record implements $Holder<T> {
        value(): T;
        kind(): $Holder$Kind;
        is(arg0: $ResourceLocation_): boolean;
        is(arg0: $Predicate_<$ResourceKey<T>>): boolean;
        unwrap(): $Either<$ResourceKey<T>, T>;
        tags(): $Stream<$TagKey<T>>;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
        isBound(): boolean;
        unwrapKey(): ($ResourceKey<T>) | undefined;
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(tagKey: $ResourceLocation_): boolean;
        getRegisteredName(): string;
        getKey(): $ResourceKey<T>;
        unwrapLookup(): $HolderLookup$RegistryLookup<T>;
        getDelegate(): $Holder<T>;
        getData<T>(arg0: $DataMapType<T, T>): T;
        constructor(value: T);
        get bound(): boolean;
        get registeredName(): string;
        get key(): $ResourceKey<T>;
        get delegate(): $Holder<T>;
    }
    /**
     * Values that may be interpreted as {@link $Holder$Direct}.
     */
    export type $Holder$Direct_<T> = { value?: any,  } | [value?: any, ];
    export class $RegistrySetBuilder$RegistryContents<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$RegistryContents}.
     */
    export type $RegistrySetBuilder$RegistryContents_<T> = { key?: $ResourceKey_<$Registry<any>>, values?: $Map_<$ResourceKey_<any>, $RegistrySetBuilder$ValueAndHolder_<any>>, lifecycle?: $Lifecycle,  } | [key?: $ResourceKey_<$Registry<any>>, values?: $Map_<$ResourceKey_<any>, $RegistrySetBuilder$ValueAndHolder_<any>>, lifecycle?: $Lifecycle, ];
    export class $HolderGetter$Provider {
    }
    export interface $HolderGetter$Provider {
        get<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        lookup<T>(arg0: $ResourceKey_<$Registry<T>>): ($HolderGetter<T>) | undefined;
        lookupOrThrow<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderGetter<T>;
    }
    /**
     * Values that may be interpreted as {@link $HolderGetter$Provider}.
     */
    export type $HolderGetter$Provider_ = ((arg0: $ResourceKey<$Registry<any>>) => ($HolderGetter<T>) | undefined);
    export class $IdMap<T> {
        static DEFAULT: number;
    }
    export interface $IdMap<T> extends $Iterable<T> {
        size(): number;
        getId(arg0: T): number;
        byId(arg0: number): T;
        byIdOrThrow(arg0: number): T;
        getIdOrThrow(arg0: T): number;
    }
    export class $RegistrySetBuilder$RegistryStub<T> extends $Record {
        apply(arg0: $RegistrySetBuilder$BuildState_): void;
        key(): $ResourceKey<$Registry<T>>;
        bootstrap(): $RegistrySetBuilder$RegistryBootstrap<T>;
        collectRegisteredValues(arg0: $RegistrySetBuilder$BuildState_): $RegistrySetBuilder$RegistryContents<T>;
        lifecycle(): $Lifecycle;
        constructor(key: $ResourceKey_<$Registry<T>>, lifecycle: $Lifecycle, bootstrap: $RegistrySetBuilder$RegistryBootstrap_<T>);
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$RegistryStub}.
     */
    export type $RegistrySetBuilder$RegistryStub_<T> = { bootstrap?: $RegistrySetBuilder$RegistryBootstrap_<any>, key?: $ResourceKey_<$Registry<any>>, lifecycle?: $Lifecycle,  } | [bootstrap?: $RegistrySetBuilder$RegistryBootstrap_<any>, key?: $ResourceKey_<$Registry<any>>, lifecycle?: $Lifecycle, ];
    export class $HolderSet$Direct<T> extends $HolderSet$ListBacked<T> {
        static EMPTY: $HolderSet$Direct<never>;
        constructor(arg0: $List_<$Holder_<T>>);
    }
    export class $MappedRegistry<T> extends $BaseMappedRegistry<T> implements $WritableRegistry<T>, $MappedRegistryAccessor$3<any>, $MappedRegistryAccessor, $CoreLibMappedRegistry, $MappedRegistryAccessor$2<any>, $MappedRegistryAccessor$1 {
        clear(arg0: boolean): void;
        isEmpty(): boolean;
        register(arg0: $ResourceKey_<T>, arg1: T, arg2: $RegistrationInfo_): $Holder$Reference<T>;
        register(arg0: number, arg1: $ResourceKey_<T>, arg2: T, arg3: $RegistrationInfo_): $Holder$Reference<T>;
        createRegistrationLookup(): $HolderGetter<T>;
        getOrCreateHolderOrThrow(arg0: $ResourceKey_<T>): $Holder$Reference<T>;
        /**
         * @deprecated
         */
        unfreeze(): void;
        registerIdMapping(arg0: $ResourceKey_<T>, arg1: number): void;
        supermartijn642corelibSetRegisterOverrides(flag: boolean): void;
        neoforge$getRegistrationInfos(): $Map<$ResourceKey<T>, $RegistrationInfo>;
        getFrozen(): boolean;
        getToId(): $Reference2IntMap<T>;
        getByValue(): $Map<T, $Holder$Reference<T>>;
        registrationInfos: $Map<$ResourceKey<T>, $RegistrationInfo>;
        frozen: boolean;
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $Lifecycle);
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $Lifecycle, arg2: boolean);
        get empty(): boolean;
        get toId(): $Reference2IntMap<T>;
        get byValue(): $Map<T, $Holder$Reference<T>>;
    }
    export class $RegistryAccess$ImmutableRegistryAccess implements $RegistryAccess {
        registry<E>(arg0: $ResourceKey_<$Registry<E>>): ($Registry<E>) | undefined;
        registries(): $Stream<$RegistryAccess$RegistryEntry<never>>;
        lookup<T>(arg0: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        freeze(): $RegistryAccess$Frozen;
        allRegistriesLifecycle(): $Lifecycle;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        registryOrThrow<E>(arg0: $ResourceKey_<$Registry<E>>): $Registry<E>;
        createSerializationContext<V>(arg0: $DynamicOps<V>): $RegistryOps<V>;
        asGetterLookup(): $HolderGetter$Provider;
        lookupOrThrow<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        constructor(arg0: $Stream<$RegistryAccess$RegistryEntry_<never>>);
        constructor(arg0: $Map_<$ResourceKey_<$Registry<never>>, $Registry<never>>);
        constructor(arg0: $List_<$Registry<never>>);
    }
    export class $Cursor3D {
        advance(): boolean;
        getNextType(): number;
        nextX(): number;
        nextY(): number;
        nextZ(): number;
        static TYPE_CORNER: number;
        static TYPE_INSIDE: number;
        static TYPE_FACE: number;
        static TYPE_EDGE: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get nextType(): number;
    }
    export class $Direction$Plane extends $Enum<$Direction$Plane> implements $Iterable<$Direction>, $Predicate<$Direction> {
        length(): number;
        static values(): $Direction$Plane[];
        test(arg0: $Direction_): boolean;
        static valueOf(arg0: string): $Direction$Plane;
        iterator(): $Iterator<$Direction>;
        stream(): $Stream<$Direction>;
        getRandomDirection(arg0: $RandomSource): $Direction;
        getRandomAxis(arg0: $RandomSource): $Direction$Axis;
        shuffledCopy(arg0: $RandomSource): $List<$Direction>;
        spliterator(): $Spliterator<$Direction>;
        forEach(arg0: $Consumer_<$Direction>): void;
        or(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        negate(): $Predicate<$Direction>;
        and(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        static VERTICAL: $Direction$Plane;
        static HORIZONTAL: $Direction$Plane;
        [Symbol.iterator](): Iterator<$Direction>
    }
    /**
     * Values that may be interpreted as {@link $Direction$Plane}.
     */
    export type $Direction$Plane_ = "horizontal" | "vertical";
    export class $BlockBox extends $Record implements $Iterable<$BlockPos> {
        min(): $BlockPos;
        max(): $BlockPos;
        static of(arg0: $BlockPos_, arg1: $BlockPos_): $BlockBox;
        static of(arg0: $BlockPos_): $BlockBox;
        iterator(): $Iterator<$BlockPos>;
        offset(arg0: $Vec3i): $BlockBox;
        contains(arg0: $BlockPos_): boolean;
        move(arg0: $Direction_, arg1: number): $BlockBox;
        include(arg0: $BlockPos_): $BlockBox;
        sizeX(): number;
        sizeY(): number;
        sizeZ(): number;
        isBlock(): boolean;
        extend(arg0: $Direction_, arg1: number): $BlockBox;
        aabb(): $AABB;
        spliterator(): $Spliterator<$BlockPos>;
        forEach(arg0: $Consumer_<$BlockPos>): void;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockBox>;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_);
        [Symbol.iterator](): Iterator<$BlockPos>
        get block(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBox}.
     */
    export type $BlockBox_ = { max?: $BlockPos_, min?: $BlockPos_,  } | [max?: $BlockPos_, min?: $BlockPos_, ];
    export class $HolderLookup$RegistryLookup<T> {
    }
    export interface $HolderLookup$RegistryLookup<T> extends $HolderLookup<T>, $HolderOwner<T> {
        key(): $ResourceKey<$Registry<T>>;
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
        registryLifecycle(): $Lifecycle;
        filterElements(arg0: $Predicate_<T>): $HolderLookup$RegistryLookup<T>;
        filterFeatures(arg0: $FeatureFlagSet): $HolderLookup$RegistryLookup<T>;
    }
    export class $RegistrySynchronization {
        static packRegistries(arg0: $DynamicOps<$Tag_>, arg1: $RegistryAccess, arg2: $Set_<$KnownPack_>, arg3: $BiConsumer_<$ResourceKey<$Registry<never>>, $List<$RegistrySynchronization$PackedRegistryEntry>>): void;
        static networkedRegistries(arg0: $LayeredRegistryAccess<$RegistryLayer_>): $Stream<$RegistryAccess$RegistryEntry<never>>;
        static networkSafeRegistries(arg0: $LayeredRegistryAccess<$RegistryLayer_>): $Stream<$RegistryAccess$RegistryEntry<never>>;
        static NETWORKABLE_REGISTRIES: $Set<$ResourceKey<$Registry<never>>>;
        constructor();
    }
    export class $SectionPos extends $Vec3i {
        static of(arg0: $EntityAccess): $SectionPos;
        static of(arg0: $Position): $SectionPos;
        static of(arg0: number): $SectionPos;
        static of(arg0: number, arg1: number, arg2: number): $SectionPos;
        static of(arg0: $BlockPos_): $SectionPos;
        static of(arg0: $ChunkPos, arg1: number): $SectionPos;
        static offset(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static offset(arg0: number, arg1: $Direction_): number;
        static x(arg0: number): number;
        x(): number;
        static z(arg0: number): number;
        z(): number;
        static y(arg0: number): number;
        y(): number;
        origin(): $BlockPos;
        static cube(arg0: $SectionPos, arg1: number): $Stream<$SectionPos>;
        static bottomOf(arg0: $ChunkAccess): $SectionPos;
        static posToSectionCoord(arg0: number): number;
        static sectionRelativePos(arg0: $BlockPos_): number;
        static sectionRelativeX(arg0: number): number;
        static sectionRelativeY(arg0: number): number;
        static sectionRelativeZ(arg0: number): number;
        relativeToBlockX(arg0: number): number;
        minBlockX(): number;
        relativeToBlockY(arg0: number): number;
        minBlockY(): number;
        relativeToBlockZ(arg0: number): number;
        minBlockZ(): number;
        relativeToBlockPos(arg0: number): $BlockPos;
        maxBlockX(): number;
        maxBlockY(): number;
        maxBlockZ(): number;
        static blockToSection(arg0: number): number;
        static getZeroNode(arg0: number): number;
        static getZeroNode(arg0: number, arg1: number): number;
        blocksInside(): $Stream<$BlockPos>;
        static aroundChunk(arg0: $ChunkPos, arg1: number, arg2: number, arg3: number): $Stream<$SectionPos>;
        static aroundAndAtBlockPos(arg0: $BlockPos_, arg1: $LongConsumer_): void;
        static aroundAndAtBlockPos(arg0: number, arg1: $LongConsumer_): void;
        static aroundAndAtBlockPos(arg0: number, arg1: number, arg2: number, arg3: $LongConsumer_): void;
        static sectionRelative(arg0: number): number;
        chunk(): $ChunkPos;
        center(): $BlockPos;
        asLong(): number;
        static asLong(arg0: $BlockPos_): number;
        static asLong(arg0: number, arg1: number, arg2: number): number;
        static blockToSectionCoord(arg0: number): number;
        static blockToSectionCoord(arg0: number): number;
        static betweenClosedStream(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Stream<$SectionPos>;
        static sectionToBlockCoord(arg0: number, arg1: number): number;
        static sectionToBlockCoord(arg0: number): number;
        static ZERO: $Vec3i;
        static SECTION_MASK: number;
        static CODEC: $Codec<$Vec3i>;
        static SECTION_SIZE: number;
        static SECTION_HALF_SIZE: number;
        static SECTION_MAX_INDEX: number;
        static SECTION_BITS: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $RegistrySetBuilder$EmptyTagLookupWrapper<T> extends $RegistrySetBuilder$EmptyTagRegistryLookup<T> implements $HolderLookup$RegistryLookup$Delegate<T> {
    }
    export class $HolderGetter<T> {
    }
    export interface $HolderGetter<T> {
        get(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        get(arg0: $TagKey_<T>): ($HolderSet$Named<T>) | undefined;
        getOrThrow(arg0: $ResourceKey_<T>): $Holder$Reference<T>;
        getOrThrow(arg0: $TagKey_<T>): $HolderSet$Named<T>;
    }
    export class $Position {
    }
    export interface $Position {
        x(): number;
        z(): number;
        y(): number;
    }
    export class $Direction$AxisDirection extends $Enum<$Direction$AxisDirection> {
        getName(): string;
        static values(): $Direction$AxisDirection[];
        static valueOf(arg0: string): $Direction$AxisDirection;
        getStep(): number;
        opposite(): $Direction$AxisDirection;
        static POSITIVE: $Direction$AxisDirection;
        static NEGATIVE: $Direction$AxisDirection;
        get step(): number;
    }
    /**
     * Values that may be interpreted as {@link $Direction$AxisDirection}.
     */
    export type $Direction$AxisDirection_ = "positive" | "negative";
    export class $RegistrySetBuilder$PatchedRegistries extends $Record {
        patches(): $HolderLookup$Provider;
        full(): $HolderLookup$Provider;
        constructor(full: $HolderLookup$Provider, patches: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$PatchedRegistries}.
     */
    export type $RegistrySetBuilder$PatchedRegistries_ = { full?: $HolderLookup$Provider, patches?: $HolderLookup$Provider,  } | [full?: $HolderLookup$Provider, patches?: $HolderLookup$Provider, ];
    export class $Direction extends $Enum<$Direction> implements $StringRepresentable {
        getName(): string;
        static get(arg0: $Direction$AxisDirection_, arg1: $Direction$Axis_): $Direction;
        static values(): $Direction[];
        static valueOf(arg0: string): $Direction;
        static stream(): $Stream<$Direction>;
        step(): $Vector3f;
        static rotate(arg0: $Matrix4f, arg1: $Direction_): $Direction;
        getClockWise(): $Direction;
        getClockWise(arg0: $Direction$Axis_): $Direction;
        getYaw(): number;
        getCounterClockWise(): $Direction;
        getCounterClockWise(arg0: $Direction$Axis_): $Direction;
        static orderedByNearest(arg0: $Entity): $Direction[];
        static allShuffled(arg0: $RandomSource): $Collection<$Direction>;
        getIndex(): number;
        getHorizontalIndex(): number;
        static getFacingAxis(arg0: $Entity, arg1: $Direction$Axis_): $Direction;
        isFacingAngle(arg0: number): boolean;
        static from3DDataValue(arg0: number): $Direction;
        static from2DDataValue(arg0: number): $Direction;
        static fromDelta(arg0: number, arg1: number, arg2: number): $Direction;
        static fromAxisAndDirection(arg0: $Direction$Axis_, arg1: $Direction$AxisDirection_): $Direction;
        getPitch(): number;
        static byName(arg0: string): $Direction;
        getNormal(): $Vec3i;
        getSerializedName(): string;
        getRotation(): $Quaternionf;
        static getRandom(arg0: $RandomSource): $Direction;
        static getNearest(arg0: number, arg1: number, arg2: number): $Direction;
        static getNearest(arg0: $Vec3_): $Direction;
        static getNearest(arg0: number, arg1: number, arg2: number): $Direction;
        getOpposite(): $Direction;
        getAxis(): $Direction$Axis;
        getAxisDirection(): $Direction$AxisDirection;
        static fromYRot(arg0: number): $Direction;
        getX(): number;
        getY(): number;
        getZ(): number;
        getRemappedEnumConstantName(): string;
        static DOWN: $Direction;
        static CODEC: $StringRepresentable$EnumCodec<$Direction>;
        static NORTH: $Direction;
        static WEST: $Direction;
        static VERTICAL_CODEC: $Codec<$Direction>;
        static BY_ID: $IntFunction<$Direction>;
        static UP: $Direction;
        static SOUTH: $Direction;
        static EAST: $Direction;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Direction>;
        get yaw(): number;
        get index(): number;
        get horizontalIndex(): number;
        get pitch(): number;
        get normal(): $Vec3i;
        get serializedName(): string;
        get rotation(): $Quaternionf;
        get opposite(): $Direction;
        get axis(): $Direction$Axis;
        get axisDirection(): $Direction$AxisDirection;
        get x(): number;
        get y(): number;
        get z(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Direction}.
     */
    export type $Direction_ = "down" | "up" | "north" | "south" | "west" | "east";
    export class $RegistrySetBuilder$EmptyTagLookup<T> implements $HolderGetter<T> {
        getOrThrow(arg0: $ResourceKey_<T>): $Holder$Reference<T>;
        getOrThrow(arg0: $TagKey_<T>): $HolderSet$Named<T>;
    }
    export class $DefaultedRegistry<T> {
    }
    export interface $DefaultedRegistry<T> extends $Registry<T> {
        get(arg0: $ResourceLocation_): T;
        getKey(arg0: T): $ResourceLocation;
        getDefaultKey(): $ResourceLocation;
        byId(arg0: number): T;
        get defaultKey(): $ResourceLocation;
    }
    export class $RegistrySetBuilder$LazyHolder<T> extends $Holder$Reference<T> {
        owner: $HolderOwner<T>;
    }
    export class $HolderSet<T> {
        static empty<T>(): $HolderSet<T>;
        static direct<E, T>(arg0: $Function_<E, $Holder<T>>, ...arg1: E[]): $HolderSet$Direct<T>;
        static direct<T>(...arg0: $Holder_<T>[]): $HolderSet$Direct<T>;
        static direct<T>(arg0: $List_<$Holder_<T>>): $HolderSet$Direct<T>;
        static direct<E, T>(arg0: $Function_<E, $Holder<T>>, arg1: $Collection_<E>): $HolderSet$Direct<T>;
        /**
         * @deprecated
         */
        static emptyNamed<T>(arg0: $HolderOwner<T>, arg1: $TagKey_<T>): $HolderSet$Named<T>;
    }
    export interface $HolderSet<T> extends $Iterable<$Holder<T>>, $IHolderSetExtension<T> {
        size(): number;
        get(arg0: number): $Holder<$Holder<T>>;
        stream(): $Stream<$Holder<$Holder<T>>>;
        contains(arg0: $Holder_<$Holder<T>>): boolean;
        unwrap(): $Either<$TagKey<$Holder<T>>, $List<$Holder<$Holder<T>>>>;
        getRandomElement(arg0: $RandomSource): ($Holder<$Holder<T>>) | undefined;
        canSerializeIn(arg0: $HolderOwner<$Holder_<T>>): boolean;
        unwrapKey(): ($TagKey<$Holder<T>>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $HolderSet}.
     */
    export type $HolderSet_<T> = RegistryTypes.ResolveObject<T>[];
    export class $RegistrySetBuilder$1Entry<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$1Entry}.
     */
    export type $RegistrySetBuilder$1Entry_<T> = { opsInfo?: $RegistryOps$RegistryInfo_<any>, lookup?: $HolderLookup$RegistryLookup<any>,  } | [opsInfo?: $RegistryOps$RegistryInfo_<any>, lookup?: $HolderLookup$RegistryLookup<any>, ];
}
