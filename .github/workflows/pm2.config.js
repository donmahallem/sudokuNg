module.exports = {
    apps: [{
        name: "app",
        script: "./dist/server",
        exec_mode: "fork",
        watch: false,
        autorestart: true,
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}