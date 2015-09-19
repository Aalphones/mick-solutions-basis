page = PAGE
page {
    includeCSS.bootstrap = EXT:mick-solutions/Resources/Public/css/bootstrap.min.css
    includeCSS.style = EXT:mick-solutions/Resources/Public/css/style.css

    includeJSFooter {
        file1 = http://code.jquery.com/jquery-latest.min.js
        file1.external = 1
        collapsible = EXT:mick-solutions/Resources/Public/js/jquery.collapsible.js
        bootstrap = EXT:mick-solutions/Resources/Public/js/bootstrap.js
        slider = EXT:mick-solutions/Resources/Public/js/jquery.flexslider.js
      }
}