﻿NDSummary.OnToolTipsLoaded("CSharpClass:OffspringBuilder",{1122:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1122\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">internal sealed</span></div><div class=\"CPName\">OffspringBuilder&#8203;<span class=\"TemplateSignature\">&lt;T&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div></div><div class=\"TTSummary\">For creating new offspring genomes, from one or two parents selected stochastically from a population.</div></div>",1124:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1124\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> NeatReproductionAsexual&lt;T&gt; _reproductionAsexual</div></div></div>",1125:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1125\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> NeatReproductionSexual&lt;T&gt; _reproductionSexual</div></div></div>",1126:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1126\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span> _interspeciesMatingProportion</div></div></div>",1127:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1127\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> IComparer&lt;FitnessInfo&gt; _fitnessComparer</div></div></div>",1129:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1129\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> OffspringBuilder(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NeatReproductionAsexual&lt;T&gt;&nbsp;</td><td class=\"PName last\">reproductionAsexual,</td></tr><tr><td class=\"PType first\">NeatReproductionSexual&lt;T&gt;&nbsp;</td><td class=\"PName last\">reproductionSexual,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">interspeciesMatingProportion,</td></tr><tr><td class=\"PType first\">IComparer&lt;FitnessInfo&gt;&nbsp;</td><td class=\"PName last\">fitnessComparer</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Construct a new instance of OffspringBuilder{T}.</div></div>",1130:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1130\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> List&lt;NeatGenome&lt;T&gt;&gt; CreateOffspring(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">IRandomSource&nbsp;</td><td class=\"PName last\">rng,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">offspringAsexualCount,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">offspringSexualCount,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">offspringInterspeciesCount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates new offspring from existing parent genomes.</div></div>",1131:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1131\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> List&lt;NeatGenome&lt;T&gt;&gt; CreateOffspring(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">DiscreteDistribution&nbsp;</td><td class=\"PName last\">speciesDist,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">DiscreteDistribution?[]&nbsp;</td><td class=\"PName last\">genomeDistArr,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">interspeciesMatingProportion,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">IRandomSource&nbsp;</td><td class=\"PName last\">rng,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">asexualCount,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sexualCount,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">interspeciesCount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1132:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1132\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> CreateSpeciesOffspringAsexual(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Species&lt;T&gt;&nbsp;</td><td class=\"PName last\">species,</td></tr><tr><td class=\"PType first\">DiscreteDistribution&nbsp;</td><td class=\"PName last\">genomeDist,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">offspringCount,</td></tr><tr><td class=\"PType first\">List&lt;NeatGenome&lt;T&gt;&gt;&nbsp;</td><td class=\"PName last\">offspringList,</td></tr><tr><td class=\"PType first\">IRandomSource&nbsp;</td><td class=\"PName last\">rng</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1133:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1133\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> CreateSpeciesOffspringSexual(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Species&lt;T&gt;[]&nbsp;</td><td class=\"PName last\">speciesArr,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">Species&lt;T&gt;&nbsp;</td><td class=\"PName last\">species,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">DiscreteDistribution&nbsp;</td><td class=\"PName last\">speciesDistUpdated,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">DiscreteDistribution?[]&nbsp;</td><td class=\"PName last\">genomeDistArr,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">DiscreteDistribution&nbsp;</td><td class=\"PName last\">genomeDist,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">offspringCount,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">List&lt;NeatGenome&lt;T&gt;&gt;&nbsp;</td><td class=\"PName last\">offspringList,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">interspeciesMatingProportion,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">IRandomSource&nbsp;</td><td class=\"PName last\">rng,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">offspringInterspeciesCount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});