import { $EntityRenderDispatcherAccessor as $EntityRenderDispatcherAccessor$1 } from "@package/dev/tr7zw/notenoughanimations/mixins";
import { $ItemRendererAccessor as $ItemRendererAccessor$2 } from "@package/dev/emi/emi/mixin/accessor";
import { $ItemInHandRenderer, $BlockEntityWithoutLevelRenderer, $MultiBufferSource_, $RenderType, $ItemModelShaper } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntityRendererAccessor } from "@package/net/fabricmc/fabric/mixin/client/rendering";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $LightningBolt, $EntityType_, $Display, $Display$BlockDisplay, $Display$ItemDisplay, $Entity, $GlowSquid, $Display$ItemDisplay$ItemRenderState_, $EntityType, $Display$BlockDisplay$BlockRenderState, $ExperienceOrb, $Display$ItemDisplay$ItemRenderState, $LivingEntity, $Mob, $Display$BlockDisplay$BlockRenderState_, $Display$TextDisplay$TextRenderState, $Display$TextDisplay, $OminousItemSpawner, $Display$TextDisplay$TextRenderState_ } from "@package/net/minecraft/world/entity";
import { $AbstractWindCharge } from "@package/net/minecraft/world/entity/projectile/windcharge";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManagerReloadListener, $ResourceManager, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Minecraft, $Camera, $Options } from "@package/net/minecraft/client";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $AccessorLivingEntityRenderer } from "@package/com/railwayteam/railways/mixin/client";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $Parrot$Variant_, $Turtle, $Salmon, $Panda, $Fox, $SnowGolem, $Wolf, $Cod, $Chicken, $Pufferfish, $IronGolem, $Ocelot, $Cat, $Squid, $PolarBear, $Sheep, $Cow, $Pig, $Bee, $TropicalFish, $Dolphin, $MushroomCow, $Rabbit, $Parrot } from "@package/net/minecraft/world/entity/animal";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ItemRendererAccessor as $ItemRendererAccessor$1 } from "@package/net/caffeinemc/mods/sodium/mixin/features/render/frapi";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Bat } from "@package/net/minecraft/world/entity/ambient";
import { $EntityRendererAccessor } from "@package/com/blackgear/vanillabackport/core/mixin/access";
import { $Axolotl } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $EntityRendererExtension } from "@package/com/supermartijn642/fusion/extensions";
import { $DyeColor_, $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $FireworkRocketEntity, $ShulkerBullet, $Arrow, $AbstractArrow, $FishingHook, $WitherSkull, $DragonFireball, $ThrownTrident, $EvokerFangs, $SpectralArrow, $LlamaSpit } from "@package/net/minecraft/world/entity/projectile";
import { $PlayerSkin$Model } from "@package/net/minecraft/client/resources";
import { $Allay } from "@package/net/minecraft/world/entity/animal/allay";
import { $Stray, $Silverfish, $Drowned, $WitherSkeleton, $Zoglin, $Creeper, $Shulker, $CaveSpider, $Endermite, $Spider, $Blaze, $Illusioner, $EnderMan, $AbstractSkeleton, $MagmaCube, $SpellcasterIllager, $Witch, $Bogged, $Vindicator, $Zombie, $ZombieVillager, $Pillager, $Strider, $Guardian, $Ravager, $Phantom, $Vex, $AbstractIllager, $Ghast, $Slime, $Giant } from "@package/net/minecraft/world/entity/monster";
import { $Vec3, $AABB } from "@package/net/minecraft/world/phys";
import { $AbstractMinecart, $MinecartTNT, $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $Quaternionf } from "@package/org/joml";
import { $EndCrystal, $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $BakedModel, $ModelResourceLocation, $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $EntityRenderDispatcherAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $ItemFrame, $Painting, $LeashFenceKnotEntity, $ArmorStand } from "@package/net/minecraft/world/entity/decoration";
import { $Map, $List, $List_, $Collection } from "@package/java/util";
import { $AbstractHorse, $Llama, $Horse, $AbstractChestedHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $PiglinModel, $ZombieModel, $RavagerModel, $SkeletonModel, $SalmonModel, $GhastModel, $CodModel, $VillagerModel, $TurtleModel, $IronGolemModel, $BlazeModel, $VexModel, $LlamaModel, $TadpoleModel, $SnifferModel, $CatModel, $PolarBearModel, $EndermiteModel, $ZombieVillagerModel, $ArmorStandArmorModel, $CowModel, $FoxModel, $SheepModel, $SnowGolemModel, $DolphinModel, $EntityModel, $ChestedHorseModel, $OcelotModel, $ArmadilloModel, $WolfModel, $ColorableHierarchicalModel, $SquidModel, $ParrotModel, $ChickenModel, $EndermanModel, $DrownedModel, $BatModel, $RabbitModel, $WitherBossModel, $WardenModel, $IllagerModel, $PandaModel, $SlimeModel, $GoatModel, $SpiderModel, $HorseModel, $StriderModel, $FrogModel, $AxolotlModel, $WitchModel, $BeeModel, $CamelModel, $SilverfishModel, $CreeperModel, $LavaSlimeModel, $AllayModel, $ListModel, $PhantomModel, $HumanoidModel, $PigModel, $HoglinModel, $ShulkerModel, $BreezeModel, $GuardianModel } from "@package/net/minecraft/client/model";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $EntityRendererInter } from "@package/dev/tr7zw/entityculling/access";
import { $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $Object } from "@package/java/lang";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $EntityModelSet, $ModelPart, $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $PrimedTnt, $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $Villager, $WanderingTrader } from "@package/net/minecraft/world/entity/npc";
import { $ItemRendererAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $Camel } from "@package/net/minecraft/world/entity/animal/camel";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $Frog, $Tadpole } from "@package/net/minecraft/world/entity/animal/frog";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack$Pose, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Font } from "@package/net/minecraft/client/gui";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";
export * as layers from "@package/net/minecraft/client/renderer/entity/layers";
export * as player from "@package/net/minecraft/client/renderer/entity/player";

declare module "@package/net/minecraft/client/renderer/entity" {
    export class $EnderDragonRenderer$DragonModel extends $EntityModel<$EnderDragon> {
        handler$cpd002$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        prepareMobModel(arg0: $EnderDragon, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: $EnderDragon, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        entity: $EnderDragon;
        constructor(arg0: $ModelPart);
    }
    export class $NoopRenderer<T extends $Entity> extends $EntityRenderer<T> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $UndeadHorseRenderer extends $AbstractHorseRenderer<$AbstractHorse, $HorseModel<$AbstractHorse>> {
        getTextureLocation(arg0: $AbstractHorse): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$AbstractHorse, $HorseModel<$AbstractHorse>>>;
        shadowStrength: number;
        model: $HorseModel<$AbstractHorse>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation);
    }
    export class $WolfRenderer extends $MobRenderer<$Wolf, $WolfModel<$Wolf>> {
        getBob(arg0: $Wolf, arg1: number): number;
        getTextureLocation(arg0: $Wolf): $ResourceLocation;
        render(arg0: $Wolf, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Wolf, $WolfModel<$Wolf>>>;
        shadowStrength: number;
        model: $WolfModel<$Wolf>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $VindicatorRenderer extends $IllagerRenderer<$Vindicator> {
        getTextureLocation(arg0: $Vindicator): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Vindicator, $IllagerModel<$Vindicator>>>;
        shadowStrength: number;
        model: $IllagerModel<$Vindicator>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $VillagerRenderer extends $MobRenderer<$Villager, $VillagerModel<$Villager>> {
        getTextureLocation(arg0: $Villager): $ResourceLocation;
        getShadowRadius(arg0: $Villager): number;
        scale(arg0: $Villager, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Villager, $VillagerModel<$Villager>>>;
        shadowStrength: number;
        model: $VillagerModel<$Villager>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ThrownTridentRenderer extends $EntityRenderer<$ThrownTrident> {
        getTextureLocation(arg0: $ThrownTrident): $ResourceLocation;
        render(arg0: $ThrownTrident, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        static TRIDENT_LOCATION: $ResourceLocation;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $TntRenderer extends $EntityRenderer<$PrimedTnt> {
        getTextureLocation(arg0: $PrimedTnt): $ResourceLocation;
        render(arg0: $PrimedTnt, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EntityRendererProvider$Context {
        getBlockRenderDispatcher(): $BlockRenderDispatcher;
        getModelSet(): $EntityModelSet;
        bakeLayer(arg0: $ModelLayerLocation): $ModelPart;
        getFont(): $Font;
        getItemRenderer(): $ItemRenderer;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        getItemInHandRenderer(): $ItemInHandRenderer;
        getModelManager(): $ModelManager;
        getResourceManager(): $ResourceManager;
        constructor(arg0: $EntityRenderDispatcher, arg1: $ItemRenderer, arg2: $BlockRenderDispatcher, arg3: $ItemInHandRenderer, arg4: $ResourceManager, arg5: $EntityModelSet, arg6: $Font);
        get blockRenderDispatcher(): $BlockRenderDispatcher;
        get modelSet(): $EntityModelSet;
        get font(): $Font;
        get itemRenderer(): $ItemRenderer;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get itemInHandRenderer(): $ItemInHandRenderer;
        get modelManager(): $ModelManager;
        get resourceManager(): $ResourceManager;
    }
    export class $TropicalFishRenderer extends $MobRenderer<$TropicalFish, $ColorableHierarchicalModel<$TropicalFish>> {
        setupRotations(arg0: $TropicalFish, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTextureLocation(arg0: $TropicalFish): $ResourceLocation;
        render(arg0: $TropicalFish, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$TropicalFish, $ColorableHierarchicalModel<$TropicalFish>>>;
        shadowStrength: number;
        model: $ColorableHierarchicalModel<$TropicalFish>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $PigRenderer extends $MobRenderer<$Pig, $PigModel<$Pig>> {
        getTextureLocation(arg0: $Pig): $ResourceLocation;
        render(entity: $Pig, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Pig, $PigModel<$Pig>>>;
        shadowStrength: number;
        model: $PigModel<$Pig>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EntityRenderer<T extends $Entity> implements $EntityRendererAccessor, $EntityRendererExtension, $EntityRendererInter<any> {
        getTextureLocation(arg0: $Object): $ResourceLocation;
        renderLeash<E extends $Entity>(arg0: $Object, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: E): void;
        renderNameTag(arg0: $Object, arg1: $Component_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getBlockLightLevel(arg0: $Object, arg1: $BlockPos_): number;
        getSkyLightLevel(arg0: $Object, arg1: $BlockPos_): number;
        modifyReturnValue$fln000$sable$getPackedLightCoords(arg0: number, arg1: $Entity, arg2: number): number;
        getFusionModelParts(): $List<any>;
        setFusionModelParts(parts: $List_<any>): void;
        entityCullingIgnoresCulling(entity: $Entity): boolean;
        entityCullingGetCullingBox(entity: $Entity): $AABB;
        getShadowRadius(arg0: $Object): number;
        shadowShouldShowName(entity: $Entity): boolean;
        getRenderOffset(arg0: $Object, arg1: number): $Vec3;
        shadowRenderNameTag(entity: $Entity, component: $Component_, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, light: number, delta: number): void;
        getPackedLightCoords(arg0: $Object, arg1: number): number;
        render(arg0: $Object, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        getFont(): $Font;
        shouldShowName(arg0: $Object): boolean;
        shouldRender(arg0: $Object, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        callGetBlockLightLevel<T extends $Entity>(arg0: T, arg1: $BlockPos_): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
        get font(): $Font;
    }
    export class $PaintingRenderer extends $EntityRenderer<$Painting> {
        handler$zbm000$sodium_extra$render(arg0: $Painting, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: $CallbackInfo): void;
        getTextureLocation(arg0: $Painting): $ResourceLocation;
        render(arg0: $Painting, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SquidRenderer<T extends $Squid> extends $MobRenderer<T, $SquidModel<T>> {
        getBob(arg0: T, arg1: number): number;
        setupRotations(arg0: T, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTextureLocation(arg0: T): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<T, $SquidModel<T>>>;
        shadowStrength: number;
        model: $SquidModel<T>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $SquidModel<T>);
    }
    export class $OminousItemSpawnerRenderer extends $EntityRenderer<$OminousItemSpawner> {
        getTextureLocation(arg0: $OminousItemSpawner): $ResourceLocation;
        render(arg0: $OminousItemSpawner, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $PolarBearRenderer extends $MobRenderer<$PolarBear, $PolarBearModel<$PolarBear>> {
        getTextureLocation(arg0: $PolarBear): $ResourceLocation;
        scale(arg0: $PolarBear, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$PolarBear, $PolarBearModel<$PolarBear>>>;
        shadowStrength: number;
        model: $PolarBearModel<$PolarBear>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ArmorStandRenderer extends $LivingEntityRenderer<$ArmorStand, $ArmorStandArmorModel> {
        setupRotations(arg0: $ArmorStand, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTextureLocation(arg0: $ArmorStand): $ResourceLocation;
        getRenderType(arg0: $ArmorStand, arg1: boolean, arg2: boolean, arg3: boolean): $RenderType;
        shouldShowName(arg0: $ArmorStand): boolean;
        static DEFAULT_SKIN_LOCATION: $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$ArmorStand, $ArmorStandArmorModel>>;
        shadowStrength: number;
        model: $ArmorStandArmorModel;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ZombieRenderer extends $AbstractZombieRenderer<$Zombie, $ZombieModel<$Zombie>> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Zombie, $ZombieModel<$Zombie>>>;
        shadowStrength: number;
        model: $ZombieModel<$Zombie>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation, arg2: $ModelLayerLocation, arg3: $ModelLayerLocation);
    }
    export class $IllusionerRenderer extends $IllagerRenderer<$Illusioner> {
        isBodyVisible(arg0: $Illusioner): boolean;
        getTextureLocation(arg0: $Illusioner): $ResourceLocation;
        render(arg0: $Illusioner, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Illusioner, $IllagerModel<$Illusioner>>>;
        shadowStrength: number;
        model: $IllagerModel<$Illusioner>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $RabbitRenderer extends $MobRenderer<$Rabbit, $RabbitModel<$Rabbit>> {
        getTextureLocation(arg0: $Rabbit): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Rabbit, $RabbitModel<$Rabbit>>>;
        shadowStrength: number;
        model: $RabbitModel<$Rabbit>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $CowRenderer extends $MobRenderer<$Cow, $CowModel<$Cow>> {
        getTextureLocation(arg0: $Cow): $ResourceLocation;
        render(entity: $Cow, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Cow, $CowModel<$Cow>>>;
        shadowStrength: number;
        model: $CowModel<$Cow>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $DolphinRenderer extends $MobRenderer<$Dolphin, $DolphinModel<$Dolphin>> {
        getTextureLocation(arg0: $Dolphin): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Dolphin, $DolphinModel<$Dolphin>>>;
        shadowStrength: number;
        model: $DolphinModel<$Dolphin>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $WindChargeRenderer extends $EntityRenderer<$AbstractWindCharge> {
        getTextureLocation(arg0: $AbstractWindCharge): $ResourceLocation;
        xOffset(arg0: number): number;
        render(arg0: $AbstractWindCharge, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SheepRenderer extends $MobRenderer<$Sheep, $SheepModel<$Sheep>> {
        getTextureLocation(arg0: $Sheep): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Sheep, $SheepModel<$Sheep>>>;
        shadowStrength: number;
        model: $SheepModel<$Sheep>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $GhastRenderer extends $MobRenderer<$Ghast, $GhastModel<$Ghast>> {
        getTextureLocation(arg0: $Ghast): $ResourceLocation;
        scale(arg0: $Ghast, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Ghast, $GhastModel<$Ghast>>>;
        shadowStrength: number;
        model: $GhastModel<$Ghast>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ShulkerBulletRenderer extends $EntityRenderer<$ShulkerBullet> {
        getTextureLocation(arg0: $ShulkerBullet): $ResourceLocation;
        getBlockLightLevel(arg0: $ShulkerBullet, arg1: $BlockPos_): number;
        render(arg0: $ShulkerBullet, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $LightningBoltRenderer extends $EntityRenderer<$LightningBolt> {
        getTextureLocation(arg0: $LightningBolt): $ResourceLocation;
        render(arg0: $LightningBolt, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ThrownItemRenderer<T extends $Entity> extends $EntityRenderer<T> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
        constructor(arg0: $EntityRendererProvider$Context, arg1: number, arg2: boolean);
    }
    export class $ChestedHorseRenderer<T extends $AbstractChestedHorse> extends $AbstractHorseRenderer<T, $ChestedHorseModel<T>> {
        getTextureLocation(arg0: T): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<T, $ChestedHorseModel<T>>>;
        shadowStrength: number;
        model: $ChestedHorseModel<T>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: number, arg2: $ModelLayerLocation);
    }
    export class $LlamaRenderer extends $MobRenderer<$Llama, $LlamaModel<$Llama>> {
        getTextureLocation(arg0: $Llama): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Llama, $LlamaModel<$Llama>>>;
        shadowStrength: number;
        model: $LlamaModel<$Llama>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation);
    }
    export class $ParrotRenderer extends $MobRenderer<$Parrot, $ParrotModel> {
        getBob(arg0: $Parrot, arg1: number): number;
        static getVariantTexture(arg0: $Parrot$Variant_): $ResourceLocation;
        getTextureLocation(arg0: $Parrot): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Parrot, $ParrotModel>>;
        shadowStrength: number;
        model: $ParrotModel;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SlimeRenderer extends $MobRenderer<$Slime, $SlimeModel<$Slime>> {
        getTextureLocation(arg0: $Slime): $ResourceLocation;
        scale(arg0: $Slime, arg1: $PoseStack, arg2: number): void;
        render(arg0: $Slime, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Slime, $SlimeModel<$Slime>>>;
        shadowStrength: number;
        model: $SlimeModel<$Slime>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $GlowSquidRenderer extends $SquidRenderer<$GlowSquid> {
        getTextureLocation(arg0: $GlowSquid): $ResourceLocation;
        getBlockLightLevel(arg0: $GlowSquid, arg1: $BlockPos_): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$GlowSquid, $SquidModel<$GlowSquid>>>;
        shadowStrength: number;
        model: $SquidModel<$GlowSquid>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $SquidModel<$GlowSquid>);
    }
    export class $StrayRenderer extends $SkeletonRenderer<$Stray> {
        getTextureLocation(arg0: $Stray): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Stray, $SkeletonModel<$Stray>>>;
        shadowStrength: number;
        model: $SkeletonModel<$Stray>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $PiglinRenderer extends $HumanoidMobRenderer<$Mob, $PiglinModel<$Mob>> {
        getTextureLocation(arg0: $Mob): $ResourceLocation;
        isShaking(arg0: $Mob): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Mob, $PiglinModel<$Mob>>>;
        shadowStrength: number;
        model: $PiglinModel<$Mob>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation, arg2: $ModelLayerLocation, arg3: $ModelLayerLocation, arg4: boolean);
    }
    export class $TippableArrowRenderer extends $ArrowRenderer<$Arrow> {
        getTextureLocation(arg0: $Arrow): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        static TIPPED_ARROW_LOCATION: $ResourceLocation;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NORMAL_ARROW_LOCATION: $ResourceLocation;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $HoglinRenderer extends $MobRenderer<$Hoglin, $HoglinModel<$Hoglin>> {
        getTextureLocation(arg0: $Hoglin): $ResourceLocation;
        isShaking(arg0: $Hoglin): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Hoglin, $HoglinModel<$Hoglin>>>;
        shadowStrength: number;
        model: $HoglinModel<$Hoglin>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $CreeperRenderer extends $MobRenderer<$Creeper, $CreeperModel<$Creeper>> {
        getWhiteOverlayProgress(arg0: $Creeper, arg1: number): number;
        getTextureLocation(arg0: $Creeper): $ResourceLocation;
        scale(arg0: $Creeper, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Creeper, $CreeperModel<$Creeper>>>;
        shadowStrength: number;
        model: $CreeperModel<$Creeper>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $PufferfishRenderer extends $MobRenderer<$Pufferfish, $EntityModel<$Pufferfish>> {
        setupRotations(arg0: $Pufferfish, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTextureLocation(arg0: $Pufferfish): $ResourceLocation;
        render(arg0: $Pufferfish, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Pufferfish, $EntityModel<$Pufferfish>>>;
        shadowStrength: number;
        model: $EntityModel<$Pufferfish>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $PandaRenderer extends $MobRenderer<$Panda, $PandaModel<$Panda>> {
        setupRotations(arg0: $Panda, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTextureLocation(arg0: $Panda): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Panda, $PandaModel<$Panda>>>;
        shadowStrength: number;
        model: $PandaModel<$Panda>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $WitchRenderer extends $MobRenderer<$Witch, $WitchModel<$Witch>> {
        getTextureLocation(arg0: $Witch): $ResourceLocation;
        scale(arg0: $Witch, arg1: $PoseStack, arg2: number): void;
        render(arg0: $Witch, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Witch, $WitchModel<$Witch>>>;
        shadowStrength: number;
        model: $WitchModel<$Witch>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $AbstractZombieRenderer<T extends $Zombie, M extends $ZombieModel<T>> extends $HumanoidMobRenderer<T, M> {
        getTextureLocation(arg0: $Zombie): $ResourceLocation;
        isShaking(arg0: T): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<T, M>>;
        shadowStrength: number;
        model: M;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: M, arg2: M, arg3: M);
    }
    export class $EntityRendererProvider<T extends $Entity> {
    }
    export interface $EntityRendererProvider<T extends $Entity> {
        create(arg0: $EntityRendererProvider$Context): $EntityRenderer<T>;
    }
    /**
     * Values that may be interpreted as {@link $EntityRendererProvider}.
     */
    export type $EntityRendererProvider_<T> = ((arg0: $EntityRendererProvider$Context) => $EntityRenderer<T>);
    export class $PhantomRenderer extends $MobRenderer<$Phantom, $PhantomModel<$Phantom>> {
        setupRotations(arg0: $Phantom, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTextureLocation(arg0: $Phantom): $ResourceLocation;
        scale(arg0: $Phantom, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Phantom, $PhantomModel<$Phantom>>>;
        shadowStrength: number;
        model: $PhantomModel<$Phantom>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SalmonRenderer extends $MobRenderer<$Salmon, $SalmonModel<$Salmon>> {
        setupRotations(arg0: $Salmon, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTextureLocation(arg0: $Salmon): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Salmon, $SalmonModel<$Salmon>>>;
        shadowStrength: number;
        model: $SalmonModel<$Salmon>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EvokerFangsRenderer extends $EntityRenderer<$EvokerFangs> {
        getTextureLocation(arg0: $EvokerFangs): $ResourceLocation;
        render(arg0: $EvokerFangs, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $DragonFireballRenderer extends $EntityRenderer<$DragonFireball> {
        getTextureLocation(arg0: $DragonFireball): $ResourceLocation;
        getBlockLightLevel(arg0: $DragonFireball, arg1: $BlockPos_): number;
        render(arg0: $DragonFireball, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EndermanRenderer extends $MobRenderer<$EnderMan, $EndermanModel<$EnderMan>> {
        getTextureLocation(arg0: $EnderMan): $ResourceLocation;
        getRenderOffset(arg0: $EnderMan, arg1: number): $Vec3;
        render(arg0: $EnderMan, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$EnderMan, $EndermanModel<$EnderMan>>>;
        shadowStrength: number;
        model: $EndermanModel<$EnderMan>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EntityRenderDispatcher implements $ResourceManagerReloadListener, $EntityRenderDispatcherAccessor$1, $EntityRenderDispatcherAccessor {
        cameraOrientation(): $Quaternionf;
        onResourceManagerReload(arg0: $ResourceManager): void;
        setLevel(arg0: $Level_): void;
        getSkinMap(): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        prepare(arg0: $Level_, arg1: $Camera, arg2: $Entity): void;
        shouldRenderHitBoxes(): boolean;
        getRenderer<T extends $Entity>(arg0: T): $EntityRenderer<T>;
        getPackedLightCoords<E extends $Entity>(arg0: E, arg1: number): number;
        render<E extends $Entity>(arg0: E, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $PoseStack, arg7: $MultiBufferSource_, arg8: number): void;
        getItemInHandRenderer(): $ItemInHandRenderer;
        distanceToSqr(arg0: number, arg1: number, arg2: number): number;
        distanceToSqr(arg0: $Entity): number;
        shouldRender<E extends $Entity>(arg0: E, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        overrideCameraOrientation(arg0: $Quaternionf): void;
        setRenderShadow(arg0: boolean): void;
        setRenderHitBoxes(arg0: boolean): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        create$getRenderers(): $Map<$EntityType<never>, $EntityRenderer<never>>;
        crosshairPickEntity: $Entity;
        renderers: $Map<$EntityType<never>, $EntityRenderer<never>>;
        options: $Options;
        textureManager: $TextureManager;
        camera: $Camera;
        constructor(arg0: $Minecraft, arg1: $TextureManager, arg2: $ItemRenderer, arg3: $BlockRenderDispatcher, arg4: $Font, arg5: $Options, arg6: $EntityModelSet);
        set level(value: $Level_);
        get skinMap(): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        get itemInHandRenderer(): $ItemInHandRenderer;
        set renderShadow(value: boolean);
        set renderHitBoxes(value: boolean);
        get name(): string;
    }
    export class $MagmaCubeRenderer extends $MobRenderer<$MagmaCube, $LavaSlimeModel<$MagmaCube>> {
        getTextureLocation(arg0: $MagmaCube): $ResourceLocation;
        getBlockLightLevel(arg0: $MagmaCube, arg1: $BlockPos_): number;
        scale(arg0: $MagmaCube, arg1: $PoseStack, arg2: number): void;
        render(arg0: $MagmaCube, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$MagmaCube, $LavaSlimeModel<$MagmaCube>>>;
        shadowStrength: number;
        model: $LavaSlimeModel<$MagmaCube>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $TurtleRenderer extends $MobRenderer<$Turtle, $TurtleModel<$Turtle>> {
        getTextureLocation(arg0: $Turtle): $ResourceLocation;
        getShadowRadius(arg0: $Turtle): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Turtle, $TurtleModel<$Turtle>>>;
        shadowStrength: number;
        model: $TurtleModel<$Turtle>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $PillagerRenderer extends $IllagerRenderer<$Pillager> {
        getTextureLocation(arg0: $Pillager): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Pillager, $IllagerModel<$Pillager>>>;
        shadowStrength: number;
        model: $IllagerModel<$Pillager>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer$TextDisplayRenderer extends $DisplayRenderer<$Display$TextDisplay, $Display$TextDisplay$TextRenderState> {
        getSubState(arg0: $Display$TextDisplay): $Display$TextDisplay$TextRenderState;
        renderInner(arg0: $Display$TextDisplay, arg1: $Display$TextDisplay$TextRenderState_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $FrogRenderer extends $MobRenderer<$Frog, $FrogModel<$Frog>> {
        getTextureLocation(arg0: $Frog): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Frog, $FrogModel<$Frog>>>;
        shadowStrength: number;
        model: $FrogModel<$Frog>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ZoglinRenderer extends $MobRenderer<$Zoglin, $HoglinModel<$Zoglin>> {
        getTextureLocation(arg0: $Zoglin): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Zoglin, $HoglinModel<$Zoglin>>>;
        shadowStrength: number;
        model: $HoglinModel<$Zoglin>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer$ItemDisplayRenderer extends $DisplayRenderer<$Display$ItemDisplay, $Display$ItemDisplay$ItemRenderState> {
        getSubState(arg0: $Display$ItemDisplay): $Display$ItemDisplay$ItemRenderState;
        renderInner(arg0: $Display$ItemDisplay, arg1: $Display$ItemDisplay$ItemRenderState_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $FoxRenderer extends $MobRenderer<$Fox, $FoxModel<$Fox>> {
        setupRotations(arg0: $Fox, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTextureLocation(arg0: $Fox): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Fox, $FoxModel<$Fox>>>;
        shadowStrength: number;
        model: $FoxModel<$Fox>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ZombieVillagerRenderer extends $HumanoidMobRenderer<$ZombieVillager, $ZombieVillagerModel<$ZombieVillager>> {
        getTextureLocation(arg0: $ZombieVillager): $ResourceLocation;
        isShaking(arg0: $ZombieVillager): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$ZombieVillager, $ZombieVillagerModel<$ZombieVillager>>>;
        shadowStrength: number;
        model: $ZombieVillagerModel<$ZombieVillager>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $VexRenderer extends $MobRenderer<$Vex, $VexModel> {
        getTextureLocation(arg0: $Vex): $ResourceLocation;
        getBlockLightLevel(arg0: $Vex, arg1: $BlockPos_): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Vex, $VexModel>>;
        shadowStrength: number;
        model: $VexModel;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EndCrystalRenderer extends $EntityRenderer<$EndCrystal> {
        getTextureLocation(arg0: $EndCrystal): $ResourceLocation;
        static createBodyLayer(): $LayerDefinition;
        static getY(arg0: $EndCrystal, arg1: number): number;
        render(arg0: $EndCrystal, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shouldRender(arg0: $EndCrystal, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $AbstractHorseRenderer<T extends $AbstractHorse, M extends $HorseModel<T>> extends $MobRenderer<T, M> {
        scale(arg0: T, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<T, M>>;
        shadowStrength: number;
        model: M;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: M, arg2: number);
    }
    export class $WanderingTraderRenderer extends $MobRenderer<$WanderingTrader, $VillagerModel<$WanderingTrader>> {
        getTextureLocation(arg0: $WanderingTrader): $ResourceLocation;
        scale(arg0: $WanderingTrader, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$WanderingTrader, $VillagerModel<$WanderingTrader>>>;
        shadowStrength: number;
        model: $VillagerModel<$WanderingTrader>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ExperienceOrbRenderer extends $EntityRenderer<$ExperienceOrb> {
        getTextureLocation(arg0: $ExperienceOrb): $ResourceLocation;
        getBlockLightLevel(arg0: $ExperienceOrb, arg1: $BlockPos_): number;
        render(arg0: $ExperienceOrb, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SkeletonRenderer<T extends $AbstractSkeleton> extends $HumanoidMobRenderer<T, $SkeletonModel<T>> {
        getTextureLocation(arg0: T): $ResourceLocation;
        isShaking(arg0: T): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<T, $SkeletonModel<T>>>;
        shadowStrength: number;
        model: $SkeletonModel<T>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation, arg2: $ModelLayerLocation, arg3: $SkeletonModel<T>);
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation, arg2: $ModelLayerLocation, arg3: $ModelLayerLocation);
    }
    export class $GoatRenderer extends $MobRenderer<$Goat, $GoatModel<$Goat>> {
        getTextureLocation(arg0: $Goat): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Goat, $GoatModel<$Goat>>>;
        shadowStrength: number;
        model: $GoatModel<$Goat>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EndermiteRenderer extends $MobRenderer<$Endermite, $EndermiteModel<$Endermite>> {
        getFlipDegrees(arg0: $Endermite): number;
        getTextureLocation(arg0: $Endermite): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Endermite, $EndermiteModel<$Endermite>>>;
        shadowStrength: number;
        model: $EndermiteModel<$Endermite>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $IllagerRenderer<T extends $AbstractIllager> extends $MobRenderer<T, $IllagerModel<T>> {
        scale(arg0: T, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<T, $IllagerModel<T>>>;
        shadowStrength: number;
        model: $IllagerModel<T>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $IllagerModel<T>, arg2: number);
    }
    export class $BeeRenderer extends $MobRenderer<$Bee, $BeeModel<$Bee>> {
        getTextureLocation(arg0: $Bee): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Bee, $BeeModel<$Bee>>>;
        shadowStrength: number;
        model: $BeeModel<$Bee>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $RenderLayerParent<T extends $Entity, M extends $EntityModel<T>> {
    }
    export interface $RenderLayerParent<T extends $Entity, M extends $EntityModel<T>> {
        getTextureLocation(arg0: T): $ResourceLocation;
        getModel(): M;
        get model(): M;
    }
    export class $AllayRenderer extends $MobRenderer<$Allay, $AllayModel> {
        getTextureLocation(arg0: $Allay): $ResourceLocation;
        getBlockLightLevel(arg0: $Allay, arg1: $BlockPos_): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Allay, $AllayModel>>;
        shadowStrength: number;
        model: $AllayModel;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $LeashKnotRenderer extends $EntityRenderer<$LeashFenceKnotEntity> {
        getTextureLocation(arg0: $LeashFenceKnotEntity): $ResourceLocation;
        render(arg0: $LeashFenceKnotEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $AxolotlRenderer extends $MobRenderer<$Axolotl, $AxolotlModel<$Axolotl>> {
        getTextureLocation(arg0: $Axolotl): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Axolotl, $AxolotlModel<$Axolotl>>>;
        shadowStrength: number;
        model: $AxolotlModel<$Axolotl>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SpectralArrowRenderer extends $ArrowRenderer<$SpectralArrow> {
        getTextureLocation(arg0: $SpectralArrow): $ResourceLocation;
        shadowRadius: number;
        static SPECTRAL_ARROW_LOCATION: $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $CatRenderer extends $MobRenderer<$Cat, $CatModel<$Cat>> {
        setupRotations(arg0: $Cat, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTextureLocation(arg0: $Cat): $ResourceLocation;
        scale(arg0: $Cat, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Cat, $CatModel<$Cat>>>;
        shadowStrength: number;
        model: $CatModel<$Cat>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SilverfishRenderer extends $MobRenderer<$Silverfish, $SilverfishModel<$Silverfish>> {
        getFlipDegrees(arg0: $Silverfish): number;
        getTextureLocation(arg0: $Silverfish): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Silverfish, $SilverfishModel<$Silverfish>>>;
        shadowStrength: number;
        model: $SilverfishModel<$Silverfish>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $StriderRenderer extends $MobRenderer<$Strider, $StriderModel<$Strider>> {
        getTextureLocation(arg0: $Strider): $ResourceLocation;
        getShadowRadius(arg0: $Strider): number;
        isShaking(arg0: $Strider): boolean;
        scale(arg0: $Strider, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Strider, $StriderModel<$Strider>>>;
        shadowStrength: number;
        model: $StriderModel<$Strider>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $LivingEntityRenderer<T extends $LivingEntity, M extends $EntityModel<T>> extends $EntityRenderer<T> implements $RenderLayerParent<T, M>, $LivingEntityRendererAccessor<any, any>, $AccessorLivingEntityRenderer<any> {
        getBob(arg0: T, arg1: number): number;
        setupRotations(arg0: T, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        isBodyVisible(arg0: T): boolean;
        getWhiteOverlayProgress(arg0: T, arg1: number): number;
        getFlipDegrees(arg0: T): number;
        static getOverlayCoords(arg0: $LivingEntity, arg1: number): number;
        getShadowRadius(arg0: T): number;
        isShaking(arg0: T): boolean;
        scale(arg0: T, arg1: $PoseStack, arg2: number): void;
        addLayer(arg0: $RenderLayer<T, M>): boolean;
        render(arg0: T, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        getModel(): M;
        getRenderType(arg0: T, arg1: boolean, arg2: boolean, arg3: boolean): $RenderType;
        shouldShowName(arg0: T): boolean;
        getAttackAnim(arg0: T, arg1: number): number;
        static isEntityUpsideDown(arg0: $LivingEntity): boolean;
        callAddFeature(arg0: $RenderLayer<T, M>): boolean;
        callSetupRotations(arg0: T, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, M>>;
        shadowStrength: number;
        model: M;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: M, arg2: number);
    }
    export class $BoatRenderer extends $EntityRenderer<$Boat> {
        /**
         * @deprecated
         */
        getTextureLocation(arg0: $Boat): $ResourceLocation;
        getModelWithLocation(arg0: $Boat): $Pair<$ResourceLocation, $ListModel<$Boat>>;
        render(arg0: $Boat, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: boolean);
    }
    export class $MobRenderer<T extends $Mob, M extends $EntityModel<T>> extends $LivingEntityRenderer<T, M> {
        md4ca6b6$vanillabackport$getShadowRadius$0(arg0: $Entity): number;
        getShadowRadius(arg0: T): number;
        shouldShowName(arg0: T): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<T, M>>;
        shadowStrength: number;
        model: M;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: M, arg2: number);
    }
    export class $BreezeRenderer extends $MobRenderer<$Breeze, $BreezeModel<$Breeze>> {
        getTextureLocation(arg0: $Breeze): $ResourceLocation;
        static enable(arg0: $BreezeModel<$Breeze>, ...arg1: $ModelPart[]): $BreezeModel<$Breeze>;
        render(arg0: $Breeze, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Breeze, $BreezeModel<$Breeze>>>;
        shadowStrength: number;
        model: $BreezeModel<$Breeze>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $RavagerRenderer extends $MobRenderer<$Ravager, $RavagerModel> {
        getTextureLocation(arg0: $Ravager): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Ravager, $RavagerModel>>;
        shadowStrength: number;
        model: $RavagerModel;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $IronGolemRenderer extends $MobRenderer<$IronGolem, $IronGolemModel<$IronGolem>> {
        setupRotations(arg0: $IronGolem, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTextureLocation(arg0: $IronGolem): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$IronGolem, $IronGolemModel<$IronGolem>>>;
        shadowStrength: number;
        model: $IronGolemModel<$IronGolem>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $HuskRenderer extends $ZombieRenderer {
        scale(arg0: $Zombie, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Zombie, $ZombieModel<$Zombie>>>;
        shadowStrength: number;
        model: $ZombieModel<$Zombie>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $GiantMobRenderer extends $MobRenderer<$Giant, $HumanoidModel<$Giant>> {
        getTextureLocation(arg0: $Giant): $ResourceLocation;
        scale(arg0: $Giant, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Giant, $HumanoidModel<$Giant>>>;
        shadowStrength: number;
        model: $HumanoidModel<$Giant>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: number);
    }
    export class $WitherBossRenderer extends $MobRenderer<$WitherBoss, $WitherBossModel<$WitherBoss>> {
        getTextureLocation(arg0: $WitherBoss): $ResourceLocation;
        getBlockLightLevel(arg0: $WitherBoss, arg1: $BlockPos_): number;
        scale(arg0: $WitherBoss, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$WitherBoss, $WitherBossModel<$WitherBoss>>>;
        shadowStrength: number;
        model: $WitherBossModel<$WitherBoss>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $WitherSkullRenderer extends $EntityRenderer<$WitherSkull> {
        static createSkullLayer(): $LayerDefinition;
        getTextureLocation(arg0: $WitherSkull): $ResourceLocation;
        getBlockLightLevel(arg0: $WitherSkull, arg1: $BlockPos_): number;
        render(arg0: $WitherSkull, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ArrowRenderer<T extends $AbstractArrow> extends $EntityRenderer<T> {
        render(arg0: T, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        vertex(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $FishingHookRenderer extends $EntityRenderer<$FishingHook> {
        getTextureLocation(arg0: $FishingHook): $ResourceLocation;
        render(arg0: $FishingHook, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $FallingBlockRenderer extends $EntityRenderer<$FallingBlockEntity> {
        getTextureLocation(arg0: $FallingBlockEntity): $ResourceLocation;
        render(arg0: $FallingBlockEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ElderGuardianRenderer extends $GuardianRenderer {
        scale(arg0: $Guardian, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Guardian, $GuardianModel>>;
        shadowStrength: number;
        static GUARDIAN_ELDER_LOCATION: $ResourceLocation;
        model: $GuardianModel;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $CodRenderer extends $MobRenderer<$Cod, $CodModel<$Cod>> {
        setupRotations(arg0: $Cod, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTextureLocation(arg0: $Cod): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Cod, $CodModel<$Cod>>>;
        shadowStrength: number;
        model: $CodModel<$Cod>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SpiderRenderer<T extends $Spider> extends $MobRenderer<T, $SpiderModel<T>> {
        getFlipDegrees(arg0: T): number;
        getTextureLocation(arg0: T): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<T, $SpiderModel<T>>>;
        shadowStrength: number;
        model: $SpiderModel<T>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation);
    }
    export class $TadpoleRenderer extends $MobRenderer<$Tadpole, $TadpoleModel<$Tadpole>> {
        getTextureLocation(arg0: $Tadpole): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Tadpole, $TadpoleModel<$Tadpole>>>;
        shadowStrength: number;
        model: $TadpoleModel<$Tadpole>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $BlazeRenderer extends $MobRenderer<$Blaze, $BlazeModel<$Blaze>> {
        getTextureLocation(arg0: $Blaze): $ResourceLocation;
        getBlockLightLevel(arg0: $Blaze, arg1: $BlockPos_): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Blaze, $BlazeModel<$Blaze>>>;
        shadowStrength: number;
        model: $BlazeModel<$Blaze>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ItemFrameRenderer<T extends $ItemFrame> extends $EntityRenderer<T> {
        handler$zbk000$sodium_extra$render(arg0: $ItemFrame, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: $CallbackInfo): void;
        handler$zoh000$exposure$onItemFrameRender(entity: $ItemFrame, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, ci: $CallbackInfo): void;
        getTextureLocation(arg0: T): $ResourceLocation;
        renderNameTag(arg0: T, arg1: $Component_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getBlockLightLevel(arg0: T, arg1: $BlockPos_): number;
        getRenderOffset(arg0: T, arg1: number): $Vec3;
        render(arg0: T, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shouldShowName(arg0: T): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static BRIGHT_MAP_LIGHT_ADJUSTMENT: number;
        static GLOW_FRAME_BRIGHTNESS: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer<T extends $Display, S> extends $EntityRenderer<T> {
        getSubState(arg0: T): S;
        renderInner(arg0: T, arg1: S, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getTextureLocation(arg0: T): $ResourceLocation;
        render(arg0: T, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $HorseRenderer extends $AbstractHorseRenderer<$Horse, $HorseModel<$Horse>> {
        getTextureLocation(arg0: $Horse): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Horse, $HorseModel<$Horse>>>;
        shadowStrength: number;
        model: $HorseModel<$Horse>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ShulkerRenderer extends $MobRenderer<$Shulker, $ShulkerModel<$Shulker>> {
        setupRotations(arg0: $Shulker, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static getTextureLocation(arg0: $DyeColor_): $ResourceLocation;
        getTextureLocation(arg0: $Shulker): $ResourceLocation;
        getRenderOffset(arg0: $Shulker, arg1: number): $Vec3;
        shouldRender(arg0: $Shulker, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Shulker, $ShulkerModel<$Shulker>>>;
        shadowStrength: number;
        model: $ShulkerModel<$Shulker>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $WitherSkeletonRenderer extends $SkeletonRenderer<$WitherSkeleton> {
        getTextureLocation(arg0: $WitherSkeleton): $ResourceLocation;
        scale(arg0: $WitherSkeleton, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$WitherSkeleton, $SkeletonModel<$WitherSkeleton>>>;
        shadowStrength: number;
        model: $SkeletonModel<$WitherSkeleton>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $CaveSpiderRenderer extends $SpiderRenderer<$CaveSpider> {
        getTextureLocation(arg0: $CaveSpider): $ResourceLocation;
        scale(arg0: $CaveSpider, arg1: $PoseStack, arg2: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$CaveSpider, $SpiderModel<$CaveSpider>>>;
        shadowStrength: number;
        model: $SpiderModel<$CaveSpider>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $BoggedRenderer extends $SkeletonRenderer<$Bogged> {
        getTextureLocation(arg0: $Bogged): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Bogged, $SkeletonModel<$Bogged>>>;
        shadowStrength: number;
        model: $SkeletonModel<$Bogged>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EnderDragonRenderer extends $EntityRenderer<$EnderDragon> {
        static renderCrystalBeams(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $PoseStack, arg6: $MultiBufferSource_, arg7: number): void;
        getTextureLocation(arg0: $EnderDragon): $ResourceLocation;
        static createBodyLayer(): $LayerDefinition;
        render(arg0: $EnderDragon, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        static CRYSTAL_BEAM_LOCATION: $ResourceLocation;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SnifferRenderer extends $MobRenderer<$Sniffer, $SnifferModel<$Sniffer>> {
        getTextureLocation(arg0: $Sniffer): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Sniffer, $SnifferModel<$Sniffer>>>;
        shadowStrength: number;
        model: $SnifferModel<$Sniffer>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $MinecartRenderer<T extends $AbstractMinecart> extends $EntityRenderer<T> {
        renderMinecartContents(arg0: T, arg1: number, arg2: $BlockState_, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        getTextureLocation(arg0: T): $ResourceLocation;
        render(arg0: T, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        model: $EntityModel<T>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation);
    }
    export class $TntMinecartRenderer extends $MinecartRenderer<$MinecartTNT> {
        static renderWhiteSolidBlock(arg0: $BlockRenderDispatcher, arg1: $BlockState_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: boolean): void;
        renderMinecartContents(arg0: $MinecartTNT, arg1: number, arg2: $BlockState_, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        model: $EntityModel<$MinecartTNT>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $MushroomCowRenderer extends $MobRenderer<$MushroomCow, $CowModel<$MushroomCow>> {
        getTextureLocation(arg0: $MushroomCow): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$MushroomCow, $CowModel<$MushroomCow>>>;
        shadowStrength: number;
        model: $CowModel<$MushroomCow>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ArmadilloRenderer extends $MobRenderer<$Armadillo, $ArmadilloModel> {
        getTextureLocation(arg0: $Armadillo): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Armadillo, $ArmadilloModel>>;
        shadowStrength: number;
        model: $ArmadilloModel;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $HumanoidMobRenderer<T extends $Mob, M extends $HumanoidModel<T>> extends $MobRenderer<T, M> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<T, M>>;
        shadowStrength: number;
        model: M;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: M, arg2: number);
        constructor(arg0: $EntityRendererProvider$Context, arg1: M, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $LlamaSpitRenderer extends $EntityRenderer<$LlamaSpit> {
        getTextureLocation(arg0: $LlamaSpit): $ResourceLocation;
        render(arg0: $LlamaSpit, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $DrownedRenderer extends $AbstractZombieRenderer<$Drowned, $DrownedModel<$Drowned>> {
        setupRotations(arg0: $Drowned, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Drowned, $DrownedModel<$Drowned>>>;
        shadowStrength: number;
        model: $DrownedModel<$Drowned>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EntityRenderers {
        static createEntityRenderers(arg0: $EntityRendererProvider$Context): $Map<$EntityType<never>, $EntityRenderer<never>>;
        static createPlayerRenderers(arg0: $EntityRendererProvider$Context): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        static register<T extends $Entity>(arg0: $EntityType_<T>, arg1: $EntityRendererProvider_<T>): void;
        static validateRegistrations(): boolean;
        constructor();
    }
    export class $OcelotRenderer extends $MobRenderer<$Ocelot, $OcelotModel<$Ocelot>> {
        getTextureLocation(arg0: $Ocelot): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Ocelot, $OcelotModel<$Ocelot>>>;
        shadowStrength: number;
        model: $OcelotModel<$Ocelot>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $FireworkEntityRenderer extends $EntityRenderer<$FireworkRocketEntity> {
        getTextureLocation(arg0: $FireworkRocketEntity): $ResourceLocation;
        render(arg0: $FireworkRocketEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ItemRenderer implements $ResourceManagerReloadListener, $ItemRendererAccessor$1, $ItemRendererAccessor$2, $ItemRendererAccessor, $IdentifiableResourceReloadListener {
        onResourceManagerReload(arg0: $ResourceManager): void;
        renderStatic(arg0: $ItemStack_, arg1: $ItemDisplayContext_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: $Level_, arg7: number): void;
        renderStatic(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $ItemDisplayContext_, arg3: boolean, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: $Level_, arg7: number, arg8: number, arg9: number): void;
        getItemModelShaper(): $ItemModelShaper;
        renderModelLists(arg0: $BakedModel, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer): void;
        localvar$zoj000$exposure$renderItem(model: $BakedModel, stack: $ItemStack_, displayContext: $ItemDisplayContext_, leftHand: boolean, poseStack: $PoseStack, buffer: $MultiBufferSource_, combinedLight: number, combinedOverlay: number): $BakedModel;
        handler$bab000$ldlib2$injectRenderItem(arg0: $ItemStack_, arg1: $ItemDisplayContext_, arg2: boolean, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: $BakedModel, arg8: $CallbackInfo): void;
        static getCompassFoilBuffer(arg0: $MultiBufferSource_, arg1: $RenderType, arg2: $PoseStack$Pose): $VertexConsumer;
        static getFoilBufferDirect(arg0: $MultiBufferSource_, arg1: $RenderType, arg2: boolean, arg3: boolean): $VertexConsumer;
        static getFoilBuffer(arg0: $MultiBufferSource_, arg1: $RenderType, arg2: boolean, arg3: boolean): $VertexConsumer;
        render(arg0: $ItemStack_, arg1: $ItemDisplayContext_, arg2: boolean, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: $BakedModel): void;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        static hasAnimatedTexture$sodium_$md$4ca6b6$1(arg0: $ItemStack_): boolean;
        getModel(arg0: $ItemStack_, arg1: $Level_, arg2: $LivingEntity, arg3: number): $BakedModel;
        static getArmorFoilBuffer(arg0: $MultiBufferSource_, arg1: $RenderType, arg2: boolean): $VertexConsumer;
        renderQuadList(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $List_<$BakedQuad>, arg3: $ItemStack_, arg4: number, arg5: number): void;
        getBlockEntityRenderer(): $BlockEntityWithoutLevelRenderer;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        invokeRenderBakedItemModel(arg0: $BakedModel, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer): void;
        catnip$getTextureManager(): $TextureManager;
        static GUI_SLOT_CENTER_X: number;
        static COMPASS_FOIL_UI_SCALE: number;
        static COMPASS_FOIL_FIRST_PERSON_SCALE: number;
        static COMPASS_FOIL_TEXTURE_SCALE: number;
        static ENCHANTED_GLINT_ENTITY: $ResourceLocation;
        blockEntityRenderer: $BlockEntityWithoutLevelRenderer;
        static GUI_SLOT_CENTER_Y: number;
        static ITEM_COUNT_BLIT_OFFSET: number;
        static ENCHANTED_GLINT_ITEM: $ResourceLocation;
        static SPYGLASS_IN_HAND_MODEL: $ModelResourceLocation;
        textureManager: $TextureManager;
        static TRIDENT_IN_HAND_MODEL: $ModelResourceLocation;
        constructor(arg0: $Minecraft, arg1: $TextureManager, arg2: $ModelManager, arg3: $ItemColors, arg4: $BlockEntityWithoutLevelRenderer);
        get itemModelShaper(): $ItemModelShaper;
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get name(): string;
    }
    export class $WardenRenderer extends $MobRenderer<$Warden, $WardenModel<$Warden>> {
        getTextureLocation(arg0: $Warden): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Warden, $WardenModel<$Warden>>>;
        shadowStrength: number;
        model: $WardenModel<$Warden>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SnowGolemRenderer extends $MobRenderer<$SnowGolem, $SnowGolemModel<$SnowGolem>> {
        getTextureLocation(arg0: $SnowGolem): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$SnowGolem, $SnowGolemModel<$SnowGolem>>>;
        shadowStrength: number;
        model: $SnowGolemModel<$SnowGolem>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ItemEntityRenderer extends $EntityRenderer<$ItemEntity> {
        static getSeedForItemStack(arg0: $ItemStack_): number;
        static renderMultipleFromCount(arg0: $ItemRenderer, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: $ItemStack_, arg5: $BakedModel, arg6: boolean, arg7: $RandomSource): void;
        static renderMultipleFromCount(arg0: $ItemRenderer, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: $ItemStack_, arg5: $RandomSource, arg6: $Level_): void;
        static getRenderedAmount(arg0: number): number;
        getTextureLocation(arg0: $ItemEntity): $ResourceLocation;
        render(arg0: $ItemEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $BatRenderer extends $MobRenderer<$Bat, $BatModel> {
        getTextureLocation(arg0: $Bat): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Bat, $BatModel>>;
        shadowStrength: number;
        model: $BatModel;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer$BlockDisplayRenderer extends $DisplayRenderer<$Display$BlockDisplay, $Display$BlockDisplay$BlockRenderState> {
        getSubState(arg0: $Display$BlockDisplay): $Display$BlockDisplay$BlockRenderState;
        renderInner(arg0: $Display$BlockDisplay, arg1: $Display$BlockDisplay$BlockRenderState_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $CamelRenderer extends $MobRenderer<$Camel, $CamelModel<$Camel>> {
        getTextureLocation(arg0: $Camel): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Camel, $CamelModel<$Camel>>>;
        shadowStrength: number;
        model: $CamelModel<$Camel>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $ModelLayerLocation);
    }
    export class $GuardianRenderer extends $MobRenderer<$Guardian, $GuardianModel> {
        getTextureLocation(arg0: $Guardian): $ResourceLocation;
        render(arg0: $Guardian, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shouldRender(arg0: $Guardian, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Guardian, $GuardianModel>>;
        shadowStrength: number;
        model: $GuardianModel;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
        constructor(arg0: $EntityRendererProvider$Context, arg1: number, arg2: $ModelLayerLocation);
    }
    export class $EvokerRenderer<T extends $SpellcasterIllager> extends $IllagerRenderer<T> {
        getTextureLocation(arg0: T): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<T, $IllagerModel<T>>>;
        shadowStrength: number;
        model: $IllagerModel<T>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ChickenRenderer extends $MobRenderer<$Chicken, $ChickenModel<$Chicken>> {
        getBob(arg0: $Chicken, arg1: number): number;
        getTextureLocation(arg0: $Chicken): $ResourceLocation;
        render(entity: $Chicken, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        defaultModel: $EntityModel<any>;
        entityRenderDispatcher: $EntityRenderDispatcher;
        context: $EntityRendererProvider$Context;
        layers: $List<$RenderLayer<$Chicken, $ChickenModel<$Chicken>>>;
        shadowStrength: number;
        model: $ChickenModel<$Chicken>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
}
