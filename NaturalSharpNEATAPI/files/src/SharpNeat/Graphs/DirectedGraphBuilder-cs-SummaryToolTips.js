﻿NDSummary.OnToolTipsLoaded("File:src/SharpNeat/Graphs/DirectedGraphBuilder.cs",{788:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype788\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> SharpNeat.Graphs</div></div></div>",789:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype789\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public static</span></div><div class=\"CPName\">DirectedGraphBuilder</div></div></div><div class=\"TTSummary\">Static class for building instances of DirectedGraph.</div></div>",791:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype791\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DirectedGraph Create(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Span&lt;DirectedConnection&gt;&nbsp;</td><td class=\"PName last\">connections,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">inputCount,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">outputCount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Create a directed graph based on the provided connections (between node IDs) and a predefined set of input/output node IDs defined as being in a contiguous sequence starting at ID zero.</div></div>",792:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype792\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static int</span>[] GetHiddenNodeIdArray(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Span&lt;DirectedConnection&gt;&nbsp;</td><td class=\"PName last\">connSpan,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">inputOutputCount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",793:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype793\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> ConnectionIds CopyAndMapIds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Span&lt;DirectedConnection&gt;&nbsp;</td><td class=\"PName last\">connSpan,</td></tr><tr><td class=\"PType first\">INodeIdMap&nbsp;</td><td class=\"PName last\">nodeIdMap</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});