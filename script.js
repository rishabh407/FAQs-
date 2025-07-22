let images=document.querySelectorAll(".part1 img");
let paragraphs=document.querySelectorAll(".part2 p");
console.log(images);
images.forEach(img=>{
    img.addEventListener("click",()=>{
         let targetclassname=img.className;
        //  console.log(targetclassname);
        paragraphs.forEach(paragraph=>{
             if(paragraph.classList.contains(targetclassname))
             {
        
                // clasList.contains("hide") returns true if the paragraph has the hide class (Which means content is not visible)
        
        const isHidden=paragraph.classList.contains("hide");
        
        // The Result is stored in isHidden(Either true or false)
        // Toggle the hide class
        
        paragraph.classList.toggle("hide");
         
        //This line toggles the visibility:
           
          // If .hide was there → it removes  it → paragraph becomes visible.

         // If .hide wasn’t there → it adds it → paragraph becomes hidden.
        // Change image accordingly
        img.src = isHidden
          ? "/assets/images/icon-minus.svg"
          : "/assets/images/icon-plus.svg";
             }
        });
    });
});