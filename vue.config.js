module.exports = {
    publicPath: '/',
    chainWebpack: config => {
        config.module.rule('svg').uses.clear();

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
