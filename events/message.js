const warned = [];
const YandexTranslator = require('yandex.translate');

module.exports = async (client, message) => {
    if (message.mentions.users.has(client.user.id) || message.mentions.everyone || (message.guild && message.mentions.roles.filter(r => message.guild.member(client.user.id).roles.has(r.id)).size > 0)) {
        const chan = !!message.guild ? `${message.guild.name} #${message.channel.name}` : "";
        client.mentions.set(message.id, {
            chan,
            id: message.id,
            ts: message.createdTimestamp,
            author: {
                id: message.author.id,
                avatar: message.author.avatarURL(),
                tag: message.author.tag
            },
            mEveryone: message.mentions.everyone,
            mUser: message.mentions.users.has(client.user.id),
            mRole: (message.guild && message.mentions.roles.filter(r => message.guild.member(client.user.id).roles.has(r.id)).size > 0),
            content: message.content
        });
    }

    // if(message.author.id !== client.user.id) return;
    if (message.author.bot) return;

    if (message.content.indexOf(client.config.prefix) !== 0) {
        let translator = new YandexTranslator(client.config.yandex.translationToken);
        translator.detect(message.content)
            .then(res => {
                console.log(res);
                if (res != 'en' && res != '') {
                    message.delete();
                    message.channel.send(':no_entry: This channel/server allows only english language.')
                        .then(m => {
                            m.delete(1000);
                        });
                }
            });
    } else {
        const args = message.content.split(/ +/g);
        const command = args.shift().slice(client.config.prefix.length).toLowerCase();
        const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

        if (cmd) {
            message.flags = [];
            while (args[0] && args[0][0] === "-") {
                message.flags.push(args.shift().slice(1));
            }
            cmd.run(client, message, args);
        } else if (client.tags.has(command)) {
            message.edit(`${args.join(" ")} ${client.tags.get(command).contents}`);
        }
    }

};
