/**
 * Created by quantm7 on 9/10/2022.
 */

var MatchScene = BaseLayer.extend({
    ctor: function () {
        this._super(MatchScene.className);
        this.loadCss(res.MATCH_SCENE);
        this.controller = new Controller();
        this.initKeyBoardController();
        this.initMouseController();

        this.playerUIs = [];
    },

    initGUI: function () {
        this.ground = this.getControl("ground");

        this.myPlayer = new PlayerUI();
        this.addChild(this.myPlayer);
        this.myPlayer.setPosition(cc.winSize.width/2, cc.winSize.height/2);
        this.myPlayer.setMyPlayer(true);
        this.myPlayer.unEquip();
    },

    initKeyBoardController: function () {
        var that = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (keyCode, event) {
                that.controller.onKeyPressed(keyCode);
            },
            onKeyReleased: function(keyCode, event){
                that.controller.onKeyReleased(keyCode);
            }
        }, this);
    },

    initMouseController: function () {
        var that = this;
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (event) {
                that.controller.onMouseDown(event.getLocationX(), event.getLocationY());
            },
            onMouseUp: function (event) {
                that.controller.onMouseUp(event.getLocationX(), event.getLocationY());
            },
            onMouseMove: function (event) {
                that.controller.onMouseMove(event.getLocationX(), event.getLocationY());
            },
            onMouseScroll: function (event) {
                that.controller.onMouseScroll();
            },
        }, this);
    },

    onEnter: function () {
        this._super();
        this.ground.setContentSize(4000, 3000);

        this.updateMatchView();

        this.scheduleUpdate();
    },

    onExit: function () {
        this.unscheduleUpdate();
        this._super();
    },

    updateMatchView: function () {
        let match = GameManager.getInstance().getCurrentMatch();
        if (!match) return;
        for (let player of match.players) {
            let playerUI = this.playerUIs[player.playerId];
            if (!playerUI) {
                playerUI = new PlayerUI();
                this.addChild(playerUI);
                this.playerUIs[player.playerId] = playerUI;
            }
            playerUI.setPosition(cc.winSize.width/2, cc.winSize.height/2);
            playerUI.setPlayerUIInfo(player.username);
        }
    },

    update: function (dt) {
        let oldPos = this.myPlayer.getPosition();
        let unitVector = this.controller.calculateMovementVector();
        let newPos = gm.calculatePosition(oldPos, unitVector, Config.PLAYER_BASE_SPEED);
        this.myPlayer.setPosition(newPos);

        let oldRotation = this.myPlayer.getPlayerRotation();
        let rotation = gm.radToDeg(this.controller.calculateRotation(this.myPlayer.getPosition()));
        rotation = Math.round(rotation);
        this.myPlayer.setPlayerRotation(rotation);

        if (oldPos.x !== newPos.x || oldPos.y !== newPos.y || oldRotation !== rotation) {
            let pk = SendPlayerMoveAction(newPos, rotation);
            GameClient.getInstance().sendPacket(pk);
        }
    },

    pickItem: function () {
        if (this.myPlayer.isEquip()) this.myPlayer.unEquip();
        else this.myPlayer.equipGun();
    },
});

MatchScene.className = "MatchScene";