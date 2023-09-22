### @hideIteration true
### @flyoutOnly true
# Mission 1 (v1.0)

```blocks
player.onChat("parcour1", function () {
    agent.turn(LEFT_TURN)
    agent.turn(RIGHT_TURN)

    AgentExtension.agentMoveFourDirection(FourDirection.Forward, 3)
	AgentExtension.agentMoveFourDirection(FourDirection.Left, 5)
	AgentExtension.agentMoveFourDirection(FourDirection.Forward, 3)
	AgentExtension.agentMoveFourDirection(FourDirection.Right, 5)
	AgentExtension.agentMoveFourDirection(FourDirection.Back, 1)
	
})

player.onChat("parcour2", function () {
    AgentExtension.agentMoveFourDirection(FourDirection.Forward, 3)
    agent.turn(LEFT_TURN)
	AgentExtension.agentMoveFourDirection(FourDirection.Forward, 5)
    agent.turn(RIGHT_TURN)
	AgentExtension.agentMoveFourDirection(FourDirection.Forward, 3)
    agent.turn(RIGHT_TURN)
	AgentExtension.agentMoveFourDirection(FourDirection.Forward, 5)
    agent.turn(RIGHT_TURN)
	AgentExtension.agentMoveFourDirection(FourDirection.Forward, 1)
})

```

```template
player.onChat("gogogo", function () {
    AgentExtension.agentMoveFourDirection(FourDirection.Forward, 1)
    agent.turn(LEFT_TURN)
    CodeCosmos.checkExercise()
})

```

## Use the learning platform
Use the learning platform to solve the exercise.