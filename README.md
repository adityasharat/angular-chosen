angular-chosen
==============

Create Chosen dropdowns with ease in angular.

How to use:

* Include module in your angular app.
```JavaScript
	angular.module('myModule', ['angular.chosen']);
```

Just add 'chosen' as an to a <select> to convert it to a chosen drop down.
* list : options for the drop down.
* model : to what is the chosen binded to.

```HTML
<select chosen list="properties" model="property.name"
        ng-model="property.name"
        ng-options="p.name as p.name for p in properties"
        class="properties-dropdown">
</select>
```
