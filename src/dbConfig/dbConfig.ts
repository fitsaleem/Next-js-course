import mongoose from "mongoose";


export async function connect () {
  
  try {

    mongoose.connect(process.env.MONGO_URI!); // ! ka matlab type script ko confirm kr raha hai k ye alway return kare gah

    const connection=mongoose.connection;

    connection.on('connected', ()=>{
      console.log("mongoDB is connected sucessfully");
    });

    connection.on("error",(err)=>{
      console.log("mongoDB has error. please make sure mongodb is connected" + err);
      process.exit;
    })

  } catch (error) {
    console.log("some error accors");
    console.log(error);
  }
}
