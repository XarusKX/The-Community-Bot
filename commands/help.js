exports.run = async (client, msg, args) => {

    if (args < 1) {
        let responseMessage = await msg.channel.send('Error!. Not enough arguments.');
        responseMessage.delete(2000);
        return;
    } else {
        cmd = client.commands.get(args[0].toLowerCase());

        if (!cmd) {
            let responseMessage = await msg.channel.send('Error! No such command exist.');
            responseMessage.delete(2000);
        } else {

            let cmdDescription = cmd.help.description;
            let cmdUsage = cmd.help.usage;

            try {
                console.log(`Request instruction on wh!${cmd.help.name} by ${msg.author.id}`);
                let responseMessage = await msg.channel.send(`\`\`\`${cmdDescription}\nwh!${cmdUsage}\`\`\``);
            } catch (error) {
                let errorMessage = await msg.channel.send('Whoops! Looks like an error has occurred!');
                console.log(error);
            }
        }
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "help",
    description: "Show parameters and usage of a command.",
    usage: "help <command name>"
};
