ItemEvents.modification(event => {
    event.modify("minecraft:netherite_chestplate", item => {
        let modifiedAttributeModifer = Item.of(item.item().id).attributeModifiers
            .withModifierAdded('generic.armor',
                {amount: 6, id: 'minecraft:armor.chestplate', operation: 'add_value'}, 'chest'
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifer.modifiers())
        })
    event.modify("minecraft:netherite_helmet", item => {
        let modifiedAttributeModifer = Item.of(item.item().id).attributeModifiers
            .withModifierAdded('generic.armor',
                {amount: 2, id: 'minecraft:armor.helmet', operation: 'add_value'}, 'head'
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifer.modifiers())
        })
    event.modify("minecraft:netherite_leggings", item => {
        let modifiedAttributeModifer = Item.of(item.item().id).attributeModifiers
            .withModifierAdded('generic.armor',
                {amount: 5, id: 'minecraft:armor.leggings', operation: 'add_value'}, 'legs'
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifer.modifiers())
        })
    event.modify("minecraft:netherite_boots", item => {
        let modifiedAttributeModifer = Item.of(item.item().id).attributeModifiers
            .withModifierAdded('generic.armor',
                {amount: 2, id: 'minecraft:armor.boots', operation: 'add_value'}, 'feet'
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifer.modifiers())
        })
})