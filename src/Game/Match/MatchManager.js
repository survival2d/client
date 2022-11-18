/**
 * Created by quantm7 on 9/18/2022.
 */

const MatchManager = cc.Class.extend({
    ctor: function () {
        this.matchId = "";

        this.players = [];
        this.myPlayer = new PlayerData();

        this.mapWidth = 10000;
        this.mapHeight = 10000;

        this.obstacles = [];
        this.items = [];

        if (Config.IS_OFFLINE) {
            this.mapWidth = 2000;
            this.mapHeight = 1500;

            // for (let i = 0; i < 10; i++) {
            //     let obstacleData = new TreeData();
            //     let x = Math.round(Math.random() * this.mapWidth);
            //     let y = Math.round(Math.random() * this.mapHeight);
            //     obstacleData.position = gm.p(x, y);
            //     obstacleData.setObjectId(i);
            //     this.obstacles.push(obstacleData);
            // }
            // for (let i = 0; i < 10; i++) {
            //     let obstacleData = new CrateData();
            //     let x = Math.round(Math.random() * this.mapWidth);
            //     let y = Math.round(Math.random() * this.mapHeight);
            //     obstacleData.position = gm.p(x, y);
            //     obstacleData.setObjectId(10 + i);
            //     this.obstacles.push(obstacleData);
            // }

            for (let i = 0; i < 1; i++) {
                let itemData = new ItemGunData();
                let x = Math.round(Math.random() * this.mapWidth);
                let y = Math.round(Math.random() * this.mapHeight);
                itemData.position = gm.p(x, y);
                itemData.setObjectId(i);
                this.items.push(itemData);
            }
            for (let i = 0; i < 2; i++) {
                let itemData = new ItemBulletData();
                let x = Math.round(Math.random() * this.mapWidth);
                let y = Math.round(Math.random() * this.mapHeight);
                itemData.position = gm.p(x, y);
                itemData.setObjectId(i);
                this.items.push(itemData);
            }
        }

        this.scene = null;
    },

    newMatch: function (matchId) {
        this.matchId = "";
        this.myPlayer.position = gm.p(30, 30);
        this.myPlayer.hp = Config.PLAYER_MAX_HP;
        this.myPlayer.playerId = this.myPlayer.username = GameManager.getInstance().userData.username;
        this.players[GameManager.getInstance().userData.username] = this.myPlayer;
        this.scene = SceneManager.getInstance().openMatchScene();
        this.scene.updateMatchView();
    },

    isInMatch: function () {
        return SceneManager.getInstance().getMainLayer() instanceof MatchScene && this.scene !== null;
    },

    /**
     * @param {PlayerData[]} players
     * @param {ObstacleData[]} obstacles
     */
    updateMatchInfo: function (players, obstacles) {
        this.players = players;
        this.myPlayer = this.players[GameManager.getInstance().userData.username];

        this.obstacles = obstacles;

        if (this.isInMatch()) this.scene.updateMatchView();
    },

    /**
     * @param {number} obstacleId
     * @return {null|ObstacleData}
     */
    getObstacleById: function (obstacleId) {
        for (let obs of this.obstacles) {
            if (obs.getObjectId() === obstacleId) return obs;
        }

        return null
    },

    /**
     * @param {number} itemId
     * @return {null|ItemData}
     */
    getItemById: function (itemId) {
        for (let item of this.items) {
            if (item.getObjectId() === itemId) return item;
        }

        return null
    },

    /**
     * @param {number} itemId
     * @return {null|ItemData}
     */
    getItemAndRemoveById: function (itemId) {
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if (item.getObjectId() === itemId) {
                this.items.splice(i, 1);
                return item;
            }
        }

        return null
    },

    updateMyPlayerMove: function (vector, rotation) {
        this.myPlayer.position.x += vector.x;
        this.myPlayer.position.y += vector.y;
        this.myPlayer.rotation = rotation;

        let pk = new SendPlayerMoveAction(vector, rotation);
        GameClient.getInstance().sendPacket(pk);
    },

    updateMyPlayerWeapon: function (slot) {
        let pk = new SendPlayerChangeWeapon(slot);
        GameClient.getInstance().sendPacket(pk);
    },

    receivedPlayerMove: function (username, pos, rotation) {
        let player = this.players[username];
        if (!player) {
            cc.log("Warning: we dont have player " + username + " in match");
            return;
        }

        if (username === GameManager.getInstance().userData.username) return;

        player.position = pos;
        player.rotation = rotation;

        if (this.isInMatch()) this.scene.playerMove(username, pos, rotation);
    },

    receivedPlayerAttack: function (username, weaponId, direction) {
        let player = this.players[username];
        if (!player) {
            cc.log("Warning: we dont have player " + username + " in match");
            return;
        }

        if (username === GameManager.getInstance().userData.username) return;

        if (this.isInMatch()) this.scene.playerAttack(username, weaponId, direction);
    },

    receivedPlayerChangeWeapon: function (username, weaponId) {
        let player = this.players[username];
        if (!player) {
            cc.log("Warning: we dont have player " + username + " in match");
            return;
        }

        if (username === GameManager.getInstance().userData.username) return;

        if (this.isInMatch()) this.scene.playerChangeWeapon(username, weaponId);
    },

    /**
     * @param {BulletData} bullet
     */
    receivedCreateBullet: function (bullet) {
        if (this.isInMatch()) this.scene.fire(bullet.rawPosition, bullet.direction);
    },

    receivedPlayerTakeDamage: function (username, hp) {
        let player = this.players[username];
        if (!player) {
            cc.log("Warning: we dont have player " + username + " in match");
            return;
        }

        let oldHp = player.hp;
        player.hp = hp;

        if (this.isInMatch()) this.scene.playerTakeDamage(username, oldHp);
    },

    receivedPlayerDead: function (username) {
        let player = this.players[username];
        if (!player) {
            cc.log("Warning: we dont have player " + username + " in match");
            return;
        }

        player.hp = 0;

        if (this.isInMatch()) this.scene.playerDead(username);
    },

    receivedObstacleTakeDamage: function (obstacleId, hp) {
        let obs = this.getObstacleById(obstacleId);
        if (!obs) {
            cc.log("Warning: we dont have obstacle " + obstacleId + " in match");
            return;
        }

        obs.hp = hp;

        if (this.isInMatch()) this.scene.obstacleTakeDamage(obstacleId);
    },

    receivedObstacleDestroyed: function (obstacleId) {
        let obs = this.getObstacleById(obstacleId);
        if (!obs) {
            cc.log("Warning: we dont have obstacle " + obstacleId + " in match");
            return;
        }

        obs.hp = 0;

        if (this.isInMatch()) this.scene.obstacleDestroyed(obstacleId);
    },

    /**
     * @param {ItemData} item
     */
    receivedItemCreated: function (item) {
        this.items.push(item);

        if (this.isInMatch()) this.scene.createItem(item);
    },

    receivedPlayerTakeItem: function (username, itemId) {
        let player = this.players[username];
        if (!player) {
            cc.log("Warning: we dont have player " + username + " in match");
            return;
        }

        let item = this.getItemAndRemoveById(itemId);
        if (!item) {
            cc.log("Warning: we dont have item " + itemId + " in match");
            return;
        }

        if (this.isInMatch()) this.scene.playerTakeItem(itemId);
    }
});