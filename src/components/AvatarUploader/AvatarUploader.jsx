import React, { useState } from 'react';
import avatar from 'images/account/avatar.png';
import { ReactComponent as AddIcon } from 'images/account/add.svg';
import { Img, Input, Label, Wrap } from '.';
import Box from 'components/Box/Box';

export const AvatarUploader = () => {
  const [imagePreview, setImagePreview] = useState(avatar);

  const handleImageChange = e => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImagePreview(fileReader.result);
    };
    fileReader.readAsDataURL(selectedFile);
  };

  return (
    <Box position="relative" display="block" m="0 auto" width="max-content">
      {imagePreview ? (
        <Wrap>
          <Img src={imagePreview} alt="Avatar Preview" />
        </Wrap>
      ) : (
        <div>Upload your avatar</div>
      )}
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
