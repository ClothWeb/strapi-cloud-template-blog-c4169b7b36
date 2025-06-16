// /src/extensions/users-permissions/strapi-server.js

module.exports = (plugin) => {
    plugin.controllers.user.me = async (ctx) => {
        console.log('CUSTOM /me endpoint hit');
        const user = ctx.state.user;

        if (!user) {
            return ctx.unauthorized();
        }

        const fullUser = await strapi.entityService.findOne(
            'plugin::users-permissions.user',
            user.id,
            {
                //populate: ['country_test', 'billing_country'], // add anything you want to fetch
                populate: ['country_test'], // add anything you want to fetch
            }
        );

        const sanitizedUser = await strapi.utils.sanitize.contentAPI.output(fullUser, strapi.getModel('plugin::users-permissions.user'));

        ctx.body = sanitizedUser;
    };

    return plugin;
};
