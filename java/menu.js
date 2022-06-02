function calcular(operacion)
{

 
    var categoriavalor=(document.getElementById('categoriavalor').value);
    var cantidad=parseInt(document.getElementById('cantidad').value);
    
    switch(operacion)
    {
        case 'resumen':
            if(categoriavalor == "estudiante"){
                document.getElementById('result').value="Total a pagar: $" + ((200*0,20)*cantidad);
                break;
            }
            if(categoriavalor == "trainee"){
                document.getElementById('result').value="Total a pagar: $" + ((200*0,50)*cantidad);
                break;
            }
           if(categoriavalor == "junior"){
                document.getElementById('result').value="Total a pagar: $" + ((200*0,85)*cantidad);
                break;
            }
        case 'borrar':
            window.location.reload();

           
        
       
    }
}

