// this is working and we have to createe a .env file with  the secret key


const Moralis = require("moralis").default;
const fs=require("fs");
require("dotenv").config();

const fileUploads = [
    {
        path:"s.jpeg",
        content:fs.readFileSync("./s.jpeg",{encoding:"base64"})
    }
]

async function upload(){
    await Moralis.start({
        apiKey: process.env.MORALIS_KEY
    })

    const res = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: fileUploads
    })

    console.log(res.result);
}

upload();