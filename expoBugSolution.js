const checkExpoVersion = async () => {
  try {
    const { version } = await Expo.Constants.getExpoGoVersionAsync();
    console.log('Expo Go version:', version);
    // Check against the required minimum version
    // If not compatible, prompt the user to update Expo Go
    // ... Update logic here...
  } catch (e) {
    console.error('Error getting Expo Go version:', e);
  }
};

// Use checkExpoVersion() to ensure compatibility