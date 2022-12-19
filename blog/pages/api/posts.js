import clientPromise from "../../lib/mongodb";

export default async function handler(req,res) {
    const client = await clientPromise;
    const db = client.db('Blog');
    switch (req.method){
        case "GET":
            const allPosts = await db.collection('Posts')
            .find({})
            .toArray((err,result) => {
                if (err){
                    res.status(400).send("Error");
                }
                else{
                    res.json(result);
                }
            })
            break;
    }
}