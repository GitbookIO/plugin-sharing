require(['gitbook', 'jquery'], function(gitbook, $) {
    function site(label, icon, link) {
        return {
            label: label,
            icon: 'fa fa-' + icon,
            onClick: function (e) {
                e.preventDefault();
                window.open(link);
            }
        };
    }

    var url = encodeURIComponent(location.href);
    var title = encodeURIComponent(document.title);

    var SITES = {
        facebook: site('Facebook', 'facebook', 'http://www.facebook.com/sharer/sharer.php?s=100&p[url]=' + url),
        instapaper: site('instapaper', 'instapaper', 'http://www.instapaper.com/text?u=' + url),
        google: site('Google+', 'google-plus', 'https://plus.google.com/share?url=' + url),
        twitter: site('Twitter', 'twitter', 'https://twitter.com/intent/tweet?url=' + title + '&text=' + title),
        vk: site('VK', 'vk', 'http://vkontakte.ru/share.php?url=' + url),
        weibo: site('Weibo', 'weibo', 'http://service.weibo.com/share/share.php?content=utf-8&url=' + url + '&title=' + title)
    };

    gitbook.events.bind('start', function(e, config) {
        var opts = config.sharing;

        // Create dropdown menu
        var menu = $.map(opts.all, function(id) {
            var site = SITES[id];

            return {
                text: site.label,
                onClick: site.onClick
            };
        });

        // Create main button with dropdown
        if (menu.length > 0) {
            gitbook.toolbar.createButton({
                icon: 'fa fa-share-alt',
                label: 'Share',
                position: 'right',
                dropdown: [menu]
            });
        }

        // Direct actions to share
        $.each(SITES, function(sideId, site) {
            if (!opts[sideId]) return;

            gitbook.toolbar.createButton({
                icon: site.icon,
                label: site.text,
                position: 'right',
                onClick: site.onClick
            });
        });
    });
});
