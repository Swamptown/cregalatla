
declare module "@package/com/blackgear/vanillabackport/common/api/bundle" {
    export class $IBundle$Mutable {
    }
    export interface $IBundle$Mutable {
        indexIsOutsideAllowedBounds(arg0: number): boolean;
        toggleSelectedItem(arg0: number): void;
    }
    export class $IBundle {
    }
    export interface $IBundle {
        setSelectedItem(arg0: number): void;
        getSelectedItem(): number;
        getNumberOfItemsToShow(): number;
        get numberOfItemsToShow(): number;
    }
}
