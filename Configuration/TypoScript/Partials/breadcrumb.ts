lib.breadcrumb = HMENU
lib.breadcrumb {
  special = rootline
  special.range = 0|-1
  1 = TMENU
	1{
            wrap = <ol class="breadcrumb"> | </ol>
            noBlur = 1
            NO = 1
            NO {
		wrapItemAndSub = <li> | </li>
		stdWrap.htmlSpecialChars = 1
		ATagTitle.field = title
            }
            ACT <.NO
    }
}