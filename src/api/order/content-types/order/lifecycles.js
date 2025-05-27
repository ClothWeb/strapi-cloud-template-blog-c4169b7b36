export default {
    async beforeCreate(event) {
        const { data } = event.params;
        const user = event.context.state.user;
        if (user) {
            data.user = user.id;
        }
    }
};