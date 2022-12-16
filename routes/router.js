import express from "express";

import { getProperties } from "../models/models.js";

const propertyRouter = express.Router();

//route to get all properties/ filtered properties
propertyRouter.get("/", async function (req, res) {
  const rooms = req.query.rooms;
  console.log("rooms", rooms);
  const property_type = req.query.property_type;
  console.log("property_type", property_type);
  const price = req.query.price;
  const properties = await getProperties(rooms, property_type, price);
  res.status(200).json({ success: true, payload: properties });
});

export default propertyRouter;
