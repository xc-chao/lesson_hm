chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "changeBackground") {
    document.body.style.backgroundColor = "green";
  }
});
