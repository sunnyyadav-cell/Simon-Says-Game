let gameseq =[];
let userseq = [];
let maxscore = 0;
let stared = false;
let level = 0;

let colors = ["red" ,"green" , "purpule" , "sky"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function()
{
      if(stared == false)
      {
        console.log("Game Is Started..")
        stared = true;
        levelup();
      }
});

function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } ,500);

}


function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } ,500);

}

function levelup()
{
    userseq = [];
    level++;
    maxscore = Math.max(maxscore , level);
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randcolor = colors[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}

function checkans(indx)
{
  //  let indx = level - 1;
    if(userseq[indx] == gameseq[indx])
    {
        if(userseq.length == gameseq.length)
        {
            setTimeout(levelup, 1000);
        }
    }
    else{
        document.querySelector("body").style.backgroundColor = "red";
        h2.innerHTML = `Game Over ! Your Score was <b>${level}</b> <br> Highest Score -
        <b>${maxscore}</b><br>Press Any Key To Start`;
        reset();
    }
}

function btnpress()
{
    console.log(this);
    let btn = this;
    let Usercolor = btn.getAttribute("id");
    console.log(Usercolor);
    userflash(btn);
    userseq.push(Usercolor);

    checkans(userseq.length -  1);
}
let allbtn = document.querySelectorAll(".btn");

for(btn of allbtn)
{
    btn.addEventListener("click" , btnpress);
}


function reset()
{
    stared = false;
    gameseq = [];
    userseq = [];
    level = 0;
}


