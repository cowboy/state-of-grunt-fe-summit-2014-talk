# The State of Grunt

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Given at [FrontEnd Summit 2014](http://environmentsforhumans.com/2014/frontend-summit/) on August 21, 2014.

View the slide deck at <http://cowboy.github.io/state-of-grunt-fe-summit-2014-talk/>.

## BYO (Build Your Own)

You'll need to have [Grunt](http://gruntjs.com/) installed.

1. Clone this project's repo.
1. Ensure the `master` branch is checked out.
1. Run `npm install` to install Grunt, Grunt plugins, etc.
1. Run `grunt` to build deck(s).
1. Open generated `dist/index.html` file in your browser.
1. Edit content in `src` and let LiveReload do its thing.

When done:

1. Run `grunt prod` to publish production-ready code to the `dist` directory.

When REALLY done:

1. Run `grunt deploy` to publish everything in `dist` and then to the `gh-pages` branch, which will shortly thereafter be viewable at <http://cowboy.github.io/state-of-grunt-fe-summit-2014-talk/>.

