module.exports = {
    head: {
        title: 'Tatsuya Amano | 天野辰哉',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'keywords', content: 'Tatsuya Amano' },
            { hid: 'description', name: 'description', content: 'Tatsuya Amano, Osaka University Ph.D. Course Student' }
        ]
    },
    css: [
        "static/reset.css",
    ],
    plugins: [
        { src: "~plugins/ga.js", ssr: false}
    ]
}
