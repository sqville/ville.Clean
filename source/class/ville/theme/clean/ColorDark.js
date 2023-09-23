/* ************************************************************************

    SQville

   Copyright:
     None

   License:
     MIT

   Authors:
     * Chris Eskew (sqville@gmail.com)

************************************************************************ */

/**
 * Clean color theme, based off of Simple color theme (qooxdoo) and Semantic default
 */
qx.Theme.define("ville.theme.clean.ColorDark",
{  
  colors :
  {    
    // main
    "background" : "rgb(27,27,27)",//"#000000",//"#ffffff"
    "light-background" : "#E0ECFF",

    // backgrounds
    "background-selected" : "#6694E3",
    "background-selected-disabled" : "#CDCDCD",
    "background-selected-dark" : "#5685D6",
    "background-disabled" : "#F7F7F7",
    "background-disabled-checked" : "#BBBBBB",
    "background-pane" : "#ffffff",
    "background-invalid" : "#fff0f0",
    "background-group-item" : "#BABABA",

    // tabview
    "tabview-unselected" : "#1866B5",
    "tabview-button-border" : "rgb(102, 102, 102)",//"#134983",
    "tabview-label-active-disabled" : "#D9D9D9",
    "tabviewspacebar-bar-selected" : "#888888",
    "tabview-text-normal" : "#444444",
    "tabviewspot-button-checked" : "#F2F2F2",
    "tabviewspot-button-hovered" : "#F7F7F7",
    
    // combobox
    "combobox-hovered" : "#F2F2F2",
    "combobox-item-selected" : "#F7F7F7",

    // list
    "group-item-" : "#ffffff",

    // text colors
    "link" : "#24B",
    "group-item" : "#ffffff",

    // scrollbar
    "scrollbar-bright" : "#F1F1F1",
    "scrollbar-dark" : "#EBEBEB",

    // form
    "button" : "#292929",
    "button-border" : "#BBB",
    "button-border-hovered" : "#939393",  
    "invalid" : "#FF0000",

    "button-box-bright" : "#292929",//"#e0e1e2",
    "button-box-bright-hovered" : "#3d3d3d",//"#cacbcd",
    "button-box-dark" : "#E3E3E3",
    "button-box-bright-pressed" : "#1f1f1f",//"#babbbc",
    "button-box-bright-checked" : "#383838",
    "button-box-dark-pressed" : "#F5F5F5",
    "border-lead" : "rgb(102, 102, 102)",//"#888888",
    "button-text" : "#ffffff",//"rgba(0, 0, 0, 0.6)",
    "button-text-hovered" : "#ffffff",
    "button-text-pressed" : "#ffffff",
    "button-focus-shadow" : "rgba(81, 167, 232, 0.8)",
    
    //SQ New
    "textfield-selected" : "rgba(133, 183, 217, 1)",
	  "textfield-selected-darker" : "rgba(0, 0, 0, 0.5)",
	
    //SQ New
    "progressbar-base" : "rgba(229, 229, 229, 1)",
    "progressbar-gray" : "rgba(136, 136, 136, 1)",
    "progressbar-complete" : "rgba(33, 186, 69, 1)",
    "progressbar-warning" : "rgba(242, 192, 55, 1)",
    "progressbar-error" : "rgba(219, 40, 40, 1)",	
	    
    "ville-icon-base" : "#ffffff",
    "ville-arrow-gray" : "#ffffff",
    "ville-arrow-med-gray" : "#ffffff",

    // window
    "window-border" : "rgb(102, 102, 102)",//"#2E3A46",
    "window-border-inner" : "rgb(102, 102, 102)",//"white",

    // group box
    "white-box-border" : "rgb(102, 102, 102)",//"#D8D8D8",

    // shadows
    "shadow" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.4)" : "#999999",
    "shadow-light" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.2)" : "#CCCCCC",

    // borders
    // 'border-main' is an alias of 'background-selected' (compatibility reasons)
    "border-main" : "rgb(133, 133, 133)",//"#6694E3",
    "border-light" : "#858585",
    "border-light-darker" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.2)" : "#D8D8D8",
    "border-light-shadow" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.15)" : "#D8D8D8",
    "border-super-light" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.06)" : "#EEEEEE",

    // separator
    "border-separator" : "#858585",

    // text
    "text-combobox-listitem" : "rgba(0, 0, 0, 0.6)", //NOT USED
    "text" : "#ffffff",//"rgba(0, 0, 0, 0.8)",
    "text-darker" : "rgba(255, 255, 255, 0.8)",
    "text-disabled" : "#ffffff",//"rgba(0, 0, 0, 0.4)",
    "text-selected" : "#000000",
    "text-placeholder" : "rgba(0, 0, 0, 0.4)",

    // tooltip
    "tooltip" : "#FFFFE1",
    "tooltip-text" : "#000000",

    // table
    "table-border" : "rgb(102, 102, 102)",//"#858585",
    "table-header" : "rgb(41, 41, 41)",//"#F9FAFB",
    "table-focus-indicator" : [ 179, 217, 255 ],

    // used in table code
    "table-header-cell" : "rgb(41, 41, 41)",//[ 235, 234, 219 ],
    "table-row-background-focused-selected" : [ 90, 138, 211 ],
    "table-row-background-focused" : [ 51, 94, 168 ],
    "table-row-background-selected" : [ 51, 94, 168 ],
    "table-row-background-even" : "rgb(41, 41, 41)",//"#ffffff",
    "table-row-background-odd" : "rgb(41, 41, 41)",//"#ffffff",
    "table-row-selected" : [ 255, 255, 255 ],
    "table-row" : "#ffffff",
    "table-row-line" : "rgb(102, 102, 102)",//"#EEE",
    "table-column-line" : "rgb(102, 102, 102)",//"#EEE",

    // used in progressive code
    "progressive-table-header" : "#AAAAAA",
    "progressive-table-row-background-even" : [ 250, 248, 243 ],
    "progressive-table-row-background-odd" : [ 255, 255, 255 ],
    "progressive-progressbar-background" : "gray",
    "progressive-progressbar-indicator-done" : "#CCCCCC",
    "progressive-progressbar-indicator-undone" : "#ffffff",
    "progressive-progressbar-percent-background" : "gray",
    "progressive-progressbar-percent-text" : "#ffffff"
  }
});
