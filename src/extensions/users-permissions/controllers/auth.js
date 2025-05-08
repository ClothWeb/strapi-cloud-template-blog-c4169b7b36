'use strict';

const { sanitize } = require('@strapi/utils');
const utils = require('@strapi/utils');
const { ValidationError } = utils.errors;

module.exports = {
    async register(ctx) {
        const pluginStore = strapi.store({ type: 'plugin', name: 'users-permissions' });

        const settings = await pluginStore.get({ key: 'advanced' });
        const { email, username, password, ...rest } = ctx.request.body;

        if (!email) throw new ValidationError('Email is required');
        if (!username) throw new ValidationError('Username is required');
        if (!password) throw new ValidationError('Password is required');

        // Check if the user already exists
        const conflictingUser = await strapi.query('plugin::users-permissions.user').findOne({
            where: { $or: [{ email: email.toLowerCase() }, { username }] },
        });

        if (conflictingUser) throw new ValidationError('Email or username already taken');

        const newUser = {
            email: email.toLowerCase(),
            username,
            password,
            ...rest, // This will include your custom fields like userlastname, phone, etc.
            provider: 'local',
            confirmed: !settings.email_confirmation
        };

        const createdUser = await strapi.query('plugin::users-permissions.user').create({ data: newUser });

        // Optionally send confirmation email, etc.

        // Generate token
        const token = strapi.service('plugin::users-permissions.jwt').issue({ id: createdUser.id });

        const sanitizedUser = await sanitize.contentAPI.output(createdUser, strapi.getModel('plugin::users-permissions.user'));

        ctx.send({
            jwt: token,
            user: sanitizedUser,
        });
    }
};
