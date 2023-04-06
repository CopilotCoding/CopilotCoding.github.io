﻿NDSummary.OnToolTipsLoaded("File:src/SharpNeat/Neat/ComplexityRegulation/RelativeComplexityRegulationStrategy.cs",{1007:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1007\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> SharpNeat.Neat.ComplexityRegulation</div></div></div>",1008:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1008\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">RelativeComplexityRegulationStrategy</div></div></div><div class=\"TTSummary\">A complexity regulation strategy that applies a moving complexity ceiling that is relative to the population mean complexity each at the start of each transition to complexifying mode.&nbsp; The strategy transitions from complexifying to simplifying when the relative ceiling is reached.&nbsp; Transitioning from simplifying to complexifying occurs when complexity is no longer falling *and* complexity is below the ceiling.</div></div>",1010:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1010\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly int</span> _minSimplifcationGenerations</div></div></div>",1011:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1011\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span> _relativeComplexityCeiling</div></div></div>",1012:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1012\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">double</span> _complexityCeiling</div></div></div>",1013:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1013\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">ComplexityRegulationMode _currentMode</div></div></div>",1014:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1014\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> _lastTransitionGeneration</div></div></div>",1015:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1015\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">double</span> _prevMeanMovingAverage</div></div></div>",1017:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1017\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> RelativeComplexityRegulationStrategy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">minSimplifcationGenerations,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">relativeComplexityCeiling</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Construct a new instance.</div></div>",1019:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1019\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> ComplexityRegulationMode CurrentMode { <span class=\"SHKeyword\">get</span> }</div></div></div>",1021:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1021\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> ComplexityRegulationMode UpdateMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">EvolutionAlgorithmStatistics&nbsp;</td><td class=\"PName last\">eaStats,</td></tr><tr><td class=\"PType first\">PopulationStatistics&nbsp;</td><td class=\"PName last\">popStats</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1022:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1022\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> ComplexityRegulationMode DetermineMode_WhileComplexifying(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">EvolutionAlgorithmStatistics&nbsp;</td><td class=\"PName last\">eaStats,</td></tr><tr><td class=\"PType first\">PopulationStatistics&nbsp;</td><td class=\"PName last\">popStats</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1023:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1023\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> ComplexityRegulationMode DetermineMode_WhileSimplifying(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">EvolutionAlgorithmStatistics&nbsp;</td><td class=\"PName last\">eaStats,</td></tr><tr><td class=\"PType first\">PopulationStatistics&nbsp;</td><td class=\"PName last\">popStats</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});