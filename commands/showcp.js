const arrfunc = require("../modules/array_functionality.js");
const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
    let messageDelete = await msg.delete();

    if (args.length < 1) {
        let responseMessage = await msg.channel.send(`Missing one or more parameters.\nUse ${client.config.prefix}help cp for help.`);
        return;
    }

    let title = args.joinByIndex(" ", 0, args.length - 1 );

    let cpProblem = await client.db1.CompetitiveProgrammingProblem.findOne({
        where: {
            title: { $like: `%${title}%` }
        }
    });

    cpProblem = cpProblem.dataValues;

    let embed = new Discord.RichEmbed()
        .setTitle(cpProblem.title)
        .setDescription(cpProblem.detail)
        .setTimestamp()
        .setURL(cpProblem.source_url)
        .setColor(0x3fd953)
        .addField('Input Detail', cpProblem.input_detail)
        .addField('Output Detail', cpProblem.output_detail)
        .addField('Input Sample', `\`\`\`\n${cpProblem.input_sample}\`\`\``)
        .addField('Output Sample', `\`\`\`\n${cpProblem.output_sample}\`\`\``);

    if (cpProblem.note != null) embed.addField('Note', cpProblem.note);

    let responseMessage = await msg.channel.send(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "showcp",
    description: "Show competitive programming question based on title.",
    usage: "cp <title>"
};
