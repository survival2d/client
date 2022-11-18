/**
 * Created by quantm7 on 9/11/2022.
 */

const OutPacket = cc.Class.extend({
    ctor: function (id) {
        this.cmdId = id;
        this.data = null;
    },
});

const SendJoinTeam = OutPacket.extend({
    ctor: function (teamId) {
        this._super(Cmd.JOIN_TEAM);
        this.data = {
            teamId: teamId
        };
    }
});

const SendPlayerMoveAction = OutPacket.extend({
    ctor: function (direction, rotation) {
        this._super(Cmd.PLAYER_MOVE);
        this.data = {
            direction: direction,
            rotation: rotation
        }
    }
});

const SendPlayerChangeWeapon = OutPacket.extend({
    ctor: function (slot) {
        this._super(Cmd.CHANGE_WEAPON);
        this.data = {
            slot: slot
        }
    }
});

const SendPlayerTakeItem = OutPacket.extend({
    ctor: function (itemId) {
        this._super(Cmd.TAKE_ITEM);
        this.data = {
            itemId: itemId
        }
    }
});