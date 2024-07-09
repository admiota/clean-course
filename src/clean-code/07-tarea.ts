(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents{
        constructor() { }
        
        setFocus() {};
        getValue() {return 'Funcionando...'};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement
    interface InputProps {
        id: string;
        type: HtmlType;
        value: string;
        placeholder: string
    }

    class InputElement{
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents
        constructor({ id, type, value, placeholder }: InputProps) {
            this.htmlElement = new HtmlElement(id, type);
            this.inputAttributes = new InputAttributes(value, placeholder);
            this.inputEvents = new InputEvents();
        }
    }
    const nameField = new InputElement({
        id:'id',
        type: 'input',
        value: 'Enter first name',
        placeholder: 'txtName'}
    )
    //const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()