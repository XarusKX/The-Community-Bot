const ws = require("../modules/webtoon_scraping.js");

exports.run = (client, msg, args) => {

  let url = "";
  let title = args.join(" ");

  client.db1.Webtoon.findOne({
    where: { title: title},
    attributes: ["link"]
  }).then(item => {
    let data = ws.showWebtoon(client, msg, item.link);
  }).catch(err => {
    console.error();
  }).bind("msg", msg);
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
  usage: "Search Webtoon"
}
