var myApp = angular.module("voteApp", []);
myApp.controller("myCtrl", function($scope) {
    $scope.firstName = "Neo";
    $scope.lastName = "Huang";


    $scope.removeAction=function () {

    }

    $scope.showDiv=function (index) {

//                alert("adfad" + $('#actionListBox').children('div'));
//                console.log(angular.element('#actionListBox'));
//                console.log($("#actionListBox").find('div').remove());
//                $document.find("actionListBox").find('div').remove()
        var template =
            "<ul id='myDropdown' class=\"dropdown-menu\" style=\"width:275px;height:200px;collapse: red;\">" +
            "<li ng-repeat=\"spa in actions\" ng-click=\"selectMobilePage($index);\"><a href=\"javascript:;\"></a></li>" +
            "</ul>";

        // $("#actionListBox").find('dl')[index].find('div:last').append("template");
        $("#actionListBox").find('dl:last').find('div:last').parent("div").append(template);
        $("#myDropdown").show();
        console.log("bingo");


    }


    $scope.addAction=function () {

        $scope.actions.push({
            code:'',
            name:'',
            nameEn:''
        })



    }




});