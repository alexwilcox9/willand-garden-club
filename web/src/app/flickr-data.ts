export class FlickrResp {
  photoset: FlickrData;
  stat: string;
}

export class FlickrData {
  id: string;
  page: number;
  pages: number;
  owner: string;
  perpage: number;
  photo: FlickrPhoto[];
  primary: string;
  total: number;
}

/**
 * The Data structure for Flickr photos
 *
 * We only care about Id and Title
 *
 * @export
 */
export class FlickrPhoto {
  id: string;
  title: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  // tslint:disable-next-line: variable-name
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
