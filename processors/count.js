const { Processor } = require('topological');

class CountProcessor extends Processor {
    start(callback) {
        this.bins = [];
        for(let idx=0; idx < 10; idx += 1) {
            this.bins[idx] = 0;
        }

        return callback();
    }

    process(message, callback) {
        let number = message.body;
        let bin = Math.floor(number / 10.0);

        this.bins[bin] += 1;
        this.output([{
            bins: this.bins
        }], callback);
    }
}

module.exports = CountProcessor;