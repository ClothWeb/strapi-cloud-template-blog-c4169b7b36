'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('plugin::users-permissions.auth', ({ strapi }) => ({
    async register(ctx) {
        const { body } = ctx.request;

        // Ensure required fields are present
        if (!body.username || !body.email || !body.password) {
            return ctx.badRequest('Missing required fields');
        }

        // Call the default register logic
        const defaultRegister = await strapi
            .plugin('users-permissions')
            .controllers.auth.register(ctx);

        // After registration, update extra fields
        const userId = defaultRegister.user.id;

        await strapi.entityService.update('plugin::users-permissions.user', userId, {
            data: {
                last_name: body.last_name,
                first_name: body.first_name,
                phone: body.phone,
                street: body.street,
                postal_code: body.postal_code,
                city: body.city,
            },
        });

        return defaultRegister;
    },
}));
