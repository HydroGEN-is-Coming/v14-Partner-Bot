const Discord = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let kanal = message.mentions.channels.first()
if (!kanal) return message.reply("Lütfen bir kanal etiketle!")
message.reply("Başarıyla Partner Kanalı Ayarlandı!")
db.set(`kanal${message.guild.id}`, kanal.id)
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "partner-kanal"
};
