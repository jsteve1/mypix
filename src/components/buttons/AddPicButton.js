import { Plus } from "react-bootstrap-icons";
import { HomeButton } from "../links/SignIn";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DragAndDropText from "../text/DragAndDropText"; 
import { isMobile } from "../../app/utils/isMobile";
import useWindowSize from "../../app/utils/useWindowSize";

const NewPhotoButton = styled(HomeButton)`   
  font-size: 1.2rem;
  width: 200px;
  margin-bottom: 50px;
  `;

const HiddenPhotoInput = styled.input`
  display: none; 

`; 

export default function AddPicButton() {
    const { width, height } = useWindowSize();
    const inputRef = useRef(null); 
    const [selectedPhoto, setSelectedPhoto] = useState(null); 
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(false);
    const handleUpload = () => {
       if(inputRef.current) inputRef.current.click(); 
    }
    const handlePhoto = (e) => {
      if(submitting) return; 
      if(e.target.files.length === 0) return;
      setSubmitting(true);
      setSelectedPhoto(e.target.files[0]); 
      const fileSizeKiloBytes = selectedPhoto.size / 1024; 
      const MIN_FILE_SIZE = 1024 // 1MB
      const MAX_FILE_SIZE = 5120 // 5MB
      if(fileSizeKiloBytes < MIN_FILE_SIZE || fileSizeKiloBytes > MAX_FILE_SIZE) {
        setError(true);
        setSubmitting(false);
        return;
      }
      const formData = new FormData();
      formData.append("file", selectedPhoto);

    }

    useEffect(() => {

    }, []);

    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <NewPhotoButton onClick={handleUpload}>
          <Plus width={"35px"} height={"35px"} style={{ marginRight: "2px" }} />Click to Upload 
          <HiddenPhotoInput ref={inputRef} name="file" type="file" onClick={handlePhoto} id="new-photo-upload" accept="image/*" />
        </NewPhotoButton>
        {
          isMobile.any() ? <></> : <DragAndDropText />
        }
      </div>
    )
}