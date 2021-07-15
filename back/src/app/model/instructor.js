let nome = ['Marcelo', 'Leticia', 'Rafael'];

function getInstructor(){
    console.log("servico:" + nome) 


}
setInterval(function(){
    getInstructor()
}, 3000);


module.exports = function(){
    return [nome];

}