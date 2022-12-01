/**
 * Created by quantm7 on 12/1/2022.
 */

const GunData = cc.Class.extend({
    ctor: function () {
        this.isActive = false;
        this.numBullets = 0;
    },

    activeGun: function () {
        this.isActive = true;
    },

    loadBullets: function (numBullets) {
        this.numBullets = numBullets;
    },

    isActiveGun: function () {
        return this.isActive;
    }
});