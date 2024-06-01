"use server";
const getEmbedHtml = async (url: string) => {
  try {
    // Define the URL of the SoundCloud oEmbed endpoint
    const oEmbedUrl = "https://soundcloud.com/oembed";

    const params = new URLSearchParams({
      format: "json",
      url,
    });
    // Make the fetch request
    const response = await fetch(`${oEmbedUrl}?${params}`);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON response
    const data = await response.json();

    // Extract the HTML code from the response
    let embedHtml = data.html;

    // Use the HTML code to embed the album on your site
    embedHtml = embedHtml.replace('frameborder="no"', 'frameBorder="no"');
    console.log(embedHtml);
    return embedHtml;
  } catch (error) {
    // Handle any errors that occur during the fetch request
    console.error("There was a problem with the fetch operation:", error);
  }
};

export { getEmbedHtml };
