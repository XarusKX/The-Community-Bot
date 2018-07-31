const arrfunc = require("../modules/array_functionality.js");
const fs = require('fs');
const request = require('request');

exports.run = async (client, msg, args) => {

    if (args.length < 3) {
        msg.channel.send(`Missing one or more parameters.\nUse ${client.config.prefix}help addproduct for help.`);
        return;
    }

    let productsObj = {
        title: "",
        link: "",
        user: "",
        product_type: 0,
        created_at: new Date()
    };
    let download = function(uri, filename, callback) {
        request.head(uri, function(err, res, body) {
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        })
    };

    if (args[args.length-1] == '--save') {
        var save = true;
    }
    let created = false;

    productsObj.title = args.joinByIndex(" ", 2, (save)?args.length-2:args.length-1);
    productsObj.link = args[1];

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

    let user = await client.db1.User.findOrCreate({
        where: {
            discord: msg.author.id
        }
    });

    let product = await client.db1.Product.findOne({
        where: {
            title: productsObj.title,
            link: productsObj.link
        },
        defaults: {
            user: user[0].dataValues.id,
            product_type: productsObj.product_type,
            created_at: productsObj.created_at
        }
    });

    if (user) user = user[0].dataValues;
    if (product) {
        product = product.dataValues;
        created = true;
    }

    try{
        if (save && !created && productsObj.product_type == 1) {
            if (!fs.existsSync(`./images/${productsObj.title}.jpg`)) {
                download(productsObj.link, `./images/${productsObj.title}.jpg`, async function() {
                    console.log(`Saved image from ${productsObj.user} as ${productsObj.title}.jpg`);
                    console.log(`Adding product ${productsObj.title} by ${productsObj.user}`);
                    try {
                        let newProduct = await client.db1.Product.create({
                            title: productsObj.title,
                            link: productsObj.link,
                            user: user.id,
                            product_type: productsObj.product_type,
                            created_at: productsObj.created_at
                        });
                        let responseMessage = await msg.channel.send(":heart_eyes: Yay! Successfully added product! (Picture saved)");
                    } catch (error) {
                        let responseMessage = await msg.channel.send('Error! Recheck parameter.')
                        console.log(error);
                    }
                });
            } else {
                let responseMessage = await msg.channel.send('Error! File already exist.');
            }
        } else if (!created) {
            try {
                console.log(`Adding product ${productsObj.title} by ${productsObj.user}`);
                let newProduct = await client.db1.Product.create({
                    title: productsObj.title,
                    link: productsObj.link,
                    user: user.id,
                    product_type: productsObj.product_type,
                    created_at: productsObj.created_at
                });
                let responseMessage = await msg.channel.send(":heart_eyes: Yay! Successfully added product! (Picture not saved)");
            } catch (error) {
                let responseMessage = await msg.channel.send('Error! Recheck parameter.')
                console.log(error);
            }
        } else {
            let responseMessage = await msg.channel.send('Error! Product already exist.');
        }
    } catch (error) {
        let responseMessage = await msg.channel.send("Error! Fail to add product.");
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
    name: "addproduct",
    description: "Add product to database based on user.",
    usage: "addproduct <product_type> <link> <title>\nproduct_type: art, comic, poet, story"
};
