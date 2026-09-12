let input=document.querySelector("input");
let add_btn=document.querySelector("button");
let list=document.querySelector("ul");

add_btn.addEventListener('click',(event)=>{
    event.preventDefault();

    let item=input.value;
    input.value="";

    const list_item=document.createElement("li");
    const list_text=document.createElement("span");
    const list_button=document.createElement("button");

    list_item.appendChild(list_text);
    list_text.textContent=item;
    list_item.appendChild(list_button);
    list_button.textContent="delete";
    list.appendChild(list_item);

    list_button.addEventListener('click',()=>{
        list.removeChild(list_item);
    });

    input.focus();
});