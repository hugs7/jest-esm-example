## Jest ESM Example

To get around the lack of support for ESM with jest, use a babel transform to simplify the `test` script with

```
    "scripts": {
        "test": "npm run build && jest",
        "build": "babel src tests --out-dir dist"
    },
```
