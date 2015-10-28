'use strict';

function getDependencies(tree) {
    // SOLUTION GOES HERE
    // Note: Feel free to add additional arguments
    // to this function for use with recursive calls.
    // Or not! There are many ways to recurse.
    var result = [];

    function collectDependencies(tree) {
        if (tree.dependencies) {
            Object.keys(tree.dependencies).forEach(function(sName, i) {
                result.push(sName + '@' + tree.dependencies[sName].version);
                collectDependencies(tree.dependencies[sName]);
            });
        }
    }
    collectDependencies(tree);
    return result.sort();
}

module.exports = getDependencies
