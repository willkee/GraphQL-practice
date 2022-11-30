const { Address } = require("../../db/models");

const getAddressesByUserId = async (id) => {
	const addresses = await Address.findAll({ where: { userId: id } });
	return addresses.length ? addresses : [];
};

module.exports = { getAddressesByUserId };
