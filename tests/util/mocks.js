var sinon = require('sinon');

function createRequestMock() {

}

function createResponseMock() {
    return {
        _end: null,

        end: function(data) {
            this._end = data;
        }
    }
}

function createUserPersistenceMock(options) {
    return {
        loadUsers: sinon.spy(function(callback) {
            callback(options.loadUsers.error, options.loadUsers.result);
        })
    };
}

module.exports = {
    createRequestMock: createRequestMock,
    createResponseMock: createResponseMock,
    createUserPersistenceMock: createUserPersistenceMock
};