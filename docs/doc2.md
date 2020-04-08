---
id: doc2
title: Document Number 2
---

export const Math = ({ code }) => (
  <img className='tex'
    src={`https://math.now.sh?from=${encodeURIComponent(code)}`}
    style={{ height: "100%", verticalAlign: "middle" }}
  />
);

This is a link to [another document.](doc3.md) This is a link to an [external page.](http://www.example.com)

sdsds<Math code="\LaTeX" />asdadas
