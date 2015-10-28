'use strict';

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {

        // Check if we have methods
        // Otherwise we could use Polyfills
        if(Array.prototype.every && Array.prototype.some) {
            return goodUsers.every(function(elemO, i) {
                return submittedUsers.some(function(elemT, i) {
                    return (elemO.id == elemT.id);
                })
            });
        }
    };
}

module.exports = checkUsersValid
