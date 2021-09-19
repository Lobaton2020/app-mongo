import { MongoClient, MongoClientOptions} from 'mongodb'
import { MONGO_URI } from '../config/config';

export  default new MongoClient(MONGO_URI || "",{ useNewUrlParser: true } as MongoClientOptions);