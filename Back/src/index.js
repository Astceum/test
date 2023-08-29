import app from './app.js'
import { connectDB } from './db.js';

const port = process.env.PORT || 3090

connectDB();
app.listen( port );
console.log('Puerto Servidor', port);