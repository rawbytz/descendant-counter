(function descendantCounter_1_4() {
  function formatName(item) {
    const htmlEscText = str => str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    const truncate = (str, max) => str.length > max ? `${str.substring(0, max - 1)}…` : str;
    const truncated = htmlEscText(truncate(item.getNameInPlainText(), 45));
    return item.isCompleted() ? `<s>${truncated}</s>` : truncated;
  }
  const current = WF.currentItem();
  const children = current.getChildren();
  const pNum = current.getNumDescendants().toString();
  const counts = children.map(item => {
    const cNum = item.getNumDescendants().toString().padStart(pNum.length, " ");
    // return `${cNum}\t${formatName(item)}`
    return `${cNum}\t<a href="${item.getUrl()}" onclick="WF.hideDialog();return true">${formatName(item)}</a>`
  });
  WF.showAlertDialog(`<pre><b>${pNum}\t${formatName(current)}</b><br>${counts.join("<br>")}</pre>`);
})();