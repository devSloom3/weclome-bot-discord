# Welcome Bot for Discord

This is a Discord welcome bot that automatically sends a greeting message to new members when they join your server.

## Features
- Sends a custom welcome message mentioning the new member.
- Mentions specific channels such as rules, support, and roles.
- Adds a GIF or welcome image for each new member.
- Sets the bot's presence (status) as: Watching My Server.

## Requirements
- Node.js >= 16
- [discord.js](https://discord.js.org/) library
- A `.env` file containing:

## Customization

Replace welcomeChannelId with your own welcome channel ID.

Edit the messages in welcomeEmbed.setDescription to fit your server.

Add GIFs or images in the same folder or update the file paths in the code.

Adjust the bot's presence (activities) to display the desired activity type (Playing, Listening, Watching, etc.).

# Notes

Make sure the bot has the proper permissions (Send Messages, Embed Links, Attach Files).
