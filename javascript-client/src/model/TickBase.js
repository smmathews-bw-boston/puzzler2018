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
    define(['ApiClient', 'model/EntityAction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EntityAction'));
  } else {
    // Browser globals (root is window)
    if (!root.Puzzler2018) {
      root.Puzzler2018 = {};
    }
    root.Puzzler2018.TickBase = factory(root.Puzzler2018.ApiClient, root.Puzzler2018.EntityAction);
  }
}(this, function(ApiClient, EntityAction) {
  'use strict';




  /**
   * The TickBase model module.
   * @module model/TickBase
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TickBase</code>.
   * @alias module:model/TickBase
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TickBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TickBase} obj Optional instance to populate.
   * @return {module:model/TickBase} The populated <code>TickBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entityIdsToAction')) {
        obj['entityIdsToAction'] = ApiClient.convertToType(data['entityIdsToAction'], [EntityAction]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/EntityAction>} entityIdsToAction
   */
  exports.prototype['entityIdsToAction'] = undefined;



  return exports;
}));


