
document.write('<table class="footer" border="0">')

document.write('<tr>')

document.write('<td valign="top">Copyright &copy; 2013  <a href="http://www.qos.ch/">QOS.ch</a></td>')

document.write('<td valign="top">[翻訳著者] Copyright &copy; 2014  <a href="https://github.com/Logback-JP-Group/Logback-Manuals-JP">Logback-JP-Group</a>, <a href="http://ksyany.blog32.fc2.com/">syany</a></td>')

document.write('  <td rowspan="2">');
document.write('    <a href="http://twitter.com/qos_ch">');
document.write('      <img alt="Follow @qos_ch" src="http://www.slf4j.org/images/follow_us.png" />');
document.write('    </a>');
document.write('  </td>');


document.write('</tr>')

AAT = '@'
DOOTT = '.'
document.write('<tr>') 

document.write('<td align="left" colspan="2">') 
document.write('We are actively looking for volunteers to proofread the documentation. Please send your corrections or suggestions for improvement to "corrections' + AAT +'qos'+DOOTT+'ch". See also the <a href="http://articles.qos.ch/contributing.html">instructions for contributors</a>.' +
               '<br>本文章は、<code>Logback-JP-Group</code>が勝手に翻訳したものであり、原文内容との不整合などの責任は負いかねます。');
document.write('</td>') 
document.write('  <td>&nbsp;</td>')
document.write('  <td>&nbsp;</td>')
document.write('  <td>&nbsp;</td>')
document.write('</tr>') 

document.write('</table>')
