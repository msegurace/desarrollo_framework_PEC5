### a) ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?
1. Los formularios dirigidos por plantilla utilizan "FormsModule", mientras que los formularios reactivos utilizan "ReactiveFormsModule".
2. Los primeros son asincrónicos mientras los segundos son en su mayoría sincrónicos.
3. En los primeros la lógica reside en la plantilla mientras que en los segundos, la lógica reside principalmente en el componente.
   
### b) ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?
1. La directiva ngModel abstrae las partes internas de los tipos de entrada a los desarrolladores, lo que facilita el desarrollo rápido de aplicaciones basadas en formularios. Se trata básicamente de un enlace entre algo que tenemos en la definición del componente con un campo de formulario del template (vista) del componente.
   
2. El evento ngModelChange se ejecuta cuando se cambia el valor en la propiedad asociada a un ngModel.
   
### c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?
Los estados son fases por las que pasa un control dentro del formulario. Angular nos da tres pares de clases para cualquier estado en el que se encuentre un formulario o control:

1. ng-touched y ng-untouched: nos indica si el control ha sido "tocado" o no, es decir, ha recibido el foco. Se aplicará ng-touched si la condición es verdadera y ng-untouched si no.
2. ng-dirty y ng-pristine: nos indica si el valor del control ha sido cambiado. Se aplica ng-dirty si ha sido cambiado y ng-pristine si no.
3. ng-valid y ng-invalid: nos indica si el valor del control es válido o no, es decir, si cumple la condición de validación. se aplicará la clase ng-valid si lo es y ng-invalid si no lo es.
   
### d) ¿Qué ventajas aportan los FormGroup en la composición de formularios?
Un FormGroup agrega los valores de cada FormControl secundario en un objeto, con cada nombre de control como clave. Calcula su estado reduciendo los valores de estado de sus hijos. Por ejemplo, si uno de los controles de un grupo no es válido, todo el grupo deja de serlo.