# fasteragile-calendar-icon

An Ember CLI addon that provides a component to display a calendar icon.
Currently not terribly configurable but it's nice looking.

The icon was designed for a mobile application using ember-cli-ratchet, but
it should also work with webapps.

Uses moment.js to format dates.

## Usage

```
// In your .hbs template
{{calendar-icon date=todaysDate}}
```
Produces output similar to this:

![calendar icon](https://raw.githubusercontent.com/fasteragile/fasteragile-calendar-icon/master/vendor/fasteragile-calendar-icon-sample.png)

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
