import React, { useState } from "react";
import axios from "axios";
function Profile() {
  const [selectedFile, setSelectedFile] = useState(null);

  function submitFile() {
    debugger
    const formData = new FormData();
    formData.append("profile_picture", selectedFile);

    axios
      .post(`${process.env.REACT_APP_BACKEND}/user/profile-pic`, formData, {
        headers: { 
        'Authorization': `Bearer ${localStorage.getItem("token")}`, 
        }
      })
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => {
          debugger
          alert("File Upload Error")
      });
  }

  function handleFileChange(e) {
    setSelectedFile(e.target.files[0])
  }

  return (
    <>
    
      <input
        type="file"
        onChange={handleFileChange}
      />
      <button onClick={submitFile}>Upload Profile Pic</button>
    </>
  );
}

export default Profile;
