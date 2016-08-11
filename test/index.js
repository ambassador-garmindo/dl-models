var test = function (name, path) {
    describe(name, function () {
        require(path);
    })
}

test('@accessories', './accessories');
test('@fabric', './fabric');
test('@textile', './textile');
test('@uom', './UoM');
test('@sparepart', './sparepart');
test('@uom', './UoM-docs');
test('@buyers', './buyers');
test('@suppliers', './suppliers');
