import { MongoClient } from "npm:mongodb@5.6.0";

const MONGODB_URI = "mongodb+srv://admin:x1WTsKAf9aj5hiGA@kfc.zxys0.mongodb.net/";
const DB_NAME = "kfc";

if (!MONGODB_URI) {
    console.error("❌ MONGO_URI is not set");
    Deno.exit(1);
}

let client: MongoClient;
let db: any;

try {
    console.log("⏳ Connexion à MongoDB...");
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db(DB_NAME);
    console.log("✅ Connecté à MongoDB");
} catch (error) {
    console.error("❌ Erreur de connexion MongoDB:", error);
    Deno.exit(1);
}

export { db, client };
