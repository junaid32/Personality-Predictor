window.$Q = (function() {

  var _module = {};

  _module.ajax = function (settings) {
    var deferred = Q.defer();
    settings.success = deferred.resolve;
    settings.error   = deferred.reject;

    $.ajax(settings);

    return deferred.promise;
  };

  _module.get = function (urlOrSettings, data, dataType) {
    if (typeof urlOrSettings === 'object') {
      return _module.ajax(urlOrSettings);
    } else {
      return _module.ajax({
        url: urlOrSettings,
        data: data,
        dataType: dataType
      });
    }
  };

  _module.post = function (urlOrSettings, data, dataType) {
    if (typeof urlOrSettings === 'object') {
      urlOrSettings.method = 'POST';
      return _module.ajax(urlOrSettings);
    } else {
      return _module.ajax({
        method: 'POST',
        url: urlOrSettings,
        data: data,
        dataType: dataType
      });
    }
  };

  _module.json = {};

  /**
   * Obtain a JSON file via GET returning a promise.
   * @param url The URL to request the JSON file.
   * @param data Some payload data for the request.
   * @return A promise.
   */
  _module.json.get = function (url, data) {
    return _module.get(url, data, 'json');
  };

  /**
   * Obtain a JSON file via POST returning a promise.
   * @param url The URL to request the JSON file.
   * @param data Some payload data for the request.
   * @return A promise.
   */
  _module.json.post = function (url, data) {
    return _module.post(url, data, 'json');
  };

  return _module;

}());
