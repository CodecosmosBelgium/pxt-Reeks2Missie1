enum TwoDirectionForwardBack {
    //% block="forward"
    Forward = FourDirection.Forward,
    //% block="back"
    Back = FourDirection.Back
}

//% color="#D83B01" weight=100 icon="\uf20a" block="AgentExtension"
namespace AgentExtension {
    //% block="agent move $direction by $amount"
    //% block.loc.nl="agent beweeg $direction met $amount stappen"
    export function agentMoveTwoDirectionForwardBack(direction: TwoDirectionForwardBack, amount: number) {
        for (let i = 0; i < amount; i++) {
            player.execute(`execute @p ~ ~ ~ setblock 87 43 74 air`)
            agent.move(direction === 0 ? FORWARD : BACK, 1)
            loops.pause(50);
            player.execute(`execute @p ~ ~ ~ setblock 87 43 74 redstone_block`)
            let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
            if (blocks.testForBlock(LIGHT_GRAY_CONCRETE, posBelowAgent)) {
                wrongMoves++
                player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
            }
        }        
    }
    
    //% block="agent move $direction by $amount"
    //% block.loc.nl="agent beweeg $direction met $amount stappen"
    export function agentMoveFourDirection(direction: FourDirection, amount: number) {
        for (let i = 0; i < amount; i++) {
            player.execute(`execute @p ~ ~ ~ setblock 87 43 74 air`)
            agent.move(direction, 1)
            loops.pause(50);
            player.execute(`execute @p ~ ~ ~ setblock 87 43 74 redstone_block`)
            let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
            if (blocks.testForBlock(COBBLESTONE, posBelowAgent)) {
                wrongMoves++
                player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
            }
        }
    }
}

//% color=190 weight=100 icon="\uf20a" block="CodeCosmos"
namespace CodeCosmos {
    //% block="Check exercise"
    //% block.loc.nl="Controleer oefening"
    export function checkExercise() {
        const posBelowAgent= world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(EMERALD_BLOCK, posBelowAgent) && wrongMoves==0) {
            player.execute(`function exercises/end_exercise`);
        } else {
            player.execute(wrongMoves === 0 ? `tellraw @s {"rawtext":[{"translate":"not.on.emerald.block"}]}` : `tellraw @s {"rawtext":[{"translate":"stepped.wrong.path"}]}`)
            wrongMoves = 0;
            player.execute(`function exercises/fail`);
        }
    }
}