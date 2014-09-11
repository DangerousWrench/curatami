angular.module('curates.collectionFactory', [])
.factory('collectionFactory', function($http){

  var serverUrl = 'http://localhost:3000';

  var getCollection = function(url) {
    return $http({
      method: 'GET',
      url: serverUrl + '/api/collection/' + url
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
      url: serverUrl + '/api/all'
    }).then(function(response) {
      return response.data;
    });
  };

  var getUserCollections = function(user) {
    return $http({
      method: 'GET',
      url: serverUrl + '/api/user/' + user.provider + '/' + user.id
    }).then(function(response) {
      return response.data;
    });
  };

  var updateCollection = function(collection) {
    return $http({
      method: 'POST',
      url: serverUrl + '/api/collection/update',
      data: collection
    }).then(function(response) {
      return response.data;
    });
  };

  var createCollection = function(collection) {
    return $http({
      method: 'POST',
      url: serverUrl + '/api/collection/create',
      data: collection
    }).then(function(response) {
      return response.data;
    });
  };

  var addStar = function(data) {
    return $http({
      method: 'POST',
      url: serverUrl + '/api/collection/addStar',
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