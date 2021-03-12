module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET: "JF9238FJ2893JF9823HG849HGJUIFNJ98DJDN3DIDJ3NKDN",
    api: process.env.NODE_ENV === "production" ? "https://api.loja-testeamplie.com" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://loja-testeamplie.com" : "http://localhost:8000"
};