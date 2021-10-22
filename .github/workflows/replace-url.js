var fs = require('fs');
var path = require('path');

const GITHUB_WORKSPACE = process.argv[2];

const yml = fs.readFileSync(path.resolve(GITHUB_WORKSPACE, 'style.yml'), {encoding: 'utf-8'})
const data = yml.replace(/\$GITHUB_REPOSITORY/g, process.env.GITHUB_REPOSITORY)
fs.writeFileSync(path.resolve(GITHUB_WORKSPACE, 'style.yml'), data)