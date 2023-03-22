﻿NDSummary.OnToolTipsLoaded("CSharpClass:FuncRegressionEvaluator",{2769:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2769\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">FuncRegressionEvaluator</div></div></div><div class=\"TTSummary\">Evaluator for the Function Regression task.&nbsp; One continuous valued input maps to one continuous valued output.&nbsp; Evaluation consists of querying the provided black box for a number of distinct values over the range of the continuous valued input, and comparing the black box response with the expected/correct response.</div></div>",2771:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2771\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> ParamSamplingInfo _paramSamplingInfo</div></div></div>",2772:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2772\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span> _gradientMseWeight</div></div></div>",2773:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2773\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span> _yMseWeight</div></div></div>",2774:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2774\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span>[] _yArrTarget</div></div></div>",2775:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2775\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span>[] _gradientArrTarget</div></div></div>",2776:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2776\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span>[] _yArr</div></div></div>",2777:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2777\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span>[] _gradientArr</div></div></div>",2778:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2778\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> IBlackBoxProbe _blackBoxProbe</div></div></div>",2780:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2780\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal</span> FuncRegressionEvaluator(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ParamSamplingInfo&nbsp;</td><td class=\"PName last\">paramSamplingInfo,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">gradientMseWeight,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>[]&nbsp;</td><td class=\"PName last\">yArrTarget,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>[]&nbsp;</td><td class=\"PName last\">gradientArrTarget,</td></tr><tr><td class=\"PType first\">IBlackBoxProbe&nbsp;</td><td class=\"PName last\">blackBoxProbe</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Construct a new instance.</div></div>",2781:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2781\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> FitnessInfo Evaluate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IBlackBox&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">box</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Evaluate the provided black box against the function regression task, and return its fitness score.</div></div>"});