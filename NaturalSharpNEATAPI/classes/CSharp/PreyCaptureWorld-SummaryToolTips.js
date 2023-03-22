﻿NDSummary.OnToolTipsLoaded("CSharpClass:PreyCaptureWorld",{2921:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2921\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">PreyCaptureWorld</div></div></div><div class=\"TTSummary\">The prey capture task\'s grid world, as defined in:&nbsp; Incremental Evolution Of Complex General Behavior, Faustino Gomez and Risto Miikkulainen (1997) http://&#8203;nn&#8203;.cs&#8203;.utexas&#8203;.edu&#8203;/downloads&#8203;/papers&#8203;/gomez&#8203;.adaptive-behavior&#8203;.pdf&nbsp; Encapsulates the agent\'s sensor and motor hardware, and the prey\'s simple stochastic movement.</div></div>",2923:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2923\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const int</span> __gridSize</div></div><div class=\"TTSummary\">The length of an edge of the square grid world, measured in grid squares. The minimum possible value here is 9, otherwise the initial position of the agent may be outside of the grid world, and also the agent wall detectors would all be always on.</div></div>",2924:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2924\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const int</span> __atan2LookupOffset</div></div></div>",2926:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2926\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static readonly float</span>[,] __atan2Lookup</div></div></div>",2927:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2927\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly int</span> _preyInitMoves</div></div></div>",2928:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2928\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly float</span> _preySpeed</div></div></div>",2929:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2929\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly float</span> _sensorRange</div></div></div>",2930:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2930\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly float</span> _sensorRangeSqr</div></div></div>",2931:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2931\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly int</span> _maxTimesteps</div></div></div>",2932:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2932\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> IRandomSource _rng</div></div></div>",2933:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2933\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Int32Point _preyPos</div></div></div>",2934:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2934\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Int32Point _agentPos</div></div></div>",2936:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2936\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static</span> PreyCaptureWorld()</div></div></div>",2937:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2937\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> PreyCaptureWorld(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">preyInitMoves,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">preySpeed,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">sensorRange,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">maxTimesteps</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Constructs with the provided world parameter arguments.</div></div>",2939:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2939\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> GridSize { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the size of the square grid, stated as the number length of an edge measured in grid squares.</div></div>",2940:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2940\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> PreyInitMoves { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the number of moves the prey is allowed to move before the agent can move.</div></div>",2941:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2941\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public float</span> SensorRange { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the sensor range of the agent.</div></div>",2942:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2942\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Int32Point AgentPosition { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the grid square position of the agent.</div></div>",2943:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2943\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Int32Point PreyPosition { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the grid square position of the prey.</div></div>",2944:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2944\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> MaxTimesteps { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the maximum number of simulation timesteps to run without the agent capturing the prey.</div></div>",2946:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2946\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> RunTrial(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IBlackBox&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">agent</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Runs one trial of the provided agent in the world. Returns true if the agent captures the prey within the maximum number of timesteps allowed.</div></div>",2947:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2947\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> InitPositions()</div></div><div class=\"TTSummary\">Initialise agent and prey positions. The prey is positioned randomly with at least 4 empty squares between it and a wall (in all directions).&nbsp; The agent is positioned randomly but such that the prey is within sensor range (distance 2 or less).</div></div>",2948:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2948\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetAgentInputsAndActivate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IBlackBox&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">agent</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determine the agent\'s position in the world relative to the prey and walls, and set its sensor inputs accordingly.</div></div>",2949:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2949\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> MoveAgent(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IBlackBox&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">agent</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Allow the agent to move one square based on its decision. Note that the agent can choose to not move.</div></div>",2950:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2950\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> MovePrey()</div></div><div class=\"TTSummary\">Move the prey. The prey moves by a simple set of stochastic rules that make it more likely to move away from the agent with increased proximity to the agent.</div></div>",2951:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2951\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsPreyCaptured()</div></div><div class=\"TTSummary\">Gets a boolean that indicates if the prey has been captured.</div></div>",2952:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2952\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static float</span> T(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">distance</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">The T function as defined in Appendix A of the paper referenced at the top of this class.&nbsp; This is a function on the distance between the agent and the prey, with it\'s maximum value of 15 when distance is zero, and minimum value of 1.0 when distance is greater than 15.</div></div>",2953:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2953\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static float</span> W(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angleA,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angleB</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">The W function as defined in Appendix A of the paper referenced at the top of this class.</div></div>",2954:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2954\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static float</span> AngleDelta(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">a,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">b</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gives the smallest angle between two vectors with the given angles.</div></div>",2955:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2955\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static void</span> CartesianToPolar(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Int32Point&nbsp;</td><td class=\"PName last\">p,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">radiusSqr,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">azimuth</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Convert the given integer Cartesian coordinate to a polar coordinate.</div></div>",2956:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2956\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static float</span> Exp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">x</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns e raised to the specified power.</div></div>",2957:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2957\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private int</span> Sample(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Span&lt;<span class=\"SHKeyword\">float</span>&gt;&nbsp;</td><td class=\"PName last\">probs</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2958:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2958\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static void</span> NormaliseProbabilities(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Span&lt;<span class=\"SHKeyword\">float</span>&gt;&nbsp;</td><td class=\"PName last\">probs</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});