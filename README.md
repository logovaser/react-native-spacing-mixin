# React Native spacing mixin

Handy spacing mixin like in Bootstrap 4 (https://getbootstrap.com/docs/4.0/utilities/spacing/)

### Usage
```jsx
import {spacing} from 'react-native-spacing-mixin'

//
// your component code here
//

const styles = StyleSheet.create({
    container: {
        ...spacing('px'),
        // Equivalent to
        // paddingHorizontal: 18,
    },
    card: {
        ...spacing('p'),
        // Equivalent to
        // padding: 18,
    },
    avatar: {
        ...spacing('mr', .5),
        // Equivalent to
        // paddingRight: 9,
    },
});

```

### Custom base spacing
You can specify custom base spacing for the whole app
```jsx
import {spacingConf} from 'react-native-spacing-mixin'

spacingConf.spacing = 40;

```
