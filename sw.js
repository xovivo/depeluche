// importScripts('js/sw-utils.js');
newFunction();

const STATIC_CACHE    = 'static-v3';
const DYNAMIC_CACHE   = 'dynamic-v2';
const INMUTABLE_CACHE = 'inmutable-v2';


const APP_SHELL = [
    // '',
    'index.html',
    'app.js',
    'cotizapen-1.js',
    'cotizapen-2.js',
    'fetch-2.js',
    'fetch-3.js',
    'fetch-4.js',
    'login.js',
    'js/slide.js',
    'js/users.js',
    'js/usuario.js',
    'js/venta.js',
    'js/ventas.js',
    'js/ventasfechacliente.js',
    'js/vistas.js',
    'css/bootstrap.min.css',
    'css/font-awesome.css',
    'css/AdminLTE.min.css',
    'css/_all-skins.min.css',
    'css/style.css',
    'css/datatables/jquery.dataTables.min.css',
    'css/datatables/buttons.dataTables.min.css',
    'css/datatables/responsive.dataTables.min.css',
    'css/bootstrap-select.min.css',
    'assets/bootstrap/js/html5shiv.min.js',
    'assets/bootstrap/js/respond.min.js',
    'assets/js/modernizr.custom.js',
    'js/bootstrap.min.js',
    'js/jquery-3.1.1.min.js',
    'js/app.min.js',
    'js/valus.js',
    'usuarios.js',
    'totales.js'
    
];

const APP_SHELL_INMUTABLE = [
    'https://fonts.googleapis.com/css?family=Quicksand:300,400',
    'https://fonts.googleapis.com/css?family=Lato:400,300',
    'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
    'https://cdn.jsdelivr.net/npm/pouchdb@7.0.0/dist/pouchdb.min.js'

];



self.addEventListener('install', e => {


    const cacheStatic = caches.open( STATIC_CACHE ).then(cache => 
        cache.addAll( APP_SHELL ));

    const cacheInmutable = caches.open( INMUTABLE_CACHE ).then(cache => 
        cache.addAll( APP_SHELL_INMUTABLE ));



    e.waitUntil( Promise.all([ cacheStatic, cacheInmutable ])  );

});


self.addEventListener('activate', e => {

    const respuesta = caches.keys().then( keys => {

        keys.forEach( key => {

            if (  key !== STATIC_CACHE && key.includes('static') ) {
                return caches.delete(key);
            }

            if (  key !== DYNAMIC_CACHE && key.includes('dynamic') ) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil( respuesta );

});





self.addEventListener( 'fetch', e => {

    let respuesta;

    if (e.request.url.includes('https://www.dpeluche.com/api/totales.php')) {

        // return respuesta????
        respuesta = manejoApiMensajes( DYNAMIC_CACHE, e.request );

    } else {

        respuesta = caches.match( e.request ).then( res => {

            if ( res ) {
                
                actualizaCacheStatico( STATIC_CACHE, e.request, APP_SHELL_INMUTABLE );
                return res;
                
            } else {
    
                return fetch( e.request ).then( newRes => {
    
                    return actualizaCacheDinamico( DYNAMIC_CACHE, e.request, newRes );
    
                });
    
            }
    
        });

    }

    e.respondWith( respuesta );

});


// tareas asíncronas
self.addEventListener('sync', e => {

    console.log('SW: Sync');

    if ( e.tag === 'nuevo-post' ) {

        // postear a BD cuando hay conexión
        const respuesta = postearMensajes();
        
        e.waitUntil( respuesta );
    }

});







function newFunction() {
    importScripts('https://cdn.jsdelivr.net/npm/pouchdb@7.0.0/dist/pouchdb.min.js');
    importScripts('js/sw-utils.js');
}

