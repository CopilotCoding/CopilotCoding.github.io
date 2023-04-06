﻿NDSummary.OnToolTipsLoaded("CSharpClass:ParallelGenomeListEvaluator",{339:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype339\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\">ParallelGenomeListEvaluator&#8203;<span class=\"TemplateSignature\">&lt;TGenome,TPhenome&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> TGenome : IGenome</div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> TPhenome : <span class=\"SHKeyword\">class</span>, IDisposable</div></div></div><div class=\"TTSummary\">An implementation of IGenomeListEvaluator{TGenome} that evaluates genomes in parallel on multiple CPU threads.</div></div>",341:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype341\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> IGenomeDecoder&lt;TGenome,TPhenome&gt; _genomeDecoder</div></div></div>",342:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype342\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> IPhenomeEvaluationScheme&lt;TPhenome&gt; _phenomeEvaluationScheme</div></div></div>",343:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype343\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> ParallelOptions _parallelOptions</div></div></div>",344:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype344\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> IPhenomeEvaluatorPool&lt;TPhenome&gt; _evaluatorPool</div></div></div>",346:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype346\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> ParallelGenomeListEvaluator(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IGenomeDecoder&lt;TGenome,TPhenome&gt;&nbsp;</td><td class=\"PName last\">genomeDecoder,</td></tr><tr><td class=\"PType first\">IPhenomeEvaluationScheme&lt;TPhenome&gt;&nbsp;</td><td class=\"PName last\">phenomeEvaluationScheme,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">degreeOfParallelism</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Construct with the provided genome decoder and phenome evaluator.</div></div>",348:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype348\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsDeterministic { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Indicates if the evaluation scheme is deterministic, i.e. will always return the same fitness score for a given genome.</div></div>",349:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype349\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IComparer&lt;FitnessInfo&gt; FitnessComparer { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">The evaluation scheme\'s fitness comparer.</div></div>",351:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype351\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Evaluate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IList&lt;TGenome&gt;&nbsp;</td><td class=\"PName last\">genomeList</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Evaluates a collection of genomes and assigns fitness info to each.</div></div>",352:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype352\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> TestForStopCondition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">FitnessInfo&nbsp;</td><td class=\"PName last\">fitnessInfo</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Accepts a FitnessInfo, which is intended to be from the fittest genome in the population, and returns a boolean that indicates if the evolution algorithm can stop, i.e. because the fitness is the best that can be achieved (or good enough).</div></div>"});