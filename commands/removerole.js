const arrfunc = require("../modules/array_functionality.js");

exports.run = (client, msg, args) => {
    msg.delete();

    let roleName = args.joinByIndex(' ', 0);
    let author = msg.author;
    msg.guild.fetchMember(author)
        .then(guildMember => {
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
                memberRoles.forEach(function(memberRole) {
                    if (memberRole == targetRoleId) {
                        found = true;
                        guildMember.removeRole(memberRole)
                            .then(() => {
                                msg.channel.send("Role removed!")
                                    .then(m => {
                                        m.delete(2000);
                                    });
                            })
                    }
                });
            }

            if (!found) {
                msg.channel.send("Role doesn't exist in this guild!")
                    .then(m => {
                        m.delete(2000);
                    });
            }
        })
        .catch(console.error);
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
