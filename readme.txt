link aplikacije na Heroku: https://web2-vue.herokuapp.com 
lista napravljenih stvari:
- interpolation/one-way binding : da, src/views/DataBind.vue :5
- two-way binding : da, src/views/DataBind.vue :8 - :9
- methods : da, src/views/MethodComputed.vue (NAPOMENA: nije primjer za computed) :17 - :22
- computed properties : da, src/views/DataBind.vue :24 - :28 & :12
- barem jedan scoped style : da, src/components/HelloWorld.vue :18 - :40
- koristiti barem jedan lifecycle hook : da, komponenta src/components/Converter.vue :33 - :37 (mounted)
- routing (više stranica) : da, src/router/index.js  cijeli file
- use history mode, aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i heroku-nesto.com/stranica1
heroku-nesto.com/stranica2) : da, src/router/index.js  :48 - :51
- dinamičko usmjeravanje s 404 stranicom ("catch all") : da, src/router/index.js :42 -:45, komponenta src/views/page404
- (barem) dvije komponente
        -- komponenta bez stanja, koristiti properties : da, komponenta src/components/Book.vue :8
        -- komponenta sa stanjem : da, komponenta src/components/Converter.vue :1 - :32
- barem jedna komponenta mora emitirati barem jedan event : da, komponenta src/components/Child.vue :11
- store : da, src/store/index.js, view src/views/Store.vue
- ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente) 
: da, src/main.js :6, korištena lazy komponenta src/components/LazyComponent.vue 