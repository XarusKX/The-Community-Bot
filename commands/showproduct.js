const arrfunc = require("../modules/array_functionality.js");
const Discord = require("discord.js");

exports.run = (client, msg, args) => {

  let productsObj = { title: "", user_id: "", product_type_id: 0 };
  let discordId = args[0].replace(/[^0-9]/gi, "");
  let showPage = "";

  if (args[2]) showPage = args[2].replace(/[^0-9]/gi, "");
  if (!showPage) showPage = 1;

  switch(args[1].toLowerCase())
  {
    case "art":
      productsObj.product_type_id = 1;
      break;
    case "comic":
      productsObj.product_type_id = 2;
      break;
    case "poet":
      productsObj.product_type_id = 3;
      break;
    case "story":
      productsObj.product_type_id = 4;
      break;
  }

  client.db1.Users.findOne( { where: { discord_id: discordId }})
    .then(user => {
      productsObj.user_id = user.id;

      client.db1.Products.findAll( {
        where: {
          user_id: productsObj.user_id,
          product_type_id: productsObj.product_type_id
        }}).then(product => {
          let embed = new Discord.RichEmbed();
          for (let i = showPage - 1; i < showPage + 10; i++)
          {
            if (i >= product.length) break;
            embed.addField(product[i].title, product[i].link);
          }
          console.log(`Showing product ${showPage} - ${showPage + 10}. . .`);
          msg.channel.send(embed);
        }).catch(() => {
          console.error();
          msg.channel.send(":shrug: Something's wrong! Fail to show products :(");
        });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "showproduct",
  description: "Show product from database based on user, title, and type.",
  usage: "showproduct <mention_user> <product_type> <page, default = 1>"
};
