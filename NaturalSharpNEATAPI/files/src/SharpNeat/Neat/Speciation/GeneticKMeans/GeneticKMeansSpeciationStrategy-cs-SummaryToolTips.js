﻿NDSummary.OnToolTipsLoaded("File:src/SharpNeat/Neat/Speciation/GeneticKMeans/GeneticKMeansSpeciationStrategy.cs",{1684:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1684\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> SharpNeat.Neat.Speciation.GeneticKMeans</div></div></div>",1685:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1685\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">GeneticKMeansSpeciationStrategy&#8203;<span class=\"TemplateSignature\">&lt;T&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div></div><div class=\"TTSummary\">A speciation strategy that assigns genomes to species using k-means clustering on the genes of each genome.</div></div>",1687:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1687\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> IDistanceMetric&lt;T&gt; _distanceMetric</div></div></div>",1688:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1688\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly int</span> _maxKMeansIters</div></div></div>",1689:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1689\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> GeneticKMeansSpeciationInit&lt;T&gt; _kmeansInit</div></div></div>",1691:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1691\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> GeneticKMeansSpeciationStrategy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IDistanceMetric&lt;T&gt;&nbsp;</td><td class=\"PName last\">distanceMetric,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">maxKMeansIters</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Construct a new instance.</div></div>",1692:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1692\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Species&lt;T&gt;[] SpeciateAll(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IList&lt;NeatGenome&lt;T&gt;&gt;&nbsp;</td><td class=\"PName last\">genomeList,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">speciesCount,</td></tr><tr><td class=\"PType first\">IRandomSource&nbsp;</td><td class=\"PName last\">rng</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1693:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1693\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SpeciateAdd(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IList&lt;NeatGenome&lt;T&gt;&gt;&nbsp;</td><td class=\"PName last\">genomeList,</td></tr><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"PType first\">IRandomSource&nbsp;</td><td class=\"PName last\">rng</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1694:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1694\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> RunKMeans(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1695:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1695\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private int</span> KMeansIteration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>[]&nbsp;</td><td class=\"PName last\">updateBits</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1696:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1696\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static void</span> KMeansInit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1697:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1697\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> KMeansComplete(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1698:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1698\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> RecalcCentroids_GenomeById(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>[]&nbsp;</td><td class=\"PName last\">updateBits</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1699:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1699\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> RecalcCentroids_GenomeList(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>[]&nbsp;</td><td class=\"PName last\">updateBits</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});