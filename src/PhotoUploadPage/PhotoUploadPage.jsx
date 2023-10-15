import axios from "axios";
import { useContext, useState } from "react";
import ImageUploading from "react-images-uploading";
import "./PhotoUploadPage.css";
import { QueryContext } from "../App";

function PhotoUploadPage() {
  const maxNumber = 10;
  const [file, setFile] = useState([]);
  const { setQuery } = useContext(QueryContext);

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setFile(imageList);
  };

  const onUpload = async () => {
    const formData = new FormData();
    file.forEach((f) => {
      formData.append(`imgfile`, f.file);
    });
    try {
      const response = await axios.post(
        "http://localhost:8080/upload",
        formData
      );

      let queryStr = JSON.stringify(response.data);
      console.log("Response:", queryStr.slice(1, queryStr.length - 1));

      setQuery(queryStr.slice(1, queryStr.length - 1));
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <div className="card">
        <div>
          <button id="submit-btn" onClick={onUpload}>
            Start Cooking
          </button>
        </div>
      </div>

      <ImageUploading
        multiple
        value={file}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <div>
        <button id="submit-btn" onClick={onUpload}>
          Start Cooking
        </button>
      </div>
    </>
  );
}

export default PhotoUploadPage;
