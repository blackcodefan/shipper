export const makeSets = (lists) => {
  let childLists = [];
  let FinalLists = [];
  for (let i = 0; i < lists.length; i++) {
    if (i % 2 === 1) {
      childLists.push(lists[i]);
      FinalLists.push(childLists);
      childLists = [];
    } else {
      childLists.push(lists[i]);
      if (i + 1 === lists.length) {
        FinalLists.push(childLists);
      }
    }
  }
  return FinalLists;
};
