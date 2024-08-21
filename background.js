
chrome.runtime.onInstalled.addListener((details) => {

    for (let i = 0; i < 10; i++) {
        chrome.contextMenus.create({
            id: 'id' + i,
            title: 'Menu Item ' + (i + 1),
            type: "normal",
            contexts: ['page'],
        });
    }
});


chrome.contextMenus.onClicked.addListener((info, tab) => {
    const id = info.menuItemId;
    if (id === 'id1') {
        console.log(info);
    } else {
        chrome.contextMenus.remove(id);
    }
})