const path = require("path");
const fs = require("fs");
const cheerio = require("cheerio");

function filterTemplateFolder(dir, cb) {
  fs.readdirSync(dir).forEach((templateDir) => {
    const templateModule = path.join(dir, templateDir);
    fs.stat(templateModule, (err, stat) => {
      if (stat.isDirectory()) {
        fs.readdirSync(templateModule).forEach((templateFolder) => {
          const templateFolderPath = path.join(templateModule, templateFolder);
          const indexHtmlPath = path.join(templateFolderPath, "./index.html");

          fs.access(indexHtmlPath, fs.constants.F_OK, (err) => {
            !err && cb(templateFolderPath, indexHtmlPath);
          });
        });
      }
    });
  });
}

function mergeTemplate(templateFolderPath) {
  const output = path.join(templateFolderPath, "index.js");
  let template = "";

  try {
    fs.unlinkSync(output);
  } catch (error) {}

  fs.readdirSync(templateFolderPath).forEach((file) => {
    const filePath = path.join(templateFolderPath, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const ext = path.extname(file).replace(".", "");

    const fileContent = resolveContent(ext, content);

    template += fileContent;
  });

  template += "\nexport default { html, css, script };\n";
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
      const html =  $("<div></div>").append(firstChild).html();

      return `const html = \`${html}\`\r\n\r\n`;
    }

    default: {
      return content;
    }
  }
}

filterTemplateFolder("./src/template", (templateFolder) => {
  mergeTemplate(templateFolder);
});

function resolveTemplates(templateRoot) {
  filterTemplateFolder(templateRoot, (templateFolder) => {
    mergeTemplate(templateFolder);
  });
}


module.exports = { resolveTemplates };

// resolveTemplates("./src/template");
