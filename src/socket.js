EzyLogger.debug = true;

var ZONE_NAME = "survival2d";
var PLUGIN_NAME = "survival2d";

var handshakeHandler = new EzyHandshakeHandler();
handshakeHandler.getLoginRequest = function (context) {
    return [ZONE_NAME, "Guest", "123456", []];
}

var userLoginHandler = new EzyLoginSuccessHandler();
userLoginHandler.handleLoginSuccess = function () {
    var pluginInfoRequest = [PLUGIN_NAME];
    this.client.send(EzyCommand.PLUGIN_INFO, pluginInfoRequest);
}

var pluginInfoHandler = new EzyPluginInfoHandler();
pluginInfoHandler.postHandle = function (plugin, data) {
    console.log("setup socket client completed");
}

var disconnectionHandler = new EzyDisconnectionHandler();
disconnectionHandler.preHandle = function (event) {
}

var config = new EzyClientConfig;
config.zoneName = ZONE_NAME;
var clients = EzyClients.getInstance();
var client = clients.newDefaultClient(config);
var setup = client.setup;
setup.addEventHandler(EzyEventType.DISCONNECTION, disconnectionHandler);
setup.addDataHandler(EzyCommand.HANDSHAKE, handshakeHandler);
setup.addDataHandler(EzyCommand.LOGIN, userLoginHandler);
setup.addDataHandler(EzyCommand.PLUGIN_INFO, pluginInfoHandler);
var setupPlugin = setup.setupPlugin(PLUGIN_NAME);
setupPlugin.addDataHandler("spin", function (plugin, data) {
    cc.log(JSON.stringify(data));
    // prize = data.result;
    // playGame.prototype.spin();
});

cc.log("Start connect");
client.connect("ws://127.0.0.1:2208/ws");

var sendSpinRequest = function () {
    var plugin = client.getPlugin();
    if (plugin != null) {
        plugin.send("spin");
    }
}

var sendTestRequest = function () {
    cc.log("sendTestRequest");
    var plugin = client.getPlugin();
    if (plugin != null) {
        plugin.send("test", {
            "arr": [1, 2, 3, 4],
            "obj": {
                key: "value"
            },
            "tests": [
                {
                    name: "test1",
                    position: {
                        x: 0,
                        y: 1
                    }
                }, {
                    name: "tiennmnon",
                    position: {
                        x: 0.2,
                        y: 1.3
                    }
                }
            ]
        });
    }
}
