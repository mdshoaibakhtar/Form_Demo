const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/form").then(() =>
console.log("Connection Will Be Connect ")).catch((err) =>
console.log(err));




// const createDocument = async() =>{
//     const mdshoaib = new details({
//         name: "mdshoaibakhtar",
//         address: "thana road",
//         mobile: 7870178931,
//         mail: "azaan3842@gmail.com",
// })
//     const mdsaif = new details({
//         name: "mdsaifakhtar",
//         address: "thanaroad",
//         mobile: 9905109322,
//         mail: "mdshoaib@gmail.com",
// })


// const result = await details.insertMany([mdshoaib,mdsaif]);
//         console.log(result);
// }

// createDocument();