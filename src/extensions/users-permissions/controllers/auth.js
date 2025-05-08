const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('plugin::users-permissions.auth', ({ strapi }) => ({
    async register(ctx) {
        const response = await super.register(ctx);
        const { user } = response;

        // Update additional user fields right after registration
        await strapi.entityService.update('plugin::users-permissions.user', user.id, {
            data: {
                last_name: ctx.request.body.last_name,
                first_name: ctx.request.body.first_name,
                phone: ctx.request.body.phone,
                street: ctx.request.body.street,
                postal_code: ctx.request.body.postal_code,
                city: ctx.request.body.city,
            }
        });

        return response;
    }
}));
