# Descendant Counter for WorkFlowy
- Displays the total bullet count for the zoom level.
- Shows counts for the first level children below that. 
- Child bullet names are clickable links.
- To see your total bullet count, activate from the home page.

![descendantCounter](https://i.imgur.com/mtuSPJx.png)

## Installation: Drag this link to your bookmarks bar:
<a href="javascript:(function descendantCounter_1_4(){function formatName(item){const htmlEscText=str=&gt;str.replace(/&amp;/g,&quot;&amp;amp;&quot;).replace(/&gt;/g,&quot;&amp;gt;&quot;).replace(/&lt;/g,&quot;&amp;lt;&quot;).replace(/&quot;/g,&quot;&amp;quot;&quot;);const truncate=(str,max)=&gt;str.length&gt;max?`${str.substring(0,max-1)}…`:str;const truncated=htmlEscText(truncate(item.getNameInPlainText(),45));return item.isCompleted()?`&lt;s&gt;${truncated}&lt;/s&gt;`:truncated}const current=WF.currentItem();const children=current.getChildren();const pNum=current.getNumDescendants().toString();const counts=children.map(item=&gt;{const cNum=item.getNumDescendants().toString().padStart(pNum.length,&quot; &quot;);return`${cNum}\t&lt;a href=&quot;${item.getUrl()}&quot; onclick=&quot;WF.hideDialog();return true&quot;&gt;${formatName(item)}&lt;/a&gt;`});WF.showAlertDialog(`&lt;pre&gt;&lt;b&gt;${pNum}\t${formatName(current)}&lt;/b&gt;&lt;br&gt;${counts.join(&quot;&lt;br&gt;&quot;)}&lt;/pre&gt;`)})();">descendantCounter</a>

## Links:
- [Source code](https://github.com/rawbytz/descendant-counter/blob/master/descendantCounter.js)
- [rawbytz Blog](https://rawbytz.wordpress.com)