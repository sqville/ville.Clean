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
qx.Theme.define("ville.theme.clean.Color",
{  
  colors :
  {    
    // main
    "background" : "#ffffff",
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
    "tabview-button-border" : "#134983",
    "tabview-label-active-disabled" : "#D9D9D9",
    "tabviewspacebar-bar-selected" : "#888888",
    "tabview-text-normal" : "#444444",
    "tabviewspot-button-checked" : "#F2F2F2",
    "tabviewspot-button-hovered" : "#F7F7F7",
    
    // combobox
    "combobox-hovered" : "#F7F7F7",
    "combobox-item-selected" : "#eaeaea",//#F7F7F7",

    // list
    "group-item-" : "#ffffff",

    // text colors
    "link" : "#24B",
    "group-item" : "#ffffff",

    // scrollbar
    "scrollbar-bright" : "#F1F1F1",
    "scrollbar-dark" : "#EBEBEB",

    // form
    "button" : "rgba(0, 0, 0, 0.6)",
    "button-border" : "#BBB",
    "button-border-hovered" : "#939393",
    "invalid" : "#FF0000",

    "button-box-bright" : "#e0e1e2",
    "button-box-bright-hovered" : "#cacbcd",
    "button-box-dark" : "#E3E3E3",
    "button-box-bright-pressed" : "#babbbc",
    "button-box-bright-checked" : "#babbbc",
    "button-box-dark-pressed" : "#F5F5F5",
    "border-lead" : "#888888",
    "button-text" : "rgba(0, 0, 0, 1)",
    "button-text-hovered" : "rgba(0, 0, 0, 1)",
    "button-text-pressed" : "rgba(0, 0, 0, 1)",
    "button-focus-shadow" : "rgba(81, 167, 232, 0.8)",
    
    //SQ New
    "textfield-selected" : "rgba(133, 183, 217, 1)",
	  "textfield-selected-darker" : "rgba(0, 0, 0, 0.5)",
	
    //SQ New
    "progressbar-base" : qx.core.Environment.get("css.rgba") ? "rgba(229, 229, 229, 1)" : "#E5E5E5",
    "progressbar-gray" : qx.core.Environment.get("css.rgba") ? "rgba(136, 136, 136, 1)" : "#888888",
    "progressbar-complete" : qx.core.Environment.get("css.rgba") ? "rgba(33, 186, 69, 1)" : "#21BA45",
    "progressbar-warning" : qx.core.Environment.get("css.rgba") ? "rgba(242, 192, 55, 1)" : "#F2C037",
    "progressbar-error" : qx.core.Environment.get("css.rgba") ? "rgba(219, 40, 40, 1)" : "#DB2828",	
	    
    "ville-icon-base" : [0, 0, 0],
    "ville-arrow-gray" : [0, 0, 0],
    "ville-arrow-med-gray" : [0, 0, 0],

    // window
    "window-border" : "#2E3A46",
    "window-border-inner" : "white",

    // group box
    "white-box-border" : "#D8D8D8",
    "box-border-blue" : "#3b83c0",
    "box-border-orange" : "#e07b53",
    "box-border-green" : "#5bbd72",

    // shadows
    "shadow" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.4)" : "#999999",
    "shadow-light" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.2)" : "#CCCCCC",

    // borders
    // 'border-main' is an alias of 'background-selected' (compatibility reasons)
    "border-main" : "#6694E3",
    "border-light" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.15)" : "#D8D8D8",
    "border-light-darker" : "rgba(0, 0, 0, 0.2)",
    "border-light-shadow" : "rgba(0, 0, 0, 0.15)",
    "border-super-light" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.06)" : "#EEEEEE",

    // separator
    "border-separator" : "#808080",

    // text
    "text-combobox-listitem" : "rgba(0, 0, 0, 0.6)", //NOT USED
    "text" : [0, 0, 0],
    "text-darker" : [0, 0, 0],
    "text-disabled" : "rgba(0, 0, 0, 0.4)",
    "text-selected" : "#000000",
    "text-placeholder" : "rgba(0, 0, 0, 0.4)",

    // tooltip
    "tooltip" : "#FFFFE1",
    "tooltip-text" : "#000000",

    // table
    "table-border" : "#DEDEDE",
    "table-header" : "#F9FAFB",
    "table-focus-indicator" : [ 179, 217, 255 ],

    // used in table code
    "table-header-cell" : [ 235, 234, 219 ],
    "table-row-background-focused-selected" : [ 90, 138, 211 ],
    "table-row-background-focused" : [ 221, 238, 255 ],
    "table-row-background-selected" : [ 51, 94, 168 ],
    "table-row-background-even" : "#ffffff",
    "table-row-background-odd" : "#ffffff",
    "table-row-selected" : [ 255, 255, 255 ],
    "table-row" : [ 0, 0, 0],
    "table-row-line" : "#EEE",
    "table-column-line" : "#EEE",

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
