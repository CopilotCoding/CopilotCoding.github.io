﻿NDSummary.OnToolTipsLoaded("CSharpClass:DeleteConnectionStrategy",{1373:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1373\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">DeleteConnectionStrategy&#8203;<span class=\"TemplateSignature\">&lt;T&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div></div><div class=\"TTSummary\">A NEAT genome asexual reproduction strategy based on deletion of a single connection.</div></div>",1375:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1375\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> INeatGenomeBuilder&lt;T&gt; _genomeBuilder</div></div></div>",1376:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1376\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Int32Sequence _genomeIdSeq</div></div></div>",1377:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1377\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Int32Sequence _generationSeq</div></div></div>",1379:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1379\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DeleteConnectionStrategy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">INeatGenomeBuilder&lt;T&gt;&nbsp;</td><td class=\"PName last\">genomeBuilder,</td></tr><tr><td class=\"PType first\">Int32Sequence&nbsp;</td><td class=\"PName last\">genomeIdSeq,</td></tr><tr><td class=\"PType first\">Int32Sequence&nbsp;</td><td class=\"PName last\">generationSeq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Construct a new instance.</div></div>",1380:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1380\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static int</span>[] GetHiddenNodeIdArray(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NeatGenome&lt;T&gt;&nbsp;</td><td class=\"PName last\">parent,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">deleteIdx,</td></tr><tr><td class=\"PType first\">DirectedConnection[]&nbsp;</td><td class=\"PName last\">childConnArr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get an array of hidden node IDs in the child genome.</div></div>",1381:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1381\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> (<span class=\"SHKeyword\">int</span>? nodeId1, <span class=\"SHKeyword\">int</span>? nodeId2) GetDeletedNodeIds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NeatGenome&lt;T&gt;&nbsp;</td><td class=\"PName last\">parent,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">deleteIdx,</td></tr><tr><td class=\"PType first\">DirectedConnection[]&nbsp;</td><td class=\"PName last\">childConnArr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determine the set of hidden node IDs that have been deleted as a result of a connection deletion.&nbsp; I.e. a node only exists if a connection connects to it, therefore if there are no other connections referring to a node then it has been deleted, with the exception of input and output nodes that always exist.</div></div>",1382:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1382\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static bool</span> IsNodeConnectedTo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DirectedConnection[]&nbsp;</td><td class=\"PName last\">connArr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">nodeId</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Is nodeId referred to by any of the connections in connArr.</div></div>",1383:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1383\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> (<span class=\"SHKeyword\">bool</span> isNode1Connected, <span class=\"SHKeyword\">bool</span> isNode2Connected) AreNodesConnectedTo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DirectedConnection[]&nbsp;</td><td class=\"PName last\">connArr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">nodeId1,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">nodeId2</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Are nodeId1 and nodeId2 connected to by any of the connections in connArr.</div></div>"});