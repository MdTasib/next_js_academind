import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = res.body;

        const client = await MongoClient.connect('mongodb+srv://meetups:meetups@cluster0.past8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'); // databasename - meetups
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne({ data });

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;