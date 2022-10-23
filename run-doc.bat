@echo off

echo.
echo 启动前端知识库文档
echo.

start http://localhost:5173/ && npm run docs:dev

pause