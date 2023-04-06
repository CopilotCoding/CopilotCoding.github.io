﻿NDContentPage.OnToolTipsLoaded({371:"<div class=\"NDToolTip TInterface LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype371\"><div class=\"CPEntry TInterface Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">interface</span></div><div class=\"CPName\">IGenomeListEvaluator&#8203;<span class=\"TemplateSignature\">&lt;TGenome&gt;</span></div></div></div><div class=\"TTSummary\">Represents an evaluator of lists of genomes.</div></div>",502:"<div class=\"NDToolTip TInterface LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype502\"><div class=\"CPEntry TInterface Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">interface</span></div><div class=\"CPName\">IEvolutionAlgorithm</div></div></div><div class=\"TTSummary\">Represents a generational evolution algorithm.</div></div>",518:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype518\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\">EvolutionAlgorithmStatistics</div></div></div><div class=\"TTSummary\">Conveys statistics related to an IEvolutionAlgorithm.</div></div>",1042:"<div class=\"NDToolTip TInterface LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1042\"><div class=\"CPEntry TInterface Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">interface</span></div><div class=\"CPName\">IComplexityRegulationStrategy</div></div></div><div class=\"TTSummary\">Represents a complexity regulation strategy.&nbsp; DetermineMode() is called once per generation. A strategy determines the ComplexityRegulationMode that the evolution algorithm search should be in by examining passed in statistics. As such, the simplest valid strategy is to just return ComplexityRegulationMode.Complexifying, which results in no complexity regulation taking place.&nbsp; Complexity regulation is also known as \'Phased Search\'. For more information see: Phased Searching with NEAT: Alternating Between Complexification And Simplification, Colin Green, 2004 (http://&#8203;sharpneat&#8203;.sourceforge&#8203;.net&#8203;/phasedsearch&#8203;.html).</div></div>",1067:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype1067\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public enum</span> ComplexityRegulationMode</div></div><div class=\"TTSummary\">Complexity regulation modes.&nbsp; Represents two variations in the overall search strategy - complexifying and simplifying.&nbsp; That is, allowing genomes to complexify, and reducing their complexity to trim away excess and/or redundant structure in the population to reinvigorate a search.&nbsp; For more information see: Phased Searching with NEAT: Alternating Between Complexification And Simplification, Colin Green, 2004 (http://&#8203;sharpneat&#8203;.sourceforge&#8203;.net&#8203;/phasedsearch&#8203;.html).</div></div>",1107:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1107\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\">NeatEvolutionAlgorithmStatistics</div></div></div><div class=\"TTSummary\">NEAT specific evolution algorithm statistics.</div></div>",1122:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1122\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">internal sealed</span></div><div class=\"CPName\">OffspringBuilder&#8203;<span class=\"TemplateSignature\">&lt;T&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div></div><div class=\"TTSummary\">For creating new offspring genomes, from one or two parents selected stochastically from a population.</div></div>",1136:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1136\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\">NeatEvolutionAlgorithmSettings</div></div></div><div class=\"TTSummary\">NEAT evolution algorithm settings.</div></div>",1322:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1322\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\">NeatGenome&#8203;<span class=\"TemplateSignature\">&lt;T&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div></div><div class=\"TTSummary\">Represents a NEAT genome, i.e the genetic representation of a neural network.</div></div>",1484:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1484\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\">NeatReproductionAsexualSettings</div></div></div><div class=\"TTSummary\">Settings related to NeatReproductionAsexual{T}.</div></div>",1497:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1497\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\">NeatReproductionAsexual&#8203;<span class=\"TemplateSignature\">&lt;T&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div></div><div class=\"TTSummary\">Creation of offspring given a single parent (asexual reproduction).</div></div>",1518:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1518\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">WeightMutationScheme&#8203;<span class=\"TemplateSignature\">&lt;T&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div></div><div class=\"TTSummary\">Connection weight mutation scheme.</div></div>",1580:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1580\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\">NeatReproductionSexualSettings</div></div></div><div class=\"TTSummary\">Settings related to NeatReproductionSexual{T}.</div></div>",1587:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1587\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\">NeatReproductionSexual&#8203;<span class=\"TemplateSignature\">&lt;T&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div></div><div class=\"TTSummary\">Creation of offspring given two parents (sexual reproduction).</div></div>",1743:"<div class=\"NDToolTip TInterface LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1743\"><div class=\"CPEntry TInterface Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">interface</span></div><div class=\"CPName\">ISpeciationStrategy&#8203;<span class=\"TemplateSignature\">&lt;TGenome,TWeight&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> TWeight : <span class=\"SHKeyword\">struct</span></div></div></div><div class=\"TTSummary\">Represents a NEAT speciation strategy.</div></div>",1846:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1846\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\">NeatPopulation&#8203;<span class=\"TemplateSignature\">&lt;T&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div></div><div class=\"TTSummary\">A NEAT population.</div></div>"});