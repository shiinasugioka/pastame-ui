import credentials from "./visionapi.json" assert { type: "json" };
import express from "express";
import multer from "multer";
import cors from "cors";
import { Storage } from "@google-cloud/storage";
import { exec } from "child_process";

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

app.post("/upload", upload.single("imgfile"), (req, res) => {
  console.log("uploading");
  try {
    if (!req.file) {
      res.status(400).send("No file uploaded.");
      return;
    } else {
      let blob = bucket.file(req.file.originalname);
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
          console.log(`VisionAPI Output: ${stdout}`);
          res.status(200).send("Success");
        });

        // let publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        // res.status(200).send(publicUrl);
        // res.status(200).send("Success");
      });
      blobStream.end(req.file.buffer);
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
