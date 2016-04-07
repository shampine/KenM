/**
 * KenM Bot
 *
 * Have a blessed day.
 */

"use strict";

const config         = require('./config');
const HorseySurprise = require('./src/horseysurprise');

console.log(config);

/**
 * Instantiate HorseySurprise
 *
 */
const horsey = new HorseySurprise({
  name      : config.name,
  token     : config.token,
  database  : "",
});

/**
 * Run our blessed application
 *
 */
horsey.run();
