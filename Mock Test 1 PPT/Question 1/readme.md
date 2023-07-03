**Question 1**

**1.Explain all the CSS positions(static, fixed, sticky, relative, absolute) with one code example each**

*Static positioning:* It is the default position value for the elements. These elements are independent of the top, right, bottom, left and the z-index properties and therefore not affected by it.

```
.static-position {
  position: static;
}
```

*Fixed position:* Fixed positioning as the name suggests are fixed and does not move even when the page is scrolled. It is commonly used in the header and navbar sections.

*Relative position:* Relative positioning is still part of the document flow and we can add additional properties like top, bottom, right and left.

*Absolute position:* Absolute positioning is completely removed from the normal document flow and is completely modifiable. It allows to precisely control the elements top, right, bottom, left positions.

*Sticky positioning:* It is a combination of the relative and fixed position and the element is positioned according to the normal control flow.Sticky positioning is useful for creating elements that "stick" to a specific position as the user scrolls.
