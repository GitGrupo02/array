var arreglo =[];

arreglo[0]= 0;
arreglo[1]= 1;
arreglo[2]='hola';

// agregar en la ultima posicion 
arreglo.push('nuevo dato');


// agregar en la primera posicion 
arreglo.unshift('primero');

// eliminar ultimo elemento 
// arreglo.pop();

// eliminar primer elemento 
// arreglo.shift();

// eleminar por posicion determinada 
arreglo.splice(4,0,43,87);

// arreglo[3]= 23;

 console.log(arreglo);

for(var i=0; i < arreglo.length; i++){
    console.log('for normal: '+arreglo[i]);
}

for(var i in arreglo){
    console.log('for in: '+arreglo[i]);
}

for(var i of arreglo){
    console.log('for of: '+i);
}
// x ='2';
// y ='2';
// console.log(x + y);
// x = parseInt(x);
// y = parseInt(y);

// console.log(x + y);

