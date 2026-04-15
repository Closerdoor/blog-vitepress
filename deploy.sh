#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git -c user.name="wicked" -c user.email="178787622@qq.com" commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# https://github.com/Closerdoor/blog-vitepress
git push -f git@github.com:Closerdoor/blog-vitepress.git HEAD:gh-pages

cd -
