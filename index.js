const {PermissionsBitField, EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder } = require("discord.js");
const config = require("./config.js");
const db = require("croxydb")
const client = new Client({
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")


const modal = new ModalBuilder()
.setCustomId('form')
.setTitle('Godzilla - Partner Text!')
  const a1 = new TextInputBuilder()
  .setCustomId('yazi')
  .setLabel('Partner Text')
  .setStyle(TextInputStyle.Paragraph) 
  .setPlaceholder('Texi Girin.')
  .setRequired(true)
  const row = new ActionRowBuilder().addComponents(a1);
  
  modal.addComponents(row);
client.on('interactionCreate', async (interaction) => {

	if(interaction.customId === "partner_yazi"){
    await interaction.showModal(modal);
	}
})  
client.on('interactionCreate', async interaction => {
  if (interaction.type !== InteractionType.ModalSubmit) return;
  if (interaction.customId === 'form') {
    const yazi = interaction.fields.getTextInputValue('yazi')
interaction.reply({content: "Partner Text Başarıyla Ayarlandı!", ephemeral: true})
db.set(`text_${interaction.guild.id}`, yazi)
  }
})
client.on("interactionCreate", async interaction => {
  if (!interaction.isButton()) return;
  let message = await interaction.channel.messages.fetch(interaction.message.id)
  if(interaction.customId == "evet") {
    let kanal = db.fetch(`kanal${interaction.guild.id}`)
    let text = db.fetch(`text_${interaction.guild.id}`)
    let digersw = db.fetch(`partnerlikbekleniyor_${interaction.guild.id}`)
    let as = digersw
    let text2 = db.fetch(`text_${as}`)
    let kanal2 = db.fetch(`kanal${as}`)
    client.channels.cache.get(kanal).send(text2)
    client.channels.cache.get(kanal2).send(text)
    message.delete()
    db.delete(`partnerlikbekleniyor_${interaction.guild.id}`)
  }
  if(interaction.customId == "hayır") {
    let message = await interaction.channel.messages.fetch(interaction.message.id)
    message.delete()
    let digersw = db.fetch(`partnerlikbekleniyor_${interaction.guild.id}`)
    let as = digersw
    let log = db.fetch(`log${as}`)
    client.channels.cache.get(log).send(interaction.guild.name + " Adlı Sunucu Partnerlik İsteğini Reddetti.")
  }
})
client.login(config.token)