exports.run = (client, msg, args) => {
  msg.delete();
  msg.channel.send("Ping?").then(m => m.edit(`Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API latency is ${Math.round(client.ping)}ms`) );
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
  usage: "Ping"
};
