from os import getenv
from loguru import logger as log
from discord import Bot, Intents

from commands.sibyl import Sibyl
from commands.psycho_pass import PsychoPass
from commands.dominator import Dominator
from events.ready import Ready
from events.guild import GuildEvents
from events.member import MemberEvents
from events.message import MessageEvents


intents = Intents.default()
intents.guilds = True
intents.guild_messages = True
intents.moderation = True
intents.members = True
intents.message_content = True
bot = Bot(intents=intents)


cogs = [Sibyl, PsychoPass, Dominator, Ready, GuildEvents, MemberEvents, MessageEvents]
for cog in cogs:
    bot.add_cog(cog(bot))
    log.debug("registered cog: {}", cog.__name__)

log.info("starting sibylmod discord bot...")
bot.run(getenv("DISCORD_BOT_TOKEN"))