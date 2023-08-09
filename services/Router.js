const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach((a) => {
            a.addEventListener('click', (e) => {
                e.preventDefault()
                const href = e.target.getAttribute('href')
                Router.go(href)
            })
        })
        window.addEventListener('popstate', e => {
            Router.go(e.state.route, false)
        })
        Router.go(location.pathname)
    },
    go: (route, addToHistory = true) => {
        if(addToHistory) {
            history.pushState({route}, null, route)
        }
        let pageElement
        const rootEl = document.querySelector('main')
        switch (route) {
            case '/':
                pageElement = document.createElement('menu-page')
                break;
            
            case '/order':
                pageElement = document.createElement('order-page')
                break;
        
            default:
                if(route.startsWith('/product-')) {
                    pageElement = document.createElement('details-page')
                    pageElement.dataset.productId = route.substring(route.lastIndexOf('-')+1)
                }
                break;
        }
        rootEl.innerHTML = ''
        rootEl.appendChild(pageElement)
        scrollY = 0
    },
}

export default Router