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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Puzzler2018);
  }
}(this, function(expect, Puzzler2018) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Puzzler2018.Simulator();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Simulator', function() {
    it('should create an instance of Simulator', function() {
      // uncomment below and update the code to test Simulator
      //var instane = new Puzzler2018.Simulator();
      //expect(instance).to.be.a(Puzzler2018.Simulator);
    });

    it('should have the property board (base name: "board")', function() {
      // uncomment below and update the code to test the property board
      //var instane = new Puzzler2018.Simulator();
      //expect(instance).to.be();
    });

    it('should have the property frame (base name: "frame")', function() {
      // uncomment below and update the code to test the property frame
      //var instane = new Puzzler2018.Simulator();
      //expect(instance).to.be();
    });

    it('should have the property maxCollectibles (base name: "maxCollectibles")', function() {
      // uncomment below and update the code to test the property maxCollectibles
      //var instane = new Puzzler2018.Simulator();
      //expect(instance).to.be();
    });

    it('should have the property maxFrames (base name: "maxFrames")', function() {
      // uncomment below and update the code to test the property maxFrames
      //var instane = new Puzzler2018.Simulator();
      //expect(instance).to.be();
    });

    it('should have the property randomSeed (base name: "randomSeed")', function() {
      // uncomment below and update the code to test the property randomSeed
      //var instane = new Puzzler2018.Simulator();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instane = new Puzzler2018.Simulator();
      //expect(instance).to.be();
    });

    it('should have the property simRound (base name: "simRound")', function() {
      // uncomment below and update the code to test the property simRound
      //var instane = new Puzzler2018.Simulator();
      //expect(instance).to.be();
    });

  });

}));
