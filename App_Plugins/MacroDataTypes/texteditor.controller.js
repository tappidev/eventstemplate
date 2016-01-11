angular.module("umbraco")
.controller("Macro.texteditor",
function ($scope) {
    $scope.textInput = {
        label: 'bodyText',
        description: 'Load some stuff here',
        view: 'rte',
        value: $scope.model.value,
        config: {
            editor: {
                toolbar: ["code", "styleselect", "bold", "italic", "bullist", "numlist", "link"],
                stylesheets: ["TextStyles", "styles"],
                dimensions: { height: 300 }
            }
        }
    };
    $scope.$watch('textInput.value', function (newValue, oldValue) {
        $scope.model.value = newValue;
    });
});
