describe('Board', function() {

    it('should create a squared size number of fields', function() {
        var div = document.createElement("div");

        Board({
            root: div,
            size: 70
        });

        expect($(div).children('.field').length).to.equal(4900);
    });
});
