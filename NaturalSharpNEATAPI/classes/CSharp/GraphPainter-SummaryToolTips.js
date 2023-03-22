﻿NDSummary.OnToolTipsLoaded("CSharpClass:GraphPainter",{2407:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2407\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\">GraphPainter</div></div></div><div class=\"TTSummary\">For painting a directed graph onto a GDI+ drawing surface.&nbsp; This requires the nodes of the graph to have already been arranged in a 2D space and thus assigned 2D positions, this can be achieved with an implementation of IGraphLayoutScheme.</div></div>",2409:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2409\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> PainterSettings _settings</div></div></div>",2410:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2410\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Pen _nodeBorderPen</div></div></div>",2411:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2411\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Brush _nodeFillBrush</div></div></div>",2412:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2412\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly</span> Brush _nodeLabelBrush</div></div></div>",2413:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2413\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">readonly float</span> _connectionWeightToWidth</div></div></div>",2415:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2415\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> GraphPainter()</div></div><div class=\"TTSummary\">Default constructor.</div></div>",2416:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2416\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> GraphPainter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">PainterSettings&nbsp;</td><td class=\"PName last\">settings</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Construct with the provided painter settings.</div></div>",2417:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2417\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> PaintGraph(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DirectedGraphViewModel&nbsp;</td><td class=\"PName last\">model,</td></tr><tr><td class=\"PType first\">Graphics&nbsp;</td><td class=\"PName last\">g,</td></tr><tr><td class=\"PType first\">Rectangle&nbsp;</td><td class=\"PName last\">viewportArea,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">zoomFactor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Paint a directed graph onto the a provided GDI+ surface.</div></div>",2418:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2418\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected virtual void</span> PaintGraph(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DirectedGraphViewModel&nbsp;</td><td class=\"PName last\">model,</td></tr><tr><td class=\"PType first\">PaintState&nbsp;</td><td class=\"PName last\">state</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Paint a directed graph.</div></div>",2419:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2419\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected virtual void</span> PaintNodes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DirectedGraphViewModel&nbsp;</td><td class=\"PName last\">model,</td></tr><tr><td class=\"PType first\">PaintState&nbsp;</td><td class=\"PName last\">state</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Paint the nodes of a directed graph.</div></div>",2420:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2420\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected virtual void</span> PaintNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Point&nbsp;</td><td class=\"PName last\">pos,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id,</td></tr><tr><td class=\"PType first\">PaintState&nbsp;</td><td class=\"PName last\">state</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Paint a single node.</div></div>",2421:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2421\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected virtual void</span> PaintConnections(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DirectedGraphViewModel&nbsp;</td><td class=\"PName last\">model,</td></tr><tr><td class=\"PType first\">PaintState&nbsp;</td><td class=\"PName last\">state</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Paint the connections of a directed graph.</div></div>",2422:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2422\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected virtual void</span> PaintConnection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">srcIdx,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">tgtIdx,</td></tr><tr><td class=\"PType first\">Point&nbsp;</td><td class=\"PName last\">srcPos,</td></tr><tr><td class=\"PType first\">Point&nbsp;</td><td class=\"PName last\">tgtPos,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">weight,</td></tr><tr><td class=\"PType first\">PaintState&nbsp;</td><td class=\"PName last\">state</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Paint a single connection.</div></div>",2423:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2423\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected virtual void</span> PaintBackConnection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">srcIdx,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">tgtIdx,</td></tr><tr><td class=\"PType first\">Point&nbsp;</td><td class=\"PName last\">srcPos,</td></tr><tr><td class=\"PType first\">Point&nbsp;</td><td class=\"PName last\">tgtPos,</td></tr><tr><td class=\"PType first\">PaintState&nbsp;</td><td class=\"PName last\">state,</td></tr><tr><td class=\"PType first\">Pen&nbsp;</td><td class=\"PName last\">pen</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Paint a single back-connection, i.e. a connection whereby the target node is vertically above the source node.</div></div>",2424:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2424\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> Dispose()</div></div></div>",2425:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2425\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> Point ModelToViewport(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Point&nbsp;</td><td class=\"PName last\">p,</td></tr><tr><td class=\"PType first\">PaintState&nbsp;</td><td class=\"PName last\">state</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Converts from a model coordinate to a viewport coordinate.</div></div>",2426:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2426\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static bool</span> IsPointWithinViewport(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Point&nbsp;</td><td class=\"PName last\">p,</td></tr><tr><td class=\"PType first\">PaintState&nbsp;</td><td class=\"PName last\">state</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Indicates if a point is within the graphics area represented by the viewport.&nbsp; That is, does an element at this position need to be painted.</div></div>"});