const path = require('path');
const fs = require('fs');
const OS = require('os');

const mediaQuery = new Map([
  ['pc', `@media screen and (min-width: 1025px) `],
  ['phone', `@media screen and (max-width: 768px) `],
  ['pad', `@media screen and (min-width: 769px) and (max-width: 1024px) `],
]);

module.exports = function (source) {
  const platforms = Array.from(mediaQuery.keys());

  // index.mq.pc.less

  const { resourcePath } = this;

  // less文件名(含有扩展名)
  const fileName = resourcePath.substring(resourcePath.lastIndexOf(path.sep) + 1);

  // less文件名(无扩展名)
  const fileNameNoExtName = fileName.substring(0, fileName.lastIndexOf('.'));

  // 文件所在目录路径
  const dirName = resourcePath.substring(0, resourcePath.lastIndexOf(path.sep));

  // console.log('fileName', fileName);

  // console.log('dirName', dirName);

  // 查看是否有下述三个文件，如果有则引入
  // ${fileName}.mq.pc.less
  // ${fileName}.mq.phone.less
  // ${fileName}.mq.pad.less

  let mqStr = '';

  platforms.forEach((platform) => {
    // 存在指定文件
    const mqLessPath = path.join(dirName, `${fileNameNoExtName}.mq.${platform}.less`);

    if (!fs.existsSync(mqLessPath)) return false;

    const mqFileContent = fs.readFileSync(mqLessPath, { encoding: 'utf-8' });

    mqStr += `${mediaQuery.get(platform)} {${OS.EOL} ${mqFileContent} ${OS.EOL}}`;
  });

  return source + mqStr;
};
