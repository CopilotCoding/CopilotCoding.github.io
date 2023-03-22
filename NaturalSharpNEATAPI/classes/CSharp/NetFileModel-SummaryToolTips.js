﻿NDSummary.OnToolTipsLoaded("CSharpClass:NetFileModel",{934:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype934\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\">NetFileModel</div></div></div><div class=\"TTSummary\">An object model that represents instances of the \'net\' file format.</div></div>",936:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype936\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> InputCount { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Input node count.</div></div>",937:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype937\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> OutputCount { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Output node count.</div></div>",938:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype938\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsAcyclic { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Indicates of the graph/network is acyclic.</div></div>",939:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype939\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> CyclesPerActivation { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">For cyclic networks, this specifies the number of timesteps are run per activation of the network. Not used when IsAcyclic is true.</div></div>",940:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype940\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> List&lt;ConnectionLine&gt; Connections { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">A list of sourceId-targetId-weight tuples, that together describe the graph/network.</div></div>",941:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype941\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> List&lt;ActivationFnLine&gt; ActivationFns { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">A list of activations functions.</div></div>",943:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype943\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal</span> NetFileModel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">inputCount,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">outputCount,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isAcyclic,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">cyclesPerActivation,</td></tr><tr><td class=\"PType first\">List&lt;ConnectionLine&gt;&nbsp;</td><td class=\"PName last\">connList,</td></tr><tr><td class=\"PType first\">List&lt;ActivationFnLine&gt;&nbsp;</td><td class=\"PName last\">activationFns</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initialises a new instance of NetFileModel.</div></div>",944:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype944\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> NetFileModel CreateAcyclic(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">inputCount,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">outputCount,</td></tr><tr><td class=\"PType first\">List&lt;ConnectionLine&gt;&nbsp;</td><td class=\"PName last\">connList,</td></tr><tr><td class=\"PType first\">List&lt;ActivationFnLine&gt;&nbsp;</td><td class=\"PName last\">activationFns</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Create a new instance of NetFileModel, representing an acyclic network.</div></div>",945:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype945\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> NetFileModel CreateCyclic(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">inputCount,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">outputCount,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">cyclesPerActivation,</td></tr><tr><td class=\"PType first\">List&lt;ConnectionLine&gt;&nbsp;</td><td class=\"PName last\">connList,</td></tr><tr><td class=\"PType first\">List&lt;ActivationFnLine&gt;&nbsp;</td><td class=\"PName last\">activationFns</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Create a new instance of NetFileModel, representing an cyclic network.</div></div>"});