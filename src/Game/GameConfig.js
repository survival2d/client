/**
 * Created by quantm7 on 9/10/2022.
 */

const Config = function () {};

Config.FPS = 60;

Config.MAP_WIDTH = 10000;
Config.MAP_HEIGHT = 10000;

Config.ENABLE_SMOOTH = false;
Config.CHECK_MOVE_COLLISION = false;

/**
 * SPEED: pixel per frame
 */
Config.PLAYER_BASE_SPEED = 10;
Config.BULLET_BASE_SPEED = 20;

Config.BULLET_CREATE_DISTANCE = 10;

Config.PLAYER_RADIUS = 30;
Config.ITEM_RADIUS = 40;
Config.TREE_RADIUS = 50;
Config.STONE_RADIUS = 100;
Config.CRATE_WIDTH = 200;
Config.CRATE_HEIGHT = 200;
Config.WALL_WIDTH = 100;
Config.WALL_HEIGHT = 100;

Config.PLAYER_MAX_HP = 100;
Config.MAX_HP = 100;

Config.MINI_MAP_SCALE = 0.3;

Config.COOLDOWN_FIRE = 0.1;     // second
Config.COOLDOWN_ATTACK = 0.2;   // second

Config.SYNC_DELTA_TIME = 2;     // second

Config.SAFE_ZONE_RADIUS = [
    5000,
    3000,
    1200,
    700,
    250
]

Config.MAP_OBJECT_TYPE = {
    TREE: 2,
    CRATE: 3,
    STONE: 4,
    WALL: 1
}

// config map object
Config.MAP_OBJECT_POSITION = [[1, [81, 64]], [1, [0, 64]], [1, [1, 64]], [1, [2, 64]], [1, [3, 64]], [1, [4, 64]], [1, [5, 64]], [1, [6, 64]], [1, [7, 64]], [1, [8, 64]], [1, [9, 64]], [1, [10, 64]], [1, [11, 64]], [1, [12, 64]], [1, [13, 64]], [1, [14, 64]], [1, [15, 64]], [1, [16, 64]], [1, [17, 64]], [1, [18, 64]], [1, [19, 64]], [1, [20, 64]], [1, [26, 64]], [1, [27, 64]], [1, [28, 64]], [1, [29, 64]], [1, [30, 64]], [1, [31, 64]], [1, [32, 64]], [1, [33, 64]], [1, [34, 64]], [1, [35, 64]], [1, [36, 64]], [1, [37, 64]], [1, [38, 64]], [1, [39, 64]], [1, [40, 64]], [1, [41, 64]], [1, [42, 64]], [1, [43, 64]], [1, [44, 64]], [1, [45, 64]], [1, [46, 64]], [1, [47, 64]], [1, [48, 64]], [1, [49, 64]], [1, [50, 64]], [1, [51, 64]], [1, [52, 64]], [1, [53, 64]], [1, [54, 64]], [1, [55, 64]], [1, [56, 64]], [1, [57, 64]], [1, [58, 64]], [1, [59, 64]], [1, [60, 64]], [1, [61, 64]], [1, [62, 64]], [1, [63, 64]], [1, [64, 64]], [1, [65, 64]], [1, [66, 64]], [1, [67, 64]], [1, [68, 64]], [1, [69, 64]], [1, [70, 64]], [1, [71, 64]], [1, [72, 64]], [1, [73, 64]], [1, [74, 64]], [1, [75, 64]], [1, [76, 64]], [1, [77, 64]], [1, [78, 64]], [1, [79, 64]], [1, [80, 64]], [1, [81, 65]], [1, [81, 66]], [1, [81, 67]], [1, [81, 68]], [1, [81, 69]], [1, [81, 70]], [1, [81, 71]], [1, [81, 72]], [1, [81, 73]], [1, [81, 74]], [1, [81, 75]], [1, [81, 76]], [1, [81, 77]], [1, [81, 78]], [1, [81, 79]], [1, [81, 80]], [1, [81, 81]], [1, [81, 82]], [1, [81, 83]], [1, [81, 84]], [1, [81, 85]], [1, [81, 89]], [1, [81, 90]], [1, [81, 91]], [1, [81, 92]], [1, [81, 93]], [1, [81, 94]], [1, [81, 95]], [1, [81, 96]], [1, [81, 97]], [1, [81, 98]], [1, [81, 99]], [1, [82, 64]], [1, [83, 64]], [1, [84, 64]], [1, [85, 64]], [1, [93, 64]], [1, [94, 64]], [1, [95, 64]], [1, [96, 64]], [1, [97, 64]], [1, [98, 64]], [1, [99, 64]], [1, [81, 0]], [1, [81, 1]], [1, [81, 2]], [1, [81, 3]], [1, [81, 4]], [1, [81, 5]], [1, [81, 6]], [1, [81, 7]], [1, [81, 8]], [1, [81, 9]], [1, [81, 10]], [1, [81, 11]], [1, [81, 12]], [1, [81, 13]], [1, [81, 14]], [1, [81, 15]], [1, [81, 16]], [1, [81, 17]], [1, [81, 18]], [1, [81, 19]], [1, [81, 20]], [1, [81, 21]], [1, [81, 22]], [1, [81, 23]], [1, [81, 24]], [1, [81, 25]], [1, [81, 26]], [1, [81, 27]], [1, [81, 28]], [1, [81, 29]], [1, [81, 30]], [1, [81, 31]], [1, [81, 32]], [1, [81, 33]], [1, [81, 34]], [1, [81, 35]], [1, [81, 36]], [1, [81, 37]], [1, [81, 38]], [1, [81, 39]], [1, [81, 40]], [1, [81, 41]], [1, [81, 42]], [1, [81, 43]], [1, [81, 44]], [1, [81, 45]], [1, [81, 46]], [1, [81, 47]], [1, [81, 48]], [1, [81, 49]], [1, [81, 50]], [1, [81, 51]], [1, [81, 52]], [1, [81, 53]], [1, [81, 54]], [1, [81, 55]], [1, [81, 56]], [1, [81, 57]], [1, [81, 58]], [1, [81, 59]], [1, [81, 60]], [1, [81, 61]], [1, [81, 62]], [1, [81, 63]], [1, [37, 12]], [1, [0, 12]], [1, [1, 12]], [1, [2, 12]], [1, [3, 12]], [1, [4, 12]], [1, [5, 12]], [1, [6, 12]], [1, [7, 12]], [1, [8, 12]], [1, [9, 12]], [1, [10, 12]], [1, [11, 12]], [1, [12, 12]], [1, [13, 12]], [1, [14, 12]], [1, [15, 12]], [1, [16, 12]], [1, [17, 12]], [1, [18, 12]], [1, [19, 12]], [1, [20, 12]], [1, [21, 12]], [1, [22, 12]], [1, [23, 12]], [1, [24, 12]], [1, [25, 12]], [1, [26, 12]], [1, [27, 12]], [1, [28, 12]], [1, [29, 12]], [1, [30, 12]], [1, [31, 12]], [1, [32, 12]], [1, [33, 12]], [1, [34, 12]], [1, [35, 12]], [1, [36, 12]], [1, [37, 13]], [1, [37, 14]], [1, [37, 15]], [1, [37, 16]], [1, [37, 17]], [1, [37, 18]], [1, [37, 19]], [1, [37, 20]], [1, [37, 21]], [1, [37, 22]], [1, [37, 23]], [1, [37, 24]], [1, [37, 25]], [1, [37, 26]], [1, [37, 27]], [1, [37, 28]], [1, [37, 29]], [1, [37, 30]], [1, [37, 31]], [1, [37, 32]], [1, [37, 33]], [1, [37, 34]], [1, [37, 35]], [1, [37, 36]], [1, [37, 37]], [1, [37, 38]], [1, [37, 39]], [1, [37, 40]], [1, [37, 41]], [1, [37, 42]], [1, [37, 43]], [1, [37, 44]], [1, [37, 45]], [1, [37, 46]], [1, [37, 47]], [1, [37, 48]], [1, [37, 49]], [1, [37, 50]], [1, [37, 51]], [1, [37, 52]], [1, [37, 59]], [1, [37, 60]], [1, [37, 61]], [1, [37, 62]], [1, [37, 63]], [1, [38, 12]], [1, [39, 12]], [1, [40, 12]], [1, [41, 12]], [1, [42, 12]], [1, [43, 12]], [1, [44, 12]], [1, [45, 12]], [1, [46, 12]], [1, [47, 12]], [1, [48, 12]], [1, [49, 12]], [1, [50, 12]], [1, [51, 12]], [1, [52, 12]], [1, [53, 12]], [1, [54, 12]], [1, [55, 12]], [1, [56, 12]], [1, [57, 12]], [1, [58, 12]], [1, [59, 12]], [1, [60, 12]], [1, [61, 12]], [1, [62, 12]], [1, [63, 12]], [1, [71, 12]], [1, [72, 12]], [1, [73, 12]], [1, [74, 12]], [1, [75, 12]], [1, [76, 12]], [1, [77, 12]], [1, [78, 12]], [1, [79, 12]], [1, [80, 12]], [1, [37, 0]], [1, [37, 1]], [1, [37, 5]], [1, [37, 6]], [1, [37, 7]], [1, [37, 8]], [1, [37, 9]], [1, [37, 10]], [1, [37, 11]], [1, [26, 30]], [1, [0, 30]], [1, [1, 30]], [1, [6, 30]], [1, [7, 30]], [1, [8, 30]], [1, [9, 30]], [1, [10, 30]], [1, [11, 30]], [1, [12, 30]], [1, [13, 30]], [1, [14, 30]], [1, [15, 30]], [1, [16, 30]], [1, [17, 30]], [1, [18, 30]], [1, [19, 30]], [1, [20, 30]], [1, [21, 30]], [1, [22, 30]], [1, [23, 30]], [1, [24, 30]], [1, [25, 30]], [1, [26, 31]], [1, [26, 32]], [1, [26, 33]], [1, [26, 34]], [1, [26, 35]], [1, [26, 36]], [1, [26, 37]], [1, [26, 38]], [1, [26, 39]], [1, [26, 40]], [1, [26, 41]], [1, [26, 42]], [1, [26, 43]], [1, [26, 44]], [1, [26, 45]], [1, [26, 46]], [1, [26, 47]], [1, [26, 48]], [1, [26, 49]], [1, [26, 50]], [1, [26, 51]], [1, [26, 52]], [1, [26, 53]], [1, [26, 54]], [1, [26, 55]], [1, [26, 56]], [1, [26, 57]], [1, [26, 58]], [1, [26, 59]], [1, [26, 60]], [1, [26, 61]], [1, [26, 62]], [1, [26, 63]], [1, [27, 30]], [1, [28, 30]], [1, [29, 30]], [1, [36, 30]], [1, [26, 13]], [1, [26, 14]], [1, [26, 15]], [1, [26, 16]], [1, [26, 17]], [1, [26, 18]], [1, [26, 26]], [1, [26, 27]], [1, [26, 28]], [1, [26, 29]], [1, [14, 42]], [1, [0, 42]], [1, [1, 42]], [1, [2, 42]], [1, [3, 42]], [1, [11, 42]], [1, [12, 42]], [1, [13, 42]], [1, [14, 43]], [1, [14, 44]], [1, [14, 45]], [1, [14, 46]], [1, [14, 47]], [1, [14, 48]], [1, [14, 49]], [1, [14, 50]], [1, [14, 57]], [1, [14, 58]], [1, [14, 59]], [1, [14, 60]], [1, [14, 61]], [1, [14, 62]], [1, [14, 63]], [1, [15, 42]], [1, [16, 42]], [1, [17, 42]], [1, [18, 42]], [1, [19, 42]], [1, [20, 42]], [1, [21, 42]], [1, [22, 42]], [1, [23, 42]], [1, [24, 42]], [1, [25, 42]], [1, [14, 31]], [1, [14, 32]], [1, [14, 37]], [1, [14, 38]], [1, [14, 39]], [1, [14, 40]], [1, [14, 41]], [1, [60, 36]], [1, [38, 36]], [1, [39, 36]], [1, [40, 36]], [1, [41, 36]], [1, [42, 36]], [1, [43, 36]], [1, [44, 36]], [1, [45, 36]], [1, [46, 36]], [1, [47, 36]], [1, [48, 36]], [1, [49, 36]], [1, [50, 36]], [1, [51, 36]], [1, [52, 36]], [1, [53, 36]], [1, [54, 36]], [1, [55, 36]], [1, [56, 36]], [1, [57, 36]], [1, [58, 36]], [1, [59, 36]], [1, [60, 37]], [1, [60, 38]], [1, [60, 39]], [1, [60, 40]], [1, [60, 41]], [1, [60, 42]], [1, [60, 43]], [1, [60, 44]], [1, [60, 45]], [1, [60, 46]], [1, [60, 47]], [1, [60, 51]], [1, [60, 52]], [1, [60, 53]], [1, [60, 54]], [1, [60, 55]], [1, [60, 56]], [1, [60, 57]], [1, [60, 58]], [1, [60, 59]], [1, [60, 60]], [1, [60, 61]], [1, [60, 62]], [1, [60, 63]], [1, [61, 36]], [1, [62, 36]], [1, [63, 36]], [1, [64, 36]], [1, [65, 36]], [1, [66, 36]], [1, [67, 36]], [1, [68, 36]], [1, [69, 36]], [1, [70, 36]], [1, [71, 36]], [1, [78, 36]], [1, [79, 36]], [1, [80, 36]], [1, [60, 13]], [1, [60, 14]], [1, [60, 15]], [1, [60, 20]], [1, [60, 21]], [1, [60, 22]], [1, [60, 23]], [1, [60, 24]], [1, [60, 25]], [1, [60, 26]], [1, [60, 27]], [1, [60, 28]], [1, [60, 29]], [1, [60, 30]], [1, [60, 31]], [1, [60, 32]], [1, [60, 33]], [1, [60, 34]], [1, [60, 35]], [1, [48, 25]], [1, [38, 25]], [1, [42, 25]], [1, [43, 25]], [1, [44, 25]], [1, [45, 25]], [1, [46, 25]], [1, [47, 25]], [1, [48, 26]], [1, [48, 27]], [1, [48, 28]], [1, [48, 34]], [1, [48, 35]], [1, [49, 25]], [1, [50, 25]], [1, [54, 25]], [1, [55, 25]], [1, [56, 25]], [1, [57, 25]], [1, [58, 25]], [1, [59, 25]], [1, [48, 13]], [1, [48, 14]], [1, [48, 15]], [1, [48, 16]], [1, [48, 17]], [1, [48, 18]], [1, [48, 19]], [1, [48, 20]], [1, [48, 21]], [1, [48, 22]], [1, [48, 23]], [1, [48, 24]], [1, [49, 52]], [1, [38, 52]], [1, [39, 52]], [1, [40, 52]], [1, [44, 52]], [1, [45, 52]], [1, [46, 52]], [1, [47, 52]], [1, [48, 52]], [1, [49, 53]], [1, [49, 61]], [1, [49, 62]], [1, [49, 63]], [1, [50, 52]], [1, [51, 52]], [1, [52, 52]], [1, [53, 52]], [1, [54, 52]], [1, [55, 52]], [1, [56, 52]], [1, [57, 52]], [1, [58, 52]], [1, [59, 52]], [1, [49, 37]], [1, [49, 38]], [1, [49, 39]], [1, [49, 45]], [1, [49, 46]], [1, [49, 47]], [1, [49, 48]], [1, [49, 49]], [1, [49, 50]], [1, [49, 51]], [1, [57, 80]], [1, [0, 80]], [1, [1, 80]], [1, [2, 80]], [1, [3, 80]], [1, [4, 80]], [1, [5, 80]], [1, [6, 80]], [1, [7, 80]], [1, [8, 80]], [1, [9, 80]], [1, [10, 80]], [1, [11, 80]], [1, [12, 80]], [1, [20, 80]], [1, [21, 80]], [1, [22, 80]], [1, [23, 80]], [1, [24, 80]], [1, [25, 80]], [1, [26, 80]], [1, [27, 80]], [1, [28, 80]], [1, [29, 80]], [1, [30, 80]], [1, [31, 80]], [1, [32, 80]], [1, [33, 80]], [1, [34, 80]], [1, [35, 80]], [1, [36, 80]], [1, [37, 80]], [1, [38, 80]], [1, [39, 80]], [1, [40, 80]], [1, [41, 80]], [1, [42, 80]], [1, [43, 80]], [1, [44, 80]], [1, [45, 80]], [1, [46, 80]], [1, [47, 80]], [1, [48, 80]], [1, [49, 80]], [1, [50, 80]], [1, [51, 80]], [1, [52, 80]], [1, [53, 80]], [1, [54, 80]], [1, [55, 80]], [1, [56, 80]], [1, [57, 81]], [1, [57, 82]], [1, [57, 83]], [1, [57, 84]], [1, [57, 92]], [1, [57, 93]], [1, [57, 94]], [1, [57, 95]], [1, [57, 96]], [1, [57, 97]], [1, [57, 98]], [1, [57, 99]], [1, [58, 80]], [1, [64, 80]], [1, [65, 80]], [1, [66, 80]], [1, [67, 80]], [1, [68, 80]], [1, [69, 80]], [1, [70, 80]], [1, [71, 80]], [1, [72, 80]], [1, [73, 80]], [1, [74, 80]], [1, [75, 80]], [1, [76, 80]], [1, [77, 80]], [1, [78, 80]], [1, [79, 80]], [1, [80, 80]], [1, [57, 65]], [1, [57, 66]], [1, [57, 67]], [1, [57, 68]], [1, [57, 69]], [1, [57, 70]], [1, [57, 71]], [1, [57, 72]], [1, [57, 73]], [1, [57, 74]], [1, [57, 75]], [1, [57, 76]], [1, [57, 77]], [1, [57, 78]], [1, [57, 79]], [3, [34, 2]], [3, [16, 3]], [3, [24, 2]], [2, [11, 6]], [2, [7, 7]], [2, [32, 8]], [3, [5, 2]], [2, [9, 4]], [2, [26, 2]], [3, [14, 7]], [3, [8, 5]], [2, [9, 3]], [2, [8, 2]], [2, [12, 8]], [2, [27, 9]], [2, [26, 9]], [3, [22, 2]], [4, [3, 4]], [2, [2, 2]], [2, [26, 5]], [3, [7, 19]], [4, [19, 20]], [3, [13, 24]], [2, [19, 15]], [4, [10, 27]], [3, [23, 20]], [2, [2, 21]], [4, [8, 16]], [3, [15, 26]], [2, [18, 15]], [3, [12, 18]], [2, [20, 25]], [3, [15, 18]], [2, [14, 17]], [2, [16, 22]], [2, [13, 15]], [2, [9, 19]], [2, [8, 36]], [3, [8, 38]], [2, [4, 37]], [2, [2, 39]], [2, [11, 35]], [4, [9, 35]], [2, [4, 34]], [2, [6, 39]], [2, [8, 37]], [3, [2, 59]], [2, [7, 49]], [3, [11, 47]], [4, [11, 54]], [2, [2, 54]], [2, [6, 60]], [4, [2, 46]], [2, [2, 50]], [2, [5, 56]], [2, [3, 57]], [4, [3, 53]], [2, [4, 49]], [2, [5, 55]], [2, [10, 49]], [4, [19, 53]], [3, [19, 61]], [4, [18, 57]], [2, [18, 61]], [2, [21, 56]], [2, [19, 60]], [4, [23, 45]], [4, [20, 49]], [3, [22, 35]], [3, [17, 36]], [2, [19, 37]], [2, [18, 34]], [2, [22, 37]], [2, [22, 34]], [4, [30, 46]], [2, [29, 39]], [2, [33, 38]], [2, [33, 60]], [3, [29, 41]], [2, [34, 50]], [2, [34, 36]], [4, [34, 48]], [3, [31, 59]], [3, [29, 58]], [2, [33, 34]], [2, [29, 53]], [3, [30, 55]], [2, [34, 57]], [2, [32, 52]], [2, [31, 26]], [3, [34, 20]], [2, [30, 16]], [2, [34, 25]], [2, [33, 27]], [3, [32, 16]], [3, [29, 26]], [2, [32, 21]], [2, [41, 22]], [4, [45, 17]], [3, [45, 20]], [2, [41, 21]], [2, [40, 18]], [2, [42, 19]], [4, [41, 28]], [2, [45, 33]], [3, [44, 30]], [2, [41, 32]], [3, [56, 33]], [2, [56, 31]], [2, [54, 31]], [4, [57, 31]], [2, [52, 30]], [4, [54, 19]], [3, [51, 18]], [2, [57, 17]], [2, [54, 18]], [2, [56, 19]], [2, [56, 20]], [2, [54, 17]], [3, [43, 44]], [2, [41, 40]], [2, [46, 41]], [3, [45, 47]], [2, [40, 49]], [2, [40, 43]], [3, [44, 42]], [3, [46, 58]], [3, [43, 56]], [2, [45, 57]], [2, [41, 60]], [2, [41, 56]], [2, [46, 61]], [3, [57, 59]], [3, [52, 58]], [2, [54, 57]], [2, [56, 59]], [2, [53, 61]], [3, [55, 48]], [3, [54, 46]], [2, [53, 43]], [2, [52, 39]], [3, [53, 48]], [2, [57, 41]], [2, [65, 58]], [3, [72, 56]], [4, [74, 53]], [2, [69, 55]], [2, [64, 59]], [2, [64, 41]], [2, [71, 56]], [3, [76, 39]], [2, [74, 46]], [4, [72, 42]], [2, [66, 55]], [2, [67, 49]], [4, [78, 47]], [3, [78, 54]], [2, [64, 48]], [3, [64, 52]], [4, [77, 41]], [3, [67, 55]], [3, [69, 45]], [2, [77, 58]], [2, [66, 49]], [2, [66, 58]], [2, [69, 53]], [2, [75, 49]], [2, [64, 18]], [3, [74, 31]], [4, [75, 29]], [2, [69, 19]], [3, [66, 22]], [2, [70, 29]], [3, [72, 15]], [2, [66, 33]], [2, [73, 25]], [2, [65, 23]], [2, [66, 21]], [3, [76, 27]], [3, [64, 25]], [2, [69, 33]], [2, [63, 17]], [2, [78, 29]], [3, [77, 25]], [2, [68, 32]], [2, [66, 17]], [2, [74, 28]], [2, [69, 18]], [4, [65, 29]], [3, [74, 9]], [2, [55, 3]], [2, [76, 8]], [2, [64, 3]], [4, [76, 4]], [2, [43, 3]], [3, [51, 6]], [4, [71, 3]], [2, [78, 2]], [2, [72, 7]], [2, [46, 2]], [3, [47, 2]], [2, [66, 6]], [2, [71, 2]], [3, [49, 7]], [4, [43, 5]], [4, [52, 8]], [2, [41, 5]], [2, [40, 4]], [2, [58, 4]], [2, [63, 3]], [2, [69, 2]], [3, [56, 2]], [2, [70, 8]], [4, [29, 72]], [2, [32, 77]], [2, [18, 68]], [4, [36, 72]], [2, [51, 67]], [3, [42, 76]], [2, [31, 76]], [4, [8, 73]], [2, [24, 75]], [3, [25, 71]], [4, [49, 75]], [3, [37, 75]], [2, [22, 73]], [4, [48, 77]], [2, [47, 75]], [2, [52, 77]], [3, [20, 71]], [4, [27, 75]], [2, [20, 73]], [2, [26, 68]], [3, [47, 68]], [3, [15, 68]], [3, [45, 71]], [4, [29, 74]], [4, [21, 68]], [3, [37, 70]], [2, [44, 67]], [3, [16, 75]], [2, [28, 67]], [2, [26, 73]], [2, [47, 70]], [2, [4, 69]], [2, [12, 68]], [2, [34, 72]], [4, [3, 88]], [4, [20, 85]], [4, [18, 93]], [2, [5, 96]], [2, [7, 83]], [4, [12, 96]], [2, [17, 87]], [2, [11, 95]], [4, [40, 91]], [3, [33, 91]], [2, [5, 95]], [3, [8, 90]], [3, [26, 83]], [2, [48, 88]], [2, [46, 85]], [3, [19, 89]], [3, [7, 97]], [3, [2, 91]], [2, [26, 88]], [2, [13, 87]], [4, [13, 89]], [2, [41, 90]], [3, [50, 97]], [2, [45, 84]], [4, [22, 84]], [3, [6, 93]], [2, [34, 97]], [4, [47, 89]], [4, [16, 83]], [2, [51, 91]], [2, [52, 88]], [3, [20, 93]], [2, [3, 83]], [2, [15, 95]], [4, [27, 92]], [2, [11, 83]], [2, [15, 85]], [2, [34, 90]], [3, [22, 93]], [4, [45, 93]], [2, [20, 91]], [4, [42, 91]], [3, [74, 94]], [2, [66, 92]], [4, [71, 96]], [3, [74, 85]], [2, [73, 93]], [4, [78, 94]], [3, [76, 90]], [3, [68, 89]], [3, [77, 83]], [2, [68, 92]], [3, [69, 97]], [3, [65, 89]], [3, [71, 86]], [4, [69, 70]], [3, [69, 67]], [4, [72, 73]], [2, [61, 68]], [2, [75, 72]], [2, [64, 74]], [2, [70, 76]], [2, [77, 69]], [2, [68, 72]], [2, [63, 68]], [2, [61, 70]], [4, [65, 73]], [3, [67, 68]], [2, [61, 67]], [3, [74, 75]], [2, [63, 70]], [2, [96, 79]], [2, [92, 82]], [2, [94, 87]], [2, [85, 94]], [2, [96, 97]], [2, [94, 72]], [3, [85, 70]], [3, [86, 78]], [2, [84, 75]], [3, [89, 77]], [2, [85, 85]], [3, [86, 83]], [2, [92, 72]], [4, [92, 89]], [2, [91, 95]], [4, [88, 69]], [2, [91, 72]], [2, [97, 83]], [3, [88, 79]], [3, [90, 96]], [3, [92, 67]], [2, [97, 96]], [2, [97, 92]], [4, [92, 86]], [3, [94, 70]], [2, [91, 88]], [2, [90, 92]], [2, [94, 96]], [2, [97, 68]], [2, [87, 75]], [2, [93, 59]], [3, [91, 39]], [3, [91, 27]], [3, [88, 52]], [3, [86, 12]], [2, [88, 46]], [2, [85, 59]], [3, [87, 23]], [3, [97, 19]], [3, [89, 55]], [2, [97, 48]], [2, [96, 31]], [2, [90, 57]], [4, [95, 54]], [4, [90, 30]], [2, [92, 44]], [3, [86, 51]], [2, [95, 17]], [2, [93, 37]], [2, [84, 26]], [2, [85, 46]], [2, [89, 22]], [4, [95, 23]], [3, [87, 21]], [3, [97, 40]], [4, [90, 36]], [3, [95, 60]], [2, [86, 39]], [2, [95, 36]], [2, [90, 18]], [2, [91, 61]], [3, [84, 42]], [2, [89, 51]], [4, [89, 41]], [3, [92, 2]], [4, [96, 26]], [2, [91, 44]], [2, [88, 41]], [3, [88, 30]], [3, [95, 18]], [2, [95, 22]], [3, [92, 17]], [3, [88, 59]], [2, [86, 45]], [2, [86, 56]], [2, [93, 35]]]