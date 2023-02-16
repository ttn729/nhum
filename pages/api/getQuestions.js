import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("nhumnhumnhum");

       let filter  = {};

       if (req.query.questionType )  {
            filter = {questionType: req.query.questionType};
       }

       const questions = await db
           .collection(req.query.collectionName)
           .find(filter)
           .toArray();

       res.json(questions);
   } catch (e) {
       console.error(e);
   }
};