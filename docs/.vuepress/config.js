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
