const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
    let embed = new Discord.RichEmbed()
        .setDescription('This is Webcomics Manager. A discord bot made using **Webcomics Hub!** server as its model for features and requirement.')
        .setURL('https://discordapp.com')
        .setColor(235456)
        .setAuthor('AnthonyRicardoKX', 'https://avatars2.githubusercontent.com/u/16017472?s=60&v=4', 'https://github.com/AnthonyRicardoKX/Webtoon-Hub-Bot')
        .setFooter('Discord: Xarus Dederic#7266', 'https://cdn.discordapp.com/avatars/241156061036412928/2871ca2286f174cd405cec882b887a88.png')
        .addField('Commands (prefix: wh!):',
        'addproduct\n' +
        'addrole\n' +
        'credit\n' +
        'help\n' +
        'listproduct\n' +
        'listrole\n' +
        'ping\n' +
        'removeproduct\n' +
        'removerole\n' +
        'roll\n' +
        'schedulewebtoon\n' +
        'searchanime\n' +
        'searchmanga\n' +
        'searchproduct\n' +
        'searchwebtoon\n' +
        'showanime\n' +
        'showmanga\n' +
        'showproduct\n' +
        'updatewebtoon'
        , true);

    let responseMessage = await msg.channel.send(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "credit",
    description: "Show bot details.",
    usage: "credit"
};
