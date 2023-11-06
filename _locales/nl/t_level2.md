### @hideIteration true
### @flyoutOnly true
# Missie 1 (v1.0)

```blocks
player.onChat("parcour1", function () {
    agent.turn(LEFT_TURN)
    agent.turn(RIGHT_TURN)

    AgentExtensionNL.agentMoveFourDirection(FourDirection.Forward, 3)
	AgentExtensionNL.agentMoveFourDirection(FourDirection.Left, 5)
	AgentExtensionNL.agentMoveFourDirection(FourDirection.Forward, 3)
	AgentExtensionNL.agentMoveFourDirection(FourDirection.Right, 5)
	AgentExtensionNL.agentMoveFourDirection(FourDirection.Back, 1)
	
})

player.onChat("parcour2", function () {
    AgentExtensionNL.agentMoveFourDirection(FourDirection.Forward, 3)
    agent.turn(LEFT_TURN)
	AgentExtensionNL.agentMoveFourDirection(FourDirection.Forward, 5)
    agent.turn(RIGHT_TURN)
	AgentExtensionNL.agentMoveFourDirection(FourDirection.Forward, 3)
    agent.turn(RIGHT_TURN)
	AgentExtensionNL.agentMoveFourDirection(FourDirection.Forward, 5)
    agent.turn(RIGHT_TURN)
	AgentExtensionNL.agentMoveFourDirection(FourDirection.Forward, 1)
})

```

```template
player.onChat("extraLevel", function () {
    AgentExtensionNL.agentMoveFourDirection(FourDirection.Forward, 1)
    agent.turn(LEFT_TURN)
    CodeCosmosNL.checkExercise()
})

```

## Gebruik het leerplatform
Gebruik het leerplatform om de oefening op te lossen.