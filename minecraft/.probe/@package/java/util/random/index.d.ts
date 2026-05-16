import { $IntStream, $DoubleStream, $LongStream } from "@package/java/util/stream";

declare module "@package/java/util/random" {
    export class $RandomGenerator {
        static of(arg0: string): $RandomGenerator;
        static getDefault(): $RandomGenerator;
        static get default(): $RandomGenerator;
    }
    export interface $RandomGenerator {
        nextDouble(arg0: number): number;
        nextDouble(): number;
        nextDouble(arg0: number, arg1: number): number;
        nextInt(): number;
        nextInt(arg0: number, arg1: number): number;
        nextInt(arg0: number): number;
        nextBytes(arg0: number[]): void;
        longs(arg0: number, arg1: number, arg2: number): $LongStream;
        longs(arg0: number): $LongStream;
        longs(arg0: number, arg1: number): $LongStream;
        longs(): $LongStream;
        ints(): $IntStream;
        ints(arg0: number, arg1: number): $IntStream;
        ints(arg0: number, arg1: number, arg2: number): $IntStream;
        ints(arg0: number): $IntStream;
        doubles(): $DoubleStream;
        doubles(arg0: number): $DoubleStream;
        doubles(arg0: number, arg1: number): $DoubleStream;
        doubles(arg0: number, arg1: number, arg2: number): $DoubleStream;
        nextLong(arg0: number, arg1: number): number;
        nextLong(arg0: number): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextFloat(arg0: number): number;
        nextFloat(arg0: number, arg1: number): number;
        nextGaussian(arg0: number, arg1: number): number;
        nextGaussian(): number;
        isDeprecated(): boolean;
        equiDoubles(arg0: number, arg1: number, arg2: boolean, arg3: boolean): $DoubleStream;
        nextExponential(): number;
        get deprecated(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RandomGenerator}.
     */
    export type $RandomGenerator_ = (() => number);
}
