### @hideIteration true
### @flyoutOnly true
# Missie 1 (v1.0)

```blocks
player.onChat("goVooruit", function () {
    AgentExtensionNL.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBackNL.Forward, 5)
})

player.onChat("goTerug", function () {
	AgentExtensionNL.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBackNL.Back, 5)
})

```

```template
player.onChat("goTerug", function () {
    AgentExtensionNL.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBackNL.Forward, 1)
    CodeCosmosNL.checkExercise()
})

```

## Gebruik het leerplatform
Gebruik het leerplatform om de oefening op te lossen.