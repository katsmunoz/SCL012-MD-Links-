const fetchUrl = require("fetch").fetchUrl;
// const urls = ['https://nodejs.org/','https://medium.com/coding-and-web-development/learnyounode']

const getData = (url) => { //lee el estatus de un link
  return new Promise((resolve, reject) =>{
    fetchUrl(url, (error, meta, body) =>{
      if(meta){
        console.log("el estado del sitio", url, "es: ", meta.status);
        resolve(meta.status);
      }
    })
  })
}

// getData('https://nodejs.org/') //aca le paso una url para probar la funcion de arriba

Promise.all(urls.map(url => getData(url)
.catch(err => 'broken')))
  .then(results => console.log("Promise.all => results.length:", results.length));