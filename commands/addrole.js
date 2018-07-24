const arrfunc = require("../modules/array_functionality.js");

exports.run = async (client, msg, args) => {

    let roleName = args.joinByIndex(' ', 0);
    let author = msg.author;
    let guildMember = await msg.guild.fetchMember(author);

    let guildRoles = guildMember.guild.roles;
    let memberRoles = guildMember._roles;
    let targetRole = "";
    let found = false;
    let exist = false;

    guildRoles.forEach( function(guildRole) {
        if (guildRole.name == roleName) {
            exist = true;
            targetRole = guildRole.id;
        }
    });

    if (exist) {
        if (memberRoles.length == 0) {
            console.log(`Adding role id ${targetRole} to user ${author.id}`);
            let addRole = await guildMember.addRole(targetRole);
            let responseMessage = await msg.channel.send('Role added!');
            responseMessage.delete(2000);
        } else {
            memberRoles.forEach(async function(memberRole) {
                if (memberRole == targetRole) {
                    found = true;
                    let responseMessage = await msg.channel.send("You already have this role!");
                    responseMessage.delete(2000);
                }
            });
        }

        if (!found) {
            try {
                console.log(`Adding role id ${targetRole} to user ${author.id}`);
                let newRole = await guildMember.addRole(targetRole);
                let responseMessage = await msg.channel.send('Role added!');
            } catch (error) {
                let responseMessage = await msg.channel.send(`Error! Fail to add role.`);
                console.log(error);
            }
        }
    } else {
        let responseMessage = await msg.channel.send('Error! Role not found.');
    }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "addrole",
    description: "Give role to user.",
    usage: "addrole <rolename>"
};
