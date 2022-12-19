import clientPromise from "../../lib/mongodb";

export default async function ContactHandler(req,res) {
    const client = await clientPromise;
    const db = client.db('Blog');
    switch (req.method){
        case "POST":
            const contacts = await db.collection('Contacts')
            contacts.insertOne(req.body);
            //console.log(req.body);
    }
}