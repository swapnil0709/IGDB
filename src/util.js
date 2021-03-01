// Media Resize

export const smallImage = (imagePath, size) => {
  if (imagePath === null) {
    return;
  }
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace(`/media/games/`, `/media/resize/${size}/-/games/`);
  console.log("Image:", image);
  return image;
};
