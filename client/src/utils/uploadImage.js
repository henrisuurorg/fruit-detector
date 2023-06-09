
const uploadImage = async (singleFile, useNew) => {
  //create promise for the race conditions in the app
  return new Promise((resolve, reject) => {
    console.debug("> Sending data")
    //Check if any file is selected or not
    if (singleFile != null) {
      //If file selected then create FormData
      const formData = new FormData();
      formData.append('imagefile', {
        uri: singleFile,
        type: 'image/jpeg',
        name: 'image.jpg'
      });
      formData.append('useNew', useNew);
      url = "https://fruit-detector-4fuk.onrender.com/inference"
      fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
      })
      .then(response => response.text())
      .then(result => {
        console.debug("> Recieved data:\n"+result)
        resolve(result);
      })
      .catch(error => {
        console.debug('Prediction error:', error);
        reject("promise was rejected: ", error);
      });
    };
  });
}
export default uploadImage;