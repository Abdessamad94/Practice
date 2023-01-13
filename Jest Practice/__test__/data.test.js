const alldata = require("../data");
test(" check the lenght of the data", () => {
    expect(alldata).toHaveLength(5);
});

test('chack if the data containe a number that we dont need (like 0 )', () => { 
    for (let index = 0; index < alldata.length; index++) {
        expect(alldata[index]).not.toBe(0)
        
    }
 })

console.log(alldata);
