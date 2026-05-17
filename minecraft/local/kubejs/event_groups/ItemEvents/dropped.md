# ItemEvents.dropped

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: [ItemDroppedKubeEvent](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/item/ItemDroppedKubeEvent.java)

```
Invoked when a player drops an item.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getItemEntity |  |  | ItemEntity | ✘ |
| getEntity |  |  | LivingEntity | ✘ |
| getItem |  |  | ItemStack | ✘ |
| getPlayer |  |  | Player | ✘ |
| getLevel |  |  | Level | ✘ |
| getRegistries |  |  | RegistryAccess | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |


### Documented members:

- `ItemEntity getItemEntity()`
```
The item entity that was spawned when dropping.
```

- `LivingEntity getEntity()`
```
The player that dropped the item.
```

- `ItemStack getItem()`
```
The item that was dropped.
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
ItemEvents.dropped(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

