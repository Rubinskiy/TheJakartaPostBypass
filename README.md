## Premium Article Bypass for thejakartapost.com
Are you an avid reader like me for a news website like <a href="thejakartapost.com">thejakartapost.com</a> but just can't stand their paywall on premium quality articles?

This unpacked source code for a chrome extension will help bypass the paywall on premium articles so you can **read them for free**. 

## How they work
I was expecting to find an existing Github Repo of a bypass for The Jakarta Post premium articles but unfortunately, I could not find any. So I thought of making one myself. Turns out it was pretty simple too.

The website has three divs called `tjp-wrapper`, `tjp-paywall`, and `tjp-overlay`. They will all inherit a class called `active` which will set `overflow` to `hidden` among others. All that was needed to do was to detect if the `tjp-wrapper` class had inherit the `active` class, delete the `tjp-paywall` and `tjp-overlay` divs, then set the `overflow` from `tjp-wrapper` to `scroll`.

Update: Removed the white bar on `tjp-wrapper.active`, and changed the label from *Premium* to *Free*.

Of course there are many ways to approach this problem, this is just one way. You might think of disabling the javascript code that detects the initial scroll and calls the paywall, or you might think of disabling the same divs above in a better order. For all I know, I made this for my personal use, but who knows it might come in handy to someone else.
