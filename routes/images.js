import express from "express";
const imagesRouter = express.Router();

import {
  getAllImages,
  getImagesByPropertyId,
  postImage,
  patchImage,
  deleteImage,
} from "../models/images.js";

//GET all images
imagesRouter.get("/", async function (req, res) {
  const result = await getAllImages();
  res.json({ success: true, payload: result });
});

//GET images by property_id
imagesRouter.get("/:id", async function (req, res) {
  const result = await getImagesByPropertyId(req.params.id);
  res.json({ success: true, payload: result });
});

//POST image (ENSURE Property exists - its linked via foreign key)
imagesRouter.post("/", async function (req, res) {
  const result = await postImage(req.body);
  res.json({ success: true, payload: result });
});

//PATCH image by its id
imagesRouter.patch("/:id", async function (req, res) {
  const result = await patchImage(req.body, req.params.id);
  res.json({ success: true, payload: result });
});

//DELETE image by id
imagesRouter.delete("/:id", async function (req, res) {
  const result = await deleteImage(req.params.id);
  res.json({ success: true, payload: result });
});

export default imagesRouter;
