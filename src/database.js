/**
 * KenM Bot
 *
 * Have a blessed day.
 */

"use strict";

const fs       = require('fs');
const kenny    = "./db/kenny.sqlite";
const datapath = "./data/";
const exists   = fs.existsSync(kenny);
const sqlite3  = require('sqlite3').verbose(); 

/**
 * This is our database layer for sqlite
 *
 */
module.exports = class Database {

  constructor() {
    if(exists) {
      this.db = new sqlite3.Database(kenny);
    }

    this.quotes = this.setQuotes();
  }

  setup() {
    if(!exists) {
      this.db.serialize(function() {

        this.db.run("CREATE TABLE images (id INT, image TEXT)");
        this.db.run("CREATE TABLE tweets (id INT, tweet TEXT)");

      }.bind(this));

      this.db.close();
    }
  }

  setQuotes() {
    let quotes = fs.readFileSync(datapath + 'quotes', 'utf8');

    return quotes.split("\n");
  }

  getQuotes() {
    return this.quotes;
  }

  getRandomQuote() {
    let number = this.getRandomNumber(0, this.quotes.length);

    return this.quotes[number];
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
  }

}
