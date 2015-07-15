# proksy
simple reverse proxy


## notes

### build
use npm or gulp or both?

bin or .bin
for proxy start script with default config file de[endent on build settings

dist
where the app is compiled and than able to be shipped to server...

proksy is node module

modules
  proksy
    bin
      build script
      start script 

build script creates .bin directory in modules
.bin
  simlinks to 
    ../proksy/bin/proxy start script



start and build script could be the same with different params
however it better to split as the functionality is different


