import clientPromise from "../../lib/mongodb";

export default async function CommentHandler(req,res) {
    const client = await clientPromise;
    const db = client.db('Blog');
    const comments = await db.collection('Comments');
    switch (req.method){
        case "GET":
            comments.find({})
            .toArray((err,result) => {
                if (err){
                    res.status(400).send("Error");
                }
                else{
                    res.json(result);
                }
            })
            break;
            //console.log(req.body);
        case "POST":
            comments.insertOne({"Date": new Date(), ...req.body })
    }
}

export const config = {
    api: {
      externalResolver: true,
    },
  }