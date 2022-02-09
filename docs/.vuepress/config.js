module.exports = {
    title: "itcjf blog",
    description: "itcjf blog vuepress",
    base: '/',
    themeConfig: {
        searchMaxSuggestions: 10,
        algolia: {
            appId: "AI5QOZ7827",
            apiKey: "10306174b4cb710fe9de532f1d364329",
            indexName: "srbmp-dev",
            algoliaOptions: {
                hitsPerPage: 10,
                facetFilters: ""
            }
        },
        sidebar: [
            '/',
            '/itcjf/my',
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
