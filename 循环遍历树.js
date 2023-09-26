let data = {
  a: 1,
  b: {
    c: 3,
  },
};
let root = {};
let tree = [
  {
    father: root,
    key: undefined,
    value: data,
  },
];
while (tree.length) {
    console.log(12);
  let ntree = tree.pop();
  let res = ntree.father;
  let key = ntree.key;
  let value = ntree.value;
  if (key !== undefined) {
    res = res[key] = {};
  }
  for (let i in value) {
    if (typeof value[i] === "object") {
        tree.push(
            {
                father: res,
                key: i,
                value: value[i]
            }
        )
    }else {
        res[i] = value[i];
    }
  }
}
console.log('root',root);
