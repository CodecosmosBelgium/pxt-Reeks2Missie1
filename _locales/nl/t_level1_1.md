### @hideIteration true
### @flyoutOnly true
# Missie 1 (v1.0)

```blocks
player.onChat("gaVooruit", function () {
    AgentExtensionNL.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBack.Forward, 5)
})

player.onChat("gaTerug", function () {
	AgentExtensionNL.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBack.Back, 5)
})

```

```template
player.onChat("gaVooruit", function () {
    AgentExtensionNL.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBack.Forward, 1)
    CodeCosmosNL.checkExercise()
})

```

## Gebruik het leerplatform
Gebruik het leerplatform om de oefening op te lossen.