import templateConfig from "../../template";

/**
 * 初始化模版配置
 *
 * @param {object} templateConfig 模版配置
 */
function initTempate(templateConfig) {
  Object.keys(templateConfig).forEach((groupKey) => {
    const group = templateConfig[groupKey];
    // 如果组需要不显示
    if(group.hide) return;

    const { groupName, list } = group;
    const filterGroupList = list.filter(v => !v.hide);

    Vvveb.BlocksGroup[groupName] = filterGroupList.map((templateItem) => {
      return templateItem.key;
    });

    filterGroupList.forEach((templateItem) => {
      const { key, ...rest } = templateItem;
      Vvveb.Blocks.add(templateItem.key, rest);
    });
  });
}

initTempate(templateConfig);
