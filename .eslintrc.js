module.exports = {
  root: true,
  env: { node: true },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    "semi": ['error', 'never'], // 必须使用分号结尾
    'comma-dangle': ["error", "always-multiline"],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // "semi": [0],
    "no-alert": 1, // 禁止使用alert confirm prompt
    "no-dupe-keys": 1, // 在创建对象字面量时不允许键重复 {a:1,a:1} 
    "no-constant-condition": 1, // 禁止在条件中使用常量表达式
    "no-duplicate-case": 2, // switch中的case标签不能重复
    "no-func-assign": 2, // 禁止重复申明函数
    "space-before-function-paren": [1, "always"], // 函数定义时括号前面要不要有空格
    "no-redeclare": 2, // 禁止重复申明变量
  },
  parserOptions: { parser: 'babel-eslint' },
  plugins: [
    'vue',
  ],
}