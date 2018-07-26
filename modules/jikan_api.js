let request = require('request');
const Discord = require("discord.js");
const Database = require("../database/database.js");

let baseUrl = 'https://api.jikan.moe/';

function animeLink(id, parameter = '') {
    let url = `${baseUrl}/anime/${id}/${parameter}`;
    return url;
}

function mangaLink(id, parameter = '') {
    let url = `${baseUrl}/manga/${id}/${parameter}`;
    return url;
}

function searchLink(type, title) {
    title = encodeURIComponent(title);
    let url = `${baseUrl}/search/${type}?q=${title}`;
    return url;
}

module.exports.getOneAnime = async (id) => {
    let url = animeLink(id, '');

    return new Promise(function (resolve, reject) {
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let result = JSON.parse(body);

                if (result == null) {
                    return reject(new Error('Result not exist.'));
                }
                let embed = new Discord.RichEmbed()
                    .setTitle(result['title'])
                    .setAuthor('Webcomics Manager')
                    .setDescription(result['synopsis'])
                    .setFooter(result['rating'])
                    .setImage(result['image_url'])
                    // .setThumbnail()
                    .setTimestamp()
                    .setURL(result['link_canonical'])
                    .setColor(0x3fd953);

                return resolve(embed);
            } else if (error) {
                return reject(new Error(error));
            }
        });
    });
}

module.exports.getOneManga = async (id, parameter = '') => {
    let url = mangaLink(id, '');
}

module.exports.search = async (type, title) => {
    let url = searchLink(type, title);

    return new Promise(function (resolve, reject) {
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let result = JSON.parse(body)['result'];
                if (!result.length) {
                    return reject(new Error('Result not exist.'));
                }

                let embed = new Discord.RichEmbed()
                    .setTitle(`Search Result: ${title}`)
                    .setAuthor('Webcomics Manager')
                    .setColor(0x3fd953);

                for(let i = 0; i < Math.min(5, result.length); i++) {
                    let id = result[i]['mal_id'];
                    let title = result[i]['title'];
                    let description = result[i]['description'];
                    if (description.length < 1) description = '-';
                    embed.addField(`${title} (id: ${id})`, description);
                }

                return resolve(embed);
            } else if (error) {
                return reject(new Error(error));
            }
        });
    });
};
