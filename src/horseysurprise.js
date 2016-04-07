/**
 * KenM Bot
 *
 * Have a blessed day.
 */

"use strict";

const Slackbots = require('slackbots');

/**
 * This is the horsey suprise
 *
 */
module.exports = class HorseySurprise {

  /**
   * Constructs our class
   *
   * @param {settings}
   */
  constructor(settings) {
    if(typeof settings !== "undefined") {
      this.bot = new Slackbots(settings);
    }
  }

  /**
   * Our initial runner method, hooks our events
   *
   */
  run() {
    console.log("Running KenM Bot");

    this.bot.on('start', this.onStart);
    this.bot.on('message', this.onMessage);
    this.bot.on('open', function() {});
    this.bot.on('close', function() {});
  }

  onStart() {
    console.log('Start event fired');
  }

  onMessage(data) {
    console.log(data);
  }

  meMessage(data) {
    
  }

}
