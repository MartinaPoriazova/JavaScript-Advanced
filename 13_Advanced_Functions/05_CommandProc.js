function createCommander() {
    let content = '';

    return {
        append: (s) => content += s,
        removeStart: (n) => content = content.substring(n),
        removeEnd: (n) => content = content.substring(0, content.length - n),
        print: () => console.log(content)


    };
}

let commander = createCommander();

commander.append('hello');
commander.append('again');
commander.removeStart(3);
commander.removeEnd(4);
commander.print();


let secondZeroTest = createCommander();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
