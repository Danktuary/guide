// eslint-disable-next-line no-undef
Vue.component('discord-messages', {
	template: '\
		<div class="discord-messages">\
			<slot></slot>\
		</div>\
	',
});

// eslint-disable-next-line no-undef
Vue.component('discord-message', {
	template: '\
		<div class="discord-message">\
			<div class="author-avatar">\
				<img :src="avatarSrc" :alt="author" />\
			</div>\
			<div class="message-content">\
				<div class="author-header">\
					<span class="author-username">{{ author }}</span>\
					<span v-if="bot" class="bot-tag">Bot</span>\
				</div>\
				<div class="message-body">\
					<slot></slot>\
				</div>\
			</div>\
		</div>\
	</div>\
	',

	props: {
		author: String,
		avatar: String,
		bot: Boolean,
	},

	data: function() {
		return {
			avatarSrc: '',
		};
	},

	created: function() {
		var defaultAvatars = {
			user: '/assets/img/discord-avatar-user.png',
			blue: '/assets/img/discord-avatar-blue.png',
			green: '/assets/img/discord-avatar-green.png',
		};

		this.avatarSrc = defaultAvatars[this.avatar] || this.avatar || defaultAvatars.blue;
	},
});
