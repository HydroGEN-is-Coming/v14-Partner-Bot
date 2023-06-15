const Discord = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
   const embed = new Discord.EmbedBuilder()
   .setTitle("Godzilla - Partner System")
   .setDescription("Aşağıdaki butondan partner yazısını ayarlayabilirsin!")
const row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setLabel("Yazı Ayarla!")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("partner_yazi"))
message.reply({embeds: [embed], components: [row]})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "partner-yazı"
};
