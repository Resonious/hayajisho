browser.contextMenus.create({
  id: "jisho-lookup",
  title: browser.i18n.getMessage("lookupOnJisho"),
  contexts: ["selection"],
  icons: {
    "16": "icons/icon-sm.svg",
    "32": "icons/icon-sm.svg",
    "64": "icons/icon.svg"
  }
});


browser.contextMenus.onClicked.addListener((info, _tab) => {
  if (info.menuItemId != "jisho-lookup") return;

  browser.windows.create({
    type: "detached_panel",
    url: "https://jisho.org/search/" + info.selectionText,
    width: 550,
    height: 680
  });
});
