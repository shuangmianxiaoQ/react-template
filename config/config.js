const projectName = require('../package.json').name;
const version = require('../package.json').version;

module.exports = {
  PORT: 1024,
  publicUrl: {
    test: `//static2.test.ximalaya.com/yx/${projectName}/last/dist/`,
    uat: `//s1.uat.xmcdn.com/yx/${projectName}/${version}/dist/`,
    prod: `//s1.xmcdn.com/yx/${projectName}/${version}/dist/`,
    analyze: '/'
  },
  theme: {
    'primary-color': '#275EFF', // 全局主色
    'success-color': '#46BC13', // 成功色
    'warning-color': '#FFA700', // 警告色
    'error-color': '#F86442', // 错误色
    // Other
    'font-family': 'PingFangSC-Regular, "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial', // 字体族
    'text-color': '#333333', // 主文本色
    'text-color-secondary': '#666666', // 次文本色
    'border-color-base': '#e1e1e1', // 边框色
    'border-color-split': '#e1e1e1', // 表格等边框色
    // 按钮相关
    'btn-disable-color': '#B8B8B8',
    'btn-disable-bg': '#F7F7F7',
    // 面包屑
    'breadcrumb-font-size': '12px',
    'breadcrumb-last-item-color': '#999999',
    // 表单相关
    'select-item-selected-color': '#3462FF',
    'select-item-selected-bg': '#FFFFFF',
    'select-item-selected-font-weight': '400',
    'input-addon-bg': '#FFFFFF',
    // 表格
    'table-header-bg': '#F7F7F7',
    'table-padding-vertical': '12px',
    'table-font-size': '12px',
    'table-selection-column-width': '48px',
    // 布局
    'layout-body-background': '#F7F7F7',
    'layout-header-background': '#111722',
    // Modal
    'modal-mask-bg': 'fade(@black, 50%)',
    'modal-header-padding-vertical': '13px',
    'modal-body-padding': '32px',
    // Tooltip
    'tooltip-max-width': '360px',
    'tooltip-bg': '#FFFFFF',
    'tooltip-color': '#333333'
  }
};
