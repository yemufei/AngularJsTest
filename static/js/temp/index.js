var myApp = angular.module("voteApp", []);
myApp.controller("myCtrl", function($scope,$compile) {
    $scope.firstName = "Neo";
    $scope.lastName = "Huang";


    $scope.removeAction=function () {

    }

    $scope.showDiv=function (index) {

//                alert("adfad" + $('#actionListBox').children('div'));
//                console.log(angular.element('#actionListBox'));
//                console.log($("#actionListBox").find('div').remove());
//                $document.find("actionListBox").find('div').remove()
        var template ="<ul id='myDropdown' class=\"dropdown-menu1\" style=\"width:100px;height:100px;\">"+
        "<li ng-repeat=\"aa in actions\" ng-click=\"selectAction("+index+");\">" +
        "{{aa.code}}" +
        "</li>" +
        "</ul>";
        /*var actions=$scope.actions;
        
        actions.forEach(function (val,index) {
            // template += "<li ng-click=\"selectAction("+index+");\">";
            template += "<li ng-click=\"addAction();\">";
            template += "<a href=\"javascript:;\" class=\"ng-binding\">"+val.code+"</a>";
            template += "</li>";
        })*/

        // template+="</ul>";
        // $compile(template)($scope)
        // $("#actionListBox").find('dl')[index].find('div:last').append("template");
        $("#actionListBox").find('dl:last').find('div:last').parent("div").append($compile(template)($scope));
        $("#myDropdown").show();



        console.log("point "+$("#myDropdown").length);


    }



    $scope.selectAction=function () {
        $("#myDropdown").remove();
        console.log("1234151234");
        $scope.actions.push({
            code:'aa',
            name:'vv',
            nameEn:'cc'
        });
    }

    $scope.addAction=function () {

        $scope.actions.push({
            code:'',
            name:'',
            nameEn:''
        })



    }




});