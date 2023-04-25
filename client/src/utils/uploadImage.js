
let uploadImage = async (singleFile) => {
    //Check if any file is selected or not
    if (singleFile != null) {
      //If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      let res = await fetch(
        'http://localhost//webservice/user/uploadImage',  //our URL at this place
        {
          method: 'post',
          body: data,
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        }
      );

      // change to loading screen somehow

      let responseJson = await res.json();
      if (responseJson.status == 1) {  
        alert('Upload Successful');
        let resData = responseJson.data; //??
        return resData //?
      }
    } else {
      //if no file selected the show alert
      alert('no file!!');
    }
};