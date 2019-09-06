import fp from 'lodash/fp';

export const gallerySelector = fp.compose(
  fp.defaultTo([]),
  fp.get('Gallery.data')
);

export const loadingSelector = fp.compose(fp.get('Gallery.loading'));