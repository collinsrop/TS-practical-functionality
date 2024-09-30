document.addEventListener("DOMContentLoaded", ():void=>{
document.querySelectorAll("button").forEach(button => {
	button.addEventListener("click",(event: Event):void=>{
		const inputField = document.querySelector("#input") as HTMLInputElement;
		const target = event.target as HTMLButtonElement;
		const value = target.dataset.value ||"";
		if (inputField) {
            inputField.value = value;
		}

	});
});
});