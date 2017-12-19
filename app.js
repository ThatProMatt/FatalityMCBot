const Discord = require("discord.js");
const client = new Discord.Client();

const PREFIX = "!";

client.on("ready", function() {
    console.log("Ready");
});

client.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "ping":
        message.channel.sendMessage("Pong!");
        break;
    }
});

client.login(process.env.BOT_TOKEN);
