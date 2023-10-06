/* eslint-disable */
import type { ConditionalValue } from './conditions';
import type { CssProperties } from './system-types';
import type { Tokens } from '../tokens/index';

interface PropertyValueTypes {
	aspectRatio: "auto" | "square" | "landscape" | "portrait" | "wide" | "ultrawide" | "golden";
	zIndex: Tokens["zIndex"];
	top: Tokens["spacing"];
	left: Tokens["spacing"];
	insetInline: Tokens["spacing"];
	insetBlock: Tokens["spacing"];
	inset: "auto" | Tokens["spacing"];
	insetBlockEnd: Tokens["spacing"];
	insetBlockStart: Tokens["spacing"];
	insetInlineEnd: Tokens["spacing"];
	insetInlineStart: Tokens["spacing"];
	right: Tokens["spacing"];
	bottom: Tokens["spacing"];
	insetX: Tokens["spacing"] | CssProperties["insetInline"];
	insetY: Tokens["spacing"] | CssProperties["insetBlock"];
	float: "left" | "right" | "start" | "end";
	hideFrom: Tokens["breakpoints"];
	hideBelow: Tokens["breakpoints"];
	flexBasis: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "full";
	flex: "1" | "auto" | "initial" | "none";
	gridTemplateColumns: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
	gridTemplateRows: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
	gridColumn: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "full";
	gridRow: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "full";
	gridAutoColumns: "min" | "max" | "fr";
	gridAutoRows: "min" | "max" | "fr";
	gap: Tokens["spacing"];
	gridGap: Tokens["spacing"];
	gridRowGap: Tokens["spacing"];
	gridColumnGap: Tokens["spacing"];
	rowGap: Tokens["spacing"];
	columnGap: Tokens["spacing"];
	padding: Tokens["spacing"];
	paddingLeft: Tokens["spacing"];
	paddingRight: Tokens["spacing"];
	paddingTop: Tokens["spacing"];
	paddingBottom: Tokens["spacing"];
	paddingBlock: Tokens["spacing"];
	paddingBlockEnd: Tokens["spacing"];
	paddingBlockStart: Tokens["spacing"];
	paddingInline: Tokens["spacing"];
	paddingInlineEnd: Tokens["spacing"];
	paddingInlineStart: Tokens["spacing"];
	marginLeft: "auto" | Tokens["spacing"];
	marginRight: "auto" | Tokens["spacing"];
	marginTop: "auto" | Tokens["spacing"];
	marginBottom: "auto" | Tokens["spacing"];
	margin: "auto" | Tokens["spacing"];
	marginBlock: "auto" | Tokens["spacing"];
	marginBlockEnd: "auto" | Tokens["spacing"];
	marginBlockStart: "auto" | Tokens["spacing"];
	marginInline: "auto" | Tokens["spacing"];
	marginInlineEnd: "auto" | Tokens["spacing"];
	marginInlineStart: "auto" | Tokens["spacing"];
	outlineColor: Tokens["colors"];
	outline: Tokens["borders"];
	outlineOffset: Tokens["spacing"];
	divideX: string;
	divideY: string;
	divideColor: Tokens["colors"];
	divideStyle: CssProperties["borderStyle"];
	width: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	inlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	minWidth: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	minInlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	maxWidth: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	maxInlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	height: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	blockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	minHeight: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	minBlockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	maxHeight: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	maxBlockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	color: Tokens["colors"];
	fontFamily: Tokens["fonts"];
	fontSize: Tokens["fontSizes"];
	fontWeight: Tokens["fontWeights"];
	fontSmoothing: "antialiased" | "subpixel-antialiased";
	letterSpacing: Tokens["letterSpacings"];
	lineHeight: Tokens["lineHeights"];
	textDecorationColor: Tokens["colors"];
	textEmphasisColor: Tokens["colors"];
	textIndent: Tokens["spacing"];
	textShadow: Tokens["shadows"];
	textWrap: "wrap" | "balance" | "nowrap";
	truncate: boolean;
	listStyleImage: Tokens["assets"];
	background: Tokens["colors"];
	backgroundColor: Tokens["colors"];
	backgroundImage: Tokens["assets"];
	backgroundGradient: Tokens["gradients"] | "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl";
	textGradient: Tokens["gradients"] | "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl";
	gradientFrom: Tokens["colors"];
	gradientTo: Tokens["colors"];
	gradientVia: Tokens["colors"];
	borderRadius: Tokens["radii"];
	borderTopLeftRadius: Tokens["radii"];
	borderTopRightRadius: Tokens["radii"];
	borderBottomRightRadius: Tokens["radii"];
	borderBottomLeftRadius: Tokens["radii"];
	borderTopRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderRightRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderBottomRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderLeftRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderStartStartRadius: Tokens["radii"];
	borderStartEndRadius: Tokens["radii"];
	borderStartRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderEndStartRadius: Tokens["radii"];
	borderEndEndRadius: Tokens["radii"];
	borderEndRadius: Tokens["radii"] | CssProperties["borderRadius"];
	border: Tokens["borders"];
	borderColor: Tokens["colors"];
	borderInline: Tokens["borders"];
	borderInlineWidth: Tokens["borderWidths"];
	borderInlineColor: Tokens["colors"];
	borderBlock: Tokens["borders"];
	borderBlockWidth: Tokens["borderWidths"];
	borderBlockColor: Tokens["colors"];
	borderLeft: Tokens["borders"];
	borderLeftColor: Tokens["colors"];
	borderInlineStart: Tokens["borders"];
	borderInlineStartWidth: Tokens["borderWidths"];
	borderInlineStartColor: Tokens["colors"];
	borderRight: Tokens["borders"];
	borderRightColor: Tokens["colors"];
	borderInlineEnd: Tokens["borders"];
	borderInlineEndWidth: Tokens["borderWidths"];
	borderInlineEndColor: Tokens["colors"];
	borderTop: Tokens["borders"];
	borderTopColor: Tokens["colors"];
	borderBottom: Tokens["borders"];
	borderBottomColor: Tokens["colors"];
	borderBlockEnd: Tokens["borders"];
	borderBlockEndColor: Tokens["colors"];
	borderBlockStart: Tokens["borders"];
	borderBlockStartColor: Tokens["colors"];
	opacity: Tokens["opacity"];
	boxShadow: Tokens["shadows"];
	boxShadowColor: Tokens["colors"];
	filter: "auto";
	dropShadow: Tokens["dropShadows"];
	blur: Tokens["blurs"];
	backdropFilter: "auto";
	backdropBlur: Tokens["blurs"];
	borderSpacing: Tokens["spacing"];
	borderSpacingX: Tokens["spacing"];
	borderSpacingY: Tokens["spacing"];
	transitionTimingFunction: Tokens["easings"];
	transitionDelay: Tokens["durations"];
	transitionDuration: Tokens["durations"];
	transition: "all" | "common" | "background" | "colors" | "opacity" | "shadow" | "transform";
	animation: Tokens["animations"];
	animationName: Tokens["animationName"];
	animationDelay: Tokens["durations"];
	scale: "auto" | CssProperties["scale"];
	translate: "auto" | CssProperties["translate"];
	translateX: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "-full";
	translateY: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "-full";
	accentColor: Tokens["colors"];
	caretColor: Tokens["colors"];
	scrollbar: "visible" | "hidden";
	scrollMargin: Tokens["spacing"];
	scrollMarginX: Tokens["spacing"] | CssProperties["scrollMarginInline"];
	scrollMarginY: Tokens["spacing"] | CssProperties["scrollMarginBlock"];
	scrollMarginLeft: Tokens["spacing"];
	scrollMarginRight: Tokens["spacing"];
	scrollMarginTop: Tokens["spacing"];
	scrollMarginBottom: Tokens["spacing"];
	scrollMarginBlock: Tokens["spacing"];
	scrollMarginBlockEnd: Tokens["spacing"];
	scrollMarginBlockStart: Tokens["spacing"];
	scrollMarginInline: Tokens["spacing"];
	scrollMarginInlineEnd: Tokens["spacing"];
	scrollMarginInlineStart: Tokens["spacing"];
	scrollPadding: Tokens["spacing"];
	scrollPaddingBlock: Tokens["spacing"];
	scrollPaddingBlockStart: Tokens["spacing"];
	scrollPaddingBlockEnd: Tokens["spacing"];
	scrollPaddingInline: Tokens["spacing"];
	scrollPaddingInlineEnd: Tokens["spacing"];
	scrollPaddingInlineStart: Tokens["spacing"];
	scrollPaddingX: Tokens["spacing"] | CssProperties["scrollPaddingInline"];
	scrollPaddingY: Tokens["spacing"] | CssProperties["scrollPaddingBlock"];
	scrollPaddingLeft: Tokens["spacing"];
	scrollPaddingRight: Tokens["spacing"];
	scrollPaddingTop: Tokens["spacing"];
	scrollPaddingBottom: Tokens["spacing"];
	scrollSnapType: "none" | "x" | "y" | "both";
	scrollSnapStrictness: "mandatory" | "proximity";
	scrollSnapMargin: Tokens["spacing"];
	scrollSnapMarginTop: Tokens["spacing"];
	scrollSnapMarginBottom: Tokens["spacing"];
	scrollSnapMarginLeft: Tokens["spacing"];
	scrollSnapMarginRight: Tokens["spacing"];
	fill: Tokens["colors"];
	stroke: Tokens["colors"];
	srOnly: boolean;
	debug: boolean;
	size: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12";
	surface: "clear" | "frost" | "glass" | "neutral" | "solid";
	colorPalette: "$tomato" | "$tomato.1" | "$tomato.2" | "$tomato.3" | "$tomato.4" | "$tomato.5" | "$tomato.6" | "$tomato.7" | "$tomato.8" | "$tomato.9" | "$tomato.10" | "$tomato.11" | "$tomato.12" | "$tomato.outline" | "$tomato.border" | "$tomato.solid" | "$tomato.text" | "$red" | "$red.1" | "$red.2" | "$red.3" | "$red.4" | "$red.5" | "$red.6" | "$red.7" | "$red.8" | "$red.9" | "$red.10" | "$red.11" | "$red.12" | "$red.outline" | "$red.border" | "$red.solid" | "$red.text" | "$crimson" | "$crimson.1" | "$crimson.2" | "$crimson.3" | "$crimson.4" | "$crimson.5" | "$crimson.6" | "$crimson.7" | "$crimson.8" | "$crimson.9" | "$crimson.10" | "$crimson.11" | "$crimson.12" | "$crimson.outline" | "$crimson.border" | "$crimson.solid" | "$crimson.text" | "$pink" | "$pink.1" | "$pink.2" | "$pink.3" | "$pink.4" | "$pink.5" | "$pink.6" | "$pink.7" | "$pink.8" | "$pink.9" | "$pink.10" | "$pink.11" | "$pink.12" | "$pink.outline" | "$pink.border" | "$pink.solid" | "$pink.text" | "$plum" | "$plum.1" | "$plum.2" | "$plum.3" | "$plum.4" | "$plum.5" | "$plum.6" | "$plum.7" | "$plum.8" | "$plum.9" | "$plum.10" | "$plum.11" | "$plum.12" | "$plum.outline" | "$plum.border" | "$plum.solid" | "$plum.text" | "$purple" | "$purple.1" | "$purple.2" | "$purple.3" | "$purple.4" | "$purple.5" | "$purple.6" | "$purple.7" | "$purple.8" | "$purple.9" | "$purple.10" | "$purple.11" | "$purple.12" | "$purple.outline" | "$purple.border" | "$purple.solid" | "$purple.text" | "$violet" | "$violet.1" | "$violet.2" | "$violet.3" | "$violet.4" | "$violet.5" | "$violet.6" | "$violet.7" | "$violet.8" | "$violet.9" | "$violet.10" | "$violet.11" | "$violet.12" | "$violet.outline" | "$violet.border" | "$violet.solid" | "$violet.text" | "$indigo" | "$indigo.1" | "$indigo.2" | "$indigo.3" | "$indigo.4" | "$indigo.5" | "$indigo.6" | "$indigo.7" | "$indigo.8" | "$indigo.9" | "$indigo.10" | "$indigo.11" | "$indigo.12" | "$indigo.outline" | "$indigo.border" | "$indigo.solid" | "$indigo.text" | "$blue" | "$blue.1" | "$blue.2" | "$blue.3" | "$blue.4" | "$blue.5" | "$blue.6" | "$blue.7" | "$blue.8" | "$blue.9" | "$blue.10" | "$blue.11" | "$blue.12" | "$blue.outline" | "$blue.border" | "$blue.solid" | "$blue.text" | "$cyan" | "$cyan.1" | "$cyan.2" | "$cyan.3" | "$cyan.4" | "$cyan.5" | "$cyan.6" | "$cyan.7" | "$cyan.8" | "$cyan.9" | "$cyan.10" | "$cyan.11" | "$cyan.12" | "$cyan.outline" | "$cyan.border" | "$cyan.solid" | "$cyan.text" | "$teal" | "$teal.1" | "$teal.2" | "$teal.3" | "$teal.4" | "$teal.5" | "$teal.6" | "$teal.7" | "$teal.8" | "$teal.9" | "$teal.10" | "$teal.11" | "$teal.12" | "$teal.outline" | "$teal.border" | "$teal.solid" | "$teal.text" | "$green" | "$green.1" | "$green.2" | "$green.3" | "$green.4" | "$green.5" | "$green.6" | "$green.7" | "$green.8" | "$green.9" | "$green.10" | "$green.11" | "$green.12" | "$green.outline" | "$green.border" | "$green.solid" | "$green.text" | "$grass" | "$grass.1" | "$grass.2" | "$grass.3" | "$grass.4" | "$grass.5" | "$grass.6" | "$grass.7" | "$grass.8" | "$grass.9" | "$grass.10" | "$grass.11" | "$grass.12" | "$grass.outline" | "$grass.border" | "$grass.solid" | "$grass.text" | "$orange" | "$orange.1" | "$orange.2" | "$orange.3" | "$orange.4" | "$orange.5" | "$orange.6" | "$orange.7" | "$orange.8" | "$orange.9" | "$orange.10" | "$orange.11" | "$orange.12" | "$orange.outline" | "$orange.border" | "$orange.solid" | "$orange.text" | "$brown" | "$brown.1" | "$brown.2" | "$brown.3" | "$brown.4" | "$brown.5" | "$brown.6" | "$brown.7" | "$brown.8" | "$brown.9" | "$brown.10" | "$brown.11" | "$brown.12" | "$brown.outline" | "$brown.border" | "$brown.solid" | "$brown.text" | "$sky" | "$sky.1" | "$sky.2" | "$sky.3" | "$sky.4" | "$sky.5" | "$sky.6" | "$sky.7" | "$sky.8" | "$sky.9" | "$sky.10" | "$sky.11" | "$sky.12" | "$sky.outline" | "$sky.border" | "$sky.solid" | "$sky.text" | "$mint" | "$mint.1" | "$mint.2" | "$mint.3" | "$mint.4" | "$mint.5" | "$mint.6" | "$mint.7" | "$mint.8" | "$mint.9" | "$mint.10" | "$mint.11" | "$mint.12" | "$mint.outline" | "$mint.border" | "$mint.solid" | "$mint.text" | "$lime" | "$lime.1" | "$lime.2" | "$lime.3" | "$lime.4" | "$lime.5" | "$lime.6" | "$lime.7" | "$lime.8" | "$lime.9" | "$lime.10" | "$lime.11" | "$lime.12" | "$lime.outline" | "$lime.border" | "$lime.solid" | "$lime.text" | "$yellow" | "$yellow.1" | "$yellow.2" | "$yellow.3" | "$yellow.4" | "$yellow.5" | "$yellow.6" | "$yellow.7" | "$yellow.8" | "$yellow.9" | "$yellow.10" | "$yellow.11" | "$yellow.12" | "$yellow.outline" | "$yellow.border" | "$yellow.solid" | "$yellow.text" | "$amber" | "$amber.1" | "$amber.2" | "$amber.3" | "$amber.4" | "$amber.5" | "$amber.6" | "$amber.7" | "$amber.8" | "$amber.9" | "$amber.10" | "$amber.11" | "$amber.12" | "$amber.outline" | "$amber.border" | "$amber.solid" | "$amber.text" | "$gray" | "$gray.1" | "$gray.2" | "$gray.3" | "$gray.4" | "$gray.5" | "$gray.6" | "$gray.7" | "$gray.8" | "$gray.9" | "$gray.10" | "$gray.11" | "$gray.12" | "$gray.outline" | "$gray.border" | "$gray.solid" | "$gray.text" | "$mauve" | "$mauve.1" | "$mauve.2" | "$mauve.3" | "$mauve.4" | "$mauve.5" | "$mauve.6" | "$mauve.7" | "$mauve.8" | "$mauve.9" | "$mauve.10" | "$mauve.11" | "$mauve.12" | "$mauve.outline" | "$mauve.border" | "$mauve.solid" | "$mauve.text" | "$slate" | "$slate.1" | "$slate.2" | "$slate.3" | "$slate.4" | "$slate.5" | "$slate.6" | "$slate.7" | "$slate.8" | "$slate.9" | "$slate.10" | "$slate.11" | "$slate.12" | "$slate.outline" | "$slate.border" | "$slate.solid" | "$slate.text" | "$sage" | "$sage.1" | "$sage.2" | "$sage.3" | "$sage.4" | "$sage.5" | "$sage.6" | "$sage.7" | "$sage.8" | "$sage.9" | "$sage.10" | "$sage.11" | "$sage.12" | "$sage.outline" | "$sage.border" | "$sage.solid" | "$sage.text" | "$olive" | "$olive.1" | "$olive.2" | "$olive.3" | "$olive.4" | "$olive.5" | "$olive.6" | "$olive.7" | "$olive.8" | "$olive.9" | "$olive.10" | "$olive.11" | "$olive.12" | "$olive.outline" | "$olive.border" | "$olive.solid" | "$olive.text" | "$sand" | "$sand.1" | "$sand.2" | "$sand.3" | "$sand.4" | "$sand.5" | "$sand.6" | "$sand.7" | "$sand.8" | "$sand.9" | "$sand.10" | "$sand.11" | "$sand.12" | "$sand.outline" | "$sand.border" | "$sand.solid" | "$sand.text" | "$primary" | "$primary.1" | "$primary.2" | "$primary.3" | "$primary.4" | "$primary.5" | "$primary.6" | "$primary.7" | "$primary.8" | "$primary.9" | "$primary.10" | "$primary.11" | "$primary.12" | "$primary.outline" | "$primary.border" | "$primary.solid" | "$primary.text" | "$secondary" | "$secondary.1" | "$secondary.2" | "$secondary.3" | "$secondary.4" | "$secondary.5" | "$secondary.6" | "$secondary.7" | "$secondary.8" | "$secondary.9" | "$secondary.10" | "$secondary.11" | "$secondary.12" | "$secondary.outline" | "$secondary.border" | "$secondary.solid" | "$secondary.text" | "$neutral" | "$neutral.1" | "$neutral.2" | "$neutral.3" | "$neutral.4" | "$neutral.5" | "$neutral.6" | "$neutral.7" | "$neutral.8" | "$neutral.9" | "$neutral.10" | "$neutral.11" | "$neutral.12" | "$neutral.outline" | "$neutral.border" | "$neutral.solid" | "$neutral.text" | "$info" | "$info.1" | "$info.2" | "$info.3" | "$info.4" | "$info.5" | "$info.6" | "$info.7" | "$info.8" | "$info.9" | "$info.10" | "$info.11" | "$info.12" | "$info.outline" | "$info.border" | "$info.solid" | "$info.text" | "$warn" | "$warn.1" | "$warn.2" | "$warn.3" | "$warn.4" | "$warn.5" | "$warn.6" | "$warn.7" | "$warn.8" | "$warn.9" | "$warn.10" | "$warn.11" | "$warn.12" | "$warn.outline" | "$warn.border" | "$warn.solid" | "$warn.text" | "$error" | "$error.1" | "$error.2" | "$error.3" | "$error.4" | "$error.5" | "$error.6" | "$error.7" | "$error.8" | "$error.9" | "$error.10" | "$error.11" | "$error.12" | "$error.outline" | "$error.border" | "$error.solid" | "$error.text" | "$success" | "$success.1" | "$success.2" | "$success.3" | "$success.4" | "$success.5" | "$success.6" | "$success.7" | "$success.8" | "$success.9" | "$success.10" | "$success.11" | "$success.12" | "$success.outline" | "$success.border" | "$success.solid" | "$success.text" | "$transparency" | "$surface" | "$text";
}



  type CssValue<T> = T extends keyof CssProperties ? CssProperties[T] : never

  type Shorthand<T> = T extends keyof PropertyValueTypes ? PropertyValueTypes[T] | CssValue<T> : CssValue<T>

  export interface PropertyTypes extends PropertyValueTypes {
  
	pos: Shorthand<"position">;
	insetEnd: Shorthand<"insetInlineEnd">;
	end: Shorthand<"insetInlineEnd">;
	insetStart: Shorthand<"insetInlineStart">;
	start: Shorthand<"insetInlineStart">;
	flexDir: Shorthand<"flexDirection">;
	p: Shorthand<"padding">;
	pl: Shorthand<"paddingLeft">;
	pr: Shorthand<"paddingRight">;
	pt: Shorthand<"paddingTop">;
	pb: Shorthand<"paddingBottom">;
	py: Shorthand<"paddingBlock">;
	paddingY: Shorthand<"paddingBlock">;
	paddingX: Shorthand<"paddingInline">;
	px: Shorthand<"paddingInline">;
	pe: Shorthand<"paddingInlineEnd">;
	paddingEnd: Shorthand<"paddingInlineEnd">;
	ps: Shorthand<"paddingInlineStart">;
	paddingStart: Shorthand<"paddingInlineStart">;
	ml: Shorthand<"marginLeft">;
	mr: Shorthand<"marginRight">;
	mt: Shorthand<"marginTop">;
	mb: Shorthand<"marginBottom">;
	m: Shorthand<"margin">;
	my: Shorthand<"marginBlock">;
	marginY: Shorthand<"marginBlock">;
	mx: Shorthand<"marginInline">;
	marginX: Shorthand<"marginInline">;
	me: Shorthand<"marginInlineEnd">;
	marginEnd: Shorthand<"marginInlineEnd">;
	ms: Shorthand<"marginInlineStart">;
	marginStart: Shorthand<"marginInlineStart">;
	ringWidth: Shorthand<"outlineWidth">;
	ringColor: Shorthand<"outlineColor">;
	ring: Shorthand<"outline">;
	ringOffset: Shorthand<"outlineOffset">;
	w: Shorthand<"width">;
	minW: Shorthand<"minWidth">;
	maxW: Shorthand<"maxWidth">;
	h: Shorthand<"height">;
	minH: Shorthand<"minHeight">;
	maxH: Shorthand<"maxHeight">;
	bgPosition: Shorthand<"backgroundPosition">;
	bgPositionX: Shorthand<"backgroundPositionX">;
	bgPositionY: Shorthand<"backgroundPositionY">;
	bgAttachment: Shorthand<"backgroundAttachment">;
	bgClip: Shorthand<"backgroundClip">;
	bg: Shorthand<"background">;
	bgColor: Shorthand<"backgroundColor">;
	bgOrigin: Shorthand<"backgroundOrigin">;
	bgImage: Shorthand<"backgroundImage">;
	bgRepeat: Shorthand<"backgroundRepeat">;
	bgBlendMode: Shorthand<"backgroundBlendMode">;
	bgSize: Shorthand<"backgroundSize">;
	bgGradient: Shorthand<"backgroundGradient">;
	rounded: Shorthand<"borderRadius">;
	roundedTopLeft: Shorthand<"borderTopLeftRadius">;
	roundedTopRight: Shorthand<"borderTopRightRadius">;
	roundedBottomRight: Shorthand<"borderBottomRightRadius">;
	roundedBottomLeft: Shorthand<"borderBottomLeftRadius">;
	roundedTop: Shorthand<"borderTopRadius">;
	roundedRight: Shorthand<"borderRightRadius">;
	roundedBottom: Shorthand<"borderBottomRadius">;
	roundedLeft: Shorthand<"borderLeftRadius">;
	roundedStartStart: Shorthand<"borderStartStartRadius">;
	roundedStartEnd: Shorthand<"borderStartEndRadius">;
	roundedStart: Shorthand<"borderStartRadius">;
	roundedEndStart: Shorthand<"borderEndStartRadius">;
	roundedEndEnd: Shorthand<"borderEndEndRadius">;
	roundedEnd: Shorthand<"borderEndRadius">;
	borderX: Shorthand<"borderInline">;
	borderXWidth: Shorthand<"borderInlineWidth">;
	borderXColor: Shorthand<"borderInlineColor">;
	borderY: Shorthand<"borderBlock">;
	borderYWidth: Shorthand<"borderBlockWidth">;
	borderYColor: Shorthand<"borderBlockColor">;
	borderStart: Shorthand<"borderInlineStart">;
	borderStartWidth: Shorthand<"borderInlineStartWidth">;
	borderStartColor: Shorthand<"borderInlineStartColor">;
	borderEnd: Shorthand<"borderInlineEnd">;
	borderEndWidth: Shorthand<"borderInlineEndWidth">;
	borderEndColor: Shorthand<"borderInlineEndColor">;
	shadow: Shorthand<"boxShadow">;
	shadowColor: Shorthand<"boxShadowColor">;
	x: Shorthand<"translateX">;
	y: Shorthand<"translateY">;
	s: Shorthand<"size">;
	sur: Shorthand<"surface">;
}

export type PropertyValue<T extends string> = T extends keyof PropertyTypes
  ? ConditionalValue<PropertyTypes[T] | CssValue<T> | (string & {})>
  : T extends keyof CssProperties
  ? ConditionalValue<CssProperties[T] | (string & {})>
  : ConditionalValue<string | number>