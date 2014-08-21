htmltitle: The State of Grunt
class: center, middle, title

# The State of Grunt
## August 2014

![](images/grunt-logo-no-wordmark.svg)

.right[
  &ldquo;Cowboy&rdquo; Ben Alman  
  Bocoup  
]

---
class: center, middle, orange
.footer[The State of Grunt]

# About Grunt

---
class: orange
.footer[The State of Grunt - About Grunt]

# Why does Grunt exist?

--
## To automate repetitive tasks in very small projects.

--
### (like jQuery plugins)

---
class: brown
.footer[The State of Grunt - About Grunt]

# Why _doesn't_ Grunt exist?

--
## To reinvent the wheel.

--
### Grunt isn't just &ldquo;make&rdquo; in JavaScript. It was built to solve some very specific problems.

---
class: center, middle, orange
.footer[The State of Grunt]

# Grunt Today

---
class: orange
.footer[The State of Grunt - Grunt Today]

# How is Grunt actually used?

--
* To automate all the things

--
* To build very small to immensely gigantic projects

--
* To deploy code to production

--
* To run development web servers

---
class: brown
.footer[The State of Grunt - Grunt Today]

# Who uses Grunt?

--
### Bocoup
--
, Google,
--
 Facebook,
--
 Twitter,
--
 Microsoft,
--
 Mozilla, Opera, Yahoo, Adobe, WordPress, NPR,
--
 New York Times, PayPal, Walmart, Dropbox, Victoria's Secret, Cloudant, SauceLabs

--
### jQuery, MooTools, Modernizr, Angular, Marionette, Polymer, Enyo, React, Knockout, Bootstrap, Ractive, ZURB Foundation

--
### Basically, everyone.

---
class:
.footer[The State of Grunt - Grunt Today]

# How much is Grunt used?

--
.smaller[
### Grunt

  * 25,000 downloads each day
  * 5.7 million downloads total
]

--
.smaller[
### Grunt CLI .smaller[(Command-Line Interface)]

  * 17,000 downloads each day
  * 4.5 million downloads total
]

_Data from http://npm-stat.com/ as of August 21, 2014._

---
class:
.footer[The State of Grunt - Grunt Today]

# What does this mean?

--
.smaller[
* In a typical Grunt-based dev workflow, the CLI is installed once per system, while the lib is installed once per project.
]

--
.smaller[
* The relatively high proportion of CLI installs implies that many devs are using Continuous Integration, where both the CLI and core lib get installed every time.
]

--
## This is a very good thing!

---
class: orange
.footer[The State of Grunt - Current Grunt]

# Grunt Successes

--
.smaller[.smaller[
* It can be installed/run wherever Node.js can be installed
]]
--
.smaller[.smaller[
* The config and tasks are written in JavaScript (or CoffeeScript)
]]
--
.smaller[.smaller[
* Declarative configuration seems to be easier for non-programmers to approach and understand
]]
--
.smaller[.smaller[
* Task config with options merging is consistent and predictable
]]
--
.smaller[.smaller[
* It can watch the filesystem for changes and LiveReload
]]
--
.smaller[.smaller[
* There are thousands of community-authored plugins, which are really just packaged and distributed tasks
]]
--
.smaller[.smaller[
* The tasks and file API is synchronous, reducing the barrier to entry
]]
--
.smaller[.smaller[
* It behaves like other command-line utilities
]]

---
class: brown
.footer[The State of Grunt - Current Grunt]

# Secondary Benefits

--
.smaller[.smaller[
* It's the &ldquo;gateway&rdquo; for non-developers and reluctant developers to Node, JavaScript and process automation
]]
--
.smaller[.smaller[
* Testing and building JavaScript projects has become much easier
]]
--
.smaller[.smaller[
* Windows users get to more easily participate in &ldquo;Open Source&rdquo; development
]]
--
.smaller[.smaller[
* Node developers better understand the value of locally installed modules (I know I certainly do)
]]
--
.smaller[.smaller[
* Tool authors are now creating a separate lightweight global CLI for their locally-installed lib
]]
--
.smaller[.smaller[
* There's now an ongoing conversation about process automation in the web developer community
]]

---
class: orange
.footer[The State of Grunt - Current Grunt]

# Grunt Not-So Successes

--
.smaller[.smaller[
* There's currently no good way for tasks to communicate with each other, other than through temporary files
]]
--
.smaller[.smaller[
* Plugins don't feel &ldquo;node-like&rdquo;
]]
--
.smaller[.smaller[
* Task flow control isn't granular enough
]]
--
.smaller[.smaller[
* Error handling and reporting could be improved
]]
--
.smaller[.smaller[
* Bundling and exposing dependencies is a maintenance nightmare
]]
--
.smaller[.smaller[
* Because the codebase grew organically, it's hard to maintain
]]

---
class:
.footer[The State of Grunt - Grunt Today]

# Grunt vs the Alternatives

--
### Grunt - _&ldquo;The JavaScript Task Runner&rdquo;_

Grunt wants to help you automate repetetive tasks via declarative configuration.

--
### Gulp - _&ldquo;The streaming build system&rdquo;_

Gulp wants to help you build your project efficiently using streams.

--
### Broccoli - _&ldquo;Fast client-side asset builder&rdquo;_

Broccoli wants to help you build large projects with many files, fast.

---
class:
.footer[The State of Grunt - Grunt Today]

# Grunt vs the Alternatives

### Grunt - _&ldquo;The JavaScript Task Runner&rdquo;_
### Gulp - _&ldquo;The streaming build system&rdquo;_
### Broccoli - _&ldquo;Fast client-side asset builder&rdquo;_

## They're actually all good options. As long as you're using SOMETHING, you're ahead of the game.

---
class: center, middle, orange
.footer[The State of Grunt]

# Future Grunt

---
class: center, middle, orange
.footer[The State of Grunt - Future Grunt]

## First, please note that these are our _goals_. Nothing is set in stone.

---
class: center, middle, brown
.footer[The State of Grunt - Future Grunt]

# The Grunt codebase is already being rewritten to be more modular and maintainable.

---
class: center, middle, orange
.footer[The State of Grunt - Future Grunt]

# Grunt will focus on running tasks and being easy to configure and learn.

---
class: center, middle, brown
.footer[The State of Grunt - Future Grunt]

# Grunt will support existing 0.4.x plugins via _optional_ adapter, and will also support Gulp and Broccoli plugins.

---
class: center, middle, orange
.footer[The State of Grunt - Future Grunt]

# Grunt tasks will support both stream-based and promise-based input/output.

---
class: center, middle, brown
.footer[The State of Grunt - Future Grunt]

# Grunt will support tasks and &ldquo;pipelines&rdquo; that can be run in series or parallel.

---
class: center, middle, orange
.footer[The State of Grunt - Future Grunt]

# All Grunt task running and file I/O will be asynchronous. _(under the hood)_

---
class: center, middle, brown
.footer[The State of Grunt - Future Grunt]

# Grunt logging will offer redirectable, per-task streams.

---
class: center, middle, orange
.footer[The State of Grunt - Future Grunt]

# Error handling and reporting in Grunt will be improved.

---
class: center, middle, brown
.footer[The State of Grunt - Future Grunt]

# Watching files for changes will be built-in to Grunt.

---
class: center, middle
.footer[The State of Grunt]

# Final Thoughts

---
class:
.footer[The State of Grunt - Final Thoughts]

# How Can You Help?

--
.smaller[
* Keep using Grunt, reporting issues, making screencasts and writing tutorials
]
--
.smaller[
* Before deciding on Grunt vs Gulp vs Brocolli vs something else in your project, think about your needs and experiment
]
--
.smaller[
* Teach newbies how to use Grunt
]
--
.smaller[
* Give a talk at a meetup or conference
]

---
.footer[The State of Grunt]

# Talk To Us

.smaller[
* [gruntjs.com &ldquo;Getting Started&rdquo; guide](http://gruntjs.com/getting-started)
* [@gruntjs on Twitter](https://twitter.com/gruntjs)
* [\#gruntjs on irc.freenode.net](http://webchat.freenode.net/)

### (Thanks!)
]

.right[
  &ldquo;Cowboy&rdquo; Ben Alman  
  Bocoup  
]
