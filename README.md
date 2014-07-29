angular-chosen
==============

Create Chosen dropdowns with ease in angular.


just add 'chosen' to a select to convert it to a chosen drop down.

list : options for the drop down.

model : to what is the chosen binded to.


```
 <select chosen list="ebsModel.properties.all" model="property.name"
        ng-model="property.name"
        ng-options="p.name as p.name for p in properties"
        class="properties-dropdown">
</select>
```
