import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'c2a03d3458174e58af359814ad926f98', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
