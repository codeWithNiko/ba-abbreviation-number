# ba-abbreviation-number

## What is it?
ba-abbreviation-number is an angularJS directive that shortens large numbers(creates abbreviated number) that goes from
thausand to septillion
##Basic Usage
```HTML
<ba-abb-num number="{{myNum}}"></ba-abb-num>
```
than in your controller 
```javascript
$scope.myNum = '1,600.55';
```
or
```javascript
$scope.myNum = 1600.55;
```
the directive will parse the string and will output 1.6K 

There is also a provider that let's you change the value of the units,
by default the units look like this 

```javascript
 var unitObject = {

                thousand: "K",
                million: "M",
                billion: "B",
                trillion: "T",
                quadrillion: "P",
                quintillion: "E",
                sextillion: "Z",
                septillion: "Y"
            };
```
using the "unitsProvider" you can change them to your liking
```javascript
function config(unitsProvider) {
     var unitObject = {
      thousand: "Thausand",
      million: "Milion",
      billion: "Bilion",
      trillion: "Trilion",
      quadrillion: "Quadrillion",
      quintillion: "Quintillion",
      sextillion: "Sextillion",
      septillion: "Septillion"
    };
    unitsProvider.setUnits(unitObject);
    }
```
## Installation

### Bower
```HTML
bower install nikolaDrangovski/ba-abbreviation-number
```
### Manual

You can also just download the repository and include the script it in your index.html