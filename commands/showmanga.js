const arrfunc = require("../modules/array_functionality");
const request = require('request');
const jikan = require('../modules/jikan_api');

exports.run = async (client, msg, args) => {

    if (args < 1) {
        msg.channel.send(`Missing one or more parameters.\nUse ${client.config.prefix}help showmanga for help.`);
    }

    try {
        let result = await jikan.getOneManga(args[0]);
        msg.channel.send(result);
    } catch (error) {
        console.log(error);
        msg.channel.send('Something went wrong with the data retrieval!');
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "showmanga",
    description: "Show manga information through Jikan API.",
    usage: "showmanga <manga_id>"
};
