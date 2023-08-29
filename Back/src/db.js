import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        /* await mongoose.connect('mongodb://127.0.0.1:27017/admin_magy'); */
        await mongoose.connect('mongodb+srv://magyprint:Magy.Print.Db@cluster0.b3bdeir.mongodb.net/admin_magy?retryWrites=true&w=majority');
        console.log(">>> Base de Datos Conectada <<<")
    } catch (error) {
        console.log(error);
    }
}


