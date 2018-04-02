const Discord = require("discord.js");
const Client = new Discord.Client();
const fs = require("fs");
const Config = require("./config.js");
const f_Message = require("./message.js");

const Database = require("./Database/database.js");
const Conn = Database.Database;

Client.on("ready", () => {
  console.log("I am ready");
  Conn.Db.authenticate()
    .then(() => {
      console.log("Connection has been established!");
    })
    .catch(err => {
      console.error("Unable to connect!");
    })
});

Client.on("message", message => {
  if (message.author.bot) return;
});

Client.login(Config.DiscordToken);
