const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber')

BeforeAll(async function () {
  // Code that runs once before all scenarios
})

Before(async function () {
  // Code that runs before each scenario
})

After(async function () {
  // Code that runs after each scenario
})

AfterAll(async function () {
  // Code that runs once after all scenarios are complete
})
