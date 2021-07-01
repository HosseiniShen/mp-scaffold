const { execFile } = require('child_process')
const fs = require('fs')
const path = require('path')
const os = require('os')

let hasSetup = false
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.done.tap('setupDevtool', compilation => {
            if (!hasSetup) {
              const ext = os.platform() === 'darwin' ? '' : '.cmd'
              const mpCli = path.resolve(process.cwd(), `./node_modules/.bin/mp-cli${ ext }`)
              if (fs.existsSync(mpCli)) {
                const child = execFile(mpCli, [ 'open', '-D' ], (error, stdout, stderr) => {
                  if (error) {
                    console.log(error)
                  }
                  hasSetup = true
                })
                child.stdout.pipe(process.stdout)
                process.stdin.pipe(child.stdin)
              }
            }
          });
        }
      })
    }
  }
}
