const Discord = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let kanal = message.mentions.channels.first()
if (!kanal) return message.reply("Lütfen bir log kanalı etiketle!")
message.reply("Başarıyla Partner Logu Ayarlandı!")
db.set(`log${message.guild.id}`, kanal.id)
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "partner-log"
};
