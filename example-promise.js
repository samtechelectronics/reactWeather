function getTempCallBack (location, callback){
  callback(undefined,78);
  callback('city not found');
}
getTempCallBack('america', function(err,temp){
  if (err){

    console.log('err',err);

  }else{
    console.log('success',temp);
  }

});
function getTempPromise (location) {
  return new Promise(function (resolve,reject)
  {
    setTimeout(function (){
      resolve(79);
      reject('citi not found ');
    },2000);


});
}
getTempPromise('jos').then(function(temp){
    console.log('promise success',temp);
},function(err){
  console.log('promise error',error);

})
