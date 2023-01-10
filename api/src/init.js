const app = require("./app");
const server = require("./bootstrap/server.bootstrap");
const database = require("./bootstrap/database.bootstrap");
const start = async () => {
const appServer = server();
const appDatabase = database();

try {
    
    appServer.initialize(app);
    appDatabase
    .initialize()
    .then()
    .catch((reason) => {
    console.log("couldn't connect with db because of " + reason);
    })
    .finally(async()=>{
        // const transporter = await createTransporter()
        // transporter.verify((err, success) => {
        //     err
        //       ? console.log(err)
        //       : console.log(`=== Server is ready to send messages: ${success} ===`);
        //    });
    })
    ;
} catch (e) {
//TODO: Catch error and disconnect db
// appDatabase.disconnect();
console.log("there was an error");
console.log(e);
}
};

start();