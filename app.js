/**
 * KenM Bot
 *
 * Have a blessed day.
 */

"use strict";

const config         = require('./config');
const HorseySurprise = require('./src/horseysurprise');
const Database       = require('./src/database');

/**
 * Bootstrap Database
 *
 */
const database = new Database();

/**
 * Run the database
 *
 */
if(config.database.setup === true) {
  database.setup();
}

/**
 * Bootstrap HorseySurprise
 *
 */
const horsey = new HorseySurprise({
  name      : config.name,
  token     : config.token,
});

/**
 * Run our blessed application
 *
 */
horsey.run();
