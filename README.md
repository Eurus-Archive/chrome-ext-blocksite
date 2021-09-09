# Chrome Extension Blocking
BlockSite is no longer free, so make a toy application.

## add new pattern
edit `app/script/background.js`
```
urls: [
    "*://*.google.com/*"
]
```

## todo
- [ ] twitter block 
- [ ] click redirect
- [ ] redirect index.html
- [ ] popup add new pattern
- [ ] storage rsync

## ref
[yeoman geneerator cheome extension](https://github.com/yeoman/generator-chrome-extension)  
[google extensions developer doc](https://developer.chrome.com/docs/extensions/mv3/getstarted/)