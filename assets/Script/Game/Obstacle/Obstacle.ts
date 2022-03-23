// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Obstacle extends cc.Component {

    r: number = 0;

    x: number = 0;

    y: number = 0;

    setPosition (x: number, y: number) {
        this.node.setPosition(x, y);
        this.x = x;
        this.y = y;
    }

    checkCollision (r: number, x:number, y?: number): boolean {
        let d2 = (this.x - x)*(this.x - x) + (this.y - y)*(this.y - y);
        return d2 <= r*r + this.r*this.r + 2*r*this.r;
    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {
    //     cc.resources.load("obstacle/obstacle-bush-01", cc.Texture2D ,(err: any, texture: cc.Texture2D) => {
    //         let spriteFrame = new cc.SpriteFrame();
    //         spriteFrame.setTexture(texture);
    //         let node = new cc.Node();
    //         this.leaf = node.addComponent(cc.Sprite);
    //         this.leaf.spriteFrame = spriteFrame;
    //         this.node.addChild(node, 1);
    //
    //         node.opacity = 110;
    //     });
    //
    //     cc.resources.load("obstacle/obstacle-bottle-01", cc.Texture2D ,(err: any, texture: cc.Texture2D) => {
    //         let spriteFrame = new cc.SpriteFrame();
    //         spriteFrame.setTexture(texture);
    //         let node = new cc.Node();
    //         this.root = node.addComponent(cc.Sprite);
    //         this.root.spriteFrame = spriteFrame;
    //         this.node.addChild(node, 0);
    //     });
    // }

    // start () {
    //     this.node.scale = 0.7;
    // }

    // update (dt) {}
}
