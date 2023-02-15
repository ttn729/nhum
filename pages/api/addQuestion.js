import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {

       const client = await clientPromise;
       const db = client.db("nhumnhumnhum");

       const movies = await db
           .collection(req.body.collectionName)
           .insertOne(req.body)

       res.json(movies);
   } catch (e) {
       console.error(e);
   }
};