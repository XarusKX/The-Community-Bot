const arrfunc = require("../modules/array_functionality.js");
const Discord = require('discord.js');

exports.run = (client, msg, args) => {

    if (args < 2) {
        msg.channel.send(`Missing one or more parameters.\nUse ${client.config.prefix}help showproduct for help.`);
    }

    let productsObj = {
        title: "",
        product_type_id: 0
    };

    productsObj.title = args.joinByIndex(" ", 1, args.length-1);

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

    client.db1.Product.findOne({
        where: {
            title: productsObj.title,
            product_type_id: productsObj.product_type_id
        }
    }).then(product => {
        let embed = new Discord.RichEmbed();
        embed.setTitle(product.title)
            .addField(product.link);

        msg.channel.send(embed);
    }).catch(error => {
        console.log(error);
        msg.channel.send(":shrug: Something's wrong! Fail to show products :(");
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
    description: "Show a single product based on name and type.",
    usage: "showproduct <product_type> <product_name>"
};
