/**
 * KenM Bot
 *
 * Have a blessed day.
 */

"use strict";

const config         = require('./config');
const Database       = require('./src/database');
const HorseySurprise = require('./src/horseysurprise');
const Logger		     = require('./src/logger');

const database       = new Database();
const logger         = new Logger(config);

/**
 * Bootstrap the database
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
  config  	: config,
  database  : database,
  logger    : logger
});

/**
 * Run our blessed application
 *
 */
horsey.run();
