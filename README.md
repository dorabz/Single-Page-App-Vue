# Advanced-web-development---project-3

This is a repo of project made as a part of university course.

FER - Advanced web development - 3. project

application link on Heroku: https://web2-vue.herokuapp.com

list of implemented features in Vue:
- interpolation / one-way binding: yes, src / views / DataBind.vue: 5
- two-way binding: yes, src / views / DataBind.vue: 8 -: 9
- methods: yes, src / views / MethodComputed.vue (NOTE: not an example of computed prop -  name confusion)
: 17 -: 22
- computed properties: yes, src / views / DataBind.vue: 24 -: 28 &: 12
- at least one scoped style: yes, src / components / HelloWorld.vue: 18 -: 40
- use at least one lifecycle hook: yes, component src / components / Converter.vue: 33 -: 37 (mounted)
- routing (multiple pages): yes, src / router / index.js whole file
- use history mode, the application must be bookmarkable, so that links work (not only on root, but also heroku-nesto.com/stranica1 heroku-nesto.com/stranica2): yes, src / router / index.js: 48 - : 51
- 404 page dynamic routing: yes, src / router / index.js: 42:: 45, src / views / page404 component
- (at least) two components
        - component without state, use properties: yes, component src / components / Book.vue whole file, props: 8
        - component with state: yes, component src / components / Converter.vue: 1 -: 32
- at least one component must broadcast at least one event: yes, component src / components / Child.vue: 11
- store: yes, src / store / index.js, view src / views / Store.vue
- perform asynchronous (lazy, if necessary) loading of some part of the application (pages or components)
: yes, src / main.js: 6, used lazy component src / components / LazyComponent.vue

INSTRUCTIONS FOR VIEWING THE PAGE:
Clicking on the buttons at the top of the page reviews the implemented items listed in the links.

dynamic routing with a 404 page - typing any path not listed in the links will give you a 404 error page and the links still visible above that you can return to

Scoped style & Event component & Lazy load comp - scoped style visible as a component that has pink text on the page and a reduced image, event component visible as text I want to be updated by pressing gumn Update text, the text turns into Awesome, lazy load - asynchronous loading of a component that has Snorlax text and image.

Data binding - 1 & 2 + Computed prop - Two way data binding can be tested by editing the box in which it says Type message and see ouput, which will automatically update the bottom view Message is and one way data binding that can change just run and entering it in the box does not change anything on the previous box. Computed properties allows the reverse message to be displayed.

Methods - by clicking the Click to change text to uppercase button, the upper text changes to uppercase

Store - visible as taking and adding 5 points

Component with props - visible print of favorite books

Component stateful & Lifecycle hook - Component stateful visible as interactive boxes that show where the number 5 is added and subtracted, lifecycle hook - visible as current date and time
