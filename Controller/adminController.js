const db = require("../models");
const { Customer } = require("../models");

exports.getAllCustomers = async (req, res, next) => {
  try {
    const customers = await db.Customer.findAll();
    res.status(200).json({ customers });
  } catch (err) {
    next(err);
  }
};

exports.getCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await db.Customer.findByPk(id);
    res.status(200).json({ customer });
  } catch (err) {
    next(err);
  }
};
exports.createCustomer = async (req, res, next) => {
  try {
    const { name, address } = req.body;
    const newCustomer = await db.Customer.create({ name, address });
    res.status(200).json({ newCustomer });
  } catch (err) {
    next(err);
  }
};

exports.updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, address } = req.body;
    const updateCustomer = await db.Customer.update(
      { name, address },
      { where: { id } }
    );
    res.status(200).json({ message: updateCustomer ? 'update customer successfully': ' can not update'});
  } catch (err) {
    next(err);
  }
};
exports.deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteCustomer = await db.Customer.destroy({ where: { id } });
    res.status(200).json({ message: deleteCustomer ? 'delete customer successfully': ' can not find customer id' });
  } catch (err) {
    next(err);
  }
};
