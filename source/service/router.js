/**
 * Created by Ailian on 2018/6/25.
 */
/**
 * config������run����
 */
(function(){
    app.config(['$stateProvider','$urlRouterProvider','$httpProvider','$locationProvider',
        function($stateProvider,$urlRouterProvider,$httpProvider,$locationProvider){

            $locationProvider.hashPrefix('');
            $urlRouterProvider.otherwise('/one'); // Ĭ����ת·��

            $stateProvider
                //��һ��ҳ��
                .state('one',{
                    url:'^/one',
                    templateUrl:'tpls/one.html',
                    controller:'oneCtrl'
                })
                //�ڶ� ��ҳ��
                .state('two',{
                    url:'^/two',
                    templateUrl:'tpls/two.html',
                    controller:'twoCtrl'
                })

                //������ҳ��
                .state('three',{
                    url:'^/three',
                    templateUrl:'tpls/three.html',
                    controller:'threeCtrl'
                })


        }])


})();
