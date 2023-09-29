export async function fetchVideos(req: string) {

    const apiKey = 'bFzTf9c6Eg2xn8DpkwlWwWTwgh1KxPqEKVESvzZXLIWFx1BNZBUvg1Yh';
    
    // Set the required headers for the API request
    const headers: HeadersInit = {
        "Authorization": apiKey
    }


    // Set the required headers for the API request
    const response = await fetch(
      `${req}`,
      {
        headers: headers,
      }
    );
  
    // Parse the response as JSON
    const result = await response.json();
  
    return result;
  }

  export const url = 'https://api.pexels.com/'