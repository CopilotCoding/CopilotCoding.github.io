﻿NDSummary.OnToolTipsLoaded("File:src/SharpNeat/NeuralNets/Double/Vectorized/NeuralNetAcyclic.cs",{2198:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2198\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">namespace</span> SharpNeat.NeuralNets.Double.Vectorized</div></div></div>",2199:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2199\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">NeuralNetAcyclic</div></div></div><div class=\"TTSummary\">A version of Double.NeuralNetAcyclic that utilises some vectorized operations for improved performance on hardware platforms that support them.</div></div>",2201:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2201\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> ConnectionIds _connIds</div></div></div>",2202:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2202\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span>[] _weightArr</div></div></div>",2203:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2203\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> LayerInfo[] _layerInfoArr</div></div></div>",2204:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2204\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> VecFn&lt;<span class=\"SHKeyword\">double</span>&gt; _activationFn</div></div></div>",2205:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2205\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span>[] _workingArr</div></div></div>",2206:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2206\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Memory&lt;<span class=\"SHKeyword\">double</span>&gt; _activationMem</div></div></div>",2207:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2207\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Memory&lt;<span class=\"SHKeyword\">double</span>&gt; _outputMem</div></div></div>",2208:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2208\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly int</span>[] _outputNodeIdxArr</div></div></div>",2209:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2209\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly int</span> _inputCount</div></div></div>",2210:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2210\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly int</span> _outputCount</div></div></div>",2211:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2211\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly int</span> _totalNodeCount</div></div></div>",2212:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2212\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly double</span>[] _conInputArr</div></div></div>",2213:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2213\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">volatile bool</span> _isDisposed</div></div></div>",2215:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2215\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> NeuralNetAcyclic(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">WeightedDirectedGraphAcyclic&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">digraph,</td></tr><tr><td class=\"PType first\">VecFn&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">activationFn</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Constructs a AcyclicNeuralNet with the provided neural net definition parameters.</div></div>",2216:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2216\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> NeuralNetAcyclic(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DirectedGraphAcyclic&nbsp;</td><td class=\"PName last\">digraph,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>[]&nbsp;</td><td class=\"PName last\">weightArr,</td></tr><tr><td class=\"PType first\">VecFn&lt;<span class=\"SHKeyword\">double</span>&gt;&nbsp;</td><td class=\"PName last\">activationFn</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Constructs a AcyclicNeuralNet with the provided neural net definition parameters.</div></div>",2218:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2218\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Memory&lt;<span class=\"SHKeyword\">double</span>&gt; Inputs { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets a memory segment that represents a vector of input values.</div></div>",2219:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2219\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Memory&lt;<span class=\"SHKeyword\">double</span>&gt; Outputs { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets a memory segment that represents a vector of output values.</div></div>",2221:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2221\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> Activate()</div></div><div class=\"TTSummary\">Activate the network. Activation reads input signals from InputSignalArray and writes output signals to OutputSignalArray.</div></div>",2222:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2222\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> Reset()</div></div><div class=\"TTSummary\">Reset the network\'s internal state.</div></div>",2223:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2223\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> Dispose()</div></div></div>"});