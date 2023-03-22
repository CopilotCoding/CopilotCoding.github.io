﻿NDSummary.OnToolTipsLoaded("CSharpClass:CartDoublePolePhysicsRK4",{2602:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2602\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">CartDoublePolePhysicsRK4</div></div></div><div class=\"TTSummary\">Represents the cart-pole physical model (with two poles); providing a model state update method that employs a classic 4th order Runge-Kutta to project to the state at the next timestep.</div></div>",2604:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2604\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const float</span> g</div></div><div class=\"TTSummary\">Gravitational acceleration (in m/s^2). Here g is taken to be the directionless magnitude of the acceleration caused by gravity (i.e. approximately 9.8 m/s^2 for gravity on Earth). The direction of gravitational acceleration is taken into account in the formulation of the equations, therefore the sign of g is positive.</div></div>",2605:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2605\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const float</span> m</div></div><div class=\"TTSummary\">Mass of pole 1 (in kilograms).</div></div>",2606:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2606\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const float</span> m2</div></div><div class=\"TTSummary\">Mass of pole 2 (in kilograms).</div></div>",2607:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2607\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const float</span> m_c</div></div><div class=\"TTSummary\">Mass of the cart (in kilograms).</div></div>",2608:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2608\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const float</span> l</div></div><div class=\"TTSummary\">Length of pole 1 (in metres). This is the full length of the pole, and not the half length as used widely elsewhere in the literature.</div></div>",2609:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2609\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const float</span> l_hat</div></div><div class=\"TTSummary\">Half length of pole 1.</div></div>",2610:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2610\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const float</span> l2</div></div><div class=\"TTSummary\">Length of pole 2 (in metres). This is the full length of the pole, and not the half length as used widely elsewhere in the literature.</div></div>",2611:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2611\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const float</span> l2_hat</div></div><div class=\"TTSummary\">Half length of pole 2.</div></div>",2612:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2612\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const float</span> mu_p</div></div><div class=\"TTSummary\">Coefficient of friction between the pole and the cart, i.e. friction at the pole\'s pivot joint.</div></div>",2613:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2613\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const float</span> mu_c</div></div><div class=\"TTSummary\">Coefficient of friction between the cart and the track.</div></div>",2614:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2614\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const float</span> M</div></div><div class=\"TTSummary\">Combined mass of the cart and the two poles.</div></div>",2615:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2615\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const float</span> tau</div></div><div class=\"TTSummary\">The timestep increment, e.g. 0.01 for 10 millisecond increments.</div></div>",2616:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype2616\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const float</span> tau_half</div></div></div>",2618:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2618\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly float</span>[] _state</div></div><div class=\"TTSummary\">The model state variables are: [0] x-axis coordinate of the cart (metres).&nbsp; [1] x-axis velocity of the cart (m/s).&nbsp; [2] Pole 1 angle (radians); deviation from the vertical. Positive is clockwise.&nbsp; [3] Pole 1 angular velocity (radians/s). Positive is clockwise.&nbsp; [4] Pole 2 angle (radians); deviation from the vertical. Positive is clockwise.&nbsp; [5] Pole 2 angular velocity (radians/s). Positive is clockwise.</div></div>",2619:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2619\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly float</span>[] _k1</div></div></div>",2620:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2620\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly float</span>[] _k2</div></div></div>",2621:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2621\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly float</span>[] _k3</div></div></div>",2622:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2622\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly float</span>[] _k4</div></div></div>",2623:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2623\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly float</span>[] _s</div></div></div>",2625:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2625\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public float</span>[] State { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Get the cart-pole model state.</div></div>",2627:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2627\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> ResetState(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">cartPos,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">poleAngle1,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">poleAngle2</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reset model state.</div></div>",2628:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2628\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Update(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">f</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Update the model state. I.e. move the state forward by one timestep.</div></div>",2629:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2629\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static void</span> CalcAccelerations(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>[]&nbsp;</td><td class=\"PName last\">state,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">f,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">xa,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">thetaa1,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">thetaa2</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Calculate cart acceleration, and pole angular acceleration for a given model state and external horizontal force applied to the cart.</div></div>",2630:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2630\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static void</span> MultiplyAdd(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>[]&nbsp;</td><td class=\"PName last\">dest,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>[]&nbsp;</td><td class=\"PName last\">add,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>[]&nbsp;</td><td class=\"PName last\">a,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">scalar</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Fused multiply-add.</div></div>"});