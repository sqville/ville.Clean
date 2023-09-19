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
 * The ville Clean font theme.
 *
 * @usefont(LatoWeb)
 * @usefont(LatoWebBold)
 * @usefont(LatoWebBlack)
 * @usefont(LatoWebSemibold)
 */
qx.Theme.define("ville.theme.clean.Font",
{
  fonts :
  {
    default :
    {
      family : ["sans-serif"],
      color : "text",
      size : 14,
      weight : "400",
      fontName : "LatoWeb"
    },

    bold :
    {
      family : ["sans-serif"],
      color : "text",
      size : 14,
      weight : "700",
      fontName : "LatoWebBold"
    },

    button : 
    {
      include : "bold",
      size : 14
    },

    datechooser :
    {
      include : "default",
      size : 13
    },

    "datechooser-bold" :
    {
      include : "bold",
      size : 13
    },

    "groupbox-legend" :
    {
      include : "bold"
    },

    "window-header" :
    {
      include : "default",
      size : 20
    },    
    
    "unicode-icons-sm" :
    {
    	size : 20,
    	family : ["arial", "helvetica", "Segoe UI Symbol"]
    },
    
    input :
    {
      include : "default",
      size : 14
    },
   

    headline :
    {
      include : "default",
      size : 24
    },

    small :
    {
      include : "default",
      size : 11
    },
        
    // Theme Browser Content Formatting
    "control-header" :
    {
    	include : "default",
    	size : 24,
    	bold : true
    },
    
    "control-header2" :
    {
    	include : "default",
    	size : 20
    },

    // TreeVirtual Legacy
    "treevirtual" :
    {
      include : "default",
    	size : 8
    }
  }
});
