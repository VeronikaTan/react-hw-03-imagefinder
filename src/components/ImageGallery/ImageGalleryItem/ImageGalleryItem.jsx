
import s from "./ImageGalleryItem.module.css"
import PropTypes from 'prop-types';

function ImageGalleryItem({
  id,
  tags,
  webformatURL,
  onClick,
}) {
  return (
    <li id={id} className={s.imageGalleryItem}>
      <img
        className={s.imageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={onClick}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;