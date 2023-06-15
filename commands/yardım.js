const Discord = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
const embed = new Discord.EmbedBuilder()
.setDescription("!partner-kanal\n!partner-log\n!partner-ol\n!partner-yazı")
message.channel.send({embeds: [embed]})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "yardım"
};
