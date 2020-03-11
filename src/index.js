
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return matrix && matrix.length ? matrix.map((x, index) => index % 2 === 0 ? x : x.reverse()).flat() : [];
};
