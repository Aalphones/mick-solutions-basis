page = PAGE
page {
    10 = FLUIDTEMPLATE
    10 {
        file = EXT:mick-solutions/Resources/Private/Templates/full.html
        layoutRootPath = EXT:mick-solutions/Resources/Private/Layouts
        partialRootPath = EXT:mick-solutions/Resources/Private/Partials

        variables {
            content < styles.content.get
        }
    }
}

#tt_content
tt_content.header >

tt_content.header = TEXT
tt_content.header.stdWrap.wrap = <h3>|</h3>
tt_content.header.stdWrap.field = header