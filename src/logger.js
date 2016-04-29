/**
 * KenM Bot
 *
 * Have a blessed day.
 */

 "use strict";

/**
 * Handles all logging to the command line throughout the application
 *
 */
module.exports = class HorseyLogger {

	/**
   * Constructs the class
   *
   * @param object {config}
   */
  constructor(config) {
    this.config = config;
  }

  /**
   * Log system message
   *
   * @param string message
   */
  logSystemMessage(message) {
    console.log("--" + message + "--");
  }

}
  