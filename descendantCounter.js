(function descendantCounter_1_2() {
  const current = WF.currentItem();
  const children = current.getChildren();
  const pName = current.getNameInPlainText();
  const pNum = current.getNumDescendants().toString();
  const padMax = pNum.length;
  const counts = children.map(item => {
    let name = item.getNameInPlainText();
    if (name.length > 45) name = name.substr(0, 42) + "...";
    if (item.isCompleted()) name = name.strike();
    let cNum = item.getNumDescendants().toString();
    cNum = cNum.padStart(padMax, " ");
    return `${cNum}\t${name}`
  });
  WF.showAlertDialog(`<pre><b>${pNum}\t${pName}</b><br>${counts.join("<br>")}</pre>`);
})(); 