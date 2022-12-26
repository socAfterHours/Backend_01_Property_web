import express from "express";
const propertiesRouter = express.Router();

import {
  getProperties,
  postProperty,
  patchProperty,
  deleteProperty,
} from "../models/properties.js";

//GET all properties
propertiesRouter.get("/", async function (req, res) {
  const properties = await getProperties();
  res.status(200).json({ success: true, payload: properties });
});

//POST new property
propertiesRouter.post("/", async function (req, res) {
  const result = await postProperty(req.body);
  res.json({ success: true, payload: result });
});

//PATCH a property
propertiesRouter.patch("/:id", async function (req, res) {
  const result = await patchProperty(req.body, req.params.id);
  res.json({ success: true, payload: result });
});

//DELETE a property
propertiesRouter.delete("/:id", async function (req, res) {
  const result = await deleteProperty(req.params.id);
  res.json({ success: true, payload: result });
});

export default propertiesRouter;
