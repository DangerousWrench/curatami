angular.module('curates')
.directive('collectionMeta', function() {
  return {
    restrict: 'E',
    scopes: {
      collection: '='
    },
    templateUrl: 'directives/collectionMeta.html'
  }
})

.directive('userManagement', function() {
  return {
    restrict: 'E',
    // scopes: {
    //   user: '='
    // },
    templateUrl: 'directives/userManagement.html'
  }
});