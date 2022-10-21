/**
 * Created by quantm7 on 9/18/2022.
 */

const MatchManager = cc.Class.extend({
    ctor: function () {
        this.matchId = "";

        this.players = [];
        this.myPlayer = new PlayerData();

        this.mapWidth = 1600;
        this.mapHeight = 800;

        this.obstacles = [];
        for (let i = 0; i < 10; i++) {
            let obstacleData = new ObstacleData();
            obstacleData.type = 1;
            let x = Math.round(Math.random() * this.mapWidth);
            let y = Math.round(Math.random() * this.mapHeight);
            obstacleData.position = gm.p(x, y);
            this.obstacles.push(obstacleData);
        }

        this.scene = null;
    },

    newMatch: function (matchId) {
        this.matchId = "";
        this.myPlayer.position = gm.p(30, 30);
        this.scene = SceneManager.getInstance().openMatchScene();
        this.scene.updateMatchView();
    },

    isInMatch: function () {
        return SceneManager.getInstance().getMainLayer() instanceof MatchScene && this.scene !== null;
    },

    updateMatchInfo: function (players) {
        this.players = players;
        this.myPlayer = this.players[GameManager.getInstance().userData.username];

        if (this.isInMatch()) this.scene.updateMatchView();
    },

    updateMyPlayerMove: function (vector, rotation) {
        this.myPlayer.position.x += vector.x;
        this.myPlayer.position.y += vector.y;
        this.myPlayer.rotation = rotation;

        let pk = new SendPlayerMoveAction(vector, rotation);
        GameClient.getInstance().sendPacket(pk);
    },

    receivedPlayerMove: function (playerId, pos, rotation) {
        let player = this.players[playerId];
        if (!player) {
            cc.log("Warning: we dont have player " + playerId + " in match");
            return;
        }
        player.position = pos;
        player.rotation = rotation;

        if (this.isInMatch()) this.scene.updateMatchView();
    },

    receivedFiredBullet: function (pos, vector) {
        if (this.isInMatch()) this.scene.fire(pos, vector);
    }
});