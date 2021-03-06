# Tabulator Fork by Mikhoul  ***PROJECT ON PAUSE***

A tab management plugin based on [gettabulator.com](https://gettabulator.com)

This fork will be optimized visually for user like me that use "The Great Discarder" extension (any other extension that use the discard function) and over 100 tabs in a single window so things will be more compact.

The problem is that when a tab is "discarded" there is no way to take a screenshot of those tabs so you end with a lot of empty white squares in Tabulator extension and it's really annoying. Here's the URL for this issue I've opened with Chromium: https://bugs.chromium.org/p/chromium/issues/detail?id=852239

Also this fork will **NOT** use the Newtab page to manage your tabs but will use the button on the toolbar instead.

I will also add the internal Chrome pages to the interface since I use them a lot.

## Current features
Tabulator overrides your new tab page with its own page. On this page, you can
- Use the toolbar button to start the extension instead of the newtab.
- list all tabs in the current window with thumbnails
- allow filtering said list of tabs by tab title or url
- allow switching to a tab from said list of tabs
- allow closing tabs from said list of tabs
- allow re-ordering tabs via drag and drop (press and hold before dragging)


## Chrome permissions
Summary of Chrome permissions needed
- `<all_urls>`: [needed](https://developer.chrome.com/extensions/tabs#method-captureVisibleTab) to capture a screenshot of a tab
- `tabs`: [needed](https://developer.chrome.com/extensions/tabs#type-Tab) to access the title and url of all tabs

## Development setup
You will need a recent-ish version `npm` to develop Tabulator. I don't actually know what the minimum required version is.

Clone the project, `cd` into it, run `npm install`, and then `npm run build`.

Next, go to <chrome://extensions>, hit "load unpacked", and pick the `static` folder of the repository.

I also highly recommend updating the `build` script in `package.json`, replacing `production` with `development`. If you do that, you will also need to add the following to your `manifest.json`:
```
"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'",
```
Just make sure you don't check those changes in.

When you make changes, `npm run lint` to lint your changes, and `npm run build` to generate the changed files. For changes to the new tab page, refreshing that is sufficient, but for changes to the background page you'll need to either refresh the plugin, or refresh the background view from "inspect views" in <chrome://extensions>. Any changes to the manifest require an extension refresh, also from <chrome://extensions>.

## Releasing
Create a commit where the commit message is in the following format: "Bump to v1.0.1". That commit should update the verison number in package.json and manifest.json. Tag that commit with the version, eg "v1.0.1". Don't forget to push the tag to github. Next, `npm run build && npm run package`. Submit the generated tabulator.zip in the [Chrome developer dashboard](https://chrome.google.com/webstore/developer/dashboard).
