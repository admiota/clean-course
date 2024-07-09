
type Size = '' |'S' | 'M' | 'XL';
class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) { }

    isProductReady(): boolean{
        console.log('entra2')
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string>this[key]).length <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if ((<number>this[key]) <= 0) throw Error(`${key} is zero`);
                    break;
                default:
                    throw Error(`${typeof this[key]} is not supported`);
            }
        }
        console.log('producto lusti')
        return true;
    }
    
    toString() {
        //No Dry
        // if (this.name.length <= 0) throw new Error('name is empty');
        // if (this.price === 0) throw new Error('price is zero');
        // if (this.size === '') throw new Error('size is empty');
        
        if (!this.isProductReady()) return;

        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {
    const bluePants = new Product('Pantalones Cortos',50,'S');
    console.log(bluePants.toString());
})();