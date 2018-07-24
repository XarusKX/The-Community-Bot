const arrfunc = require("../modules/array_functionality.js");

exports.run = async (client, msg, args) => {

    if (args.length < 2) {
        msg.channel.send(`Missing one or more parameters.\nUse ${client.config.prefix}help removeproduct for help.`);
        return;
    }

    let productsObj = {
        title: "",
        user_id: "",
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

    let user = await client.db1.User.findOne({
        where: {
            discord: msg.author.id
        }
    });

    let product = await client.db1.Product.findOne({
        where: {
            title: productsObj.title,
            user: user.id,
            product_type: productsObj.product_type
        }
    });

    try {
        console.log(`Deleting product ${product.title}. . .`);
        product.destroy();
        let responseMessage = await msg.channel.send("Product has been deleted.");
    } catch (error) {
        let errorMessage = await msg.channel.send("Error! Fail to delete product.");
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
    name: "removeproduct",
    description: "Remove product from database based on user and existing product.",
    usage: "removeproduct <product_type> <title>"
};
