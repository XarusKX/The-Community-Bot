const arrfunc = require("../modules/array_functionality.js");
const Discord = require('discord.js');

exports.run = async (client, msg, args) => {

    if (args < 2) {
        msg.channel.send(`Missing one or more parameters.\nUse ${client.config.prefix}help showproduct for help.`);
        return;
    }

    let productsObj = {
        title: "",
        product_type: 0
    };

    productsObj.title = args.joinByIndex(" ", 1, args.length-1);

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

    let product = await client.db1.Product.findOne({
        where: {
            title: productsObj.title,
            product_type: productsObj.product_type
        }
    })

    try {
        let embed = new Discord.RichEmbed();
        embed.setTitle(product.title)
            .addField(product.link);

        let responseMessage = await msg.channel.send(embed);
    } catch (error) {
        let responseMessage = await msg.channel.send(":shrug: Something's wrong! Fail to show products :(");
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
    name: "showproduct",
    description: "Show a single product based on name and type.",
    usage: "showproduct <product_type> <product_name>"
};
