const arrfunc = require("../modules/array_functionality.js");

exports.run = (client, msg, args) => {
    let min = 1,
        max = 6;
    if (args.length == 1) {
        let max = Number(args[0]);
    } else if (args.length == 2) {
        min = Number(args[0]);
        max = Number(args[1]);
    }

    msg.channel.send(Math.floor(rd * (max - min + 1)) + min);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "roll",
    description: "Roll a number between <start> and <end>. Default for start is 0 and default for end is 6.",
    usage: "roll <start> <end>"
};
