const Discord = require("discord.js");

const TOKEN = "MzkxOTY3NDY0MDY3Njk0NTky.DRhsTg.FWA5Vz3McsviNg8T7EFhuuj3rOg";
const PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "forums":
        message.channel.sendMessage("Join Our Server Forums at http://www.FatalityMC.net");
        break;
    }
});

bot.login(TOKEN);