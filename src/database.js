/**
 * KenM Bot
 *
 * Have a blessed day.
 */

"use strict";

const fs      = require('fs');
const kenny   = "./db/kenny.sqlite";
const exists  = fs.existsSync(kenny);
const sqlite3 = require('sqlite3').verbose(); 

/**
 * This is our database layer for sqlite
 *
 */
module.exports = class Database {

  constructor() {
    if(exists) {
      this.db = new sqlite3.Database(kenny);
    } else {
      throw "No database found. Flag as true.";
    }
  }

  setup() {
    if(!exists) {
      this.db.serialize(function() {

        this.db.run("CREATE TABLE quotes (id INT, quote TEXT)");
        this.db.run("CREATE TABLE images (id INT, image TEXT)");
        this.db.run("CREATE TABLE tweets (id INT, tweet TEXT)");

      }.bind(this));

      this.db.close();
    }
  }

}
