### @hideIteration true
### @flyoutOnly true
# Mission 1 (v1.0)

```blocks
player.onChat("move", function () {
    AgentExtension.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBack.Forward, 2)
    agent.turn(RIGHT_TURN)
    AgentExtension.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBack.Forward, 3)
    CodeCosmos.checkExercise()
})

```

```template
player.onChat("move", function () {
    CodeCosmos.checkExercise()
})

```

## Use the learning platform
Use the learning platform to solve the exercise.