# webComics

 O Projeto consiste num site para uma loja de quadrinhos. Este site contem uma lista com 50 quadrinhos, cada um com seus detalhes, além dos 10 mais lidos.

 Primeiro deve ser feita uma conta para ter acesso a api da marvel : https://developer.marvel.com.

 Após realizar o cadastro, você vai receber 2 keys. A public key é a que será utilizada.

 Para executar o projeto em sua maquina, é recomendado a utilização de um localhost, com o domínio registrado no site da marvel na parte de "my developer account" : https://developer.marvel.com/account.
 
 Domínio registrado, substitua a key no arquivo "comics.js" pela public key que você recebeu. 
  
  ex: 
  		https://gateway.marvel.com:443/v1/public/characters/1009610/comics?limit=50&apikey=suaKey

 Feito isso, a aplicação irá funcionar.


 Dificuldades:
   Tive um pouco de dificuldade com a utilização da api da Marvel, visto que não sabia AngularJS e aprendi enquanto fazia o projeto.
   Por algum motivo, que não sei explicar, o ng-route não quis funcionar. Dado esse problema, eu fiz uma aplicação com duas páginas, a index e a lista de quadrinhos, para não sobrecarregar a index.
   Não implementei a div com os 10% mais raros, mas segue o mesmo principio dos mais lidos. Tanto que o código é basicamente o mesmo, só muda a forma como é definido o tamanho do array.

 email: brunocavalcanti48@gmail.com
 Nome: Bruno de Lima Cavalcanti