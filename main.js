const Discord = require("discord.js");
const Client = new Discord.Client();
const Database = require("./database/database.js");
const fs = require("fs");
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");
Client.config = require("./config/main-config.js");
Client.db1 = Database.db1;

Client.commands = new Enmap();
Client.aliases = new Enmap();

fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err);
    console.log(`${Client.config.cliColor("GREEN")}Loading a total of ${files.length} commands.`);
    files.forEach(file => {
        if (file.split(".").slice(-1)[0] !== "js") return;
        let props = require(`./commands/${file}`);
        Client.commands.set(props.help.name, props);
        if (props.init) props.init(Client);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

fs.readdir('./events/', (err, files) => {
    if (err) console.error(err);
    console.log(`${Client.config.cliColor("GREEN")}Loading a total of ${files.length} events.`);
    files.forEach(file => {
        if (file.split(".").slice(-1)[0] !== "js") return
        const eventName = file.split(".")[0];
        const event = require(`./events/${file}`);
        Client.on(eventName, event.bind(null, Client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

fs.readdir('./modules/', (err, files) => {
    if (err) console.error(err);
    console.log(`${Client.config.cliColor("GREEN")}Loading a total of ${files.length} modules.`);
    files.forEach(file => {
        if (file.split(".").slice(-1)[0] !== "js") return;
        let props = require(`./modules/${file}`);
    });
});

Client.login(Client.config.discordToken);
