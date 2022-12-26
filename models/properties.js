import query from "../db/index.js";

//GET all properties
export async function getProperties() {
  //Query the db and return all properties
  let result = await query(`SELECT * FROM properties `);
  return result.rows;
}

//POST new property
export async function postProperty(body) {
  //Query the db and post new property
  const { rooms, property_type, price, description, address, location } = body;
  const result = await query(
    "INSERT INTO properties (rooms, property_type, price, description, address, location) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [rooms, property_type, price, description, address, location]
  );
  return result.rows[0];
}

//PATCH a property
export async function patchProperty(body, id) {
  //Query the db and patch a property by its id
  const { rooms, property_type, price, description, address, location } = body;
  const result = await query(
    `UPDATE properties SET rooms=$1, property_type=$2, price=$3, description=$4, address=$5, location=$6 WHERE property_id=$7 RETURNING *`,
    [rooms, property_type, price, description, address, location, id]
  );
  return result.rows[0];
}

//DELETE a property
export async function deleteProperty(id) {
  //Query the db and delete a property by id
  const result = await query(
    `DELETE FROM properties WHERE property_id=$1 RETURNING *`,
    [id]
  );
  return result.rows[0];
}
