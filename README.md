# EERE Application Style Guide Accessibility Notes

## Side/Left Navigation
For navigation links, ensure that the purpose of each link can be determined from the link text alone or from the link together with its programmatically determined link context.

Avoid using the same link text for different destinations, and avoid vague link text like “read more” or “click here.”

https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html

## Primary/Extended Color Palette
The minimum color contrast for text against background is 4.5:1 for normal text (under 18 point) and 3:1 for large text (18 point and above).

This requirement does not apply to logos, inactive interface components, or decorative text.

Useful tools for determining color contrast include the Colour Contrast Analyser and WEBAim Contrast Checker.
https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html

## Header Styles
Headings should describe the topic or purpose of the section.

Heading levels should not be skipped. A heading 1 should be followed by another heading 1 or a heading 2; never a heading 3.
https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html

## Links
For links, ensure that the purpose of each link can be determined from the link text alone or from the link together with its programmatically determined link context.

Avoid using the same link text for different destinations, and avoid vague link text like “read more” or “click here.”
https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html

## Forms
If possible, forms should not be subject to a time limit to allow users to complete the form at their pace. If a time limit needs to be in place, for example, for security reasons, the user should have the option to turn it off or extend it.
All form controls need labels identifying their purposes; this is usually done with the <label> element.
  
Forms should be grouped using the <fieldset> and <legend> elements. Clear instructions should be provided, explaining how to complete the form and use the controls. User inputs should be validated, and the user should have the ability to undo changes and confirm data entry. Users should be notified of successful data entry and errors, along with instructions on correcting them.
  
For more information about constructing accessible forms, see these tutorials: https://www.w3.org/WAI/tutorials/forms/
https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html

## Tables
Tables should be used to present data; not for formatting. Header cells should have the <th> element, while data cells use <td>. 
  
Complex tables (e.g., with merged cells) may require more involved markup.

For information on creating accessible tables, see these tutorials: w3.org/WAI/tutorials/tables/
https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html


