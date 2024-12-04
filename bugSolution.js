import * as Linking from 'expo-linking';

const handleDeepLink = async (url) => {
  // Process the deep link URL
  console.log('Deep link received:', url);
  // Perform relevant actions based on the URL
};

Linking.getInitialURL().then((url) => {
  if (url) {
    handleDeepLink(url);
  }
});

setInterval(async () => {
  const url = await Linking.getInitialURL();
  if (url) {
    handleDeepLink(url);
    Linking.clearInitialURL(); // Clear to prevent duplicate handling
  }
}, 5000); // Check every 5 seconds

//Optional: Add a fallback using Linking.addEventListener if preferred for certain scenarios.