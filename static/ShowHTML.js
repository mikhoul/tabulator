
chrome.browserAction.onClicked.addListener(function(activeTab) {
	chrome.tabs.create({
      url: chrome.extension.getURL("newtab.html")  /* Show you all open tab when you click on the icon in the toolbar */
   });
	});