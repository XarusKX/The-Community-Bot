// Important Keys
const discordToken = "YOUR_TOKEN";
const prefix = "YOUR_PREIFX";


// CLI Styling
const cliColor = (color) => {
  const RED = "\033[0;31m";
  const GREEN = "\033[0;32m";
  const NC = "\033[0m";
  switch(color){
    case "RED":
      return RED;
    case "GREEN":
      return GREEN;
    case "NC":
      return NC;
    default:
      console.log(`${"\033[0;31m"}Color doesn't exist!${NC}`);
      return NC;
  }
}

// Database Setup
const databaseNames = ["DATABASE_NAME"];
const databaseUsers = ["DATABASE_USERNAME"];
const databasePasswords = ["DATABASE_PASSWORD"];
const databaseHosts = ["DATABASE_HOST"];
var databaseObj = function(name, user, password, host){
  this.name = name;
  this.user = user;
  this.password = password;
  this.host = host;
}
var db = [];
for(let i = 0; i < databaseNames.length; i++)
{
  db.push(new databaseObj(databaseNames[i], databaseUsers[i], databasePasswords[i], databaseHosts[i]));
}

module.exports.discordToken = discordToken;
module.exports.prefix = prefix;
module.exports.db = db;
module.exports.cliColor = cliColor;
