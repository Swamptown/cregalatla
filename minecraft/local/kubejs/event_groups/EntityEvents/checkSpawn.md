# EntityEvents.checkSpawn

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: [CheckLivingEntitySpawnKubeEvent](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/entity/CheckLivingEntitySpawnKubeEvent.java)

```
Invoked before an entity is spawned into the world.

Only entities from a `BaseSpawner` or world generation will trigger this event.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| x | double | ✘ |
| y | double | ✘ |
| z | double | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getType |  |  | MobSpawnType | ✘ |
| getLevel |  |  | Level | ✘ |
| getSpawner |  |  | WrappedSpawner | ✘ |
| getEntity |  |  | Entity | ✘ |
| getBlock |  |  | LevelBlock | ✘ |
| getPlayer |  |  | Player | ✘ |
| getRegistries |  |  | RegistryAccess | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |


### Documented members:

- `MobSpawnType getType()`
```
The type of spawn.
```

- `Level getLevel()`
```
The level the entity is being spawned into.
```

- `WrappedSpawner getSpawner()`
```
The spawner that spawned the entity.
```

- `Entity getEntity()`
```
The entity being spawned.
```

- `LevelBlock getBlock()`
```
The block the entity is being spawned on.
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
EntityEvents.checkSpawn(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

