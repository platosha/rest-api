# rest-api

A Polymer element providing declarative data bindings to REST API.

## Example

```html
<rest-api url="http://localhost:3000">
  <rest-api-resource name="books" collection="{{books}}"></rest-api-resource>
</rest-api>
```

## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install

## Running Development Server

`<rest-api>` needs a REST API (sic) to work with. This repository includes a
development server configuration based on
[BrowserSync](https://www.browsersync.io/) and
[JSON Server](https://github.com/typicode/json-server), that is very handy to
use. Just install npm dependencies:

    npm install

Then you can run it with:

    npm start

Once running, your browser should automatically navigate to the element's page.
By default, it is served from `http://localhost:3000/components/rest-api/`.

You can also browse the API at `http://localhost:3000/api/`. The mock data is
generated automatically and stored in db.json file. To regenerate the API data,
delete the db.json file and start the server again.

## Running tests

Navigate to the `/test` directory of the element to run its tests, e.g.:
`http://localhost:3000/components/rest-api/test/`

The tests are done with the [web-component-tester](https://github.com/Polymer/web-component-tester).

## License

Copyright 2015 Anton Platonov <platosha@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
