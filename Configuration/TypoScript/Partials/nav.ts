lib.mainmenu = HMENU
lib.mainmenu{
    1 = TMENU
    1{
        wrap = <ul class="nav navbar-nav navbar-right" role="menu">|</ul>
        expAll = 1
        noBlur = 1
        NO = 1
        NO.wrapItemAndSub = <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>

        ACT = 1
	ACT.wrapItemAndSub = <li class="first active">|</li> |*| <li class="active">|</li> |*| <li class="last active">|</li>

        IFSUB = 1
        IFSUB.wrapItemAndSub = <li class="first dropdown">|</li> |*| <li class="dropdown">|</li> |*| <li class="last dropdown">|</li>
        IFSUB.ATagParams = class="dropdown-toggle" data-toggle="dropdown"

        ACTIFSUB < .IFSUB
	ACTIFSUB.wrapItemAndSub = <li class="first dropdown active">|</li> |*| <li class="dropdown active">|</li> |*| <li class="last dropdown active">|</li>
    }
    2 = TMENU
    2{
        wrap = <ul class="dropdown-menu">|</ul>
        expAll = 1
        noBlur = 1
        
        stdWrap.prepend = TEXT
        stdWrap.prepend.typolink.parameter.field = pid
        stdWrap.prepend.data = pid:title
        stdWrap.prepend.wrap = <li>|</li>

        NO = 1
        NO.wrapItemAndSub = <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>

        ACT < .NO
        ACT.wrapItemAndSub = <li class="first active">|</li> |*| <li class="active">|</li> |*| <li class="last active">|</li>
        CUR < .ACT
    }
    3 = TMENU
    3{
        wrap = <ul> | </ul>
        expAll = 1
        noBlur = 1
        NO = 1
        NO {
            wrapItemAndSub = <li> | </li>
            stdWrap.htmlSpecialChars = 1
            ATagTitle.field = title
        }
    }
}

lib.footermenu = HMENU
lib.footermenu{
        special = list
        special.value = 7, 8
        includeNotInMenu = 1
	1 = TMENU
        1{
            wrap = <ul> | </ul>
            noBlur = 1
            NO = 1
            NO {
		wrapItemAndSub = <li> | </li>
		stdWrap.htmlSpecialChars = 1
		ATagTitle.field = title
            }
            ACT <.NO
         ACT{
       	wrapItemAndSub = <li class="active">|</li>
        }
    }
}