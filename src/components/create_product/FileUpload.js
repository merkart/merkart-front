import {React} from 'react'

export class FileUpload extends React.Component {


    imageUpload = (e) => {
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
            localStorage["fileBase64"] = base64;
            console.debug("file stored",base64);
        });
    };

    render() {
        return <input
            type="file"
            id="imageFile"
            name='imageFile'
            onChange={this.imageUpload} />;
    }
}


const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}