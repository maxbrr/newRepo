class Test{
    constructor() {
        this.conn = require("../config/connection.js");
        this.table = "test";
        this.id = null;
        this.value = null;
        this.sqlResults = null;
    }

    insertValue(value) {
        this.conn.connect();
        let sqlRes = this.conn.query(`INSERT INTO test (value)
                        VALUES
                        ('${value}')`, (error, results) => {
                            if(error) { throw error; }
                            return results;
                        });
        return sqlRes;
    }
}

module.exports = Test;