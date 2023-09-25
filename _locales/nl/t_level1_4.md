### @hideIteration true
### @flyoutOnly true
# Missie 1 (v1.0)

```blocks
player.onChat("beweeg", function () {
    AgentExtensionNL.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBackNL.Forward, 2)
    agent.turn(RIGHT_TURN)
    AgentExtensionNL.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBackNL.Forward, 3)
    CodeCosmosNL.checkExercise()
})

```

```template
player.onChat("beweeg", function () {
    CodeCosmosNL.checkExercise()
})

```

## Gebruik het leerplatform
Gebruik het leerplatform om de oefening op te lossen.