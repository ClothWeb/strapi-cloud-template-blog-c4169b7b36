'use strict';

const { sanitize } = require('@strapi/utils');

module.exports = {
    async me(ctx) {
        const user = ctx.state.user;

        if (!user) {
            return ctx.unauthorized();
        }

        const userWithRelations = await strapi.entityService.findOne(
            'plugin::users-permissions.user',
            user.id,
            {
                populate: ['country_test'], // Include anything else you need here
            }
        );

        const sanitizedUser = await sanitize.contentAPI.output(userWithRelations, strapi.getModel('plugin::users-permissions.user'));

        ctx.body = sanitizedUser;
    }
};
