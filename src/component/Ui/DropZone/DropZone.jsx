import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import UploadIcon from "../../icons/Upload";

function DropZone({ Title, setFile,file }) {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({
    accept: {
      "image/*": [],
    
    },
    onDrop:  acceptedFiles => {
        setFile(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      },
  });
  useEffect(() => {

    console.log(file);
  }, [file]);
  return (
    <div className="container">
      <div
        {...getRootProps({
          isFocused,
          isDragAccept,
          isDragReject,
          className: "dropZoneContainer",
        })}
      >
        <input {...getInputProps()} />
        <UploadIcon />
        <p>{Title}</p>
      </div>
    </div>
  );
}
export default DropZone;
