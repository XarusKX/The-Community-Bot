exports.run = (client, msg, args) => {
  msg.delete();

  if (args < 1) {
    msg.channel.send("Not enough arguments.")
      .then(m => {
        m.delete(2000);
        return;
      })
  } else {
    cmd = client.commands.get(args[0].toLowerCase());
    if (!cmd) {

      msg.channel.send("No such command exist.")
        .then(m => {
          m.delete(2000);
        });

    } else {

      let cmdDescription = cmd.help.description;
      let cmdUsage = cmd.help.usage;
      msg.channel.send(`\`\`\`${cmdDescription}\nwh!${cmdUsage}\`\`\``)
        .then(m => {
          console.log(`Request instruction on ${cmd} by ${msg.author.id}`);
        })
        .catch(m => {
          m.delete();
          msg.channel.send("Whoops! Looks like an error has occurred!");
          console.error();
          console.log("Something is wrong!");
        });

    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "command",
  description: "Show parameters and usage of a command.",
  usage: "command <command name>"
};
