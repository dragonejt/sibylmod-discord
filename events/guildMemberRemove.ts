import { PartialGuildMember, GuildMember } from "discord.js";
import { startSpan } from "@sentry/node";
import { CommunityPsychoPasses } from "../clients/backend/psychopass/communityPsychoPasses.js";

export default async function guildMemberRemove(member: GuildMember | PartialGuildMember) {
    startSpan({
        name: `guildMemberRemove ${member.user.id} ${Date.now()}`
    }, () => onGuildMemberRemove(member));
}

async function onGuildMemberRemove(member: GuildMember | PartialGuildMember) {
    console.log(`@${member.user.username} (${member.user.id}) has left Server: ${member.guild.name} (${member.guild.id})`);
    CommunityPsychoPasses.update(member.guild.id, member.user.id);
}
