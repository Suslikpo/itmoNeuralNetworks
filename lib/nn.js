var brain = require('brain.js'),
    net = new brain.NeuralNetwork(),
    softmax = require('./softmax'),
    json = require('json-loader!../data/mnistTrain.json');

net.fromJSON(json);

module.exports = function (input) {
    var output = net.run(input);

    return softmax(output);
}