import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:
  {
    charts: true,
    reportPageTitle: 'SauceDeomReport',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },
  e2e: 
  {
    setupNodeEvents(on, config) 
    {
       require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here

      const environmentName = config.env.environmentName || 'qa'
      const filenameForTargetEnv = `./${environmentName}.settings.json`

      const settings = require(filenameForTargetEnv)

      if(settings.env.baseUrl)
      {
        config.baseUrl = settings.env.baseUrl
      }

      if(settings.env)
      {
        config.env = {...config.env, ...settings.env,}
      }

      if(!config.env.dataSet)
      {
          console.log('no dataSet specified, guessing "%s" since that matches environmentName setting.', environmentName)
          config.env.dataSet = environmentName
      }

      console.log('========================================================');
      console.log('Loaded settings for environment %s', environmentName);
      console.log('Using dataSet %s',config.env.dataSet);
      console.log('========================================================');

      return config
    },

    experimentalMemoryManagement: true,
    experimentalOriginDependencies: true,
    experimentalRunAllSpecs: true,
    pageLoadTimeout:120000
  },
});
