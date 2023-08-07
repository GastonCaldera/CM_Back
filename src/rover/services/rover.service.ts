import { Injectable } from '@nestjs/common';

@Injectable()
export class RoverService {
  async getRoverImages(
    type: string,
    camera: string,
    page: number,
    sol: number,
    earth_data: string,
  ) {
    try {
      const myHeaders = new Headers();
      const apiKey = process.env.NASA_API_KEY;

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
      const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${type}/photos?${
        earth_data ? 'earth_data=' + earth_data + '&' : ''
      }${
        camera !== 'all' ? 'camera=' + camera + '&' : ''
      }sol=${sol}&page=${page}&api_key=${apiKey}`;
      const response = await fetch(apiUrl, requestOptions);
      const jsonResponse = await response.json();
      return {
        data: jsonResponse.photos,
        status: 'successful',
        message: 'Getting Rover Images Successfully',
      };
    } catch (error) {
      console.log('error', error);
      return {
        data: error,
        status: 'Error',
        message: 'Server Error',
      };
    }
  }
}
