# Form Input Effec
When you click on a form input, the label moves up and the input line becomes thicker. This effect is used in many forms, and it's a nice way to make the user focus on the input.

## Usage
<ul>
<li>Take innerHTML from label as innerText and use split().</li>
<li>use map() to convert each letter into span element. the style will be automatically applied as per css</li>
<li>in span element add transition effect</li>
<li>use join() to convert array of span elements into string.</li>
</ul>
