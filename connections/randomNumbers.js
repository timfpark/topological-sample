const { Connection } = require("topological");

class RandomNumberConnection extends Connection {
    stream(callback) {
        setInterval(() => {
            return callback(null, {
                body: Math.random() * this.config.scaleFactor
            });
        }, 1);
    }
}

module.exports = RandomNumberConnection;