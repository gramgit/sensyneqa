# sensynehealth


## Introduction

This solution uses *webdriverio* its core technology.  Webdriverio uses the webdriver protocol so is compatible with selenium webdriver.  As standard it also enforces JavaScript to run in synch mode negating the need to handle promises.
My solution makes use of *mocha* as it's Test framework ( BDD style ) the *chai* library for it's assertion library and chai-http in preference to request for the API Testing.

Webdriverio uses a config file called `wdio.conf.js`.  This sets up the Tests specs that are to be run,   I make use of the before hook to load in customised commands these are in the utilities folder and is needed to handle the chai-http library needing to be ran in async mode. 

## Installation

### Prerequisites

 - Node 12.16.0
 - npm 6.13.7
 - chrome 80.0.3987.100

(Framework was created on a Mac)

### Installation & Run

Navigate to the base directory and run the following command to prep all dependencies

  `npm install`
 
Once this has completed you run the Tests by executing

  `npm test`

