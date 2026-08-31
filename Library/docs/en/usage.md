# Usage

## Framework / library

The canonical component form used by the documentation is:

```jsx
<Allah className="" size="" style="" />
```

Use the corresponding framework adapter and import the icon from its semantic category. The component accepts the class, size and style values shown above.

## Native HTML

The canonical native HTML form is:

```html
<islamic-icons categories="Allah" class="" size="" style="" />
```

If the application does not register the custom element, reference the local SVG asset directly:

```html
<img src="/assets/icons/mosque/mosque/original.svg" alt="Mosque">
```

No runtime request to the upstream icon API is required to render local assets.
