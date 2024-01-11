# cucumber-js-pet-store-tests
Use cucumber, plain javascript and axios to test petstore

![Feature Image](/images/feature_file.png)

# Pre-requisitions
1. Node Package Manager should be installed on your OS. Please find more detail here: https://www.npmjs.com/get-npm
2. Git project is downloaded
3. Open Command Line and run 'npm install or npm i'. (This step is required only first time when you've downloaded project)

# Recomended IDE
1. I would recommend to use Visual Code https://code.visualstudio.com/ with a plugin https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete

# Work with features
This test projects uses Cucumber library. It means all test scenarios are features with Given, When, Then steps. 
These feature files are binded to speicific step definitions 

![Repo Tree Image](/images/repo_tree.png)

## Features
Feature files placed under the 'features' folder. Inside of this folder you may find specific sections folders e.g. 'pet'. 
Just create a new file with '.feature' extension if you want to add a new feature.
Next, you should go inside of the file and describe Gherkin scenario. Please find an example in 'add_new_pet.feature' file

## Step Definitions
Step definitions are actual Gherkin steps implementation that binded to concreate Gherkin steps. 

![Step definitions Image](/images/step_definitions.png)


## Support
Support folder contains all common support implementation. As an example it contains hook.js file that run some logic before the tests

![Hooks Image](/images/hooks.png)

# Run features
Open command prompt and run any of these commands 

- "npx cucumber-js"
- "npm test"

