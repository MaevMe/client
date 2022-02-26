import type {
  RESTGetAPICurrentUserResult,
  RESTAPIPartialCurrentUserGuild,
} from 'discord-api-types/v9'

type Guilds = { guilds: RESTAPIPartialCurrentUserGuild[] }
type User = RESTGetAPICurrentUserResult & Guilds

export default User
