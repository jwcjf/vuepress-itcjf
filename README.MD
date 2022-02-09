# 开发文档
# docker lgolia-scraper 启动命令
docker run -d --name algolia-scraper-dev --env-file=.env -e "CONFIG=$(cat ./docs/algolia.json | jq -r tostring)" algolia/docsearch-scraper
