const fs = require('fs')
const path = require('path')
const args = process.argv

const appId = args[2]

if (!appId) {
  console.log('Missing AppId...')
  process.exit(1)
}

const manifestJsonPath = path.join(process.cwd(), './src/manifest.json')
if (fs.existsSync(manifestJsonPath)) {
  let manifestJson = fs.readFileSync(manifestJsonPath, 'utf-8')
  try {
    manifestJson = JSON.parse(manifestJson)
  } catch (error) {
    console.log(
      `Reading Manifest error: ` +
      `${ error.message }`
    )
    process.exit(1)
  }
  manifestJson['mp-weixin'].appid = appId
  fs.writeFileSync(manifestJsonPath, JSON.stringify(manifestJson, null, 2))
}
