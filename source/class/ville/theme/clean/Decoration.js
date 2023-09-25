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
 * The simple qooxdoo decoration theme.
 */
qx.Theme.define("ville.theme.clean.Decoration",
{
  
  aliases : {
    decoration : "ville/theme/clean/decoration"
  },
   

  decorations :
  {   
    /*
    ---------------------------------------------------------------------------
      CORE
    ---------------------------------------------------------------------------
    */

    "border-blue" :
    {
      style :
      {
        width : 4,
        color : "background-selected"
      }
    },


    "main" :
    {
      style :
      {
        width : 1,
        radius : 3,
        color : "white-box-border"
      }
    },

    "main-dark" :
    {
      style :
      {
        width : 1,
        color : "button-border"
      }
    },

    "popup" :
    {
      style :
      {
        width: 1,
        color : "border-light",
        shadowLength : 1,
        shadowBlurRadius : 5,
        shadowColor : "shadow-light"
      }
    },
    
    "dragover" :
    {
      style : {
        bottom: [2, "solid", "dark-blue"]
      }
    },

    "cursor-move" :
    {
      style : {
        width: [2,2,2,2],
        color : "black",
        style : "dotted"
      }
    },

    "cursor-nodrop" :
    {  
      style : {
        width : 0
      }
    },

    "cursor-copy" :
    {
      style : {
        width: 0
      }
    },

    "cursor-alias" :
    {
      style : {
        width: 0
      }
    },
    

	/*
    ---------------------------------------------------------------------------
      ville.Clean icons using only Qx
      
      ICONS
    ---------------------------------------------------------------------------
    */
   "ville-icon-arrow-up" :
   {
   	  style :
      {
        color : [null,"transparent","ville-icon-base","transparent"],
        style : [null, "solid","solid","solid"],
        width : [0,4.5,4,4.5]
      }
   },
   
   "ville-icon-arrow-up-med-gray" :
   {
   	  include : "ville-icon-arrow-up",
   	  
   	  style :
      {
        color : [null,"transparent","ville-arrow-med-gray","transparent"]
      }
   },
   
   "ville-icon-arrow-up-invert" :
   {
   	  include : "ville-icon-arrow-up",
   	  
   	  style :
      {
        color : [null,"transparent","white","transparent"]
      }
   },
   
   "ville-icon-arrow-up-small" :
   {
   	  style :
      {
        color : [null,"transparent","ville-icon-base","transparent"],
        style : [null, "solid","solid","solid"],
        width : [0,3.5,3,3.5]
      }
   },
   
   "ville-icon-arrow-down" :
   {
   	  style :
      {
        color : ["ville-icon-base","transparent",null,"transparent"],
        style : ["solid", "solid",null,"solid"],
        width : [4,4.5,0,4.5]
      }
   },
   
   "ville-icon-arrow-down-med-gray" :
   {
   	  include : "ville-icon-arrow-down",
   	  
   	  style :
      {
        color : ["ville-arrow-med-gray","transparent",null,"transparent"]
      }
   },
   
   "ville-icon-arrow-down-invert" :
   {
   	  include : "ville-icon-arrow-down",
   	  
   	  style :
      {
        color : ["white","transparent",null,"transparent"]
      }
   },
   
   "ville-icon-arrow-down-small" :
   {
   	  style :
      {
        color : ["ville-icon-base","transparent",null,"transparent"],
        style : ["solid", "solid",null,"solid"],
        width : [3,3.5,0,3.5]
      }
   },
   
   "ville-icon-arrow-right" :
   {
   	  style :
      {
        color : ["transparent",null,"transparent","ville-arrow-gray"],
        style : ["solid",null,"solid","solid"],
        width : [4.5,0,4.5,4]
      }
   },
   
   "ville-icon-arrow-right-invert" :
   {
   	  include : "ville-icon-arrow-right",
   	  
   	  style :
      {
        color : ["transparent",null,"transparent","white"]
      }
   },
   
   "ville-icon-arrow-right-small" :
   {
   	  style :
      {
        color : ["transparent",null,"transparent","ville-icon-base"],
        style : ["solid",null,"solid","solid"],
        width : [3.5,0,3.5,4]
      }
   },
   
   "ville-icon-arrow-forward" :
   {
   	  style :
      {
        color : ["transparent",null,"transparent","ville-icon-base"],
        style : ["solid",null,"solid","solid"],
        width : [3.5,0,3.5,4],
        shadowColor : "ville-icon-base",
        shadowLength : [0, 2],
        shadowBlurRadius : 0,
        shadowSpreadRadius : 0
      }
   },

   "ville-icon-arrow-rewind" :
   {
    include : "ville-icon-arrow-left-small",   
    
    style :
   	  {
        shadowColor : "ville-icon-base",
        shadowLength : [0, 2],
        shadowBlurRadius : 0,
        shadowSpreadRadius : 0
   	  }
   },
   
   "ville-icon-arrow-left" :
   {
   	  style :
   	  {
   	  	color : ["transparent","ville-arrow-gray","transparent",null],
        style : ["solid","solid","solid",null],
        width : [4.5,4,4.5,0]
   	  }
   },
   
   "ville-icon-arrow-left-small" :
   {
   	  style :
      {
        color : ["transparent","ville-icon-base","transparent",null],
        style : ["solid", "solid","solid",null],
        width : [3.5,4,3.5,0]
      }
   },
   
   "ville-icon-triangle-bottom-right" :
   {
   	style :
      {
        color : [null,null,"ville-arrow-gray","transparent"],
        style : [null,null,"solid","solid"],
        width : [0,0,6,6]
      }
   },
   
   "ville-icon-dot-black" :
    {
      style :
      {
        radius : 10,
        width : 1,
        color : "ville-icon-base",
        innerColor: "white",
        innerWidth: 3
      }
    },

    "ville-icon-tree-file" :
   {
   	  style :
   	  {
        radius : 3,
        color : "text",
        style : "solid",
        width : 1
   	  }
   },

   "ville-icon-tree-folder" :
   {
   	  style :
   	  {
        radius : 1,
        color : "text",
        style : "solid",
        width : 2
   	  }
   },

   "ville-icon-tree-folder-opened" : "ville-icon-tree-folder",

   "ville-icon-checkbox-checked" :
   {
   	  style :
   	  {
        radius : 1,
        color : "text",
        style : "solid",
        width : 0
   	  }
   },

   "ville-icon-checkbox-unchecked" :
   {
   	  style :
   	  {
        width : 0
   	  }
   },

   "ville-icon-checkbox-undetermined" :
   {
   	  style :
   	  {
        width : 0
   	  }
   },

    /*
    ---------------------------------------------------------------------------
      BUTTON
    ---------------------------------------------------------------------------
    */
    "button-box" :
    {
      style :
      {
        radius : 3,
        width : 0,
        color : "button-border",
        backgroundColor : "button-box-bright"
      }
    },

    "button-box-blank" :
    {
      include : "button-box",

      style :
      {
        backgroundColor : "white"
      }
    },

    "button-box-pressed" :
    {
      include : "button-box",

      style :
      {
        backgroundColor : "button-box-bright-pressed"
      }
    },

    "button-box-pressed-hovered" :
    {
      include : "button-box-pressed",

      style :
      {
        color : "button-border-hovered"
      }
    },

    "button-box-hovered" :
    {
      include : "button-box",

      style :
      {
        backgroundColor : "button-box-bright-hovered"
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON INVALID
    ---------------------------------------------------------------------------
    */
    "button-box-invalid" :
    {
      include : "button-box",

      style :
      {
        color : "invalid"
      }
    },

    "button-box-pressed-invalid" :
    {
      include : "button-box-pressed",

      style :
      {
        color : "invalid"
      }
    },

    "button-box-hovered-invalid" : {include: "button-box-invalid"},

    "button-box-pressed-hovered-invalid" : {include: "button-box-pressed-invalid"},


    /*
    ---------------------------------------------------------------------------
      BUTTON FOCUSED
    ---------------------------------------------------------------------------
    */
    "button-box-focused" :
    {
      include : "button-box-pressed"
    },

    "button-box-pressed-focused" :
    {
      include : "button-box-pressed",

      style :
      {
        color : "background-selected"
      }
    },

    "button-box-hovered-focused" : {include: "button-box-focused"},

    "button-box-pressed-hovered-focused" : {include: "button-box-pressed-focused"},


    /*
    ---------------------------------------------------------------------------
      BUTTON RIGHT
    ---------------------------------------------------------------------------
    */
    "button-box-right" :
    {
      include : "button-box",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },

    "button-box-pressed-right" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },

    "button-box-pressed-hovered-right" :
    {
      include : "button-box-pressed-hovered",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },

    "button-box-hovered-right" :
    {
      include : "button-box-hovered",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },

    "button-box-focused-right" :
    {
      include : "button-box-focused",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },

    "button-box-hovered-focused-right" :
    {
      include : "button-box-hovered-focused",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },

    "button-box-pressed-focused-right" :
    {
      include : "button-box-pressed-focused",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },

    "button-box-pressed-hovered-focused-right" :
    {
      include : "button-box-pressed-hovered-focused",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON BORDERLESS RIGHT
    ---------------------------------------------------------------------------
    */
    
    "button-box-right-borderless" :
    {
      include : "button-box",

      style :
      {
        radius : [0, 3, 3, 0],
        width: 1,
        color : [ "border-light-shadow", "border-light", "border-light", "border-light" ]
      }
    },

    "button-box-pressed-right-borderless" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [0, 3, 3, 0],
        width: 1
      }
    },

    "button-box-pressed-hovered-right-borderless" :
    {
      include : "button-box-pressed-hovered",

      style :
      {
        radius : [0, 3, 3, 0],
        width: 1
      }
    },

    "button-box-hovered-right-borderless" :
    {
      include : "button-box-hovered",

      style :
      {
        radius : [0, 3, 3, 0],
        width: 1,
        color: "textfield-selected"
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON TOP RIGHT
    ---------------------------------------------------------------------------
    */
    "button-box-top-right" :
    {
      include : "button-box",

      style :
      {
        radius : [0, 3, 0, 0],
        width: [1, 1, 1, 1],
        color: "border-light"
      }
    },
    
    "button-box-hovered-top-right" : 
    {
      include : "button-box-top-right",

      style :
      {
        color: "textfield-selected"
      }
    },

    /*
    ---------------------------------------------------------------------------
      BUTTON BOTTOM RIGHT
    ---------------------------------------------------------------------------
    */
    "button-box-bottom-right" :
    {
      include : "button-box",

      style :
      {
        radius : [0, 0, 3, 0],
        width : [0, 1, 1, 1],
        color: "border-light"
      }
    },

    "button-box-hovered-bottom-right" :
    {
      include : "button-box-bottom-right",

      style :
      {
        color : "textfield-selected"
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON BOTTOM LEFT
    ---------------------------------------------------------------------------
    */
    "button-box-bottom-left" :
    {
      include : "button-box",

      style :
      {
        radius : [0, 0, 0, 3],
        width : [0, 0, 1, 1]
      }
    },

    "button-box-pressed-bottom-left" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [0, 0, 0, 3],
        width : [0, 0, 1, 1]
      }
    },

    "button-box-pressed-hovered-bottom-left" :
    {
      include : "button-box-pressed-hovered",

      style :
      {
        radius : [0, 0, 0, 3],
        width : [0, 0, 1, 1]
      }
    },

    "button-box-hovered-bottom-left" :
    {
      include : "button-box-hovered",

      style :
      {
        radius : [0, 0, 0, 3],
        width : [0, 0, 1, 1]
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON TOP LEFT
    ---------------------------------------------------------------------------
    */
    "button-box-top-left" :
    {
      include : "button-box",

      style :
      {
        radius : [3, 0, 0, 0],
        width : [1, 0, 0, 1]
      }
    },

    "button-box-pressed-top-left" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [3, 0, 0, 0],
        width : [1, 0, 0, 1]
      }
    },

    "button-box-pressed-hovered-top-left" :
    {
      include : "button-box-pressed-hovered",

      style :
      {
        radius : [3, 0, 0, 0],
        width : [1, 0, 0, 1]
      }
    },

    "button-box-hovered-top-left" :
    {
      include : "button-box-hovered",

      style :
      {
        radius : [3, 0, 0, 0],
        width : [1, 0, 0, 1]
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON MIDDLE
    ---------------------------------------------------------------------------
    */
    "button-box-middle" :
    {
      include : "button-box",

      style :
      {
        radius : 0
        //width : [1, 0, 1, 1]
      }
    },

    "button-box-pressed-middle" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : 0
        //width : [1, 0, 1, 1]
      }
    },

    "button-box-pressed-hovered-middle" :
    {
      include : "button-box-pressed-hovered",

      style :
      {
        radius : 0
        //width : [1, 0, 1, 1]
      }
    },

    "button-box-hovered-middle" :
    {
      include : "button-box-hovered",

      style :
      {
        radius : 0
        //width : [1, 0, 1, 1]
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON LEFT
    ---------------------------------------------------------------------------
    */
    "button-box-left" :
    {
      include : "button-box",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

    "button-box-pressed-left" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

    "button-box-pressed-hovered-left" :
    {
      include : "button-box-pressed-hovered",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

    "button-box-hovered-left" :
    {
      include : "button-box-hovered",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

    "button-box-focused-left" :
    {
      include : "button-box-focused",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

    "button-box-hovered-focused-left" :
    {
      include : "button-box-hovered-focused",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

    "button-box-pressed-hovered-focused-left" :
    {
      include : "button-box-pressed-hovered-focused",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

    "button-box-pressed-focused-left" :
    {
      include : "button-box-pressed-focused",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

        /*
    ---------------------------------------------------------------------------
      BUTTON LEFT BORDER
    ---------------------------------------------------------------------------
    */
   "button-box-left-border" :
   {
     include : "button-box-left",

     style :
     {
       width : [1,0,1,1]
     }
   },

   "button-box-pressed-left-border" :
   {
     include : "button-box-pressed-left",

     style :
     {
      width : 1
     }
   },
       
    
    /*
    ---------------------------------------------------------------------------
      SPLITBUTTON
    ---------------------------------------------------------------------------
    */
    
    "splitbutton" :
    {
    	style :
    	{
    		radius : 3
    	}
    },
    
    "splitbutton-box-left" :
    {
      inclue : "button-box",
      
      style :
      {
        radius : [3,0,0,3],
        backgroundColor : "button-box-bright"
      }
    },
    
    "splitbutton-box-pressed-left" :
    {
      include : "splitbutton-box-left",

      style :
      {
        backgroundColor : "button-box-bright-pressed"
      }
    },

    "splitbutton-box-pressed-hovered-left" :
    {
      include : "splitbutton-box-pressed-left",

      style :
      {
        color : "button-border-hovered"
      }
    },

    "splitbutton-box-hovered-left" :
    {
      include : "splitbutton-box-left",

      style :
      {
        backgroundColor : "button-box-bright-hovered"
      }
    },


    /*
    ---------------------------------------------------------------------------
      SEPARATOR
    ---------------------------------------------------------------------------
    */

    "separator-horizontal" :
    {
      style :
      {
        widthLeft : 1,
        colorLeft : "border-separator"
      }
    },

    "separator-vertical" :
    {
      style :
      {
        widthTop : 1,
        colorTop : "border-separator"
      }
    },


    /*
    ---------------------------------------------------------------------------
      SCROLL KNOB
    ---------------------------------------------------------------------------
    */
    "scroll-knob" :
    {
      style :
      {
        radius : 3,
        width : 1,
        color : "button-border",
        backgroundColor : "scrollbar-bright"
      }
    },

    "scroll-knob-pressed" :
    {
      include : "scroll-knob",

      style :
      {
        backgroundColor : "scrollbar-dark"
      }
    },

    "scroll-knob-hovered" :
    {
      include: "scroll-knob",

      style :
      {
        color : "button-border-hovered"
      }
    },

    "scroll-knob-pressed-hovered" :
    {
      include: "scroll-knob-pressed",

      style :
      {
        color : "button-border-hovered"
      }
    },

    /*
    ---------------------------------------------------------------------------
      SLIDER KNOB
    ---------------------------------------------------------------------------
    */
   "slider-knob" :
   {
    include : "scroll-knob", 
    
    style :
     {
       radius : 1000
     }
   },

   "slider-knob-pressed" :
   {
     include : "slider-knob",

     style :
     {
       backgroundColor : "scrollbar-dark"
     }
   },

   "slider-knob-hovered" :
   {
     include: "slider-knob",

     style :
     {
       color : "button-border-hovered"
     }
   },

   "slider-knob-pressed-hovered" :
   {
     include: "slider-knob-pressed",

     style :
     {
       color : "button-border-hovered"
     }
   },

    /*
    ---------------------------------------------------------------------------
      SPLITPANE KNOB
    ---------------------------------------------------------------------------
    */
    "splitpane-knob" :
    {
      style : 
      {
        width : [0,2,0,0],
        color : "gray",
        style : "dotted"
      }
    },

    /*
    ---------------------------------------------------------------------------
      HOVER BUTTON
    ---------------------------------------------------------------------------
    */
    "button-hover" :
    {
      style :
      {
        backgroundColor : "button",
        radius : 3
      }
    },
  
    
    /*
    ---------------------------------------------------------------------------
      WINDOW
    ---------------------------------------------------------------------------
    */
    "window" :
    {
      style :
      {
        width : 1,
        color : "border-light",
        innerWidth : 4,
        innerColor: "window-border-inner",
        shadowLength : 0,
        shadowBlurRadius : 0,
        shadowColor : "shadow",
        backgroundColor : "background",
        radius : 3
      }
    },

    "window-active" :
    {
      include : "window",

      style :
      {
        shadowLength : [1,2],
        shadowBlurRadius : 2
      }
    },


    "window-caption" : {
      style :
      {
        width : [0, 0, 2, 0],
        color : "background"
      }
    },

    "window-statusbar" :
    {
      include : "statusbar",

      style :
      {
        width : 0
      }
    },
    
    "window-button-minimize-icon" :
    {
      style :
      {
        width : [0,10,4,0],
        color : "gray"
      }
    },
    
    "window-button-minimize-icon-hover" :
    {
      include : "window-button-minimize-icon",
      
      style :
      {
        color : "black"
      }
    },
    
    "window-button-maximize-icon" :
    {
      style :
      {
        width : [4,2,2,2],
        color : "gray"
      }
    },
    
    "window-button-maximize-icon-hover" :
    {
      include : "window-button-maximize-icon",
      
      style :
      {
        color : "black"
      }
    },
    
    "window-button-close-icon" :
    {
      style :
      {
        color : "gray"
      }
    },
    
    "window-button-close-icon-hover" :
    {     
      style :
      {
        color : "black"
      }
    },
   
   "window-button-restore-icon" :
    {
      style :
      {
        width : [4,2,2,2],
        color : "gray",
        shadowColor : "gray",
        shadowLength : [2, 2],
        shadowBlurRadius : 0,
        shadowSpreadRadius : 0
      }
    },
    
    "window-button-restore-icon-hover" :
    {
      include : "window-button-restore-icon",
      
      style :
      {
        color : "black"
      }
    },


    /*
    ---------------------------------------------------------------------------
      GROUP BOX
    ---------------------------------------------------------------------------
    */
    
    "white-box" :
    {
      style :
      {
        width: 1,
        color: "white-box-border",
        radius: 3,
        backgroundColor : "white",
        shadowLength: 0,
        shadowBlurRadius : 0,
        shadowColor : "#999999"
      }
    },
    
    "connected-top-legend" :
    {
    	include : "white-box",
    	
    	style :
	    {
	      width: [1,1,0,1],
	      radius: [ 3, 3, 0, 0 ]
	    }
    },
    
    "connected-top-box" :
    {
    	include : "white-box",
    	
    	style :
	    {
	      width: [1,0,0,0],
	      radius: [ 0, 0, 0, 0 ]
	    }
    },

    /*
    ---------------------------------------------------------------------------
      TEXT FIELD
    ---------------------------------------------------------------------------
    */

    "inset" :
    {
      style :
      {
        width : 1,
        color : "border-light",
        radius : 3
      }
    },

    "inset-line" :
    {
      style :
      {
        backgroundImage: "ville/theme/clean/decoration/slider/line.png",
        backgroundRepeat: 'repeat',
        backgroundPositionX: "center",
        backgroundPositionY: "center"
      }
    },

    "focused-inset" :
    {
      include : "inset",
      style :
      {
        color : "textfield-selected"
      }
    },

    "focused-inset-line" :
    {
      include : "inset-line",
      style :
      {
        backgroundImage: "ville/theme/clean/decoration/slider/line-selected.png"
      }
    },
    
    "form-focused-inset" :
    {
      style :
      {
        width : [1,1,1,2],
        color: [ "textfield-selected", "textfield-selected", "textfield-selected", "box-border-blue" ],
        radius: [ 3, 2, 2, 3 ]
      }
    },

    "border-invalid" :
    {
      include : "inset",
      style :
      {
        color : "#dbb1b1"
      }
    },

    "invalid-line" :
    {
      include : "inset-line",
      style :
      {
        backgroundImage: "ville/theme/clean/decoration/slider/line-invalid.png"
      }
    },
    
    "combobox-inset" :
    {
      include : "inset",
      
      style :
      {
        width : [1,0,1,1],
        radius : [3,0,0,3]
      }
    },

    "combobox-focused-inset" :
    {
      include : "focused-inset",
      
      style :
      {
        width : [1,0,1,1],
        radius : [3,0,0,3]
      }
    },

    "combobox-border-invalid" :
    {
      include : "combobox-inset",
      
      style :
      {
        color : "#dbb1b1"
      }
    },
    
    "selectbox-popup" :
    {
    	include : "popup",
    	
    	style :
    	{
        color : "textfield-selected"
    	}
    },
    
    "combobox-listitem" :
    {
    	
    	style :
    	{
    	  width : [0,0,0,0],
        color : "border-super-light"
    	}
    },


    /*
    ---------------------------------------------------------------------------
      LIST ITEM
    ---------------------------------------------------------------------------
    */

    "lead-item" :
    {
      style :
      {
        width : 1,
        style : "dotted",
        color : "border-lead"
      }
    },




    /*
    ---------------------------------------------------------------------------
      TOOL TIP
    ---------------------------------------------------------------------------
    */

    "tooltip" :
    {
      style :
      {
        width : 1,
        color : "tooltip-text",
        shadowLength : 1,
        shadowBlurRadius : 2,
        shadowColor : "shadow"
      }
    },


    "tooltip-error" :
    {
      style : {
        radius: 5,
        backgroundColor: "invalid"
      }
    },




    /*
    ---------------------------------------------------------------------------
      TOOLBAR
    ---------------------------------------------------------------------------
    */

    "toolbar-separator" :
    {
      style :
      {
        //widthLeft : 1,
        colorLeft : "button-border"
      }
    },


    /*
    ---------------------------------------------------------------------------
      MENU
    ---------------------------------------------------------------------------
    */
    "menu-separator" :
    {
      style :
      {
        widthTop: 1,
        colorTop : "border-light"
      }
    },

    "menu-radiobutton" :
    {
      style :
      {
        radius : 10,
        width : 0,
        color : "transparent",
        innerColor: "text",
        innerWidth: 0
      }
    },

    "menu-checkbox-checked" :
    {
      include: "checkbox-checked",
      style :
      {
        radius : 0,
        width : 0,
        color : "transparent",
        innerColor: "transparent",
        innerWidth: 0
      }
    },


    /*
    ---------------------------------------------------------------------------
      MENU BAR
    ---------------------------------------------------------------------------
    */
    "menubar-button-hovered" :
    {
      style :
      {
        width : 1,
        color : "border-main",
        radius : 3,
        backgroundColor : "white"
      }
    },


    "menubar-button-pressed" :
    {
      include : "menubar-button-hovered",

      style :
      {
        radius : [3, 3, 0, 0],
        width : [1, 1, 0, 1]
      }
    },


    /*
    ---------------------------------------------------------------------------
      DATE CHOOSER
    ---------------------------------------------------------------------------
    */
   
    "datechooser-button" :
    {},

    "datechooser-date-pane" :
    {
      style :
      {
        widthTop: 1,
        colorTop : "border-light",
        style : "solid"
      }
    },


    "datechooser-weekday" :
    {
      style :
      {
        widthBottom: 1,
        colorBottom : "border-light",
        style : "solid"
      }
    },

    "datechooser-week" :
    {
      style :
      {
        widthRight: 1,
        colorRight : "border-light",
        style : "solid"
      }
    },

    "datechooser-week-header" :
    {
      style :
      {
        widthBottom : 1,
        colorBottom : "border-light",
        widthRight: 1,
        colorRight : "border-light",
        style : "solid"
      }
    },





    /*
    ---------------------------------------------------------------------------
      TAB VIEW
    ---------------------------------------------------------------------------
    */
   

    "tabview-page-button-top" :
    {
      style :
      {
        width : [1, 1, 0, 1],
        backgroundColor: "background",
        color : "white-box-border",
        //color : ["white-box-border", "white-box-border", "white", "white-box-border"],
        radius : [3, 3, 0, 0]
      }
    },

    "tabview-page-button-bottom" : {
      include : "tabview-page-button-top",

      style :
      {
        radius : [0, 0, 3, 3],
        width : [0, 1, 1, 1]
        //color : ["white", "white-box-border", "white-box-border", "white-box-border"]
      }
    },

    "tabview-page-button-left" : {
      include : "tabview-page-button-top",

      style :
      {
        radius : [3, 0, 0, 3],
        width : [1, 0, 1, 1]
        //color : ["white-box-border", "white", "white-box-border", "white-box-border"]
      }
    },

    "tabview-page-button-right" : {
      include : "tabview-page-button-top",

      style :
      {
        radius : [0, 3, 3, 0],
        width : [1, 1, 1, 0]
      }
    },
    
    
    /*
    ---------------------------------------------------------------------------
      ville.Clean
      
      TAB VIEW SPACEBAR
    ---------------------------------------------------------------------------
    */

    "tabviewspacebar-page-button-top" :
    {
      style :
      {
        width : [0, 0, 3, 0],
        backgroundColor: "background",
        //color : "white-box-border"
        color : "tabviewspacebar-bar-selected"
      }
    },

    "tabviewspacebar-page-button-bottom" : {
      include : "tabviewspacebar-page-button-top",

      style :
      {
        width : [3, 0, 0, 0]
      }
    },

    "tabviewspacebar-page-button-left" : {
      include : "tabviewspacebar-page-button-top",

      style :
      {
        width : [0, 3, 0, 0]
      }
    },
    "tabviewspacebar-page-button-right" : {
      include : "tabviewspacebar-page-button-top",

      style :
      {
        width : [0, 0, 0, 3]
      }
    },
    
    "tabviewspacebar-bar-top" : "tabview-bar-top",
    
    "tabviewspacebar-bar-bottom" : "tabviewspacebar-bar-top",
    
    "tabviewspacebar-bar-right" : "tabviewspacebar-bar-top",
    
    "tabviewspacebar-bar-left" : "tabviewspacebar-bar-top",
    
    /*
    ---------------------------------------------------------------------------
      ville.Clean
      
      TAB VIEW SPOT
    ---------------------------------------------------------------------------
    */

    "tabviewspot-page-button-top" :
    {
      include : "button-box",
      
      style :
      {
        backgroundColor: "tabviewspot-button-checked"
      }
    },
    
    "tabviewspot-page-button-top-hovered" :
    {
      include : "button-box",
      
      style :
      {
        backgroundColor: "tabviewspot-button-hovered"
      }
    },
    
    "tabviewspot-bar-top" : "tabview-bar-top",
    
    "tabviewspot-bar-bottom" : "tabviewspacebar-bar-top",
    
    "tabviewspot-bar-right" : "tabviewspacebar-bar-top",
    
    "tabviewspot-bar-left" : "tabviewspacebar-bar-top",


    /*
    ---------------------------------------------------------------------------
      TABLE
    ---------------------------------------------------------------------------
    */
   
   "table-standard" :
   {
      style :
      {
        radius : 3,
        width : 10,
        color : "green",
        style : "solid"
      }
    },

    "table-pane" :
    {
      width : [0,1,0,1],
      color : "table-border"
    },

    "statusbar" :
    {
      style :
      {
        width : 1,
        color : "table-border",
        style : "solid",
        radius : [0,0,3,3]
      }
    },

    "table-scroller-focus-indicator" :
    {
      style :
      {
        width : 2,
        color : "table-focus-indicator",
        style : "solid"
      }
    },

    "table-header" :
    {
      style :
      {
        radius : [3,0,0,0],
        width : [1,1,1,1],
        color : "table-border"
        
      }
    },

    "table-header-column-button" :
    {
      include : "table-header",
      style : {
        radius : [0,3,0,0],
        width : [1,1,1,0],
        color : "table-border"
      }
    },

    "select-column-order-vert" :
    {
    	style : {
    		radius : 1,
        widthLeft : 2,
        widthRight : 2,
        widthTop : 3,
        widthBottom : 2,
	      innerWidthTop: 0,
	      innerWidthLeft: 3,
	      innerWidthRight: 3,
	      innerWidthBottom: 0,
        colorTop : "text-darker",
        colorBottom : "text-darker",
        colorLeft : "text-darker",
        innerColorLeft: "table-header",
        innerColorRight: "table-header",
        colorRight : "text-darker"
    	}
    },

    "select-column-order-hovered-vert" :
    {
    	style : {
    		radius : 1,
        widthLeft : 2,
        widthRight : 2,
        widthTop : 3,
        widthBottom : 2,
	      innerWidthTop: 0,
	      innerWidthLeft: 3,
	      innerWidthRight: 3,
	      innerWidthBottom: 0,
        colorTop : "text",
        colorBottom : "text",
        colorLeft : "text",
        innerColorLeft: "table-header",
        innerColorRight: "table-header",
        colorRight : "text"
    	}
    },
    
    "select-column-order" :
    {
    	style : {
    		radius : 1,
        widthLeft : 0,
        widthRight : 0,
        widthTop : 2,
        widthBottom : 2,
	      innerWidthTop: 2,
	      innerWidthLeft: 0,
	      innerWidthRight: 0,
	      innerWidthBottom: 2,
	      colorTop : "gray",
        innerColorTop: "table-header",
        innerColorBottom: "table-header",
        colorBottom : "gray"
    	}
    },
    
    "select-column-order-hover" :
    {
    	include: "select-column-order",
    	style : {
	        color : "black",
	        innerColor: "black"
    	}
    },

    "table-header-cell" :
    {
      style :
      {
        widthRight : 1,
        widthBottom : 0,
        color : "table-border"
      }
    },

    "table-header-cell-first" :
    {
      include : "table-header-cell",
      style : {
        radius : [0,0,0,0]
      }
    },

    "progressive-table-header" :
    {
      include : "button-box",

      style :
      {
        radius : 0,
        width : [1, 0, 1, 1]
      }
    },

    "progressive-table-header-cell" :
    {
      style :
      {
        widthRight: 1,
        color : "button-border"
      }
    },


    /*
    ---------------------------------------------------------------------------
      PROGRESSBAR
    ---------------------------------------------------------------------------
    */

    "progressbar" :
    {
      style:
      {
        backgroundColor: "#FFF",
        radius : 0,
        width: 0,
        color: "border-separator"
      }
    },
    
    "progressbar-trans" :
    {
        radius : 0,
        width: 0
    },



    /*
    ---------------------------------------------------------------------------
      RADIO BUTTON
    ---------------------------------------------------------------------------
    */

    "radiobutton" :
    {
      style :
      {
        radius : 1000,
        width : 1,
        color : "border-light-darker",
        innerColor: "background",
        innerWidth: 3
      }
    },

    // Not used any more
    /*"radiobutton-focused" :
    {
      include : "radiobutton",
      style :
      {
        //color : "textfield-selected"
      }
    },*/

    "radiobutton-invalid" :
    {
      include : "radiobutton",
      style :
      {
        color : "invalid"
      }
    },


    /*
    ---------------------------------------------------------------------------
      CHECK BOX
    ---------------------------------------------------------------------------
    */

   "checkbox" :
    {
      include : "radiobutton",
      
      style :
      {
        radius : 3,
        innerWidth: 0
      }
    },
    
    "checkbox-checked" :
    {
    	include : "checkbox",
    	
    	style :
    	{
    		innerWidth : 0
    	}
    },

    "checkbox-checked-disabled" : "checkbox-checked",   

    "checkbox-focused" :
    {
      include : "checkbox",
      style :
      {
        color : "textfield-selected"
      }
    },

    "checkbox-checked-focused" :
    {
    	include : "checkbox-checked",
    	
    	style :
    	{
        innerWidth : 0,
        color : "textfield-selected"
    	}
    },

    "checkbox-invalid" :
    {
      include : "checkbox",
      style :
      {
        color : "invalid"
      }
    },

    "checkbox-checked-invalid" :
    {
      include : "checkbox-checked",
      style :
      {
        color : "invalid"
      }
    },

    "checkbox-undetermined" :
    {
      include : "checkbox",
      style :
      {
        innerWidth : [6,3],
        innerColor: "white"
      }
    },

    "checkbox-undetermined-focused" :
    {
    	include : "checkbox-undetermined",
    	
    	style :
    	{
    		color : "textfield-selected"
    	}
    },

    "checkbox-undetermined-disabled" :
    {
      include : "checkbox-undetermined",
      style :
      {
        color : "text-disabled"
      }
    },

    "checkbox-undetermined-invalid" :
    {
      include : "checkbox-undetermined",
      style :
      {
        color : "invalid"
      }
    }
  }
});
