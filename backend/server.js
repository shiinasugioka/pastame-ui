import credentials from "./visionapi.json" assert { type: "json" };
import express from "express";
import multer from "multer";
import cors from "cors";
import { Storage } from "@google-cloud/storage";
import { exec } from "child_process";
import { v4 } from "uuid";

const app = express();
app.use(cors());

const port = 8080;
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

let projectId = credentials.project_id;
let keyFilename = "visionapi.json";

const storage = new Storage({
  projectId,
  keyFilename,
});

const bucket = storage.bucket("pastame");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/upload", upload.array("imgfile"), (req, res) => {
  console.log("uploading");
  console.log("Files: ", req.files);
  const responses = [];

  if (!req.files || req.files.length === 0) {
    res.status(400).send("No file uploaded.");
    return;
  }

  req.files.forEach((file) => {
    try {
      const randomId = v4();
      let blob = bucket.file(file.originalname + "-" + randomId);
      let blobStream = blob.createWriteStream();
      console.log("Bucket info: ", bucket.name, blob.name);
      blobStream.on("error", (err) => {
        console.log(err);
      });

      blobStream.on("finish", () => {
        console.log("blob.name", blob.name);
        exec(`python3 visionapi.py https://storage.googleapis.com/${bucket.name}/${blob.name}`, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error executing Python script: ${error}`);
            res.status(500).send("Error processing image");
            return;
          }
          //   console.log(`VisionAPI Output: ${stdout}`);
          responses.push({ file: file.originalname, status: "success", message: stdout });
          console.log("responses: ", responses);
        });
      });
      blobStream.end(file.buffer);
    } catch (error) {
      console.log(error);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
