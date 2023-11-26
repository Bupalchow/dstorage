//this one is using pinata there ia an error

import { useState } from "react"
import axios from "axios"
const JWT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxNTg0MTQ4Ny1lODMzLTQyNTUtYjRjYy0wMWE3NmVlNTQzZGYiLCJlbWFpbCI6IndlYmhvc3RpbmcyOTYxMjJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImRhNjFjMTA3NjYzOGQwMWFhOGMzIiwic2NvcGVkS2V5U2VjcmV0IjoiNGUxOWY5NDlhY2Q3OWNmNWMwYzFiYmJmMDhiMGM3ODExYmFlYTNhMWFiN2I5MDRiOThiY2IxODRlNmViZDY5ZCIsImlhdCI6MTcwMDk4NzQyOH0.PekTSsQGsUMzXbSiCI6OmNc9Zf1lFV9WECB78pw_mOw`

const FolderUpload = () => {

  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files);
  };

  const handleSubmission = async() => {

    const formData = new FormData();

    Array.from(selectedFile).forEach((file) => {
      formData.append("file", file)
    })

    const metadata = JSON.stringify({
      name: 'Folder name',
    });
    formData.append('pinataMetadata', metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', options);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, { //error line 
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <label class="form-label">choose Folder</label>
    <input directory="" webkitdirectory="" type="file"  onChange={changeHandler}/>
    <button onClick={handleSubmission}>Submit</button>
    </>
  )
}

export default FolderUpload