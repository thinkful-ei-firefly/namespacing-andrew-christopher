'use strict';

const item = (function() {
    return {
        validateName,
        create
    };
}());

function validateName(name){
    if (!name) {
        throw new Error ('This name does not exist');
    }

}
function create(name) {
        return {
            id: cuid(),
            name,
            checked: false
        };
}