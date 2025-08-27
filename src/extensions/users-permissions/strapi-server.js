module.exports = (plugin) => {
	const { ethers } = require('ethers');

	plugin.controllers.user = {
		...plugin.controllers.user,
		async linkWallet(ctx) {
			try {
				const authUser = ctx.state.user;
				if (!authUser) {
					return ctx.unauthorized('Authentication required');
				}
				const { walletAddress, message, signature } = ctx.request.body || {};
				if (!walletAddress || !message || !signature) {
					return ctx.badRequest('Missing walletAddress, message or signature');
				}

				// Verify signature
				let recovered;
				try {
					recovered = ethers.verifyMessage(message, signature);
				} catch (err) {
					return ctx.badRequest('Invalid signature');
				}
				if (recovered.toLowerCase() !== walletAddress.toLowerCase()) {
					return ctx.badRequest('Signature does not match walletAddress');
				}

				// Ensure uniqueness
				const existing = await strapi
					.query('plugin::users-permissions.user')
					.findOne({ where: { walletAddress: walletAddress.toLowerCase() } });
				if (existing && existing.id !== authUser.id) {
					return ctx.conflict('Wallet already linked to another account');
				}

				// Update current user
				await strapi.query('plugin::users-permissions.user').update({
					where: { id: authUser.id },
					data: { walletAddress: walletAddress.toLowerCase() },
				});

				ctx.body = { success: true, walletAddress: walletAddress.toLowerCase() };
			} catch (error) {
				ctx.throw(500, error);
			}
		},
	};

	plugin.routes['content-api'].routes.push({
		method: 'POST',
		path: '/link-wallet',
		handler: 'user.linkWallet',
		config: {
			policies: [],
		},
	});

	return plugin;
}; 