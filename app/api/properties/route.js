import connectDB from "../../../config/database";

export const GET = async (req) => {
  try {
    await connectDB();
    return new Response(JSON.stringify({ message: "Hello world" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("something went wrong", {
      status: 500,
    });
  }
};
