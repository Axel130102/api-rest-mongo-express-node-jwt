import mongoose from "mongoose"

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log("Conexion exitosa ✅");
} catch (error) {
    console.log("Error de conexión:❌ " + error);
}
