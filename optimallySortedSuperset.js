const superset = "ab?g?z???b";
const subset = "abbc";

const numSubInSup = (superset, subset) => {
const sup = new Map();

let totalInSuperset = 0;
for (let i = 0; i < superset.length; i++) {
	totalInSuperset++;
	if (!sup.has(superset[i])) {
  	sup.set(superset[i], 1)
  } else {
  sup.set(superset[i], sup.get(superset[i]) + 1)
  }
}

let ans = 0;

let subI = 0
while (totalInSuperset > 0) {
totalInSuperset--;
	const currChar = subset[subI]
  if (!sup.has(currChar)) {
  	sup.set(currChar, 0)
  }
	const charsRemaining = sup.get(currChar);
  const qmRemaining = sup.get("?");
  if (charsRemaining <= 0 & qmRemaining <= 0) {
  	return ans;
  } else if (charsRemaining > 0) {
  	sup.set(currChar, charsRemaining - 1)
  } else {
  	sup.set("?", qmRemaining - 1)
  }
	
  if (subI < subset.length - 1) {
  	subI++
  } else {
  	ans++;
  	subI = 0;
  }
}

return ans;
}


console.log(numSubInSup(superset, subset));