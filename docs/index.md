# Descendant Counter for WorkFlowy
- Displays the total bullet count for the zoom level.
- Shows counts for the first level children below that. 
- To see your total bullet count, activate from the home page.

![descendantCounter](https://i.imgur.com/mtuSPJx.png)

## Installation: Drag this link to your bookmarks bar:

<a href="javascript:(function descendantCounter_1_2(){const current=WF.currentItem();const children=current.getChildren();const pName=current.getNameInPlainText();const pNum=current.getNumDescendants().toString();const padMax=pNum.length;const counts=children.map(item=&gt;{let name=item.getNameInPlainText();if(name.length&gt;45)name=name.substr(0,42)+&quot;...&quot;;if(item.isCompleted())name=name.strike();let cNum=item.getNumDescendants().toString();cNum=cNum.padStart(padMax,&quot; &quot;);return`${cNum}\t${name}`});WF.showAlertDialog(`&lt;pre&gt;&lt;b&gt;${pNum}\t${pName}&lt;/b&gt;&lt;br&gt;${counts.join(&quot;&lt;br&gt;&quot;)}&lt;/pre&gt;`)})();">descendantCounter</a>

## Links:
- [Source code](https://github.com/rawbytz/descendant-counter/blob/master/descendantCounter.js)
- [rawbytz Blog](https://rawbytz.wordpress.com)