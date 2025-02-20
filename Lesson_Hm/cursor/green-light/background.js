chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeBackgroundToGreen,
  });
});

function changeBackgroundToGreen() {
  document.body.style.backgroundColor = 'green';
}
