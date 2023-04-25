import React, { useState } from 'react';
import avatar from 'images/account/avatar.png';
import { ReactComponent as AddIcon } from 'images/account/add.svg';
import { Img, Input, Label, Wrap } from '.';
import Box from 'components/Box/Box';

export const AvatarUploader = ({ avatarURL }) => {
  const [imagePreview, setImagePreview] = useState(avatar);

  const handleImageChange = e => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      return;
    }

    // const imageUrl = URL.createObjectURL(selectedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImagePreview(fileReader.result);
    };
    fileReader.readAsDataURL(selectedFile);
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
        <AddIcon width="100%" height="100%" display="block" />
      </Label>
    </Box>
  );
};
