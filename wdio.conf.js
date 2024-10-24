const allure = require('allure-commandline')

exports.config = {
    
  
    specs: [
        './test/features/**/*.feature'
    ],

    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://saucelabs.com/platform/platform-configurator

    // hostname: Host.hostname,
    // port:4445,
    // path:'/wd/hub',
    // protocol:'http',
    // browserTimeout: 40000,

    // services: [
    //     ['selenium-standalone'
    //     // , {
    //     //     // logPath: './temp',
    //     //     seleniumArgs: {
    //     //         // version: "3.141.59",
    //     //         seleniumArgs: ['-host', '192.168.1.155','-port', '4444']
    //     //     },
    //     // }
    // ]
    // ],
    capabilities: [
    {
        browserName: 'chrome',
        // port: 5555
    }
    // ,    
    // {
    //     browserName: 'firefox',
    //     acceptInsecureCerts: true,
    //     // port: 5555
    // }
    // , {
    //     browserName: 'MicrosoftEdge',
    //     // port: 5555
    // }
],

    
    services: [
        // 'chromedriver',
    'selenium-standalone'
    ],
    port: 7777,
    seleniumArgs: {
     seleniumArgs: [
         "-host", "127.0.0.1",
         "-port", "7777"
        ],
    },
    
//     capabilities: [
//         {
    
//         // maxInstances can get overwritten per capability. So if you have an in-house Selenium
//         // grid with only 5 firefox instances available you can make sure that not more than
//         // 5 instances get started at a time.
//         maxInstances: 1,
//         //
//         browserName: 'chrome',
//         // hostname: '127.0.0.1',
//         // port: 8080,
//         'goog:chromeOptions': {
//             args:['--disable-gpu',
//             //    'incognito',
//             //  '--disable-dev-shm-usage',
//             //  '--disable-extensions',
//             //  '--disable-infobars',
//              '--no-sandbox']
//         },
//         acceptInsecureCerts: true
//         // If outputDir is provided WebdriverIO can capture driver session logs
//         // it is possible to configure which logTypes to include/exclude.
//         // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
//         // excludeDriverLogs: ['bugreport', 'server'],
//     }
//     // ,

//     // {  
//     //     maxInstances: 1,  
//     //     browserName: 'MicrosoftEdge',        
//     //     acceptInsecureCerts: true 
//     // }
//     // ,
//     // {  
//     //     maxInstances: 1,  
//     //     browserName: 'firefox',        
//     //     acceptInsecureCerts: true 
//     // }

// ],

   
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
  
    baseUrl: 'http://www.automationpractice.pl/index.php',
    // Language: 'English',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 12000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 12000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
  
    // services: ['chromedriver'],

    // services: ['selenium-standalone'],

    // services: [
    //     ['selenium-standalone', {
    //         // logPath: './temp',
            // seleniumArgs: {
            //     // version: "3.141.59",
            //     seleniumArgs: [
            //     // '-hostname', '127.0.0.1',
            //     "-port", "4441"]
            // },
    //     }]
    // ],

    // port: 5555,
//     services: [['selenium-standalone',
//     {
//      logPath:'logs',
//      args: {
//                     version: "7.16.13",
//                     seleniumArgs: [
//                     '-host', '127.0.0.1',
//                     '-port', '5555']
//         },
//     },
// ],],

    
    // Saves a screenshot to a given path if a command fails.
	screenshotPath: './Screenshot/',

    // Plugins:{'wdio-screenshot':{}},
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    // framework: 'mocha',
    framework: 'cucumber',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: ['spec',['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        // disableWebdriverScreenshotsReporting: false,
		useCucumberStepReporter:true,
        addConsolrLogs:true
    }]],


    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    // =================================================================================================================================== 
   
    // mochaOpts: {
    //     ui: 'bdd',
    //     timeout: 60000
    // },

    // ===================================================================================================================================

    //
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: ['./test/Stepdef/*.js'],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ['pretty'],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: '@smoke22',
    // <number> timeout for step definitions
    timeout: 600000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },


   // ===================================================================================================================================

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {String} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function () {
    // // const chai= require('chai')
    // // const chaiWebdriver = require('chai-webdriverio').default
    // // chai.use(chaiWebdriver(browser))

    // // global.assert=chai.assert
    // // global.should=chai.should
    // // global.expect=chai.expect
    // global.Langcode='English'
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine only)
     * @param {Object}  test             test object
     * @param {Object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {Any}     result.result    return object of test function
     * @param {Number}  result.duration  duration of test
     * @param {Boolean} result.passed    true if test has passed, otherwise false
     * @param {Object}  result.retries   informations to spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */
    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    //     // if(passed){
    //     //     browser.saveScreenshot('Screenshot/Fail_'+moment().format('DD-MMM-YYYY-HH-MM-SS') + '.png')
    //     // }
    //     if(test.passed!==undefined){
    //         browser.saveScreenshot('Screenshot/Fail_'+moment().format('DD-MMM-YYYY-HH-MM-SS') + '.png')
    //     }
    // },

    beforeScenario: function(scenario) {
        console.log('before scenario : ',scenario.name);
        
        // browser.deletecookies();
        browser.maximizeWindow();
    },    

    // afterStep: async function (stepResult) {
    //     if (stepResult.status === 'passed') {
    //    await browser.screenshot();
    //     console.log("Step status: "+ stepResult.status);
    //   }
    // },
	
	afterStep: async function (step, context, { error, result, duration, passed, retries }) {
	
	await browser.takeScreenshot();
	
	},
    
    afterScenario: async function(scenario) {
        // console.log('after scenario : ',scenario.name);
        await browser.closeWindow();
        await browser.reloadSession();
    },
    

    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
