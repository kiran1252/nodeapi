const { v4 } = require("uuid");

let vendorData = [];

const getVendor = (req, res) => {
  res.json(vendorData);
};

const addUpdateVendor = (req, res) => {
  const vendorDataObj = req.body;
  if (vendorDataObj.id) {
    const vendor = vendorData.find((vendor) => vendor.id === vendorDataObj.id);
    vendor.vendorName = vendorDataObj.vendorName;
    vendor.typeOfPaper = vendorDataObj.typeOfPaper;
    res.json({
      status: "true",
      message: `Vendor ${vendorDataObj.vendorName} has been updated successfully`,
    });
  } else {
    const itemFound = vendorData.find(
      (ven) => ven.vendorName === vendorDataObj.vendorName
    );
    if (itemFound == undefined) {
      vendorData.push({ ...vendorDataObj, id: v4() });
      res.json({
        status: "true",
        message: `Vendor "${vendorDataObj.vendorName}" has been added successfully.`,
      });
    } else {
      res.json({
        status: "false",
        message: `Vendor "${vendorDataObj.vendorName}" already exists.`,
      });
    }
  }
};

const getVendorId = (req, res) => {
  const { id } = req.params;
  const itemFound = vendorData.find((vendor) => vendor.id === id);
  res.send(itemFound);
};

const deleteVendor = (req, res) => {
  const { id } = req.params;
  itemData = vendorData.filter((vendor) => vendor.id !== id);
  res.send(`Vendor with id ${id} has been deleted successfully.`);
};

const updateVendor = (req, res) => {
  const vendor = vendorData.find((vendor) => vendor.id === vendorDataObj.id);
  vendor.vendorName = vendorDataObj.vendorName;
  vendor.typeOfPaper = vendorDataObj.typeOfPaper;
  res.json({
    status: "true",
    message: `Vendor ${vendorDataObj.vendorName} has been updated successfully`,
  });
};

module.exports = {
  getVendor,
  addUpdateVendor,
  getVendorId,
  deleteVendor,
  updateVendor,
};
