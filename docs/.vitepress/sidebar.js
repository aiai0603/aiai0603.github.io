const path = require("path");
const dirTree = require("directory-tree");

function toSidebarOption(tree = []) {
  if (!Array.isArray(tree)) return [];

  return tree.map((v) => {
    if (v.children !== undefined) {
      return {
        text: v.name,
        collapsible: true,
        collapsed: true,
        items: toSidebarOption(v.children),
      };
    } else {
      return {
        text: v.name.replace(".md", ""),
        link: v.path.split("docs")[1].replace(".md", ""),
      };
    }
  });
}

function autoGetSidebarOptionBySrcDir(srcPath, title) {
  const srcDir = dirTree(srcPath, {
    extensions: /\.md$/,
    normalizePath: true,
  });

  if (title != undefined) {
    return [
      {
        text: title,
        collapsible: true,
        collapsed: true,
        items: toSidebarOption(srcDir.children),
      },
    ];
  } else {
    return toSidebarOption(srcDir.children);
  }
}

module.exports = autoGetSidebarOptionBySrcDir;
