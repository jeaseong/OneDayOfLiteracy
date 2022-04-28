import { InputFile } from "../styles/CommonStyle";
import { ChangeButton } from "../styles/User/ProfileStyle";
import { LABEL } from "../utils/constants";
import { useRef } from "react";
import { uploadFile } from "../utils/api";
import { useQueryClient } from "react-query";

function FileUpload({ type, id, prevImage = "", setShowAlert }) {
  const queryClient = useQueryClient();
  const refFileUpload = useRef();

  const handleUploadFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("filename", e.target.files[0]);
    formData.append("prevImage", prevImage);

    try {
      await uploadFile(`uploads/${type}/${id}`, formData);
      if (type === "user") {
        queryClient.invalidateQueries("userState");
        queryClient.invalidateQueries(["user", id]);
      }
    } catch (err) {
      setShowAlert(true);
    }
  };

  return (
    <>
      <InputFile
        type="file"
        ref={refFileUpload}
        accept="image/*"
        onChange={handleUploadFile}
      />
      <ChangeButton onClick={() => refFileUpload.current.click()}>
        {LABEL.CHANGE_IMAGE}
      </ChangeButton>
    </>
  );
}

export default FileUpload;
