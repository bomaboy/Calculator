const textarea = document.getElementById("textarea");

function empty() {
   textarea.innerHTML = "";
}

function display(value) {
   textarea.innerHTML += value;
}

function calculate() {
   const value = textarea.innerHTML;
   const cal = eval(value);
   textarea.innerHTML = cal;
}

function deleteOne() {
   const str = textarea.innerHTML.split("");
   str.pop();
   textarea.innerHTML = str.join("");
}
