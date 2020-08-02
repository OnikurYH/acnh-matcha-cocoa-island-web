module.exports = {
    publicPath: '/',
    chainWebpack: config => {
        config.module.rule('svg').uses.clear();

        // svgRule.uses.clear();

        // svgRule.use('svg-inline-loader').loader('svg-inline-loader');

        config.module
            .rule('svg-image')
            .test(/(assets\/images).*\.svg$/)
            .use('file-loader')
            .loader('file-loader')
            .end();

        config.module
            .rule('svg-static-locations')
            .test(/(assets\/static-locations).*\.svg$/)
            .use('svg-inline-loader')
            .loader('svg-inline-loader')
            .end();
    },
};
