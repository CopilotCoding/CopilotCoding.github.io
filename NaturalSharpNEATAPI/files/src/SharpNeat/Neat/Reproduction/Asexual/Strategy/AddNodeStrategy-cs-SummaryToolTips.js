﻿NDSummary.OnToolTipsLoaded("File:src/SharpNeat/Neat/Reproduction/Asexual/Strategy/AddNodeStrategy.cs",{1458:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1458\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> SharpNeat.Neat.Reproduction.Asexual.Strategy</div></div></div>",1459:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1459\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">AddNodeStrategy&#8203;<span class=\"TemplateSignature\">&lt;T&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div></div><div class=\"TTSummary\">A NEAT genome asexual reproduction strategy based on adding a single node.</div></div>",1461:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1461\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> MetaNeatGenome&lt;T&gt; _metaNeatGenome</div></div></div>",1462:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1462\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> INeatGenomeBuilder&lt;T&gt; _genomeBuilder</div></div></div>",1463:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1463\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Int32Sequence _genomeIdSeq</div></div></div>",1464:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1464\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Int32Sequence _innovationIdSeq</div></div></div>",1465:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1465\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Int32Sequence _generationSeq</div></div></div>",1466:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1466\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> AddedNodeBuffer _addedNodeBuffer</div></div></div>",1468:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1468\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> AddNodeStrategy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MetaNeatGenome&lt;T&gt;&nbsp;</td><td class=\"PName last\">metaNeatGenome,</td></tr><tr><td class=\"PType first\">INeatGenomeBuilder&lt;T&gt;&nbsp;</td><td class=\"PName last\">genomeBuilder,</td></tr><tr><td class=\"PType first\">Int32Sequence&nbsp;</td><td class=\"PName last\">genomeIdSeq,</td></tr><tr><td class=\"PType first\">Int32Sequence&nbsp;</td><td class=\"PName last\">innovationIdSeq,</td></tr><tr><td class=\"PType first\">Int32Sequence&nbsp;</td><td class=\"PName last\">generationSeq,</td></tr><tr><td class=\"PType first\">AddedNodeBuffer&nbsp;</td><td class=\"PName last\">addedNodeBuffer</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Construct a new instance.</div></div>",1469:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1469\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private int</span> GetInnovationID(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PType\">DirectedConnection&nbsp;</td><td class=\"PName last\">splitConn,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NeatGenome&lt;T&gt;&nbsp;</td><td class=\"PName last\">parent,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">newInnovationIdFlag</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Create a new child genome from a given parent genome.</div></div>",1470:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1470\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static int</span>[] GetHiddenNodeIdArray(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NeatGenome&lt;T&gt;&nbsp;</td><td class=\"PName last\">parent,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">addedNodeId,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">newInnovationIdsFlag</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get an array of hidden node IDs in the child genome.</div></div>"});