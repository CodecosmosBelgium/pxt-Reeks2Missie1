enum TwoDirectionForwardBackNL {
    //% block="vooruit"
    Forward = FourDirection.Forward,
    //% block="terug"
    Back = FourDirection.Back
}

//% color="#D83B01" weight=100 icon="\uf20a" block="AgentExtension"
namespace AgentExtensionNL {
    //% block="agent beweeg $direction met $amount"
    //% amount.defl=1
    export function agentMoveTwoDirectionForwardBack(direction: TwoDirectionForwardBackNL, amount: number) {
        for (let i = 0; i < amount; i++) {
            player.execute(`execute @p ~ ~ ~ setblock 87 43 74 air`)
            agent.move(direction === 0 ? FORWARD : BACK, 1)
            let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
            if (blocks.testForBlock(LIGHT_GRAY_CONCRETE, posBelowAgent)) {
                wrongMoves++
                player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
            }
            loops.pause(50);
            player.execute(`execute @p ~ ~ ~ setblock 87 43 74 redstone_block`)
        }
    }

    //% block="agent beweeg $direction met $amount"
    export function agentMoveFourDirection(direction: FourDirection, amount: number) {
        for (let i = 0; i < amount; i++) {
            player.execute(`execute @p ~ ~ ~ setblock 87 43 74 air`)
            agent.move(direction, 1)
            let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
            if (blocks.testForBlock(COBBLESTONE, posBelowAgent)) {
                wrongMoves++
                player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
            }
            loops.pause(50);
            player.execute(`execute @p ~ ~ ~ setblock 87 43 74 redstone_block`)
        }
    }
}

//% color=190 weight=100 icon="\uf20a" block="CodeCosmos"
namespace CodeCosmosNL {
    //% block="controleer oefening"
    export function checkExercise() {
        const posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(EMERALD_BLOCK, posBelowAgent) && wrongMoves == 0) {
            player.execute(`function exercises/end_exercise`);
        } else if (blocks.testForBlock(EMERALD_BLOCK, posBelowAgent) && wrongMoves != 0) {
            player.execute(`tellraw @s {"rawtext":[{"translate":"stepped.wrong.path"}]}`);
            player.execute(`function exercises/fail`);
        }
        else {
            player.execute(`tellraw @s {"rawtext":[{"translate":"not.on.emerald.block"}]}`);
            player.execute(`function exercises/fail`);
        }
        wrongMoves = 0;
    }
}