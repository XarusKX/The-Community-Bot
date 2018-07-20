const arrfunc = require("../modules/array_functionality.js");
const Discord = require('discord.js');

exports.run = (client, msg, args) => {

    let productsObj = {
        title: "",
        user_id: "",
        product_type_id: 0
    };

    productsObj.title = args.joinByIndex(" ", 1, args.length);
    switch (args[0].toLowerCase()) {
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

    client.db1.Product.findAll({
        where: {
            title: { $like: `%${productsObj.title}%`},
            product_type_id: productsObj.product_type_id
        }
    }).then(product => {
        console.log(`Searching product(s) ${productsObj.title}. . .`);

        let embed = new Discord.RichEmbed();
        for (let i = 0; i < 10; i++) {
            if (i >= product.length) break;
            embed.addField(product[i].title, product[i].link);
        }
        msg.channel.send(embed);

    }).catch(error => {
        console.log(error);
        msg.channel.send(":shrug: Something's wrong! Fail to search product. Product may not exist or filter is incorrect.");
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "searchproduct",
    description: "Search product from database based on title and type.",
    usage: "searchproduct <product_type> <title>"
};
