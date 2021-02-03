<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/sqville/ville.Clean">
    <img src="ville_Clean.png" alt="Logo" width="277" height="138">
  </a>

  <h3 align="center"></h3>

  <p align="center">
    A theme for the Qooxdoo JavaScript Framework
  </p>
</p>

<!-- ABOUT THE PROJECT -->
## About The Project

**ville.Clean** is a [Qooxdoo](https://qooxdoo.org/) theme inspired by [Semantic UI](https://semantic-ui.com/). This repo replaces [sqv-qxthemes](https://github.com/sqville/sqv-qxthemes) - sqv-qxthemes was an agressive approach to qooxdoo theming (no images, everything embedded in code), thus, making it too complex to use and maintain (too many darn Mixins). This project keeps the look and feel and removes the complexity making it easy to use and maintain, and able to play well with other themes (theme switching). My need to embed has not completely gone away. That code has been moved to it's own repo called **[ville.Embed](https://github.com/sqville/ville.Embed)**

**Additional Benefits**
* Reduced reliance on external images for basic control graphics such as arrows, radio buttons and window buttons (all done with qooxdoo appearance and decoration entries)
* Leveraged SVG files for decoration images where possible to improve image sharpness
* Added control appearances for Buttons, TabViews and GroupBoxes (see Extra tab in the included widgetbrowser demo application)

**Form Controls**
<img src="ville_Clean_Form.PNG" alt="Screen shot example">


<!-- GETTING STARTED -->
## Using the Theme in your Application
To use the Theme in your application, go into the application root directory and install the theme into your project:
```sh
$ qx pkg update
$ qx pkg list
$ qx pkg install sqville/ville.Clean
```
now you just have to modify your compile.json to enable the theme:
```sh
"applications": [
  {
    ...
    "theme": "ville.theme.Clean",
    ...
  }
],
```

<!-- DEMOS -->
## Demo
Using Qooxdoos [WidgetBrowser](http://qooxdoo.org/qxl.packagebrowser/qxl.packagebrowser/demos/sqville/ville.Clean/widgetbrowser/)

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/github_username/repo_name/issues) for a list of proposed features (and known issues).


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Chris Eskew - [@SQville](https://twitter.com/SQville) - email: chris.eskew@sqville.com
