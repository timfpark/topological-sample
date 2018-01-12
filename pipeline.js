const { Node, Topology } = require('topological');

const CountProcessor = require('./processors/count'),
      PrintProcessor = require('./processors/print'),
      RandomNumberConnection = require('./connections/randomNumbers'),
      DirectConnection = require('topological-direct');

let countProcessor = new CountProcessor({
    id: 'countProcessor'
});

let countToPrintConnection = new DirectConnection({
    id: 'countToPrintConnection'
});

let randomNumberConnection = new RandomNumberConnection({
    id: 'randomNumberConnection',
    config: {
        scaleFactor: 100
    }
});

let printProcessor = new PrintProcessor({
    id: 'printProcessor',
    config: {
        printInterval: 1000
    }
});

let topology = new Topology({
    id: 'topology',
    nodes: [
        new Node({
            id: 'count',
            inputs: [randomNumberConnection],
            processor: countProcessor,
            outputs: [countToPrintConnection]
        }),
        new Node({
            id: 'print',
            inputs: [countToPrintConnection],
            processor: printProcessor,
            outputs: []
        })
    ]
});

topology.start();