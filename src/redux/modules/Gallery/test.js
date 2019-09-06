import handleActions from './reducers';
import { GALLERY_GET, GALLERY_PREVIEW, GALLERY_LIKE } from './types';

const initialState = {
  data: null,
  status: null,
  loading: false,
  preview: false,
  selectedGallery: null,
  selectedLikeStatus: false,
  likesGallery: {},
  error: null,
  message: '',
};

const photo = [
  {
    albumId: 1,
    id: 1,
    thumbnailUrl: "",
    title: "",
    url: ""
  }
]

describe('gallery reducer', () => {
  it('should handle GALLERY_GET/pending', () => {
    expect(handleActions("GALLERY_GET/pending", initialState)).toEqual(
      "GALLERY_GET/pending"
    )
  })

  it('should handle GALLERY_GET/fail', () => {
    expect(
      handleActions(
        "GALLERY_GET/fail",
        {
          ...initialState,
          data: null,
          error: true,
          loading: false,
          status: "GALLERY_GET/fail",
        }
      )
    ).toEqual("GALLERY_GET/fail")
  })

  it('should handle GALLERY_GET/success', () => {
    expect(
      handleActions(
        "GALLERY_GET/success",
        {
          ...initialState,
          loading: true,
          status: "GALLERY_GET/success",
        }
      )
    ).toEqual("GALLERY_GET/success")
  })

  it('should handle GALLERY_PREVIEW', () => {
    expect(
      handleActions(
        "GALLERY_PREVIEW",
        {
          ...initialState,
          preview: true,
          selectedLikeStatus: true,
          selectedGallery: {1: true},
          status: "GALLERY_PREVIEW",
        }
      )
    ).toEqual("GALLERY_PREVIEW")
  })

  it('should handle GALLERY_LIKE', () => {
    expect(
      handleActions(
        "GALLERY_LIKE",
        {
          ...initialState,
          likesGallery: {1: true},
          selectedLikeStatus: true,
          status: "GALLERY_LIKE",
        }
      )
    ).toEqual("GALLERY_LIKE")
  })
})