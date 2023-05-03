import React, { useState } from 'react';
import avatar from 'images/account/avatar.png';
import { Img, Input, Label, Wrap, AddIcon } from '.';
import Box from 'components/Box/Box';

export const AvatarUploader = ({
  imageUrl,
  dispatch,
  update,
  setFileImage,
}) => {
  const [imagePreview, setImagePreview] = useState(imageUrl || avatar);

  const handleImageChange = e => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      return;
    }

    const imageUrl = URL.createObjectURL(selectedFile);
    setImagePreview(imageUrl);

    setFileImage(selectedFile);

    // const formData = new FormData();

    // formData.append('image', selectedFile);
    // dispatch(update(formData));
  };

  return (
    <Box position="relative" display="block" m="0 auto" width="max-content">
      <Wrap>
        <Img src={imagePreview} alt="Avatar Preview" />
      </Wrap>

      <Input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        id="add-image"
      />
      <Label htmlFor="add-image">
        <AddIcon />
      </Label>
    </Box>
  );
};
