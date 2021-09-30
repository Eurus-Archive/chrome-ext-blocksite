'use strict';

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    var currentTime = new Date();
    if (isOfficeTime(currentTime) && isWeekday(currentTime)) {
      return { redirectUrl: chrome.extension.getURL('html/index.html') };
    }
    return details.url;
  },
  {
    urls: [
      "*://weibo.com/*",
      "*://*.weibo.com/*",
      "*://twitter.com/*",
      "*://*.twitter.com/*",
      "*://bilibili.com/*",
      "*://*.bilibili.com/*",
      "*://netflix.com/*",
      "*://*.netflix.com/*",
      "*://taobao.com/*",
      "*://*.taobao.com/*",
      "*://jd.com/*",
      "*://*.jd.com/*"
    ],
    types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
  },
  ["blocking"]
);

function isOfficeTime(currentTime) {
  var hour = currentTime.getHours();
  return hour > 9 && hour < 17;
}

function isWeekday(currentTime) {
  var dayOfWeek = currentTime.getDay();
  return dayOfWeek >= 1 && dayOfWeek <= 5;
}
