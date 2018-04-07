const ws = require("../modules/webtoon_scraping.js");

exports.run = (client, msg, args) => {
  msg.delete();

  let url = "";
  let title = args.join(" ");

  client.db1.Webtoons.findOne({
    where: { title: title},
    attributes: ["link"]
  }).then(item => {
    if (!item) {
      console.log("Searched webtoon undetected, please update database.");
      msg.channel.send("The webtoon is undetected :( If you think this is a mistake, please contact the admin.")
        .then(m => {
          m.delete(2000);
        });
    }
    let data = ws.showWebtoon(client, msg, item.link);
  }).catch(err => {
    console.error();
  });
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
