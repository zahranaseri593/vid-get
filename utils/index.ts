export async function fetchVideos(filters: string) {
    
    // Set the required headers for the API request
    const headers: HeadersInit = {
        "Authorization": "bFzTf9c6Eg2xn8DpkwlWwWTwgh1KxPqEKVESvzZXLIWFx1BNZBUvg1Yh"
    }

    // Set the required headers for the API request
    const response = await fetch(
      `https://api.pexels.com/videos/${filters}`,
      {
        headers: headers,
      }
    );
  
    // Parse the response as JSON
    const result = await response.json();
  
    return result;
  }