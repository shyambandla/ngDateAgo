# Installation

install using npm

```
npm i ng-date-ago
```

or

add directly using ng add

```
ng add ng-date-ago
```

# Usage

import to app module

```typescript
import { NgDateAgoModule } from 'ng-date-ago/';
@NgModule({
  declarations: [
   ...
  ],
  imports: [
    ...,
    NgDateAgoModule
  ],
  providers: [
    ],
  bootstrap: [...]
})
export class AppModule { }
```

in html

```html
<p>{{isoDateString | dateAgo}}</p>
```
