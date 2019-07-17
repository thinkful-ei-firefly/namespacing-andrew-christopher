'use strict';

const Item = (function() {
    
function validateName(name){
    if (!name) {
        throw new TypeError ('This name does not exist');
    }

}
function create(name) {
        return {
            id: cuid(),
            name,
            checked: false
        };
}

return {
    validateName,
    create
};
}());