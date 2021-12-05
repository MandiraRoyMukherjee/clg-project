
const db = require("../../config/database");
module.exports = {
    create: (data, callBack) => {
      db.query(
          
        `insert into registration(name,aadhar_card,number,password,c_password) 
                  values(?,?,?,?,?)`,
        [
          data.name,
          data.aadhar_card,
          data.number,
          data.password,
          data.c_password,
          
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
    
      );
    },
  
    getUsers: callBack => {
      db.query(
        `select id,name,aadhar_card,number,password,c_password from registration`,
        [],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    getUserByUserEmail: (name, callBack) => {
        db.query(
          `select * from registration where name = ?`,
          [name],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getUserByUserId: (id, callBack) => {
        db.query(
          `select id,name,aadhar_card,number,password,c_password from registration where id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      updateUser: (data, callBack) => {
        db.query(
          `update registration set name=?,aadhar_card=?,number=?,password=?,c_password=? where id=?`,
          [
            data.id,
            data.name,
            data.aadhar_card,
            data.number,
            data.password,
            data.c_password,
            
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      deleteUser: (data, callBack) => {
        db.query(
          `delete from registration where id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      }
  }