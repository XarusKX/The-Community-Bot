exports.run = async (client, msg, args) => {
    let responseMessage = await msg.channel.send('Ping?');
    responseMessage = responseMessage.edit(`Pong! Latency is ${responseMessage.createdTimestamp - msg.createdTimestamp}ms. API latency is ${Math.round(client.ping)}ms`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "ping",
    description: "Ping bot latency and API latency.",
    usage: "ping"
};
