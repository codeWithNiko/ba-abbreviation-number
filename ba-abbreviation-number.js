/**
 @toc

 @param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
 TODO

 @param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
 TODO

 @dependencies
 TODO

 @usage
 partial / html:
 TODO

 controller / js:
 TODO

 //end: usage
 */

(function () {
    'use strict';

    angular
        .module('ba-abbreviation-number', [])
        .provider('units', function () {

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

            this.setUnits = function (value) {
                unitObject = value;
            };

            this.$get = function () {
                return unitObject;

            };
        })
        .directive('baAbbNum', baAbbNum);

    /** @ngInject */
    function baAbbNum(units, $log) {
        var directive = {
            restrict: 'E',
            template: '<span>{{myNumber}}</span>',
            scope: {
                number: "@number"
            },
            controller: baAbbNumController,
            controllerAs: 'vm',

            link: function (scope) {


                scope.$watch("number", function (data) {

                    if (data !== '') {


                        data = parseFloat(data.replace(/,/g, ''));
                        var negNumber = false;
                        var formattedNumber = data;
                        if (data < 0) {
                            negNumber = true;
                        }
                        data = Math.abs(data);
                        if (data >= 1000000000000000000000000) {
                            formattedNumber = (data / 1000000000000000000000000).toFixed(1).replace(/\.0$/, '') + units.septillion;
                        }
                        else if (data >= 1000000000000000000000) {
                            formattedNumber = (data / 1000000000000000000000).toFixed(1).replace(/\.0$/, '') + units.sextillion;
                        }
                        else if (data >= 1000000000000000000) {
                            formattedNumber = (data / 1000000000000000000).toFixed(1).replace(/\.0$/, '') + units.quintillion;
                        }
                        else if (data >= 1000000000000000) {
                            formattedNumber = (data / 1000000000000000).toFixed(1).replace(/\.0$/, '') + units.quadrillion;
                        }
                        else if (data >= 1000000000000) {
                            formattedNumber = (data / 1000000000000).toFixed(1).replace(/\.0$/, '') + units.trillion;
                        }
                        else if (data >= 1000000000) {
                            formattedNumber = (data / 1000000000).toFixed(1).replace(/\.0$/, '') + units.billion;
                        }
                        else if (data >= 1000000) {
                            formattedNumber = (data / 1000000).toFixed(1).replace(/\.0$/, '') + units.million;
                        }
                        else if (data >= 1000) {
                            formattedNumber = (data / 1000).toFixed(1).replace(/\.0$/, '') + units.thousand;
                        }
                        else {
                            formattedNumber = data;
                        }
                        if (negNumber) {
                            formattedNumber = '-' + formattedNumber;
                        }
                        scope.myNumber = formattedNumber;
                    }


                }, true);


            }
        };

        return directive;

        /** @ngInject */
        function baAbbNumController() {
            //var vm = this;

        }
    }

})();
