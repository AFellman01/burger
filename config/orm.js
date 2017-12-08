var connection = require("../config/connection.js");
// This is what connects this page to connection.js

// selectAll()
//
// // Okay, so I don't actually know what I'm doing here. My best guess would be that this is meant to select all the burgers, but that's just a guess.
//
// insertOne()
//
// // Presumably, this would allow you to add a new burger? I would have thought this would be done in ajax, but this setup didn't have a public js file, so I am kind of at a loss.
//
// updateOne()
//
// // This code would be for updating a burger. Whether that is to make the burger devoured and not devoured, or to alter its name, I'm not sure. I guess it could be for both?


var orm = {
// So, it looks like I was right in my feeble guess?
	selectAll: function(tableInput, cb) {
    // This creates the string.
		var queryString = "SELECT * FROM " + tableInput + ";";

		// this does a standard database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// And this is the callback, so everything happens when and if it should.
			cb(result);
		});
	},

	// It does add to the table.
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
    // There it is again. Is this actually a built-in function? Man, I'm so impressed with mysql.
		queryString += ") ";


		// Perform the database query
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});
	},

	// And no, I genuinely have no idea what this one does that the other didn't do. I mean, I do, but I don't. My best guess is it is editing the table, and not adding to the table. I'm just not sure what circumstances would lead to it being called.
	updateOne: function(table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;
// this allows other pages to call this page.
