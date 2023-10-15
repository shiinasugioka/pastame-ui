import { useState } from "react";
import axios from "axios";
import "./LandingPage.css";

function LandingPage() {
  const [count, setCount] = useState(0);
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = async () => {
    const formData = new FormData();
    formData.append("imgfile", file);

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
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <div>
          <input type="file" id="imgfile" onChange={onFileChange} />
          <button id="submit-btn" onClick={onUpload}>
            Start Cooking
          </button>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default LandingPage;
