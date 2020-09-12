# Log Output

## Build Output

```npx react-native init my_cool_app --npm --template file:///<template_path>/RNCoreFoundation```

``` zsh
% npx react-native init my_cool_app --npm --template file:///<template_path>/RNCoreFoundation

               ######                ######
             ###     ####        ####     ###
            ##          ###    ###          ##
            ##             ####             ##
            ##             ####             ##
            ##           ##    ##           ##
            ##         ###      ###         ##
             ##  ########################  ##
          ######    ###            ###    ######
      ###     ##    ##              ##    ##     ###
   ###         ## ###      ####      ### ##         ###
  ##           ####      ########      ####           ##
 ##             ###     ##########     ###             ##
  ##           ####      ########      ####           ##
   ###         ## ###      ####      ### ##         ###
      ###     ##    ##              ##    ##     ###
          ######    ###            ###    ######
             ##  ########################  ##
            ##         ###      ###         ##
            ##           ##    ##           ##
            ##             ####             ##
            ##             ####             ##
            ##          ###    ###          ##
             ###     ####        ####     ###
               ######                ######


                  Welcome to React Native!
                 Learn once, write anywhere

✔ Downloading template
✔ Copying template
✔ Processing template
⠙ Executing post init script Thanks for using RNCoreFoundation! Be sure to star and contribute back!
✔ Executing post init script
✔ Installing CocoaPods dependencies (this may take a few minutes)

  Run instructions for iOS:
    • cd "<path>/my_cool_app" && npx react-native run-ios
    - or -
    • Open my_cool_app/ios/my_cool_app.xcodeproj in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "<path>/my_cool_app" && npx react-native run-android

  Run instructions for Windows and macOS:
    • See https://aka.ms/ReactNative for the latest up-to-date instructions.
```

## Metro Server

Launched Metro Server in a terminal.

``` zsh
% <path>/my_cool_app/node_modules/react-native/scripts/launchPackager.command ; exit;
% <path>/my_cool_app/node_modules/react-native/scripts/launchPackager.command ; exit;
                                                          
               ######                ######               
             ###     ####        ####     ###             
            ##          ###    ###          ##            
            ##             ####             ##            
            ##             ####             ##            
            ##           ##    ##           ##            
            ##         ###      ###         ##            
             ##  ########################  ##             
          ######    ###            ###    ######          
      ###     ##    ##              ##    ##     ###      
   ###         ## ###      ####      ### ##         ###   
  ##           ####      ########      ####           ##  
 ##             ###     ##########     ###             ## 
  ##           ####      ########      ####           ##  
   ###         ## ###      ####      ### ##         ###   
      ###     ##    ##              ##    ##     ###      
          ######    ###            ###    ######          
             ##  ########################  ##             
            ##         ###      ###         ##            
            ##           ##    ##           ##            
            ##             ####             ##            
            ##             ####             ##            
            ##          ###    ###          ##            
             ###     ####        ####     ###             
               ######                ######               
                                                          
                 Welcome to React Native!
                Learn once, write anywhere



To reload the app press "r"
To open developer menu press "d"

```

## Running App in iOS Simulator

```npx react-native run-ios --simulator="iPhone 11 Pro Max"```

``` zsh
my_cool_app % npx react-native run-ios --simulator="iPhone 11 Pro Max"
info Found Xcode workspace "RNCoreFoundation.xcworkspace"
info Building (using "xcodebuild -workspace RNCoreFoundation.xcworkspace -configuration Debug -scheme RNCoreFoundation -destination id=<id>")
....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
info Installing "<path>/Build/Products/Debug-iphonesimulator/RNCoreFoundation.app"
info Launching "RNCoreFoundation"
success Successfully launched the app on the simulator
```
