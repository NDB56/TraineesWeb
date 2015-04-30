App.controller('MainCtrl', ['$rootScope', function ($rootScope)
{
    //Set def application data.
    //$rootScope will save the state of data between different routs.
    $rootScope.dataPage = { searchWord: null, newTrainee: { date: new Date() } };
}])