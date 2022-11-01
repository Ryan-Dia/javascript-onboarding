function splitNameIntoTwoOrMoreLengths(name) {
  const arrayOfSplitNames = [];
  for (k = 2; k <= name.length; k++) {
    let splitName = name.split("").reduce((acc, _, i, arr) => {
      if (arr.slice(i, i + k).join("").length >= k) {
        acc.push(arr.slice(i, i + k).join(""));
      }
      return acc;
    }, []);
    arrayOfSplitNames.push(...splitName);
  }
  return arrayOfSplitNames;
}

function problem6(forms) {
  let answer = [];
  let emailOfPersonWithDuplicateName;
  forms.forEach(([email, name], _, arr) => {
    splitNameIntoTwoOrMoreLengths(name);
  });
  return;
}

module.exports = problem6;
