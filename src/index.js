module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];
    matrix.forEach((item, index) => {
        if ((index + 1) % 2 === 0) {
            item.reverse();
        }
    });

    const result = matrix.reduce((acc, item) => [...acc, ...item], []);
    return result;
};
