//export 'default' (imported as 'ipfsClient') was not found in 'ipfs-http-client' (possible exports: CID, create, globSource, multiaddr, urlSource)
//this is the issue this issue looks like a issue from the package 
import React, { useState } from 'react';
import ipfsClient from 'ipfs-http-client';

const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });

function Ipfs() {
    const [file, setFile] = useState(null);

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const onFileUpload = async () => {
        try {
            const data = new FormData();
            data.append('file', file);
            const result = await ipfs.add(data);
            console.log('IPFS result', result);
        } catch (error) {
            console.error('Error uploading file: ', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={onFileChange} />
            <button onClick={onFileUpload}>Upload!</button>
        </div>
    );
}

export default Ipfs;
