# Hello World Green Background Chrome Extension

A Chrome extension that changes the background color of the current page to green when a button is clicked.

## Files
- manifest.json
- popup.html
- popup.js
- content.js

## Functionality
When the extension icon is clicked, it opens a popup with a "Hello World" button. Clicking the button will change the background color of the current page to green.

## How it works
1. The popup.js file listens for a click on the button.
2. When clicked, it sends a message to the content script.
3. The content script (content.js) receives the message and changes the background color of the page to green.

## Permissions
This extension requires the "activeTab" permission to interact with the current tab.
