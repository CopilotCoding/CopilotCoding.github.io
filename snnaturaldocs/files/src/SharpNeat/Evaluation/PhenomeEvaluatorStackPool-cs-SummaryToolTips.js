﻿NDSummary.OnToolTipsLoaded("File:src/SharpNeat/Evaluation/PhenomeEvaluatorStackPool.cs",{291:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype291\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> SharpNeat.Evaluation</div></div></div>",292:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype292\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">PhenomeEvaluatorStackPool&#8203;<span class=\"TemplateSignature\">&lt;TPhenome&gt;</span></div></div></div><div class=\"TTSummary\">A pool of phenome evaluators, in which the pool is implemented with a stack structure with thread synchronised access to the stack.</div></div>",294:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype294\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> IPhenomeEvaluationScheme&lt;TPhenome&gt; _phenomeEvaluationScheme</div></div></div>",295:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype295\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> LightweightStack&lt;IPhenomeEvaluator&lt;TPhenome&gt;&gt; _evaluatorStack</div></div></div>",296:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype296\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">SpinLock _spinLock</div></div></div>",298:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype298\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> PhenomeEvaluatorStackPool(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IPhenomeEvaluationScheme&lt;TPhenome&gt;&nbsp;</td><td class=\"PName last\">phenomeEvaluationScheme,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">initialPoolSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Construct a new instance.</div></div>",299:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype299\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IPhenomeEvaluator&lt;TPhenome&gt; GetEvaluator()</div></div><div class=\"TTSummary\">Get an evaluator from the pool.</div></div>",300:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype300\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> ReleaseEvaluator(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IPhenomeEvaluator&lt;TPhenome&gt;&nbsp;</td><td class=\"PName last\">evaluator</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Releases an evaluator back into the pool.</div></div>"});