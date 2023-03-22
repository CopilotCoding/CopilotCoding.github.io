﻿NDSummary.OnToolTipsLoaded("File:src/Tests/SharpNeat.Tests/Neat/Speciation/SpeciationStrategyTestUtils.cs",{4052:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype4052\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> SharpNeat.Neat.Speciation</div></div></div>",4053:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4053\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">internal static</span></div><div class=\"CPName\">SpeciationStrategyTestUtils</div></div></div></div>",4055:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4055\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static void</span> TestSpeciateAll(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">popSize,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">inputNodeCount,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">outputNodeCount,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName\">connectionsProportion,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">IDistanceMetric&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName\">distanceMetric,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">ISpeciationStrategy&lt;NeatGenome&lt;<span class=\"SHKeyword\">double</span>&gt;,<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName\">speciationStrategy,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">IRandomSource&nbsp;</td><td class=\"PName\">rng,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">validateNearestSpecies</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",4056:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4056\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static void</span> TestSpeciateAdd(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">popSize,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">inputNodeCount,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">outputNodeCount,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName\">connectionsProportion,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">IDistanceMetric&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName\">distanceMetric,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">ISpeciationStrategy&lt;NeatGenome&lt;<span class=\"SHKeyword\">double</span>&gt;,<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName\">speciationStrategy,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">IRandomSource&nbsp;</td><td class=\"PName\">rng,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">validateNearestSpecies</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",4057:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4057\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static void</span> ValidationTests(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;<span class=\"SHKeyword\">double</span>&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"PType first\">IDistanceMetric&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">distanceMetric,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">speciesCountExpected,</td></tr><tr><td class=\"PType first\">List&lt;NeatGenome&lt;<span class=\"SHKeyword\">double</span>&gt;&gt;&nbsp;</td><td class=\"PName last\">fullGenomeList,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">validateNearestSpecies</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",4058:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4058\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> NeatPopulation&lt;<span class=\"SHKeyword\">double</span>&gt; CreateNeatPopulation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">count,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">inputNodeCount,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">outputNodeCount,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">connectionsProportion</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",4059:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4059\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> HashSet&lt;<span class=\"SHKeyword\">int</span>&gt; GetAllGenomeIds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;<span class=\"SHKeyword\">double</span>&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",4060:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype4060\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> List&lt;Species&lt;T&gt;&gt; GetNearestSpeciesList&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NeatGenome&lt;T&gt;&nbsp;</td><td class=\"PName last\">genome,</td></tr><tr><td class=\"PType first\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"PType first\">IDistanceMetric&lt;T&gt;&nbsp;</td><td class=\"PName last\">distanceMetric</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div><div class=\"TTSummary\">Gets the species with a centroid closest to the given genome.&nbsp; If multiple species are equally close then we return all of the those species.</div></div>"});