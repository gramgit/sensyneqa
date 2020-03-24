# sensynehealth


## Introduction

This solution uses *webdriverio* as its core technology.  Webdriverio uses the webdriver protocol so is compatible with selenium webdriver.  As standard it also enforces JavaScript to run in sync mode negating the need to handle promises.
My solution makes use of *mocha* as it's Test framework ( BDD style ) the *chai* library for it's assertion library and chai-http in preference for the API Testing.

Webdriverio uses a config file called `wdio.conf.js`.  This sets up the Tests specs that are to be run.   I make use of the before hook to load in customised commands these are in the utilities folder and is needed to handle the chai-http library needing to be run in async mode. 

## Installation

### Prerequisites

 - Node 12.16.0
 - npm 6.13.7
 - chrome 80.0.3987.100

On mac using `brew` install using:

`brew install node`
`brew install npm`
`brew cask install google-chrome`

On Ubuntu:

`sudo apt-get install nodejs`
`sudo apt-get install npm`
`wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb`
`sudo apt install ./google-chrome-stable_current_amd64.deb`
(Framework was created on a Mac)

### Installation & Run

Navigate to the base directory and run the following command to prep all dependencies

  `npm install`
 
Once this has completed you run the Tests by executing

  `npm test`

## Test Results sepearate from the API Tests

The API Tests uses a spec reporter to show what elements have succeeded and which have failed.  In addition to that the swagger definition of the element of the API is incorrect stating:
  -  stating an element is `product_code` where infact it is `id`
  -  stating an element is `product_price` where ifact it is `price`
