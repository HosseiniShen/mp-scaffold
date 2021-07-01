const fs = require('fs')
const path = require('path')
const targetPath = process.argv[2]

const rootPath = process.cwd()
const ext = rootPath.endsWith('.vue') ? '' : '.vue'
const _path = path.join(rootPath, `./src/${ targetPath }${ ext }`)

if (targetPath && fs.existsSync(_path)) {
  const destPath = path.join(rootPath, `./src/pages/test/index.vue`)
  linkSym(_path, destPath)
}

function linkSym (target, ob) {
  if (fs.existsSync(ob)) {
    const stat = fs.lstatSync(ob)
    if (stat.isSymbolicLink()) {
      console.log('isSymbolicLink')
      return
    }
    console.log('unlinkSync')
    fs.unlinkSync(ob)
  }
  fs.symlinkSync(target, ob)
}
