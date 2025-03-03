import { MongoClient } from "npm:mongodb@5.6.0";

const MONGODB_URI = "mongodb+srv://admin:x1WTsKAf9aj5hiGA@kfc.zxys0.mongodb.net/";
const DB_NAME = "kfc";

if (!MONGODB_URI) {
    console.error("MONGO_URI is not set");
    Deno.exit(1);
}

let client: MongoClient;
let db;

async function connectToDatabase() {
    if (!client) {
        client = new MongoClient(MONGODB_URI);
        try {
            await client.connect();
            console.log("✅ Connecté à MongoDB");
            db = client.db(DB_NAME);
        } catch (error) {
            console.error("❌ Erreur de connexion MongoDB:", error);
            Deno.exit(1);
        }
    }
    return { db, client };
}

export { connectToDatabase, db, client };
