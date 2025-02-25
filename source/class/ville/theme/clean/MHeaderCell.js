/* ************************************************************************
   SQville
   Authors:
     * Chris Eskew (sqville) sqville@gmail.com
************************************************************************ */

qx.Mixin.define("ville.theme.clean.MHeaderCell",
    {
        
      /*
      *****************************************************************************
         PROPERTIES
      *****************************************************************************
      */
     
      properties :
      {
          /** Control the text alignment */
        sortIconProps :
        {
          check : "Map",
          nullable : true,
          themeable : true,
          apply : "_applySortIconProps"
        },

        sortIconDec :
        {
          nullable: true,
          init: null,
          apply: "_applySortIconDec",
          event: "changeSortIconDec",
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
        _applySortIconProps (value, old) 
        {
          this.getChildControl("sort-icon").set(value);
        },

        // property apply
        _applySortIconDec(value, old) {
          var icon = this.getChildControl("sort-icon", true);
          if (icon) {
            icon.setDecorator(value);
          }
        }
      }
    });