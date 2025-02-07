module.exports = {
    apps: [{
        name: 'FrontEnd',
        script: 'npm',
        args: 'run preview',
        env: {
            NODE_ENV: 'production',
        },
        error_file: './logs/err.log',
        out_file: './logs/out.log'
    }]
}