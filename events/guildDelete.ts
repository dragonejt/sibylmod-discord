import { Guild } from "discord.js";
import { startSpan } from "@sentry/node";
import Communities from "../clients/backend/communities.js";

export default async function guildDelete(guild: Guild) {
    startSpan({
        name: `guildDelete ${guild.id} ${Date.now()}`
    }, () => onGuildDelete(guild));
}

async function onGuildDelete(guild: Guild) {
    Communities.delete(guild.id);
    guild.client.guilds.fetch();
    guild.client.user.setPresence({ activities: [{ name: `${guild.client.guilds.cache.size} Servers`, type: 3 }] });
    console.log(`SibylMod has been removed from Server: ${guild.name} (${guild.id})`);
}
