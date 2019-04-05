# Simple HTML Styled Text

I'm looking for a simple rich text renderer for spark that will display HTML-like markup.  Any tag other than span will be ignored.  The span tag will be able to have some number of classes assigned that will be used to style the rendered text.  The classes will be able style text in the following ways:

* color, opacity
* bold, italic, underline
* multiple classes can be applied to a run of text
* when multiple classes are applied follow html rules for style precedence
* The code to render and the css to apply would be provided as separate arguments to the renderer
* This would be used standalone within a new 

Initially I'm planning on using this to be able to render the output of a syntax highlighter component https://prismjs.com/.

The included node program index.js gives a brief example of using prismjs to generate some HTML that I would like to be able to render.

**NOTE:** I'm not looking for you to be write the pieces that convert JS to HTML.  I'm only looking to be able to render HTML-like content of the form shown.

Given this Javascript

```
function helloworld() {
  if (true) {
    console.log('hello world')
  }
}  
```

prismjs will emit the following HTML

```
<span class="token keyword">function</span> <span class="token function">helloworld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>  
```

This is an example of the CSS I'd like to be able to render.  https://github.com/PrismJS/prism/blob/master/themes/prism-dark.css

**NOTE:** You only have to worry about the styling that is applied to the span tags for now.  You can ignore the parts of .css that are not needed to style the spans given the guardrails in the list above. (eg no need to margins etc... just ignore them).



