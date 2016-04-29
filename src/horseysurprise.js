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

    this.config   = settings.config;
    this.database = settings.database;
    this.logger   = settings.logger;

    if(typeof settings !== "undefined") {
      this.bot = new Slackbots({
        name: settings.config.name,
        token: settings.config.token
      });
    }

  }

  /**
   * Our initial runner method, hooks our events
   *
   */
  run() {

    this.bot.on('start', this.onStart.bind(this));
    this.bot.on('message', this.onMessage.bind(this));
    this.bot.on('open', function() {});
    this.bot.on('close', function() {});

  }

  onStart() {
    this.logger.logSystemMessage('KenM started on this blessed day');
  }

  /**
   * Handles listening on message events
   *
   * @param object data
   */
  onMessage(data) {
    console.log(data);

    switch(data.type) {

      case("presence_change"):
        this.setUser(data.user);
        break;

      case("message"):
        this.parseMessage(data);
        break;
    }

  }

  /**
   * Sets our bots user id so we know who to listen for,
   * this is set on the first presence change
   *
   * @var string user
   */
  setUser(user) {
    if(typeof this.user === "undefined") {
      this.user = user;
    }
  }

  /**
   * Parse our message data
   *
   * @var 
   */
  parseMessage(data) {
    if(typeof data.username !== "undefined" && data.username === 'KenM') {
      return;
    }

    if(data.text.search(/quote/i) > -1) {
      this.bot.postMessageToChannel('lobby', 'Hey there good looking.', function() {});
    }
  }

}
