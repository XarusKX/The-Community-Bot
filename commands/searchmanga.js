const arrfunc = require("../modules/array_functionality");
const request = require('request');
const jikan = require('../modules/jikan_api');

exports.run = async (client, msg, args) => {

    if (args < 1) {
        msg.channel.send(`Missing one or more parameters.\nUse ${client.config.prefix}help searchmanga for help.`);
    }

    let searchText = args.joinByIndex(' ');
    try {
        let searchResult = await jikan.search('manga', searchText);
        msg.channel.send(searchResult);
    } catch (error) {
        msg.channel.send('Something went wrong with the search!');
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "searchmanga",
    description: "Search manga through Jikan API.",
    usage: "searchmanga <manga_title>"
};
