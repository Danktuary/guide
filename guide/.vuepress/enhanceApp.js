import DiscordMessage from 'vue-discord-message';

export default ({ Vue }) => {
	Vue.use(DiscordMessage, {
		avatars: {
			djs: require('../assets/images/discord-avatar-djs.png'),
		},
	});
};
