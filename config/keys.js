// enviornment logic, need to commit
if (product.env.NODE_ENV === 'production') {
    module.exports = require("./prod");
} else {
    module.exports = require("./dev");
}
