(() => {

    interface Product { 
        id:   number;
        name: string;
    }


    class ProductService {
        private httpAdapter: any;

        getProduct(id: number) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
             console.log('Guardando en base de datos', product );
        }
    }

    class MailerService { 
        private masterEmail: string = 'micorreo@gmail.com';

        //este es el de notifyClients()
        sendEmail(emailList: string[], template:'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', template);
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService: ProductService;
        private mailerService: MailerService;
        
        constructor(productService: ProductService, mailerService: MailerService) {
            this.productService = productService;
            this.mailerService = mailerService;
        }

         loadProduct( id: number ) {
             this.productService.getProduct(id);
         }
    
         saveProduct( product: Product ) {
             this.productService.saveProduct(product);
         }
    
         notifyClients() {
             this.mailerService.sendEmail(['micorreo@gmail.com'],'to-clients')
         }
    }
    
    class CartBloc {
        private itemsInCart: Object[] = [];


        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }
    
    const productService = new ProductService();
    const mailer = new MailerService();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();

    cartBloc.onAddToCart(10);








})();