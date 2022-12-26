import query from "../db/index.js";

//GET all images
export async function getAllImages() {
  //Query the db and return all images
  const result = await query(`SELECT * FROM images ORDER BY image_id ASC`);
  return result.rows;
}

//GET images by property_id
export async function getImagesByPropertyId(id) {
  //Query the db and return images by property_id
  const result = await query(`SELECT * FROM images WHERE property_id=$1`, [id]);
  return result.rows;
}

//POST image (ENSURE Property exists - its linked via foreign key)
export async function postImage(body) {
  //Query the db and post new image
  const { property_id, image } = body;
  const result = await query(
    `INSERT INTO images (property_id, image) VALUES ($1, $2) RETURNING *`,
    [property_id, image]
  );
  return result.rows[0];
}

//PATCH image by its id
export async function patchImage(body, id) {
  //Query the db and patch image
  const { image } = body;
  const result = await query(
    `UPDATE images SET property_id=property_id, image=$1 WHERE image_id=$2 RETURNING *`,
    [image, id]
  );
  return result.rows[0];
}

//DELETE image by id
export async function deleteImage(id) {
  const result = await query(
    `DELETE FROM images WHERE image_id=$1 RETURNING *`,
    [id]
  );
  return result.rows[0];
}
