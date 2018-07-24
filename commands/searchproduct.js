const arrfunc = require("../modules/array_functionality.js");
const Discord = require('discord.js');

exports.run = async (client, msg, args) => {

    let productsObj = {
        title: "",
        user: "",
        product_type: 0
    };

    productsObj.title = args.joinByIndex(" ", 1, args.length);
    switch (args[0].toLowerCase()) {
        case "art":
            productsObj.product_type = 1;
            break;
        case "comic":
            productsObj.product_type = 2;
            break;
        case "poet":
            productsObj.product_type = 3;
            break;
        case "story":
            productsObj.product_type = 4;
            break;
    }

    let products = await client.db1.Product.findAll({
        where: {
            title: { $like: `%${productsObj.title}%`},
            product_type: productsObj.product_type
        }
    })

    try {
        console.log(`Searching product(s) ${productsObj.title}. . .`);
        let embed = new Discord.RichEmbed();
        for (let i = 0; i < 10; i++) {
            if (i >= product.length) break;
            embed.addField(product[i].title, product[i].link);
        }
        let responseMessage = await msg.channel.send(embed);
    } catch (error) {
        let responseMessage = await msg.channel.send(":shrug: Something's wrong! Fail to search product. Product may not exist or filter is incorrect.");
        console.log(error);
    }
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
