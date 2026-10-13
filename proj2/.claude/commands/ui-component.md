---
description: Create a UI Component in /components
argument-hint: Compoenent name | Component summary
---

## Context

Parse $ARGUMENTS to get the following values:

- [name]: Create the component file in `src/components`
- [summary]: Use a functional component with the name in PascalCase

## Task

Make a UI component according to the [name] and [summary] provided, following these guidelines:

- Create the component file in `src/components/[summary].tsx`
- Use a functional component with the name [name]
- Reference the [summary] when making the component

## Variants

- Add the following variants for the component using the colours from the theme variables in the @src/index.css:

1. light
2. dark

- Support common patterns like disabled states and sizes where appropriate (sm, md, lg, defaulting to md when no preference is passed)

## Testing

- To be done in future

## Previews

- Add the component to the `@src/pages/preview` to test the component.
