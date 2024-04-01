import connectDB from "../../../../config/database";
import Property from "../../../../modules/Property";

// GET /api/properties/:id
export const GET = async (req, { params }) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);

    if (!property) {
      return new Response("Property Not Found", {
        status: 404,
      });
    }
    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("something went wrong", {
      status: 500,
    });
  }
};
