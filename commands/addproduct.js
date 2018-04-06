const arrfunc = require("../modules/array_functionality.js");

exports.run = (client, msg, args) => {

  let productsObj = { title: "", link: "", user_id: "", product_type_id: 0, createdAt: new Date()};

  productsObj.title = args.joinByIndex(" ", 2, args.length);
  productsObj.link = args[1];
  switch(args[0].toLowerCase())
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

  client.db1.Users.findOrCreate( { where: { discord_id: msg.author.id }})
    .then(user => {
      productsObj.user_id = user[0].id;

      client.db1.Products.findOrCreate( {
        where: {
          title: productsObj.title,
          link: productsObj.link,
          user_id: productsObj.user_id,
          product_type_id: productsObj.product_type_id,
          createdAt: productsObj.createdAt
        }}).then(product => {
          console.log(`Adding product ${product[0].title} by ${product[0].user_id}`);
          msg.channel.send(":heart_eyes: Yay! Successfully added product!");
        }).catch(() => {
          console.error();
          msg.channel.send(":shrug: Something's wrong! Fail to add product :(");
        });
    }).bind("msg", msg);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "addproduct",
  description: "Add product to database based on user.",
  usage: "Add product"
};
