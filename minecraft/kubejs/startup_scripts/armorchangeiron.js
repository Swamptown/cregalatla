ItemEvents.modification(event => {
    event.modify("minecraft:iron_chestplate", item => {
        let modifiedAttributeModifer = Item.of(item.item().id).attributeModifiers
            .withModifierAdded('generic.armor',
                {amount: 3, id: 'minecraft:armor.chestplate', operation: 'add_value'}, 'chest'
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifer.modifiers())
        })
    event.modify("minecraft:iron_helmet", item => {
        let modifiedAttributeModifer = Item.of(item.item().id).attributeModifiers
            .withModifierAdded('generic.armor',
                {amount: 1, id: 'minecraft:armor.helmet', operation: 'add_value'}, 'head'
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifer.modifiers())
        })
    event.modify("minecraft:iron_leggings", item => {
        let modifiedAttributeModifer = Item.of(item.item().id).attributeModifiers
            .withModifierAdded('generic.armor',
                {amount: 2, id: 'minecraft:armor.leggings', operation: 'add_value'}, 'legs'
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifer.modifiers())
        })
    event.modify("minecraft:iron_boots", item => {
        let modifiedAttributeModifer = Item.of(item.item().id).attributeModifiers
            .withModifierAdded('generic.armor',
                {amount: 1, id: 'minecraft:armor.boots', operation: 'add_value'}, 'feet'
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifer.modifiers())
        })
})
