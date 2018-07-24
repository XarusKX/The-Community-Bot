const arrfunc = require("../modules/array_functionality.js");
const Discord = require("discord.js");

exports.run = async (client, msg, args) => {

    if (args.length < 2) {
        msg.channel.send(`Missing one or more parameters.\nUse ${client.config.prefix}help listproduct for help.`);
        return;
    }

    let productsObj = {
        title: "",
        user: "",
        product_type: 0
    };
    let discordId = args[0].replace(/[^0-9]/gi, "");
    let showPage = "";

    if (args[2]) showPage = args[2].replace(/[^0-9]/gi, "");
    if (!showPage) showPage = 1;

    switch (args[1].toLowerCase()) {
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

    let user = await client.db1.User.findOne({
        where: {
            discord: discordId
        }
    });

    let products = await client.db1.Product.findAll({
        where: {
            user: user.id,
            product_type: productsObj.product_type
        }
    });

    try {
        let startIndex = (showPage - 1) * 10;
        let endIndex = startIndex + 9;
        let embed = new Discord.RichEmbed();
        for (let i = startIndex; i < endIndex; i++) {
            if (i >= products.length) break;
            embed.addField(products[i].title, products[i].link);
        }
        let responseMessage = await msg.channel.send(embed);
        console.log(`Showing product ${startIndex} - ${endIndex}. . .`);
    } catch (error) {
        let responseMessage = await msg.channel.send('Error! Fail to show products.');
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
    name: "listproduct",
    description: "Show product from database based on user, title, and type.",
    usage: "listproduct <mention_user> <product_type> <page, default = 1>"
};
