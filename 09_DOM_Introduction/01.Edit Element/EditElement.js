function editElement(ref, match, replacer) {
    let text = ref.textContent;

    text = text.replaceAll(match, replacer);

    ref.textContent = text;
}

let element = document.getElementById('e1');

editElement(element, 'changed', 'ner');



// 2.

// function edit(ref, match, replacer) {
//   const content = ref.textContent;
//   const matcher = new RegExp(match, 'g');
//   const edited = content.replace(matcher, replacer);
//   ref.textContent = edited;
// }
