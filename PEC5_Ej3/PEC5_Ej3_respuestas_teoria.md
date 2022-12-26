### a) ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?
**FormControl:** Es la parte mas pequeña que se utiliza para crear formularios en angular, con este podemos dar seguimiento a un campo sin la necesidad de crear un formulario completamente.

Para utilizar un FormControl importaremos ReactiveFormsModule en el app.module.ts y en el archivo de typeScript correspondiente crearemos variables del tipo FormControl:

    myVariable: FormControl = new FormControl();

En el código HTML vincularemos el FormControl de la siguiente manera, por ejemplo:

    <input type="text" [formControl]="myVariable">

Para obtener el valor actual del Input en TypeScript:

    const text = this.myVariable.value;

o interpolando en HTML;

    <div>
        {{myVariable.value}}
    </div>

**FormGroup:** Nos permite agrupar FormControls pudiendo controlar los controles individualmente o como un grupo, por ejemplo, podríamos ver el valor de un control individual o validar el formulario completamente si está contenido en el grupo.

Se utiliza a nivel del elemento formulario con la propiedad `[formGroup]` y a en cada elemento contenido dentro del formulario con `formControlName`

A nivel de TypeScript se declararía una variable del tipo FormGroup y dentro de ella se podrían declarar/inicializar los componentes FormControl que están dentro de ese grupo.

    public formGroup: FormGroup = new FormGroup( {
        xxx: new FormControl(null, validators.required....)
        .....
    });

**FormBuilder:** Permite construir formularios avanzados de una manera más simple y limpia que FromGroup. Para usarlo no es necesario cambiar la template, su uso sería el que sigue:

1. Importamos FormBuilder en el archivo TypeScript del componente
2. declaramos una variable FormGroup sin inicializarla.
3. Inyectamos FormBuilder como dependencia en el constructor.
4. Crea un FormGroup usando la instancia FormBuilder del constructor.
5. Inicializamos cada control con un valor inicial en el primer parámetro y los validadores necesarios en el siguiente.

### b) Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.

| Validador | Descripción |
| :--- | ---: |
| min | Especifica el valor mínimo del control |
| max | Especifica el valor máximo del control |
| required | Especifica que el control tiene que tener algún valor |
| requiredTrue | Indica que el valor del control debe ser true |
| email | Requiere que el control pase un test de validación para saber si es una dirección de correo electrónico válida |
| minLength | Indica la longitud mínima del contenido del control |
| maxLength | Indica la longitud máxima del contenido del control |
| pattern | Indica que el contenido del control debe cumplir con una expresión regular dada |
| nullValidator | Este validado no realiza ninguna operación |
| compose | Junta múltiples validadores en una función única que devolverá la unión de todos los errores que tenga el control |
| compose | Junta múltiples validadores asincrónicos en una función única que devolverá la unión de todos los errores que tenga el control |

### c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?