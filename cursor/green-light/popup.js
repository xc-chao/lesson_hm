document.getElementById('helloButton').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: changeBackgroundToGreen,
    });
  });
});

function changeBackgroundToGreen() {
  document.body.style.backgroundColor = 'green';
}
