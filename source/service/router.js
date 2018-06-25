/**
 * Created by Ailian on 2018/6/25.
 */
/**
 * config方法、run方法
 */
(function(){
    app.config(['$stateProvider','$urlRouterProvider','$httpProvider','$locationProvider',
        function($stateProvider,$urlRouterProvider,$httpProvider,$locationProvider){

            $locationProvider.hashPrefix('');
            $urlRouterProvider.otherwise('/one'); // 默认跳转路径

            $stateProvider
                //第一个页面
                .state('one',{
                    url:'^/one',
                    templateUrl:'tpls/one.html',
                    controller:'oneCtrl'
                })
                //第二 个页面
                .state('two',{
                    url:'^/two',
                    templateUrl:'tpls/two.html',
                    controller:'twoCtrl'
                })

                //第三个页面
                .state('three',{
                    url:'^/three',
                    templateUrl:'tpls/three.html',
                    controller:'threeCtrl'
                })


        }])


})();
