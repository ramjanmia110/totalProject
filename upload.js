const DragArea =document.querySelector(".Relax"),
DragText =DragArea.querySelector("h3"),
input =DragArea.querySelector("input"),
button =DragArea.querySelector("button");
let MyFile;

button.onclick =()=>{
    input.click();
}

input.addEventListener('change',function(){
    MyFile =this.files[0];
    DragArea.classList.add("active")
    
    ShowMe()
})

DragArea.addEventListener("dragover",(event)=>{
    event.preventDefault();
    DragArea.classList.add("active");
    DragText.textContent ="Release to Upload File"

})

DragArea.addEventListener("dragleave",(event)=>{
    event.preventDefault();
    DragArea.classList.remove("active");
    DragText.textContent="Drag & Drop";
    
})

DragArea.addEventListener("drop",(event)=>{
    event.preventDefault();
    MyFile =event.dataTransfer.files[0];
   
    ShowMe()
})


 function ShowMe(){
    let filetype =MyFile.type;
    let vaildreg =["image/jpeg","image/png","image/jpg"];
    if(vaildreg.includes(filetype)){
        let fileReader = new FileReader();
        fileReader.onload =()=>{
            let imgUrl =fileReader.result;
            let img =` <img src="${imgUrl}" alt="">`;
            DragArea.innerHTML =img;
           
        } 
        fileReader.readAsDataURL(MyFile);
    }
   
    else{
        alert("This file is not Vaild");
        DragArea.classList.remove("active");
        DragText.textContent="Drag & Drop";
    }
}


