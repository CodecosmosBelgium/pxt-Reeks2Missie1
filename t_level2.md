### @hideIteration true
### @flyoutOnly true
# Mission 1 (v1.0)

```blocks
player.onChat("parcour1", function () {
    agent.turn(LEFT_TURN)
    agent.turn(RIGHT_TURN)

	AgentExtension.agentMoveFourDirection(Left, 1)
	AgentExtension.agentMoveFourDirection(Back, 3)
	AgentExtension.agentMoveFourDirection(Right, 4)
	AgentExtension.agentMoveFourDirection(Forward, 8)
	AgentExtension.agentMoveFourDirection(Right, 3)
	AgentExtension.agentMoveFourDirection(Back, 5)
	AgentExtension.agentMoveFourDirection(Left, 1)
})

player.onChat("parcour2", function () {
    agent.turn(LEFT_TURN)
	AgentExtension.agentMoveFourDirection(Forward, 1)
    agent.turn(LEFT_TURN)
	AgentExtension.agentMoveFourDirection(Forward, 3)
    agent.turn(LEFT_TURN)
	AgentExtension.agentMoveFourDirection(Forward, 4)
    agent.turn(LEFT_TURN)
	AgentExtension.agentMoveFourDirection(Forward, 8)
    agent.turn(RIGHT_TURN)
	AgentExtension.agentMoveFourDirection(Forward, 3)
    agent.turn(RIGHT_TURN)
	AgentExtension.agentMoveFourDirection(Forward, 5)
    agent.turn(RIGHT_TURN)
	AgentExtension.agentMoveFourDirection(Forward, 1)
})
```

```template
player.onChat("gogogo", function () {

})

```
## Building fields
Use the learning platform to solve the exercise.