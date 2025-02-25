/* ************************************************************************
   SQville
   Authors:
     * Chris Eskew (sqville) sqville@gmail.com
************************************************************************ */

qx.Mixin.define("ville.theme.clean.MButton",
    {
        
      /*
      *****************************************************************************
         PROPERTIES
      *****************************************************************************
      */
     
      properties :
      {
          /** Control the text alignment */
        iconProps :
        {
          check : "Map",
          nullable : true,
          themeable : true,
          apply : "_applyIconProps",
          event: "changeIconProps"
        },

        iconDec :
        {
          nullable: true,
          init: null,
          apply: "_applyIconDec",
          event: "changeIconDec",
          check: "Decorator",
          themeable: true
        }
          
      },
    
      /*
      *****************************************************************************
         MEMBERS
      *****************************************************************************
      */
      members :
      {
          
          // property apply
        _applyIconProps (value, old) 
        {
          this.getChildControl("icon").set(value);
        },

        // property apply
        _applyIconDec(value, old) {
          var icon = this.getChildControl("icon", true);
          if (icon) {
            icon.setDecorator(value);
          }
        }
      }
    });