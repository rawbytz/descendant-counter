# Descendant Counter for WorkFlowy
- Displays the total bullet count for the zoom level.
- Shows counts for the first level children below that. 
- To see your total bullet count, activate from the home page.

![descendantCounter](https://i.imgur.com/mtuSPJx.png)

## Installation: Drag this link to your bookmarks bar:

<a href="javascript:(function descendantCounter_1_3(){function formatName(item){const truncate=(str,max)=&gt;str.length&gt;max?`${str.substring(0,max-1)}…`:str;const truncated=truncate(item.getNameInPlainText(),45);return item.isCompleted()?`&lt;s&gt;${truncated}&lt;/s&gt;`:truncated}const current=WF.currentItem();const children=current.getChildren();const pNum=current.getNumDescendants().toString();const counts=children.map(item=&gt;{const cNum=item.getNumDescendants().toString().padStart(pNum.length,&quot; &quot;);return`${cNum}\t${formatName(item)}`});WF.showAlertDialog(`&lt;pre&gt;&lt;b&gt;${pNum}\t${formatName(current)}&lt;/b&gt;&lt;br&gt;${counts.join(&quot;&lt;br&gt;&quot;)}&lt;/pre&gt;`)})();">descendantCounter</a>

## Links:
- [Source code](https://github.com/rawbytz/descendant-counter/blob/master/descendantCounter.js)
- [rawbytz Blog](https://rawbytz.wordpress.com)