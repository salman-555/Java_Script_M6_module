    
  function hello(){
    const url = "https://api.unsplash.com/photos/random?client_id=qjxHr9rm9uXZKx7BOIiPawL_k01ZTr9xDYr30JcIbnU&query=car";
    
      fetch(url).then((res)=>{
        var z = res.json();
        console.log(z);
    })

    // console.log(url);
    //    const x =
    // url.then((res)=>{
    //     console.log(res.json());
    // })

 }
 hello();

 BbMzlKYz5_A-KNspJmGXTIY6BaYqjJ1IieArWso_ioc