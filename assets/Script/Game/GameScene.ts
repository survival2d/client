// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Obstacle from "./Obstacle/Obstacle";
import Prefab = cc.Prefab;
import instantiate = cc.instantiate;

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    @property(Prefab)
    private bushPrefab: Prefab = null;

    private obstacles : Obstacle[];
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.obstacles = [];
        this.genObstacles(3);
    }

    start () {
        cc.log("number of obstacles", this.obstacles.length);
        for (let obs of this.obstacles) {
            obs.setPosition((Math.random()-0.5)*900, (Math.random()-0.5)*700);
        }
    }

    genObstacles (num?: number) {
        for (let i = 0; i < num; i++) {
            let node = instantiate(this.bushPrefab);
            this.node.addChild(node);
            this.obstacles.push(node.getComponent(Obstacle));
        }
    }

    // update (dt) {}
}
