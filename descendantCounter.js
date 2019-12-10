(function descendantCounter_1_1() {
  const current = WF.currentItem(),
    children = current.getChildren(),
    pName = current.getNameInPlainText(),
    pNum = current.getNumDescendants().toString(),
    padMax = pNum.length;
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