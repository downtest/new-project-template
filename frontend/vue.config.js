process.env.VUE_APP_API_HOST = process.env.API_HOST

module.exports = {
    runtimeCompiler: true,
    pages: {
        index: {
            entry: 'src/app.js',
            template: 'public/index.html',
            filename: 'index.html',
        },
    },
}
