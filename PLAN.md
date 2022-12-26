Unsed code:
>models, properties.js for getProperties
/*Logic for filtering on backend - instead used FrontEnd due to complexity and time.
  if (rooms || property_type || price || location) {
    sqlStatement += `WHERE `;
  }

  if (rooms) {
    sqlStatement += `rooms = ${rooms} `;
    console.log(sqlStatement);
    if (property_type || price || location) {
      sqlStatement += `AND `;
    }
    if (property_type) {
      sqlStatement += `property_type = '${property_type}' `;
      console.log(sqlStatement);
    }
  }

  if (property_type) {
    sqlStatement += `property_type = '${property_type}' `;
    console.log(sqlStatement);
    if (location || price || rooms) {
      sqlStatement += `AND `;
    }
  }

  if (property_type && price && location) {
    sqlStatement += `AND `;
  }

  if (location) {
    sqlStatement += `location ILIKE '${location}' `;
    console.log(sqlStatement);
    console.log("Location");
    if (property_type || price || rooms) {
      sqlStatement += `AND `;
    }
  }

  if (price) {
    sqlStatement += `price <= ${price} `;
    console.log("Price", sqlStatement);
    console.log("Price");
  }

  if (location) {
    sqlStatement += `location ILIKE '${location}' `;
    console.log(sqlStatement);
    console.log("Location");
    }
  

  console.log(sqlStatement);
  */
//GET all properties with /
//GET property by rooms ?rooms=x
//GET property_type by room ?property_type=x
//GET price by room ?price=x
//GET location by room ?location=x
---------------------------------------------
>Routes, properties
GET all properties
propertiesRouter.get("/", async function (req, res) {
const result = await getAllProperties();
res.json({ success: true, payload: result });
});

GET property by id
propertiesRouter.get("/:id", async function (req, res) {
const result = await getPropertyById(req.params.id);
res.json({ success: true, payload: result });
});
---------------------------------------------