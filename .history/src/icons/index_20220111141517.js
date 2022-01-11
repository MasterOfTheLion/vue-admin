// 导入所有的svg图标
// 完成SvgIcon的全局注册

const svgRequire = require.context('./svg', false, /\.svg$/)

console.log(svgRequire.keys())
svgRequire.keys().foreach((svgIcon) => svgRequire(svgIcon))
