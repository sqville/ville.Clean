/* ************************************************************************
   SQville
   Authors:
     * Chris Eskew (sqville) sqville@gmail.com
************************************************************************ */

qx.Mixin.define("ville.theme.clean.MTreeItem",
    {
        
      /*
      *****************************************************************************
         PROPERTIES
      *****************************************************************************
      */
     
      properties :
      {
        iconColor :
        {
          nullable: true,
          init: null,
          apply: "_applyIconColor",
          event: "changeIconColor",
          check: "Color",
          themeable: true
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
        _applyIconColor (value, old) 
        {
          var icon = this.getChildControl("icon", true);
          if (icon) {
            icon.setBackgroundColor(value);
          }
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