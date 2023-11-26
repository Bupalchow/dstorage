import React, { useState } from 'react';
import { Web3Storage } from 'web3.storage';

function FileUploadComponent() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const client = new Web3Storage({ token: 'YOUR_WEB3_STORAGE_TOKEN' });
    const cid = await client.put([file]);
    console.log('Uploaded file CID:', cid);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload to Filecoin</button>
    </div>
  );
}

export default FileUploadComponent;
