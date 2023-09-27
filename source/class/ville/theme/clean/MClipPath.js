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
 * Mixin responsible for setting the css transition properties of a widget
 * This mixin is usually used by {@link qx.ui.decoration.Decorator}.
 *
 */
qx.Mixin.define("ville.theme.clean.MClipPath", {
    properties: {
      /** clip-path */
      clipPath: {
        nullable: true,
        apply: "_applyClipPath"
      }
    },
  
    members: {
      /**
       * Takes a styles map and adds the box shadow styles in place to the
       * given map. This is the needed behavior for
       * {@link qx.ui.decoration.Decorator}.
       *
       * @param styles {Map} A map to add the styles.
       */
      _styleClipPath(styles) {
        var clippath = this.getClipPath();

        if (clippath) {
          styles["clip-path"] = clippath;
        }
      },
  
      // property apply
      _applyClipPath() {
        if (qx.core.Environment.get("qx.debug")) {
          if (this._isInitialized()) {
            throw new Error(
              "This decorator is already in-use. Modification is not possible anymore!"
            );
          }
        }
      }
    }
  });