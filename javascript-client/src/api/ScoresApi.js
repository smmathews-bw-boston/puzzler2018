/**
 * Puzzler 2018
 * Control your bot. Collect. Store. Win.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Score'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Score'));
  } else {
    // Browser globals (root is window)
    if (!root.Puzzler2018) {
      root.Puzzler2018 = {};
    }
    root.Puzzler2018.ScoresApi = factory(root.Puzzler2018.ApiClient, root.Puzzler2018.Score);
  }
}(this, function(ApiClient, Score) {
  'use strict';

  /**
   * Scores service.
   * @module api/ScoresApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ScoresApi. 
   * @alias module:api/ScoresApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getRoundScores operation.
     * @callback module:api/ScoresApi~getRoundScoresCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Score>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get all scores for all finished rounds
     * @param {module:api/ScoresApi~getRoundScoresCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Score>}
     */
    this.getRoundScores = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Score];

      return this.apiClient.callApi(
        '/roundScores', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
