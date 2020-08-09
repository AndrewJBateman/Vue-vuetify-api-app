# :zap: Vue Vuetify Forms

* App using the Vue.js + vuex material design framework to display data

**Note:** to open web links in a new window use: _ctrl+click on link_

## :page_facing_up: Table of contents

* [:zap: Vue Vuetify Forms](#zap-vue-vuetify-forms)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* `.prettierrc` file added to configure Prettier settings
* BEM —Block, Element, Modifier — CSS methodology used:
_* `.block { ... }` represent a component. They’re standalone entities and are meaningful on their own.
* `.block__element { ... }` parts of a .block. They have no standalone meaning and must be tied to a block.
* `.block--modifier { ... }` used as flags on blocks or elements. We can use them to change the appearance, behavior, or state of elements. For example, to use a hidden flag, we could say `.block--hidden`._

## :camera: Screenshots

![Example screenshot](./img/.png).

## :signal_strength: Technologies

* [Vue framework v2.6](https://vuejs.org/)
* [vuex v3](https://vuex.vuejs.org/)
* [Vue DevTools extension for Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) was useful for debugging and seeing what was happening with the state when Vuex was used.
* [Electron](https://www.electronjs.org/) to build a cross-platform **desktop** app.
* [Vue CLI Plugin Electron Builder](https://nklayman.github.io/vue-cli-plugin-electron-builder/) to build a Vue.js App For Desktop With Electron
* [Axios v0.19.2](https://www.npmjs.com/package/axios) promise based HTTP client for the browser and node.js

## :floppy_disk: Setup

* For a dev server: run `npm run electron:serve` then navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.
* To crete WINDOWS build file: run `npm electron:build -- --win nsis`

## :computer: Code Examples

* tba

```javascript

```

## :cool: Features

* API key hidden from Github repo using .env - included in Vue; in Vue 2 npm dotenv was required

## :clipboard: Status & To-Do List

* Status: Working on dev server
* To-Do: add day.js frmatting of date, change random country for user country using apapi API

## :clap: Inspiration

* tba

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
