import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";


export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("nhumnhumnhum");

    console.log(req.query.id);
    const movies = await db
      .collection("questions")
      .deleteOne({ _id : ObjectId(req.query.id)});

    res.json("Deleted");
  } catch (e) {
    console.error(e);
  }
};
