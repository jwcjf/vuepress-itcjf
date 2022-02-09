module.exports = {
    title: "itcjf blog",
    description: "itcjf blog vuepress",
    base: '/vuepress-itcjf/',
    themeConfig: {
        searchMaxSuggestions: 10,
        algolia: {
            appId: "AI5QOZ7827",
            apiKey: "10306174b4cb710fe9de532f1d364329",
            indexName: "itcjf-blog",
            algoliaOptions: {
                hitsPerPage: 10,
                facetFilters: ""
            }
        },
        sidebar: [
            '/',
            '/itcjf/APIJSON使用文档',
            '/itcjf/docker指令使用记录',
            '/itcjf/jasypt实现数据脱敏',
            '/itcjf/xxl-job使用文档',
        ],
        nav: [
            {
                text: '文档',
                ariaLabel: '文档',
                items: [
                    { text: 'my', link: '/itcjf/my' },
                    { text: 'xxl-job使用文档', link: '/itcjf/xxl-job使用文档' },
                    { text: 'docker指令使用记录', link: '/itcjf/docker指令使用记录' },
                    { text: 'jasypt实现数据脱敏', link: '/itcjf/jasypt实现数据脱敏' },
                    { text: 'xxl-job使用文档', link: '/itcjf/xxl-job使用文档' },
                ]
            }
        ],

        repo: "https://github.com/jwcjf/vuepress-itcjf",
        repoLabel: "github",
        lastUpdated: 'Last Updated',

    },
    plugins: [
        ["@tencent/vuepress-plugin-element-tabs"],
        [
            'fulltext-search',
            {
                tokenize: 'full',
                split: /\s+/,
                encode: 'icase',
            },
        ],
    ]
};
