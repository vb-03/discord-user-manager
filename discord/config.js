/**
 * Configuration settings specifically for the Discord Bot
 * @see {@link DiscordAdapter}.
 */

module.exports = {
  // Prefix for bot commands.
  prefix: "!",
  // Bot token (see: https://discord.com/developers/applications/)
  token: process.env.DISCORD_BOT_TOKEN,
  // The guild (or server) ID.
  guildId: process.env.DISCORD_SERVER_ID,
  // Channel to post welcome messages.
    welcomeChannel: process.env.DISCORD_WELCOME_CHANNEL,
  // Channel to log messages to.
    logChannel: process.env.DISCORD_LOG_CHANNEL,
  // Default role for new members.
    defaultRole: process.env.DISCORD_DEFAULT_ROLE,
  // Reactions => roles
  roles: {
    "1⃣": "y1",
    "2⃣": "y2",
    "3⃣": "y3",
    "4⃣": "y4",
    "🤖": "pr",
    "🎨": "va",
    "💭": "dp",
    "🎓": "alumni",
    "👍": "test",
  },
};
