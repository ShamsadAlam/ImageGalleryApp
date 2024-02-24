import AsyncStorage from "@react-native-async-storage/async-storage";
const FLICKR_API_KEY = "6f102c62f41998d151e5a1b48713cf13";

export const getRecentImages = async () => {
  try {
    const cachedImages = await AsyncStorage.getItem("cachedImages");
    if (cachedImages) {
      const images = JSON.parse(cachedImages);
      return images;
    }
    const response = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&extras=url_s`
    );

    const data = await response.json();

    if (data.stat === "ok") {
      const images = data.photos.photo.map((photo) => ({
        id: photo.id,
        url: photo.url_s,
      }));

      return images;
    } else {
      throw new Error("Error in Flickr API response");
    }
  } catch (error) {
    throw new Error("Error fetching recent images from Flickr API");
  }
};
