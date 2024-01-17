// Where the other functions will be called
// For initializing the project/application

const CLI = require('./lib/cli.js');
const cli = new CLI();

// Run our interface for the user
    cli.run();