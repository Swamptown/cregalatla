# LevelEvents.beforeExplosion

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: [ExplosionKubeEvent$Before](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/level/Before.java)

```
Invoked right before an explosion happens.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getSize |  |  | float | ✘ |
| setSize | float |  | void | ✘ |
| getLevel |  |  | Level | ✘ |
| getPosition |  |  | Vec3 | ✘ |
| getY |  |  | double | ✘ |
| getExploder |  |  | LivingEntity | ✘ |
| getX |  |  | double | ✘ |
| getZ |  |  | double | ✘ |
| getBlock |  |  | LevelBlock | ✘ |
| getRegistries |  |  | RegistryAccess | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |


### Documented members:

- `float getSize()`
```
Returns the size of the explosion.
```

- `void setSize(float var0)`

  Parameters:
  - var0: float

```
Sets the size of the explosion.
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
LevelEvents.beforeExplosion(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

