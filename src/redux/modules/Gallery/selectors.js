import fp from 'lodash/fp';

export const gallerySelector = fp.compose(
  fp.defaultTo([]),
  fp.get('Gallery.data')
);

export const loadingSelector = fp.compose(fp.get('Gallery.loading'));
export const previewSelector = fp.compose(fp.get('Gallery.preview'));
export const selectedGallerySelector = fp.compose(fp.get('Gallery.selectedGallery'));
export const selectedLikeStatusSelector = fp.compose(fp.get('Gallery.selectedLikeStatus'));