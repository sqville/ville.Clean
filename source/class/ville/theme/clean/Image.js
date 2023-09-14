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
 * @asset(decoration/checkbox/*)
 * @asset(decoration/arrows/*)
 * @asset(decoration/slider/*)
 * @asset(decoration/tree/*)
 * @asset(decoration/table/*)
 * @asset(decoration/tabview/*)
 * @asset(decoration/colorselector/*)
 * @asset(decoration/treevirtual/*)
 * @asset(decoration/cursor/*)
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

      // checkbox
      "checkbox-checked" : "decoration/checkbox/checkbox-check.svg",
      "checkbox-undetermined" : "decoration/checkbox/undetermined.png",  //Replaced with -- pure Qx -- Decoration entry:: checkbox-undetermined
      "checkbox-checked-disabled" : "decoration/checkbox/checkbox-check-disabled.svg",

      // window
      //"window-minimize" : "decoration/window/minimize.gif", //Replaced with -- pure Qx -- Decoration entry:: window-button-minimize-icon
      //"window-maximize" : "decoration/window/maximize.gif", //Replaced with -- pure Qx -- Decoration entry:: window-button-maximize-icon
      //"window-restore" : "decoration/window/restore.gif", //Replaced with -- pure Qx -- Decoration entry:: window-button-restore
      //"window-close" : "decoration/window/close.gif",

      // cursor
      "cursor-copy" : "decoration/cursor/circle-add.svg",
      //"cursor-move" : "decoration/cursors/move.gif", //Replaced with -- pure Qx --
      "cursor-alias" : "decoration/cursor/alias.svg",
      "cursor-nodrop" : "decoration/cursor/nodrop.svg",

      // arrows
      "arrow-right" : "decoration/arrows/right.gif", //Replaced with -- pure Qx -- Decoration entry:: sqv-css-icon-arrow-right
      "arrow-left" : "decoration/arrows/left.gif", //Replaced with -- pure Qx -- Decoration entry:: sqv-css-icon-arrow-left
      "arrow-up" : "decoration/arrows/up.gif",
      "arrow-down" : "decoration/arrows/down.gif",
      //"arrow-forward" : "decoration/arrows/forward.gif", //Replaced by Qx code
      //"arrow-rewind" : "decoration/arrows/rewind.gif", //Replaced by Qx code
      "arrow-down-small" : "decoration/arrows/down-small.gif", //Embed option - Decoration entry:: sqv-css-icon-arrow-down-small
      "arrow-up-small" : "decoration/arrows/up-small.gif",  //Replaced by Decoration entry:: sqv-css-icon-arrow-up-small
      "arrow-up-invert" : "decoration/arrows/up-invert.gif", //Replaced by Decoration entry:: sqv-css-icon-arrow-up-invert
      "arrow-down-invert" : "decoration/arrows/down-invert.gif", //Replaced by Decoration entry:: sqv-css-icon-arrow-down-invert
      "arrow-right-invert" : "decoration/arrows/right-invert.gif", //Replaced by Decoration entry:: sqv-css-icon-arrow-right-invert

      // slider
      "line" : "decoration/slider/line.png",
      "line-selected" : "decoration/slider/line-selected.png",
      "line-invalid" : "decoration/slider/line-invalid.png",
      
      // split pane
      //"knob-horizontal" : "decoration/splitpane/knob-horizontal.png", //Replaced by pure Qx
      //"knob-vertical" : "decoration/splitpane/knob-vertical.png", // Replaced by pure Qx

      // tree
      "tree-folder" : "decoration/tree/folder.svg",
      "tree-folder-open" : "decoration/tree/folder-open.svg",
      "tree-file" : "decoration/tree/file.svg",
      //"tree-minus" : "decoration/tree/minus.gif", //Replaced
      //"tree-plus" : "decoration/tree/plus.gif", //Replaced

      // table
      //"select-column-order" : "decoration/table/select-column-order.png", //Replaced by pure Qx
      //"table-ascending" : "decoration/table/ascending.png",  //Not used
      //"table-descending" : "decoration/table/descending.png", //Not used

	    // tree virtual
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
      "treevirtual-cross" : "decoration/treevirtual/cross.gif",

      // menu
      //"menu-checkbox" : "decoration/menu/checkbox.gif", //Replaced with Qx + CSS
      //"menu-checkbox-invert" : "decoration/menu/checkbox-invert.gif", //Replaced with Qx + CSS
      //"menu-radiobutton-invert" : "decoration/menu/radiobutton-invert.gif", //Replaced with Qx + CSS
      //"menu-radiobutton" : "decoration/menu/radiobutton.gif", //Replaced with pure Qx

      // tabview
      "tabview-close" : "decoration/tabview/close.svg",
      "tabview-close-hovered" : "decoration/tabview/close-hovered.svg"
    }
  }
});
