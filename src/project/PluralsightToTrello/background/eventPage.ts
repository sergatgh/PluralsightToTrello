import { SendCourseMessageListener, BackgroundLoggingEventListener } from "../../../feature";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "show") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.pageAction.show(tabs[0].id);
        });
    }
});

chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) =>
        SendCourseMessageListener.Instance.onMessage(message, sender, sendResponse));
        
chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) =>
        BackgroundLoggingEventListener.Instance.onMessage(message, sender, sendResponse));