var myApp = angular.module("voteApp", []);

myApp.controller("myCtrl", function ($scope, $compile) {
    $scope.firstName = "Neo";
    $scope.lastName = "Huang";

    $scope.standardActions = [
        {code: 'agree', name: '同意', nameEn: 'agree', standard: true},
        {code: 'disagree', name: '拒绝', nameEn: 'disagree', standard: true}];


    $scope.selectedActions = [
        {code: 'agree', name: '同意', nameEn: 'agree', standard: true},
        {code: 'disagree', name: '拒绝', nameEn: 'disagree', standard: true}];

    $scope.displayActions = [{code: 'userDefined', name: '自定义', nameEn: 'userDefined', standard: false}];


    /*$scope.actions = [
        {code: 'agree', name: '同意', nameEn: 'agree'},
        {code: 'disagree', name: '拒绝', nameEn: 'disagree'},
        {code: 'aa', name: 'aaa', nameEn: 'aaaa'}];*/

    $scope.removeAction = function (ind) {
        $scope.selectedActions.splice(ind, 1);
        $("#myDropdown").remove();
    }


    $scope.hiddenMyDiv = function () {
        $("#myDropdown").hide();
    }

    $scope.showMyDiv = function () {
        if ($("#myDropdown").length > 0) {
            $("#myDropdown").show();
        } else {
            //把没有选中的标准动作从原始标准组中选出来
        $scope.displayActions = [];
            $scope.standardActions.forEach(function (val1, index1) {
                if(val1.standard){
                    var contained = false;
                    for (var i = 0; i < $scope.selectedActions.length; i++) {
                        if (angular.equals($scope.selectedActions[i], val1)) {
                            contained = true;
                        }
                    }
                    if (!contained) {
                        $scope.displayActions.push($scope.standardActions[index1]);
                    }
                }
            });

            $scope.displayActions.push({code: 'userDefined', name: '自定义', nameEn: 'userDefined', standard: false});

            var template = "<ul id='myDropdown' class=\"dropdown-menu1\" style=\"width:100px;height:77px;\" ng-mouseenter='showMyDiv()' ng-mouseleave='hiddenMyDiv()'>" +
                "<li ng-repeat=\"aa in displayActions\" ng-click=\"selectAction(aa);\">" +
                "{{aa.code}}" +
                "</li>" +
                "</ul>";


            $("#actionListBox").find('dl:last').find('div:last').parent("div").append($compile(template)($scope));
            $("#myDropdown").show();


        }

    }


    $scope.selectAction = function (obj) {

        $scope.selectedActions.push({
            code: obj.code,
            name: obj.name,
            nameEn: obj.nameEn,
            standard:obj.standard
        });
        $("#myDropdown").remove();
    }


});

