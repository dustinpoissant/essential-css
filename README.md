# Essential CSS

A lightweight, modern CSS framework that provides essential utilities and components for rapid web development.

## Features

- **Lightweight**: Minimal footprint with only the essentials
- **Modern**: Built with modern CSS practices and design principles
- **Flexible**: Utility-first approach with semantic components
- **Dark Mode**: Built-in dark theme support with easy toggling
- **Color Utilities**: Comprehensive background and text color classes
- **Typography**: Clean, readable typography system
- **Components**: Essential UI components like buttons, forms, and navigation

## Documentation

View the complete documentation and live examples at:
**[https://dustinpoissant.github.io/essential-css/](https://dustinpoissant.github.io/essential-css/)**

## Installation

### NPM

```bash
npm install essentialcss
```

Then include the CSS files in your project:
```html
<link rel="stylesheet" href="node_modules/essentialcss/essential.css">
<link rel="stylesheet" href="node_modules/essentialcss/essential-hljs.css">
```

Or import in your CSS/SCSS files:
```css
@import 'essentialcss/essential.css';
@import 'essentialcss/essential-hljs.css';
```

### Download

1. Download the CSS files from the [documentation page](https://dustinpoissant.github.io/essential-css/)
2. Include them in your project:

```html
<link rel="stylesheet" href="path/to/essential.css">
<link rel="stylesheet" href="path/to/essential-hljs.css">
```

### Build from Source

1. Clone the repository:
```bash
git clone https://github.com/dustinpoissant/essential-css.git
cd essential-css
```

2. Install dependencies:
```bash
npm install
```

3. Build minified versions:
```bash
npm run build
```

## Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <link rel="stylesheet" href="https://dustinpoissant.github.io/essential-css/essential.css">
</head>
<body>
    <div class="container">
        <h1 class="tc-primary">Hello, Essential CSS!</h1>
        <button class="btn btn-primary">Get Started</button>
    </div>
</body>
</html>
```

## Development

- `npm run build` - Build minified CSS files
- `npm run build:watch` - Watch for changes and rebuild automatically

## License

ISC License - feel free to use in personal and commercial projects.

---

**[View Documentation](https://dustinpoissant.github.io/essential-css/)** | **[Report Issues](https://github.com/dustinpoissant/essential-css/issues)**
