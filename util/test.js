module.exports = (func, target, ...input) => {
    const ret = func(...input);
    console.log(`Check ${ret} === ${target}, passed: ${ret === target}`);
};
