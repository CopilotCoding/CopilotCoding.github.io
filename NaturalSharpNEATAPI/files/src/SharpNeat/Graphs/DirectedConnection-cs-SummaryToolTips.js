﻿NDSummary.OnToolTipsLoaded("File:src/SharpNeat/Graphs/DirectedConnection.cs",{827:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype827\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> SharpNeat.Graphs</div></div></div>",828:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype828\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public readonly</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\">DirectedConnection</div></div></div><div class=\"TTSummary\">Represents a connection between two nodes. Used primarily as a key into a Dictionary that uniquely identifies connections by their end points.</div></div>",830:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype830\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> SourceId { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Connection source node ID.</div></div>",831:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype831\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> TargetId { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Connection target node ID.</div></div>",833:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype833\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DirectedConnection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">srcId,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">tgtId</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Construct with the provided source and target node IDs.</div></div>",834:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype834\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DirectedConnection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PType\">DirectedConnection&nbsp;</td><td class=\"PName last\">copyFrom</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Copy constructor.</div></div>",835:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype835\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Equals(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DirectedConnection&nbsp;</td><td class=\"PName last\">other</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",836:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype836\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public int</span> CompareTo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DirectedConnection&nbsp;</td><td class=\"PName last\">other</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",837:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype837\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override bool</span> Equals(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>?&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",838:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype838\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override int</span> GetHashCode()</div></div></div>",840:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype840\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool operator</span> ==(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PType\">DirectedConnection&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PType\">DirectedConnection&nbsp;</td><td class=\"PName last\">y</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether two DirectedConnections have the same value.</div></div>",841:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype841\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool operator</span> !=(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PType\">DirectedConnection&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PType\">DirectedConnection&nbsp;</td><td class=\"PName last\">y</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether two DirectedConnections have a different value.</div></div>",842:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype842\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool operator</span> &lt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PType\">DirectedConnection&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PType\">DirectedConnection&nbsp;</td><td class=\"PName last\">y</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether a specified DirectedConnection is less than another specified DirectedConnection.</div></div>",843:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype843\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool operator</span> &gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PType\">DirectedConnection&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PType\">DirectedConnection&nbsp;</td><td class=\"PName last\">y</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether a specified DirectedConnection is greater than another specified DirectedConnection.</div></div>",844:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype844\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool operator</span> &lt;=(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PType\">DirectedConnection&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PType\">DirectedConnection&nbsp;</td><td class=\"PName last\">y</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether a specified DirectedConnection is less than or equal to another specified DirectedConnection.</div></div>",845:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype845\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool operator</span> &gt;=(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PType\">DirectedConnection&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">in</span>&nbsp;</td><td class=\"PType\">DirectedConnection&nbsp;</td><td class=\"PName last\">y</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether a specified DirectedConnection is greater than or equal to another specified DirectedConnection.</div></div>"});