﻿NDSummary.OnToolTipsLoaded("CSharpClass:AbsoluteComplexityRegulationStrategy",{1049:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1049\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">AbsoluteComplexityRegulationStrategy</div></div></div><div class=\"TTSummary\">A complexity regulation strategy that applies a fixed/absolute complexity ceiling.&nbsp; The strategy transitions from complexifying to simplifying when the fixed ceiling is reached.&nbsp; Transitioning from simplifying to complexifying occurs when complexity is no longer falling *and* complexity is below the ceiling.</div></div>",1051:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1051\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly int</span> _minSimplifcationGenerations</div></div></div>",1052:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1052\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span> _complexityCeiling</div></div></div>",1053:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1053\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">ComplexityRegulationMode _currentMode</div></div></div>",1054:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1054\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> _lastTransitionGeneration</div></div></div>",1055:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1055\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">double</span> _prevMeanMovingAverage</div></div></div>",1057:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1057\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> AbsoluteComplexityRegulationStrategy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">minSimplifcationGenerations,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">complexityCeiling</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Construct a new instance.</div></div>",1059:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1059\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> ComplexityRegulationMode CurrentMode { <span class=\"SHKeyword\">get</span> }</div></div></div>",1061:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1061\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> ComplexityRegulationMode UpdateMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">EvolutionAlgorithmStatistics&nbsp;</td><td class=\"PName last\">eaStats,</td></tr><tr><td class=\"PType first\">PopulationStatistics&nbsp;</td><td class=\"PName last\">popStats</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1062:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1062\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> ComplexityRegulationMode DetermineMode_WhileComplexifying(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">EvolutionAlgorithmStatistics&nbsp;</td><td class=\"PName last\">eaStats,</td></tr><tr><td class=\"PType first\">PopulationStatistics&nbsp;</td><td class=\"PName last\">popStats</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1063:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1063\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> ComplexityRegulationMode DetermineMode_WhileSimplifying(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">EvolutionAlgorithmStatistics&nbsp;</td><td class=\"PName last\">eaStats,</td></tr><tr><td class=\"PType first\">PopulationStatistics&nbsp;</td><td class=\"PName last\">popStats</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});