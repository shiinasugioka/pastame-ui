document.getElementById("submit-btn").addEventListener("click", () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
});

document.getElementById("submit-btn").addEventListener("click", () => {
  let postid = uuidv4();
  let post = document.getElementById("imgfile");
  let file = post.files[0];
  let blob = file.slice(0, file.size, file.type);
  let newFile = new File([blob], postid, { type: file.type });
  let formData = new FormData();
  formData.append("imgfile", newFile);

  fetch("/upload", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
});
