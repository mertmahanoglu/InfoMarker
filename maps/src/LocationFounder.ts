import fetch from 'node-fetch';

export class LocationFounder {
  getLocation(lat: number, lng: number): string {
    let value;
    const response = fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }
    )
      .then((response) =>
        response.text().then(function (text) {
          const parser = new DOMParser();
          const xmlDOM = parser.parseFromString(text, 'text/xml');
          value = xmlDOM.getElementsByTagName('result')[0].innerHTML;
        })
      )
      .catch((reason) => {
        throw new Error('This is an example exception.');
      });
    console.log(value);
    return value;
  }
}
