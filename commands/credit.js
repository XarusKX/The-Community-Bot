const Discord = require("discord.js");

exports.run = (client, msg, args) => {
  msg.delete();
  let embed = new Discord.RichEmbed()
    .setDescription("This is Webcomics Manager. A discord bot made using **Webcomics Hub!** server as its model for features and requirement.")
    .setURL("https://discordapp.com")
    .setColor(235456)
    .setAuthor("AnthonyRicardoKX", "https://avatars2.githubusercontent.com/u/16017472?s=60&v=4", "https://github.com/AnthonyRicardoKX/Webtoon-Hub-Bot")
    .setFooter("Discord: Xarus Dederic#7266", "https://cdn.discordapp.com/avatars/241156061036412928/2871ca2286f174cd405cec882b887a88.png")
    .addField("Commands (prefix: wh!):", "addproduct\ncredit\nping\nremoveproduct\nsearchproduct\nsearchwebtoon\nshowproduct\nupdatewebtoon", true);

  msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "credit",
  description: "Show bot details.",
  usage: "Credit"
};
