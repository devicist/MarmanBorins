# About The Project

This program was written for Jennifer Marmans and Daniel Borins for an art installation they developed. In it users sit down in front of a computer monitor and are shown a series of still images that the artists developed. When the user dons a special helmet and "meditate" by sitting still, a secret video is revealed to them, which terminates when the helmet is removed.

Written in touchdesigner this program does the following:

- it shows a series of static images fullscreen on a computer display.
- when a user sits in front of the camera (likely embedded in the display), it uses MediaPipe to detect their face.
- switches from showing static images to a video stream if the following conditions are met:
  - the user faces forward such that the centroids of their eyes appear between and above their ears.
  - the user dons a (pink) helmet on their head such that the centroid of the helmet appears between and above the eyes, and the size of the color blob is large enough that it could be a helmet.
- switches back to static images when the helmet centroid disappears (because the helmet has been removed)
- when 'v' is pressed on the keyboard, calibration settings are overlayed on screen. These use UI elements to:
  - display the camera stream
  - display the detected centroids
  - tweak the settings of the color of the helmet being detected

# Getting Started

To get the program up and running, do the following

- First, click on the green "Code" button in the top right.
- Select "Download Zip", download the code repository and unzip it.
- Install Touchdesigner.
- Now go ahead and open the `attentionSense.toe` file in Touchdesigner
- The application will launch in fullscreen mode, and should work without further intervention.
- If needed, hit 'v' on the keyboard to toggle the calibration viewer where you can see the camera stream and tweak the detection settings.
- If needed, hit 'esc' on the keyboard to escape fullscreen mode and see/edit the touchdesigner file.
- Add the program to startup tasks, and use 'pmset' to schedule the application and computer to automatically launch/shutdown each day.

# Contact

Nicholas Stedman - nick@devicist.com
