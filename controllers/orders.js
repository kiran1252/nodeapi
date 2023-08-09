const { v4 } = require("uuid");

let orderData = [];

const getOrder = (req, res) => {
  res.json(orderData);
};

const addOrder = (req, res) => {
  const order = req.body;
  if (order.id) {
    const orderObj = orderData.find((ord) => ord.id === order.id);
    orderObj.date = order.date;
    orderObj.vendorId = order.vendorId;
    orderObj.lotNumber = order.lotNumber;
    orderObj.manufacturingDate = order.manufacturingDate;
    orderObj.qty = order.qty;
    orderObj.unitPrice = order.unitPrice;
    orderObj.isActive = order.isActive;
    res.json({
      status: "true",
      message: `order has been updated successfully`,
    });
  } else {
    order.orderNmuber = "PONO-" + orderData.length + 1;
    order.isActive = true;
    orderData.push({ ...order, id: v4() });
    res.json({
      status: "true",
      message: `order has been added successfully.`,
    });
  }
};

const getOrderId = (req, res) => {
  const { id } = req.params;
  const itemFound = orderData.find((order) => order.id === id);
  console.log(itemFound);
  res.send(itemFound);
};

const deleteOrder = (req, res) => {
  const { id } = req.params;
  itemData = orderData.filter((order) => order.id !== id);
  console.log(orderData);
  res.send(`order with id ${id} has been deleted successfully.`);
};

const updateOrder = (req, res) => {
  const { id } = req.params;
  const { name, toppings, price } = req.body;

  const order = orderData.find((order) => order.id === id);

  if (name) order.name = name;
  if (toppings) order.toppings = toppings;
  if (price) order.price = price;

  res.send(
    `Order with id ${id} and name ${order.name} has been updated successfully`
  );
};

module.exports = {
  getOrder,
  addOrder,
  getOrderId,
  deleteOrder,
  updateOrder,
};
