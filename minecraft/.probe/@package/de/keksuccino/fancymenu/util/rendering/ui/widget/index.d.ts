import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $RenderableResource } from "@package/de/keksuccino/fancymenu/util/resource";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractWidget, $AbstractSliderButton } from "@package/net/minecraft/client/gui/components";
import { $IAudio } from "@package/de/keksuccino/fancymenu/util/resource/resources/audio";
import { $List } from "@package/java/util";
import { $Runnable_, $Runnable, $Enum } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $DrawableColor } from "@package/de/keksuccino/fancymenu/util/rendering";

declare module "@package/de/keksuccino/fancymenu/util/rendering/ui/widget" {
    export class $UniqueLabeledSwitchCycleButton {
    }
    export interface $UniqueLabeledSwitchCycleButton {
        getLabeledSwitchComponentLabel_FancyMenu(): $Component;
        setLabeledSwitchComponentLabel_FancyMenu(arg0: $Component_): void;
    }
    export class $CustomizableSlider {
    }
    export interface $CustomizableSlider {
        setNineSliceSliderHandleBorderX_FancyMenu(arg0: number): void;
        renderSliderBackgroundFancyMenu(arg0: $GuiGraphics, arg1: $AbstractSliderButton, arg2: boolean): boolean;
        setNineSliceCustomSliderBackground_FancyMenu(arg0: boolean): void;
        isNineSliceCustomSliderBackground_FancyMenu(): boolean;
        setNineSliceSliderBackgroundBorderX_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderX_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderY_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderY_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderTop_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderTop_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderRight_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderRight_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderBottom_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderBottom_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderLeft_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderLeft_FancyMenu(): number;
        getNineSliceSliderHandleBorderX_FancyMenu(): number;
        setNineSliceSliderHandleBorderY_FancyMenu(arg0: number): void;
        getNineSliceSliderHandleBorderY_FancyMenu(): number;
        setCustomSliderBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundNormalFancyMenu(): $RenderableResource;
        setCustomSliderBackgroundHighlightedFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundHighlightedFancyMenu(): $RenderableResource;
        setNineSliceCustomSliderHandle_FancyMenu(arg0: boolean): void;
        setNineSliceSliderHandleBorderTop_FancyMenu(arg0: number): void;
        setNineSliceSliderHandleBorderRight_FancyMenu(arg0: number): void;
        setNineSliceSliderHandleBorderBottom_FancyMenu(arg0: number): void;
        setNineSliceSliderHandleBorderLeft_FancyMenu(arg0: number): void;
        isNineSliceCustomSliderHandle_FancyMenu(): boolean;
        getNineSliceSliderHandleBorderTop_FancyMenu(): number;
        getNineSliceSliderHandleBorderRight_FancyMenu(): number;
        getNineSliceSliderHandleBorderBottom_FancyMenu(): number;
        getNineSliceSliderHandleBorderLeft_FancyMenu(): number;
    }
    export class $CustomizableWidget$CustomBackgroundResetBehavior extends $Enum<$CustomizableWidget$CustomBackgroundResetBehavior> {
        static values(): $CustomizableWidget$CustomBackgroundResetBehavior[];
        static valueOf(arg0: string): $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_UNHOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_NEVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_HOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_HOVER_AND_UNHOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
    }
    /**
     * Values that may be interpreted as {@link $CustomizableWidget$CustomBackgroundResetBehavior}.
     */
    export type $CustomizableWidget$CustomBackgroundResetBehavior_ = "reset_never" | "reset_on_hover" | "reset_on_unhover" | "reset_on_hover_and_unhover";
    export class $UniqueWidget {
    }
    export interface $UniqueWidget {
        getWidgetIdentifierFancyMenu(): string;
        setWidgetIdentifierFancyMenu(arg0: string): $AbstractWidget;
    }
    export class $CustomizableWidget {
    }
    export interface $CustomizableWidget {
        resolveLabelScaleFancyMenu(): number;
        resetWidgetSizeAndPositionFancyMenu(): void;
        tickFocusStateListenersFancyMenu(arg0: boolean): void;
        isNineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        tickHoverStateListenersFancyMenu(arg0: boolean): void;
        tickHoverOrFocusStateListenersFancyMenu(arg0: boolean): void;
        addHoverOrFocusStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        addResetCustomizationsListenerFancyMenu(arg0: $Runnable_): void;
        getResetCustomizationsListenersFancyMenu(): $List<$Runnable>;
        addHoverStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        addFocusStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        getHoverStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        getFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        getHoverOrFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        getLastHoverStateFancyMenu(): boolean;
        setLastHoverStateFancyMenu(arg0: boolean): void;
        getLastFocusStateFancyMenu(): boolean;
        setLastFocusStateFancyMenu(arg0: boolean): void;
        getLastHoverOrFocusStateFancyMenu(): boolean;
        setLastHoverOrFocusStateFancyMenu(arg0: boolean): void;
        getCustomBackgroundNormalFancyMenu(): $RenderableResource;
        getCustomBackgroundHoverFancyMenu(): $RenderableResource;
        getCustomBackgroundInactiveFancyMenu(): $RenderableResource;
        setCustomBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundHoverFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundInactiveFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundResetBehaviorFancyMenu(arg0: $CustomizableWidget$CustomBackgroundResetBehavior_): void;
        setHoverSoundFancyMenu(arg0: $IAudio): void;
        setUnhoverSoundFancyMenu(arg0: $IAudio): void;
        setCustomClickSoundFancyMenu(arg0: $IAudio): void;
        setHiddenFancyMenu(arg0: boolean): void;
        setCustomLabelFancyMenu(arg0: $Component_): void;
        setHoverLabelFancyMenu(arg0: $Component_): void;
        setUnderlineLabelOnHoverFancyMenu(arg0: boolean): void;
        setLabelShadowFancyMenu(arg0: boolean): void;
        setLabelHoverColorFancyMenu(arg0: $DrawableColor): void;
        setLabelBaseColorFancyMenu(arg0: $DrawableColor): void;
        setLabelScaleFancyMenu(arg0: number): void;
        setCustomWidthFancyMenu(arg0: number): void;
        setCustomHeightFancyMenu(arg0: number): void;
        setCustomXFancyMenu(arg0: number): void;
        setCustomYFancyMenu(arg0: number): void;
        setHitboxRotationFancyMenu(arg0: number, arg1: number, arg2: number): void;
        getCustomLabelFancyMenu(): $Component;
        getHoverLabelFancyMenu(): $Component;
        isUnderlineLabelOnHoverFancyMenu(): boolean;
        isLabelShadowFancyMenu(): boolean;
        getLabelHoverColorFancyMenu(): $DrawableColor;
        getLabelBaseColorFancyMenu(): $DrawableColor;
        getLabelScaleFancyMenu(): number;
        getCustomClickSoundFancyMenu(): $IAudio;
        getHoverSoundFancyMenu(): $IAudio;
        getUnhoverSoundFancyMenu(): $IAudio;
        setNineSliceCustomBackground_FancyMenu(arg0: boolean): void;
        setNineSliceBorderX_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderX_FancyMenu(): number;
        setNineSliceBorderY_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderY_FancyMenu(): number;
        setNineSliceBorderTop_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        setNineSliceBorderRight_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        setNineSliceBorderBottom_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        setNineSliceBorderLeft_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        getCustomBackgroundResetBehaviorFancyMenu(): $CustomizableWidget$CustomBackgroundResetBehavior;
        getCustomWidthFancyMenu(): number;
        getCustomHeightFancyMenu(): number;
        getCustomXFancyMenu(): number;
        getCustomYFancyMenu(): number;
        getHitboxRotationDegreesFancyMenu(): number;
        getHitboxVerticalTiltDegreesFancyMenu(): number;
        getHitboxHorizontalTiltDegreesFancyMenu(): number;
        getOriginalMessageFancyMenu(): $Component;
        renderCustomBackgroundFancyMenu(arg0: $AbstractWidget, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        stopCustomClickSoundFancyMenu(): void;
        stopHoverSoundFancyMenu(): void;
        stopUnhoverSoundFancyMenu(): void;
        isHiddenFancyMenu(): boolean;
        resetWidgetCustomizationsFancyMenu(): void;
        get nineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        get resetCustomizationsListenersFancyMenu(): $List<$Runnable>;
        get hoverStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        get focusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        get hoverOrFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        set nineSliceCustomBackground_FancyMenu(value: boolean);
        set nineSliceBorderX_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderX_FancyMenu(): number;
        set nineSliceBorderY_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderY_FancyMenu(): number;
        set nineSliceBorderTop_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        set nineSliceBorderRight_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        set nineSliceBorderBottom_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        set nineSliceBorderLeft_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        get hitboxRotationDegreesFancyMenu(): number;
        get hitboxVerticalTiltDegreesFancyMenu(): number;
        get hitboxHorizontalTiltDegreesFancyMenu(): number;
        get originalMessageFancyMenu(): $Component;
    }
}
