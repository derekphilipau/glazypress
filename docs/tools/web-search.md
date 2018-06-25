# Ceramics Web Search
This Google search finds results in the following websites:
<a href="http://community.ceramicartsdaily.org">Ceramic Arts Daily Forums</a>,
<a href="http://archives.clayartarchives.com/">Clayart Archives (1996-2008)</a>, 
<a href="http://potters.org">Clayart Archives (?-2012)</a>, 
<a href="https://lists.clayartworld.com/pipermail/clayart/">Clayart Archives (2014-Present)</a>, 
<a href="http://digitalfire.com">Digitalfire</a>,
<a href="http://cone6pots.ning.com/">Electric Cone 6 & Other Ways w/ Clay</a>


<table>
    <thead>
    <tr>
        <th>Search term</th>
        <th>Result</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><em>Reduction firing</em></td>
        <td>Regular search sorted by relevance</td>
    </tr>
    <tr>
        <td><em>"Reduction firing schedule"</em></td>
        <td>Search for the <em>exact phrase</em> in quotes</td>
    </tr>
    <tr>
        <td><em>Reduction cone OR temperature</em></td>
        <td>Search for <em>"reduction"</em> and either the words <em>"cone"</em> or <em>"temperature"</em></td>
    </tr>
    <tr>
        <td><em>Reduction -oxidation</em></td>
        <td>Search for <em>"reduction"</em> but NOT <em>"oxidation"</em></td>
    </tr>
    <tr>
        <td><em></em></td>
        <td></td>
    </tr>
    </tbody>
</table>

<div>
<gcse:searchbox></gcse:searchbox>
</div>
<div>
<gcse:searchresults></gcse:searchresults>
</div>


<script>
export default {
    mounted () {
        (function() {
            var cx = '005240168016196418376:0gvgha8oprm';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
        })();
    }
}
</script>