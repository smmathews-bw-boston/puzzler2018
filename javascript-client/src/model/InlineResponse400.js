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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Puzzler2018) {
      root.Puzzler2018 = {};
    }
    root.Puzzler2018.InlineResponse400 = factory(root.Puzzler2018.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse400 model module.
   * @module model/InlineResponse400
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse400</code>.
   * @alias module:model/InlineResponse400
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse400</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse400} obj Optional instance to populate.
   * @return {module:model/InlineResponse400} The populated <code>InlineResponse400</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('badIds')) {
        obj['badIds'] = ApiClient.convertToType(data['badIds'], ['Number']);
      }
      if (data.hasOwnProperty('duplicateIds')) {
        obj['duplicateIds'] = ApiClient.convertToType(data['duplicateIds'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Number>} badIds
   */
  exports.prototype['badIds'] = undefined;
  /**
   * @member {Array.<Number>} duplicateIds
   */
  exports.prototype['duplicateIds'] = undefined;



  return exports;
}));


