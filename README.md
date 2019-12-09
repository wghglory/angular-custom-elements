# Angular custom elements in React app

![img1](https://angular.io/generated/images/guide/elements/customElement1.png)

![img2](https://angular.io/generated/images/guide/elements/createElement.png)

## Convert an Angular Component to a Custom Element

1. In angular app, run `ng build --prod --output-hashing none` to build without hash in file names.

1. Copy dist folder's files into react project.

1. Add your component to entryComponents. This is required for any component that is defined, but not directly declared in the app.
1. Implement the ngDoBootstrap method to manually bootstrap that app.
1. Call createCustomElement to covert Angular's component architecture to native DOM APIs.

## References

- <https://angular.io/guide/elements>
- <https://medium.com/@balramchavan/building-simple-custom-web-element-using-angular-v6-element-667b5f02c138>
- <https://blog.angulartraining.com/tutorial-how-to-create-custom-angular-elements-55aea29d80c5>
- <https://medium.com/@tomsu/building-web-components-with-angular-elements-746cd2a38d5b>
- <https://medium.com/vincent-ogloblinsky/export-angular-components-as-custom-elements-with-angular-elements-a2a0bfcd7f8a>
