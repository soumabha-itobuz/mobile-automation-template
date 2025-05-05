## Setup for Mac Arm architecture  
brew is pre-dependency 

You can Install Brew with ths command from github
```

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

```

## Step 1.
Install JDK 

```
brew search openjdk - for list available JDK 
brew install openjdk
sudo ln -sfn /opt/homebrew/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
code ~/.zshrc
```
append in ~/.zshrc
export JAVA_HOME="$(/usr/libexec/java_home)"

run - `source ~/.zshrc`
verify `java -version`

## Step 2
Download Android Studio - https://developer.android.com/studio

Continue with  standard installation steps. It takes some time based on internet speed. Once installed Android SDK and configured Android Studio then we have to configure Emulator.

Open Android Studio >> More Action >> Android Device manager 

Configure Or add new device. Run A new Device 

This need to be append in `~.zshrc` code ~/.zshrc

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
reflects in system 
run   `source ~/.zshrc`


###  Steps 3
Install appium server `npm install -g appium`
Run appium server with `appium`

Run To view installed driver `appium driver list --installed`

Available appium drivers 
https://appium.io/docs/en/2.3/ecosystem/drivers/

`appium driver install uiautomator2` - for android 
`appium driver install xcuitest` - for iOS



### Troubleshooting 
npm install -g @appium/doctor

