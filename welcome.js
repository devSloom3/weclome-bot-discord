const { Client, GatewayIntentBits, EmbedBuilder, ChannelType } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(` Bot logged in as ${client.user.tag}`);

  client.user.setPresence({
    activities: [{ name: 'My Server ', type: 3 }], // It will be: Watching My Server :: 0 PLAYING :: 2 LISTENING :: 3 WATCHING
    status: 'online',
  });
});

client.on('guildMemberAdd', async (member) => {
  // Replace with your welcome channel ID:
  const welcomeChannelId = '1379640980835401868';

  const channel = member.guild.channels.cache.get(welcomeChannelId);
  if (!channel) {
    console.log(' Welcome channel not found');
    return;
  }
// Message title and welcome message
  const welcomeEmbed = new EmbedBuilder()
    .setTitle('Welcome to {{ EPIC SERVER ')
    .setDescription(`
<@${member.id}> welcome legand

<#4303059839636363663> for rules  
<#1319356810349307536> for support 
<#1319356893943468349> for roles
    `) //ID Your channel that you want to mention in a welcome message



    // Welcome message image/gif folder
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setImage('attachment://welcome.gif');

  channel.send({
    embeds: [welcomeEmbed],
    files: [{
      attachment: './welcome.gif',
      name: 'welcome.gif'
    }],
  }).catch(console.error);
});

client.login(process.env.DISCORD_TOKEN);
