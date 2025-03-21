<!-- ABOUT THE PROJECT -->
# ville.Clean

**ville.Clean** is a [Qooxdoo](https://qooxdoo.org/) theme inspired by [Semantic UI](https://semantic-ui.com/).

## Benefits

* Includes light (Clean) and dark (CleanDark) themes (starting from v2)
* Reduced reliance on external images for basic control graphics such as arrows, radio buttons and window buttons, and tree icons (done with qooxdoo appearance and decoration entries)
* Leverages SVG files for decoration images to improve image sharpness

<!-- DEMOS -->
## Demo

Using Qooxdoos [WidgetBrowser](https://qooxdoo.org/qxl.packagebrowser/#sqville~ville.Clean~Demos~WidgetBrowser)

<!-- GETTING STARTED -->
## Using the Theme in your Application

To use the Theme in your application, go into the application root directory and install the theme into your project:

```sh
qx package update
qx package list
qx package install sqville/ville.Clean
```

now you just have to modify your compile.json to enable the theme:

```javascript
"applications": [
  {
    ...
    "theme": "ville.theme.Clean",
    ...
  }
],
```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.
