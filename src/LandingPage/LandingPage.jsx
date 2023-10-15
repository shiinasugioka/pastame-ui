import { useState } from "react";
import axios from "axios";
import "./LandingPage.css";
import PhotoUploadPage from "../PhotoUploadPage/PhotoUploadPage";

function LandingPage() {
  const [file, setFile] = useState(null);

  const onUpload = async () => {
    const formData = new FormData();
    file.forEach((f) => {
      formData.append(`imgfile`, f.file);
    });
    try {
      const response = await axios.post("http://localhost:8080/upload", formData);
      console.log("Response:", response.data);
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
        <PhotoUploadPage file={file} setFile={setFile} />
      </div>
    </>
  );
}

export default LandingPage;
