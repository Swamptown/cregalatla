
declare module "@package/com/blackgear/vanillabackport/common/api/bundle" {
    export class $IBundle$Mutable {
    }
    export interface $IBundle$Mutable {
        toggleSelectedItem(arg0: number): void;
        indexIsOutsideAllowedBounds(arg0: number): boolean;
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
