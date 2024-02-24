import { useEffect, useState } from "react"

function AvatarTab() {

    const [file, setFile] = useState()


    useEffect(()=> {
        console.log("run effect");
        return ()=> {
            console.log("run clueanup ");
            if(file) {
                URL.revokeObjectURL(file.previewUrl)
            }
        } 
    }, [file])
 
    const handleFileChange = (e) => {

        let uploadFile = e.target.files[0]

        if(uploadFile) {
            uploadFile.previewUrl = URL.createObjectURL(uploadFile)
            setFile(uploadFile)
        }
    }

    return(
        <div>
            <label>Upload Avatar: </label>
            <br/>
            <input
                type="file"
                onChange={handleFileChange}
            />
            {file && <img
                        src={file.previewUrl}
                        alt=""
                        width="80%"
            />}

        </div>
    )
}

export default AvatarTab