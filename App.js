import { loadData } from './services/Menu.js';
import Router from './services/Router.js';
import Store from './services/Store.js';

import page from './components/index.js';

const {MenuPage, DetailsPage, OrderPage} = page

window.app = {}
app.store = Store
app.router = Router

window.addEventListener("DOMContentLoaded", () => {
    app.router.init()
    loadData()
});