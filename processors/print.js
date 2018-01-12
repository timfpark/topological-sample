const { Processor } = require('topological');

class PrintProcessor extends Processor {
    start(callback) {
        this.totalCount = 0;

        this.config.printInterval = this.config.printInterval || 1000;

        return callback();
    }

    process(message, callback) {
        let bins = message.body.bins;
        this.totalCount += 1;

        if (this.totalCount % this.config.printInterval === 0) {
            console.log(`${new Date()} -----------> total: ${this.totalCount}`);

            for(let idx=0; idx < 10; idx += 1) {
                console.log(`${idx}: ${bins[idx]}`);
            }
        
            console.log(``);
        }

        return callback();
    }
}

module.exports = PrintProcessor;




