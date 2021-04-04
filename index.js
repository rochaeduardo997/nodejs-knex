const knex = require("./config/database");

const data = {
  username: "carlos",
  email: "carlos@email.com",
  password: "654321",
};

//insert
/*
knex.insert(data).into("tbl_users").then((response) => {
console.log("Insert into tbl_users successful", response);
}).catch((error) => {
console.error("Cannot insert data into database, ", error);
}).finally(() => {
console.log("Database connection has been closed");
knex.destroy();
});
*/

//select
/*
knex.select("id", "username", "email").table("tbl_users").then((response) => {
console.log(response);
}).catch((error) => {
console.error("Cannot select data from database", error);
}).finally(() => {
console.log("Database connection has been closed");
knex.destroy();
});
*/

//insert and show data
/*
knex.insert(data).into("tbl_users").then((response) => {
knex.select("id", "username", "email").from("tbl_users").where("username", data.username).then((response) => {
console.log("Insert into tbl_users successful", response);
}).catch((error) => {
console.error("Cannot select data from database", error);
}).finally(() => {
console.log("Database connection has been closed");
knex.destroy();
});
}).catch((error) => {
console.error("Cannot insert data into database, ", error);
}).finally(() => {
console.log("Database connection has been closed");
knex.destroy();
});
*/

//select with where
/*
knex.select("id", "username").where({username: "carlos", email: "carlos@email.com"}).table("tbl_users").then((response) => {
console.log(response)
}).catch((error) => {
console.error(error);
}).finally(() => {
console.log("Database connection has been closed");
knex.destroy();
});
*/

//delete data
/*
knex.where({"id": 1}).delete().table("tbl_users").then((response) => {
console.log("Data has been deleted", response);
}).catch((error) => {
console.error("Failed to delete data from database ",error);
}).finally(() => {
console.log("Database connection has been closed");
knex.destroy();
});
*/

//update data
/*
knex.where({"id": 1}).update({username: "eduardo"}).table("tbl_users").then((response) => {
console.log("Data has been updated");
}).catch((error) => {
console.error("Failed on update data", error);
}).finally(() => {
console.log("Database connection has been closed");
knex.destroy();
});
*/

//groupBy
/*
knex.select().table("tbl_users").orderBy("createdAt", "desc").then((response) => {
console.log(response);
}).catch((error) => {
console.log(error);
}).finally(() => {
console.log("Database connection has been closed");
knex.destroy();
});
*/
