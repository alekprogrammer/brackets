module.exports = function check(str, bracketsConfig) {
    let deep = {};
    let sum = 0;
    for (let j = 0; j < bracketsConfig.length; j++) {
        deep[j] = 0;
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str.indexOf(bracketsConfig[j][0], i - 1) == i - 1 && str.indexOf(bracketsConfig[j][1], i + 1) == i + 1 &&
                str[i] != bracketsConfig[j][1] && str[i] != bracketsConfig[j][0] &&
                bracketsConfig[j][1] != bracketsConfig[j][0]) {
                return false;
            }
        }

        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j][0] == str[i] && bracketsConfig[j][1] == str[i]) {
                if (deep[j] == 0) {
                    deep[j]++;
                } else {
                    deep[j]--;
                }
            } else {
                if (bracketsConfig[j][0] == str[i]) {
                    deep[j]++;
                } else if (bracketsConfig[j][1] == str[i]) {
                    deep[j]--;
                }
                if (deep[j] < 0) {
                    return false;
                }
            }
        }
    }
    for (var elem in deep) {
        sum += deep[elem];
    }
    return sum == 0;
}