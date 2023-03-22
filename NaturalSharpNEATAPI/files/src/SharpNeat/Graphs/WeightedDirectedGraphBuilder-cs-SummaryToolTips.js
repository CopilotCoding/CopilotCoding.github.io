﻿NDSummary.OnToolTipsLoaded("File:src/SharpNeat/Graphs/WeightedDirectedGraphBuilder.cs",{767:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype767\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> SharpNeat.Graphs</div></div></div>",768:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype768\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public static</span></div><div class=\"CPName\">WeightedDirectedGraphBuilder&#8203;<span class=\"TemplateSignature\">&lt;T&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div></div><div class=\"TTSummary\">For building instances of WeightedDirectedGraph{T}.</div></div>",770:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype770\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> WeightedDirectedGraph&lt;T&gt; Create(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Span&lt;WeightedDirectedConnection&lt;T&gt;&gt;&nbsp;</td><td class=\"PName last\">connections,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">inputCount,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">outputCount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Create a directed graph based on the provided connections (between node IDs) and a predefined set of node IDs.&nbsp; Clearly the set of nodeIDs could be discovered by iterating over the connections. This overload exists to allow for additional fixed node IDs to be allocated regardless of whether they are connected to or not, this is primarily to allow for the allocation of NeatGenome input and output nodes, which are defined with fixed IDs but aren\'t necessarily connected to.</div></div>",771:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype771\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static int</span>[] GetHiddenNodeIdArray(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Span&lt;WeightedDirectedConnection&lt;T&gt;&gt;&nbsp;</td><td class=\"PName last\">connSpan,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">inputOutputCount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",772:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype772\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static void</span> CopyAndMapIds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Span&lt;WeightedDirectedConnection&lt;T&gt;&gt;&nbsp;</td><td class=\"PName last\">connSpan,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">INodeIdMap&nbsp;</td><td class=\"PName last\">nodeIdMap,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">ConnectionIds&nbsp;</td><td class=\"PName last\">connIds,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">T[]&nbsp;</td><td class=\"PName last\">weightArr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Split each IWeightedDirectedConnection in a list into an array of DirectedConnections(s), and an array of weights.&nbsp; Map the node IDs to indexes as we go.</div></div>"});