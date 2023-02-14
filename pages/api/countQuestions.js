import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {

       const client = await clientPromise;
       const db = client.db("nhumnhumnhum");

       console.log(req);

       const movies = await db
           .collection("questions")
           .count({questionType : "Write"})

       res.json(movies);
   } catch (e) {
       console.error(e);
   }
};