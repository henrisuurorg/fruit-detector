

const uploadImage = async (singleFile) => {
  console.debug("-------------------")
  console.debug("Function called: uploadImage");
  console.debug("singleFile: " + singleFile);
  //Check if any file is selected or not
  if (singleFile != null) {
    //If file selected then create FormData
    const formData = new FormData();
    formData.append('imagefile', {
      uri: singleFile,
      type: 'image/jpeg',
      name: 'image.jpg'
    });
    console.debug("Sending data.")
    fetch('https://fruit-detector-4fuk.onrender.com/inference', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
    })
    .then(response => response.text())
    .then(result => {
      console.debug('Predicted class:', result);
    })
    .catch(error => {
      console.debug('Prediction error:', error);
    });
  };
}
export default uploadImage;