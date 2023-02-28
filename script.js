let startButton=document.getElementById("start")
let stopButton = document.getElementById("pause")
let resetButton = document.getElementById("resett")
let castButton = document.getElementById("cast")

let hours=00
let mins=00
let secs=00
let milis=00


startButton.addEventListener("click", function(){
    timer=true;
    goToWatch()
})
stopButton.addEventListener("click",function(){
    timer=false
})
resetButton.addEventListener("click",function(){
    timer=false
    hours=0
    mins=0
    secs=0
    milis=0
    document.getElementById("hour").innerHTML="00:"
    document.getElementById("min").innerHTML="00:"
    document.getElementById("sec").innerHTML="00:"
    document.getElementById("mili").innerHTML="00"
})

castButton.addEventListener("click",function(){
   let a= document.getElementById("hour").innerHTML
    let b=  document.getElementById("min").innerHTML
     let c=  document.getElementById("sec").innerHTML
      let d=  document.getElementById("mili").innerHTML
    document.getElementById("dis").innerHTML=`Cast time is -  ` + a+b+c+d

})

function goToWatch(){
    if(timer==true){
        milis++

        if(milis==100){
            secs++
            milis=0
        }
        if(secs==60){
            mins++
            secs=0
        }
        if(mins==60){
            hours++
            mins=0
            secs=0
        }

        let h=hours
        let m=mins
        let s=secs
        let mi=milis

        if(hours<10){
            h="0"+h +":"
        }
        if(mins<10){
            m="0"+mins +":"
        }
        if(secs<10){
            s="0"+s +":"
        }
        if(milis<10){
            mi="0"+mi 
        }

        document.getElementById("hour").innerHTML=h
        document.getElementById("min").innerHTML=m
        document.getElementById("sec").innerHTML=s
        document.getElementById("mili").innerHTML=mi
        setTimeout(goToWatch,10)
    }
}