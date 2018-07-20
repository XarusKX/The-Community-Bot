const arrfunc = require("../modules/array_functionality.js");
const fs = require('fs');
const request = require('request');

exports.run = (client, msg, args) => {

    if (args < 3) {
        msg.channel.send(`Missing one or more parameters.\nUse ${client.config.prefix}help addproduct for help.`);
    }

    let productsObj = {
        title: "",
        link: "",
        user_id: "",
        product_type_id: 0,
        createdAt: new Date()
    };

    if (args[args.length-1] == '--save') {
        var save = true;
    }

    productsObj.title = args.joinByIndex(" ", 2, (save)?args.length-2:args.length-1);
    productsObj.link = args[1];

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

    client.db1.User.findOrCreate({
        where: {
            discord_id: msg.author.id
        }
    })
    .spread((user, created) => {
        productsObj.user_id = user.id;

        client.db1.Product.findOrCreate({
            where: {
                title: productsObj.title,
                link: productsObj.link
            },
            defaults: {
                user_id: productsObj.user_id,
                product_type_id: productsObj.product_type_id,
                createdAt: productsObj.createdAt
            }
        })
        .spread((product, created) => {
            let download = function(uri, filename, callback) {
                request.head(uri, function(err, res, body) {
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };

            if (save) {
                if (!fs.existsSync(`./images/${product.title}.jpg`)) {
                    download(product.link, `./images/${product.title}.jpg`, function() {
                        console.log(`Saved image from ${product.user_id} as ${product.title}.jpg`);
                        console.log(`Adding product ${product.title} by ${product.user_id}`);
                        msg.channel.send(":heart_eyes: Yay! Successfully added product! (Picture saved)");
                    });

                } else {
                    msg.channel.send('Fail to save! File already exist.');
                }
            } else if (created) {
                console.log(`Adding product ${product.title} by ${product.user_id}`);
                msg.channel.send(":heart_eyes: Yay! Successfully added product! (Picture not saved)");
            } else {
                msg.channel.send('Product already exist, unable to add.');
            }
        })
        .catch(() => {
            console.error();
            msg.channel.send(":shrug: Something's wrong! Fail to add product :(");
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
    name: "addproduct",
    description: "Add product to database based on user.",
    usage: "addproduct <product_type> <link> <title>\nproduct_type: art, comic, poet, story"
};
