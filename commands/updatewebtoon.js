const ws = require("../modules/webtoon_scraping.js");

exports.run = (client, msg, args) => {
  msg.delete();
  console.log("Attempting to update webtoon. . .");
  ws.updateWebtoon(client)
    .then( () => {
      msg.channel.send("Success updating webtoon!");
    })
    .catch( () => {
      console.error();
      msg.channel.send("Fail updating webtoon!");
    });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
}

exports.help = {
  name: "updatewebtoon",
  description: "Update webtoon list in database.",
  usage: "Update Webtoon"
}
