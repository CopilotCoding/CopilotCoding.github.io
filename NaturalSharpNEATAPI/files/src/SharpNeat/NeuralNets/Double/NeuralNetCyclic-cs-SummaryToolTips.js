﻿NDSummary.OnToolTipsLoaded("File:src/SharpNeat/NeuralNets/Double/NeuralNetCyclic.cs",{2225:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2225\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> SharpNeat.NeuralNets.Double</div></div></div>",2226:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2226\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">NeuralNetCyclic</div></div></div><div class=\"TTSummary\">A neural network class that represents a network with recurrent (cyclic) connections.&nbsp; Algorithm Overview.&nbsp; 1) Loop connections.&nbsp; Each connection gets its input signal from its source node, multiplies the signal by its weight, and adds the result to its target node\'s pre-activation variable. Connections are ordered by source node index, thus all memory reads are sequential, but the memory writes to node pre-activation variables are non-sequential.&nbsp; 2) Loop nodes.&nbsp; Pass each node\'s pre-activation signal through the activation function, storing the result in a separate post-activation signals array.&nbsp; 3) Completion.&nbsp; Copy the post-activation signals into the pre-activations signals array.&nbsp; The activation loop is run a fixed number of times/cycles to allow signals to gradually propagate through the network, one timestep/cycle/loop at a time.</div></div>",2228:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2228\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> ConnectionIds _connIds</div></div></div>",2229:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2229\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span>[] _weightArr</div></div></div>",2230:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2230\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> VecFn2&lt;<span class=\"SHKeyword\">double</span>&gt; _activationFn</div></div></div>",2231:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2231\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span>[] _activationsArr</div></div></div>",2232:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2232\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Memory&lt;<span class=\"SHKeyword\">double</span>&gt; _preActivationMem</div></div></div>",2233:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2233\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Memory&lt;<span class=\"SHKeyword\">double</span>&gt; _postActivationMem</div></div></div>",2234:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2234\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly int</span> _inputCount</div></div></div>",2235:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2235\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly int</span> _outputCount</div></div></div>",2236:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2236\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly int</span> _totalNodeCount</div></div></div>",2237:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2237\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly int</span> _cyclesPerActivation</div></div></div>",2238:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2238\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">volatile bool</span> _isDisposed</div></div></div>",2240:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2240\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> NeuralNetCyclic(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">WeightedDirectedGraph&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">digraph,</td></tr><tr><td class=\"PType first\">VecFn2&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">activationFn,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">cyclesPerActivation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Constructs a cyclic neural network.</div></div>",2241:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2241\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> NeuralNetCyclic(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DirectedGraph&nbsp;</td><td class=\"PName last\">digraph,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>[]&nbsp;</td><td class=\"PName last\">weightArr,</td></tr><tr><td class=\"PType first\">VecFn2&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">activationFn,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">cyclesPerActivation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Constructs a cyclic neural network.</div></div>",2243:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2243\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Memory&lt;<span class=\"SHKeyword\">double</span>&gt; Inputs { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets a memory segment that represents a vector of input values.</div></div>",2244:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2244\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Memory&lt;<span class=\"SHKeyword\">double</span>&gt; Outputs { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets a memory segment that represents a vector of output values.</div></div>",2246:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2246\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> Activate()</div></div><div class=\"TTSummary\">Activate the network for a fixed number of iterations defined by the \'maxIterations\' parameter at construction time. Activation reads input signals from InputSignalArray and writes output signals to OutputSignalArray.</div></div>",2247:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2247\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> Reset()</div></div><div class=\"TTSummary\">Reset the network\'s internal state.</div></div>",2248:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2248\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> Dispose()</div></div></div>"});