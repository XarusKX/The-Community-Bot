const ws = require("../modules/webtoon_scraping.js");

exports.run = async (client, msg, args) => {
    let url = "";
    let title = args.join(" ");

    let webtoon = await client.db1.Webtoon.findOne({
        where: {
            title: title
        },
        attributes: ["link"]
    });

    try {
        if (!webtoon) {
            let responseMessage = await msg.channel.send("The webtoon is undetected :( If you think this is a mistake, please contact the admin.");
            console.log("Searched webtoon undetected, please update database.");
            responseMessage.delete(2000);
        }
        let data = ws.showWebtoon(client, msg, webtoon.link);
    } catch (error) {
        console.log(error);
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3
}

exports.help = {
    name: "searchwebtoon",
    description: "Search for specific webtoon in the database.",
    usage: "searchwebtoon <title>"
}
