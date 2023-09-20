### @hideIteration true
### @flyoutOnly true
# Mission 1 (v1.0)

```blocks
player.onChat("goForward", function () {
    AgentExtension.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBack.Forward, 5)
})

player.onChat("goBack", function () {
	AgentExtension.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBack.Back, 5)
})

```

```template
player.onChat("goForward", function () {
    AgentExtension.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBack.Forward, 1)
    CodeCosmos.checkExercise()
})

```

## Use the learning platform
Use the learning platform to solve the exercise.