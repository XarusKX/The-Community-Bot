const arrfunc = require("../modules/array_functionality.js");
const objfunc = require("../modules/object_functionality.js");
const Discord = require("discord.js");

exports.run = (client, msg, args) => {
  msg.delete();

  let i = 0;
  let guildRoles = msg.guild.roles;
  let guildShowRole = [];
  let embed = new Discord.RichEmbed();
  let page = args[0];

  if(!Number.isInteger(parseInt(page))) {
    page = 1;
  }

  guildRoles.forEach(function(guildRole) {
    guildShowRole[i++] = {
      title: guildRole.name,
      id: guildRole.id
    }
  });
  guildShowRole.sort(objfunc.compareFuncByTitle);

  let guildRoleSize = guildShowRole.length;
  let maxPage = Math.ceil(guildRoleSize / 10);
  let start = ((page - 1) * 10) + 1;
  let end = (10 * page) + 1;
  let string = "";

  if(end > guildRoleSize) end = guildRoleSize;
  for(i = start; i < end; i++) {
    string += `${guildShowRole[i].title}\n`;
  }

  embed.setAuthor("Webcomics Manager")
    .setColor(235456)
    .setFooter("Send at: " + new Date())
    .addField(`Role List (Page ${page}/${maxPage})`, string, false);

  msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "listrole",
  description: "List all the server's roles.",
  usage: "listrole"
};
