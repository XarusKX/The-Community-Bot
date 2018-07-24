const arrfunc = require("../modules/array_functionality.js");

exports.run = async (client, msg, args) => {
    let min = 1,
        max = 6
        rd = Math.random();

    if (args.length > 3) {
        msg.channel.send(`Missing one or more parameters.\nUse ${client.config.prefix}help roll for help.`);
        return;
    }

    try {
        if (args.length == 1) {
            max = Number(args[0]);
        } else if (args.length == 2) {
            min = Number(args[0]);
            max = Number(args[1]);
        }

        let responseMessage = await msg.channel.send(Math.floor(rd * (max - min + 1)) + min);
    } catch (error) {
        let responseMessage = await msg.channel.send('Error! Something is wrong.');
        console.log(error);
    }
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
