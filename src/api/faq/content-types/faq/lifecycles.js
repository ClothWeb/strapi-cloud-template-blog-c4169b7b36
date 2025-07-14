const { marked } = require("marked");

module.exports = {
    beforeCreate(event) {
        const { data } = event;
        if (data.content_md) {
            data.content_html = marked(data.content_md);
        }
    },
    beforeUpdate(event) {
        const { data } = event;
        if (data.content_md) {
            data.content_html = marked(data.content_md);
        }
    },
};