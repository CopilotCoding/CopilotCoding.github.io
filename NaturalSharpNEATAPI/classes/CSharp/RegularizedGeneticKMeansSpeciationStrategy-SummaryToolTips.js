﻿NDSummary.OnToolTipsLoaded("CSharpClass:RegularizedGeneticKMeansSpeciationStrategy",{1618:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1618\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">RegularizedGeneticKMeansSpeciationStrategy&#8203;<span class=\"TemplateSignature\">&lt;T&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div></div><div class=\"TTSummary\">A speciation strategy that assigns genomes to species using k-means clustering on the genes of each genome.</div></div>",1620:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1620\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> IDistanceMetric&lt;T&gt; _distanceMetric</div></div></div>",1621:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1621\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly int</span> _maxKMeansIters</div></div></div>",1622:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1622\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span> _regularizationConstant</div></div></div>",1623:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1623\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> ParallelOptions _parallelOptions</div></div></div>",1624:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1624\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> GeneticKMeansSpeciationInit&lt;T&gt; _kmeansInit</div></div></div>",1626:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1626\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> RegularizedGeneticKMeansSpeciationStrategy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IDistanceMetric&lt;T&gt;&nbsp;</td><td class=\"PName last\">distanceMetric,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">maxKMeansIters,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">regularizationConstant,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">degreeOfParallelism</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Construct with the provided distance metric and k-means settings.</div></div>",1627:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1627\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Species&lt;T&gt;[] SpeciateAll(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IList&lt;NeatGenome&lt;T&gt;&gt;&nbsp;</td><td class=\"PName last\">genomeList,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">speciesCount,</td></tr><tr><td class=\"PType first\">IRandomSource&nbsp;</td><td class=\"PName last\">rng</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1628:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1628\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SpeciateAdd(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IList&lt;NeatGenome&lt;T&gt;&gt;&nbsp;</td><td class=\"PName last\">genomeList,</td></tr><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"PType first\">IRandomSource&nbsp;</td><td class=\"PName last\">rng</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1629:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1629\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> RunKMeans(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1630:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1630\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> RunKMeans(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">populationCount,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">maxIntraSpeciesDistance</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1631:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1631\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private int</span> KMeansIteration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>[]&nbsp;</td><td class=\"PName last\">updateBits,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">populationCount,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">maxIntraSpeciesDistance</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1632:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1632\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private int</span> DetermineGenomeSpecies(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NeatGenome&lt;T&gt;&nbsp;</td><td class=\"PName last\">genome,</td></tr><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">populationCount,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">maxIntraSpeciesDistance</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determine which species the given genome belongs to.</div></div>",1633:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1633\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private double</span> GetAdjustedDistance(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NeatGenome&lt;T&gt;&nbsp;</td><td class=\"PName last\">genome,</td></tr><tr><td class=\"PType first\">Species&lt;T&gt;&nbsp;</td><td class=\"PName last\">species,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">populationCount,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">maxIntraSpeciesDistance</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets an adjusted distance between the given genome and a species centroid.&nbsp; The adjustment introduces a regularization term.</div></div>",1634:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1634\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> KMeansInit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1635:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1635\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> KMeansInit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">populationCount,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">maxIntraSpeciesDistance</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1636:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1636\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> KMeansComplete(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1637:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1637\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> RecalcCentroids_GenomeById(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>[]&nbsp;</td><td class=\"PName last\">updateBits</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1638:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1638\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> RecalcCentroids_GenomeList(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>[]&nbsp;</td><td class=\"PName last\">updateBits</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1639:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1639\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> GetPopulationCountAndMaxIntraSpeciesDistance(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">populationCount,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">maxIntraSpeciesDistance</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1640:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1640\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private double</span> GetMaxIntraSpeciesCentroidDistance(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Calc the maximum distance between any two centroids.</div></div>",1668:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1668\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> RegularizedGeneticKMeansSpeciationStrategy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IDistanceMetric&lt;T&gt;&nbsp;</td><td class=\"PName last\">distanceMetric,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">maxKMeansIters,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">regularizationConstant</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Construct with the provided distance metric and k-means settings.</div></div>"});