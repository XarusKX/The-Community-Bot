const arrfunc = require("../modules/array_functionality.js");

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

    client.db1.Users.findOne({
            where: {
                discord_id: msg.author.id
            }
        })
        .then(user => {
            productsObj.user_id = user.id;

            client.db1.Products.findOne({
                where: {
                    title: productsObj.title,
                    user_id: productsObj.user_id,
                    product_type_id: productsObj.product_type_id
                }
            }).then(product => {
                console.log(`Searching product ${product.title}. . .`);
                msg.channel.send(`\`\`\`${product.title} - ${product.link}\`\`\``);
            }).catch(() => {
                console.error();
                msg.channel.send(":shrug: Something's wrong! Fail to delete product :(");
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
    name: "searchproduct",
    description: "Search product from database based on title and type.",
    usage: "searchproduct <product_type> <title>"
};
