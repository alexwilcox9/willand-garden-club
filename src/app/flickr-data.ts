export class FlickrResp {
  photos: FlickrData;
  stat: string;
}

export class FlickrData {
  page: number;
  pages: number;
  perpage: number;
  photo: FlickrPhoto[];
  total: number;
}

/**
 * The Data structure for Flickr photos
 *
 * We only care about Id and Title
 *
 * @export
 * @class FlickrPhoto
 */
export class FlickrPhoto {
  id: string;
  title: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  has_comment: number;
}

export class Photo {
  id: string;
  url: string;
  title: string;

  constructor(id, url, title) {
    this.id = id;
    this.url = url;
    this.title = title;
  }
}