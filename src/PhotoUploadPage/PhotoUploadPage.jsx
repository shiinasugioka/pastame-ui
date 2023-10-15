import "./PhotoUploadPage.css";
import { Grid } from "@mui/material";
import ImageUploading from "react-images-uploading";
import { BiSolidTrash } from "react-icons/bi";
import { LiaRedoAltSolid } from "react-icons/lia";

function PhotoUploadPage({ file, setFile }) {
  const maxNumber = 10;

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
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const imageUploadBtn = () => {
    return (
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
              className="upload-btn"
            >
              <span className="material-symbols-outlined">upload</span>
              <div className="upload-btn-text">Upload Photos Here</div>
            </button>

            <p className="yourIngredients">Your Ingredients</p>

            <div className="photo-grid">
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="150" />
                  <div className="image-item__btn-wrapper">
                    <button
                      className="image-btn"
                      onClick={() => onImageRemove(index)}
                    >
                      <BiSolidTrash color="white" size="20px"></BiSolidTrash>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    );
  };

  // dev test remove when done
  const submitBtn = () => {
    return (
      <div className="footer">
        <div>
          <button className="submit-btn" onClick={onUpload}>
            Start Cooking!
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <p className="inst-text">
        Please upload an image of each of your ingredients separately below.
      </p>

      {imageUploadBtn()}
      {submitBtn()}
    </>
  );
}

export default PhotoUploadPage;
