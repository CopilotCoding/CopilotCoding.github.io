﻿NDSummary.OnToolTipsLoaded("File:src/SharpNeat/IO/NetFileReader.cs",{979:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype979\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> SharpNeat.IO</div></div></div>",980:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype980\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">internal</span></div><div class=\"CPName\">NetFileReader</div></div></div><div class=\"TTSummary\">For reading of \'net\' format files.</div></div>",982:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype982\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static readonly char</span>[] __separatorChars</div></div></div>",983:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype983\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> StreamReader _sr</div></div></div>",984:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype984\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> _lineIdx</div></div></div>",985:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype985\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> _inputCount</div></div></div>",986:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype986\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> _outputCount</div></div></div>",988:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype988\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> NetFileReader(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">StreamReader&nbsp;</td><td class=\"PName last\">sr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",989:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype989\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> NetFileModel Read()</div></div></div>",990:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype990\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> ReadInputOutputCounts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">inputCount,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">outputCount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",991:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype991\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> ReadCyclicIndicator(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isAcyclic,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">cyclesPerActivation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",992:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype992\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> ReadConnections(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">List&lt;ConnectionLine&gt;&nbsp;</td><td class=\"PName last\">connList</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",993:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype993\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> ReadActivationFunctions(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">List&lt;ActivationFnLine&gt;&nbsp;</td><td class=\"PName last\">activationFnList</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",994:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype994\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private string</span>? ReadNextLine()</div></div></div>",995:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype995\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private string</span> ReadNonEmptyLine()</div></div></div>",996:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype996\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private void</span> ReadEndOfSection()</div></div></div>",997:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype997\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> NetFileModel Read(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">StreamReader&nbsp;</td><td class=\"PName last\">sr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Read a \'net\' format file from a stream reader.</div></div>",998:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype998\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static bool</span> TryParseInt32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">s,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",999:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype999\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static bool</span> TryParseDouble(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">s,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});