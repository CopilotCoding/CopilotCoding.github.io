﻿NDSummary.OnToolTipsLoaded("File:src/EfficacySampler/EvolutionAlgorithmHostClockTime.cs",{302:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype302\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> EfficacySampler</div></div></div>",303:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype303\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">EvolutionAlgorithmHostClockTime</div></div></div><div class=\"TTSummary\">An IEvolutionAlgorithmHost that is based on a clock time stop condition, e.g. run for 60 seconds.</div></div>",305:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype305\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> INeatExperiment&lt;<span class=\"SHKeyword\">double</span>&gt; _experiment</div></div></div>",306:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype306\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> TimeSpan _stopTimeSpan</div></div></div>",307:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype307\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Stopwatch _stopwatch</div></div></div>",308:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype308\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Thread _eaThread</div></div></div>",309:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype309\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> AutoResetEvent _awaitStartEvent</div></div></div>",310:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype310\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> AutoResetEvent _awaitStopEvent</div></div></div>",311:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype311\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">volatile bool</span> _stopFlag</div></div></div>",313:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype313\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> EvolutionAlgorithmHostClockTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">INeatExperiment&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">experiment,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">stopSeconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",314:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype314\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Sample Sample()</div></div></div>",315:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype315\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> Dispose()</div></div></div>",316:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype316\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private void</span> EAThreadMethod()</div></div></div>",317:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype317\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> Sample RecordSample()</div></div></div>",318:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype318\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> Block(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TimeSpan&nbsp;</td><td class=\"PName last\">timespan</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});