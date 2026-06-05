import { $PlayerModelAccessor } from "@package/dev/tr7zw/notenoughanimations/mixins";
import { $IMixinPlayerModel } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $HumanoidArm, $LivingEntity, $HumanoidArm_, $Mob, $Entity, $AnimationState } from "@package/net/minecraft/world/entity";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $AbstractWindCharge } from "@package/net/minecraft/world/entity/projectile/windcharge";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Mesh } from "@package/dev/tr7zw/skinlayers/api";
import { $AgeableListModelAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $List } from "@package/java/util";
import { $ArmorStand } from "@package/net/minecraft/world/entity/decoration";
import { $Turtle, $Cat, $Panda, $Fox, $PolarBear, $Sheep, $Wolf, $Bee, $Rabbit, $Parrot, $IronGolem } from "@package/net/minecraft/world/entity/animal";
import { $AbstractHorse, $AbstractChestedHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $Function_ } from "@package/java/util/function";
import { $AnimationHolder } from "@package/net/neoforged/neoforge/client/entity/animation/json";
import { $Bat } from "@package/net/minecraft/world/entity/ambient";
import { $Enum, $Iterable } from "@package/java/lang";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $Axolotl } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $PlayerAnimManager } from "@package/com/zigythebird/playeranim/animation";
import { $SkullModelAccessor, $PlayerEntityModelAccessor } from "@package/dev/tr7zw/skinlayers/accessor";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $IMutableModel } from "@package/com/zigythebird/playeranim/accessors";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $ImmutableList, $ImmutableList$Builder } from "@package/com/google/common/collect";
import { $PlayerModelAccessor as $PlayerModelAccessor$1 } from "@package/com/zigythebird/playeranim/mixin";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $Camel } from "@package/net/minecraft/world/entity/animal/camel";
import { $AnimationDefinition_ } from "@package/net/minecraft/client/animation";
import { $MeshDefinition, $LayerDefinition, $CubeDeformation, $PartDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $Frog, $Tadpole } from "@package/net/minecraft/world/entity/animal/frog";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Allay } from "@package/net/minecraft/world/entity/animal/allay";
import { $Bogged, $Zombie, $Monster, $Strider, $Guardian, $Shulker, $Ravager, $Phantom, $Vex, $AbstractIllager, $Slime, $Giant } from "@package/net/minecraft/world/entity/monster";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";
export * as geom from "@package/net/minecraft/client/model/geom";
export * as dragon from "@package/net/minecraft/client/model/dragon";

declare module "@package/net/minecraft/client/model" {
    export class $WaterPatchModel {
    }
    export interface $WaterPatchModel {
        waterPatch(): $ModelPart;
    }
    /**
     * Values that may be interpreted as {@link $WaterPatchModel}.
     */
    export type $WaterPatchModel_ = (() => $ModelPart);
    export class $RabbitModel<T extends $Rabbit> extends $EntityModel<T> {
        handler$dcp004$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $BoatModel extends $ListModel<$Boat> implements $WaterPatchModel {
        createPartsBuilder(arg0: $ModelPart): $ImmutableList$Builder<$ModelPart>;
        static createChildren(arg0: $PartDefinition): void;
        static createBodyModel(): $LayerDefinition;
        waterPatch(): $ModelPart;
        setupAnim(arg0: $Boat, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $EndermiteModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $RaftModel extends $ListModel<$Boat> {
        createPartsBuilder(arg0: $ModelPart): $ImmutableList$Builder<$ModelPart>;
        static createChildren(arg0: $PartDefinition): void;
        static createBodyModel(): $LayerDefinition;
        setupAnim(arg0: $Boat, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        parts(): $ImmutableList<$ModelPart>;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $ShieldModel extends $Model {
        static createLayer(): $LayerDefinition;
        plate(): $ModelPart;
        handle(): $ModelPart;
        constructor(arg0: $ModelPart);
    }
    export class $QuadrupedModel<T extends $Entity> extends $AgeableListModel<T> {
        static createBodyMesh(arg0: number, arg1: $CubeDeformation): $MeshDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(arg0: $ModelPart, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $AbstractZombieModel<T extends $Monster> extends $HumanoidModel<T> {
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        isAggressive(arg0: T): boolean;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $HumanoidArmorModel<T extends $LivingEntity> extends $HumanoidModel<T> {
        static createBodyLayer(arg0: $CubeDeformation): $MeshDefinition;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $OcelotModel<T extends $Entity> extends $AgeableListModel<T> {
        static createBodyMesh(arg0: $CubeDeformation): $MeshDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        static SITTING_STATE: number;
        static BACK_LEG_Z: number;
        body: $ModelPart;
        static BACK_LEG_Y: number;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        tail1: $ModelPart;
        static FRONT_LEG_Y: number;
        tail2: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        state: number;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $ArmedModel {
    }
    export interface $ArmedModel {
        translateToHand(arg0: $HumanoidArm_, arg1: $PoseStack): void;
    }
    /**
     * Values that may be interpreted as {@link $ArmedModel}.
     */
    export type $ArmedModel_ = ((arg0: $HumanoidArm, arg1: $PoseStack) => void);
    export class $PufferfishMidModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $VexModel extends $HierarchicalModel<$Vex> implements $ArmedModel {
        translateToHand(arg0: $HumanoidArm_, arg1: $PoseStack): void;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: $Vex, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $TurtleModel<T extends $Turtle> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $CatModel<T extends $Cat> extends $OcelotModel<T> {
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        static SITTING_STATE: number;
        static BACK_LEG_Z: number;
        body: $ModelPart;
        static BACK_LEG_Y: number;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        tail1: $ModelPart;
        static FRONT_LEG_Y: number;
        tail2: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        state: number;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $HeadedModel {
    }
    export interface $HeadedModel {
        getHead(): $ModelPart;
        get head(): $ModelPart;
    }
    /**
     * Values that may be interpreted as {@link $HeadedModel}.
     */
    export type $HeadedModel_ = (() => $ModelPart);
    export class $AnimationUtils {
        static bobArms(arg0: $ModelPart, arg1: $ModelPart, arg2: number): void;
        static animateZombieArms(arg0: $ModelPart, arg1: $ModelPart, arg2: boolean, arg3: number, arg4: number): void;
        static swingWeaponDown<T extends $Mob>(arg0: $ModelPart, arg1: $ModelPart, arg2: T, arg3: number, arg4: number): void;
        static animateCrossbowCharge(arg0: $ModelPart, arg1: $ModelPart, arg2: $LivingEntity, arg3: boolean): void;
        static animateCrossbowHold(arg0: $ModelPart, arg1: $ModelPart, arg2: $ModelPart, arg3: boolean): void;
        static bobModelPart(arg0: $ModelPart, arg1: number, arg2: number): void;
        constructor();
    }
    export class $BlazeModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $ZombieVillagerModel<T extends $Zombie> extends $HumanoidModel<T> implements $VillagerHeadModel {
        hatVisible(arg0: boolean): void;
        static createArmorLayer(arg0: $CubeDeformation): $LayerDefinition;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $FoxModel<T extends $Fox> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        head: $ModelPart;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $EvokerFangsModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $AgeableHierarchicalModel<E extends $Entity> extends $HierarchicalModel<E> {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: number, arg1: number, arg2: $Function_<$ResourceLocation, $RenderType>);
        constructor(arg0: number, arg1: number);
    }
    export class $HierarchicalModel<E extends $Entity> extends $EntityModel<E> {
        animateWalk(arg0: $AnimationHolder, arg1: number, arg2: number, arg3: number, arg4: number): void;
        animateWalk(arg0: $AnimationDefinition_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        handler$dda005$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        getAnyDescendantWithName(arg0: string): ($ModelPart) | undefined;
        applyStatic(arg0: $AnimationDefinition_): void;
        applyStatic(arg0: $AnimationHolder): void;
        animate(arg0: $AnimationState, arg1: $AnimationHolder, arg2: number, arg3: number): void;
        animate(arg0: $AnimationState, arg1: $AnimationDefinition_, arg2: number): void;
        animate(arg0: $AnimationState, arg1: $AnimationDefinition_, arg2: number, arg3: number): void;
        animate(arg0: $AnimationState, arg1: $AnimationHolder, arg2: number): void;
        static getAnimation(arg0: $ResourceLocation_): $AnimationHolder;
        root(): $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        constructor(arg0: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $AgeableListModel<E extends $Entity> extends $EntityModel<E> implements $AgeableListModelAccessor {
        headParts(): $Iterable<$ModelPart>;
        bodyParts(): $Iterable<$ModelPart>;
        handler$dcf000$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        create$callHeadParts(): $Iterable<$ModelPart>;
        create$callBodyParts(): $Iterable<$ModelPart>;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor(arg0: boolean, arg1: number, arg2: number);
        constructor(arg0: $Function_<$ResourceLocation, $RenderType>, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor();
    }
    export class $ArmorStandModel extends $ArmorStandArmorModel {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(arg0: $ArmorStand, arg1: number, arg2: number, arg3: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $SilverfishModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $HoglinModel<T extends $Mob> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $RavagerModel extends $HierarchicalModel<$Ravager> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(arg0: $Ravager, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: $Ravager, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $SnowGolemModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        getHead(): $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
        get head(): $ModelPart;
    }
    export class $ChestedHorseModel<T extends $AbstractChestedHorse> extends $HorseModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        static HEAD_PARTS: string;
        babyYHeadOffset: number;
        babyBodyScale: number;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $GuardianModel extends $HierarchicalModel<$Guardian> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: $Guardian, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $SheepModel<T extends $Sheep> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $SquidModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $ColorableAgeableListModel<E extends $Entity> extends $AgeableListModel<E> {
        setColor(arg0: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor();
        set color(value: number);
    }
    export class $WardenModel<T extends $Warden> extends $HierarchicalModel<T> {
        getPulsatingSpotsLayerModelParts(): $List<$ModelPart>;
        getTendrilsLayerModelParts(): $List<$ModelPart>;
        getHeartLayerModelParts(): $List<$ModelPart>;
        getBioluminescentLayerModelParts(): $List<$ModelPart>;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        leftRibcage: $ModelPart;
        rightRibcage: $ModelPart;
        attackTime: number;
        leftTendril: $ModelPart;
        young: boolean;
        rightArm: $ModelPart;
        bone: $ModelPart;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        head: $ModelPart;
        rightLeg: $ModelPart;
        leftArm: $ModelPart;
        rightTendril: $ModelPart;
        constructor(arg0: $ModelPart);
        get pulsatingSpotsLayerModelParts(): $List<$ModelPart>;
        get tendrilsLayerModelParts(): $List<$ModelPart>;
        get heartLayerModelParts(): $List<$ModelPart>;
        get bioluminescentLayerModelParts(): $List<$ModelPart>;
    }
    export class $EndermanModel<T extends $LivingEntity> extends $HumanoidModel<T> {
        static createBodyLayer(): $LayerDefinition;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        creepy: boolean;
        carrying: boolean;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $HorseModel<T extends $AbstractHorse> extends $AgeableListModel<T> {
        static createBodyMesh(arg0: $CubeDeformation): $MeshDefinition;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        static HEAD_PARTS: string;
        babyYHeadOffset: number;
        babyBodyScale: number;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $AllayModel extends $HierarchicalModel<$Allay> implements $ArmedModel {
        translateToHand(arg0: $HumanoidArm_, arg1: $PoseStack): void;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: $Allay, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $AxolotlModel<T extends $Axolotl> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static SWIMMING_LEG_XROT: number;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $EntityModel<T extends $Entity> extends $Model {
        copyPropertiesTo(arg0: $EntityModel<T>): void;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $Function_<$ResourceLocation, $RenderType>);
        constructor();
    }
    export class $ArmadilloModel extends $AgeableHierarchicalModel<$Armadillo> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: $Armadillo, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $ParrotModel$State extends $Enum<$ParrotModel$State> {
        static values(): $ParrotModel$State[];
        static valueOf(arg0: string): $ParrotModel$State;
        static PARTY: $ParrotModel$State;
        static SITTING: $ParrotModel$State;
        static FLYING: $ParrotModel$State;
        static ON_SHOULDER: $ParrotModel$State;
        static STANDING: $ParrotModel$State;
    }
    /**
     * Values that may be interpreted as {@link $ParrotModel$State}.
     */
    export type $ParrotModel$State_ = "flying" | "standing" | "sitting" | "party" | "on_shoulder";
    export class $WolfModel<T extends $Wolf> extends $ColorableAgeableListModel<T> {
        static createMeshDefinition(arg0: $CubeDeformation): $MeshDefinition;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $ChestBoatModel extends $BoatModel {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $BatModel extends $HierarchicalModel<$Bat> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: $Bat, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $SlimeModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createOuterBodyLayer(): $LayerDefinition;
        static createInnerBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $SkullModel extends $SkullModelBase implements $SkullModelAccessor {
        injectHatMesh(mesh: $Mesh): void;
        static createMobHeadLayer(): $LayerDefinition;
        static createHeadModel(): $MeshDefinition;
        static createHumanoidHeadLayer(): $LayerDefinition;
        head: $ModelPart;
        constructor(arg0: $ModelPart);
    }
    export class $SheepFurModel<T extends $Sheep> extends $QuadrupedModel<T> {
        static createFurLayer(): $LayerDefinition;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $PiglinModel<T extends $Mob> extends $PlayerModel<T> {
        static addHead(arg0: $CubeDeformation, arg1: $MeshDefinition): void;
        static createMesh(arg0: $CubeDeformation): $MeshDefinition;
        setupAttackAnimation(arg0: T, arg1: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        young: boolean;
        leftSleeve: $ModelPart;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        slim: boolean;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        rightPants: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        jacket: $ModelPart;
        leftPants: $ModelPart;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightSleeve: $ModelPart;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightEar: $ModelPart;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $HumanoidModel$ArmPose extends $Enum<$HumanoidModel$ArmPose> implements $IExtensibleEnum {
        isTwoHanded(): boolean;
        static values(): $HumanoidModel$ArmPose[];
        static valueOf(arg0: string): $HumanoidModel$ArmPose;
        static getExtensionInfo(): $ExtensionInfo;
        applyTransform<T extends $LivingEntity>(arg0: $HumanoidModel<T>, arg1: T, arg2: $HumanoidArm_): void;
        static ITEM: $HumanoidModel$ArmPose;
        static BOW_AND_ARROW: $HumanoidModel$ArmPose;
        static BRUSH: $HumanoidModel$ArmPose;
        static TOOT_HORN: $HumanoidModel$ArmPose;
        static CROSSBOW_HOLD: $HumanoidModel$ArmPose;
        static BLOCK: $HumanoidModel$ArmPose;
        static CROSSBOW_CHARGE: $HumanoidModel$ArmPose;
        static THROW_SPEAR: $HumanoidModel$ArmPose;
        static EMPTY: $HumanoidModel$ArmPose;
        static SPYGLASS: $HumanoidModel$ArmPose;
        get twoHanded(): boolean;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $HumanoidModel$ArmPose}.
     */
    export type $HumanoidModel$ArmPose_ = "empty" | "item" | "block" | "bow_and_arrow" | "throw_spear" | "crossbow_charge" | "crossbow_hold" | "spyglass" | "toot_horn" | "brush";
    export class $GhastModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $Model {
        renderToBuffer(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number): void;
        renderToBuffer(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number): void;
        renderType(arg0: $ResourceLocation_): $RenderType;
        constructor(arg0: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $PufferfishBigModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $BeeModel<T extends $Bee> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $GoatModel<T extends $Goat> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $SalmonModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $VillagerModel<T extends $Entity> extends $HierarchicalModel<T> implements $HeadedModel, $VillagerHeadModel {
        hatVisible(arg0: boolean): void;
        static createBodyModel(): $MeshDefinition;
        getHead(): $ModelPart;
        nose: $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
        get head(): $ModelPart;
    }
    export class $TropicalFishModelA<T extends $Entity> extends $ColorableHierarchicalModel<T> {
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $TropicalFishModelB<T extends $Entity> extends $ColorableHierarchicalModel<T> {
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $PigModel<T extends $Entity> extends $QuadrupedModel<T> {
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $IllagerModel<T extends $AbstractIllager> extends $HierarchicalModel<T> implements $ArmedModel, $HeadedModel {
        translateToHand(arg0: $HumanoidArm_, arg1: $PoseStack): void;
        getHat(): $ModelPart;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getHead(): $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
        get hat(): $ModelPart;
        get head(): $ModelPart;
    }
    export class $SnifferModel<T extends $Sniffer> extends $AgeableHierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $BookModel extends $Model {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: number, arg1: number, arg2: number, arg3: number): void;
        render(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number): void;
        constructor(arg0: $ModelPart);
    }
    export class $DrownedModel<T extends $Zombie> extends $ZombieModel<T> {
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $HumanoidModel<T extends $LivingEntity> extends $AgeableListModel<T> implements $ArmedModel, $HeadedModel, $IMutableModel {
        translateToHand(arg0: $HumanoidArm_, arg1: $PoseStack): void;
        getArm(arg0: $HumanoidArm_): $ModelPart;
        static createMesh(arg0: $CubeDeformation, arg1: number): $MeshDefinition;
        rotlerpRad(arg0: number, arg1: number, arg2: number): number;
        setupAttackAnimation(arg0: T, arg1: number): void;
        handler$zpp000$exposure$onSetupAnim(entity: $LivingEntity, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number, ci: $CallbackInfo): void;
        handler$hic001$moonlight$setupAnim(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        handler$hic000$moonlight$poseRightArm(arg0: $LivingEntity, arg1: $CallbackInfo): void;
        handler$hic000$moonlight$poseLeftArm(arg0: $LivingEntity, arg1: $CallbackInfo): void;
        setAllVisible(arg0: boolean): void;
        playerAnimLib$setAnimation(emoteSupplier: $PlayerAnimManager): void;
        copyPropertiesTo(arg0: $HumanoidModel<T>): void;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getHead(): $ModelPart;
        playerAnimLib$getAnimation(): $PlayerAnimManager;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart, arg1: $Function_<$ResourceLocation, $RenderType>);
        constructor(arg0: $ModelPart);
        set allVisible(value: boolean);
    }
    export class $CowModel<T extends $Entity> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        getHead(): $ModelPart;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $CreeperModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $PlayerModel<T extends $LivingEntity> extends $HumanoidModel<T> implements $PlayerModelAccessor, $PlayerModelAccessor$1, $PlayerEntityModelAccessor, $IMixinPlayerModel {
        handler$ibm000$mymod$setupPivot(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        renderEars(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number): void;
        renderCloak(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number): void;
        handler$dbe000$notenoughanimations$setupAnimHEAD(livingEntity: $LivingEntity, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number, info: $CallbackInfo): void;
        handler$dbe000$notenoughanimations$setupAnim(livingEntity: $LivingEntity, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number, info: $CallbackInfo): void;
        handler$dbe000$notenoughanimations$setupAnimEnd(livingEntity: $LivingEntity, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number, info: $CallbackInfo): void;
        handler$ibm002$mymod$setupAnim(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        getRandomModelPart(arg0: $RandomSource): $ModelPart;
        setIgnored(ignored: boolean): void;
        static createMesh(arg0: $CubeDeformation, arg1: boolean): $MeshDefinition;
        hasThinArms(): boolean;
        getSlim(): boolean;
        getCloak(): $ModelPart;
        getCloakFancyMenu(): $ModelPart;
        scaleHead: boolean;
        young: boolean;
        leftSleeve: $ModelPart;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        slim: boolean;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        rightPants: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        jacket: $ModelPart;
        leftPants: $ModelPart;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightSleeve: $ModelPart;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart, arg1: boolean);
        set ignored(value: boolean);
        get cloak(): $ModelPart;
        get cloakFancyMenu(): $ModelPart;
    }
    export class $StriderModel<T extends $Strider> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: $Strider, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $MinecartModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $SpiderModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createSpiderBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $WitchModel<T extends $Entity> extends $VillagerModel<T> {
        setHoldingItem(arg0: boolean): void;
        getNose(): $ModelPart;
        static createBodyLayer(): $LayerDefinition;
        nose: $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
        set holdingItem(value: boolean);
    }
    export class $ShulkerModel<T extends $Shulker> extends $ListModel<T> {
        getLid(): $ModelPart;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getHead(): $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
        get lid(): $ModelPart;
        get head(): $ModelPart;
    }
    export class $TridentModel extends $Model {
        static createLayer(): $LayerDefinition;
        static TEXTURE: $ResourceLocation;
        constructor(arg0: $ModelPart);
    }
    export class $CodModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $ListModel<E extends $Entity> extends $EntityModel<E> {
        handler$dck001$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        parts(): $Iterable<$ModelPart>;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        constructor(arg0: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $SkeletonModel<T extends $Mob> extends $HumanoidModel<T> {
        static createDefaultSkeletonMesh(arg0: $PartDefinition): void;
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $ModelUtils {
        static rotlerpRad(arg0: number, arg1: number, arg2: number): number;
        constructor();
    }
    export class $ElytraModel<T extends $LivingEntity> extends $AgeableListModel<T> {
        static createLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $DolphinModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $CamelModel<T extends $Camel> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $BreezeModel<T extends $Breeze> extends $HierarchicalModel<T> {
        static createBodyLayer(arg0: number, arg1: number): $LayerDefinition;
        rods(): $ModelPart;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        wind(): $ModelPart;
        eyes(): $ModelPart;
        head(): $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $PolarBearModel<T extends $PolarBear> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $ArmorStandArmorModel extends $HumanoidModel<$ArmorStand> {
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        setupAnim(arg0: $ArmorStand, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $LeashKnotModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $PiglinHeadModel extends $SkullModelBase {
        static createHeadModel(): $MeshDefinition;
        constructor(arg0: $ModelPart);
    }
    export class $ColorableHierarchicalModel<E extends $Entity> extends $HierarchicalModel<E> {
        setColor(arg0: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        set color(value: number);
    }
    export class $ParrotModel extends $HierarchicalModel<$Parrot> {
        renderOnShoulder(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(arg0: $Parrot, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: $Parrot, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $LlamaModel<T extends $AbstractChestedHorse> extends $EntityModel<T> {
        handler$dcn003$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $FrogModel<T extends $Frog> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $VillagerHeadModel {
    }
    export interface $VillagerHeadModel {
        hatVisible(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $VillagerHeadModel}.
     */
    export type $VillagerHeadModel_ = ((arg0: boolean) => void);
    export class $TadpoleModel<T extends $Tadpole> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $IronGolemModel<T extends $IronGolem> extends $HierarchicalModel<T> {
        getFlowerHoldingArm(): $ModelPart;
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
        get flowerHoldingArm(): $ModelPart;
    }
    export class $LavaSlimeModel<T extends $Slime> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $WitherBossModel<T extends $WitherBoss> extends $HierarchicalModel<T> {
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $SkullModelBase extends $Model {
        setupAnim(arg0: number, arg1: number, arg2: number): void;
        constructor();
    }
    export class $PhantomModel<T extends $Phantom> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $GiantZombieModel extends $AbstractZombieModel<$Giant> {
        isAggressive(arg0: $Giant): boolean;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $ZombieModel<T extends $Zombie> extends $AbstractZombieModel<T> {
        isAggressive(arg0: T): boolean;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $WindChargeModel extends $HierarchicalModel<$AbstractWindCharge> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: $AbstractWindCharge, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $BoggedModel extends $SkeletonModel<$Bogged> {
        prepareMobModel(arg0: $Bogged, arg1: number, arg2: number, arg3: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $ChestRaftModel extends $RaftModel {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $LlamaSpitModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $PandaModel<T extends $Panda> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $ChickenModel<T extends $Entity> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        scaleHead: boolean;
        static RED_THING: string;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $PufferfishSmallModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $ShulkerBulletModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
}
