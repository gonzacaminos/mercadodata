const path = require('path');

module.exports = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
      postCssPlugins: [
        require("tailwindcss"),
        require("./tailwind.config.js")
      ]
    },
    images: {
      domains: ['http2.mlstatic.com'],
    }
}