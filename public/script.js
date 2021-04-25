document.querySelector(".profile_share").addEventListener("click", () => {
    //console.log(document.querySelectorAll(".profile_share"))
    if(document.querySelector(".share_card").classList.contains('active')) {
        
        document.querySelector(".share_card").classList.toggle('active');
        document.querySelector(".profile_share").classList.toggle('hover');

        //document.querySelector(".share_card").style.opacity="0";
        //console.log(li.classList);
    } else {
        document.querySelector(".share_card").classList.add('active');
        document.querySelector(".profile_share").classList.add('hover');
        //document.querySelector(".share_card").style.opacity="1";
    }
});