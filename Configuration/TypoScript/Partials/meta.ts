config {
    baseURL = http://www.saengerjugend-stuttgart.de/
    htmlTag_langKey = de
    metaCharset = utf-8
    prefixLocalAnchors = all
    simulateStaticDocuments = 0
    tx_realurl_enable = 1
}

page {
    meta {
        viewport = width=device-width, initial-scale=1.0
        keywords = Sängerjugend, Stuttgart, Chor
        description = Homepage der Sängerjugend Stuttgart e.V.
        author = Stuttgarter Sängerjugend e.V.
        robots = index,follow
    }
    headerData {
        42 = TEXT
        42.value (
            <link rel="shortcut icon" href="typo3conf/ext/mick-solutions/Resources/Public/img/favicon.png" type="image/x-icon; charset=binary" />
        )
        82 = TEXT
        82.value (
            <link rel="icon" href="typo3conf/ext/mick-solutions/Resources/Public/img/favicon.png" type="image/x-icon; charset=binary" />
        )
    }
}

#language
config.sys_language_uid = 1
config.language = de
config.locale_all = de_DE
config.htmlTag_langKey = de

#suche
page.config.index_enable = 1