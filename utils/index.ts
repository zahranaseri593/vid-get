export async function fetchVideos(req: string) {
    
    // Set the required headers for the API request
    const headers: HeadersInit = {
        "Authorization": process.env.pexelsApi
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