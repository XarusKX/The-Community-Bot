module.exports = async (client, message) => {
  console.log(`${client.config.cliColor("NC")}I am ready!`);
  client.db1.Db.authenticate()
    .then(() => {
      console.log(`${client.config.cliColor("GREEN")}Connection has been established!${client.config.cliColor("NC")}`);
    })
    .catch(err => {
      console.error(`${client.config.cliColor("RED")}Unable to connect!${client.config.cliColor("NC")}`);
      return;
    })
}
