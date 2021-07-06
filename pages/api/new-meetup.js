import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = res.body;

        const url = 'mongodb+srv://meetups:meetups@cluster0.past8.mongodb.net/meetupsCollection?retryWrites=true&w=majority';
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db();

        const meetupsCollection = db.collection('meetupsCollection');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;