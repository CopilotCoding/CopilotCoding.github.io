﻿NDSummary.OnToolTipsLoaded("CSharpClass:EvolutionAlgorithmRunner",{466:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype466\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\">EvolutionAlgorithmRunner</div></div></div><div class=\"TTSummary\">Wraps a background worker thread for running an IEvolutionAlgorithm, and provides methods for asynchronous control of the worker thread, for starting, stopping, pausing and resuming the evolution algorithm.</div></div>",468:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype468\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static readonly</span> ILog __log</div></div></div>",469:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype469\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> IEvolutionAlgorithm _ea</div></div></div>",470:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype470\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> UpdateScheme _updateScheme</div></div></div>",471:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype471\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Func&lt;<span class=\"SHKeyword\">bool</span>&gt; _isUpdateDueFn</div></div></div>",472:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype472\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> AutoResetEvent _awaitPauseEvent</div></div></div>",473:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype473\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> AutoResetEvent _awaitRestartEvent</div></div></div>",474:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype474\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">volatile</span> RunState _runState</div></div></div>",475:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype475\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> _prevUpdateGeneration</div></div></div>",476:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype476\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">long</span> _prevUpdateTimeTick</div></div></div>",477:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype477\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Thread? _algorithmThread</div></div></div>",478:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype478\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">volatile bool</span> _pauseRequestFlag</div></div></div>",479:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype479\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">volatile bool</span> _terminateFlag</div></div></div>",481:"<div class=\"NDToolTip TEvent LCSharp\"><div id=\"NDPrototype481\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public event</span> EventHandler? UpdateEvent</div></div><div class=\"TTSummary\">Notifies listeners of an update event.</div></div>",483:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype483\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> EvolutionAlgorithmRunner(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IEvolutionAlgorithm&nbsp;</td><td class=\"PName last\">ea,</td></tr><tr><td class=\"PType first\">UpdateScheme&nbsp;</td><td class=\"PName last\">updateScheme</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Constructs a new instance.</div></div>",485:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype485\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IEvolutionAlgorithm EA { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">The underlying IEvolutionAlgorithm.</div></div>",486:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype486\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> UpdateScheme UpdateScheme { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets or sets the runner\'s update scheme.</div></div>",487:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype487\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> RunState RunState { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the current run state of the runner.</div></div>",489:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype489\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> StartOrResume()</div></div><div class=\"TTSummary\">Starts the algorithm running, or resumes a paused algorithm.</div></div>",490:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype490\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> RequestPause()</div></div><div class=\"TTSummary\">Requests that the runner pauses, but doesn\'t wait it to do so.</div></div>",491:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype491\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> RequestPauseAndWait()</div></div><div class=\"TTSummary\">Request that the runner pauses, and waits it to do so.</div></div>",492:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype492\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> RequestTerminateAndWait()</div></div><div class=\"TTSummary\">Request that the runner terminates, and waits it to do so.</div></div>",493:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype493\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> Dispose()</div></div></div>",494:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype494\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private void</span> BackgroundThreadMethod()</div></div></div>",495:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype495\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private void</span> BackgroundThreadMethodInner()</div></div></div>",496:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype496\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private void</span> OnUpdateEvent()</div></div></div>",497:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype497\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> Func&lt;<span class=\"SHKeyword\">bool</span>&gt; CreateIsUpdateDueFunction(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UpdateScheme&nbsp;</td><td class=\"PName last\">updateScheme</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",498:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype498\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private bool</span> IsUpdateDue_Generational()</div></div></div>",499:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype499\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private bool</span> IsUpdateDue_TimeSpan()</div></div></div>"});