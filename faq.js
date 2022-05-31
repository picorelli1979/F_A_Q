const itensPerguntasERespostas = document.querySelectorAll('.iten');

itensPerguntasERespostas.forEach(function(iten) {

   iten.addEventListener('click', function() {

     const estaAtiva = iten.classList.contains('ativo')

     if(!estaAtiva) {

     itensPerguntasERespostas.forEach(function(iten){

     iten.classList.remove('ativo')

   })

      iten.classList.add('ativo')

  } else {

      iten.classList.remove('ativo')

  }

})

})


