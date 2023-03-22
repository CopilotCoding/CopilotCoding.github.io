﻿NDSummary.OnToolTipsLoaded("File:src/SharpNeat.Tasks/FunctionRegression/FuncRegressionEvaluationScheme.cs",{2805:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2805\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> SharpNeat.Tasks.FunctionRegression</div></div></div>",2806:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2806\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">FuncRegressionEvaluationScheme</div></div></div><div class=\"TTSummary\">Evaluation scheme for the function regression task.</div></div>",2808:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2808\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> ParamSamplingInfo _paramSamplingInfo</div></div></div>",2809:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2809\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span> _gradientMseWeight</div></div></div>",2810:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2810\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span>[] _yArrTarget</div></div></div>",2811:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2811\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span>[] _gradientArrTarget</div></div></div>",2812:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2812\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> IBlackBoxProbe _blackBoxProbe</div></div></div>",2814:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2814\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> InputCount { <span class=\"SHKeyword\">get</span> }</div></div></div>",2815:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2815\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> OutputCount { <span class=\"SHKeyword\">get</span> }</div></div></div>",2816:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2816\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsDeterministic { <span class=\"SHKeyword\">get</span> }</div></div></div>",2817:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2817\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IComparer&lt;FitnessInfo&gt; FitnessComparer { <span class=\"SHKeyword\">get</span> }</div></div></div>",2818:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2818\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> FitnessInfo NullFitness { <span class=\"SHKeyword\">get</span> }</div></div></div>",2819:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2819\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> EvaluatorsHaveState { <span class=\"SHKeyword\">get</span> }</div></div></div>",2821:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2821\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> FuncRegressionEvaluationScheme(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Func&lt;<span class=\"SHKeyword\">double</span>,<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">fn,</td></tr><tr><td class=\"PType first\">ParamSamplingInfo&nbsp;</td><td class=\"PName last\">paramSamplingInfo,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">gradientMseWeight</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Construct a new instance.</div></div>",2822:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2822\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IPhenomeEvaluator&lt;IBlackBox&lt;<span class=\"SHKeyword\">double</span>&gt;&gt; CreateEvaluator()</div></div></div>",2823:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2823\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> TestForStopCondition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">FitnessInfo&nbsp;</td><td class=\"PName last\">fitnessInfo</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2824:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2824\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> BlackBoxProbe CreateBlackBoxProbe(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Func&lt;<span class=\"SHKeyword\">double</span>,<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">fn,</td></tr><tr><td class=\"PType first\">ParamSamplingInfo&nbsp;</td><td class=\"PName last\">paramSamplingInfo</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});