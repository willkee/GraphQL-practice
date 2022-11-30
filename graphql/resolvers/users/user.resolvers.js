const userModel = require("../../models/user.model");

module.exports = {
	Query: {
		users: () => userModel.getAllUsers(),
	},
};
