"use strict";
/**
 * ionic-keyWord
 */
var app = angular.module('ionic-keyword', ['ionic', 'ionic-keyword.templates']);
app.directive('ionicKeyWord', ['$ionicPopup', '$timeout', '$ionicModal', function ($ionicPopup, $timeout, $ionicModal) {//ionicScrollDelegate
  return {
    restrict: 'A',
    template:'<input readonly ng-model="keyboard.num">',
    replace: true,
    scope: false,
    link: function (scope, element, attrs) {
      var citypickerModel = null;
      element.on("click", function () {
        console.log("click")
        if (citypickerModel) {
          citypickerModel.show()
          return false
        }
        scope.popKeyboard();
        $ionicModal.fromTemplateUrl('ionic-keyword.html', {
          scope: scope,
          animation: 'slide-in-up',
          backdropClickToClose: true,
          hardwareBackButtonClose: true,
        }).then(function (modal) {
          console.log(modal)
          citypickerModel = modal;
          $timeout(function () {
            citypickerModel.show();
          }, 50)
        })
      })
      scope.isPop = false; //标识是否弹出键盘
      scope.keyboard = {};
      //数据数值
      scope.keyboard.num = '';
      //点击健位
      scope.add = function (n) {
        var num = scope.keyboard.num;
        var isnum = (num + n).indexOf('.');
        console.log(num);
        console.log(isnum);
        if (n == '.' && num.indexOf(".") >= 0) {
          return false;
        }
        if (num.indexOf(".") >= 0 && num.split(".")[1].length == 2) {
          return false;
        }
        if (num != '' && isnum < 0 && (num + n) / 1 == 0) {
          return;
        } else {
          scope.keyboard.num = num + n;
        }
      }
      //点击删除
      scope.delete = function () {
        scope.keyboard.num = scope.keyboard.num.substring(0, scope.keyboard.num.length - 1);
      }
      // 点击输入框弹出键盘
      scope.popKeyboard = function () {
        event.stopPropagation();
        scope.isPop = true;
      }
      //点击空白处关闭键盘
      // scope.downKeyboard = function(){
      //     scope.isPop = false;
      // }
      //防止点击键盘时关闭键盘
      scope.prevent = function () {
        event.stopPropagation();
      }
      /**
       * 销毁指令
       */
      scope.$on('$destroy', function () {
        citypickerModel && citypickerModel.remove();
      });
    }
  }
}]);