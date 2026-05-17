# ServerEvents.recipes

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: [RecipesKubeEvent](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/recipe/RecipesKubeEvent.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| smithingTrim | RecipeTypeFunction | ✘ |
| addedRecipes | Collection<KubeRecipe> | ✘ |
| stonecutting | RecipeTypeFunction | ✘ |
| shaped | RecipeTypeFunction | ✘ |
| registries | RegistryAccessContainer | ✘ |
| removedRecipes | Collection<KubeRecipe> | ✘ |
| recipeSchemaStorage | RecipeSchemaStorage | ✘ |
| campfireCooking | RecipeTypeFunction | ✘ |
| shapeless | RecipeTypeFunction | ✘ |
| blasting | RecipeTypeFunction | ✘ |
| smithing | RecipeTypeFunction | ✘ |
| ops | RegistryOpsContainer | ✘ |
| CREATE_RECIPE_SKIP_ERROR | Pattern | ✔ |
| originalRecipes | Map<ResourceLocation, KubeRecipe> | ✘ |
| smoking | RecipeTypeFunction | ✘ |
| POST_SKIP_ERROR | Pattern | ✔ |
| resourceManager | ResourceManager | ✘ |
| smelting | RecipeTypeFunction | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| remove | Context, RecipeFilter |  | void | ✘ |
| stage | Context, RecipeFilter, String |  | void | ✘ |
| getRecipeFunction | String |  | RecipeTypeFunction | ✘ |
| recipeStream | Context, RecipeFilter |  | Stream<KubeRecipe> | ✘ |
| forEachRecipe | Context, RecipeFilter, Consumer<KubeRecipe> |  | void | ✘ |
| countRecipes | Context, RecipeFilter |  | int | ✘ |
| containsRecipe | Context, RecipeFilter |  | boolean | ✘ |
| findRecipes | Context, RecipeFilter |  | Collection<KubeRecipe> | ✘ |
| findRecipeIds | Context, RecipeFilter |  | Collection<ResourceLocation> | ✘ |
| printAllTypes |  |  | void | ✘ |
| printExamples | String |  | void | ✘ |
| takeId | KubeRecipe, String, String |  | ResourceLocation | ✘ |
| addRecipe | KubeRecipe, boolean |  | KubeRecipe | ✘ |
| replaceInput | Context, RecipeFilter, ReplacementMatchInfo, Object |  | void | ✘ |
| replaceOutput | Context, RecipeFilter, ReplacementMatchInfo, Object |  | void | ✘ |
| getRecipes |  |  | Map<String, Object> | ✘ |
| custom | Context, JsonObject |  | KubeRecipe | ✘ |
| printTypes | Context |  | void | ✘ |
| exit | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |


### Documented members:

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
ServerEvents.recipes((event) => {
	// This space (un)intentionally left blank
});
```

