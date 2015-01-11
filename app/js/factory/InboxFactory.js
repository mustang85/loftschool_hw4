app.factory('InboxFactory', function($firebase,fbURL) {
  // $http,
  // var exports = {};

  // exports.getMessage = function() {
  //   console.log($http.get('json/phonebooks.json'));
  //   return $http.get('json/phonebooks.json')
  //       .error(function(data) {
  //             console.log('здесь ошибку', data);
  //       });
  // }

	var ref = new Firebase(fbURL),
		sync = $firebase(ref),
		exports = {};

  console.log(sync.$asArray());
  console.log(sync.$asObject());

  exports.removeCard = function (id) {
    return sync.$remove(id);
  };

	exports.setCard = function (text) {
		return sync.$asArray().$add(text);
	};

	exports.getCardObj = function () {
		return sync.$asObject();
	};

  exports.getCardArr = function () {
    return sync.$asArray();
  }

  return exports;

});