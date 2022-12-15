import express from "express";

import { getAllProperties, getPropertiesByFilter } from "../models/models.js";

const propertyRouter = express.Router();
//route to get all properties
propertyRouter.get("/", async function (req, res) {
  const properties = await getAllProperties();
  res.status(200).json({ success: true, payload: properties });
});

//route to get filtered properties
propertyRouter.get("/byFilter", async function (req, res) {
  const rooms = req.query.rooms;
  console.log("rooms", rooms);
  const property_type = req.query.property_type;
  console.log("property_type", property_type);
  const price = req.query.price;
  const properties = await getPropertiesByFilter(rooms, property_type, price);
  res.status(200).json({ success: true, payload: properties });
});

export default propertyRouter;
