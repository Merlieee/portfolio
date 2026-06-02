// Splits text on break markers, inserting responsive <br>s.
// [[d]] = break only on desktop, [[m]] = break only on mobile.
// Place a space before the marker so the line still spaces correctly
// when the break is hidden.
export function withBreaks(text) {
  return text.split(/(\[\[d\]\]|\[\[m\]\])/).map((part, i) => {
    if (part === '[[d]]') return <br key={i} className="hidden md:inline" />
    if (part === '[[m]]') return <br key={i} className="md:hidden" />
    return part
  })
}
