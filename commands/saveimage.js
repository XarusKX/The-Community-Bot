const fs = require('fs');
const request = require('request');
const arrfunc = require("../modules/array_functionality.js");

exports.run = (client, msg, args) => {

    if (args.length < 2) {
        console.log('Insufficient parameter for command saveimage.');
        msg.channel.send('Insufficient parameter for command saveimage requires 2 parameters.');
        return;
    }

    let download = function(uri, filename, callback) {
        request.head(uri, function(err, res, body) {
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };

    let name = args.joinByIndex(' ', 1, args.length);

    if (!fs.existsSync(`./images/${name}`)) {
        download(args[0], `./images/${name}`, function() {
            console.log(`Saved image from ${args[0]} as ${name}`);
        });
    } else {
        msg.channel.send('Fail to save! File already exist.');
    }

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "saveimage",
    description: "Save image from given url.",
    usage: "saveimage <url>"
};
