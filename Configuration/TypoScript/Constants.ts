## PID der Ergebnisseite
   plugin.tx_indexedsearch.searchUID = 4
## Teilwortsuche deaktivieren
   plugin.tx_indexedsearch._DEFAULT_PI_VARS.type = 0
## Anzahl Ergebnisse je Seite
   plugin.tx_indexedsearch._DEFAULT_PI_VARS.results = 15

plugin.tx_flexslider {
    view {
        # Necessary options, if you plan to manipulate the templates
        templateRootPath = EXT:flexslider/Resources/Private/Templates/
        partialRootPath = EXT:flexslider/Resources/Private/Partials/
        layoutRootPath = EXT:flexslider/Resources/Private/Layouts/
    }
    persistence {
        # Here you can set up the Record Storage Page globally
        storagePid =
    }
    settings {
        # String: File reference to the FlexSlider's Css file - empty this value if you want to include this at your own
        css = EXT:flexslider/Resources/Public/Css/flexslider.css
        lib {
            # String: File reference to alternative jQuery library if EXT t3jquery is not in use
            jQuery = EXT:flexslider/Resources/Public/Js/jquery-min.js
            # String: File reference to flexslider library
            flexslider = EXT:flexslider/Resources/Public/Js/jquery.flexslider-min.js
            # Bool: Flag to define whether the script shoul be moved to the footer or not
            moveToFooter = 0
        }
    }
}
