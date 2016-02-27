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

```
ember install fasteragile-calendar-icon
```

OR

```
npm install fasteragile-calendar-icon
```

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

Built with <3 by [FasterAgile](http://www.fasteragile.com).
