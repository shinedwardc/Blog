import clientPromise from "../../lib/mongodb";

export default async function PostHandler(req,res) {
    const client = await clientPromise;
    const db = client.db('Blog');
    const allPosts = await db.collection('Posts')
    .find({})
    .toArray((err,result) => {
        if (err){
            return res.status(400).send("Error");
        }
        res.json(result);
        res.status(200).end();
    })
}

export const config = {
    api: {
      externalResolver: true,
    },
  }