document.querySelector(".profile_share").addEventListener("click", () => {
    console.log(document.querySelectorAll(".profile_share"))
    if(document.querySelector(".share_card").classList.contains('active')) {
        
        document.querySelector(".share_card").classList.toggle('active');
        document.querySelector(".share_card").style.display="none";
        //console.log(li.classList);
    } else {
        document.querySelector(".share_card").classList.add('active');
        document.querySelector(".share_card").style.display="flex";
    }
});