chrome.commands.onCommand.addListener((command) => {
  if (command === "open-grok") {
    chrome.action.openPopup();
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.prompt) {
    const encodedPrompt = encodeURIComponent(message.prompt);
    chrome.tabs.create({ url: `https://grok.com/?q=${encodedPrompt}` });
  }
});
