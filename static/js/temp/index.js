var myApp = angular.module("voteApp", []);

myApp.controller("myCtrl", function($scope,$compile) {
    $scope.firstName = "Neo";
    $scope.lastName = "Huang";

    $scope.standardActions = [
        {code: 'agree', name: '同意', nameEn: 'agree'},
        {code: 'disagree', name: '拒绝', nameEn: 'disagree'}];



    /*$(".header").mouseover(function (){
        $(".content").show();
    }).mouseout(function (){
        $(".content").hide();
    });*/

    /*$("#actionListBox").find('div:last').hover(function (){

        $scope.showDiv()
        // $(".content").show();
    },function (){
        $("#myDropdown").remove();
        // $(".content").hide();
    });*/




    //合成事件 hover()
    /*$(".header").hover(function (){
        $(".content").show();
    },function (){
        $(".content").hide();
    });*/

$scope.actions = [
    {code: 'agree', name: '同意', nameEn: 'agree'},
    {code: 'disagree', name: '拒绝', nameEn: 'disagree'},
    {code: 'aa', name: 'aaa', nameEn: 'aaaa'}];

$scope.removeAction = function(ind){
    // $('#actionListBox').find('.duplicate').removeClass('duplicate');
    // $scope.errorMsg = '';
    $scope.actions.splice(ind, 1);
}


    $scope.hiddenMyDiv=function () {
        $("#myDropdown").hide();
    }

$scope.showMyDiv=function (index) {

    if($("#myDropdown").length>0) {
        $("#myDropdown").show();
    }else{
        var template ="<div id='myDropdown' style=\"width:100px;height:100px;\"><ul  class=\"dropdown-menu1\" style=\"width:100px;height:100px;\" ng-mouseenter='showMyDiv()' ng-mouseleave='hiddenMyDiv()'>"+
            "<li ng-repeat=\"aa in actions\" ng-click=\"selectAction(aa);\">" +
            "{{aa.code}}" +
            "</li>" +
            "</ul></div>";

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


    }

    }



    $scope.selectAction=function (obj) {
        $("#myDropdown").remove();
        console.log("1234151234");
        $scope.actions.push({
            code:obj.code,
            name:obj.name,
            nameEn:obj.nameEn
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

/*
myApp.filter('myfilter', function() {
    return function(arr) {
         $scope.standardActions


        return
    }
});*/
