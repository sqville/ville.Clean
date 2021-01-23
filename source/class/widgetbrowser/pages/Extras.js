/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tristan Koch (tristankoch)
     * Chris Eskew (sqville) 1/21/2021 - included controls to show new, ville.Clean, appearances 

************************************************************************ */

/**
 * Demonstrates ville.theme.Clean extra appearance entries:
 *
 * Buttons: Primary, Secondary and Tertiary
 *
 * Tabview: SpaceBar and Spot
 * 
 * GroupBox: Connected, Colored Tops
 *
 */

qx.Class.define("widgetbrowser.pages.Extras",
{
  extend: widgetbrowser.pages.AbstractPage,

  construct: function()
  {
    this.base(arguments);

    var hbox = this.__hbox = new qx.ui.container.Composite(new qx.ui.layout.HBox(3));
    this.add(hbox, {top: 20});

    this.__grid = new qx.ui.container.Composite(new qx.ui.layout.Grid(10, 20));
    this.add(this.__grid, {top: 100});

    this.initWidgets();
  },

  members :
  {

    __hbox: null,

    __grid : null,

    initWidgets: function()
    {
      var widgets = this._widgets;

      // Primary Button
      var primbutton = new qx.ui.form.Button("Primary Button").set({appearance: "primary-button"});
      widgets.push(primbutton);
      this.__hbox.add(primbutton);

      // Secondary Button
      var secbutton = new qx.ui.form.Button("Secondary Button").set({appearance: "secondary-button"});
      widgets.push(secbutton);
      this.__hbox.add(secbutton);

      // Tertiary Button
      var terbutton = new qx.ui.form.Button("Tertiary Button").set({appearance: "tertiary-button"});
      widgets.push(terbutton);
      this.__hbox.add(terbutton);

      //Tabs
      var tabTop = this.__getTabView();
      tabTop.setBarPosition("top");
      this.__grid.add(tabTop, {row:0, column:0});
      widgets.push(tabTop);

      var tabBottom = this.__getTabView();
      tabBottom.setBarPosition("bottom");
      this.__grid.add(tabBottom, {row:0, column:1});
      widgets.push(tabBottom);

      var tabLeft = this.__getTabView();
      tabLeft.setBarPosition("left");
      this.__grid.add(tabLeft, {row:1, column:0});
      widgets.push(tabLeft);

      var tabRight = this.__getTabView();
      tabRight.setBarPosition("right");
      this.__grid.add(tabRight, {row:1, column:1});
      widgets.push(tabRight);

      //Groupbox
      var gb1 = new qx.ui.groupbox.GroupBox("Blue GroupBox").set({appearance:"groupbox-blue-top"});
      this.__grid.add(gb1, {row:2, column:0});
      widgets.push(gb1);

      var gb2 = new qx.ui.groupbox.GroupBox("Orange GroupBox").set({appearance:"groupbox-orange-top"});
      this.__grid.add(gb2, {row:2, column:1});
      widgets.push(gb2);

      var gb3 = new qx.ui.groupbox.GroupBox("Green GroupBox").set({appearance:"groupbox-green-top"});
      this.__grid.add(gb3, {row:3, column:0});
      widgets.push(gb3);

    },

    toggleOverflow : function(tabView, enable) {
      if (!enable) {
        var children = tabView.getChildren();
        for (var i=children.length -1; i >=0; i--) {
          tabView.remove(children[i]);
        };
      } else {
        this.addTabPages(tabView);
      }
      this.addTabPages(tabView);
    },


    __getTabView: function() {
      var tabView = new qx.ui.tabview.TabView().set({appearance: "tabviewspacebar"});
      tabView.toggleOverflow = qx.lang.Function.bind(this.toggleOverflow, this);
      tabView.setWidth(400);
      tabView.setHeight(200);
      this.addTabPages(tabView);

      return tabView;
    },


    addTabPages : function(tabView) {
      var page1 = new qx.ui.tabview.Page("Layout", "icon/16/apps/utilities-terminal.png").set({showCloseButton: true, appearance: "tabviewspacebar-page"});
      page1.setLayout(new qx.ui.layout.VBox());
      page1.add(new qx.ui.basic.Label("Layout-Settings…"));
      tabView.add(page1);

      var page2 = new qx.ui.tabview.Page("Notes", "icon/16/apps/utilities-notes.png").set({appearance: "tabviewspacebar-page"});
      page2.setLayout(new qx.ui.layout.VBox());
      page2.add(new qx.ui.basic.Label("Notes…"));
      tabView.add(page2);

      var page3 = new qx.ui.tabview.Page("Calculator", "icon/16/apps/utilities-calculator.png").set({appearance: "tabviewspacebar-page"});
      page3.setLayout(new qx.ui.layout.VBox());
      page3.add(new qx.ui.basic.Label("Calculator…"));
      tabView.add(page3);
    }
  }
});
