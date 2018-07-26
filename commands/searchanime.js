const arrfunc = require("../modules/array_functionality");
const request = require('request');
const jikan = require('../modules/jikan_api');

exports.run = async (client, msg, args) => {

    if (args.length < 1) {
        msg.channel.send(`Missing one or more parameters.\nUse ${client.config.prefix}help searchanime for help.`);
    }

    let searchText = args.joinByIndex(' ');
    try {
        let searchResult = await jikan.search('anime', searchText);
        let responseMessage = await msg.channel.send(searchResult);
    } catch (error) {
        let responseMessage = await msg.channel.send('Something went wrong with the search!');
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "searchanime",
    description: "Search anime through Jikan API.",
    usage: "searchanime <anime_title>"
};
