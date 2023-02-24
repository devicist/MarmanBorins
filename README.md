
# Getting Started

To get the Touchdesigner program up and running, you'll need to first set up a few things on your computer. 
- First, click on the green "Code" button in the top right.
- Select "Download Zip", download the code repository and unzip it.



## Install Node.js

Node.js is required to run the face-tracking program running in the background. 
Install the correct version for your computer [here](https://nodejs.org/en/download/).

## Install Packages
The next few steps require the Terminal. 
- Press Cmd + Space to open the search bar
- Search for "Terminal"

Once in the terminal window, we need to navigate to the downloaded folder where our files are located. To do that, type the letters `cd` followed by the folder path then hit `Enter`. For example: 

```
cd /Users/devlin/Downloads/MarmanBorins-main
```
Once inside the folder, type the following command and hit `Enter`

```
npm install
```

This will install all the required packages for the program to work. It might take a couple of minutes. Once complete, all that's left to do is run the following command
```
node bridge.js
```

You should be greeted with some text "bridge.js running. Waiting for connection...
". 

Now go ahead and open the `attentionSense.toe` file in Touchplayer