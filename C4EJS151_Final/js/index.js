const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
    const imgContainer = document.querySelector('.aspect-ratio-169')
    const dotItem =document.querySelectorAll(".dot")
    let index = 0;
    let imgNumber = imgPosition.length
    imgPosition.forEach(function (image, index) {
        image.style.left = index * 100 + "%"
        dotItem[index].addEventListener("click",function(){
            sider(index)
        })
    })
    function imgSilde() {
        index++;
        if(index >= imgNumber){index = 0}
        sider(index)
    }
    function sider(index){
        imgContainer.style.left = "-" + index * 100 + "%"
        const dotActive = document.querySelector('.active')
        dotActive.classList.remove("active")
        dotItem[index].classList.add("active")
    }
    setInterval(imgSilde, 5000)