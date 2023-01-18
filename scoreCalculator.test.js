const scoreGame = require('./scoreCalculator');
describe('gameWinner',() => {
    describe('ScoreGame',() => {
        it('testCase1',() =>{
            const arr = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]
            const result = scoreGame(arr);
            expect(result).toEqual(90);
        });
        it('testCase2',() => {
            const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]
            const result = scoreGame(arr);
            expect(result).toEqual(90);
        });
        it('testCase3',() => {
            const arr = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            const result = scoreGame(arr);
            expect(result).toEqual(90);
        });
    });
    
});