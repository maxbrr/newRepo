

class User {
    constructor() {
        this.conn = require("../config/connection.js");
        this.id = null;
        this.userName = null;
        this.strength = null;
        this.agility = null;
        this.intelligence = null;
        this.courage = null;
    }

    createNew(userName, strength, agility, intelligence, courage) {
        this.conn.connect();
        let queryRes = this.conn.query( `INSERT INTO user 
                                        (userName, strength, agility, intelligence, courage)
                                        VALUES 
                                        ('${userName}',${strength},${agility},${intelligence},${courage})`,
                                        (error, results) => {
                                            if(error) { 
                                                throw error; 
                                            } else {
                                                return results;
                                            }
                                        });   

        return queryRes;
    }

    initFromDb() {

    }
}

module.exports = new User;

