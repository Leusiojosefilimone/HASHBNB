import jwt from "jsonwebtoken";
import "dotenv/config";

const { JWT_SECRET_KEY } = process.env;

export const jwtVerify = (req) => {
  
  const { token } = req.cookies;

  if (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, JWT_SECRET_KEY, {}, (err, userInfo) => {
        if (err) {
          console.error("deu algunerro ao verificar o token;",err);
          reject(err)
        }
        resolve(userInfo) ;
      });
      
    });
  } else {
    return null;
  }
};  

export const jwtSign = (newUserObj) => {
  return new Promise((resolve, reject) => {
         jwt.sign(newUserObj, JWT_SECRET_KEY, {expiresIn: "1d"}, (error, token) => {
              if (error) {
                console.error("deu erro ao criar token:",error);
                reject(error)
              }
              resolve(token)
  })
})}
