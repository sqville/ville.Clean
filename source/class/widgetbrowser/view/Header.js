/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Jonathan Weiß (jonathan_rass)
     * Tristan Koch (tristankoch)

************************************************************************ */
/**
 * The Application's header
 */

qx.Class.define("widgetbrowser.view.Header",
{
  extend : qx.ui.container.Composite,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @ignore(qxc)
   */
  construct : function()
  {
    this.base(arguments);

    this.setLayout(new qx.ui.layout.HBox());
    this.setAppearance("app-header");
    this.getLayout().setAlignY("middle");

    var title = new qx.ui.basic.Label("Widget Browser");
    var version = new qxl.versionlabel.VersionLabel();
    version.setFont("default");
    version.setAppearance("app-header-label");

    // Build select-box
    var hashTheme = window.location.hash.substr(1);
    var select = new qx.ui.form.SelectBox("Theme");
    var themes = qx.Theme.getAll();
    var currentThemeItem;
    for (var key in themes) {
      let theme = themes[key];
      if (theme.type === "meta") {
        var item = new qx.ui.form.ListItem(theme.name);
        item.setUserData("value", theme.name);
        select.add(item);
        if (! currentThemeItem  && hashTheme && theme.name.match(hashTheme)){
          currentThemeItem = item;
        }
      }
    }
    select.setFont("default");
    select.setTextColor("black");
    select.setWidth(250);
    select.addListener("changeSelection", function (evt) {
      var selected = evt.getData()[0].getUserData("value");
      var theme = qx.Theme.getByName(selected);
      if (theme) {
          qx.theme.manager.Meta.getInstance().setTheme(theme);
      }
    });

    // Set current theme
    if (currentThemeItem){
      select.setSelection([currentThemeItem]);
      qx.theme.manager.Meta.getInstance().setTheme(
          qx.Theme.getByName(
              currentThemeItem.getUserData("value")
          )
      );
    }

    // Finally assemble header
    this.add(title);
    this.add(new qx.ui.core.Spacer, {flex : 1});
    this.add(select);
    this.add(new qx.ui.core.Spacer, {width: "2%"});
    this.add(version);

  }
});
