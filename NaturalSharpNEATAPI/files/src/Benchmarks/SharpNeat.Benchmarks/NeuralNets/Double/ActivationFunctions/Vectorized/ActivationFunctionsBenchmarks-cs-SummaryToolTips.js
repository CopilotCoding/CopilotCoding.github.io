﻿NDSummary.OnToolTipsLoaded("File:src/Benchmarks/SharpNeat.Benchmarks/NeuralNets/Double/ActivationFunctions/Vectorized/ActivationFunctionsBenchmarks.cs",{10:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype10\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> SharpNeat.NeuralNets.Double.ActivationFunctions.Vectorized.Benchmarks</div></div></div>",11:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype11\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\">ActivationFunctionsBenchmarks</div></div></div><div class=\"TTSummary\">Double precision vectorized activation function benchmarks.</div></div>",13:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype13\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static readonly</span> IActivationFunction&lt;<span class=\"SHKeyword\">double</span>&gt; __LeakyReLU</div></div></div>",14:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype14\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static readonly</span> IActivationFunction&lt;<span class=\"SHKeyword\">double</span>&gt; __LeakyReLUShifted</div></div></div>",15:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype15\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static readonly</span> IActivationFunction&lt;<span class=\"SHKeyword\">double</span>&gt; __MaxMinusOne</div></div></div>",16:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype16\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static readonly</span> IActivationFunction&lt;<span class=\"SHKeyword\">double</span>&gt; __PolynomialApproximantSteep</div></div></div>",17:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype17\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static readonly</span> IActivationFunction&lt;<span class=\"SHKeyword\">double</span>&gt; __QuadraticSigmoid</div></div></div>",18:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype18\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static readonly</span> IActivationFunction&lt;<span class=\"SHKeyword\">double</span>&gt; __ReLU</div></div></div>",19:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype19\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static readonly</span> IActivationFunction&lt;<span class=\"SHKeyword\">double</span>&gt; __SoftSignSteep</div></div></div>",20:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype20\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static readonly</span> IActivationFunction&lt;<span class=\"SHKeyword\">double</span>&gt; __SReLU</div></div></div>",21:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype21\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static readonly</span> IActivationFunction&lt;<span class=\"SHKeyword\">double</span>&gt; __SReLUShifted</div></div></div>",23:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype23\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const int</span> __loops</div></div></div>",25:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype25\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span>[] _x</div></div></div>",26:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype26\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span>[] _w</div></div></div>",28:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype28\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> ActivationFunctionsBenchmarks()</div></div></div>",29:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype29\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Benchmark]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> LeakyReLU()</div></div></div>",30:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype30\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Benchmark]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> LeakyReLUShifted()</div></div></div>",31:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype31\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Benchmark]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> MaxMinusOne()</div></div></div>",32:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype32\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Benchmark]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> PolynomialApproximantSteep()</div></div></div>",33:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype33\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Benchmark]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> QuadraticSigmoid()</div></div></div>",34:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype34\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Benchmark]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> ReLU()</div></div></div>",35:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype35\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Benchmark]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> SoftSignSteep()</div></div></div>",36:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype36\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Benchmark]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> SReLU()</div></div></div>",37:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype37\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Benchmark]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> SReLUShifted()</div></div></div>",38:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype38\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> RunBenchmark(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IActivationFunction&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">actFn</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});