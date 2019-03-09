const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/daxun", {
            target: "https://www.daxunxun.com",
            changeOrigin: true,
            pathRewrite: { // 自己配置代理必须加这句话
                '^/daxun': ''
            }
        })
    );
    app.use(
        proxy("/mi", {
            target: "http://39.98.41.185/api",
            changeOrigin: true,
            pathRewrite: { // 自己配置代理必须加这句话
                '^/mi': ''
            }
        })
    );
};