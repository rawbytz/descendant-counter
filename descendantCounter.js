(function descendantCounter_1_3() {
  function formatName(item) {
    const truncate = (str, max) => str.length > max ? `${str.substring(0, max - 1)}…` : str;
    const truncated = truncate(item.getNameInPlainText(), 45);
    return item.isCompleted() ? `<s>${truncated}</s>` : truncated;
  }
  const current = WF.currentItem();
  const children = current.getChildren();
  const pNum = current.getNumDescendants().toString();
  const counts = children.map(item => {
    const cNum = item.getNumDescendants().toString().padStart(pNum.length, " ");
    return `${cNum}\t${formatName(item)}`
  });
  WF.showAlertDialog(`<pre><b>${pNum}\t${formatName(current)}</b><br>${counts.join("<br>")}</pre>`);
})(); 