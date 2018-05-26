module.exports = {
    head: {
        title: 'Tatsuya Amano | 天野辰哉',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ]
    },
    css: [
        "static/reset.css",
    ],
    plugins: [
        { src: "~plugins/ga.js", ssr: false}
    ]
}
