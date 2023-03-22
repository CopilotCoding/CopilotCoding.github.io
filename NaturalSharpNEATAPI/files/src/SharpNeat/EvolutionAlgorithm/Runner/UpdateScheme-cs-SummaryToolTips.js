﻿NDSummary.OnToolTipsLoaded("File:src/SharpNeat/EvolutionAlgorithm/Runner/UpdateScheme.cs",{420:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype420\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> SharpNeat.EvolutionAlgorithm.Runner</div></div></div>",421:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype421\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">UpdateScheme</div></div></div><div class=\"TTSummary\">Evolution algorithm update scheme.</div></div>",423:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype423\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> UpdateScheme(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UpdateMode&nbsp;</td><td class=\"PName last\">updateMode,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint</span>&nbsp;</td><td class=\"PName last\">generations,</td></tr><tr><td class=\"PType first\">TimeSpan&nbsp;</td><td class=\"PName last\">timespan</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",425:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype425\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> UpdateMode UpdateMode { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the update scheme\'s mode.</div></div>",426:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype426\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public uint</span> Generations { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the number of generations between updates Applies to the generational update scheme only.</div></div>",427:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype427\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> TimeSpan TimeSpan { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the timespan between updates. Applies to the timespan update scheme only.</div></div>",429:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype429\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> UpdateScheme CreateNoUpdateScheme()</div></div><div class=\"TTSummary\">Create a \'no updates\' update scheme.</div></div>",430:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype430\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> UpdateScheme CreateGenerationalUpdateScheme(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint</span>&nbsp;</td><td class=\"PName last\">generations</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Create a generation based update scheme. I.e. the update event will trigger every N generations.</div></div>",431:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype431\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> UpdateScheme CreateTimeSpanUpdateScheme(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TimeSpan&nbsp;</td><td class=\"PName last\">timespan</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Create a clock time based update scheme. I.e. the update event will trigger periodically based on the specified clock time duration/timespan.</div></div>"});