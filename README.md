# plugin-sharing

This plugin adds sharing buttons in the GitBook website toolbar to share book on social networks.

### Disable this plugin

This is a default plugin and it can be disabled using a `book.json` configuration:

```
{
    plugins: ["-sharing"]
}
```

### Configuration

This plugin can be configured in the `book.json`:

Default configuration is:

```js
{
    "pluginsConfig": {
        "sharing": {
            "facebook": true,
            "google": false,
            "instapaper": false,
            "line": false,
            "linkedin": true,
            "messenger": false,
            "pocket": true,
            "stumbleupon": false,
            "twitter": true,
            "viber": false,
            "vk": false,
            "weibo": false,
            "whatsapp": false,
            "all": [
                "facebook", "google", "twitter",
                "weibo", "instapaper", "linkedin",
                "pocket", "stumbleupon"
            ]
        }
    }
}
```
