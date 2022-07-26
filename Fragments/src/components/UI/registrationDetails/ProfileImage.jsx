import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ProfileImageCropper from "./ProfileImageCropper";
import styles from "./ProfileImage.module.scss";
import variables from '../../important variables/variables';

const ProfileImage = ({ value, setValue }) => {
    const [openParrentModal, setOpenParrentModal] = React.useState(false);
    const handleParrentOpen = () => setOpenParrentModal(true);
    const handleParrentClose = () => setOpenParrentModal(false);

    const [openChildModal, setOpenChildModal] = React.useState(false);
    const handleChildOpen = () => setOpenChildModal(true);
    const handleChildClose = () => setOpenChildModal(false);

    const [originalImage, setOriginalImage] = useState();
    const [squareImage, setSquareImage] = useState();
    const [crop, setCrop] = useState();

    const defaultImage = "/default-user.png";

    useEffect(() => {
        setValue(squareImage);
      }, [squareImage]);

    const onImageUpload = (event) => {
        if (event.target.files.length > 0) {
            if (event.target.files[0].size > variables.MAX_IMAGE_SIZE){
                document.getElementById('error').innerHTML = 'Розмір файлу <= 25 МБ!';
                document.getElementById('error').style.color = 'red';
                return;
            }
            
            const reader = new FileReader();
        
            reader.addEventListener("load", () => {
                const image = reader.result;
                autocropImage(image);
                setOriginalImage(image);
            });
        
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const autocropImage = async (sourceImage) => {
        var img = new Image();
        img.src = sourceImage;
        
        const canvas = await document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        
        if(img.width === img.height){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
        else if(img.width < img.height){
            canvas.width = img.width;
            canvas.height = img.width;
            ctx.drawImage(img, 0, -img.height/2+img.width/2);
        }
        else if(img.width > img.height){
            canvas.width = img.height;
            canvas.height = img.height;
            ctx.drawImage(img, -img.width/2+img.height/2, 0);
        }
        
        canvas.toBlob((blob) => {
            setSquareImage(blob);
          }, "image/jpeg");
    }

    const deleteImage = () => {
        setSquareImage(null);
        setOriginalImage(null);
        setCrop(null);
    }

    const editImage = () => {
        handleChildOpen();
        handleParrentClose();
    }

    const saveCrop = () => {
        setSquareImage(crop);
        handleChildClose();
        handleParrentOpen();
    }

    const cancelCrop = () => {
        handleParrentOpen();
        handleChildClose();
    }



    return(
        <div className={styles.profileImageContainer}>
            <img
                className={styles.profileImage}
                src={(squareImage && window.URL.createObjectURL(squareImage)) || defaultImage}
                alt="profile img"
            />
            <button onClick={handleParrentOpen}>
                <img
                    className={styles.editIcon}
                    src="/open-profile-image.svg"
                    alt="edit"
                />
            </button>

            <Modal
                open={openParrentModal}
                onClose={handleParrentClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box className={styles.ParrentModal}>
                    <div>
                        <h2>Зображення профілю</h2>
                        <button onClick={handleParrentClose}><img src='/profile-image-close.svg' alt='close'/></button>
                    </div>

                    <img
                        className={styles.profileImage}
                        src={(squareImage && window.URL.createObjectURL(squareImage)) || defaultImage}
                        alt="profile img"
                    />

                    {squareImage ? 
                    <div className={styles.buttonsPanel}>
                        <button onClick={editImage}>
                            <img src='/edit-profile-image.svg' alt='edit'/>
                            Редагувати
                        </button>
                        <button onClick={deleteImage}>
                            <img src='/delete-profile-image.svg' alt='delete'/>
                            Видалити
                        </button>
                    </div> : 
                    <div className={styles.buttonsPanel}>
                        <label id="error"></label>
                        <input
                            className={styles.uploadButton}
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={onImageUpload}
                            required
                        />
                    </div>}
                </Box>
            </Modal>
            <Modal
                open={openChildModal}
                onClose={handleChildClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box className={styles.ChildModal}>
                    <div className={styles.cropper}>
                        <ProfileImageCropper
                            imageToCrop={originalImage}
                            onImageCropped={(croppedImage) => setCrop(croppedImage)}
                        />
                    </div>
                    <div className={styles.cropperButtons}>
                        <button className={styles.cropperButton} onClick={saveCrop}>Обрізати</button>
                        <button className={styles.cropperButton} onClick={cancelCrop}>Скасувати</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default ProfileImage;