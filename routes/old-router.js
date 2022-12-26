import express from "express";

import { getProperties } from "../models/models.js";

const propertyRouter = express.Router();

//route to get all properties/ filtered properties
propertyRouter.get("/", async function (req, res) {
  
  const properties = await getProperties(
    req.query.rooms,
    req.query.property_type,
    req.query.price,
    req.query.location
  );
  res.status(200).json({ success: true, payload: properties });
});

export default propertyRouter;
