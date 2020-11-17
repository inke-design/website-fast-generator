const path = require("path");
const fs = require("fs");
const cheerio = require("cheerio");

const KEY_MAP = {
  css: 'css',
  js: 'script',
  html: 'html',
  json: "exportModule",
}

function filterTemplateFolder(dir, cb) {
  fs.readdirSync(dir).forEach((template) => {
    const templatePath = path.join(dir, template);
    const stat = fs.lstatSync(templatePath);

    if (stat.isDirectory()) {
      const indexHtmlPath = path.join(templatePath, "./index.html");

      filterTemplateFolder(templatePath, cb);
      fs.access(indexHtmlPath, fs.constants.F_OK, (err) => {
        !err && cb(templatePath, indexHtmlPath);
      });
    } else if (stat.isFile()) {
      // console.log("isFile:", templatePath);
    }
  });
}

function mergeTemplate(templateFolderPath) {
  const output = path.join(templateFolderPath, "index.js");
  let template = "";

  try {
    fs.unlinkSync(output);
  } catch (error) {}

  const exts = [];
  fs.readdirSync(templateFolderPath).forEach((file) => {
    const filePath = path.join(templateFolderPath, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const ext = path.extname(file).replace(".", "");

    const fileContent = resolveContent(ext, content);

    exts.push(ext);
    template += fileContent;
  });

  const exportStr = `\nexport default { ${exts.map(t => KEY_MAP[t]).join(', ')} };\n`;

  template += `${exportStr}`;
  fs.writeFileSync(output, template, "utf8");
}

function resolveContent(type, content) {
  switch (type) {
    case "css": {
      return `const css = \`<style type="text/css">\n${content}\n</style>\`\r\n\r\n`;
    }
    case "js": {
      return `const script = \`<script>\n${content}\n</script>\`\r\n\r\n`;
    }
    case "html": {
      const $ = cheerio.load(content);
      const firstChild = $("body>*").get(0);
      const html = $("<div></div>").append(firstChild).html();

      return `const html = \`${html}\`\r\n\r\n`;
    }
    case "json": {
      return `const exportModule = ${content}\r\n\r\n`;
    }

    default: {
      return content;
    }
  }
}

function resolveTemplates(templateRoot) {
  filterTemplateFolder(templateRoot, (templateFolder) => {
    mergeTemplate(templateFolder);
  });
}

module.exports = { resolveTemplates };

// filterTemplateFolder("./src/template", folder => {
//   console.log("folder", folder);
// });
