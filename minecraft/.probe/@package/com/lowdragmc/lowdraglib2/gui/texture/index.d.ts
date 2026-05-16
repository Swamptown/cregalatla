import { $LDLRegisterClient } from "@package/com/lowdragmc/lowdraglib2/registry/annotation";
import { $Codec } from "@package/com/mojang/serialization";
import { $GUIContext } from "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Position, $Size } from "@package/com/lowdragmc/lowdraglib2/math";
import { $Configurator, $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $IPersistedSerializable } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $LDShaderHolder } from "@package/com/lowdragmc/lowdraglib2/client/shader";
import { $Enum, $AutoCloseable } from "@package/java/lang";
import { $IResourcePath } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $File_ } from "@package/java/io";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $AutoRegistry$Holder, $AutoRegistry$LDLibRegisterClient, $ILDLRegisterClient } from "@package/com/lowdragmc/lowdraglib2/registry";
import { $Transform2D } from "@package/com/lowdragmc/lowdraglib2/gui/ui/data";
import { $IConfigurable } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Color } from "@package/java/awt";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vector4f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/gui/texture" {
    export class $UIResourceTexture extends $TransformTexture {
        getInternalTexture(): $IGuiTexture;
        getResourcePath(): $IResourcePath;
        constructor(arg0: $IResourcePath);
        constructor();
        get internalTexture(): $IGuiTexture;
        get resourcePath(): $IResourcePath;
    }
    export class $RectTexture extends $TransformTexture {
        static of(arg0: number): $RectTexture;
        copy(): $RectTexture;
        setStroke(arg0: number): $RectTexture;
        setBorderColor(arg0: number): $RectTexture;
        getStroke(): number;
        getBorderColor(): number;
        setCornerSegments(arg0: number): $RectTexture;
        getCornerSegments(): number;
        getRadius(): $Vector4f;
        setRadius(arg0: $Vector4f): $RectTexture;
        getColor(): number;
        constructor();
        get color(): number;
    }
    export class $DynamicTexture implements $IGuiTexture {
        static of(arg0: $Supplier_<$IGuiTexture>): $DynamicTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        scale(arg0: number): $IGuiTexture;
        copy(): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        beforeSerialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        afterSerialize(): void;
        beforeDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        afterDeserialize(): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        name(): string;
        group(): string;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        isLDLRegister(): boolean;
        getRegisterUIClient(): $LDLRegisterClient;
        getTranslateKey(): string;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        getChatComponent(): $Component;
        registryName(): $ResourceLocation;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        textureSupplier: $Supplier<$IGuiTexture>;
        constructor(arg0: $Supplier_<$IGuiTexture>);
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get LDLRegister(): boolean;
        get registerUIClient(): $LDLRegisterClient;
        get translateKey(): string;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get chatComponent(): $Component;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
    }
    export class $SpriteTexture$WrapMode extends $Enum<$SpriteTexture$WrapMode> {
        static values(): $SpriteTexture$WrapMode[];
        static valueOf(arg0: string): $SpriteTexture$WrapMode;
        static REPEAT: $SpriteTexture$WrapMode;
        static CLAMP: $SpriteTexture$WrapMode;
        static MIRRORED_REPEAT: $SpriteTexture$WrapMode;
    }
    /**
     * Values that may be interpreted as {@link $SpriteTexture$WrapMode}.
     */
    export type $SpriteTexture$WrapMode_ = "clamp" | "repeat" | "mirrored_repeat";
    export class $ItemStackTexture extends $TransformTexture {
        copy(): $ItemStackTexture;
        updateTick(): void;
        setItems(...arg0: $ItemStack_[]): $ItemStackTexture;
        items: $ItemStack[];
        constructor(...arg0: $Item_[]);
        constructor(...arg0: $ItemStack_[]);
        constructor();
    }
    export class $TextTexture extends $TransformTexture {
        copy(): $TextTexture;
        setSupplier(arg0: $Supplier_<string>): $TextTexture;
        setRollSpeed(arg0: number): void;
        setDropShadow(arg0: boolean): $TextTexture;
        updateTick(): void;
        updateText(arg0: string): void;
        setBackgroundColor(arg0: number): $TextTexture;
        setType(arg0: $TextTexture$TextType_): $TextTexture;
        getLines(): number;
        setWidth(arg0: number): $TextTexture;
        dropShadow: boolean;
        backgroundColor: number;
        color: number;
        rollSpeed: number;
        supplier: $Supplier<string>;
        width: number;
        text: string;
        type: $TextTexture$TextType;
        constructor(arg0: $Supplier_<string>);
        constructor(arg0: string);
        constructor(arg0: string, arg1: number);
        constructor();
        get lines(): number;
    }
    export class $ColorBorderTexture extends $TransformTexture {
        setBorder(arg0: number): $ColorBorderTexture;
        border: number;
        color: number;
        constructor(arg0: number, arg1: $Color);
        constructor(arg0: number, arg1: number);
        constructor();
    }
    export class $IGuiTexture$EmptyTexture implements $IGuiTexture {
        copy(): $IGuiTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        scale(arg0: number): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        beforeSerialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        afterSerialize(): void;
        beforeDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        afterDeserialize(): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        name(): string;
        group(): string;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        isLDLRegister(): boolean;
        getRegisterUIClient(): $LDLRegisterClient;
        getTranslateKey(): string;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        getChatComponent(): $Component;
        registryName(): $ResourceLocation;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        constructor();
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get LDLRegister(): boolean;
        get registerUIClient(): $LDLRegisterClient;
        get translateKey(): string;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get chatComponent(): $Component;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
    }
    export class $GuiTextureGroup extends $TransformTexture {
        static of(...arg0: $IGuiTexture_[]): $GuiTextureGroup;
        copy(): $GuiTextureGroup;
        setTextures(...arg0: $IGuiTexture_[]): $GuiTextureGroup;
        getTextures(): $IGuiTexture[];
        constructor();
        constructor(...arg0: $IGuiTexture_[]);
    }
    export class $ITextureSize {
    }
    export interface $ITextureSize {
        getWidth(): number;
        getHeight(): number;
        ldlib2$getImageWidth(): number;
        ldlib2$getImageHeight(): number;
        get width(): number;
        get height(): number;
    }
    export class $IGuiTexture {
        static group(...arg0: $IGuiTexture_[]): $GuiTextureGroup;
        static dynamic(arg0: $Supplier_<$IGuiTexture>): $DynamicTexture;
        static getTextureFromFile(arg0: $File_): $ResourceLocation;
        static createCodec(): $Codec<$IGuiTexture>;
        static CODEC: $Codec<$IGuiTexture>;
        static EMPTY: $IGuiTexture$EmptyTexture;
        static MISSING_TEXTURE: $IGuiTexture$MissingTexture;
    }
    export interface $IGuiTexture extends $IPersistedSerializable, $IConfigurable, $ILDLRegisterClient<$IGuiTexture, $Supplier<$IGuiTexture>> {
        scale(arg0: number): $IGuiTexture;
        copy(): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        set color(value: number);
        get rawTexture(): $IGuiTexture;
    }
    /**
     * Values that may be interpreted as {@link $IGuiTexture}.
     */
    export type $IGuiTexture_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => void);
    export class $SpriteTexture extends $TransformTexture {
        copy(): $SpriteTexture;
        setImageLocation(arg0: $ResourceLocation_): $SpriteTexture;
        setBorder(arg0: number): $SpriteTexture;
        setBorder(arg0: number, arg1: number, arg2: number, arg3: number): $SpriteTexture;
        setWrapMode(arg0: $SpriteTexture$WrapMode_): $SpriteTexture;
        getImageSize(): $Size;
        static of(arg0: $ResourceLocation_): $SpriteTexture;
        setSprite(arg0: number, arg1: number, arg2: number, arg3: number): $SpriteTexture;
        getImageLocation(): $ResourceLocation;
        setSpritePosition(arg0: $Position): $SpriteTexture;
        setSpriteSize(arg0: $Size): $SpriteTexture;
        setBorderLT(arg0: $Position): $SpriteTexture;
        setBorderRB(arg0: $Position): $SpriteTexture;
        borderLT: $Position;
        color: number;
        wrapMode: $SpriteTexture$WrapMode;
        borderRB: $Position;
        spriteSize: $Size;
        spritePosition: $Position;
        constructor();
        get imageSize(): $Size;
    }
    export class $SDFRectTexture extends $TransformTexture {
        static of(arg0: number): $SDFRectTexture;
        copy(): $SDFRectTexture;
        setStroke(arg0: number): $SDFRectTexture;
        setBorderColor(arg0: number): $SDFRectTexture;
        getStroke(): number;
        getBorderColor(): number;
        getRadius(): $Vector4f;
        setRadius(arg0: number): $SDFRectTexture;
        setRadius(arg0: $Vector4f): $SDFRectTexture;
        getColor(): number;
        constructor();
        get color(): number;
    }
    export class $AnimationTexture extends $TransformTexture {
        getFrom(): number;
        setCellSize(arg0: number): $AnimationTexture;
        setAnimation(arg0: number, arg1: number): $AnimationTexture;
        setAnimation(arg0: number): $AnimationTexture;
        getCellSize(): number;
        updateTick(): void;
        getAnimation(): number;
        setTexture(arg0: string): $AnimationTexture;
        getColor(): number;
        getTo(): number;
        imageLocation: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
        constructor(arg0: string);
        constructor();
        get from(): number;
        set texture(value: string);
        get color(): number;
        get to(): number;
    }
    export class $TextTexture$TextType extends $Enum<$TextTexture$TextType> {
        static values(): $TextTexture$TextType[];
        static valueOf(arg0: string): $TextTexture$TextType;
        static LEFT_ROLL_ALWAYS: $TextTexture$TextType;
        static HIDE: $TextTexture$TextType;
        static LEFT_HIDE: $TextTexture$TextType;
        static LEFT: $TextTexture$TextType;
        static ROLL_ALWAYS: $TextTexture$TextType;
        static RIGHT: $TextTexture$TextType;
        static ROLL: $TextTexture$TextType;
        static LEFT_ROLL: $TextTexture$TextType;
        static NORMAL: $TextTexture$TextType;
    }
    /**
     * Values that may be interpreted as {@link $TextTexture$TextType}.
     */
    export type $TextTexture$TextType_ = "normal" | "hide" | "roll" | "roll_always" | "left" | "right" | "left_hide" | "left_roll" | "left_roll_always";
    export class $ColorRectTexture extends $TransformTexture {
        setColor(arg0: number): $ColorRectTexture;
        color: number;
        constructor(arg0: $Color);
        constructor(arg0: number);
        constructor();
    }
    export class $TransformTexture implements $IGuiTexture {
        scale(arg0: number, arg1: number): $TransformTexture;
        scale(arg0: number): $TransformTexture;
        transform(arg0: number, arg1: number): $TransformTexture;
        beforeDeserialize(): void;
        copyTransform(arg0: $TransformTexture): void;
        copyTransform(arg0: $Transform2D): void;
        getTransform2D(): $Transform2D;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        copy(): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        beforeSerialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        afterSerialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        afterDeserialize(): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        name(): string;
        group(): string;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        isLDLRegister(): boolean;
        getRegisterUIClient(): $LDLRegisterClient;
        getTranslateKey(): string;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        getChatComponent(): $Component;
        registryName(): $ResourceLocation;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        rotate(arg0: number): $IGuiTexture;
        constructor();
        get transform2D(): $Transform2D;
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get LDLRegister(): boolean;
        get registerUIClient(): $LDLRegisterClient;
        get translateKey(): string;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get chatComponent(): $Component;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
    }
    export class $ShaderTexture extends $TransformTexture implements $AutoCloseable {
        close(): void;
        getShaderFromFile(arg0: $File_): $ResourceLocation;
        getShaderLocation(): $ResourceLocation;
        getShaderHolder(): $LDShaderHolder;
        getColor(): number;
        setShader(arg0: $ResourceLocation_): $ShaderTexture;
        constructor();
        constructor(arg0: $ResourceLocation_);
        get shaderLocation(): $ResourceLocation;
        get shaderHolder(): $LDShaderHolder;
        get color(): number;
        set shader(value: $ResourceLocation_);
    }
    export class $IGuiTexture$MissingTexture implements $IGuiTexture {
        copy(): $IGuiTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        scale(arg0: number): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        beforeSerialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        afterSerialize(): void;
        beforeDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        afterDeserialize(): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        name(): string;
        group(): string;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        isLDLRegister(): boolean;
        getRegisterUIClient(): $LDLRegisterClient;
        getTranslateKey(): string;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        getChatComponent(): $Component;
        registryName(): $ResourceLocation;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        constructor();
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get LDLRegister(): boolean;
        get registerUIClient(): $LDLRegisterClient;
        get translateKey(): string;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get chatComponent(): $Component;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
    }
    export class $FluidStackTexture extends $TransformTexture {
        setFluids(...arg0: $FluidStack_[]): $FluidStackTexture;
        updateTick(): void;
        fluids: $FluidStack[];
        constructor(...arg0: $Fluid_[]);
        constructor(...arg0: $FluidStack_[]);
        constructor();
    }
    export class $VanillaSpriteTexture extends $TransformTexture {
        copy(): $VanillaSpriteTexture;
        setColor(arg0: number): $VanillaSpriteTexture;
        static of(arg0: $ResourceLocation_): $VanillaSpriteTexture;
        setSprite(arg0: $ResourceLocation_): $VanillaSpriteTexture;
        getColor(): number;
        getSprite(): $ResourceLocation;
        constructor();
        constructor(arg0: $ResourceLocation_);
    }
}
