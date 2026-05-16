import { $IFluidHandler, $IFluidHandler$FluidAction_ } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Consumer_ } from "@package/java/util/function";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";

declare module "@package/com/simibubi/create/foundation/fluid" {
    export class $CombinedTankWrapper implements $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        enforceVariety(): $CombinedTankWrapper;
        constructor(...arg0: $IFluidHandler[]);
        get tanks(): number;
    }
    export class $SmartFluidTank extends $FluidTank {
        constructor(arg0: number, arg1: $Consumer_<$FluidStack>);
    }
}
