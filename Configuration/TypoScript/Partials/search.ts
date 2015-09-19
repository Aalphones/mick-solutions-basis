# Indexed Search Konfiguration 
## Suche aktivieren
   page.config.index_enable = 1
## Eigenes Template zuweisen
   plugin.tx_indexedsearch.templateFile = fileadmin/indexed_search.tmpl

## Search Box ###################################################################
lib.searchbox = COA_INT
lib.searchbox {
    stdWrap.prefixComment = 2 | lib.searchbox
    10 = TEXT
    10.typolink.parameter = {$plugin.tx_indexedsearch.searchUID}
    10.typolink.returnLast = url
    10.wrap = <form class="navbar-form navbar-left" action="|" method="post" id="indexedsearch"  role="search"> | </form>
    20 = COA
    20 {
        wrap = <div class="form-group"> | </div>
        10 = TEXT
        10.data = GPvar : tx_indexedsearch |sword
        10.htmlSpecialChars = 1
        10.wrap = <input name="tx_indexedsearch[sword]" placeholder="Suche" class="form-control" type="text" />
        20 = COA
        20 {
           10 = TEXT
           10.value = <input type="hidden" name="tx_indexedsearch[sections]" value="0" />
           20 = TEXT
           20.value = <input name="tx_indexedsearch[submit_button]" value="Search" type="hidden" />
          30 = TEXT
          30.value = <button type="submit" class="btn btn-default">Los</button>
        }
      }
}