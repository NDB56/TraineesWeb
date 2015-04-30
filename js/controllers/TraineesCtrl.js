App.controller("TraineesCtrl", ['$rootScope', '$scope', function ($rootScope, $scope, localStorageService)
{
    $scope.pageSize = 3; //set the grid page size here.

    //used to enter the form to edit mode with selected trainee.
    $scope.edit = function (id)
    {
        for (i in $scope.trainees)
        {
            if ($scope.trainees[i].id == id)
            {
                $rootScope.dataPage.newTrainee = angular.copy($scope.trainees[i]);
            }
        }
    }
    //used to init form for adding new trainee.
    $scope.add = function ()
    {
        reset();
    }
    //used for saving form data for new & existing trainee.
    $scope.save = function ()
    {
        if ($rootScope.dataPage.newTrainee.id == null)
        {
            $rootScope.dataPage.newTrainee.id = getMax($scope.trainees, "id").id + 1
            $scope.trainees.push($rootScope.dataPage.newTrainee);
        } else
        {
            for (i in $scope.trainees)
            {
                if ($scope.trainees[i].id == $rootScope.dataPage.newTrainee.id)
                {
                    $scope.trainees[i] = $rootScope.dataPage.newTrainee;
                }
            }
        }
        reset();
    }
    //used for deleting a trainee.
    $scope.delete = function (id)
    {
        if ($rootScope.dataPage.newTrainee.id == null)
            return false;

        for (i in $scope.trainees)
        {
            if ($scope.trainees[i].id == id)
            {
                $scope.trainees.splice(i, 1);
                $rootScope.dataPage.newTrainee = {};
            }
        }
        reset();
    }
    //used to reset the form.
    function reset()
    {
        $rootScope.dataPage.newTrainee = { date: new Date() };

    }
    //helper function to get object from objects array (arr) with the max value of a givven property (prop)
    function getMax(arr, prop)
    {
        var max;
        for (var i = 0 ; i < arr.length ; i++)
        {
            if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
                max = arr[i];
        }
        return max;
    }

    //If the code below will be uncomented then every change in trainees will be sved to local storage.
    //$scope.$watch("trainees", function (newVal, oldVal)
    //{
    //    if (newVal !== null && angular.isDefined(newVal) && newVal !== oldVal)
    //    {
    //        localStorageService.add("trainees", angular.toJson(newVal));
    //    }
    //}, true);
}]);