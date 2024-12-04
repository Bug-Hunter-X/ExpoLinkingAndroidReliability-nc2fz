# Expo Linking.addEventListener unreliability on Android

This repository demonstrates a bug in Expo's `Linking.addEventListener` function on Android.  The event listener inconsistently fires across different Android devices and versions, leading to unreliable deep link handling.  This can significantly impact the user experience, as the app may fail to open deep links correctly.

## Reproducing the Issue

The `bug.js` file contains code that attempts to listen for deep links using `Linking.addEventListener`. On certain Android devices, this listener may not be triggered when a deep link is opened.

## Solution

The `bugSolution.js` file presents a possible workaround. This approach utilizes a combination of `Linking.getInitialURL` and a periodic check for new URLs to ensure better deep link handling reliability.  While not perfect, this improves consistency compared to solely relying on `Linking.addEventListener`.

## Contributing

Contributions are welcome! If you have any ideas for improving the reliability of deep link handling in Expo, please submit a pull request.