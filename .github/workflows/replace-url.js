var fs = require('fs');
var path = require('path');

const yml = fs.readFileSync(path.resolve(process.env.GITHUB_WORKSPACE, 'style.yml'), {encoding: 'utf-8'})
const data = yml.replace(/\$GITHUB_ACTOR/g, process.env.GITHUB_ACTOR)
fs.writeFileSync(path.resolve(process.env.GITHUB_WORKSPACE, 'style.yml'), data)