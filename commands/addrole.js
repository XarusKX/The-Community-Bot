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
            let targetRole = "";
            let found = false;

            guildRoles.forEach(function(guildRole) {
                if (guildRole.name == roleName) {
                    found = true;
                    targetRole = guildRole.id;
                }
            });
            if (targetRole != "") {
                if (memberRoles.length == 0) {
                    guildMember.addRole(targetRole);
                    msg.channel.send("Role added!")
                        .then(m => {
                            m.delete(2000);
                        });
                } else {
                    memberRoles.forEach(function(memberRole) {
                        if (memberRole == targetRole.id) {
                            found = true;
                            msg.channel.send("You already have this role!")
                                .then(m => {
                                    m.delete(2000);
                                });
                        } else {
                            found = true;
                            guildMember.addRole(targetRole)
                                .then(() => {
                                    msg.channel.send("Role added!")
                                        .then(m => {
                                            m.delete(2000);
                                        });
                                })
                                .catch(error => {
                                    console.error;
                                    msg.channel.send(`Fail to add role. Reason: ${error.message}`);
                                });

                        }
                    });
                }
            }

            if (!found) {
                msg.channel.send("Role not found!")
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
    name: "addrole",
    description: "Give role to user.",
    usage: "addrole <rolename>"
};
