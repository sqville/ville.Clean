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
          apply : "_applyIconProps"
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
        }
      }
    });