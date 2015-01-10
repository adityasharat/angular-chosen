angular-chosen
==============

Create Chosen dropdowns with ease in angular.

Check out the docs at: http://adityasharat.github.io/angular-chosen/

Get the latest version at: https://github.com/adityasharat/angular-chosen/archive/v0.1-beta.zip

How to use:

* Include this module in your angular app.
```JavaScript
	angular.module('myModule', ['angular.chosen']);
```

Just add 'chosen' as an to a <select> to convert it to a chosen drop down.
* options : options for the drop down.
* model : to what is the chosen binded to.

```HTML
<select chosen options="properties"
        ng-model="property.name"
        ng-options="p.name as p.name for p in properties">
</select>
```
