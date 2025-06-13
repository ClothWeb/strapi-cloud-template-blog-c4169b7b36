// In extensions/users-permissions/controllers/user.js
const { sanitize } = require('@strapi/utils');

module.exports = {
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.entityService.findOne('plugin::users-permissions.user', id, {
            populate: ['country']
        });

        const sanitizedEntity = await sanitize.contentAPI.output(entity, strapi.getModel('plugin::users-permissions.user'), ctx);
        return this.transformResponse(sanitizedEntity);
    }
};
