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
    define(['ApiClient', 'model/Entity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Entity'));
  } else {
    // Browser globals (root is window)
    if (!root.Puzzler2018) {
      root.Puzzler2018 = {};
    }
    root.Puzzler2018.SimulatorBoard = factory(root.Puzzler2018.ApiClient, root.Puzzler2018.Entity);
  }
}(this, function(ApiClient, Entity) {
  'use strict';




  /**
   * The SimulatorBoard model module.
   * @module model/SimulatorBoard
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SimulatorBoard</code>.
   * @alias module:model/SimulatorBoard
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>SimulatorBoard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SimulatorBoard} obj Optional instance to populate.
   * @return {module:model/SimulatorBoard} The populated <code>SimulatorBoard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entities')) {
        obj['entities'] = ApiClient.convertToType(data['entities'], [Entity]);
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('numCollectibles')) {
        obj['numCollectibles'] = ApiClient.convertToType(data['numCollectibles'], 'Number');
      }
      if (data.hasOwnProperty('numEnemies')) {
        obj['numEnemies'] = ApiClient.convertToType(data['numEnemies'], 'Number');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Entity>} entities
   */
  exports.prototype['entities'] = undefined;
  /**
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;
  /**
   * @member {Number} numCollectibles
   */
  exports.prototype['numCollectibles'] = undefined;
  /**
   * @member {Number} numEnemies
   */
  exports.prototype['numEnemies'] = undefined;
  /**
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;



  return exports;
}));


