import { $Rectangle2D, $Point2D } from "@package/java/awt/geom";
import { $BigInteger } from "@package/java/math";
import { $ColorSpace } from "@package/java/awt/color";
import { $RenderingHints, $Point, $ImageCapabilities, $GraphicsConfiguration, $Graphics2D, $BufferCapabilities, $Image, $Transparency, $Graphics, $Rectangle } from "@package/java/awt";
import { $Vector, $Hashtable } from "@package/java/util";
import { $Object } from "@package/java/lang";
export * as renderable from "@package/java/awt/image/renderable";

declare module "@package/java/awt/image" {
    export class $Raster {
        static createRaster(arg0: $SampleModel, arg1: $DataBuffer, arg2: $Point): $Raster;
        getSample(arg0: number, arg1: number, arg2: number): number;
        getNumDataElements(): number;
        getTransferType(): number;
        getSampleFloat(arg0: number, arg1: number, arg2: number): number;
        getPixel(arg0: number, arg1: number, arg2: number[]): number[];
        getPixel(arg0: number, arg1: number, arg2: number[]): number[];
        getPixel(arg0: number, arg1: number, arg2: number[]): number[];
        createChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): $Raster;
        static createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Point): $WritableRaster;
        static createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: $Point): $WritableRaster;
        static createBandedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: $Point): $WritableRaster;
        getSampleDouble(arg0: number, arg1: number, arg2: number): number;
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
        createTranslatedChild(arg0: number, arg1: number): $Raster;
        getWidth(): number;
        getHeight(): number;
        createCompatibleWritableRaster(arg0: number, arg1: number): $WritableRaster;
        createCompatibleWritableRaster(arg0: $Rectangle): $WritableRaster;
        createCompatibleWritableRaster(arg0: number, arg1: number, arg2: number, arg3: number): $WritableRaster;
        createCompatibleWritableRaster(): $WritableRaster;
        static createInterleavedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $Point): $WritableRaster;
        static createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $Point): $WritableRaster;
        static createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Point): $WritableRaster;
        static createPackedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $Point): $WritableRaster;
        static createPackedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: $Point): $WritableRaster;
        static createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Point): $WritableRaster;
        static createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: $Point): $WritableRaster;
        getNumBands(): number;
        getSampleModel(): $SampleModel;
        getDataElements(arg0: number, arg1: number, arg2: $Object): $Object;
        getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object): $Object;
        getDataBuffer(): $DataBuffer;
        getMinX(): number;
        getMinY(): number;
        getSampleModelTranslateX(): number;
        getSampleModelTranslateY(): number;
        static createWritableRaster(arg0: $SampleModel, arg1: $DataBuffer, arg2: $Point): $WritableRaster;
        static createWritableRaster(arg0: $SampleModel, arg1: $Point): $WritableRaster;
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
        getBounds(): $Rectangle;
        getParent(): $Raster;
        get numDataElements(): number;
        get transferType(): number;
        get width(): number;
        get height(): number;
        get numBands(): number;
        get sampleModel(): $SampleModel;
        get dataBuffer(): $DataBuffer;
        get minX(): number;
        get minY(): number;
        get sampleModelTranslateX(): number;
        get sampleModelTranslateY(): number;
        get bounds(): $Rectangle;
        get parent(): $Raster;
    }
    export class $WritableRenderedImage {
    }
    export interface $WritableRenderedImage extends $RenderedImage {
        setData(arg0: $Raster): void;
        addTileObserver(arg0: $TileObserver_): void;
        removeTileObserver(arg0: $TileObserver_): void;
        isTileWritable(arg0: number, arg1: number): boolean;
        getWritableTileIndices(): $Point[];
        hasTileWriters(): boolean;
        getWritableTile(arg0: number, arg1: number): $WritableRaster;
        releaseWritableTile(arg0: number, arg1: number): void;
        set data(value: $Raster);
        get writableTileIndices(): $Point[];
    }
    export class $BufferedImage extends $Image implements $WritableRenderedImage, $Transparency {
        getData(): $Raster;
        getData(arg0: $Rectangle): $Raster;
        getTransparency(): number;
        getColorModel(): $ColorModel;
        getRaster(): $WritableRaster;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): void;
        setRGB(arg0: number, arg1: number, arg2: number): void;
        getSubimage(arg0: number, arg1: number, arg2: number, arg3: number): $BufferedImage;
        getSources(): $Vector<$RenderedImage>;
        getPropertyNames(): string[];
        getNumXTiles(): number;
        getNumYTiles(): number;
        getMinTileX(): number;
        getMinTileY(): number;
        getTileWidth(): number;
        getTileHeight(): number;
        getTileGridXOffset(): number;
        getTileGridYOffset(): number;
        getTile(arg0: number, arg1: number): $Raster;
        copyData(arg0: $WritableRaster): $WritableRaster;
        setData(arg0: $Raster): void;
        addTileObserver(arg0: $TileObserver_): void;
        removeTileObserver(arg0: $TileObserver_): void;
        isTileWritable(arg0: number, arg1: number): boolean;
        getWritableTileIndices(): $Point[];
        hasTileWriters(): boolean;
        getWritableTile(arg0: number, arg1: number): $WritableRaster;
        releaseWritableTile(arg0: number, arg1: number): void;
        getWidth(): number;
        getHeight(): number;
        isAlphaPremultiplied(): boolean;
        coerceData(arg0: boolean): void;
        getSampleModel(): $SampleModel;
        getAlphaRaster(): $WritableRaster;
        getRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): number[];
        getRGB(arg0: number, arg1: number): number;
        createGraphics(): $Graphics2D;
        getMinX(): number;
        getMinY(): number;
        getProperty(arg0: string): $Object;
        getType(): number;
        static TYPE_3BYTE_BGR: number;
        static TYPE_USHORT_565_RGB: number;
        static TYPE_INT_ARGB_PRE: number;
        static TYPE_USHORT_555_RGB: number;
        static TYPE_USHORT_GRAY: number;
        static SCALE_FAST: number;
        static SCALE_AREA_AVERAGING: number;
        static TYPE_BYTE_INDEXED: number;
        static SCALE_SMOOTH: number;
        static SCALE_REPLICATE: number;
        static TYPE_4BYTE_ABGR: number;
        static TYPE_INT_ARGB: number;
        static SCALE_DEFAULT: number;
        static TYPE_CUSTOM: number;
        static TYPE_INT_RGB: number;
        static TYPE_INT_BGR: number;
        static UndefinedProperty: $Object;
        static TYPE_BYTE_GRAY: number;
        static TYPE_4BYTE_ABGR_PRE: number;
        static TYPE_BYTE_BINARY: number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $ColorModel, arg1: $WritableRaster, arg2: boolean, arg3: $Hashtable<never, never>);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $IndexColorModel);
        get transparency(): number;
        get colorModel(): $ColorModel;
        get raster(): $WritableRaster;
        get sources(): $Vector<$RenderedImage>;
        get propertyNames(): string[];
        get numXTiles(): number;
        get numYTiles(): number;
        get minTileX(): number;
        get minTileY(): number;
        get tileWidth(): number;
        get tileHeight(): number;
        get tileGridXOffset(): number;
        get tileGridYOffset(): number;
        get writableTileIndices(): $Point[];
        get width(): number;
        get height(): number;
        get alphaPremultiplied(): boolean;
        get sampleModel(): $SampleModel;
        get alphaRaster(): $WritableRaster;
        get minX(): number;
        get minY(): number;
        get type(): number;
    }
    export class $VolatileImage extends $Image implements $Transparency {
        contentsLost(): boolean;
        getSnapshot(): $BufferedImage;
        getTransparency(): number;
        getCapabilities(): $ImageCapabilities;
        getWidth(): number;
        getHeight(): number;
        createGraphics(): $Graphics2D;
        validate(arg0: $GraphicsConfiguration): number;
        static SCALE_DEFAULT: number;
        static UndefinedProperty: $Object;
        static IMAGE_OK: number;
        static SCALE_FAST: number;
        static SCALE_AREA_AVERAGING: number;
        static IMAGE_RESTORED: number;
        static SCALE_SMOOTH: number;
        static SCALE_REPLICATE: number;
        static IMAGE_INCOMPATIBLE: number;
        get snapshot(): $BufferedImage;
        get transparency(): number;
        get capabilities(): $ImageCapabilities;
        get width(): number;
        get height(): number;
    }
    export class $BufferStrategy {
        show(): void;
        getDrawGraphics(): $Graphics;
        contentsLost(): boolean;
        contentsRestored(): boolean;
        dispose(): void;
        getCapabilities(): $BufferCapabilities;
        get drawGraphics(): $Graphics;
        get capabilities(): $BufferCapabilities;
    }
    export class $ImageObserver {
        static ABORT: number;
        static PROPERTIES: number;
        static SOMEBITS: number;
        static ALLBITS: number;
        static WIDTH: number;
        static ERROR: number;
        static HEIGHT: number;
        static FRAMEBITS: number;
    }
    export interface $ImageObserver {
        imageUpdate(arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ImageObserver}.
     */
    export type $ImageObserver_ = ((arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => boolean);
    export class $ImageConsumer {
        static STATICIMAGEDONE: number;
        static SINGLEPASS: number;
        static RANDOMPIXELORDER: number;
        static TOPDOWNLEFTRIGHT: number;
        static IMAGEERROR: number;
        static SINGLEFRAMEDONE: number;
        static SINGLEFRAME: number;
        static COMPLETESCANLINES: number;
        static IMAGEABORTED: number;
    }
    export interface $ImageConsumer {
        imageComplete(arg0: number): void;
        setDimensions(arg0: number, arg1: number): void;
        setColorModel(arg0: $ColorModel): void;
        setHints(arg0: number): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ColorModel, arg5: number[], arg6: number, arg7: number): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ColorModel, arg5: number[], arg6: number, arg7: number): void;
        setProperties(arg0: $Hashtable<never, never>): void;
        set colorModel(value: $ColorModel);
        set hints(value: number);
        set properties(value: $Hashtable<never, never>);
    }
    export class $ColorModel implements $Transparency {
        getTransferType(): number;
        getNumColorComponents(): number;
        getNormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
        getNormalizedComponents(arg0: $Object, arg1: number[], arg2: number): number[];
        isCompatibleSampleModel(arg0: $SampleModel): boolean;
        getRed(arg0: number): number;
        getRed(arg0: $Object): number;
        getGreen(arg0: number): number;
        getGreen(arg0: $Object): number;
        getBlue(arg0: $Object): number;
        getBlue(arg0: number): number;
        getAlpha(arg0: $Object): number;
        getAlpha(arg0: number): number;
        getTransparency(): number;
        getUnnormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
        getDataElement(arg0: number[], arg1: number): number;
        getDataElement(arg0: number[], arg1: number): number;
        createCompatibleWritableRaster(arg0: number, arg1: number): $WritableRaster;
        static getRGBdefault(): $ColorModel;
        hasAlpha(): boolean;
        isAlphaPremultiplied(): boolean;
        isCompatibleRaster(arg0: $Raster): boolean;
        coerceData(arg0: $WritableRaster, arg1: boolean): $ColorModel;
        getColorSpace(): $ColorSpace;
        getComponentSize(arg0: number): number;
        getComponentSize(): number[];
        getPixelSize(): number;
        getNumComponents(): number;
        getAlphaRaster(arg0: $WritableRaster): $WritableRaster;
        getDataElements(arg0: number[], arg1: number, arg2: $Object): $Object;
        getDataElements(arg0: number, arg1: $Object): $Object;
        getDataElements(arg0: number[], arg1: number, arg2: $Object): $Object;
        getRGB(arg0: number): number;
        getRGB(arg0: $Object): number;
        createCompatibleSampleModel(arg0: number, arg1: number): $SampleModel;
        getComponents(arg0: $Object, arg1: number[], arg2: number): number[];
        getComponents(arg0: number, arg1: number[], arg2: number): number[];
        constructor(arg0: number);
        get transferType(): number;
        get numColorComponents(): number;
        get transparency(): number;
        static get RGBdefault(): $ColorModel;
        get alphaPremultiplied(): boolean;
        get colorSpace(): $ColorSpace;
        get pixelSize(): number;
        get numComponents(): number;
    }
    export class $IndexColorModel extends $ColorModel {
        convertToIntDiscrete(arg0: $Raster, arg1: boolean): $BufferedImage;
        getReds(arg0: number[]): void;
        getGreens(arg0: number[]): void;
        getBlues(arg0: number[]): void;
        getAlphas(arg0: number[]): void;
        isValid(arg0: number): boolean;
        isValid(): boolean;
        getTransparentPixel(): number;
        getRGBs(arg0: number[]): void;
        getValidPixels(): $BigInteger;
        getMapSize(): number;
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: number, arg5: $BigInteger);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number[]);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[]);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number, arg6: number);
        get transparentPixel(): number;
        get validPixels(): $BigInteger;
        get mapSize(): number;
    }
    export class $DataBuffer {
        static getDataTypeSize(arg0: number): number;
        getOffsets(): number[];
        getNumBanks(): number;
        getElemFloat(arg0: number): number;
        getElemFloat(arg0: number, arg1: number): number;
        setElemFloat(arg0: number, arg1: number): void;
        setElemFloat(arg0: number, arg1: number, arg2: number): void;
        getElemDouble(arg0: number, arg1: number): number;
        getElemDouble(arg0: number): number;
        setElemDouble(arg0: number, arg1: number): void;
        setElemDouble(arg0: number, arg1: number, arg2: number): void;
        getDataType(): number;
        getSize(): number;
        getOffset(): number;
        getElem(arg0: number): number;
        getElem(arg0: number, arg1: number): number;
        setElem(arg0: number, arg1: number): void;
        setElem(arg0: number, arg1: number, arg2: number): void;
        static TYPE_INT: number;
        static TYPE_DOUBLE: number;
        static TYPE_SHORT: number;
        static TYPE_UNDEFINED: number;
        static TYPE_BYTE: number;
        static TYPE_USHORT: number;
        static TYPE_FLOAT: number;
        get offsets(): number[];
        get numBanks(): number;
        get dataType(): number;
        get size(): number;
        get offset(): number;
    }
    export class $ImageProducer {
    }
    export interface $ImageProducer {
        addConsumer(arg0: $ImageConsumer): void;
        isConsumer(arg0: $ImageConsumer): boolean;
        removeConsumer(arg0: $ImageConsumer): void;
        startProduction(arg0: $ImageConsumer): void;
        requestTopDownLeftRightResend(arg0: $ImageConsumer): void;
    }
    export class $RenderedImage {
    }
    export interface $RenderedImage {
        getData(): $Raster;
        getData(arg0: $Rectangle): $Raster;
        getColorModel(): $ColorModel;
        getSources(): $Vector<$RenderedImage>;
        getPropertyNames(): string[];
        getNumXTiles(): number;
        getNumYTiles(): number;
        getMinTileX(): number;
        getMinTileY(): number;
        getTileWidth(): number;
        getTileHeight(): number;
        getTileGridXOffset(): number;
        getTileGridYOffset(): number;
        getTile(arg0: number, arg1: number): $Raster;
        copyData(arg0: $WritableRaster): $WritableRaster;
        getWidth(): number;
        getHeight(): number;
        getSampleModel(): $SampleModel;
        getMinX(): number;
        getMinY(): number;
        getProperty(arg0: string): $Object;
        get colorModel(): $ColorModel;
        get sources(): $Vector<$RenderedImage>;
        get propertyNames(): string[];
        get numXTiles(): number;
        get numYTiles(): number;
        get minTileX(): number;
        get minTileY(): number;
        get tileWidth(): number;
        get tileHeight(): number;
        get tileGridXOffset(): number;
        get tileGridYOffset(): number;
        get width(): number;
        get height(): number;
        get sampleModel(): $SampleModel;
        get minX(): number;
        get minY(): number;
    }
    export class $TileObserver {
    }
    export interface $TileObserver {
        tileUpdate(arg0: $WritableRenderedImage, arg1: number, arg2: number, arg3: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $TileObserver}.
     */
    export type $TileObserver_ = ((arg0: $WritableRenderedImage, arg1: number, arg2: number, arg3: boolean) => void);
    export class $BufferedImageOp {
    }
    export interface $BufferedImageOp {
        getBounds2D(arg0: $BufferedImage): $Rectangle2D;
        createCompatibleDestImage(arg0: $BufferedImage, arg1: $ColorModel): $BufferedImage;
        getPoint2D(arg0: $Point2D, arg1: $Point2D): $Point2D;
        getRenderingHints(): $RenderingHints;
        filter(arg0: $BufferedImage, arg1: $BufferedImage): $BufferedImage;
        get renderingHints(): $RenderingHints;
    }
    export class $SampleModel {
        setPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): void;
        setPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): void;
        setPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): void;
        getSampleSize(): number[];
        getSampleSize(arg0: number): number;
        getSample(arg0: number, arg1: number, arg2: number, arg3: $DataBuffer): number;
        getNumDataElements(): number;
        getTransferType(): number;
        getSampleFloat(arg0: number, arg1: number, arg2: number, arg3: $DataBuffer): number;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $DataBuffer): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $DataBuffer): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $DataBuffer): void;
        getPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): number[];
        getPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): number[];
        getPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): number[];
        createDataBuffer(): $DataBuffer;
        createSubsetSampleModel(arg0: number[]): $SampleModel;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): void;
        getSampleDouble(arg0: number, arg1: number, arg2: number, arg3: $DataBuffer): number;
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): number[];
        getWidth(): number;
        getHeight(): number;
        getNumBands(): number;
        getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object, arg5: $DataBuffer): $Object;
        getDataElements(arg0: number, arg1: number, arg2: $Object, arg3: $DataBuffer): $Object;
        getDataType(): number;
        setDataElements(arg0: number, arg1: number, arg2: $Object, arg3: $DataBuffer): void;
        setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object, arg5: $DataBuffer): void;
        createCompatibleSampleModel(arg0: number, arg1: number): $SampleModel;
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): number[];
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): void;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get numDataElements(): number;
        get transferType(): number;
        get width(): number;
        get height(): number;
        get numBands(): number;
        get dataType(): number;
    }
    export class $WritableRaster extends $Raster {
        setPixel(arg0: number, arg1: number, arg2: number[]): void;
        setPixel(arg0: number, arg1: number, arg2: number[]): void;
        setPixel(arg0: number, arg1: number, arg2: number[]): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setRect(arg0: $Raster): void;
        setRect(arg0: number, arg1: number, arg2: $Raster): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
        getWritableParent(): $WritableRaster;
        createWritableTranslatedChild(arg0: number, arg1: number): $WritableRaster;
        setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object): void;
        setDataElements(arg0: number, arg1: number, arg2: $Object): void;
        setDataElements(arg0: number, arg1: number, arg2: $Raster): void;
        createWritableChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): $WritableRaster;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        get writableParent(): $WritableRaster;
    }
}
