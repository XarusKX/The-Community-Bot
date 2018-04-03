const Discord = require("discord.js");
const Client = new Discord.Client();
const Database = require("./database/database.js");
const fs = require("fs");
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");
Client.config = require("./config.js");
Client.db1 = Database.Database;



Client.commands = new Enmap();
Client.aliases = new Enmap();

fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`${Client.config.cliColor("GREEN")}Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    if (f.split(".").slice(-1)[0] !== "js") return;
    let props = require(`./commands/${f}`);
    Client.commands.set(props.help.name, props);
    if(props.init) props.init(Client);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir('./events/', (err, files) => {
  if (err) console.error(err);
  console.log(`${Client.config.cliColor("GREEN")}Loading a total of ${files.length} events.`);
  files.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    Client.on(eventName, event.bind(null, Client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

Client.login(Client.config.discordToken);
