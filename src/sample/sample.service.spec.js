(function () {
    'use strict';

    describe('sampleService', function () {

        var sampleService;

        beforeEach(module('itemSetApp'));
        beforeEach(inject(function (_sampleService_) {
            sampleService = _sampleService_;
        }));

        describe('someFunction', function () {

            it('will return true', function () {
                expect(sampleService.someFunction()).toBe(true);
            });
        });
    });
}());
