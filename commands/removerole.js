const arrfunc = require("../modules/array_functionality.js");

exports.run = async (client, msg, args) => {
    let roleName = args.joinByIndex(' ', 0);
    let author = msg.author;
    let guildMember = await msg.guild.fetchMember(author);

    /* Guild Roles are in object */
    let guildRoles = guildMember.guild.roles;
    /* Member Roles are in id */
    let memberRoles = guildMember._roles;
    let targetRoleId = "";
    let found = false;

    guildRoles.forEach(function(guildRole) {
        if (guildRole.name == roleName) {
            targetRoleId = guildRole.id;
        }
    });

    if (targetRoleId != "") {
        memberRoles.forEach(async function(memberRole) {
            if (memberRole == targetRoleId) {
                found = true;
                let removedRole = await guildMember.removeRole(memberRole);
                let responseMessage = await msg.channel.send("Role removed!");
                responseMessage.delete(2000);
            }
        });
    }

    if (!found) {
        let responseMessage = await msg.channel.send("Role doesn't exist in this guild!");
        responseMessage.delete(2000);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "removerole",
    description: "Remove role from user.",
    usage: "removerole <rolename>"
};
