const AutoPrefixer = require("autoprefixer");
const px2rem = require("postcss-px2rem");
module.exports = ({ file }) => {
    let remUnit = 37.5
    return {
        plugins: [
            px2rem({ remUnit: remUnit}),
            AutoPrefixer({ overrideBrowserslist: ["last 20 versions", "android >= 5.0"] })
        ]
    }
}
