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
        }
      }
    });