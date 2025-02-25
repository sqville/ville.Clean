/* ************************************************************************

   SQville

   Copyright:
     None

   License:
     MIT

   Authors:
     * Chris Eskew (sqville@gmail.com)

************************************************************************ */
/* ************************************************************************


************************************************************************* */
/**
 * Mapping class for all images used in the clean theme.
 *
 * @asset(qx/static/blank.png)
 * @asset(decoration/table/boolean-true.png)
 * @asset(decoration/table/boolean-false.png)
 * @asset(decoration/colorselector/*)
 * @asset(decoration/treevirtual/*)
 */
qx.Class.define("ville.theme.clean.Image",
{
  extend : qx.core.Object,

  statics :
  {    
    /**
     * Holds a map containig all the URL to the images.
     * @internal
     */
    URLS :
    {
      "blank" : "qx/static/blank.png",

	    // tree virtual - Leaving as-is
	    "tree-minus" : "decoration/treevirtual/minus.gif",
      "tree-plus" : "decoration/treevirtual/plus.gif",
      "treevirtual-line" : "decoration/treevirtual/line.gif",
      "treevirtual-minus-only" : "decoration/treevirtual/only_minus.gif",
      "treevirtual-plus-only" : "decoration/treevirtual/only_plus.gif",
      "treevirtual-minus-start" : "decoration/treevirtual/start_minus.gif",
      "treevirtual-plus-start" : "decoration/treevirtual/start_plus.gif",
      "treevirtual-minus-end" : "decoration/treevirtual/end_minus.gif",
      "treevirtual-plus-end" : "decoration/treevirtual/end_plus.gif",
      "treevirtual-minus-cross" : "decoration/treevirtual/cross_minus.gif",
      "treevirtual-plus-cross" : "decoration/treevirtual/cross_plus.gif",
      "treevirtual-end" : "decoration/treevirtual/end.gif",
      "treevirtual-cross" : "decoration/treevirtual/cross.gif"
    },

    DATAURLS :
    {
      // checkbox 
      "checkbox-checked" : 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 15 15"><path fill="DodgerBlue" d="M14.05 3.49c.28.3.27.77-.04 1.06l-7.93 7.47A.85.85 0 0 1 4.9 12L2.22 9.28a.75.75 0 1 1 1.06-1.06l2.24 2.27 7.47-7.04a.75.75 0 0 1 1.06.04Z"></path></svg>',
      "checkbox-checked-disabled" : 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="DarkGray" height="16" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>',

      // cursor
      "cursor-copy" : 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><g><path id="path1" transform="rotate(0,8,8) translate(1,1) scale(0.4375,0.4375)  " fill="green" d="M14.100037,6L14.100037,14.099998 6,14.099998 6,18 14.100037,18 14.100037,26.099998 18,26.099998 18,18 26,18 26,14.099998 17.900024,14.099998 17.900024,6z M16,0C24.800049,0 32,7.1999969 32,16 32,24.800003 24.800049,32 16,32 7.2000122,32 0,24.800003 0,16 0,7.1999969 7.2000122,0 16,0z" /></g></svg>',
      "cursor-alias" : 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><g><rect height="16" width="16" fill="transparent" /><path id="path1" transform="rotate(90,8,8) translate(2,4.60643768310547) scale(0.375,0.375)  " fill="DodgerBlue" d="M21.865021,0L32,9.6189575 21.865021,18.098999 21.865021,13.572998C21.865021,13.572998 4.3740082,9.052002 0,18.098999 0,15.838989 1.5900116,4.526001 21.865021,4.526001z" /></g></svg>',
      "cursor-nodrop" : 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><g><path id="path1" transform="rotate(0,8,8) translate(1.01093733441083,1) scale(0.43750005215407,0.43750005215407)  " fill="red" d="M6.0588669,9.2140673C2.8538021,13.922104 3.2548091,20.432154 7.461842,24.53819 11.66796,28.745223 18.078027,29.146218 22.786106,25.941199z M15.974969,4.006027C13.570942,4.006027,11.166914,4.7070368,9.1638941,6.1100472L25.890157,22.836173C29.095222,18.128136 28.69519,11.618085 24.488098,7.5120586 22.185085,5.1080406 19.080057,4.006027 15.974969,4.006027z M15.974969,0C20.081048,0 24.188104,1.603009 27.293191,4.7070368 33.502267,10.917084 33.502267,21.133164 27.293191,27.343211 21.083078,33.552256 10.866922,33.552256 4.6568078,27.343211 -1.5522693,21.133164 -1.5522693,10.917084 4.6568078,4.7070368 7.7618956,1.603009 11.868951,0 15.974969,0z" /></g></svg>',

      // slider
      "line" : 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16"><line x1="0" y1="8" x2="16" y2="8" style="stroke: LightGray;stroke-width:1"/></svg>',
      "line-selected" : 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16"><line x1="0" y1="8" x2="16" y2="8" style="stroke: DodgerBlue;stroke-width:1"/></svg>',
      "line-invalid" : 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16"><line x1="0" y1="8" x2="16" y2="8" style="stroke: red;stroke-width:1"/></svg>',

      // tabview
      "tabview-close" : 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><g><path id="path1" transform="rotate(0,8,8) translate(1,1) scale(0.4375,0.4375)  " fill="Gray" d="M7.1999998,0L16,8.7999997 24.799999,0 32,7.1999998 23.2,16 32,24.799999 24.799999,32 16,23.2 7.1999998,32 0,24.799999 8.7999997,16 0,7.1999998z" /></g></svg>',
      "tabview-close-hovered" : 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><g><path id="path1" transform="rotate(0,8,8) translate(1,1) scale(0.4375,0.4375)  " fill="red" d="M7.1999998,0L16,8.7999997 24.799999,0 32,7.1999998 23.2,16 32,24.799999 24.799999,32 16,23.2 7.1999998,32 0,24.799999 8.7999997,16 0,7.1999998z" /></g></svg>'
    },

    CLIPPATHS :
    {
      // tree
      "tree-folder" : 'path("M 1 4.5 A 2.5 2.5 0 0 1 3.5 2 h 2.09 c 0.4 0 0.78 0.16 1.06 0.44 L 8 3.79 L 5.94 5.85 a 0.5 0.5 0 0 1 -0.35 0.15 H 1 V 4.5 Z M 1 7 v 4.5 A 2.5 2.5 0 0 0 3.5 14 h 9 a 2.5 2.5 0 0 0 2.5 -2.5 v -5 A 2.5 2.5 0 0 0 12.5 4 H 9.2 L 6.66 6.56 A 1.5 1.5 0 0 1 5.59 7 H 1 Z")',
      "tree-folder-open" : 'path("M 1 4.5 v 4.97 l 1 -1.72 A 3.5 3.5 0 0 1 5.01 6 h 7.93 a 2.5 2.5 0 0 0 -2.45 -2 H 7.2 L 5.66 2.44 A 1.5 1.5 0 0 0 4.59 2 H 3.5 A 2.5 2.5 0 0 0 1 4.5 Z M 5.02 7 H 13 a 2 2 0 0 1 1.73 3 l -1.59 2.75 A 2.5 2.5 0 0 1 10.98 14 H 3 a 2 2 0 0 1 -1.73 -3 l 1.59 -2.75 A 2.5 2.5 0 0 1 5.02 7 Z")',
      "tree-file" : 'path("M 9.59 5 a 0.5 0.5 0 0 0 -0.09 -1 H 6.41 a 0.5 0.5 0 0 0 0.09 1 h 3.09 Z M 10 8 a 0.5 0.5 0 0 1 -0.41 0.5 H 6.5 a 0.5 0.5 0 0 1 -0.09 -1 H 9.5 c 0.28 0 0.5 0.22 0.5 0.5 Z m -0.41 3.98 A 0.5 0.5 0 0 0 9.5 11 h -3 l -0.09 0.01 a 0.5 0.5 0 0 0 0.09 1 h 3 l 0.09 -0.02 Z M 3 3 c 0 -1.1 0.9 -2 2 -2 h 6 a 2 2 0 0 1 2 2 v 10 a 2 2 0 0 1 -2 2 H 5 a 2 2 0 0 1 -2 -2 V 3 Z m 8 -1 H 5 a 1 1 0 0 0 -1 1 v 10 a 1 1 0 0 0 1 1 h 6 a 1 1 0 0 0 1 -1 V 3 a 1 1 0 0 0 -1 -1 Z M 9.59 5 a 0.5 0.5 0 0 0 -0.09 -1 H 6.41 a 0.5 0.5 0 0 0 0.09 1 h 3.09 Z M 10 8 a 0.5 0.5 0 0 1 -0.41 0.5 H 6.5 a 0.5 0.5 0 0 1 -0.09 -1 H 9.5 c 0.28 0 0.5 0.22 0.5 0.5 Z m -0.41 3.98 A 0.5 0.5 0 0 0 9.5 11 h -3 l -0.09 0.01 a 0.5 0.5 0 0 0 0.09 1 h 3 l 0.09 -0.02 Z")'
    }
  }
});
