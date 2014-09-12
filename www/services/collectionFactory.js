angular.module('curates.collectionFactory', [])
.factory('collectionFactory', function($http){

  var server = 'http://localhost:3000';

  var getCollection = function(url) {
    return $http({
      method: 'GET',
      url: server + '/api/collection/' + url
    }).then(function(response) {
      if (response.data === 'null') {
        return null;
      }
      return response.data;
    });
  };

  var getListData = function() {
    return $http({
      method: 'GET',
      url: server + '/api/all'
    }).then(function(response) {
      return response.data;
    });
  };

  var getUserCollections = function() {
    return $http({
      method: 'GET',
      url: server + '/api/user/'
    }).then(function(response) {
      return response.data;
    });
  };

  var updateCollection = function(collection) {
    return $http({
      method: 'POST',
      url: server + '/api/collection/update',
      data: collection
    }).then(function(response) {
      return response.data;
    });
  };

  var createCollection = function(collection) {
    return $http({
      method: 'POST',
      url: server + '/api/collection/create',
      data: collection
    }).then(function(response) {
      return response.data;
    });
  };

  var addStar = function(data) {
    return $http({
      method: 'POST',
      url: server + '/api/collection/addStar',
      data: data
    }).then(function(response) {
      return response.data;
    });
  };

  return {
    getCollection: getCollection,
    getListData: getListData,
    getUserCollections: getUserCollections,
    updateCollection: updateCollection,
    createCollection: createCollection
  };

})
