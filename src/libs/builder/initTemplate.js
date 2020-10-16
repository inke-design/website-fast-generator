import templateConfig from "../../template";

/**
 * 初始化模版配置
 *
 * @param {object} templateConfig 模版配置
 */
function initTempate(templateConfig) {
  Object.keys(templateConfig).forEach((groupKey) => {
    const group = templateConfig[groupKey];
    const { groupName, list } = group;

    Vvveb.BlocksGroup[groupName] = list.map((templateItem) => {
      return templateItem.key;
    });

    list.forEach((templateItem) => {
      const { key, ...rest } = templateItem;
      Vvveb.Blocks.add(templateItem.key, rest);
    });
  });
}

initTempate(templateConfig);
