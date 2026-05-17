# ItemEvents.modelProperties

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: [ItemModelPropertiesKubeEvent](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/item/ItemModelPropertiesKubeEvent.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| register | Ingredient, KubeResourceLocation, ClampedItemPropertyFunction |  | void | ✘ |
| registerAll | KubeResourceLocation, ClampedItemPropertyFunction |  | void | ✘ |
| exit | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |


### Documented members:

- `void register(Ingredient var0, KubeResourceLocation var1, ClampedItemPropertyFunction var2)`

  Parameters:
  - var0: Ingredient
  - var1: KubeResourceLocation
  - var2: ClampedItemPropertyFunction

```
Register a model property for an item. Model properties are used to change the appearance of an item in the world.

More about model properties: https://minecraft.wiki/w/Tutorials/Models#Item_predicates
```

- `void registerAll(KubeResourceLocation var0, ClampedItemPropertyFunction var1)`

  Parameters:
  - var0: KubeResourceLocation
  - var1: ClampedItemPropertyFunction

```
Register a model property for all items.
```

- `Object exit(Context var0)`

  Parameters:
  - var0: Context

```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit(Context var0, Object var1)`

  Parameters:
  - var0: Context
  - var1: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Context var0)`

  Parameters:
  - var0: Context

```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel(Context var0, Object var1)`

  Parameters:
  - var0: Context
  - var1: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object success(Context var0, Object var1)`

  Parameters:
  - var0: Context
  - var1: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success(Context var0)`

  Parameters:
  - var0: Context

```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
ItemEvents.modelProperties((event) => {
	// This space (un)intentionally left blank
});
```

